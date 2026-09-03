"use client";

import { useEffect, useState } from "react";

const FAQS = [
  {
    id: 1,
    question: "How do we get started?",
    answer:
      "Schedule a free 60-minute strategy call. We listen, ask hard questions, and give you an honest assessment of whether and how we can help. No pitch deck. No commercial pressure. If there's mutual fit, we propose a paid discovery engagement to scope your project properly.",
  },
  {
    id: 2,
    question:
      "Who will I work with day-to-day?",
    answer:
      "Every engagement has a dedicated Project Manager and Lead Engineer as your primary contacts. The people we sold you on us are the people who deliver for you. No bait-and-switch. No juniors making $200K product decisions.",
  },
  {
    id: 3,
    question:
      "Do I own everything you build?",
    answer:
      "100% - from day one. Every line of code, design file, database schema, and deployment configuration is yours. We transfer all repository access and assets at project completion (or any time you request it). No lock-in. No grey areas.",
  },
  {
    id: 4,
    question:
      "Can you rescue a project another agency started?",
    answer:
      "Yes - we've done it more times than we'd like. All rescue engagements begin with a full code audit and architecture assessment. We understand exactly what we're inheriting before we touch anything. Most rescues add 2-4 weeks vs a greenfield build.",
  },
];

export default function FAQSection() {
  const [fontReady, setFontReady] = useState(false);

  useEffect(() => {
    let mounted = true;

    const waitForFonts = async () => {
      try {
        if (document.fonts?.ready) {
          await document.fonts.ready;
        }
      } catch {
        // Ignore font API errors and render normally.
      }

      if (mounted) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (mounted) {
              setFontReady(true);
            }
          });
        });
      }
    };

    waitForFonts();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section
      className={`faq-section ${
        fontReady ? "faq-font-ready" : ""
      }`}
      aria-busy={!fontReady}
    >
      <div className="faq-container">

        {/* =====================================================
            LEFT SIDE
        ===================================================== */}

        <div className="faq-left">
          <div className="faq-eyebrow">
            FAQ&apos;s
          </div>

          <h2 className="faq-heading">
            The Questions Everyone
            <br />
            Asks Anyway
          </h2>
        </div>

        {/* =====================================================
            RIGHT SIDE
        ===================================================== */}

        <div className="faq-right">
          {FAQS.map((faq) => (
            <div
              className="faq-item"
              key={faq.id}
            >
              <h3 className="faq-question">
                {faq.question}
              </h3>

              <p className="faq-answer">
                {faq.answer}
              </p>
            </div>
          ))}

          {/* =================================================
              BUTTON
          ================================================= */}

          <div className="faq-button-wrap">
            <a
              href="/faq"
              className="faq-button"
            >
              <span>
                See All FAQ&apos;s
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
            </a>
          </div>
        </div>
      </div>

      <style>{`

        /* =========================================================
           SECTION
        ========================================================= */

        .faq-section {
          width: 100%;
          max-width: 100%;

          background: #F3F8FF;

          color: #0E0E0E;

          font-family:
            "Britti Sans Trial",
            Arial,
            Helvetica,
            sans-serif;

          padding:
            22px 62px 82px;

          margin: 0;

          box-sizing: border-box;

          overflow-x: hidden;

          isolation: isolate;

          /*
            IMPORTANT:
            Keep the section in the document flow
            while the custom font is loading.

            This prevents any outside content from
            jumping vertically on refresh.
          */

          opacity: 0;

          transition:
            opacity 0.01s linear;
        }

        /*
          Only opacity changes.
          No width / height / padding / position change.
        */

        .faq-section.faq-font-ready {
          opacity: 1;
        }

        .faq-section *,
        .faq-section *::before,
        .faq-section *::after {
          box-sizing: border-box;
        }

        /* =========================================================
           CONTAINER
        ========================================================= */

        .faq-container {
          width: 100%;

          max-width: 1400px;

          margin: 0 auto;

          display: grid;

          grid-template-columns:
            minmax(
              0,
              0.78fr
            )
            minmax(
              0,
              1.22fr
            );

          column-gap: 95px;

          align-items: start;

          box-sizing: border-box;
        }

        /* =========================================================
           LEFT
        ========================================================= */

        .faq-left {
          width: 100%;

          min-width: 0;

          padding: 0;

          margin: 0;

          box-sizing: border-box;
        }

        .faq-eyebrow {
          margin:
            0 0 30px;

          padding: 0;

          font-size:
            15px;

          line-height:
            1;

          font-weight:
            400;

          color:
            #0E0E0E;
        }

        .faq-heading {
          margin: 0;

          padding: 0;

          font-size:
            26px;

          line-height:
            1.35;

          font-weight:
            700;

          letter-spacing:
            -0.035em;

          color:
            #0E0E0E;
        }

        /* =========================================================
           RIGHT
        ========================================================= */

        .faq-right {
          width: 100%;

          min-width: 0;

          display: flex;

          flex-direction: column;

          box-sizing: border-box;
        }

        /* =========================================================
           FAQ ITEM
        ========================================================= */

        .faq-item {
          width: 100%;

          min-width: 0;

          margin: 0;

          padding:
            0 0 18px;

          border-bottom:
            1px solid
            #D1DBE8;

          box-sizing:
            border-box;
        }

        .faq-item + .faq-item {
          padding-top:
            18px;
        }

        /* =========================================================
           QUESTION
        ========================================================= */

        .faq-question {
          margin:
            0 0 20px;

          padding: 0;

          font-size:
            17px;

          line-height:
            1.25;

          font-weight:
            700;

          letter-spacing:
            -0.02em;

          color:
            #0E0E0E;
        }

        /* =========================================================
           ANSWER
        ========================================================= */

        .faq-answer {
          width: 100%;

          max-width: 100%;

          margin: 0;

          padding: 0;

          font-size:
            14px;

          line-height:
            1.65;

          font-weight:
            400;

          color:
            #0E0E0E;
        }

        /* =========================================================
           BUTTON WRAP
        ========================================================= */

        .faq-button-wrap {
          width: 100%;

          display: flex;

          align-items: center;

          justify-content: flex-start;

          margin-top:
            34px;

          padding: 0;

          box-sizing:
            border-box;
        }

        /* =========================================================
           BUTTON
        ========================================================= */

        .faq-button {
          width:
            125px;

          height:
            42px;

          padding:
            0 14px;

          display:
            inline-flex;

          align-items:
            center;

          justify-content:
            center;

          gap:
            5px;

          border:
            1px solid
            #0E0E0E;

          border-radius:
            999px;

          background:
            transparent;

          color:
            #0E0E0E;

          font-family:
            "Britti Sans Trial",
            Arial,
            Helvetica,
            sans-serif;

          font-size:
            12px;

          line-height:
            1;

          font-weight:
            400;

          white-space:
            nowrap;

          text-decoration:
            none;

          cursor:
            pointer;

          box-sizing:
            border-box;

          transform:
            translate3d(
              0,
              0,
              0
            );

          backface-visibility:
            hidden;

          -webkit-tap-highlight-color:
            transparent;

          transition:
            background
              0.25s ease,
            color
              0.25s ease,
            border-color
              0.25s ease,
            transform
              0.25s ease,
            box-shadow
              0.25s ease;
        }

        .faq-button svg {
          display:
            block;

          width:
            11px;

          height:
            11px;

          flex-shrink:
            0;
        }

        /* =========================================================
           HOVER
        ========================================================= */

        .faq-button:hover {
          background:
            linear-gradient(
              90deg,
              #0180FD 0%,
              #0021AF 100%
            );

          color:
            #FFFFFF;

          border-color:
            transparent;

          transform:
            translate3d(
              0,
              -2px,
              0
            );

          box-shadow:
            0 8px 18px
            rgba(
              0,
              33,
              175,
              0.16
            );
        }

        .faq-button:focus-visible {
          outline:
            2px solid
            #0180FD;

          outline-offset:
            3px;
        }

        /* =========================================================
           TABLET
        ========================================================= */

        @media (max-width: 1100px) {
          .faq-section {
            padding:
              24px 32px 70px;
          }

          .faq-container {
            column-gap:
              55px;

            grid-template-columns:
              minmax(
                0,
                0.82fr
              )
              minmax(
                0,
                1.18fr
              );
          }

          .faq-heading {
            font-size:
              21px;
          }

          .faq-question {
            font-size:
              14px;
          }

          .faq-answer {
            font-size:
              10px;
          }
        }

        /* =========================================================
           MOBILE
        ========================================================= */

        @media (max-width: 767px) {
          .faq-section {
            width:
              100%;

            padding:
              44px 20px 60px;
          }

          .faq-container {
            width:
              100%;

            max-width:
              100%;

            display:
              flex;

            flex-direction:
              column;

            gap:
              34px;

            margin:
              0;
          }

          .faq-left {
            width:
              100%;
          }

          .faq-eyebrow {
            margin-bottom:
              18px;

            font-size:
              11px;
          }

          .faq-heading {
            font-size:
              21px;

            line-height:
              1.3;
          }

          .faq-right {
            width:
              100%;
          }

          .faq-item {
            width:
              100%;

            padding:
              0 0 18px;
          }

          .faq-item + .faq-item {
            padding-top:
              18px;
          }

          .faq-question {
            margin-bottom:
              15px;

            font-size:
              15px;

            line-height:
              1.3;
          }

          .faq-answer {
            font-size:
              10px;

            line-height:
              1.65;
          }

          .faq-button-wrap {
            margin-top:
              30px;
          }

          .faq-button {
            width:
              115px;

            height:
              38px;

            font-size:
              9px;
          }
        }

        /* =========================================================
           SMALL MOBILE
        ========================================================= */

        @media (max-width: 420px) {
          .faq-section {
            padding:
              40px 20px 52px;
          }

          .faq-container {
            gap:
              30px;
          }

          .faq-heading {
            font-size:
              20px;
          }

          .faq-question {
            font-size:
              14px;
          }

          .faq-answer {
            font-size:
              9.5px;

            line-height:
              1.6;
          }

          .faq-button {
            width:
              110px;

            height:
              37px;

            font-size:
              8.5px;
          }
        }

        /* =========================================================
           TOUCH DEVICES
        ========================================================= */

        @media (hover: none) {
          .faq-button:hover {
            background:
              transparent;

            color:
              #0E0E0E;

            border-color:
              #0E0E0E;

            transform:
              translate3d(
                0,
                0,
                0
              );

            box-shadow:
              none;
          }
        }

        /* =========================================================
           REDUCED MOTION
        ========================================================= */

        @media (
          prefers-reduced-motion: reduce
        ) {
          .faq-section {
            transition:
              none;
          }

          .faq-button {
            transition:
              none;
          }
        }

      `}</style>
    </section>
  );
}