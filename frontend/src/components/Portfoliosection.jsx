"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    id: 1,
    logo: "",
    title: "Malani Impex INC",
    subtitle: "Heritage Textile & Home Décor Brand",
    description:
      "Rooted in Jaipur, India, Malani Impex blends traditional craftsmanship with ethical production. The redesigned website translates this legacy into a sophisticated digital presence that communicates authenticity, scale, and international trust.",
    deliverables: ["Web Development", "B2B Commerce", "E-commerce"],
    industry: "Home Décor & Handcrafted Textiles",
    liveSite: "malaniimpexinc.com",
    published: "©2026",
    timelines: "2-3 Months",
    image: "/home/p.png",
    frame: true,
    frameColor: "#F8F4C9",
  },
  {
    id: 2,
    logo: "",
    title: "Furrmaa",
    subtitle: "Pet Care Digital Platform (App & Web)",
    description:
      "Designed for both emerging startups and established enterprises, Furrmaa delivers an integrated pet care ecosystem powered by AI-driven strategy and creative innovation, enabling scalable mobile and web experiences that drive engagement, commerce, and operational efficiency.",
    deliverables: [
      "Mobile Apps",
      "Web Development",
      "E-commerce",
      "Pet Care Enterprise",
    ],
    industry: "Pet Care Digital Platform",
    liveSite: "furrmaa.com",
    published: "©2026",
    timelines: "2-3 Months",
    image: "/home/p1.png",
    frame: false,
  },
  {
    id: 3,
    logo: "",
    title: "Ratoomals",
    subtitle: "Handcrafted Decor & Sculpture Manufacturer",
    description:
      "Ratoomals is a Jaipur-based heritage manufacturer specializing in handcrafted statues, sculptures, and decorative pieces for global B2B markets. Blending traditional artistry with large-scale production, the brand serves retailers, wholesalers, and interior buyers worldwide.",
    deliverables: [
      "Web Development",
      "B2B Commerce",
      "E-commerce",
      "Manufacturing",
    ],
    industry: "Handcrafted Decor",
    liveSite: "ratoomals.com",
    published: "©2026",
    timelines: "2-3 Months",
    image: "/home/p2.png",
    frame: false,
  },
];

function useViewportWidth() {
  const [width, setWidth] = useState(1400);

  useEffect(() => {
    const update = () =>
      setWidth(window.innerWidth);

    update();

    window.addEventListener(
      "resize",
      update
    );

    return () =>
      window.removeEventListener(
        "resize",
        update
      );
  }, []);

  return width;
}

export default function PortfolioSection() {
  const width = useViewportWidth();

  const isMobile =
    width <= 768;

  const isTablet =
    width > 768 &&
    width <= 1024;

  const isTinyMobile =
    width <= 420;

  const [hoveredId, setHoveredId] =
    useState(null);

  return (
    <section
      style={{
        background: "#F3F8FF",
        width: "100%",

        padding: isMobile
          ? "48px 20px 64px 20px"
          : "24px 64px 96px 64px",
      }}
    >
      {/* =================================================
          HEADER
      ================================================= */}

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <span
          style={{
            fontFamily:
              "'Britti Sans Trial', sans-serif",

            fontWeight: 500,

            fontSize: "13px",

            letterSpacing: "0.08em",

            color: "#0E0E0E",

            display: "block",

            marginBottom: "12px",
          }}
        >
          PORTFOLIO
        </span>

        <div
          style={{
            display: "flex",

            flexDirection:
              isMobile
                ? "column"
                : "row",

            justifyContent:
              "space-between",

            alignItems:
              "flex-start",

            gap: isMobile
              ? "20px"
              : "48px",
          }}
        >
          <h2
            style={{
              fontFamily:
                "'Britti Sans Trial', sans-serif",

              fontWeight: 700,

              fontSize: isTinyMobile
                ? "18px"
                : isMobile
                ? "21px"
                : isTablet
                ? "28px"
                : "34px",

              lineHeight: 1.2,

              color: "#0E0E0E",

              width: "100%",

              maxWidth: "none",

              margin: 0,

              whiteSpace: "nowrap",
            }}
          >
            We&apos;ll Let The Work Do The Talking
          </h2>

          <p
            style={{
              fontFamily:
                "'Britti Sans Trial', sans-serif",

              fontWeight: 400,

              fontSize: isMobile
                ? "12px"
                : "13px",

              lineHeight: 1.6,

              color: "#0E0E0E",

              maxWidth: isMobile
                ? "100%"
                : "720px",

              margin: 0,
            }}
          >
            Every case study below represents a real problem, a real team,
            and a real outcome. We&apos;ve selected them not because they&apos;re
            our biggest contracts but because they best illustrate what
            happens when strategy, design, and engineering work together
            without compromise.
          </p>
        </div>
      </div>

      {/* =================================================
          PROJECT ROWS
      ================================================= */}

      <div
        style={{
          maxWidth: "1400px",
          margin: "48px auto 0 auto",
        }}
      >
        {projects.map(
          (project, index) => {
            const isReverse =
              index % 2 === 1;

            const isHovered =
              hoveredId ===
              project.id;

            const isLast =
              index ===
              projects.length - 1;

            return (
              <div
                key={project.id}
                style={{
                  display: "grid",
                  

                  gridTemplateColumns:
                    isMobile
                      ? "1fr"
                      : "1fr 1fr",

                  gap: isMobile
                    ? "24px"
                    : isTablet
                    ? "40px"
                    : "64px",

                  padding: isMobile
                    ? "32px 0"
                    : "48px 0",

                  /* =================================
                     HORIZONTAL DIVIDERS
                  ================================= */

                  borderTop:
                    "1px solid #DBE6F5",

                  borderBottom:
                    isLast
                      ? "1px solid #DBE6F5"
                      : "none",
                }}
              >
                {/* =================================
                    CONTENT COLUMN
                ================================= */}

                <div
                  style={{
                    display: "flex",
                    

                    flexDirection:
                      "column",

                    order: isMobile
                      ? 2
                      : isReverse
                      ? 2
                      : 1,

                    paddingRight:
                      !isMobile &&
                      !isReverse
                        ? "32px"
                        : undefined,

                    paddingLeft:
                      !isMobile &&
                      isReverse
                        ? "32px"
                        : undefined,

                    borderRight:
                      !isMobile &&
                      !isReverse
                        ? "1px solid #DBE6F5"
                        : "none",

                    borderLeft:
                      !isMobile &&
                      isReverse
                        ? "1px solid #DBE6F5"
                        : "none",
                  }}
                >
                  {/* PROJECT TITLE */}

                  <div
                    style={{
                      display: "flex",

                      alignItems: "center",

                      gap: "10px",

                      marginBottom: "14px",
                    }}
                  >
                    {project.logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={project.logo}
                        alt={project.title}
                        style={{
                          width: "28px",
                          height: "28px",

                          borderRadius: "6px",

                          objectFit:
                            "contain",
                        }}
                      />
                    ) : null}

                    <h3
                      style={{
                        fontFamily:
                          "'Britti Sans Trial', sans-serif",

                        fontWeight: 700,

                        fontSize: "22px",

                        color: "#0E0E0E",

                        margin: 0,
                      }}
                    >
                      {project.title}
                    </h3>
                  </div>

                  {/* SUBTITLE */}

                  <p
                    style={{
                      fontFamily:
                        "'Britti Sans Trial', sans-serif",

                      fontWeight: 500,

                      fontSize: "15px",

                      color: "#0E0E0E",

                      marginBottom:
                        "14px",

                      marginTop: 0,
                    }}
                  >
                    {project.subtitle}
                  </p>

                  {/* DESCRIPTION */}

                  <p
                    style={{
                      fontFamily:
                        "'Britti Sans Trial', sans-serif",

                      fontWeight: 400,

                      fontSize: "12px",

                      lineHeight: 1.7,

                      color: "#0E0E0E",

                      maxWidth: isMobile
                        ? "100%"
                        : "440px",

                      marginBottom:
                        isMobile
                          ? "24px"
                          : "40px",

                      marginTop: 0,
                    }}
                  >
                    {project.description}
                  </p>

                  {/* META */}

                  <div
                    style={{
                      display:
                        "grid",

                      gridTemplateColumns:
                        isMobile
                          ? isTinyMobile
                            ? "1fr"
                            : "repeat(2, 1fr)"
                          : "repeat(3, 1fr)",

                      columnGap:
                        "16px",

                      rowGap:
                        isMobile
                          ? "20px"
                          : "0px",

                      marginTop:
                        "auto",
                    }}
                  >
                    {/* DELIVERABLES */}

                    <div
                      style={{
                        display:
                          "flex",

                        flexDirection:
                          "column",

                        gap: "4px",
                      }}
                    >
                      <span
                        style={{
                          fontFamily:
                            "'Britti Sans Trial', sans-serif",

                          fontWeight: 600,

                          fontSize: "13px",

                          color:
                            "#0E0E0E",

                          marginBottom:
                            "2px",
                        }}
                      >
                        Deliverables
                      </span>

                      {project.deliverables.map(
                        (d) => (
                          <span
                            key={d}
                            style={{
                              fontFamily:
                                "'Britti Sans Trial', sans-serif",

                              fontWeight: 400,

                              fontSize:
                                "13px",

                              lineHeight:
                                1.6,

                              color:
                                "#0E0E0E",
                            }}
                          >
                            {d}
                          </span>
                        )
                      )}
                    </div>

                    {/* INDUSTRY / LIVE SITE */}

                    <div
                      style={{
                        display:
                          "flex",

                        flexDirection:
                          "column",

                        gap: "4px",
                      }}
                    >
                      <div
                        style={{
                          display:
                            "flex",

                          flexDirection:
                            "column",

                          gap: "4px",
                        }}
                      >
                        <span
                          style={{
                            fontFamily:
                              "'Britti Sans Trial', sans-serif",

                            fontWeight: 600,

                            fontSize:
                              "13px",

                            color:
                              "#0E0E0E",
                          }}
                        >
                          Industry
                        </span>

                        <span
                          style={{
                            fontFamily:
                              "'Britti Sans Trial', sans-serif",

                            fontWeight: 400,

                            fontSize:
                              "13px",

                            lineHeight:
                              1.6,

                            color:
                              "#0E0E0E",
                          }}
                        >
                          {project.industry}
                        </span>
                      </div>

                      <div
                        style={{
                          display:
                            "flex",

                          flexDirection:
                            "column",

                          gap: "4px",

                          marginTop:
                            "18px",
                        }}
                      >
                        <span
                          style={{
                            fontFamily:
                              "'Britti Sans Trial', sans-serif",

                            fontWeight: 600,

                            fontSize:
                              "13px",

                            color:
                              "#0E0E0E",
                          }}
                        >
                          Live Site
                        </span>

                     <a
  href={
    project.liveSite.startsWith("http")
      ? project.liveSite
      : `https://${project.liveSite}`
  }
  target="_blank"
  rel="noopener noreferrer"
  style={{
    fontFamily:
      "'Britti Sans Trial', sans-serif",

    fontWeight: 400,

    fontSize: "13px",

    lineHeight: 1.6,

    color: "#0180FD",

    textDecoration: "none",

    display: "inline-block",

    cursor: "pointer",
  }}
>
  {project.liveSite}
</a>
                      </div>
                    </div>

                    {/* PUBLISHED / TIMELINE */}

                    <div
                      style={{
                        display:
                          "flex",

                        flexDirection:
                          "column",

                        gap: "4px",
                      }}
                    >
                      <div
                        style={{
                          display:
                            "flex",

                          flexDirection:
                            "column",

                          gap: "4px",
                        }}
                      >
                        <span
                          style={{
                            fontFamily:
                              "'Britti Sans Trial', sans-serif",

                            fontWeight: 600,

                            fontSize:
                              "13px",

                            color:
                              "#0E0E0E",
                          }}
                        >
                          Published
                        </span>

                        <span
                          style={{
                            fontFamily:
                              "'Britti Sans Trial', sans-serif",

                            fontWeight: 400,

                            fontSize:
                              "13px",

                            lineHeight:
                              1.6,

                            color:
                              "#0E0E0E",
                          }}
                        >
                          {project.published}
                        </span>
                      </div>

                      <div
                        style={{
                          display:
                            "flex",

                          flexDirection:
                            "column",

                          gap: "4px",

                          marginTop:
                            "18px",
                        }}
                      >
                        <span
                          style={{
                            fontFamily:
                              "'Britti Sans Trial', sans-serif",

                            fontWeight: 600,

                            fontSize:
                              "13px",

                            color:
                              "#0E0E0E",
                          }}
                        >
                          Timelines
                        </span>

                        <span
                          style={{
                            fontFamily:
                              "'Britti Sans Trial', sans-serif",

                            fontWeight: 400,

                            fontSize:
                              "13px",

                            lineHeight:
                              1.6,

                            color:
                              "#0E0E0E",
                          }}
                        >
                          {project.timelines}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* =================================
                    IMAGE COLUMN
                ================================= */}

                <a
                  href="#"
                  onMouseEnter={() =>
                    setHoveredId(
                      project.id
                    )
                  }
                  onMouseLeave={() =>
                    setHoveredId(null)
                  }
                  onTouchStart={() =>
                    setHoveredId(
                      project.id
                    )
                  }
                  style={{
                    order: isMobile
                      ? 1
                      : isReverse
                      ? 1
                      : 2,

                    display:
                      project.frame
                        ? "flex"
                        : "block",

                    alignItems:
                      project.frame
                        ? "center"
                        : undefined,

                    justifyContent:
                      project.frame
                        ? "center"
                        : undefined,

                    position:
                      "relative",

                    borderRadius:
                      "20px",

                    overflow:
                      "hidden",

                    textDecoration:
                      "none",

                    cursor:
                      "pointer",

                    minHeight:
                      isMobile
                        ? project.frame
                          ? "180px"
                          : "220px"
                        : isTablet
                        ? project.frame
                          ? "220px"
                          : "280px"
                        : project.frame
                        ? "240px"
                        : "320px",

                    padding:
                      project.frame
                        ? isMobile
                          ? "24px"
                          : "40px"
                        : 0,

                    background:
                      project.frame
                        ? project.frameColor
                        : "#EDEFF5",
                  }}
                >
                  {/* IMAGE */}

                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={
                      project.image
                    }
                    alt={
                      project.title
                    }
                    style={{
                      width: "100%",

                      height: "100%",

                      objectFit:
                        project.frame
                          ? "contain"
                          : "cover",

                      display: "block",

                      borderRadius:
                        project.frame
                          ? 0
                          : "12px",
                    }}
                  />

                  {/* HOVER OVERLAY */}

                  <div
                    style={{
                      position:
                        "absolute",

                      inset: 0,

                      display: "flex",

                      alignItems:
                        "center",

                      justifyContent:
                        "center",

                      background:
                        "rgba(14, 14, 14, 0.35)",

                      opacity:
                        isHovered
                          ? 1
                          : 0,

                      transition:
                        "opacity 0.3s ease",

                      borderRadius:
                        "20px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily:
                          "'Britti Sans Trial', sans-serif",

                        fontWeight: 500,

                        fontSize:
                          isMobile
                            ? "13px"
                            : "14px",

                        color:
                          "#0E0E0E",

                        background:
                          "#ffffff",

                        padding:
                          isMobile
                            ? "12px 20px"
                            : "14px 24px",

                        borderRadius:
                          "999px",

                        display:
                          "inline-flex",

                        alignItems:
                          "center",

                        gap: "8px",

                        transform:
                          isHovered
                            ? "translateY(0) scale(1)"
                            : "translateY(8px) scale(0.96)",

                        transition:
                          "transform 0.3s ease",

                        boxShadow:
                          "0 8px 20px rgba(0, 0, 0, 0.18)",
                      }}
                    >
                      View Project  ➢

                    
                    </span>
                  </div>
                </a>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}