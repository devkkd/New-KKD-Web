"use client";

import {
  useEffect,
  useState,
} from "react";

export default function ResumeModal({
  open,
  onClose,
}) {
  const [form, setForm] =
    useState({
      name: "",
      email: "",
      phone: "",
    });

  const [resume, setResume] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const [error, setError] =
    useState("");

  useEffect(() => {
    if (!open) return;

    const handleEscape = (event) => {
      if (
        event.key === "Escape" &&
        !loading
      ) {
        onClose();
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );

      document.body.style.overflow =
        previousOverflow;
    };
  }, [open, loading, onClose]);

  if (!open) {
    return null;
  }

  const handleChange = (event) => {
    const {
      name,
      value,
    } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
    setMessage("");
  };

  const handleFileChange = (event) => {
    const file =
      event.target.files?.[0];

    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      setResume(null);

      setError(
        "Only PDF, DOC and DOCX files are allowed."
      );

      event.target.value = "";

      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setResume(null);

      setError(
        "Resume must be smaller than 5MB."
      );

      event.target.value = "";

      return;
    }

    setResume(file);
    setError("");
    setMessage("");
  };

  const handleSubmit = async (
    event
  ) => {
    event.preventDefault();

    if (loading) return;

    if (!resume) {
      setError(
        "Please select your resume."
      );

      return;
    }

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const formData =
        new FormData();

      formData.append(
        "name",
        form.name
      );

      formData.append(
        "email",
        form.email
      );

      formData.append(
        "phone",
        form.phone
      );

      formData.append(
        "resume",
        resume
      );

      const response =
        await fetch(
          "/api/resume",
          {
            method: "POST",
            body: formData,
          }
        );

      const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Unable to send resume."
        );
      }

      setMessage(
        "Resume sent successfully."
      );

      setForm({
        name: "",
        email: "",
        phone: "",
      });

      setResume(null);

      setTimeout(() => {
        onClose();
        setMessage("");
      }, 1500);
    } catch (error) {
      console.error(
        "RESUME FORM ERROR:",
        error
      );

      setError(
        error.message ||
          "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="resume-overlay"
      onMouseDown={(event) => {
        if (
          event.target ===
            event.currentTarget &&
          !loading
        ) {
          onClose();
        }
      }}
    >
      <div
        className="resume-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-modal-title"
      >

        <button
          type="button"
          className="resume-close"
          onClick={onClose}
          disabled={loading}
          aria-label="Close"
        >
          ✕
        </button>

        <h2
          id="resume-modal-title"
          className="resume-title"
        >
          Send Your Resume
        </h2>

        <p className="resume-description">
          Share your details and upload your
          resume. We&apos;ll get in touch if a
          suitable opportunity comes up.
        </p>

        <form
          className="resume-form"
          onSubmit={handleSubmit}
        >

          <div className="resume-field">
            <label htmlFor="resume-name">
              Full Name
            </label>

            <input
              id="resume-name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>

          <div className="resume-field">
            <label htmlFor="resume-email">
              Email
            </label>

            <input
              id="resume-email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>

          <div className="resume-field">
            <label htmlFor="resume-phone">
              Phone
            </label>

            <input
              id="resume-phone"
              name="phone"
              type="tel"
              inputMode="tel"
              placeholder="Enter your phone number"
              value={form.phone}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          <div className="resume-field">
            <label htmlFor="resume-file">
              Resume
            </label>

            <input
              id="resume-file"
              type="file"
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={
                handleFileChange
              }
              disabled={loading}
              required
            />

            <small className="resume-file-help">
              PDF, DOC or DOCX · Max 5MB
            </small>

            {resume && (
              <span className="resume-file-name">
                {resume.name}
              </span>
            )}
          </div>

          {error && (
            <p
              className="resume-message resume-error"
              role="alert"
            >
              {error}
            </p>
          )}

          {message && (
            <p
              className="resume-message resume-success"
              role="status"
            >
              {message}
            </p>
          )}

          <button
            type="submit"
            className="resume-submit"
            disabled={loading}
          >
            {loading
              ? "Sending..."
              : "Send Resume"}
          </button>

        </form>
      </div>

      <style>{`

        .resume-overlay {
          position: fixed;

          inset: 0;

          z-index: 2000;

          padding: 20px;

          display: flex;

          align-items: center;
          justify-content: center;

          background:
            rgba(
              4,
              10,
              34,
              0.56
            );

          font-family:
            "Britti Sans Trial",
            Arial,
            Helvetica,
            sans-serif;
        }

        .resume-modal {
          position: relative;

          width: 100%;

          max-width: 560px;

          max-height: 92vh;

          overflow-y: auto;

          padding:
            40px 34px 34px;

          border-radius:
            20px;

          background:
            linear-gradient(
              160deg,
              #3D8BFD 0%,
              #0180FD 35%,
              #0B33C4 75%,
              #0021AF 100%
            );

          color: #FFFFFF;

          box-sizing: border-box;
        }

        .resume-close {
          position: absolute;

          top: 14px;
          right: 16px;

          width: 36px;
          height: 36px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 50%;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.4
            );

          background:
            rgba(
              255,
              255,
              255,
              0.08
            );

          color: #FFFFFF;

          cursor: pointer;

          font-size: 15px;
        }

        .resume-close:disabled {
          opacity: 0.6;

          cursor:
            not-allowed;
        }

        .resume-title {
          margin:
            0 45px 12px 0;

          font-size:
            30px;

          line-height:
            1.2;

          font-weight:
            800;

          letter-spacing:
            -0.03em;
        }

        .resume-description {
          margin:
            0 0 26px;

          font-size:
            15px;

          line-height:
            1.6;

          color:
            rgba(
              255,
              255,
              255,
              0.9
            );
        }

        .resume-form {
          display:
            flex;

          flex-direction:
            column;

          gap:
            18px;
        }

        .resume-field {
          display:
            flex;

          flex-direction:
            column;
        }

        .resume-field label {
          margin-bottom:
            8px;

          font-size:
            13px;

          font-weight:
            700;

          color:
            #FFFFFF;
        }

        .resume-field input[type="text"],
        .resume-field input[type="email"],
        .resume-field input[type="tel"] {
          width: 100%;

          height: 44px;

          padding:
            0 2px 9px;

          border: 0;

          border-bottom:
            1px solid
            rgba(
              255,
              255,
              255,
              0.5
            );

          outline: none;

          background:
            transparent;

          color:
            #FFFFFF;

          font-family:
            inherit;

          font-size:
            14px;
        }

        .resume-field input::placeholder {
          color:
            rgba(
              255,
              255,
              255,
              0.65
            );
        }

        .resume-field input[type="file"] {
          width: 100%;

          padding: 12px;

          border-radius:
            10px;

          border:
            1px dashed
            rgba(
              255,
              255,
              255,
              0.6
            );

          background:
            rgba(
              255,
              255,
              255,
              0.08
            );

          color:
            #FFFFFF;

          font-family:
            inherit;

          font-size:
            13px;

          cursor: pointer;
        }

        .resume-file-help {
          margin-top:
            7px;

          font-size:
            11px;

          color:
            rgba(
              255,
              255,
              255,
              0.78
            );
        }

        .resume-file-name {
          display:
            block;

          margin-top:
            7px;

          font-size:
            12px;

          font-weight:
            600;

          word-break:
            break-word;

          color:
            #FFFFFF;
        }

        .resume-message {
          margin:
            0;

          font-size:
            13px;

          line-height:
            1.5;
        }

        .resume-error {
          color:
            #FFE1E1;
        }

        .resume-success {
          color:
            #FFFFFF;
        }

        .resume-submit {
          width: 190px;

          height: 48px;

          margin:
            8px auto 0;

          border: none;

          border-radius:
            999px;

          background:
            #FFFFFF;

          color:
            #0E0E0E;

          font-family:
            inherit;

          font-size:
            14px;

          font-weight:
            700;

          cursor:
            pointer;
        }

        .resume-submit:disabled {
          opacity: 0.7;

          cursor:
            not-allowed;
        }

        @media (max-width: 600px) {
          .resume-overlay {
            padding:
              14px;
          }

          .resume-modal {
            max-height:
              94vh;

            padding:
              34px 20px 26px;

            border-radius:
              16px;
          }

          .resume-title {
            font-size:
              24px;
          }

          .resume-description {
            font-size:
              14px;
          }

          .resume-field label {
            font-size:
              13px;
          }

          .resume-field input[type="text"],
          .resume-field input[type="email"],
          .resume-field input[type="tel"] {
            font-size:
              14px;
          }

          .resume-submit {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}