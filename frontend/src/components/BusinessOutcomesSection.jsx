"use client";

import { useEffect, useRef, useState } from "react";

/* =================================================
   CONTENT
================================================= */

const firstText =
  "Every engagement we take begins with one question what does success actually look like for you? and ends only when we've delivered it.";

const secondText =
  "We've been doing this for 5 years, 100+ products, $5M+ raised by our clients. Tens of millions of users served. We don't have a template for your project. We have something better experience.";

const firstWords = firstText.split(" ");
const secondWords = secondText.split(" ");

export default function BusinessOutcomesSection() {
  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.28,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`business-outcomes-section ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="business-outcomes-inner">

        {/* =========================================
            HEADING
        ========================================== */}

        <h2 className="business-outcomes-title">
          We&apos;re in a Different Business Outcomes
        </h2>

        {/* =========================================
            FIRST PARAGRAPH
            GRAY → BLACK
        ========================================== */}

        <p className="business-outcomes-main">
          {firstWords.map((word, index) => (
            <span
              key={`first-${index}-${word}`}
              className="business-outcomes-word"
              style={{
                "--word-delay": `${index * 75}ms`,
              }}
            >
              {word}
              {index < firstWords.length - 1 ? " " : ""}
            </span>
          ))}
        </p>

        {/* =========================================
            SECOND PARAGRAPH
            GRAY → BLACK
        ========================================== */}

        <p className="business-outcomes-reveal">
          {secondWords.map((word, index) => {
            const totalDelay =
              firstWords.length * 75 +
              250 +
              index * 75;

            return (
              <span
                key={`second-${index}-${word}`}
                className="business-outcomes-word"
                style={{
                  "--word-delay": `${totalDelay}ms`,
                }}
              >
                {word}
                {index < secondWords.length - 1 ? " " : ""}
              </span>
            );
          })}
        </p>
      </div>

      <style jsx>{`
        /* =================================================
           SECTION
        ================================================= */

        .business-outcomes-section {
          width: 100%;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;

          background: #f3f8ff;
          color: #0e0e0e;

          font-family:
            "Britti Sans Trial",
            Arial,
            Helvetica,
            sans-serif;

          padding: 110px 32px 130px;
        }

        /* =================================================
           INNER
        ================================================= */

        .business-outcomes-inner {
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;

          text-align: center;
          box-sizing: border-box;
        }

        /* =================================================
           HEADING
        ================================================= */

        .business-outcomes-title {
          width: 100%;

          margin: 0;

          font-family:
            "Britti Sans Trial",
            Arial,
            sans-serif;

          font-size: 35px;
          line-height: 1.12;

          font-weight: 700;

          letter-spacing: -0.045em;

          color: #0e0e0e;

          opacity: 0;

          transform: translateY(25px);

          transition:
            opacity 0.85s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.85s cubic-bezier(0.22, 1, 0.36, 1);

          box-sizing: border-box;
        }

        .business-outcomes-section.is-visible
          .business-outcomes-title {
          opacity: 1;
          transform: translateY(0);
        }

        /* =================================================
           FIRST PARAGRAPH
        ================================================= */

        .business-outcomes-main {
          width: 100%;
          max-width: 1080px;

          margin: 48px auto 0;

          font-family:
            "Britti Sans Trial",
            Arial,
            sans-serif;

          font-size: 23px;
          line-height: 1.5;

          font-weight: 600;

          letter-spacing: -0.025em;

          color: #c7ccd8;

          box-sizing: border-box;
        }

        /* =================================================
           SECOND PARAGRAPH
        ================================================= */

        .business-outcomes-reveal {
          width: 100%;
          max-width: 1100px;

          margin: 12px auto 0;

          font-family:
            "Britti Sans Trial",
            Arial,
            sans-serif;

          font-size: 23px;
          line-height: 1.55;

          font-weight: 600;

          letter-spacing: -0.025em;

          color: #c7ccd8;

          box-sizing: border-box;
        }

        /* =================================================
           WORD ANIMATION
        ================================================= */

        .business-outcomes-word {
          display: inline;

          color: #c7ccd8;

          transition:
            color 0.7s cubic-bezier(0.22, 1, 0.36, 1)
            var(--word-delay);
        }

        .business-outcomes-section.is-visible
          .business-outcomes-word {
          color: #0e0e0e;
        }

        /* =================================================
           LARGE DESKTOP
        ================================================= */

        @media (min-width: 1440px) {
          .business-outcomes-section {
            padding: 40px 32px 145px;
          }

          .business-outcomes-title {
            font-size: 30px;
          }

          .business-outcomes-main {
            max-width: 1000px;

            margin-top: 48px;

            font-size: 22px;
          }

          .business-outcomes-reveal {
            max-width: 1000px;

            font-size: 22px;
          }
        }

        /* =================================================
           TABLET
        ================================================= */

        @media (max-width: 1024px) {
          .business-outcomes-section {
            padding: 80px 32px 110px;
          }

          .business-outcomes-title {
            font-size: 30px;
          }

          .business-outcomes-main {
            max-width: 900px;

            margin-top: 42px;

            font-size: 20px;
            line-height: 1.5;
          }

          .business-outcomes-reveal {
            max-width: 920px;

            font-size: 20px;
            line-height: 1.5;
          }
        }

        /* =================================================
           MOBILE
        ================================================= */

        @media (max-width: 640px) {
          .business-outcomes-section {
            padding: 72px 20px 88px;
          }

          .business-outcomes-inner {
            width: 100%;
            max-width: none;
          }

          .business-outcomes-title {
            font-size: 28px;

            line-height: 1.12;

            letter-spacing: -0.04em;
          }

          .business-outcomes-main {
            width: 100%;
            max-width: 100%;

            margin-top: 32px;

            font-size: 17px;

            line-height: 1.45;

            letter-spacing: -0.02em;
          }

          .business-outcomes-reveal {
            width: 100%;
            max-width: 100%;

            margin-top: 12px;

            font-size: 17px;

            line-height: 1.5;

            letter-spacing: -0.02em;
          }

          .business-outcomes-word {
            transition-duration: 0.6s;
          }
        }

        /* =================================================
           SMALL MOBILE
        ================================================= */

        @media (max-width: 380px) {
          .business-outcomes-section {
            padding: 60px 20px 72px;
          }

          .business-outcomes-title {
            font-size: 25px;

            line-height: 1.15;
          }

          .business-outcomes-main {
            margin-top: 28px;

            font-size: 15px;

            line-height: 1.5;
          }

          .business-outcomes-reveal {
            font-size: 15px;

            line-height: 1.5;
          }
        }

        /* =================================================
           REDUCED MOTION
        ================================================= */

        @media (prefers-reduced-motion: reduce) {
          .business-outcomes-title {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .business-outcomes-word {
            color: #0e0e0e !important;
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}