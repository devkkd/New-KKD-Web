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
    const body = await request.json();

    const {
      fullName = "",
      jobTitle = "",
      mobile = "",
      workEmail = "",
      budget = "",
      city = "",
      details = "",
      source = "website",
    } = body;

    if (!fullName.trim()) {
      return Response.json(
        {
          success: false,
          message: "Full name is required.",
        },
        { status: 400 }
      );
    }

    if (!mobile.trim()) {
      return Response.json(
        {
          success: false,
          message: "Mobile number is required.",
        },
        { status: 400 }
      );
    }

    if (!workEmail.trim()) {
      return Response.json(
        {
          success: false,
          message: "Work email is required.",
        },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(fullName);
    const safeJobTitle = escapeHtml(jobTitle);
    const safeMobile = escapeHtml(mobile);
    const safeEmail = escapeHtml(workEmail);
    const safeBudget = escapeHtml(budget);
    const safeCity = escapeHtml(city);
    const safeDetails = escapeHtml(details);
    const safeSource = escapeHtml(source);

    /* =====================================================
       MAIL TO BUSINESS
    ===================================================== */

    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to: process.env.MAIL_TO,
      replyTo: workEmail,

      subject:
        `New Website Enquiry - ${fullName}`,

      html: `
        <div style="
          font-family: Arial, Helvetica, sans-serif;
          max-width: 700px;
          margin: 0 auto;
          color: #0E0E0E;
        ">

          <h2 style="
            margin-bottom: 24px;
          ">
            New Website Enquiry
          </h2>

          <table
            style="
              width: 100%;
              border-collapse: collapse;
            "
          >

            <tr>
              <td style="
                padding: 10px;
                border: 1px solid #ddd;
                font-weight: 700;
              ">
                Source
              </td>

              <td style="
                padding: 10px;
                border: 1px solid #ddd;
              ">
                ${safeSource}
              </td>
            </tr>

            <tr>
              <td style="
                padding: 10px;
                border: 1px solid #ddd;
                font-weight: 700;
              ">
                Full Name
              </td>

              <td style="
                padding: 10px;
                border: 1px solid #ddd;
              ">
                ${safeName}
              </td>
            </tr>

            <tr>
              <td style="
                padding: 10px;
                border: 1px solid #ddd;
                font-weight: 700;
              ">
                Job Title
              </td>

              <td style="
                padding: 10px;
                border: 1px solid #ddd;
              ">
                ${safeJobTitle || "-"}
              </td>
            </tr>

            <tr>
              <td style="
                padding: 10px;
                border: 1px solid #ddd;
                font-weight: 700;
              ">
                Mobile / WhatsApp
              </td>

              <td style="
                padding: 10px;
                border: 1px solid #ddd;
              ">
                ${safeMobile}
              </td>
            </tr>

            <tr>
              <td style="
                padding: 10px;
                border: 1px solid #ddd;
                font-weight: 700;
              ">
                Work Email
              </td>

              <td style="
                padding: 10px;
                border: 1px solid #ddd;
              ">
                ${safeEmail}
              </td>
            </tr>

            <tr>
              <td style="
                padding: 10px;
                border: 1px solid #ddd;
                font-weight: 700;
              ">
                Estimated Budget
              </td>

              <td style="
                padding: 10px;
                border: 1px solid #ddd;
              ">
                ${safeBudget || "-"}
              </td>
            </tr>

            <tr>
              <td style="
                padding: 10px;
                border: 1px solid #ddd;
                font-weight: 700;
              ">
                City
              </td>

              <td style="
                padding: 10px;
                border: 1px solid #ddd;
              ">
                ${safeCity || "-"}
              </td>
            </tr>

          </table>

          <div style="
            margin-top: 24px;
            padding: 18px;
            border-radius: 12px;
            background: #F3F8FF;
          ">

            <h3 style="margin-top: 0;">
              Project Details
            </h3>

            <p style="
              white-space: pre-wrap;
              line-height: 1.7;
            ">
              ${safeDetails || "-"}
            </p>

          </div>

        </div>
      `,
    });

    /* =====================================================
       AUTO REPLY TO CUSTOMER
    ===================================================== */

    await transporter.sendMail({
      from:
        process.env.MAIL_FROM ||
        process.env.SMTP_USER,

      to: workEmail,

      subject:
        "We received your enquiry - Kontent Kraft Digital",

      html: `
        <div style="
          font-family: Arial, Helvetica, sans-serif;
          max-width: 650px;
          margin: 0 auto;
          color: #0E0E0E;
          line-height: 1.7;
        ">

          <h2>
            Thank you for contacting
            Kontent Kraft Digital
          </h2>

          <p>
            Hi ${safeName},
          </p>

          <p>
            We have received your enquiry successfully.
            Our team will review the details and get back
            to you shortly.
          </p>

          <p>
            We appreciate you reaching out to us.
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
        "Your enquiry has been sent successfully.",
    });
  } catch (error) {
    console.error(
      "CONTACT SMTP ERROR:",
      error
    );

    return Response.json(
      {
        success: false,
        message:
          "Unable to send your enquiry right now. Please try again.",
      },
      { status: 500 }
    );
  }
}