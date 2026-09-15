"use client";
const INSIGHTS = [
  {
    id: 1,
    image: "/home/insights/1.png",
    title:
      "The AI Implementation Playbook: What Works, What Doesn't, and What to Do First",
    category: "AI & MACHINE LEARNING",
    description:
      "After helping 30+ companies integrate AI into production workflows, we've identified the five patterns that reliably predict success and the three that guarantee expensive failure. The guide we wish we'd had three years ago.",
  },

  {
    id: 2,
    image: "/home/insights/2.png",
    title:
      "Why 85% of Mobile Apps Are Abandoned After a Single Use And How to Beat the Odds",
    category: "MOBILE DEVELOPMENT",
    description:
      "The problem isn't usually the technology it's the decisions made before a single line of code was written. A definitive guide to product-market fit validation and user research for mobile products.",
  },

  {
    id: 3,
    image: "/home/insights/3.png",
    title:
      "The Hidden Cost of Technical Debt: A Framework for Quantifying What Your CTO Won't Say Out Loud",
    category: "ENGINEERING",
    description:
      "What's the real cost of that shortcut your team took 18 months ago? We built a rigorous framework for quantifying, prioritising, and systematically eliminating technical debt without bringing product development to a halt.",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function InsightsSection() {
  return (
    <section className="insights-section">
      <div className="insights-container">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="insights-header">
          <div className="insights-eyebrow">
            INSIGHTS
          </div>

          <h2 className="insights-heading">
            We don&apos;t publish to rank, We publish to be useful
          </h2>

          <p className="insights-intro">
            Our team doesn&apos;t just build we study the
            patterns that make digital products succeed and
            fail. Every week, we publish what we&apos;re
            learning: from deep technical dives to honest
            post-mortems to provocative takes on where the
            industry is heading.
          </p>
        </div>

        {/* =====================================================
            CARDS
        ===================================================== */}

        <div className="insights-grid">
          {INSIGHTS.map((item) => (
            <article
              className="insight-card"
              key={item.id}
            >
              {/* =================================================
                  IMAGE
              ================================================= */}

              <div className="insight-image-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="insight-image"
                  width="800"
                  height="500"
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                />
              </div>

              {/* =================================================
                  CONTENT
              ================================================= */}

              <div className="insight-content">
                {/* TITLE */}

                <div className="insight-title-wrap">
                  <h3 className="insight-title">
                    {item.title}
                  </h3>
                </div>

                {/* META */}

                <div className="insight-meta">
                  <span>
                    READ TIME: 8 MINUTES
                  </span>

                  <span className="insight-meta-separator">
                    |
                  </span>

                  <span>
                    CATEGORY: {item.category}
                  </span>
                </div>

                {/* DESCRIPTION */}

                <div className="insight-description-wrap">
                  <p className="insight-description">
                    {item.description}
                  </p>
                </div>

                {/* BUTTON */}

                <div className="insight-button-wrap">
                  <button
                    type="button"
                    className="insight-read-more"
                    aria-label={`Read more about ${item.title}`}
                  >
                    <span>
                      Read More
                    </span>

                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 11 11"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M5.5 1.6L9.2 8.8H1.8L5.5 1.6Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* =========================================================
           SECTION
        ========================================================= */

        .insights-section {
          width:
            100%;

          max-width:
            100%;

          margin:
            0;

          padding:
            22px
            62px
            90px;

          background:
            #F3F8FF;

          color:
            #0E0E0E;

          font-family:
            "Britti Sans Trial",
            Arial,
            Helvetica,
            sans-serif;

          box-sizing:
            border-box;

          overflow-x:
            clip;

          overflow-y:
            visible;

          position:
            relative;
        }

        .insights-section * {
          box-sizing:
            border-box;
        }

        /* =========================================================
           CONTAINER
        ========================================================= */

        .insights-container {
          width:
            100%;

          max-width:
            1400px;

          margin:
            0 auto;

          padding:
            0;

          box-sizing:
            border-box;

          min-width:
            0;
        }

        /* =========================================================
           HEADER
        ========================================================= */

        .insights-header {
          width:
            100%;

          text-align:
            center;

          margin:
            0
            0
            46px;

          box-sizing:
            border-box;
        }

        .insights-eyebrow {
          margin:
            0
            0
            30px;

          font-size:
            14px;

          line-height:
            1;

          font-weight:
            400;

          color:
            #0E0E0E;
        }

        .insights-heading {
          width:
            100%;

          max-width:
            100%;

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
            #0E0E0E;

          text-align:
            center;

          box-sizing:
            border-box;
        }

        .insights-intro {
          width:
            100%;

          max-width:
            1000px;

          margin:
            34px
            auto
            0;

          padding:
            0;

          font-size:
            17px;

          line-height:
            1.5;

          font-weight:
            400;

          color:
            #0E0E0E;

          box-sizing:
            border-box;
        }

        /* =========================================================
           GRID
        ========================================================= */

        .insights-grid {
          width:
            100%;

          max-width:
            100%;

          min-width:
            0;

          display:
            grid;

          grid-template-columns:
            repeat(
              3,
              minmax(
                0,
                1fr
              )
            );

          column-gap:
            50px;

          row-gap:
            0;

          align-items:
            stretch;

          box-sizing:
            border-box;
        }

        /* =========================================================
           CARD
        ========================================================= */

        .insight-card {
          width:
            100%;

          min-width:
            0;

          max-width:
            100%;

          display:
            flex;

          flex-direction:
            column;

          align-items:
            stretch;

          background:
            transparent;

          box-sizing:
            border-box;

          overflow:
            visible;

          contain:
            layout;
        }

        /* =========================================================
           IMAGE
        ========================================================= */

        .insight-image-wrap {
          width:
            100%;

          max-width:
            100%;

          height:
            220px;

          min-height:
            220px;

          overflow:
            hidden;

          border-radius:
            15px;

          flex:
            0 0 220px;

          background:
            #E7EEF8;

          box-sizing:
            border-box;
        }

        .insight-image {
          width:
            100%;

          height:
            100%;

          max-width:
            100%;

          display:
            block;

          object-fit:
            cover;

          object-position:
            center;

          user-select:
            none;

          pointer-events:
            none;

          -webkit-user-drag:
            none;
        }

        /* =========================================================
           CONTENT
        ========================================================= */

        .insight-content {
          width:
            100%;

          min-width:
            0;

          display:
            flex;

          flex-direction:
            column;

          flex:
            1 1 auto;

          padding-top:
            24px;

          box-sizing:
            border-box;
        }

        /* =========================================================
           TITLE
        ========================================================= */

        .insight-title-wrap {
          width:
            100%;

          height:
            84px;

          min-height:
            84px;

          max-height:
            84px;

          overflow:
            hidden;

          box-sizing:
            border-box;
        }

        .insight-title {
          width:
            100%;

          margin:
            0;

          padding:
            0;

          font-size:
            18px;

          line-height:
            1.48;

          font-weight:
            700;

          letter-spacing:
            -0.025em;

          color:
            #0E0E0E;

          box-sizing:
            border-box;

          display:
            -webkit-box;

          -webkit-box-orient:
            vertical;

          -webkit-line-clamp:
            3;

          overflow:
            hidden;

          overflow-wrap:
            break-word;
        }

        /* =========================================================
           META
        ========================================================= */

        .insight-meta {
          width:
            100%;

          height:
            24px;

          min-height:
            24px;

          margin-top:
            16px;

          display:
            flex;

          align-items:
            center;

          flex-wrap:
            nowrap;

          white-space:
            nowrap;

          overflow:
            hidden;

          font-size:
            12px;

          line-height:
            1;

          font-weight:
            400;

          color:
            #0E0E0E;

          text-transform:
            uppercase;

          box-sizing:
            border-box;
        }

        .insight-meta-separator {
          margin:
            0
            7px;

          flex-shrink:
            0;
        }

        /* =========================================================
           DESCRIPTION
        ========================================================= */

        .insight-description-wrap {
          width:
            100%;

          height:
            82px;

          min-height:
            82px;

          max-height:
            82px;

          margin-top:
            14px;

          overflow:
            hidden;

          box-sizing:
            border-box;
        }

        .insight-description {
          width:
            100%;

          margin:
            0;

          padding:
            0;

          font-size:
            14px;

          line-height:
            1.55;

          font-weight:
            400;

          color:
            #0E0E0E;

          display:
            -webkit-box;

          -webkit-box-orient:
            vertical;

          -webkit-line-clamp:
            4;

          overflow:
            hidden;

          box-sizing:
            border-box;
        }

        /* =========================================================
           BUTTON WRAP
        ========================================================= */

        .insight-button-wrap {
          width:
            100%;

          height:
            52px;

          min-height:
            52px;

          margin-top:
            24px;

          display:
            flex;

          align-items:
            flex-start;

          justify-content:
            flex-start;

          box-sizing:
            border-box;
        }

        /* =========================================================
           READ MORE
        ========================================================= */

        .insight-read-more {
          width:
            140px;

          height:
            50px;

          min-width:
            140px;

          max-width:
            140px;

          padding:
            0
            20px;

          display:
            inline-flex;

          align-items:
            center;

          justify-content:
            center;

          gap:
            6px;

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

          cursor:
            pointer;

          box-sizing:
            border-box;

          flex-shrink:
            0;

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

        .insight-read-more svg {
          display:
            block;

          flex-shrink:
            0;
        }

        /* =========================================================
           HOVER

           Same visual result as previous React state.
           No React rerender required.
        ========================================================= */

        .insight-read-more:hover {
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
            translateY(
              -2px
            );

          box-shadow:
            0
            10px
            22px
            rgba(
              0,
              33,
              175,
              0.18
            );
        }

        /* =========================================================
           TABLET
        ========================================================= */

        @media (max-width: 1100px) {
          .insights-section {
            padding:
              24px
              32px
              70px;

            overflow-x:
              clip;
          }

          .insights-container {
            width:
              100%;

            max-width:
              100%;
          }

          .insights-grid {
            column-gap:
              28px;
          }

          .insight-image-wrap {
            height:
              190px;

            min-height:
              190px;

            flex-basis:
              190px;
          }

          .insight-title-wrap {
            height:
              78px;

            min-height:
              78px;

            max-height:
              78px;
          }

          .insight-title {
            font-size:
              16px;
          }

          .insight-description {
            font-size:
              11px;
          }

          .insights-intro {
            font-size:
              14px;
          }
        }

        /* =========================================================
           MOBILE
        ========================================================= */

        @media (max-width: 767px) {
          .insights-section {
            width:
              100%;

            max-width:
              100%;

            padding:
              45px
              20px
              60px;

            overflow-x:
              clip;
          }

          .insights-container {
            width:
              100%;

            max-width:
              100%;

            margin:
              0;
          }

          .insights-header {
            width:
              100%;

            margin-bottom:
              36px;
          }

          .insights-eyebrow {
            margin-bottom:
              18px;

            font-size:
              11px;
          }

          .insights-heading {
            width:
              100%;

            font-size:
              22px;

            line-height:
              1.25;
          }

          .insights-intro {
            display:
              none;
          }

          /* ==============================================
             ONE CARD PER ROW
          ============================================== */

          .insights-grid {
            width:
              100%;

            max-width:
              100%;

            display:
              grid;

            grid-template-columns:
              minmax(
                0,
                1fr
              );

            row-gap:
              38px;

            column-gap:
              0;
          }

          .insight-card {
            width:
              100%;

            min-width:
              0;

            max-width:
              100%;
          }

          /* ==============================================
             IMAGE
          ============================================== */

          .insight-image-wrap {
            width:
              100%;

            max-width:
              100%;

            height:
              210px;

            min-height:
              210px;

            flex-basis:
              210px;

            border-radius:
              14px;
          }

          /* ==============================================
             CONTENT
          ============================================== */

          .insight-content {
            width:
              100%;

            padding-top:
              18px;
          }

          /* ==============================================
             TITLE
          ============================================== */

          .insight-title-wrap {
            width:
              100%;

            height:
              80px;

            min-height:
              80px;

            max-height:
              80px;
          }

          .insight-title {
            width:
              100%;

            font-size:
              18px;

            line-height:
              1.45;

            -webkit-line-clamp:
              3;
          }

          /* ==============================================
             META
          ============================================== */

          .insight-meta {
            width:
              100%;

            height:
              22px;

            min-height:
              22px;

            margin-top:
              13px;

            font-size:
              9px;
          }

          /* ==============================================
             DESCRIPTION HIDDEN
          ============================================== */

          .insight-description-wrap {
            display:
              none;
          }

          /* ==============================================
             BUTTON
          ============================================== */

          .insight-button-wrap {
            width:
              100%;

            height:
              50px;

            min-height:
              50px;

            margin-top:
              20px;
          }

          .insight-read-more {
            width:
              140px;

            min-width:
              140px;

            max-width:
              140px;

            height:
              48px;

            font-size:
              11px;
          }
        }

        /* =========================================================
           SMALL MOBILE
        ========================================================= */

        @media (max-width: 420px) {
          .insights-section {
            padding:
              40px
              20px
              52px;
          }

          .insights-heading {
            font-size:
              21px;
          }

          .insight-image-wrap {
            height:
              190px;

            min-height:
              190px;

            flex-basis:
              190px;
          }

          .insight-title-wrap {
            height:
              75px;

            min-height:
              75px;

            max-height:
              75px;
          }

          .insight-title {
            font-size:
              17px;

            line-height:
              1.45;
          }

          .insight-meta {
            font-size:
              8px;
          }

          .insight-read-more {
            width:
              135px;

            min-width:
              135px;

            max-width:
              135px;

            height:
              46px;

            font-size:
              10px;
          }
        }

        /* =========================================================
           TOUCH DEVICES
        ========================================================= */

        @media (hover: none) {
          .insight-read-more:hover {
            transform:
              none;

            box-shadow:
              none;

            background:
              transparent;

            color:
              #0E0E0E;

            border-color:
              #0E0E0E;
          }
        }

        /* =========================================================
           REDUCED MOTION
        ========================================================= */

        @media (
          prefers-reduced-motion:
            reduce
        ) {
          .insight-read-more {
            transition:
              none;
          }

          .insight-read-more:hover {
            transform:
              none;

            box-shadow:
              none;
          }
        }
      `}</style>
    </section>
  );
}