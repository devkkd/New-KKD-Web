"use client";

import Image from "next/image";
import {
  useLayoutEffect,
  useRef,
} from "react";

import gsap from "gsap";
import {
  ScrollTrigger,
} from "gsap/ScrollTrigger";

if (
  typeof window !== "undefined"
) {
  gsap.registerPlugin(
    ScrollTrigger
  );
}

/* =========================================================
   PROJECTS
========================================================= */

const projects = [
  {
    id: 1,
    title: "Malani Impex INC",
    subtitle:
      "Heritage Textile & Home Décor Brand",

    description:
      "Rooted in Jaipur, India, Malani Impex blends traditional craftsmanship with ethical production. The redesigned website translates this legacy into a sophisticated digital presence that communicates authenticity, scale, and international trust.",

    deliverables: [
      "Web Development",
      "B2B Commerce",
      "E-commerce",
    ],

    industry:
      "Home Décor & Handcrafted Textiles",

    liveSite:
      "https://www.malaniimpex.com",

    published: "©2026",

    timelines:
      "2-3 Months",

    image:
      "/home/p.png",

    frame: true,

    frameColor:
      "#F8F4C9",
  },

  {
    id: 2,
    title: "Furrmaa",
    subtitle:
      "Pet Care Digital Platform (App & Web)",

    description:
      "Designed for both emerging startups and established enterprises, Furrmaa delivers an integrated pet care ecosystem powered by AI-driven strategy and creative innovation, enabling scalable mobile and web experiences that drive engagement, commerce, and operational efficiency.",

    deliverables: [
      "Mobile Apps",
      "Web Development",
      "E-commerce",
      "Pet Care Enterprise",
    ],

    industry:
      "Pet Care Digital Platform",

    liveSite:
      "https://www.furrmaa.com",

    published: "©2026",

    timelines:
      "2-3 Months",

    image:
      "/home/p1.png",

    frame: false,
  },

  {
    id: 3,
    title: "Ratoomals",
    subtitle:
      "Handcrafted Decor & Sculpture Manufacturer",

    description:
      "Ratoomals is a Jaipur-based heritage manufacturer specializing in handcrafted statues, sculptures, and decorative pieces for global B2B markets. Blending traditional artistry with large-scale production, the brand serves retailers, wholesalers, and interior buyers worldwide.",

    deliverables: [
      "Web Development",
      "B2B Commerce",
      "E-commerce",
      "Manufacturing",
    ],

    industry:
      "Handcrafted Decor",

    liveSite:
      "https://www.ratoomals.com",

    published: "©2026",

    timelines:
      "2-3 Months",

    image:
      "/home/p2.png",

    frame: false,
  },
];

/* =========================================================
   PORTFOLIO SECTION
========================================================= */

export default function PortfolioSection() {
  const sectionRef =
    useRef(null);

  const rowsRef =
    useRef([]);

  const refreshFrameRef =
    useRef(null);

  useLayoutEffect(() => {
    const section =
      sectionRef.current;

    if (!section) {
      return undefined;
    }

    /*
      Prevent stale row references if React
      remounts/reconciles the section.
    */
    rowsRef.current =
      rowsRef.current.filter(
        Boolean
      );

    const ctx =
      gsap.context(() => {
        const isMobile =
          window.matchMedia(
            "(max-width: 768px)"
          ).matches;

        const rows =
          Array.from(
            section.querySelectorAll(
              ".portfolio-row"
            )
          );

        if (!rows.length) {
          return;
        }

        /* =====================================================
           DESKTOP / TABLET
        ===================================================== */

        if (!isMobile) {
          rows.forEach(
            (row, index) => {
              const line =
                row.querySelector(
                  ".portfolio-connect-line"
                );

              const dot =
                row.querySelector(
                  ".portfolio-dot"
                );

              const details =
                row.querySelector(
                  ".portfolio-details"
                );

              const image =
                row.querySelector(
                  ".portfolio-image-area"
                );

              if (
                !line ||
                !dot ||
                !details ||
                !image
              ) {
                return;
              }

              /*
                Same original animation values.
              */

              const reverse =
                index % 2 === 1;

              const detailX =
                reverse
                  ? 70
                  : -70;

              const imageX =
                reverse
                  ? -70
                  : 70;

              /* =================================
                 INITIAL STATES
              ================================== */

              gsap.set(line, {
                transformOrigin:
                  "top center",

                scaleY: 0,
              });

              gsap.set(dot, {
                scale: 0,

                opacity: 0,
              });

              gsap.set(
                details,
                {
                  x: detailX,

                  opacity: 0,
                }
              );

              gsap.set(
                image,
                {
                  x: imageX,

                  opacity: 0,

                  scale: 0.92,
                }
              );

              /* =================================
                 TIMELINE
              ================================== */

              const tl =
                gsap.timeline({
                  defaults: {
                    overwrite:
                      "auto",
                  },

                  scrollTrigger: {
                    trigger: row,

                    start:
                      "top 82%",

                    end:
                      "center 48%",

                    scrub: 0.8,

                    invalidateOnRefresh:
                      true,
                  },
                });

              /* =================================
                 LINE
              ================================== */

              tl.to(
                line,
                {
                  scaleY: 1,

                  duration: 0.65,

                  ease:
                    "power2.out",
                },
                0
              );

              /* =================================
                 DOT
              ================================== */

              tl.to(
                dot,
                {
                  scale: 1,

                  opacity: 1,

                  duration: 0.45,

                  ease:
                    "back.out(1.7)",
                },
                0.2
              );

              /* =================================
                 DETAILS
              ================================== */

              tl.to(
                details,
                {
                  x: 0,

                  opacity: 1,

                  duration: 0.75,

                  ease:
                    "elastic.out(1, 0.72)",
                },
                0.18
              );

              /* =================================
                 IMAGE
              ================================== */

              tl.to(
                image,
                {
                  x: 0,

                  opacity: 1,

                  scale: 1,

                  duration: 0.8,

                  ease:
                    "elastic.out(1, 0.68)",
                },
                0.28
              );

              /* =================================
                 IMAGE FINISH
              ================================== */

              tl.to(
                image,
                {
                  scale: 1.025,

                  duration: 0.18,

                  ease:
                    "power1.out",
                },
                0.8
              );

              tl.to(
                image,
                {
                  scale: 1,

                  duration: 0.18,

                  ease:
                    "power1.out",
                },
                0.98
              );
            }
          );

          return;
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        rows.forEach(
          (row) => {
            const line =
              row.querySelector(
                ".portfolio-connect-line"
              );

            const dot =
              row.querySelector(
                ".portfolio-dot"
              );

            const details =
              row.querySelector(
                ".portfolio-details"
              );

            const image =
              row.querySelector(
                ".portfolio-image-area"
              );

            if (
              !line ||
              !dot ||
              !details ||
              !image
            ) {
              return;
            }

            /* =================================
               INITIAL
            ================================== */

            gsap.set(line, {
              transformOrigin:
                "top center",

              scaleY: 0,
            });

            gsap.set(dot, {
              scale: 0,

              opacity: 0,
            });

            gsap.set(image, {
              y: 45,

              opacity: 0,

              scale: 0.94,
            });

            gsap.set(details, {
              y: 40,

              opacity: 0,
            });

            /* =================================
               MOBILE TIMELINE
               SAME AS ORIGINAL
            ================================== */

            const tl =
              gsap.timeline({
                defaults: {
                  overwrite:
                    "auto",
                },

                scrollTrigger: {
                  trigger: row,

                  start:
                    "top 86%",

                  end:
                    "center 50%",

                  scrub: 0.8,

                  invalidateOnRefresh:
                    true,
                },
              });

            /* =================================
               LINE
            ================================== */

            tl.to(
              line,
              {
                scaleY: 1,

                duration: 0.6,

                ease:
                  "power2.out",
              },
              0
            );

            /* =================================
               DOT
            ================================== */

            tl.to(
              dot,
              {
                scale: 1,

                opacity: 1,

                duration: 0.4,

                ease:
                  "back.out(1.8)",
              },
              0.15
            );

            /* =================================
               IMAGE
            ================================== */

            tl.to(
              image,
              {
                y: 0,

                opacity: 1,

                scale: 1,

                duration: 0.8,

                ease:
                  "elastic.out(1, 0.68)",
              },
              0.18
            );

            /* =================================
               DETAILS
            ================================== */

            tl.to(
              details,
              {
                y: 0,

                opacity: 1,

                duration: 0.75,

                ease:
                  "elastic.out(1, 0.72)",
              },
              0.28
            );
          }
        );

        /* =====================================================
           SAFE REFRESH

           Images / fonts may affect measurements.
           Refresh only after browser has painted.
        ===================================================== */

        refreshFrameRef.current =
          requestAnimationFrame(
            () => {
              ScrollTrigger.refresh();
            }
          );
      }, section);

    return () => {
      if (
        refreshFrameRef.current !==
        null
      ) {
        cancelAnimationFrame(
          refreshFrameRef.current
        );

        refreshFrameRef.current =
          null;
      }

      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="portfolio-section"
    >
      <div className="portfolio-container">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="portfolio-header">
          <span className="portfolio-kicker">
            PORTFOLIO
          </span>

          <div className="portfolio-heading-grid">
            <h2>
              We&apos;ll Let The Work Do The
              Talking
            </h2>

            <p>
              Every case study below represents
              a real problem, a real team, and a
              real outcome. We&apos;ve selected them
              not because they&apos;re our biggest
              contracts but because they best
              illustrate what happens when
              strategy, design, and engineering
              work together without compromise.
            </p>
          </div>
        </div>

        {/* =====================================================
            FLOW
        ===================================================== */}

        <div className="portfolio-flow">
          {projects.map(
            (project, index) => {
              const reverse =
                index % 2 === 1;

              return (
                <article
                  key={project.id}
                  ref={(element) => {
                    rowsRef.current[
                      index
                    ] = element;
                  }}
                  className={`portfolio-row ${
                    reverse
                      ? "is-reverse"
                      : ""
                  }`}
                >
                  {/* ===================================
                      LINE
                  ==================================== */}

                  <div
                    className="portfolio-line-column"
                    aria-hidden="true"
                  >
                    <div className="portfolio-connect-line" />

                    <div className="portfolio-dot">
                      <span />
                    </div>
                  </div>

                  {/* ===================================
                      DETAILS
                  ==================================== */}

                  <div className="portfolio-details">
                    <div className="project-index">
                      {String(
                        index + 1
                      ).padStart(
                        2,
                        "0"
                      )}

                      <span>
                        /
                        {String(
                          projects.length
                        ).padStart(
                          2,
                          "0"
                        )}
                      </span>
                    </div>

                    <h3>
                      {project.title}
                    </h3>

                    <p className="project-subtitle">
                      {
                        project.subtitle
                      }
                    </p>

                    <p className="project-description">
                      {
                        project.description
                      }
                    </p>

                    <div className="project-meta">
                      <div className="meta-group">
                        <span className="meta-title">
                          Deliverables
                        </span>

                        <div className="meta-list">
                          {project.deliverables.map(
                            (
                              item
                            ) => (
                              <span
                                key={
                                  item
                                }
                              >
                                {
                                  item
                                }
                              </span>
                            )
                          )}
                        </div>
                      </div>

                      <div className="meta-group">
                        <span className="meta-title">
                          Industry
                        </span>

                        <span className="meta-value">
                          {
                            project.industry
                          }
                        </span>
                      </div>

                      <div className="meta-group">
                        <span className="meta-title">
                          Published
                        </span>

                        <span className="meta-value">
                          {
                            project.published
                          }
                        </span>
                      </div>

                      <div className="meta-group">
                        <span className="meta-title">
                          Timelines
                        </span>

                        <span className="meta-value">
                          {
                            project.timelines
                          }
                        </span>
                      </div>
                    </div>

                    <div className="project-actions">
                      <a
                        href={
                          project.liveSite
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="live-site"
                      >
                        Live Site

                        <span>
                          ↗
                        </span>
                      </a>

                      <a
                        href={
                          project.liveSite
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="view-project"
                      >
                        View Project

                        <span>
                          ➢
                        </span>
                      </a>
                    </div>
                  </div>

                  {/* ===================================
                      IMAGE
                  ==================================== */}

                  <div className="portfolio-image-area">
                    <a
                      href={
                        project.liveSite
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="portfolio-image-link"
                      aria-label={`View ${project.title} project`}
                    >
                      <div
                        className={`portfolio-image-box ${
                          project.frame
                            ? "has-frame"
                            : ""
                        }`}
                        style={{
                          background:
                            project.frame
                              ? project.frameColor
                              : "#EDEFF5",
                        }}
                      >
                        <Image
                          src={
                            project.image
                          }
                          alt={`${project.title} project`}
                          fill
                          sizes="
                            (max-width: 480px) 100vw,
                            (max-width: 768px) 100vw,
                            (max-width: 1100px) 50vw,
                            50vw
                          "
                          quality={
                            project.frame
                              ? 82
                              : 78
                          }
                          className={`project-image ${
                            project.frame
                              ? "contain"
                              : ""
                          }`}
                          draggable="false"
                        />

                        {/* =================================
                            OVERLAY
                        ================================== */}

                        <div className="image-overlay">
                          <span>
                            View Project

                            <b>
                              ➢
                            </b>
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                </article>
              );
            }
          )}
        </div>
      </div>

      <style jsx>{`
        /* =================================================
           SECTION
        ================================================= */

        .portfolio-section {
          width: 100%;

          background: #f3f8ff;

          color: #0e0e0e;

          font-family:
            "Britti Sans Trial",
            Arial,
            Helvetica,
            sans-serif;

          overflow: hidden;

          box-sizing: border-box;
        }

        .portfolio-container {
          width: 100%;

          max-width: 1400px;

          margin: 0 auto;

          padding:
            24px
            64px
            110px;

          box-sizing: border-box;
        }

        /* =================================================
           HEADER
        ================================================= */

        .portfolio-kicker {
          display: block;

          margin-bottom:
            12px;

          font-size:
            13px;

          letter-spacing:
            0.08em;

          font-weight:
            500;

          color:
            #0e0e0e;
        }

        .portfolio-heading-grid {
          display: grid;

          grid-template-columns:
            minmax(0, 1fr)
            minmax(0, 1fr);

          gap:
            48px;

          align-items:
            start;
        }

        .portfolio-heading-grid h2 {
          margin:
            0;

          font-size:
            34px;

          line-height:
            1.2;

          letter-spacing:
            -0.035em;

          font-weight:
            700;

          color:
            #0e0e0e;
        }

        .portfolio-heading-grid p {
          margin:
            0;

          max-width:
            720px;

          font-size:
            13px;

          line-height:
            1.6;

          font-weight:
            400;

          color:
            #0e0e0e;
        }

        /* =================================================
           FLOW
        ================================================= */

        .portfolio-flow {
          position:
            relative;

          width:
            100%;

          margin-top:
            46px;
        }

        /* =================================================
           PROJECT ROW
        ================================================= */

        .portfolio-row {
          position:
            relative;

          display:
            grid;

          grid-template-columns:
            minmax(0, 1fr)
            70px
            minmax(0, 1fr);

          align-items:
            center;

          width:
            100%;

          min-height:
            570px;

          box-sizing:
            border-box;
        }

        .portfolio-row:not(
          :last-child
        ) {
          border-bottom:
            1px solid
            #dbe6f5;
        }

        /* =================================================
           LINE COLUMN
        ================================================= */

        .portfolio-line-column {
          position:
            absolute;

          top: 0;

          bottom: 0;

          left: 50%;

          width:
            20px;

          transform:
            translateX(
              -50%
            );

          display:
            flex;

          justify-content:
            center;

          z-index:
            5;

          pointer-events:
            none;
        }

        .portfolio-connect-line {
          width:
            2px;

          height:
            100%;

          background:
            linear-gradient(
              to bottom,
              #0180fd 0%,
              #0021af 100%
            );

          transform-origin:
            top center;

          transform:
            scaleY(0);

          will-change:
            transform;
        }

        .portfolio-dot {
          position:
            absolute;

          top: 50%;

          left: 50%;

          width:
            20px;

          height:
            20px;

          transform:
            translate(
              -50%,
              -50%
            );

          border-radius:
            50%;

          background:
            #f3f8ff;

          border:
            3px solid
            #0180fd;

          box-shadow:
            0 0 0 7px
            #f3f8ff;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          z-index:
            5;

          will-change:
            transform,
            opacity;
        }

        .portfolio-dot span {
          width:
            6px;

          height:
            6px;

          border-radius:
            50%;

          background:
            #0180fd;
        }

        /* =================================================
           DETAILS
        ================================================= */

        .portfolio-details {
          grid-column:
            1;

          width:
            100%;

          min-width:
            0;

          padding:
            60px
            50px
            60px
            0;

          border-right:
            1px solid
            #dbe6f5;

          box-sizing:
            border-box;

          will-change:
            transform,
            opacity;
        }

        .portfolio-row.is-reverse
          .portfolio-details {
          grid-column:
            3;

          grid-row:
            1;

          padding:
            60px
            0
            60px
            50px;

          border-right:
            0;

          border-left:
            1px solid
            #dbe6f5;
        }

        /* =================================================
           INDEX
        ================================================= */

        .project-index {
          display:
            inline-flex;

          align-items:
            center;

          gap:
            7px;

          margin-bottom:
            16px;

          font-size:
            12px;

          letter-spacing:
            0.12em;

          font-weight:
            600;

          color:
            #0180fd;
        }

        .project-index span {
          color:
            #8d98a9;
        }

        /* =================================================
           TITLE
        ================================================= */

        .portfolio-details h3 {
          margin:
            0 0 10px;

          font-size:
            34px;

          line-height:
            1.08;

          letter-spacing:
            -0.04em;

          font-weight:
            700;

          color:
            #0e0e0e;
        }

        .project-subtitle {
          margin:
            0 0 18px;

          font-size:
            16px;

          line-height:
            1.35;

          font-weight:
            500;

          color:
            #0e0e0e;
        }

        .project-description {
          max-width:
            520px;

          margin:
            0;

          font-size:
            13px;

          line-height:
            1.75;

          font-weight:
            400;

          color:
            #0e0e0e;
        }

        /* =================================================
           META
        ================================================= */

        .project-meta {
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

          gap:
            22px
            18px;

          margin-top:
            30px;

          max-width:
            550px;
        }

        .meta-group {
          display:
            flex;

          flex-direction:
            column;

          gap:
            5px;

          min-width:
            0;
        }

        .meta-title {
          font-size:
            12px;

          line-height:
            1.2;

          font-weight:
            600;

          color:
            #0e0e0e;
        }

        .meta-list {
          display:
            flex;

          flex-direction:
            column;

          gap:
            1px;
        }

        .meta-list span,
        .meta-value {
          font-size:
            12px;

          line-height:
            1.55;

          font-weight:
            400;

          color:
            #0e0e0e;

          overflow-wrap:
            anywhere;
        }

        /* =================================================
           ACTIONS
        ================================================= */

        .project-actions {
          display:
            flex;

          align-items:
            center;

          flex-wrap:
            wrap;

          gap:
            26px;

          margin-top:
            34px;
        }

        .live-site {
          display:
            inline-flex;

          align-items:
            center;

          gap:
            7px;

          color:
            #0180fd;

          text-decoration:
            none;

          font-size:
            13px;

          font-weight:
            600;

          transition:
            opacity
              0.25s ease,
            transform
              0.25s ease;
        }

        .live-site:hover {
          opacity:
            0.7;

          transform:
            translateY(
              -1px
            );
        }

        .view-project {
          display:
            inline-flex;

          align-items:
            center;

          justify-content:
            center;

          gap:
            8px;

          min-width:
            150px;

          height:
            42px;

          padding:
            0 20px;

          background:
            #0180fd;

          color:
            #ffffff;

          border-radius:
            999px;

          text-decoration:
            none;

          font-size:
            12px;

          font-weight:
            600;

          transition:
            transform
              0.25s ease,
            box-shadow
              0.25s ease;
        }

        .view-project:hover {
          transform:
            translateY(
              -2px
            );

          box-shadow:
            0
            10px
            24px
            rgba(
              1,
              128,
              253,
              0.2
            );
        }

        .view-project span {
          font-size:
            14px;
        }

        /* =================================================
           IMAGE
        ================================================= */

        .portfolio-image-area {
          grid-column:
            3;

          grid-row:
            1;

          width:
            100%;

          padding:
            60px 0;

          min-width:
            0;

          box-sizing:
            border-box;

          will-change:
            transform,
            opacity;
        }

        .portfolio-row.is-reverse
          .portfolio-image-area {
          grid-column:
            1;

          grid-row:
            1;
        }

        .portfolio-image-link {
          display:
            block;

          width:
            100%;

          text-decoration:
            none;

          color:
            inherit;
        }

        .portfolio-image-box {
          position:
            relative;

          width:
            100%;

          height:
            390px;

          min-height:
            390px;

          border-radius:
            20px;

          overflow:
            hidden;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;
        }

        .project-image {
          object-fit:
            cover;

          user-select:
            none;

          -webkit-user-drag:
            none;

          transform-origin:
            center center;

          will-change:
            transform;
        }

        .project-image.contain {
          object-fit:
            contain;
        }

        /* =================================================
           OVERLAY
        ================================================= */

        .image-overlay {
          position:
            absolute;

          inset:
            0;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          background:
            rgba(
              14,
              14,
              14,
              0.28
            );

          opacity:
            0;

          transition:
            opacity
              0.3s ease;

          pointer-events:
            none;
        }

        .image-overlay span {
          display:
            inline-flex;

          align-items:
            center;

          gap:
            8px;

          padding:
            13px
            22px;

          border-radius:
            999px;

          background:
            #ffffff;

          color:
            #0e0e0e;

          font-size:
            13px;

          font-weight:
            600;

          transform:
            translateY(
              8px
            )
            scale(
              0.96
            );

          transition:
            transform
              0.3s ease;
        }

        .image-overlay span b {
          font-size:
            15px;
        }

        .portfolio-image-link:hover
          .image-overlay {
          opacity:
            1;
        }

        .portfolio-image-link:hover
          .image-overlay span {
          transform:
            translateY(
              0
            )
            scale(
              1
            );
        }

        /* =================================================
           TABLET
        ================================================= */

        @media (max-width: 1100px) {
          .portfolio-container {
            padding:
              24px
              32px
              90px;
          }

          .portfolio-heading-grid {
            gap:
              30px;
          }

          .portfolio-heading-grid h2 {
            font-size:
              30px;
          }

          .portfolio-row {
            grid-template-columns:
              minmax(0, 1fr)
              54px
              minmax(0, 1fr);

            min-height:
              520px;
          }

          .portfolio-details {
            padding:
              48px
              28px
              48px
              0;
          }

          .portfolio-row.is-reverse
            .portfolio-details {
            padding:
              48px
              0
              48px
              28px;
          }

          .portfolio-image-area,
          .portfolio-row.is-reverse
            .portfolio-image-area {
            padding:
              48px 0;
          }

          .portfolio-image-box {
            height:
              340px;

            min-height:
              340px;
          }

          .portfolio-details h3 {
            font-size:
              30px;
          }
        }

        /* =================================================
           MOBILE
        ================================================= */

        @media (max-width: 768px) {
          .portfolio-container {
            padding:
              48px
              20px
              64px;
          }

          .portfolio-kicker {
            font-size:
              12px;
          }

          .portfolio-heading-grid {
            display:
              flex;

            flex-direction:
              column;

            gap:
              20px;
          }

          .portfolio-heading-grid h2 {
            font-size:
              22px;

            line-height:
              1.2;
          }

          .portfolio-heading-grid p {
            font-size:
              12px;

            line-height:
              1.6;
          }

          /* =========================================
             FLOW
          ========================================== */

          .portfolio-flow {
            margin-top:
              38px;

            padding-left:
              24px;
          }

          /* =========================================
             PROJECT
          ========================================== */

          .portfolio-row,
          .portfolio-row.is-reverse {
            display:
              grid;

            grid-template-columns:
              18px
              minmax(
                0,
                1fr
              );

            grid-template-rows:
              auto auto;

            column-gap:
              18px;

            min-height:
              0;

            padding:
              36px 0;

            border-bottom:
              1px solid
              #dbe6f5;
          }

          /* =========================================
             LINE
          ========================================== */

          .portfolio-line-column {
            left:
              9px;

            top:
              0;

            bottom:
              0;

            width:
              18px;

            transform:
              translateX(
                -50%
              );
          }

          .portfolio-connect-line {
            width:
              2px;

            height:
              100%;

            will-change:
              transform;
          }

          .portfolio-dot {
            top:
              34px;

            left:
              50%;

            width:
              15px;

            height:
              15px;

            border-width:
              2px;

            box-shadow:
              0 0 0 5px
              #f3f8ff;
          }

          .portfolio-dot span {
            width:
              4px;

            height:
              4px;
          }

          /* =========================================
             IMAGE
          ========================================== */

          .portfolio-image-area,
          .portfolio-row.is-reverse
            .portfolio-image-area {
            grid-column:
              2;

            grid-row:
              1;

            order:
              1;

            width:
              100%;

            padding:
              0 0 22px;

            will-change:
              transform,
              opacity;
          }

          .portfolio-image-box {
            width:
              100%;

            height:
              230px;

            min-height:
              230px;

            border-radius:
              16px;
          }

          /* =========================================
             DETAILS
          ========================================== */

          .portfolio-details,
          .portfolio-row.is-reverse
            .portfolio-details {
            grid-column:
              2;

            grid-row:
              2;

            order:
              2;

            width:
              100%;

            height:
              auto;

            padding:
              0 0 6px;

            border:
              0;

            will-change:
              transform,
              opacity;
          }

          .project-index {
            margin-bottom:
              12px;

            font-size:
              11px;
          }

          .portfolio-details h3 {
            font-size:
              24px;

            line-height:
              1.1;
          }

          .project-subtitle {
            font-size:
              15px;

            line-height:
              1.4;

            margin-bottom:
              14px;
          }

          .project-description {
            max-width:
              none;

            font-size:
              13px;

            line-height:
              1.7;
          }

          /* =========================================
             META
          ========================================== */

          .project-meta {
            grid-template-columns:
              repeat(
                2,
                minmax(
                  0,
                  1fr
                )
              );

            gap:
              18px
              14px;

            margin-top:
              25px;

            max-width:
              none;
          }

          .meta-title {
            font-size:
              12px;
          }

          .meta-list span,
          .meta-value {
            font-size:
              12px;

            line-height:
              1.55;
          }

          /* =========================================
             BUTTONS
          ========================================== */

          .project-actions {
            margin-top:
              25px;

            gap:
              15px;
          }

          .live-site {
            font-size:
              13px;
          }

          .view-project {
            min-width:
              140px;

            height:
              42px;

            font-size:
              12px;
          }

          .image-overlay {
            display:
              none;
          }
        }

        /* =================================================
           SMALL MOBILE
        ================================================= */

        @media (max-width: 480px) {
          .portfolio-container {
            padding:
              40px
              20px
              56px;
          }

          .portfolio-heading-grid h2 {
            font-size:
              20px;
          }

          .portfolio-heading-grid p {
            font-size:
              12px;
          }

          .portfolio-flow {
            padding-left:
              20px;

            margin-top:
              34px;
          }

          .portfolio-row,
          .portfolio-row.is-reverse {
            grid-template-columns:
              16px
              minmax(
                0,
                1fr
              );

            column-gap:
              16px;

            padding:
              30px 0;
          }

          .portfolio-line-column {
            left:
              8px;

            width:
              16px;
          }

          .portfolio-dot {
            top:
              28px;

            width:
              14px;

            height:
              14px;
          }

          .portfolio-image-box {
            height:
              210px;

            min-height:
              210px;

            border-radius:
              15px;
          }

          .portfolio-details h3 {
            font-size:
              22px;
          }

          .project-subtitle {
            font-size:
              14px;
          }

          .project-description {
            font-size:
              12px;

            line-height:
              1.7;
          }

          .project-meta {
            grid-template-columns:
              1fr 1fr;

            gap:
              17px
              12px;

            margin-top:
              22px;
          }

          .meta-title {
            font-size:
              11px;
          }

          .meta-list span,
          .meta-value {
            font-size:
              11px;
          }

          .project-actions {
            flex-direction:
              column;

            align-items:
              flex-start;

            margin-top:
              22px;
          }

          .view-project {
            width:
              100%;
          }
        }

        /* =================================================
           TOUCH
        ================================================= */

        @media (hover: none) {
          .live-site:hover {
            opacity:
              1;

            transform:
              none;
          }

          .view-project:hover {
            transform:
              none;

            box-shadow:
              none;
          }

          .portfolio-image-link:hover
            .image-overlay {
            opacity:
              0;
          }
        }

        /* =================================================
           REDUCED MOTION
        ================================================= */

        @media (
          prefers-reduced-motion:
            reduce
        ) {
          .portfolio-connect-line {
            transform:
              scaleY(1) !important;
          }

          .portfolio-dot,
          .portfolio-details,
          .portfolio-image-area {
            opacity:
              1 !important;

            transform:
              none !important;

            will-change:
              auto;
          }

          .project-image {
            will-change:
              auto;
          }
        }
      `}</style>
    </section>
  );
}