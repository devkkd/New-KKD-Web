"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";
import { motion } from "framer-motion";

/* =========================================================
   DATA
========================================================= */

const phases = [
  {
    id: 1,
    phase: "PHASE 00",
    title: "Start with Clarity, Not Commitments",
    description:
      "Free Strategy Session (Day Zero). No pitches. No slide decks. A 60 minute conversation where we listen more than we talk. You'll leave with clarity about what's possible whether we work together or not.",
    image: "/home/work/1.png",
  },
  {
    id: 2,
    phase: "PHASE 01",
    title: "Discovery and Architecture",
    description:
      "Discovery & Architecture (Week 1-2). Stakeholder workshops, user research, competitive teardowns, technical feasibility assessment. Output: a Project Blueprint scope, architecture, timeline, team composition, risk register, and investment estimate.",
    image: "/home/work/1.png",
  },
  {
    id: 3,
    phase: "PHASE 02",
    title: "Prototype and Validate",
    description:
      "Design Sprint (Week 3-5). Prototype before we build. User flows, wireframes, high-fidelity Figma prototypes shared in real time. You approve the experience before a line of production code exists.",
    image: "/home/work/1.png",
  },
  {
    id: 4,
    phase: "PHASE 03",
    title: "Build and Deliver",
    description:
      "Agile Build Sprints (Week 6 → Launch). Two-week Agile sprints delivering working, tested software not status updates. Live demo every fortnight. Real-time project dashboard. You always know what's been built, what's in progress, and what's next.",
    image: "/home/work/1.png",
  },
  {
    id: 5,
    phase: "PHASE 04",
    title: "Quality Assurance and Security",
    description:
      "QA & Security Hardening. Automated test suites, manual exploratory QA, cross-device testing, security vulnerability scanning, WCAG accessibility audit, and performance benchmarking against real-world load scenarios.",
    image: "/home/work/1.png",
  },
  {
    id: 6,
    phase: "PHASE 05",
    title: "Launch and Monitor",
    description:
      "Launch & 72-Hour Watch. White-glove deployment. Full infrastructure provisioning, DNS, SSL, monitoring stack. Our team is on call during launch day and monitors closely for 72 hours post-go-live. Launch day should feel like Russian roulette.",
    image: "/home/work/1.png",
  },
  {
    id: 7,
    phase: "PHASE 05",
    title: "Grow and Evolve",
    description:
      "Growth & Long Term Partnership. Post-launch support plans from basic bug-fix SLAs to full managed service with 24/7 monitoring. Analytics reviews. Feature roadmap planning. Iterative improvement. Our best client relationships are measured in years, not projects.",
    image: "/home/work/1.png",
  },
];

/* =========================================================
   MAIN CONTROLS
========================================================= */

const DESKTOP_ROW_HEIGHT = 230;
const IMAGE_WIDTH = 300;
const IMAGE_HEIGHT = DESKTOP_ROW_HEIGHT;

export default function HowWeWorkSection() {
  const sectionRef = useRef(null);
  const rowRefs = useRef([]);

  const [activeIndex, setActiveIndex] = useState(0);

  /* =========================================================
     DESKTOP SCROLL
  ========================================================= */

  useEffect(() => {
    const updateActiveFromScroll = () => {
      if (window.innerWidth <= 767) {
        return;
      }

      const section = sectionRef.current;

      if (!section) return;

      const rect = section.getBoundingClientRect();

      const sectionTop =
        window.scrollY + rect.top;

      const sectionHeight =
        section.offsetHeight;

      const viewportHeight =
        window.innerHeight;

      const scrollDistance = Math.max(
        sectionHeight - viewportHeight,
        1
      );

      const current =
        window.scrollY - sectionTop;

      const progress = Math.max(
        0,
        Math.min(
          1,
          current / scrollDistance
        )
      );

      const nextIndex = Math.round(
        progress * (phases.length - 1)
      );

      setActiveIndex(
        Math.max(
          0,
          Math.min(
            phases.length - 1,
            nextIndex
          )
        )
      );
    };

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(() => {
        updateActiveFromScroll();
        ticking = false;
      });
    };

    updateActiveFromScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        handleScroll
      );
    };
  }, []);

  /* =========================================================
     MOBILE SCROLL
  ========================================================== */

  useEffect(() => {
    const updateMobile = () => {
      if (window.innerWidth > 767) {
        return;
      }

      const center =
        window.innerHeight * 0.45;

      let closestIndex = 0;
      let closestDistance = Infinity;

      rowRefs.current.forEach(
        (row, index) => {
          if (!row) return;

          const rect =
            row.getBoundingClientRect();

          const rowCenter =
            rect.top +
            rect.height / 2;

          const distance = Math.abs(
            rowCenter - center
          );

          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        }
      );

      setActiveIndex(closestIndex);
    };

    window.addEventListener(
      "scroll",
      updateMobile,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      updateMobile
    );

    updateMobile();

    return () => {
      window.removeEventListener(
        "scroll",
        updateMobile
      );

      window.removeEventListener(
        "resize",
        updateMobile
      );
    };
  }, []);

  const activePhase = phases[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="how-work-section"
    >
      <div className="how-work-container">

        {/* =================================================
            HEADING
        ================================================= */}

        <div className="how-work-heading-wrap">
          <h2 className="how-work-heading">
            HOW WE WORK
          </h2>

          <div className="how-work-heading-line" />
        </div>

        {/* =================================================
            DESKTOP
        ================================================= */}

        <div className="how-work-desktop">

          {/* =================================================
              FIXED GRID LINES

              Vertical + horizontal lines are completely
              independent from text elements.
          ================================================= */}

          <div
            className="how-work-grid-lines"
            aria-hidden="true"
          />

          {/* =================================================
              TABLE
          ================================================= */}

          <div className="how-work-table">
            {phases.map((item, index) => {
              const isActive =
                index === activeIndex;

              return (
                <div
                  key={item.id}
                  ref={(el) => {
                    rowRefs.current[index] = el;
                  }}
                  className={`how-work-row ${
                    isActive
                      ? "is-active"
                      : ""
                  }`}
                  onMouseEnter={() =>
                    setActiveIndex(index)
                  }
                >
                  {/* ======================================
                      PHASE
                  ====================================== */}

                  <div className="how-work-phase">
                    {item.phase}
                  </div>

                  {/* ======================================
                      TITLE
                  ====================================== */}

                  <div className="how-work-title">
                    {item.title}
                  </div>

                  {/* ======================================
                      DESCRIPTION
                  ====================================== */}

                  <div className="how-work-description">
                    {item.description}
                  </div>

                  {/* ======================================
                      IMAGE COLUMN SPACE

                      Empty fourth column keeps every
                      row aligned with image section.
                  ====================================== */}

                  <div className="how-work-image-space" />
                </div>
              );
            })}
          </div>

          {/* =================================================
              IMAGE TRACK
          ================================================= */}

          <div className="how-work-image-track">
            <motion.div
              className="how-work-floating-image"
              animate={{
                y:
                  activeIndex *
                  DESKTOP_ROW_HEIGHT,

                rotateX:
                  activeIndex *
                  -180,
              }}
              transition={{
                duration: 0.6,

                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
            >
              <img
                src={activePhase.image}
                alt={activePhase.title}
                className="how-work-image"
                draggable="false"
              />
            </motion.div>

            {/* fixed image edge */}
            <motion.div
              className="how-work-floating-edge"
              animate={{
                y:
                  activeIndex *
                  DESKTOP_ROW_HEIGHT,
              }}
              transition={{
                duration: 0.6,

                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
              aria-hidden="true"
            >
              <span className="floating-edge-top" />
              <span className="floating-edge-bottom" />
            </motion.div>
          </div>
        </div>

        {/* =================================================
            MOBILE
        ================================================= */}

        <div className="how-work-mobile">
          {phases.map((item, index) => {
            const isActive =
              index === activeIndex;

            return (
              <article
                key={item.id}
                ref={(el) => {
                  rowRefs.current[index] = el;
                }}
                className={`how-work-mobile-row ${
                  isActive
                    ? "is-active"
                    : ""
                }`}
                onMouseEnter={() =>
                  setActiveIndex(index)
                }
              >
                <div className="how-work-mobile-meta">
                  {item.phase}
                </div>

                <h3 className="how-work-mobile-title">
                  {item.title}
                </h3>

                <p className="how-work-mobile-description">
                  {item.description}
                </p>

                <div className="how-work-mobile-image">
                  <img
                    src={item.image}
                    alt={item.title}
                    draggable="false"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        /* =========================================================
           SECTION
        ========================================================= */

        .how-work-section {
          width: 100%;
          background: #0e0e0e;
          color: #c5c8d4;

          font-family:
            "Britti Sans Trial",
            Arial,
            Helvetica,
            sans-serif;

          padding:
            0 62px 96px;

          box-sizing: border-box;
          overflow: hidden;
        }

        /* =========================================================
           CONTAINER
        ========================================================= */

        .how-work-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
        }

        /* =========================================================
           HEADING
        ========================================================= */

        .how-work-heading-wrap {
          width: 100%;

          padding:
            34px 0 38px;

          box-sizing: border-box;
        }

        .how-work-heading {
          margin: 0;

          font-family:
            "Britti Sans Trial",
            Arial,
            sans-serif;

          font-size: 104px;
          line-height: 0.9;
          font-weight: 700;

          letter-spacing: -0.065em;

          white-space: nowrap;

          background:
            linear-gradient(
              180deg,
              #f3f8ff 0%,
              #84c5ff 100%
            );

          -webkit-background-clip: text;
          background-clip: text;

          -webkit-text-fill-color: transparent;
          color: transparent;
        }

        /* =========================================================
           TOP BLUE LINE
        ========================================================= */

        

        /* =========================================================
           DESKTOP
        ========================================================= */

        .how-work-desktop {
          position: relative;

          width: 100%;

          display: grid;

          grid-template-columns:
            minmax(0, 1fr)
            ${IMAGE_WIDTH}px;

          box-sizing: border-box;
        }

        /* =========================================================
           FIXED GRID LINES

           This NEVER moves with active content.
        ========================================================= */

        .how-work-grid-lines {
          position: absolute;

          inset: 0;

          width: 100%;

          height:
            ${phases.length *
            DESKTOP_ROW_HEIGHT}px;

          pointer-events: none;

          z-index: 20;

          /*
            Vertical positions:
            
            1. left edge
            2. after phase = 230px
            3. after title = calculated column
            4. before image
            5. right edge
          */

          background:
            linear-gradient(
              to right,

              transparent 0,

              transparent calc(230px - 1px),

              #363636 calc(230px - 1px),

              #363636 230px,

              transparent 230px,

              transparent calc(
                230px +
                (
                  (
                    100% -
                    ${IMAGE_WIDTH}px -
                    230px
                  ) * 0.48
                ) - 1px
              ),

              #363636 calc(
                230px +
                (
                  (
                    100% -
                    ${IMAGE_WIDTH}px -
                    230px
                  ) * 0.48
                ) - 1px
              ),

              #363636 calc(
                230px +
                (
                  (
                    100% -
                    ${IMAGE_WIDTH}px -
                    230px
                  ) * 0.48
                )
              ),

              transparent calc(
                230px +
                (
                  (
                    100% -
                    ${IMAGE_WIDTH}px -
                    230px
                  ) * 0.48
                )
              )
            );

          /*
             Horizontal rows
          */

          box-shadow:
            inset 0 1px 0 #363636;
        }

        /* =========================================================
           TABLE
        ========================================================= */

        .how-work-table {
          width: 100%;

          grid-column: 1 / -1;
        }

        /* =========================================================
           ROW

           4 columns:
           Phase
           Title
           Description
           Image space
        ========================================================= */

        .how-work-row {
          width: 100%;

          height:
            ${DESKTOP_ROW_HEIGHT}px;

          min-height:
            ${DESKTOP_ROW_HEIGHT}px;

          max-height:
            ${DESKTOP_ROW_HEIGHT}px;

          display: grid;

          grid-template-columns:
            230px
            minmax(220px, 0.92fr)
            minmax(280px, 1fr)
            ${IMAGE_WIDTH}px;

          column-gap: 0;

          align-items: flex-start;

          padding: 0;

          box-sizing: border-box;

          position: relative;

          cursor: pointer;

          background: transparent;
        }

        .how-work-row:hover {
          background:
            rgba(
              255,
              255,
              255,
              0.018
            );
        }

        /* =========================================================
           TEXT COLUMNS

           NO BORDERS HERE.
           This is important.
           
           Vertical lines are now independent.
        ========================================================= */

        .how-work-phase {
          width: 100%;

          height: 100%;

          padding:
            28px 20px 0 28px;

          box-sizing: border-box;

          font-size: 12px;

          line-height: 1;

          font-weight: 500;

          color: #c5c8d4;

          white-space: nowrap;

          transition:
            color 0.3s ease;
        }

        .how-work-title {
          width: 100%;

          height: 100%;

          padding:
            28px 20px 0;

          box-sizing: border-box;

          font-size: 24px;

          line-height: 1.4;

          font-weight: 400;

          letter-spacing:
            -0.03em;

          color: #c5c8d4;

          transition:
            color 0.3s ease;
        }

        .how-work-description {
          width: 100%;

          height: 100%;

          padding:
            28px 20px 0;

          box-sizing: border-box;

          font-size: 14px;

          line-height: 1.65;

          font-weight: 400;

          color: #c5c8d4;

          transition:
            color 0.3s ease;
        }

        .how-work-image-space {
          width: 100%;
          height: 100%;
        }

        /* =========================================================
           ACTIVE TEXT ONLY

           NO TRANSFORM.
           So vertical lines never move.
        ========================================================= */

        .how-work-row.is-active
          .how-work-phase {
          color: #ffffff;
        }

        .how-work-row.is-active
          .how-work-title {
          color: #ffffff;
        }

        .how-work-row.is-active
          .how-work-description {
          color: #ffffff;
        }

        /* =========================================================
           ROW HORIZONTAL LINES
           
           Drawn independently from text.
        ========================================================= */

        .how-work-row::before {
          content: "";

          position: absolute;

          top: 0;
          left: 0;

          width: 100%;
          height: 1px;

          background: #363636;

          pointer-events: none;

          z-index: 21;
        }

        .how-work-row:last-child::after {
          content: "";

          position: absolute;

          bottom: 0;
          left: 0;

          width: 100%;
          height: 1px;

          background: #363636;

          pointer-events: none;

          z-index: 21;
        }

        /* =========================================================
           IMAGE TRACK
        ========================================================= */

        .how-work-image-track {
          position: absolute;

          top: 0;
          right: 0;

          width:
            ${IMAGE_WIDTH}px;

          height:
            ${phases.length *
            DESKTOP_ROW_HEIGHT}px;

          pointer-events: none;

          overflow: visible;

          perspective: 1000px;

          transform-style:
            preserve-3d;

          box-sizing: border-box;

          z-index: 30;
        }

        /* =========================================================
           IMAGE
        ========================================================= */

        .how-work-floating-image {
          position: absolute;

          top: 0;
          right: 0;

          width:
            ${IMAGE_WIDTH}px;

          height:
            ${IMAGE_HEIGHT}px;

          overflow: hidden;

          background: #111111;

          transform-style:
            preserve-3d;

          backface-visibility:
            hidden;

          transform-origin:
            center center;

          will-change: transform;

          box-sizing:
            border-box;

          z-index: 30;
        }

        .how-work-image {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;

          object-position:
            center center;

          user-select: none;
          pointer-events: none;

          backface-visibility:
            hidden;
        }

        /* =========================================================
           FIXED IMAGE EDGE
           
           Moves only Y.
           NEVER rotates.
        ========================================================= */

        .how-work-floating-edge {
          position: absolute;

          top: 0;
          right: 0;

          width:
            ${IMAGE_WIDTH}px;

          height:
            ${IMAGE_HEIGHT}px;

          pointer-events: none;

          z-index: 50;
        }

        .floating-edge-top,
        .floating-edge-bottom {
          position: absolute;

          left: 0;

          width: 100%;
          height: 1px;

          background: #363636;
        }

        .floating-edge-top {
          top: 0;
        }

        .floating-edge-bottom {
          bottom: 0;
        }

        /* =========================================================
           MOBILE
        ========================================================= */

        .how-work-mobile {
          display: none;
        }

        /* =========================================================
           TABLET
        ========================================================= */

        @media (max-width: 1100px) {
          .how-work-heading {
            font-size: 76px;
          }

          .how-work-heading-line {
            width:
              calc(
                100% -
                240px
              );
          }

          .how-work-row {
            grid-template-columns:
              150px
              minmax(170px, 0.9fr)
              minmax(220px, 1fr)
              240px;
          }

          .how-work-phase {
            padding:
              24px 16px 0 20px;
          }

          .how-work-title {
            padding:
              24px 16px 0;

            font-size: 18px;
          }

          .how-work-description {
            padding:
              24px 16px 0;

            font-size: 11px;
          }

          .how-work-image-track {
            width: 240px;
          }

          .how-work-floating-image,
          .how-work-floating-edge {
            width: 240px;
          }
        }

        /* =========================================================
           MOBILE
        ========================================================= */

        @media (max-width: 767px) {
          .how-work-section {
            padding:
              0 20px 70px;
          }

          .how-work-heading-wrap {
            padding:
              28px 0 18px;
          }

          .how-work-heading {
            font-size: 48px;

            line-height: 0.94;

            white-space: normal;

            letter-spacing:
              -0.065em;
          }

          .how-work-heading-line {
            width: 100%;
            height: 3px;
          }

          .how-work-desktop {
            display: none;
          }

          .how-work-mobile {
            width: 100%;

            display: block;
          }

          .how-work-mobile-row {
            position: relative;

            width: 100%;

            display: grid;

            grid-template-columns:
              70px
              minmax(0, 1fr);

            grid-template-areas:
              "meta title"
              "meta description"
              "image image";

            column-gap: 14px;

            padding:
              22px 0 24px;

            border-top:
              1px solid #363636;

            box-sizing:
              border-box;
          }

          .how-work-mobile-row:last-child {
            border-bottom:
              1px solid #363636;
          }

          .how-work-mobile-meta {
            grid-area: meta;

            padding-top: 3px;

            font-size: 9px;

            line-height: 1;

            color: #c5c8d4;
          }

          .how-work-mobile-title {
            grid-area: title;

            margin: 0;

            font-size: 20px;

            line-height: 1.3;

            font-weight: 400;

            letter-spacing:
              -0.03em;

            color: #c5c8d4;
          }

          .how-work-mobile-description {
            grid-area:
              description;

            margin:
              12px 0 0;

            font-size: 11px;

            line-height: 1.6;

            color: #c5c8d4;
          }

          .how-work-mobile-row.is-active
            .how-work-mobile-meta,
          .how-work-mobile-row.is-active
            .how-work-mobile-title,
          .how-work-mobile-row.is-active
            .how-work-mobile-description {
            color:
              #ffffff;
          }

          .how-work-mobile-image {
            grid-area: image;

            width: 100%;

            aspect-ratio: 16 / 10;

            margin-top: 20px;

            overflow: hidden;

            border-top:
              3px solid #f3f8ff;
          }

          .how-work-mobile-image img {
            width: 100%;
            height: 100%;

            display: block;

            object-fit: cover;
          }
        }

        /* =========================================================
           SMALL MOBILE
        ========================================================= */

        @media (max-width: 420px) {
          .how-work-heading {
            font-size: 39px;
          }

          .how-work-mobile-row {
            grid-template-columns:
              62px
              minmax(0, 1fr);

            column-gap: 12px;
          }

          .how-work-mobile-title {
            font-size: 18px;
          }

          .how-work-mobile-description {
            font-size: 10.5px;
          }

          .how-work-mobile-meta {
            font-size: 8.5px;
          }
        }

        /* =========================================================
           REDUCED MOTION
        ========================================================= */

        @media (
          prefers-reduced-motion: reduce
        ) {
          .how-work-floating-image,
          .how-work-floating-edge {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}