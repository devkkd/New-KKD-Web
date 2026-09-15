"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

/* =========================================================
   INITIAL FORM
========================================================= */

const initialForm = {
  fullName: "",
  jobTitle: "",
  mobile: "",
  workEmail: "",
  budget: "",
  city: "",
  details: "",
};

/* =========================================================
   COMPONENT
========================================================= */

export default function ContactQuerySection() {
  const [open, setOpen] =
    useState(false);

  const [form, setForm] =
    useState(initialForm);

  const [loading, setLoading] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const [error, setError] =
    useState("");

  /* =======================================================
     TIMEOUT REF
  ======================================================= */

  const successTimerRef =
    useRef(null);

  /* =======================================================
     MOUNT REF
  ======================================================= */

  const mountedRef =
    useRef(true);

  useEffect(() => {
    mountedRef.current = true;

    return () => {
      mountedRef.current = false;

      if (
        successTimerRef.current !==
        null
      ) {
        window.clearTimeout(
          successTimerRef.current
        );

        successTimerRef.current =
          null;
      }
    };
  }, []);

  /* =========================================================
     OPEN MODAL
  ========================================================= */

  const openModal =
    useCallback(() => {
      setOpen(true);
      setError("");
      setMessage("");
    }, []);

  /* =========================================================
     CLOSE MODAL
  ========================================================= */

  const closeModal =
    useCallback(() => {
      if (loading) {
        return;
      }

      setOpen(false);
      setError("");
      setMessage("");

      if (
        successTimerRef.current !==
        null
      ) {
        window.clearTimeout(
          successTimerRef.current
        );

        successTimerRef.current =
          null;
      }
    }, [loading]);

  /* =========================================================
     FORM CHANGE
  ========================================================= */

  const handleChange =
    useCallback((e) => {
      const {
        name,
        value,
      } = e.target;

      setForm((prev) => {
        if (
          prev[name] === value
        ) {
          return prev;
        }

        return {
          ...prev,
          [name]: value,
        };
      });

      setError(
        (current) =>
          current
            ? ""
            : current
      );

      setMessage(
        (current) =>
          current
            ? ""
            : current
      );
    }, []);

  /* =========================================================
     HANDLE SUBMIT
  ========================================================= */

  const handleSubmit =
    useCallback(
      async (e) => {
        e.preventDefault();

        if (loading) {
          return;
        }

        /*
          Clear old success timer before
          starting a new request.
        */

        if (
          successTimerRef.current !==
          null
        ) {
          window.clearTimeout(
            successTimerRef.current
          );

          successTimerRef.current =
            null;
        }

        setLoading(true);
        setError("");
        setMessage("");

        try {
          const response =
            await fetch(
              "/api/contact",
              {
                method: "POST",

                headers: {
                  "Content-Type":
                    "application/json",
                },

                body: JSON.stringify({
                  ...form,
                  source:
                    "contact-modal",
                }),
              }
            );

          /*
            Don't blindly call response.json().
            If Next/server/proxy returns an HTML
            error page, JSON parsing itself should
            not crash the form.
          */

          const contentType =
            response.headers.get(
              "content-type"
            ) || "";

          let data = null;

          if (
            contentType.includes(
              "application/json"
            )
          ) {
            data =
              await response.json();
          } else {
            const text =
              await response.text();

            data = {
              success: false,
              message:
                text ||
                "Unable to send enquiry.",
            };
          }

          if (!response.ok) {
            throw new Error(
              data?.message ||
                "Unable to send enquiry."
            );
          }

          if (
            !mountedRef.current
          ) {
            return;
          }

          setMessage(
            "Thank you! Your enquiry has been sent successfully."
          );

          setError("");

          setForm(
            initialForm
          );

          /*
            Auto close after same delay.
          */

          successTimerRef.current =
            window.setTimeout(
              () => {
                if (
                  !mountedRef.current
                ) {
                  return;
                }

                setOpen(false);
                setMessage("");

                successTimerRef.current =
                  null;
              },
              1600
            );
        } catch (error) {
          console.error(
            "CONTACT MODAL ERROR:",
            error
          );

          if (
            !mountedRef.current
          ) {
            return;
          }

          setError(
            error?.message ||
              "Something went wrong. Please try again."
          );

          setMessage("");
        } finally {
          if (
            mountedRef.current
          ) {
            setLoading(false);
          }
        }
      },
      [form, loading]
    );

  /* =========================================================
     MODAL KEYBOARD + BODY SCROLL
  ========================================================= */

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const onKeyDown =
      (e) => {
        if (
          e.key ===
          "Escape"
        ) {
          closeModal();
        }
      };

    document.addEventListener(
      "keydown",
      onKeyDown
    );

    const previousOverflow =
      document.body.style
        .overflow;

    document.body.style.overflow =
      "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        onKeyDown
      );

      document.body.style.overflow =
        previousOverflow;
    };
  }, [
    open,
    closeModal,
  ]);

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <>
      {/* =====================================================
          BANNER
      ===================================================== */}

      <section className="cq-banner">
        <div className="cq-banner-box">
          <h3 className="cq-banner-title">
            Still Have Questions?
            Let&apos;s Talk.
          </h3>

          <button
            type="button"
            className="cq-banner-btn"
            onClick={
              openModal
            }
          >
            Contact Us
          </button>
        </div>
      </section>

      {/* =====================================================
          MODAL
      ===================================================== */}

      {open && (
        <div
          className="cq-overlay"
          onMouseDown={(e) => {
            if (
              e.target ===
              e.currentTarget
            ) {
              closeModal();
            }
          }}
        >
          <div
            className="cq-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-query-title"
          >
            {/* =============================================
                CLOSE
            ============================================== */}

            <button
              type="button"
              className="cq-close"
              onClick={
                closeModal
              }
              disabled={loading}
              aria-label="Close"
            >
              ✕
            </button>

            {/* =============================================
                TITLE
            ============================================== */}

            <h3
              id="contact-query-title"
              className="cq-modal-title"
            >
              Still Have Questions?
              Let&apos;s Talk.
            </h3>

            <p className="cq-modal-desc">
              If you didn&apos;t find what you need,
              share a few details below. Our team
              will get back to you shortly.
            </p>

            {/* =============================================
                FORM
            ============================================== */}

            <form
              className="cq-form"
              onSubmit={
                handleSubmit
              }
            >
              <div className="cq-grid">
                {/* =====================================
                    FULL NAME
                ====================================== */}

                <div className="cq-field">
                  <label htmlFor="cq-fullName">
                    Full Name
                  </label>

                  <input
                    id="cq-fullName"
                    name="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={
                      form.fullName
                    }
                    onChange={
                      handleChange
                    }
                    required
                    disabled={
                      loading
                    }
                    autoComplete="name"
                  />
                </div>

                {/* =====================================
                    JOB TITLE
                ====================================== */}

                <div className="cq-field">
                  <label htmlFor="cq-jobTitle">
                    Job Title (Optional)
                  </label>

                  <input
                    id="cq-jobTitle"
                    name="jobTitle"
                    type="text"
                    placeholder="Your role or designation"
                    value={
                      form.jobTitle
                    }
                    onChange={
                      handleChange
                    }
                    disabled={
                      loading
                    }
                    autoComplete="organization-title"
                  />
                </div>

                {/* =====================================
                    MOBILE
                ====================================== */}

                <div className="cq-field">
                  <label htmlFor="cq-mobile">
                    Mobile / WhatsApp Number
                  </label>

                  <input
                    id="cq-mobile"
                    name="mobile"
                    type="tel"
                    inputMode="tel"
                    placeholder="Enter your mobile/whatsapp Number"
                    value={
                      form.mobile
                    }
                    onChange={
                      handleChange
                    }
                    required
                    disabled={
                      loading
                    }
                    autoComplete="tel"
                  />
                </div>

                {/* =====================================
                    EMAIL
                ====================================== */}

                <div className="cq-field">
                  <label htmlFor="cq-workEmail">
                    Work Email
                  </label>

                  <input
                    id="cq-workEmail"
                    name="workEmail"
                    type="email"
                    placeholder="Enter your business email address"
                    value={
                      form.workEmail
                    }
                    onChange={
                      handleChange
                    }
                    required
                    disabled={
                      loading
                    }
                    autoComplete="email"
                  />
                </div>

                {/* =====================================
                    BUDGET
                ====================================== */}

                <div className="cq-field">
                  <label htmlFor="cq-budget">
                    Estimated Budget
                  </label>

                  <input
                    id="cq-budget"
                    name="budget"
                    type="text"
                    placeholder="Enter your budget range"
                    value={
                      form.budget
                    }
                    onChange={
                      handleChange
                    }
                    disabled={
                      loading
                    }
                  />
                </div>

                {/* =====================================
                    CITY
                ====================================== */}

                <div className="cq-field">
                  <label htmlFor="cq-city">
                    City
                  </label>

                  <input
                    id="cq-city"
                    name="city"
                    type="text"
                    placeholder="Enter your city name"
                    value={
                      form.city
                    }
                    onChange={
                      handleChange
                    }
                    disabled={
                      loading
                    }
                    autoComplete="address-level2"
                  />
                </div>

                {/* =====================================
                    DETAILS
                ====================================== */}

                <div className="cq-field cq-field--full">
                  <label htmlFor="cq-details">
                    Project Details
                  </label>

                  <input
                    id="cq-details"
                    name="details"
                    type="text"
                    placeholder="Briefly describe your goals, timeline, and key requirements"
                    value={
                      form.details
                    }
                    onChange={
                      handleChange
                    }
                    disabled={
                      loading
                    }
                  />
                </div>
              </div>

              {/* =========================================
                  ERROR
              ========================================== */}

              {error && (
                <p
                  className="cq-message cq-error"
                  role="alert"
                >
                  {error}
                </p>
              )}

              {/* =========================================
                  SUCCESS
              ========================================== */}

              {message && (
                <p
                  className="cq-message cq-success"
                  role="status"
                >
                  {message}
                </p>
              )}

              {/* =========================================
                  NOTE
              ========================================== */}

              <p className="cq-note">
                <span className="cq-note-arrow">
                  ▲
                </span>

                Response within 30 minutes.
                100% NDA-protected.
              </p>

              {/* =========================================
                  SUBMIT
              ========================================== */}

              <div className="cq-submit-wrap">
                <button
                  type="submit"
                  className="cq-submit"
                  disabled={
                    loading
                  }
                >
                  {loading
                    ? "Sending..."
                    : "Request Consultation"}

                  {!loading && (
                    <span>
                      ▲
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        /* =====================================================
           GLOBAL FORM FONT
        ===================================================== */

        .cq-banner,
        .cq-overlay,
        .cq-modal {
          font-family:
            "Britti Sans Trial",
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }

        /* =====================================================
           BANNER
        ===================================================== */

        .cq-banner {
          width:
            100%;

          display:
            flex;

          justify-content:
            center;

          align-items:
            center;

          padding:
            clamp(
              48px,
              7vw,
              78px
            )
            20px;

          box-sizing:
            border-box;

          background:
            linear-gradient(
              90deg,
              #0180FD 0%,
              #0021AF 100%
            );

          color:
            #FFFFFF;
        }

        .cq-banner-box {
          width:
            100%;

          max-width:
            1000px;

          display:
            flex;

          flex-direction:
            column;

          align-items:
            center;

          justify-content:
            center;

          text-align:
            center;
        }

        .cq-banner-title {
          margin:
            0 0 20px;

          font-size:
            clamp(
              20px,
              3vw,
              30px
            );

          line-height:
            1.15;

          font-weight:
            600;

          letter-spacing:
            -0.03em;

          color:
            #FFFFFF;
        }

        .cq-banner-btn {
          width:
            186px;

          height:
            56px;

          display:
            inline-flex;

          align-items:
            center;

          justify-content:
            center;

          border:
            none;

          border-radius:
            999px;

          background:
            #FFFFFF;

          color:
            #0E0E0E;

          font-family:
            inherit;

          font-size:
            16px;

          font-weight:
            600;

          cursor:
            pointer;

          transition:
            transform
            0.25s ease,
            box-shadow
            0.25s ease;
        }

        .cq-banner-btn:hover {
          transform:
            translateY(
              -2px
            );

          box-shadow:
            0 12px 26px
            rgba(
              0,
              0,
              0,
              0.18
            );
        }

        /* =====================================================
           OVERLAY
        ===================================================== */

        .cq-overlay {
          position:
            fixed;

          inset:
            0;

          background:
            rgba(
              4,
              10,
              34,
              0.55
            );

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          padding:
            20px;

          z-index:
            1000;
        }

        /* =====================================================
           MODAL
        ===================================================== */

        .cq-modal {
          position:
            relative;

          width:
            100%;

          max-width:
            900px;

          max-height:
            92vh;

          overflow-y:
            auto;

          border-radius:
            22px;

          padding:
            44px
            48px
            40px;

          background:
            linear-gradient(
              160deg,
              #3D8BFD 0%,
              #0180FD 35%,
              #0B33C4 75%,
              #0021AF 100%
            );

          color:
            #FFFFFF;

          box-sizing:
            border-box;

          overscroll-behavior:
            contain;

          -webkit-overflow-scrolling:
            touch;
        }

        /* =====================================================
           CLOSE
        ===================================================== */

        .cq-close {
          position:
            absolute;

          top:
            18px;

          right:
            20px;

          width:
            34px;

          height:
            34px;

          border-radius:
            50%;

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

          color:
            #FFFFFF;

          font-size:
            14px;

          cursor:
            pointer;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;
        }

        .cq-close:disabled {
          cursor:
            not-allowed;

          opacity:
            0.6;
        }

        /* =====================================================
           MODAL TITLE
        ===================================================== */

        .cq-modal-title {
          margin:
            0 0 12px;

          text-align:
            center;

          font-size:
            clamp(
              21px,
              3vw,
              28px
            );

          line-height:
            1.2;

          font-weight:
            800;

          color:
            #FFFFFF;
        }

        .cq-modal-desc {
          margin:
            0 auto 32px;

          max-width:
            560px;

          text-align:
            center;

          font-size:
            14.5px;

          line-height:
            1.6;

          color:
            rgba(
              255,
              255,
              255,
              0.85
            );
        }

        /* =====================================================
           FORM GRID
        ===================================================== */

        .cq-grid {
          display:
            grid;

          grid-template-columns:
            1fr 1fr;

          column-gap:
            48px;

          row-gap:
            26px;
        }

        .cq-field {
          display:
            flex;

          flex-direction:
            column;

          min-width:
            0;
        }

        .cq-field--full {
          grid-column:
            1 / -1;
        }

        .cq-field label {
          font-size:
            12.5px;

          font-weight:
            700;

          color:
            #FFFFFF;

          margin-bottom:
            10px;
        }

        .cq-field input {
          width:
            100%;

          font-family:
            inherit;

          background:
            transparent;

          border:
            none;

          border-bottom:
            1px solid
            rgba(
              255,
              255,
              255,
              0.45
            );

          color:
            #FFFFFF;

          font-size:
            14.5px;

          padding:
            4px
            2px
            10px;

          outline:
            none;

          transition:
            border-color
            0.2s ease;

          box-sizing:
            border-box;

          min-width:
            0;
        }

        .cq-field input::placeholder {
          color:
            rgba(
              255,
              255,
              255,
              0.65
            );
        }

        .cq-field input:focus {
          border-color:
            #FFFFFF;
        }

        .cq-field input:disabled {
          opacity:
            0.65;

          cursor:
            not-allowed;
        }

        /* =====================================================
           MESSAGES
        ===================================================== */

        .cq-message {
          margin:
            18px 0 0;

          font-size:
            13px;

          line-height:
            1.5;

          text-align:
            left;
        }

        .cq-error {
          color:
            #FFE2E2;
        }

        .cq-success {
          color:
            #FFFFFF;
        }

        /* =====================================================
           NOTE
        ===================================================== */

        .cq-note {
          margin:
            28px 0 0;

          font-size:
            13px;

          color:
            rgba(
              255,
              255,
              255,
              0.85
            );

          display:
            flex;

          align-items:
            center;

          gap:
            6px;
        }

        .cq-note-arrow {
          font-size:
            10px;
        }

        /* =====================================================
           SUBMIT
        ===================================================== */

        .cq-submit-wrap {
          display:
            flex;

          justify-content:
            center;

          margin-top:
            28px;
        }

        .cq-submit {
          display:
            inline-flex;

          align-items:
            center;

          justify-content:
            center;

          gap:
            8px;

          border:
            none;

          border-radius:
            999px;

          padding:
            14px
            30px;

          font-family:
            inherit;

          font-size:
            14.5px;

          font-weight:
            700;

          color:
            #0E0E0E;

          background:
            #FFFFFF;

          cursor:
            pointer;

          transition:
            transform
            0.2s ease,
            box-shadow
            0.2s ease;
        }

        .cq-submit:hover {
          transform:
            translateY(
              -1px
            );

          box-shadow:
            0 10px 24px
            rgba(
              0,
              0,
              0,
              0.25
            );
        }

        .cq-submit:disabled {
          opacity:
            0.75;

          cursor:
            not-allowed;

          transform:
            none;
        }

        /* =====================================================
           TABLET / MOBILE
        ===================================================== */

        @media (max-width: 768px) {
          .cq-banner {
            padding:
              44px
              20px
              50px;
          }

          .cq-banner-title {
            font-size:
              23px;
          }

          .cq-banner-btn {
            width:
              170px;

            height:
              52px;

            font-size:
              14px;
          }

          .cq-grid {
            grid-template-columns:
              1fr;

            row-gap:
              22px;
          }

          .cq-field--full {
            grid-column:
              auto;
          }

          .cq-modal {
            border-radius:
              18px;

            padding:
              34px
              20px
              30px;
          }

          .cq-modal-desc {
            margin-bottom:
              24px;
          }
        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 480px) {
          .cq-banner {
            padding:
              40px
              20px
              46px;
          }

          .cq-banner-title {
            font-size:
              21px;
          }

          .cq-banner-btn {
            width:
              160px;

            height:
              50px;

            font-size:
              14px;
          }

          .cq-modal {
            max-height:
              94vh;

            padding:
              32px
              16px
              26px;

            border-radius:
              16px;
          }

          .cq-close {
            top:
              12px;

            right:
              12px;
          }

          .cq-modal-title {
            padding:
              0 35px;

            font-size:
              22px;
          }

          .cq-modal-desc {
            font-size:
              13px;

            line-height:
              1.55;
          }

          .cq-field label {
            font-size:
              13px;
          }

          .cq-field input {
            font-size:
              14px;
          }

          .cq-note {
            font-size:
              12px;
          }

          .cq-submit {
            width:
              100%;

            max-width:
              240px;

            min-height:
              46px;

            font-size:
              13px;
          }
        }

        /* =====================================================
           TOUCH
        ===================================================== */

        @media (hover: none) {
          .cq-banner-btn:hover,
          .cq-submit:hover {
            transform:
              none;

            box-shadow:
              none;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (
          prefers-reduced-motion:
            reduce
        ) {
          .cq-banner-btn,
          .cq-submit,
          .cq-field input {
            transition:
              none;
          }

          .cq-banner-btn:hover,
          .cq-submit:hover {
            transform:
              none;

            box-shadow:
              none;
          }
        }
      `}</style>
    </>
  );
}