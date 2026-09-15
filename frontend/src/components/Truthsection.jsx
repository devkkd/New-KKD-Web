"use client";

import {
  useEffect,
  useRef,
} from "react";

const items = [
  {
    id: 1,
    title: "Business-First Thinking",
    text: "We start with your goals not Figma files. Discovery comes before design. Design comes before development. We build the right thing before we build the thing right.",
    logo: "/home/logo1.png",
  },
  {
    id: 2,
    title: "Senior-Led Always",
    text: "No juniors running your $200K project. Every engagement is led by engineers and strategists who have shipped products used by millions of real users in production.",
    logo: "/home/logo2.png",
  },
  {
    id: 3,
    title: "Radical Transparency",
    text: "Real-time dashboards. Fortnightly live demos. Honest timelines. You'll never wonder what your team is building or why it's taking longer than expected.",
    logo: "/home/logo3.png",
  },
  {
    id: 4,
    title: "IP Ownership Day One",
    text: "Every pixel, every repo, every schema 100% yours from the moment it's created. No lock-in. No grey areas. No hostage code.",
    logo: "/home/logo4.png",
  },
];

export default function TruthSection() {
  const sectionRef =
    useRef(null);

  useEffect(() => {
    const section =
      sectionRef.current;

    if (!section) {
      return undefined;
    }

    const reduceMotion =
      window.matchMedia?.(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    /* =========================================
       REDUCED MOTION
    ========================================== */

    if (reduceMotion) {
      section.classList.add(
        "is-visible"
      );

      return undefined;
    }

    let restartTimer = null;
    let intervalId = null;

    /* =========================================
       RUN ANIMATION

       IMPORTANT:
       Direct DOM class toggle is used instead
       of React state so the whole section does
       not rerender every 10 seconds.

       Only opacity + transform are animated.
       No width/height/margin/padding changes.
    ========================================== */

    const runAnimation = () => {
      if (!section.isConnected) {
        return;
      }

      /* Reset */
      section.classList.remove(
        "is-visible"
      );

      /*
        Force browser to commit the reset
        before starting the next transition.
      */
      void section.offsetHeight;

      /*
        Next paint -> animate in.
      */
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (
            section.isConnected
          ) {
            section.classList.add(
              "is-visible"
            );
          }
        });
      });
    };

    /* =========================================
       INITIAL STATE

       Keep first render visually stable.
       We do NOT hide the section first.

       Animation starts after initial paint.
    ========================================== */

    section.classList.add(
      "is-visible"
    );

    restartTimer =
      window.setTimeout(() => {
        runAnimation();
      }, 500);

    /* =========================================
       REPEAT EVERY 10 SECONDS
    ========================================== */

    intervalId =
      window.setInterval(() => {
        runAnimation();
      }, 10000);

    /* =========================================
       CLEANUP
    ========================================== */

    return () => {
      if (
        restartTimer !== null
      ) {
        window.clearTimeout(
          restartTimer
        );
      }

      if (
        intervalId !== null
      ) {
        window.clearInterval(
          intervalId
        );
      }

      if (
        section.isConnected
      ) {
        section.classList.add(
          "is-visible"
        );
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="truth-section is-visible"
    >
      {/* =========================================
          HEADER
      ========================================== */}

      <div className="truth-header">
        <h2 className="truth-title">
          The Uncomfortable Truth
        </h2>

        <p className="truth-subtext">
          Most digital agencies are in
          the business of looking busy.
          Impressive proposals.
          Elaborate kick-off decks.
          Weekly status reports that say
          nothing.
        </p>
      </div>

      {/* =========================================
          STAIRCASE GRID
      ========================================== */}

      <div className="truth-grid">
        {items.map(
          (
            item,
            index
          ) => (
            <article
              key={item.id}
              className={`truth-card truth-card-${
                index + 1
              }`}
              style={{
                "--from-y": `${
                  150 +
                  index * 60
                }px`,

                "--from-rotate":
                  index % 2 === 0
                    ? "-2.5deg"
                    : "2.5deg",

                "--delay": `${
                  index * 180
                }ms`,
              }}
            >
              {/* =====================================
                  ICON
              ===================================== */}

              <div className="truth-icon">
                <img
                  src={item.logo}
                  alt={item.title}
                  draggable="false"
                />
              </div>

              {/* =====================================
                  TITLE
              ===================================== */}

              <h3 className="truth-card-title">
                {item.title}
              </h3>

              {/* =====================================
                  TEXT
              ===================================== */}

              <p className="truth-card-text">
                {item.text}
              </p>
            </article>
          )
        )}
      </div>

      {/* =========================================
          CTA
      ========================================== */}

      <div className="truth-cta-wrap">
        <a
          href="#contact"
          className="truth-cta"
        >
          <span>
            Book a Free 60-Minute Strategy
            Session ⬆
          </span>
        </a>
      </div>

      <style jsx>{`
        /* =====================================================
           SECTION
        ===================================================== */

        .truth-section {
          width: 100%;

          position: relative;

          overflow: hidden;

          background: #f3f8ff;

          color: #0e1116;

          padding:
            74px 32px 90px;

          font-family:
            "Britti Sans Trial",
            Arial,
            Helvetica,
            sans-serif;

          box-sizing: border-box;

          /*
            Keep the section isolated so transforms,
            opacity and painting don't affect nearby
            layout.
          */
          contain: layout paint;
        }

        /* =====================================================
           HEADER
        ===================================================== */

        .truth-header {
          width: 100%;

          max-width: 700px;

          margin: 0 auto;

          text-align: center;

          opacity: 1;

          transform:
            translate3d(
              0,
              0,
              0
            );

          box-sizing: border-box;
        }

        /* =====================================================
           TITLE
        ===================================================== */

        .truth-title {
          margin:
            0 0 22px;

          font-family:
            "Britti Sans Trial",
            Arial,
            sans-serif;

          font-weight:
            700;

          font-size:
            40px;

          line-height:
            1.1;

          letter-spacing:
            -0.045em;

          color:
            #0e1116;
        }

        /* =====================================================
           SUBTEXT
        ===================================================== */

        .truth-subtext {
          margin:
            0;

          font-family:
            "Britti Sans Trial",
            Arial,
            sans-serif;

          font-weight:
            400;

          font-size:
            15px;

          line-height:
            1.5;

          color:
            #0e0e0e;
        }

        /* =====================================================
           GRID
        ===================================================== */

        .truth-grid {
          width:
            100%;

          max-width:
            1400px;

          height:
            520px;

          display:
            grid;

          grid-template-columns:
            repeat(
              4,
              minmax(
                0,
                1fr
              )
            );

          align-items:
            end;

          border-bottom:
            1px solid
            #d5dfed;

          box-sizing:
            border-box;
        }

        /* =====================================================
           CARD
        ===================================================== */

        .truth-card {
          position:
            relative;

          width:
            100%;

          min-width:
            0;

          padding:
            38px 34px
            32px;

          background:
            transparent;

          border-top:
            1px solid
            #d5dfed;

          border-right:
            1px solid
            #d5dfed;

          border-bottom:
            none;

          box-sizing:
            border-box;

          /*
            STARTING STATE
          */

          opacity:
            0;

          transform:
            translate3d(
              0,
              var(--from-y),
              0
            )
            rotate(
              var(--from-rotate)
            )
            scale(
              0.92
            );

          transform-origin:
            center bottom;

          /*
            Only composited properties
            are animated.
          */
          will-change:
            transform,
            opacity;

          backface-visibility:
            hidden;

          -webkit-backface-visibility:
            hidden;

          transition:
            opacity
              0.9s
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              )
              var(--delay),

            transform
              1.2s
              cubic-bezier(
                0.16,
                1,
                0.3,
                1
              )
              var(--delay);
        }

        /* =====================================================
           FINAL CARD STATE
        ===================================================== */

        .truth-section.is-visible
          .truth-card {
          opacity:
            1;

          transform:
            translate3d(
              0,
              0,
              0
            )
            rotate(
              0deg
            )
            scale(
              1
            );
        }

        /* =====================================================
           STAIRCASE HEIGHTS
        ===================================================== */

        .truth-card-1 {
          height:
            430px;

          border-left:
            1px solid
            #d5dfed;
        }

        .truth-card-2 {
          height:
            372px;
        }

        .truth-card-3 {
          height:
            314px;
        }

        .truth-card-4 {
          height:
            256px;
        }

        /* =====================================================
           ICON
        ===================================================== */

        .truth-icon {
          width:
            56px;

          height:
            56px;

          margin-bottom:
            20px;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          opacity:
            0;

          transform:
            translate3d(
              0,
              24px,
              0
            )
            scale(
              0.72
            )
            rotate(
              -7deg
            );

          transition:
            opacity
              0.65s
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              )
              calc(
                var(--delay)
                + 180ms
              ),

            transform
              0.85s
              cubic-bezier(
                0.16,
                1,
                0.3,
                1
              )
              calc(
                var(--delay)
                + 180ms
              );

          will-change:
            transform,
            opacity;

          backface-visibility:
            hidden;

          -webkit-backface-visibility:
            hidden;
        }

        .truth-section.is-visible
          .truth-icon {
          opacity:
            1;

          transform:
            translate3d(
              0,
              0,
              0
            )
            scale(
              1
            )
            rotate(
              0deg
            );
        }

        .truth-icon img {
          width:
            100%;

          height:
            100%;

          display:
            block;

          object-fit:
            contain;

          user-select:
            none;

          pointer-events:
            none;

          -webkit-user-drag:
            none;
        }

        /* =====================================================
           CARD TITLE
        ===================================================== */

        .truth-card-title {
          margin:
            0 0 18px;

          font-family:
            "Britti Sans Trial",
            Arial,
            sans-serif;

          font-weight:
            600;

          font-size:
            20px;

          line-height:
            1.25;

          letter-spacing:
            -0.025em;

          color:
            #0e1116;
        }

        /* =====================================================
           CARD TEXT
        ===================================================== */

        .truth-card-text {
          margin:
            0;

          font-family:
            "Britti Sans Trial",
            Arial,
            sans-serif;

          font-weight:
            400;

          font-size:
            15px;

          line-height:
            1.6;

          color:
            #0e0e0e;
        }

        /* =====================================================
           CTA
        ===================================================== */

        .truth-cta-wrap {
          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          margin-top:
            52px;

          opacity:
            0;

          transform:
            translate3d(
              0,
              28px,
              0
            );

          transition:
            opacity
              0.8s
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              )
              720ms,

            transform
              0.8s
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              )
              720ms;

          will-change:
            transform,
            opacity;

          backface-visibility:
            hidden;
        }

        .truth-section.is-visible
          .truth-cta-wrap {
          opacity:
            1;

          transform:
            translate3d(
              0,
              0,
              0
            );
        }

        /* =====================================================
           CTA BUTTON
        ===================================================== */

        .truth-cta {
          min-width:
            400px;

          height:
            50px;

          padding:
            0 38px;

          display:
            inline-flex;

          align-items:
            center;

          justify-content:
            center;

          gap:
            10px;

          border:
            none;

          border-radius:
            999px;

          background:
            linear-gradient(
              135deg,
              #0180fd 0%,
              #0021af 100%
            );

          color:
            #ffffff;

          font-family:
            "Britti Sans Trial",
            Arial,
            sans-serif;

          font-size:
            17px;

          font-weight:
            500;

          line-height:
            1;

          text-align:
            center;

          text-decoration:
            none;

          box-shadow:
            0 12px 28px
              rgba(
                0,
                33,
                175,
                0.2
              );

          transition:
            transform
              0.25s ease,
            box-shadow
              0.25s ease;
        }

        .truth-cta:hover {
          transform:
            translateY(
              -2px
            );

          box-shadow:
            0 16px 34px
              rgba(
                0,
                33,
                175,
                0.28
              );
        }

        /* =====================================================
           LARGE DESKTOP
        ===================================================== */

        @media (min-width: 1440px) {
          .truth-section {
            padding:
              82px 64px 96px;
          }

          .truth-grid {
            max-width:
              1400px;

            height:
              540px;
          }

          .truth-card-1 {
            height:
              448px;
          }

          .truth-card-2 {
            height:
              390px;
          }

          .truth-card-3 {
            height:
              332px;
          }

          .truth-card-4 {
            height:
              274px;
          }
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1024px) {
          .truth-section {
            padding:
              64px 64px 82px;
          }

          .truth-title {
            font-size:
              36px;
          }

          .truth-subtext {
            font-size:
              18px;
          }

          .truth-grid {
            width:
              100%;

            max-width:
              1400px;

            height:
              auto;

            grid-template-columns:
              repeat(
                2,
                minmax(
                  0,
                  1fr
                )
              );

            align-items:
              stretch;

            margin-top:
              52px;

            border-bottom:
              none;
          }

          .truth-card-1,
          .truth-card-2,
          .truth-card-3,
          .truth-card-4 {
            height:
              auto;

            min-height:
              360px;

            margin:
              0;

            padding:
              34px 28px;

            border-top:
              1px solid
              #d5dfed;

            border-right:
              1px solid
              #d5dfed;

            border-bottom:
              1px solid
              #d5dfed;
          }

          .truth-card-1,
          .truth-card-3 {
            border-left:
              1px solid
              #d5dfed;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 640px) {
          .truth-section {
            padding:
              48px 20px 58px;
          }

          .truth-title {
            margin-bottom:
              18px;

            font-size:
              28px;

            line-height:
              1.12;
          }

          .truth-subtext {
            font-size:
              16px;

            line-height:
              1.5;
          }

          .truth-grid {
            width:
              100%;

            max-width:
              none;

            height:
              auto;

            display:
              grid;

            grid-template-columns:
              1fr;

            align-items:
              stretch;

            margin-top:
              40px;

            border-bottom:
              none;
          }

          /* =====================================
             MOBILE CARD
          ====================================== */

          .truth-card,
          .truth-card-1,
          .truth-card-2,
          .truth-card-3,
          .truth-card-4 {
            width:
              100%;

            height:
              auto;

            min-height:
              auto;

            margin:
              0;

            padding:
              30px 0;

            border-left:
              none;

            border-right:
              none;

            border-bottom:
              none;

            border-top:
              1px solid
              #d5dfed;

            transform:
              translate3d(
                0,
                90px,
                0
              )
              rotate(
                0deg
              )
              scale(
                0.97
              );

            transition:
              opacity
                0.8s
                cubic-bezier(
                  0.22,
                  1,
                  0.36,
                  1
                )
                var(--delay),

              transform
                1s
                cubic-bezier(
                  0.16,
                  1,
                  0.3,
                  1
                )
                var(--delay);
          }

          .truth-section.is-visible
            .truth-card,
          .truth-section.is-visible
            .truth-card-1,
          .truth-section.is-visible
            .truth-card-2,
          .truth-section.is-visible
            .truth-card-3,
          .truth-section.is-visible
            .truth-card-4 {
            opacity:
              1;

            transform:
              translate3d(
                0,
                0,
                0
              )
              rotate(
                0deg
              )
              scale(
                1
              );
          }

          .truth-card-1 {
            padding-top:
              0;

            border-top:
              none;
          }

          .truth-icon {
            width:
              46px;

            height:
              46px;

            margin-bottom:
              18px;

            transform:
              translate3d(
                0,
                20px,
                0
              )
              scale(
                0.75
              )
              rotate(
                -5deg
              );
          }

          .truth-section.is-visible
            .truth-icon {
            transform:
              translate3d(
                0,
                0,
                0
              )
              scale(
                1
              )
              rotate(
                0deg
              );
          }

          .truth-card-title {
            margin-bottom:
              14px;

            font-size:
              19px;
          }

          .truth-card-text {
            font-size:
              15px;

            line-height:
              1.55;
          }

          .truth-cta-wrap {
            margin-top:
              34px;
          }

          .truth-cta {
            width:
              auto !important;

            min-width:
              0 !important;

            max-width:
              none !important;

            height:
              48px;

            padding:
              0 22px;

            display:
              inline-flex;

            align-items:
              center;

            justify-content:
              center;

            gap:
              8px;

            border-radius:
              999px;

            font-size:
              13px;

            font-weight:
              500;

            white-space:
              nowrap;
          }
        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 380px) {
          .truth-section {
            padding:
              42px 20px 52px;
          }

          .truth-title {
            font-size:
              25px;
          }

          .truth-subtext {
            font-size:
              15px;
          }

          .truth-card-title {
            font-size:
              18px;
          }

          .truth-card-text {
            font-size:
              14px;
          }

          .truth-cta {
            width:
              auto !important;

            min-width:
              0 !important;

            max-width:
              none !important;

            height:
              46px;

            padding:
              0 18px;

            font-size:
              12px;
          }
        }

        /* =====================================================
           TOUCH DEVICES
        ===================================================== */

        @media (hover: none) {
          .truth-cta:hover {
            transform:
              none;

            box-shadow:
              0 10px 24px
                rgba(
                  1,
                  33,
                  175,
                  0.22
                );
          }
        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (
          prefers-reduced-motion:
            reduce
        ) {
          .truth-card,
          .truth-icon,
          .truth-cta-wrap {
            opacity:
              1;

            transform:
              none;

            transition:
              none;

            will-change:
              auto;
          }
        }
      `}</style>
    </section>
  );
}