"use client";

import { useState } from "react";

const initialForm = {
  fullName: "",
  jobTitle: "",
  mobile: "",
  workEmail: "",
  budget: "",
  city: "",
  details: "",
};

export default function Contactform() {
  const [form, setForm] =
    useState(initialForm);

  const [buttonHovered, setButtonHovered] =
    useState(false);

  /* =========================================================
     INPUT CHANGE
  ========================================================= */

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

  /* =========================================================
     SUBMIT
  ========================================================= */

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(
      "Contact Form:",
      form
    );

    // API integration yahan kar sakte ho.
    // Abhi submit hone par form reset hoga.

    setForm(initialForm);
  };

  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* =====================================================
            ALWAYS OPEN FORM
        ===================================================== */}

        <div className="contact-card">

          {/* TITLE */}

          <h2 className="contact-title">
            Still Have Questions? Let&apos;s Talk.
          </h2>

          {/* DESCRIPTION */}

          <p className="contact-description">
            If you didn&apos;t find what you need,
            share a few details below. Our team
            will get back to you shortly.
          </p>

          {/* =================================================
              FORM
          ================================================= */}

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="contact-form-grid">

              {/* FULL NAME */}

              <div className="contact-field">
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

              {/* JOB TITLE */}

              <div className="contact-field">
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

              {/* MOBILE */}

              <div className="contact-field">
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

              {/* EMAIL */}

              <div className="contact-field">
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

              {/* BUDGET */}

              <div className="contact-field">
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

              {/* CITY */}

              <div className="contact-field">
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

              {/* PROJECT DETAILS */}

              <div className="contact-field contact-field-full">
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

            {/* =================================================
                NOTE
            ================================================= */}

            <p className="contact-note">
              <span>▲</span>
              Response within 30 minutes.
              100% NDA-protected.
            </p>

            {/* =================================================
                SUBMIT BUTTON
            ================================================= */}

            <div className="contact-submit-wrap">
              <button
                type="submit"
                className={`contact-submit ${
                  buttonHovered
                    ? "contact-submit-hovered"
                    : ""
                }`}
                onMouseEnter={() =>
                  setButtonHovered(true)
                }
                onMouseLeave={() =>
                  setButtonHovered(false)
                }
              >
                <span>
                  Request Consultation
                </span>

                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5.5 1.5L9 8.5H2L5.5 1.5Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>

      <style>{`
        /* =====================================================
           SECTION
        ===================================================== */

        .contact-section {
          width: 100%;
          max-width: 100%;

          background: #F3F8FF;

          padding:
            62px 62px;

          box-sizing: border-box;

          font-family:
            "Britti Sans Trial",
            Arial,
            Helvetica,
            sans-serif;

          color:
            #0E0E0E;

          overflow-x:
            hidden;
        }

        .contact-section *,
        .contact-section *::before,
        .contact-section *::after {
          box-sizing:
            border-box;
        }

        /* =====================================================
           CONTAINER
        ===================================================== */

        .contact-container {
          width:
            100%;

          max-width:
            1400px;

          margin:
            0 auto;
        }

        /* =====================================================
           MAIN GRADIENT CARD
        ===================================================== */

        .contact-card {
          width:
            100%;

          min-height:
            360px;

          padding:
            52px 62px 40px;

          display:
            flex;

          flex-direction:
            column;

          align-items:
            center;

          justify-content:
            flex-start;

          text-align:
            center;

          border-radius:
            18px;

          background:
            linear-gradient(
              150deg,
              #0180FD 0%,
              #006FEA 32%,
              #003FCC 68%,
              #0021AF 100%
            );

          color:
            #FFFFFF;
        }

        /* =====================================================
           TITLE
        ===================================================== */

        .contact-title {
          margin:
            0;

          padding:
            0;

          font-size:
            26px;

          line-height:
            1.2;

          font-weight:
            700;

          letter-spacing:
            -0.035em;

          color:
            #FFFFFF;
        }

        /* =====================================================
           DESCRIPTION
        ===================================================== */

        .contact-description {
          width:
            100%;

          max-width:
            780px;

          margin:
            18px auto 0;

          padding:
            0;

          font-size:
            16px;

          line-height:
            1.5;

          font-weight:
            400;

          color:
            rgba(
              255,
              255,
              255,
              0.92
            );
        }

        /* =====================================================
           FORM
        ===================================================== */

        .contact-form {
          width:
            100%;

          max-width:
            900px;

          margin:
            28px auto 0;

          padding:
            0;
        }

        /* =====================================================
           FORM GRID
        ===================================================== */

        .contact-form-grid {
          width:
            100%;

          display:
            grid;

          grid-template-columns:
            repeat(
              2,
              minmax(
                0,
                1fr
              )
            );

          column-gap:
            42px;

          row-gap:
            20px;

          text-align:
            left;
        }

        /* =====================================================
           FIELD
        ===================================================== */

        .contact-field {
          width:
            100%;

          min-width:
            0;

          display:
            flex;

          flex-direction:
            column;
        }

        .contact-field-full {
          grid-column:
            1 / -1;
        }

        /* =====================================================
           LABEL
        ===================================================== */

        .contact-field label {
          margin:
            0 0 8px;

          padding:
            0;

          font-size:
            13px;

          line-height:
            1.2;

          font-weight:
            500;

          color:
            #FFFFFF;
        }

        /* =====================================================
           INPUT
        ===================================================== */

        .contact-field input {
          width:
            100%;

          height:
            34px;

          padding:
            0 2px 8px;

          border:
            0;

          border-bottom:
            1px solid
            rgba(
              255,
              255,
              255,
              0.45
            );

          border-radius:
            0;

          outline:
            none;

          background:
            transparent;

          color:
            #FFFFFF;

          font-family:
            inherit;

          font-size:
            13px;

          line-height:
            1.2;

          font-weight:
            400;

          transition:
            border-color
            0.2s ease;
        }

        .contact-field input::placeholder {
          color:
            rgba(
              255,
              255,
              255,
              0.62
            );
        }

        .contact-field input:focus {
          border-bottom-color:
            #FFFFFF;
        }

        /* =====================================================
           NOTE
        ===================================================== */

        .contact-note {
          width:
            100%;

          margin:
            20px 0 0;

          padding:
            0;

          display:
            flex;

          align-items:
            center;

          justify-content:
            flex-start;

          gap:
            4px;

          text-align:
            left;

          font-size:
            13px;

          line-height:
            1.4;

          font-weight:
            400;

          color:
            rgba(
              255,
              255,
              255,
              0.86
            );
        }

        .contact-note span {
          font-size:
            6px;
        }

        /* =====================================================
           SUBMIT BUTTON
        ===================================================== */

        .contact-submit-wrap {
          width:
            100%;

          margin:
            27px 0 0;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;
        }

        .contact-submit {
          width:
            185px;

          height:
            45px;

          padding:
            0 15px;

          display:
            inline-flex;

          align-items:
            center;

          justify-content:
            center;

          gap:
            5px;

          border:
            none;

          border-radius:
            999px;

          background:
            #FFFFFF;

          color:
            #0E0E0E;

          font-family:
            "Britti Sans Trial",
            Arial,
            Helvetica,
            sans-serif;

          font-size:
            13px;

          line-height:
            1;

          font-weight:
            500;

          white-space:
            nowrap;

          cursor:
            pointer;

          transition:
            transform
            0.25s ease,
            box-shadow
            0.25s ease;
        }

        .contact-submit svg {
          display:
            block;

          flex-shrink:
            0;
        }

        .contact-submit:hover,
        .contact-submit-hovered {
          transform:
            translateY(-2px);

          box-shadow:
            0 8px 18px
            rgba(
              0,
              0,
              0,
              0.18
            );
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1100px) {
          .contact-section {
            padding:
              52px 32px
              60px;
          }

          .contact-card {
            padding:
              48px 42px 36px;
          }

          .contact-form {
            max-width:
              820px;
          }

          .contact-title {
            font-size:
              24px;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 767px) {
          .contact-section {
            width:
              100%;

            padding:
              42px 20px
              52px;
          }

          .contact-container {
            width:
              100%;

            max-width:
              100%;
          }

          .contact-card {
            min-height:
              auto;

            padding:
              34px 20px 30px;

            border-radius:
              16px;
          }

          .contact-title {
            font-size:
              21px;

            line-height:
              1.25;
          }

          .contact-description {
            max-width:
              100%;

            margin-top:
              14px;

            font-size:
              10.5px;

            line-height:
              1.55;
          }

          .contact-form {
            width:
              100%;

            margin-top:
              24px;
          }

          .contact-form-grid {
            grid-template-columns:
              1fr;

            column-gap:
              0;

            row-gap:
              18px;
          }

          .contact-field-full {
            grid-column:
              auto;
          }

          .contact-field label {
            font-size:
              8px;
          }

          .contact-field input {
            height:
              30px;

            font-size:
              9px;
          }

          .contact-note {
            margin-top:
              18px;

            font-size:
              8px;
          }

          .contact-submit-wrap {
            margin-top:
              24px;
          }

          .contact-submit {
            width:
              150px;

            height:
              38px;

            font-size:
              9px;
          }
        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 420px) {
          .contact-section {
            padding:
              36px 20px
              48px;
          }

          .contact-card {
            padding:
              30px 16px 26px;

            border-radius:
              14px;
          }

          .contact-title {
            font-size:
              19px;
          }

          .contact-description {
            font-size:
              11px;
          }

          .contact-field label {
            font-size:
              11px;
          }

          .contact-field input {
            font-size:
              12px;
          }

          .contact-note {
            font-size:
              11px;
          }

          .contact-submit {
            width:
              145px;

            height:
              37px;

            font-size:
              10px;
          }
        }

        /* =====================================================
           TOUCH
        ===================================================== */

        @media (hover: none) {
          .contact-submit:hover,
          .contact-submit-hovered {
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
          prefers-reduced-motion: reduce
        ) {
          .contact-submit {
            transition:
              none;
          }
        }
      `}</style>
    </section>
  );
}