"use client";

import { useState } from "react";
import Contactform from "@/components/Contactform";

const EXPECTATIONS = [
  {
    title: "15–30 Minutes",
    description:
      "A short, focused call not a marathon meeting. We respect your time.",
  },
  {
    title: "We Ask, You Answer",
    description:
      "We'll ask about your goals, timeline, and challenges so we actually understand what you need before suggesting anything.",
  },
  {
    title: "Honest Direction",
    description:
      "If we're the right fit, we'll tell you how we can help. If we're not, we'll tell you that too.",
  },
  {
    title: "No Obligation",
    description:
      "Booking a call doesn't commit you to anything. It's simply the best way to figure out next steps together.",
  },
];

export default function BookCallSection() {
  const [buttonHovered, setButtonHovered] = useState(false);

  return (
    <main className="book-call-page">

      {/* =====================================================
          BOOK CALL CONTENT
          ONLY THIS AREA HAS PAGE PADDING
      ===================================================== */}

      <section className="book-call-content">
        <div className="book-call-container">

          {/* =================================================
              HERO
          ================================================= */}

          <div className="book-call-hero">

            <div className="book-call-eyebrow">
              Book Call
            </div>

            <h1 className="book-call-title">
              Let&apos;s Talk About Your Project
            </h1>

            <p className="book-call-intro">
              No sales pitch, no pressure just a straightforward
              conversation about what you&apos;re trying to build
              and whether we&apos;re the right
              <br className="desktop-break" />
              fit to help. Pick a time that works for you, and
              we&apos;ll take it from there.
            </p>

            <a
              href="#contact"
              className={`book-call-button ${
                buttonHovered
                  ? "book-call-button-hovered"
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
                Choose a Time
              </span>

              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5.5 1.4L9.2 8.7H1.8L5.5 1.4Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>

          {/* =================================================
              WHAT TO EXPECT
          ================================================= */}

          <div className="book-call-expect">

            <div className="book-call-expect-left">
              <h2>
                What To Expect
              </h2>
            </div>

            <div className="book-call-expect-right">
              {EXPECTATIONS.map((item) => (
                <div
                  className="book-call-expect-item"
                  key={item.title}
                >
                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT FORM

          IMPORTANT:
          This is OUTSIDE the padded content section.
          So Book Call page padding does NOT affect it.
      ===================================================== */}

      <div className="book-call-form-section">
        <Contactform />
      </div>

      <style>{`
        /* =====================================================
           PAGE
        ===================================================== */

        .book-call-page {
          width: 100%;
          max-width: 100%;

          min-height: 100vh;

          margin: 0;
          padding: 0;

          background: #F3F8FF;

          color: #0E0E0E;

          font-family:
            "Britti Sans Trial",
            Arial,
            Helvetica,
            sans-serif;

          box-sizing: border-box;

          overflow-x: hidden;
        }

        .book-call-page *,
        .book-call-page *::before,
        .book-call-page *::after {
          box-sizing: border-box;
        }

        /* =====================================================
           PADDED CONTENT ONLY
        ===================================================== */

        .book-call-content {
          width: 100%;

          padding:
            42px 62px 34px;

          box-sizing: border-box;
        }

        /* =====================================================
           CONTAINER
        ===================================================== */

        .book-call-container {
          width: 100%;

          max-width: 1400px;

          margin: 0 auto;

          box-sizing: border-box;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .book-call-hero {
          width: 100%;

          display: flex;

          flex-direction: column;

          align-items: center;

          text-align: center;

          padding: 0;
        }

        /* =====================================================
           EYEBROW
        ===================================================== */

        .book-call-eyebrow {
          margin: 0;

          font-size: 18px;

          line-height: 1.2;

          font-weight: 700;

          letter-spacing: -0.025em;

          color: #0E0E0E;
        }

        /* =====================================================
           MAIN TITLE
        ===================================================== */

        .book-call-title {
          width: 100%;

          margin: 26px 0 0;

          padding: 0;

          font-family:
            "Britti Sans Trial",
            Arial,
            Helvetica,
            sans-serif;

          font-size: 30px;

          line-height: 1.15;

          font-weight: 600;

          letter-spacing: -0.045em;

          color: #0E0E0E;
        }

        /* =====================================================
           INTRO
        ===================================================== */

        .book-call-intro {
          width: 100%;

          max-width: 980px;

          margin: 46px auto 0;

          padding: 0;

          font-size: 14px;

          line-height: 1.55;

          font-weight: 400;

          color: #0E0E0E;
        }

        /* =====================================================
           CHOOSE TIME BUTTON
        ===================================================== */

        .book-call-button {
          width: 184px;

          height: 52px;

          margin-top: 48px;

          padding: 0 22px;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 7px;

          border: none;

          border-radius: 999px;

          background:
            linear-gradient(
              135deg,
              #0180FD 0%,
              #0021AF 100%
            );

          color: #FFFFFF;

          font-family:
            "Britti Sans Trial",
            Arial,
            Helvetica,
            sans-serif;

          font-size: 15px;

          line-height: 1;

          font-weight: 500;

          text-decoration: none;

          white-space: nowrap;

          cursor: pointer;

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .book-call-button svg {
          display: block;

          flex-shrink: 0;
        }

        .book-call-button:hover,
        .book-call-button-hovered {
          transform:
            translateY(-2px);

          box-shadow:
            0 12px 28px
            rgba(
              0,
              33,
              175,
              0.18
            );
        }

        /* =====================================================
           WHAT TO EXPECT
        ===================================================== */

        .book-call-expect {
          width: 100%;

          margin-top: 106px;

          display: grid;

          grid-template-columns:
            minmax(0, 0.85fr)
            minmax(0, 1.6fr);

          column-gap: 76px;

          align-items: start;
        }

        /* =====================================================
           LEFT
        ===================================================== */

        .book-call-expect-left {
          width: 100%;

          padding: 0;
        }

        .book-call-expect-left h2 {
          margin: 0;

          padding: 0;

          font-size: 32px;

          line-height: 1.15;

          font-weight: 600;

          letter-spacing: -0.04em;

          color: #0E0E0E;
        }

        /* =====================================================
           RIGHT
        ===================================================== */

        .book-call-expect-right {
          width: 100%;

          min-width: 0;

          display: flex;

          flex-direction: column;
        }

        /* =====================================================
           EXPECTATION ITEM
        ===================================================== */

        .book-call-expect-item {
          width: 100%;

          padding:
            0 0 34px;

          margin:
            0 0 38px;

          border-bottom:
            1px solid
            #D5DDE8;
        }

        .book-call-expect-item:last-child {
          margin-bottom: 0;

          padding-bottom: 0;

          border-bottom: none;
        }

        /* =====================================================
           ITEM TITLE
        ===================================================== */

        .book-call-expect-item h3 {
          margin: 0;

          padding: 0;

          font-size: 20px;

          line-height: 1.2;

          font-weight: 700;

          letter-spacing: -0.03em;

          color: #0E0E0E;
        }

        /* =====================================================
           ITEM DESCRIPTION
        ===================================================== */

        .book-call-expect-item p {
          width: 100%;

          max-width: 800px;

          margin: 20px 0 0;

          padding: 0;

          font-size: 15px;

          line-height: 1.55;

          font-weight: 400;

          color: #0E0E0E;
        }

        /* =====================================================
           CONTACT FORM WRAPPER

           NO PAGE PADDING HERE
        ===================================================== */

        .book-call-form-section {
          width: 100%;

          max-width: 100%;

          margin: 0;

          padding: 0;

          box-sizing: border-box;

          overflow: visible;
        }

        .book-call-form-section > * {
          width: 100%;

          max-width: 100%;

          margin-left: 0;

          margin-right: 0;
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1100px) {
          .book-call-content {
            padding:
              42px 32px 70px;
          }

          .book-call-title {
            font-size: 34px;
          }

          .book-call-intro {
            font-size: 15px;
          }

          .book-call-expect {
            column-gap: 50px;

            margin-top: 90px;
          }

          .book-call-expect-left h2 {
            font-size: 31px;
          }

          .book-call-expect-item h3 {
            font-size: 21px;
          }

          .book-call-expect-item p {
            font-size: 15px;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 767px) {
          .book-call-content {
            width: 100%;

            padding:
              34px 20px 26px;
          }

          .book-call-hero {
            width: 100%;
          }

          .book-call-eyebrow {
            font-size: 15px;
          }

          .book-call-title {
            margin-top: 20px;

            font-size: 27px;

            line-height: 1.2;
          }

          .book-call-intro {
            max-width: 100%;

            margin-top: 28px;

            font-size: 13px;

            line-height: 1.6;
          }

          .desktop-break {
            display: none;
          }

          .book-call-button {
            width: 178px;

            height: 58px;

            margin-top: 34px;

            font-size: 14px;
          }

          /* =================================================
             EXPECTATION
          ================================================= */

          .book-call-expect {
            margin-top: 70px;

            display: flex;

            flex-direction: column;

            gap: 34px;
          }

          .book-call-expect-left {
            width: 100%;
          }

          .book-call-expect-left h2 {
            font-size: 28px;
          }

          .book-call-expect-right {
            width: 100%;
          }

          .book-call-expect-item {
            padding-bottom: 25px;

            margin-bottom: 28px;
          }

          .book-call-expect-item h3 {
            font-size: 19px;
          }

          .book-call-expect-item p {
            margin-top: 14px;

            font-size: 13px;

            line-height: 1.6;
          }

          /* =================================================
             CONTACT FORM

             NO 20px / 30px PAGE PADDING
          ================================================= */

          .book-call-form-section {
            width: 100%;

            max-width: 100%;

            padding: 0;

            margin: 0;
          }
        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 420px) {
          .book-call-content {
            padding:
              30px 20px 24px;
          }

          .book-call-eyebrow {
            font-size: 14px;
          }

          .book-call-title {
            font-size: 24px;
          }

          .book-call-intro {
            font-size: 12px;

            line-height: 1.6;
          }

          .book-call-button {
            width: 170px;

            height: 55px;

            margin-top: 30px;

            font-size: 13px;
          }

          .book-call-expect {
            margin-top: 58px;
          }

          .book-call-expect-left h2 {
            font-size: 25px;
          }

          .book-call-expect-item h3 {
            font-size: 18px;
          }

          .book-call-expect-item p {
            font-size: 12px;
          }
        }

        /* =====================================================
           TOUCH DEVICES
        ===================================================== */

        @media (hover: none) {
          .book-call-button:hover,
          .book-call-button-hovered {
            transform: none;

            box-shadow: none;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (
          prefers-reduced-motion: reduce
        ) {
          .book-call-button {
            transition: none;
          }
        }
      `}</style>
    </main>
  );
}