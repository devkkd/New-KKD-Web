"use client";

import {
  useState,
  useCallback,
  useEffect,
} from "react";

const initialForm = {
  fullName: "",
  jobTitle: "",
  mobile: "",
  workEmail: "",
  budget: "",
  city: "",
  details: "",
};

export default function ContactQuerySection() {
  const [open, setOpen] = useState(false);

  const [form, setForm] =
    useState(initialForm);

  const openModal = useCallback(
    () => setOpen(true),
    []
  );

  const closeModal = useCallback(
    () => setOpen(false),
    []
  );

  const handleChange = (e) => {
    const {
      name,
      value,
    } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: hook up actual submission/API call here.

    setForm(initialForm);

    setOpen(false);
  };

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener(
      "keydown",
      onKeyDown
    );

    const prevOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        onKeyDown
      );

      document.body.style.overflow =
        prevOverflow;
    };
  }, [open]);

  return (
    <>
      {/* =====================================================
          FULL WIDTH CTA BANNER
      ===================================================== */}

      <section className="cq-banner">
        <div className="cq-banner-box">
          <h3 className="cq-banner-title">
            Still Have Questions? Let&apos;s Talk.
          </h3>

          {/* <p className="cq-banner-desc">
            If you didn&apos;t find what you need,
            share a few details below. Our team will
            get back to you shortly.
          </p> */}

          <button
            type="button"
            className="cq-banner-btn"
            onClick={openModal}
          >
            Contact Us
          </button>
        </div>
      </section>

      {/* =====================================================
          MODAL / POPUP
          UNCHANGED
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
          >
            <button
              type="button"
              className="cq-close"
              onClick={closeModal}
              aria-label="Close"
            >
              ✕
            </button>

            <h3 className="cq-modal-title">
              Still Have Questions? Let&apos;s Talk.
            </h3>

            <p className="cq-modal-desc">
              If you didn&apos;t find what you need,
              share a few details below. Our team will
              get back to you shortly.
            </p>

            <form
              className="cq-form"
              onSubmit={handleSubmit}
            >
              <div className="cq-grid">
                <div className="cq-field">
                  <label htmlFor="fullName">
                    Full Name
                  </label>

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={form.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="cq-field">
                  <label htmlFor="jobTitle">
                    Job Title (Optional)
                  </label>

                  <input
                    id="jobTitle"
                    name="jobTitle"
                    type="text"
                    placeholder="Your role or designation"
                    value={form.jobTitle}
                    onChange={handleChange}
                  />
                </div>

                <div className="cq-field">
                  <label htmlFor="mobile">
                    Mobile /WhatsApp Number
                  </label>

                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    placeholder="Enter your mobile/whatsapp Number"
                    value={form.mobile}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="cq-field">
                  <label htmlFor="workEmail">
                    Work Email
                  </label>

                  <input
                    id="workEmail"
                    name="workEmail"
                    type="email"
                    placeholder="Enter your business email address"
                    value={form.workEmail}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="cq-field">
                  <label htmlFor="budget">
                    Estimated Budget
                  </label>

                  <input
                    id="budget"
                    name="budget"
                    type="text"
                    placeholder="Enter your budget range"
                    value={form.budget}
                    onChange={handleChange}
                  />
                </div>

                <div className="cq-field">
                  <label htmlFor="city">
                    City
                  </label>

                  <input
                    id="city"
                    name="city"
                    type="text"
                    placeholder="Enter your city name"
                    value={form.city}
                    onChange={handleChange}
                  />
                </div>

                <div className="cq-field cq-field--full">
                  <label htmlFor="details">
                    Project Details
                  </label>

                  <input
                    id="details"
                    name="details"
                    type="text"
                    placeholder="Briefly describe your goals, timeline, and key requirements"
                    value={form.details}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <p className="cq-note">
                <span className="cq-note-arrow">
                  ▲
                </span>

                Response within 30 minutes.
                100% NDA-protected.
              </p>

              <div className="cq-submit-wrap">
                <button
                  type="submit"
                  className="cq-submit"
                >
                  Request Consultation
                  <span>▲</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        /* =========================================================
           COMMON
        ========================================================= */

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

        /* =========================================================
           FULL WIDTH GRADIENT BANNER
        ========================================================= */

        .cq-banner {
          width: 100%;

          display: flex;

          justify-content: center;

          align-items: center;

          padding:
            clamp(
              48px,
              7vw,
              78px
            )
            20px;

          box-sizing: border-box;

          background:
            linear-gradient(
              90deg,
              #0180FD 0%,
              #0021AF 100%
            );

          color: #FFFFFF;
        }

        /* =========================================================
           BANNER CONTENT
           
           NO BOX / NO BORDER
           
           Full width background is on banner itself.
        ========================================================= */

        .cq-banner-box {
          width: 100%;

          max-width: 1000px;

          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: center;

          text-align: center;

          padding:
            0;

          margin: 0;

          box-sizing: border-box;
        }

        /* =========================================================
           BANNER TITLE
        ========================================================= */

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

        /* =========================================================
           BANNER DESCRIPTION
        ========================================================= */

        .cq-banner-desc {
          max-width:
            720px;

          margin:
            0 0 26px;

          font-size:
            clamp(
              13px,
              1.6vw,
              16px
            );

          line-height:
            1.6;

          font-weight:
            400;

          color:
            rgba(
              255,
              255,
              255,
              0.88
            );
        }

        /* =========================================================
           CONTACT BUTTON
           
           WHITE BUTTON
        ========================================================= */

        .cq-banner-btn {
          width:
            186px;

          height:
            56px;

          padding:
            0 28px;

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

          line-height:
            1;

          white-space:
            nowrap;

          cursor:
            pointer;

          box-sizing:
            border-box;

          transition:
            transform
            0.25s ease,
            box-shadow
            0.25s ease;
        }

        .cq-banner-btn:hover {
          transform:
            translateY(-2px);

          box-shadow:
            0 12px 26px
            rgba(
              0,
              0,
              0,
              0.18
            );
        }

        /* =========================================================
           OVERLAY
           UNCHANGED
        ========================================================= */

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

          box-sizing:
            border-box;
        }

        /* =========================================================
           MODAL
           UNCHANGED
        ========================================================= */

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
            clamp(
              28px,
              4vw,
              44px
            )
            clamp(
              22px,
              5vw,
              48px
            )
            clamp(
              32px,
              4vw,
              40px
            );

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
        }

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
            #fff;

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

          transition:
            background
            0.2s ease;
        }

        .cq-close:hover {
          background:
            rgba(
              255,
              255,
              255,
              0.2
            );
        }

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

        /* =========================================================
           FORM
        ========================================================= */

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

        /* =========================================================
           NOTE
        ========================================================= */

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

        /* =========================================================
           SUBMIT
        ========================================================= */

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

          gap:
            8px;

          border:
            none;

          border-radius:
            999px;

          padding:
            14px 30px;

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
            translateY(-1px);

          box-shadow:
            0 10px 24px
            rgba(
              0,
              0,
              0,
              0.25
            );
        }

        /* =========================================================
           MOBILE
        ========================================================= */

        @media (max-width: 768px) {
          .cq-banner {
            padding:
              44px 20px
              50px;
          }

          .cq-banner-title {
            font-size:
              23px;

            line-height:
              1.2;
          }

          .cq-banner-desc {
            max-width:
              100%;

            margin-bottom:
              22px;

            font-size:
              13px;

            line-height:
              1.55;
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
              26px 20px 30px;
          }

          .cq-modal-desc {
            margin-bottom:
              24px;
          }
        }

        /* =========================================================
           SMALL MOBILE
        ========================================================= */

        @media (max-width: 480px) {
          .cq-banner {
            padding:
              40px 20px
              46px;
          }

          .cq-banner-title {
            font-size:
              21px;
          }

          .cq-banner-desc {
            font-size:
              12.5px;
          }

          .cq-banner-btn {
            width:
              160px;

            height:
              50px;

            font-size:
              14px;
          }

          .cq-modal-title {
            font-size:
              20px;
          }

          .cq-submit {
            width:
              100%;

            justify-content:
              center;
          }
        }

        /* =========================================================
           TOUCH DEVICES
        ========================================================= */

        @media (hover: none) {
          .cq-banner-btn:hover {
            transform:
              none;

            box-shadow:
              none;
          }

          .cq-close:hover {
            background:
              rgba(
                255,
                255,
                255,
                0.08
              );
          }

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