import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 465),
  secure:
    String(process.env.SMTP_SECURE).toLowerCase() === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request) {
  try {
    const formData =
      await request.formData();

    const name =
      String(
        formData.get("name") || ""
      ).trim();

    const email =
      String(
        formData.get("email") || ""
      ).trim();

    const phone =
      String(
        formData.get("phone") || ""
      ).trim();

    const resume =
      formData.get("resume");

    if (!name) {
      return Response.json(
        {
          success: false,
          message: "Name is required.",
        },
        { status: 400 }
      );
    }

    if (!email) {
      return Response.json(
        {
          success: false,
          message: "Email is required.",
        },
        { status: 400 }
      );
    }

    if (!(resume instanceof File)) {
      return Response.json(
        {
          success: false,
          message:
            "Please select your resume.",
        },
        { status: 400 }
      );
    }

    /* =====================================================
       ALLOWED FILE TYPES
    ===================================================== */

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(resume.type)) {
      return Response.json(
        {
          success: false,
          message:
            "Only PDF, DOC and DOCX files are allowed.",
        },
        { status: 400 }
      );
    }

    /* =====================================================
       MAX 5MB
    ===================================================== */

    const maxSize =
      5 * 1024 * 1024;

    if (resume.size > maxSize) {
      return Response.json(
        {
          success: false,
          message:
            "Resume must be smaller than 5MB.",
        },
        { status: 400 }
      );
    }

    const buffer =
      Buffer.from(
        await resume.arrayBuffer()
      );

    const safeName =
      escapeHtml(name);

    const safeEmail =
      escapeHtml(email);

    const safePhone =
      escapeHtml(phone);

    /* =====================================================
       SEND TO BUSINESS
    ===================================================== */

    await transporter.sendMail({
      from:
        process.env.MAIL_FROM ||
        process.env.SMTP_USER,

      to:
        process.env.MAIL_TO,

      replyTo:
        email,

      subject:
        `New Resume Submission - ${name}`,

      html: `
        <div style="
          font-family: Arial, Helvetica, sans-serif;
          max-width: 700px;
          margin: 0 auto;
          color: #0E0E0E;
          line-height: 1.6;
        ">

          <h2>
            New Career Resume
          </h2>

          <p>
            <strong>Name:</strong>
            ${safeName}
          </p>

          <p>
            <strong>Email:</strong>
            ${safeEmail}
          </p>

          <p>
            <strong>Phone:</strong>
            ${safePhone || "-"}
          </p>

          <p>
            Resume is attached to this email.
          </p>

        </div>
      `,

      attachments: [
        {
          filename:
            resume.name,

          content:
            buffer,

          contentType:
            resume.type,
        },
      ],
    });

    /* =====================================================
       AUTO REPLY TO APPLICANT
    ===================================================== */

    await transporter.sendMail({
      from:
        process.env.MAIL_FROM ||
        process.env.SMTP_USER,

      to:
        email,

      subject:
        "Application received - Kontent Kraft Digital",

      html: `
        <div style="
          font-family: Arial, Helvetica, sans-serif;
          max-width: 650px;
          margin: 0 auto;
          color: #0E0E0E;
          line-height: 1.7;
        ">

          <h2>
            Application Received
          </h2>

          <p>
            Hi ${safeName},
          </p>

          <p>
            Thank you for sharing your resume
            with Kontent Kraft Digital.
          </p>

          <p>
            We have received your application
            successfully. Our team will review
            your profile and contact you if there
            is a suitable opportunity.
          </p>

          <p>
            Regards,<br />
            <strong>
              Kontent Kraft Digital
            </strong>
          </p>

        </div>
      `,
    });

    return Response.json({
      success: true,
      message:
        "Resume sent successfully.",
    });
  } catch (error) {
    console.error(
      "RESUME SMTP ERROR:",
      error
    );

    return Response.json(
      {
        success: false,
        message:
          "Unable to send resume right now. Please try again.",
      },
      { status: 500 }
    );
  }
}