"use client";

import Contactform from "@/components/Contactform";
import { useEffect, useRef, useState } from "react";

/* =========================================================
   PORTFOLIO DATA
   Image can be changed individually later.
========================================================= */

const PROJECTS = [
  {
    id: 1,
    logo: "/header/5.png",
    title: "Malani Impex INC",
    subtitle: "Heritage Textile & Home Décor Brand",
    description:
      "Rooted in Jaipur, India, Malani Impex blends traditional craftsmanship with ethical production. The redesigned website translates this legacy into a sophisticated digital presence that communicates authenticity, scale, and international trust.",
    deliverables: ["Web Development", "B2B Commerce", "E-commerce"],
    industry: "Home Décor & Handcrafted Textiles",
    liveSite: "malaniimpexinc.com",
    href: "https://www.malaniimpexinc.com",
    published: "©2026",
    timeline: "2-3 Months",
    image: "/home/p.png",
    frame: true,
    frameColor: "#F8F4C9",
  },
  {
    id: 2,
    logo: "/header/1.png",
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
    href: "https://www.furrmaa.com",
    published: "©2026",
    timeline: "2-3 Months",
    image: "/home/p1.png",
    frame: false,
  },
  {
    id: 3,
    logo: "/header/2.png",
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
    href: "https://www.ratoomals.com",
    published: "©2026",
    timeline: "2-3 Months",
    image: "/home/p2.png",
    frame: false,
  },
];

/* =========================================================
   COMMON DUMMY IMAGE
   Replace image value per project whenever ready.
========================================================= */


// Add a project logo later without changing the layout.
// Example: logo: "/portfolio/logos/malani.png"
// Add a project screenshot later with the `image` property.
// Example: image: "/portfolio/malani.png"

/* =========================================================
   NUMBER ANIMATION
========================================================= */

function AnimatedNumber({ value, suffix = "", start }) {
  const [display, setDisplay] = useState(0);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!start) {
      setDisplay(0);
      return undefined;
    }

    const target = Number(value);
    const duration = 1300;
    const startedAt = performance.now();

    const animate = (time) => {
      const progress = Math.min(
        1,
        (time - startedAt) / duration
      );

      const eased =
        1 - Math.pow(1 - progress, 4);

      setDisplay(
        Math.round(target * eased)
      );

      if (progress < 1) {
        frameRef.current =
          requestAnimationFrame(animate);
      }
    };

    frameRef.current =
      requestAnimationFrame(animate);

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [value, start]);

  return (
    <>
      {display}
      {suffix}
    </>
  );
}

/* =========================================================
   PORTFOLIO PAGE
========================================================= */

export default function PortfolioPage() {
  const [statsStarted, setStatsStarted] =
    useState(false);
  useEffect(() => {
    let cancelled = false;
    let timer = null;

    const begin = () => {
      if (cancelled) return;

      timer = window.setTimeout(() => {
        if (!cancelled) {
          setStatsStarted(true);
        }
      }, 120);
    };

    if (document.fonts?.ready) {
      document.fonts.ready
        .then(begin)
        .catch(begin);
    } else {
      begin();
    }

    return () => {
      cancelled = true;
      if (timer !== null) {
        window.clearTimeout(timer);
      }
    };
  }, []);
return (
    <main className="portfolio-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="portfolio-hero">

        <div className="portfolio-container">

          <div className="portfolio-hero-grid">

            <div className="portfolio-hero-left">
              <div className="portfolio-eyebrow">
                Portfolio
              </div>
            </div>

            <div className="portfolio-hero-right">

              <h1 className="portfolio-hero-title">
                Ideas We&apos;ve Turned Into Impact
              </h1>

              <p className="portfolio-hero-description">
                Every project starts as a problem worth solving.
                Here&apos;s a look at how we&apos;ve helped businesses
                turn that problem into something people actually use
                websites that get visited, apps that get downloaded,
                and systems that quietly make everything run better.
              </p>

            </div>

          </div>


          {/* =================================================
              STATS
          ================================================= */}

          <div className="portfolio-stats">

            <div className="portfolio-stat">
              <div className="portfolio-stat-number">
                <AnimatedNumber
                  value={6}
                  suffix="+"
                  start={statsStarted}
                />
              </div>
              <div className="portfolio-stat-label">
                Years of Industry Experience
              </div>
            </div>

            <div className="portfolio-stat">
              <div className="portfolio-stat-number">
                <AnimatedNumber
                  value={400}
                  suffix="+"
                  start={statsStarted}
                />
              </div>
              <div className="portfolio-stat-label">
                Digital Assets Delivered
              </div>
            </div>

            <div className="portfolio-stat">
              <div className="portfolio-stat-number">
                <AnimatedNumber
                  value={10}
                  suffix="+"
                  start={statsStarted}
                />
              </div>
              <div className="portfolio-stat-label">
                Awards and Certifications
              </div>
            </div>

            <div className="portfolio-stat">
              <div className="portfolio-stat-number">
                <AnimatedNumber
                  value={90}
                  suffix="%"
                  start={statsStarted}
                />
              </div>
              <div className="portfolio-stat-label">
                Returning Client Rate
              </div>
            </div>

          </div>


          {/* CTA */}

          <div className="portfolio-hero-cta">
            <a
              href="/book-call"
              className="portfolio-primary-button"
            >
              Get a Free Consultation
              <span>▲</span>
            </a>
          </div>

        </div>

      </section>


      {/* =====================================================
          PROJECT LIST
      ===================================================== */}

      <section className="portfolio-list-section">

        <div className="portfolio-container">

          <div className="portfolio-projects">

            {PROJECTS.map(
              (project, index) => {
                const reverse =
                  index % 2 === 1;
return (
                  <article
                    className={`portfolio-project ${
                      reverse
                        ? "portfolio-project-reverse"
                        : ""
                    }`}
                    key={`${project.title}-${index}`}
                  >

                    {/* =================================================
                        PROJECT CONTENT
                    ================================================= */}

                    <div className="portfolio-project-content">

                      <div className="portfolio-project-heading">

                        {project.logo ? (
                          <div className="portfolio-project-logo">
                            <img
                              src={project.logo}
                              alt=""
                              width="56"
                              height="56"
                              loading="lazy"
                              decoding="async"
                              draggable="false"
                            />
                          </div>
                        ) : null}

                        <div className="portfolio-project-heading-copy">
                          <h2 className="portfolio-project-title">
                            {project.title}
                          </h2>

                          <p className="portfolio-project-subtitle">
                            {project.subtitle}
                          </p>
                        </div>

                      </div>


                      <p className="portfolio-project-description">
                        {project.description}
                      </p>


                      <div className="portfolio-project-meta">

                        <div className="portfolio-meta-group">

                          <span>
                            Deliverables
                          </span>

                          {project.deliverables.map(
                            (item) => (
                              <strong
                                key={item}
                              >
                                {item}
                              </strong>
                            )
                          )}

                        </div>


                        <div className="portfolio-meta-group">

                          <span>
                            Industry
                          </span>

                          <strong>
                            {project.industry}
                          </strong>

                          <span className="portfolio-live-label">
                            Live Site
                          </span>

                          <a
                            href={project.href || "#"}
                            className="portfolio-live-link"
                            target={
                              project.href
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              project.href
                                ? "noopener noreferrer"
                                : undefined
                            }
                          >
                            {project.liveSite}
                          </a>

                        </div>


                        <div className="portfolio-meta-group">

                          <span>
                            Published
                          </span>

                          <strong>
                            {project.published}
                          </strong>

                          <span className="portfolio-live-label">
                            Timeline
                          </span>

                          <strong>
                            {project.timeline}
                          </strong>

                        </div>

                      </div>

                    </div>


                    {/* =================================================
                        PROJECT IMAGE
                    ================================================= */}

                    <div className="portfolio-project-media">

                      <div className="portfolio-image-wrap">

                        <img
                          src={
                            project.image 
                          }
                          alt={project.title}
                          className="portfolio-project-image"
                          width="760"
                          height="470"
                          loading={
                            index === 0
                              ? "eager"
                              : "lazy"
                          }
                          decoding="async"
                          draggable="false"
                        />

                        <a
                          href={project.href || "#"}
                          className="portfolio-view-button"
                          target={
                            project.href
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            project.href
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          View Project →
                        </a>

                      </div>

                    </div>

                  </article>
                );
              }
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT FORM
      ===================================================== */}

     <Contactform />


      {/* =====================================================
          CSS
      ===================================================== */}

      <style>{`

        /* =====================================================
           BASE
        ===================================================== */

        .portfolio-page {
          --bg: #F3F8FF;
          --text: #0E0E0E;
          --blue: #0180FD;
          --deep-blue: #0021AF;
          --line: #D7DFEA;

          width: 100%;
          min-height: 100vh;
          margin: 0;
          padding: 0;

          background: var(--bg);
          color: var(--text);

          font-family:
            "Britti Sans Trial",
            Arial,
            Helvetica,
            sans-serif;

          overflow-x: hidden;
          overflow-anchor: none;
        }

        .portfolio-page *,
        .portfolio-page *::before,
        .portfolio-page *::after {
          box-sizing: border-box;
        }


        /* =====================================================
           CONTAINER
        ===================================================== */

        .portfolio-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 30px;
        }


        /* =====================================================
           HERO
        ===================================================== */

        .portfolio-hero {
          width: 100%;
          padding: 42px 0 63px;
          background: var(--bg);
        }

        .portfolio-hero-grid {
          display: grid;
          grid-template-columns:
            minmax(180px, 0.56fr)
            minmax(0, 1.44fr);

          column-gap: 56px;
          align-items: start;
        }

        .portfolio-hero-left {
          padding-top: 5px;
        }

        .portfolio-eyebrow {
          margin: 0;

          font-size: 16px;
          line-height: 1.2;
          font-weight: 400;
        }

        .portfolio-hero-right {
          min-width: 0;
        }

        .portfolio-hero-title {
          max-width: 820px;
          margin: 0;

          font-size: 30px;
          line-height: 1.18;
          font-weight: 700;

          letter-spacing: -0.04em;
        }

        .portfolio-hero-description {
          max-width: 820px;
          margin: 24px 0 0;

          font-size: 14px;
          line-height: 1.65;
          font-weight: 400;
        }


        /* =====================================================
           STATS
        ===================================================== */

        .portfolio-stats {
          width: 100%;
          margin-top: 43px;

          display: grid;
          grid-template-columns:
            repeat(4, minmax(0, 1fr));
        }

        .portfolio-stat {
          min-width: 0;
          min-height: 72px;

          padding:
            6px 18px 7px;

          display: flex;
          flex-direction: column;
          align-items: center;

          text-align: center;

          border-right:
            1px solid var(--line);
        }

        .portfolio-stat:first-child {
          padding-left: 0;
        }

        .portfolio-stat:last-child {
          padding-right: 0;
          border-right: 0;
        }

        .portfolio-stat-number {
          width: 5ch;
          min-height: 34px;

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 45px;
          line-height: 1;
          font-weight: 700;

          letter-spacing: -0.05em;
          font-variant-numeric: tabular-nums;

          color: #0B63E5;
        }

        .portfolio-stat-label {
          max-width: 190px;
          margin-top: 9px;

          font-size: 13px;
          line-height: 1.25;
          font-weight: 700;

          color: #0B63E5;
        }


        /* =====================================================
           HERO BUTTON
        ===================================================== */

        .portfolio-hero-cta {
          display: flex;
          justify-content: center;
          margin-top: 22px;
        }

        .portfolio-primary-button {
          min-width: 145px;
          height: 39px;

          padding: 0 17px;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 5px;

          border-radius: 999px;

          background:
            linear-gradient(
              135deg,
              var(--blue),
              var(--deep-blue)
            );

          color: #ffffff;

          font-size: 12px;
          line-height: 1;
          font-weight: 500;

          text-decoration: none;

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .portfolio-primary-button span {
          font-size: 7px;
        }

        .portfolio-primary-button:hover {
          transform: translateY(-2px);

          box-shadow:
            0 12px 28px
            rgba(0, 33, 175, 0.18);
        }


        /* =====================================================
           PROJECT LIST
        ===================================================== */

        .portfolio-list-section {
          width: 100%;
          padding: 0 0 42px;
          background: var(--bg);
        }

        .portfolio-projects {
          width: 100%;
        }


        /* =====================================================
           PROJECT ROW
        ===================================================== */

        .portfolio-project {
          width: 100%;

          display: grid;

          grid-template-columns:
            minmax(0, 1fr)
            1px
            minmax(0, 1.1fr);

          min-height: 304px;

          border-top:
            1px solid var(--line);

          overflow: hidden;

          opacity: 1;
          transform: none;
        }

        .portfolio-project:last-child {
          border-bottom:
            1px solid var(--line);
        }


        /* Alternate layout */

        .portfolio-project-reverse {
          grid-template-columns:
            minmax(0, 1.1fr)
            1px
            minmax(0, 1fr);
        }

        .portfolio-project-reverse
          .portfolio-project-content {
          grid-column: 3;
          grid-row: 1;
          padding:
            29px 0 29px 42px;
        }

        .portfolio-project-reverse
          .portfolio-project-media {
          grid-column: 1;
          grid-row: 1;
          padding:
            22px 42px 22px 0;
        }


        /* =====================================================
           PROJECT CONTENT
        ===================================================== */

        .portfolio-project-content {
          min-width: 0;
          padding:
            29px 42px 29px 0;

          display: flex;
          flex-direction: column;
        }

        .portfolio-project-heading {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .portfolio-project-logo {
          width: 56px;
          height: 56px;

          flex: 0 0 56px;

          display: flex;
          align-items: center;
          justify-content: center;

          overflow: hidden;

          border-radius: 10px;

          background: #F3F8FF;
        }

        .portfolio-project-logo img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: contain;
          object-position: center;

          user-select: none;
          pointer-events: none;
          -webkit-user-drag: none;
        }

        .portfolio-project-heading-copy {
          min-width: 0;
        }

        .portfolio-project-title {
          margin: 0;

          font-size: 24px;
          line-height: 1.2;
          font-weight: 700;

          letter-spacing: -0.02em;
        }

        .portfolio-project-subtitle {
          margin: 6px 0 0;

          font-size: 16px;
          line-height: 1.3;
          font-weight: 500;
        }

        .portfolio-project-description {
          max-width: 500px;

          margin: 17px 0 0;

          font-size: 13px;
          line-height: 1.65;
          font-weight: 400;
        }


        /* =====================================================
           META
        ===================================================== */

        .portfolio-project-meta {
          margin-top: auto;
          padding-top: 28px;

          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          gap: 17px;
        }

        .portfolio-meta-group {
          min-width: 0;

          display: flex;
          flex-direction: column;

          align-items: flex-start;

          gap: 4px;
        }

        .portfolio-meta-group span {
          font-size: 12px;
          line-height: 1.2;
          font-weight: 400;
        }

        .portfolio-meta-group strong {
          font-size: 12px;
          line-height: 1.25;
          font-weight: 500;
        }

        .portfolio-live-label {
          margin-top: 7px;
        }

        .portfolio-live-link {
          font-size: 12px;
          line-height: 1.25;
          font-weight: 500;
          color: #0057D9;
          text-decoration: none;
          overflow-wrap: anywhere;
        }

        .portfolio-live-link:hover {
          text-decoration: underline;
        }


        /* =====================================================
           DIVIDER
        ===================================================== */

        .portfolio-project::after {
          content: "";
          grid-column: 2;
          grid-row: 1;

          width: 1px;

          background: var(--line);
        }

        .portfolio-project-reverse::after {
          grid-column: 2;
        }


        /* =====================================================
           IMAGE
        ===================================================== */

        .portfolio-project-media {
          min-width: 0;

          padding:
            22px 0 22px 42px;

          display: flex;
          align-items: center;
        }

        .portfolio-image-wrap {
          position: relative;

          width: 100%;
          max-width: 600px;

          height: 385px;

          overflow: hidden;

          border-radius: 8px;

          background: #E7EDF6;
        }

        .portfolio-project-image {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
          object-position: center;

          user-select: none;
          pointer-events: none;
          -webkit-user-drag: none;

          transform:
            scale(1.035);

          transition:
            transform 0.8s
            cubic-bezier(
              0.22,
              1,
              0.36,
              1
            );
        }

        .portfolio-project-visible
          .portfolio-project-image {
          transform:
            scale(1);
        }

        .portfolio-view-button {
          position: absolute;
          top: 50%;
          left: 50%;

          transform: translate(-50%, -50%) scale(0.92);

          min-width: 170px;
          height: 58px;

          padding: 0 28px;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          border-radius: 999px;

          background: rgba(243, 248, 255, 0.96);

          color: var(--text);

          font-size: 16px;
          line-height: 1;
          font-weight: 700;

          letter-spacing: -0.01em;
          white-space: nowrap;

          text-decoration: none;

          opacity: 0;

          box-shadow: 0 12px 30px rgba(14, 14, 14, 0.16);

          transition:
            opacity 0.3s ease,
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .portfolio-image-wrap:hover
          .portfolio-view-button {
          opacity: 1;

          transform: translate(-50%, -50%) scale(1);

          box-shadow: 0 16px 36px rgba(14, 14, 14, 0.22);
        }

        .portfolio-view-button:focus-visible {
          opacity: 1;
          outline: 2px solid #0B63E5;
          outline-offset: 4px;
        }




        .portfolio-image-wrap:focus-within .portfolio-view-button {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1050px) {

          .portfolio-container {
            padding:
              0 32px;
          }

          .portfolio-hero-grid {
            grid-template-columns:
              0.45fr
              1.55fr;

            column-gap:
              34px;
          }

          .portfolio-hero-title {
            font-size:
              25px;
          }

          .portfolio-project-content {
            padding-right:
              28px;
          }

          .portfolio-project-reverse
            .portfolio-project-content {
            padding-left:
              28px;
          }

          .portfolio-project-media {
            padding-left:
              28px;
          }

          .portfolio-project-reverse
            .portfolio-project-media {
            padding-right:
              28px;
          }

          .portfolio-image-wrap {
            height:
              320px;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 767px) {

          .portfolio-container {
            max-width:
              none;

            padding:
              0 20px;
          }

          .portfolio-hero {
            padding:
              42px 0 46px;
          }

          .portfolio-hero-grid {
            display:
              flex;

            flex-direction:
              column;

            gap:
              20px;
          }

          .portfolio-hero-left {
            padding:
              0;
          }

          .portfolio-eyebrow {
            font-size:
              12px;
          }

          .portfolio-hero-title {
            max-width:
              100%;

            font-size:
              23px;
          }

          .portfolio-hero-description {
            max-width:
              100%;

            margin-top:
              16px;

            font-size:
              10px;

            line-height:
              1.7;
          }

          .portfolio-stats {
            margin-top:
              29px;

            grid-template-columns:
              repeat(
                2,
                minmax(
                  0,
                  1fr
                )
              );
          }

          .portfolio-stat {
            min-height:
              78px;

            padding:
              9px 10px;

            border-right:
              1px solid
              var(--line);
          }

          .portfolio-stat:nth-child(
            2
          ),
          .portfolio-stat:nth-child(
            4
          ) {
            border-right:
              0;
          }

          .portfolio-stat:nth-child(
            n + 3
          ) {
            border-top:
              1px solid
              var(--line);
          }

          .portfolio-stat-number {
            font-size:
              27px;
          }

          .portfolio-stat-label {
            max-width:
              140px;

            font-size:
              8px;
          }

          .portfolio-hero-cta {
            margin-top:
              23px;
          }

          .portfolio-primary-button {
            width:
              180px;

            min-width:
              180px;

            height:
              46px;

            font-size:
              10px;
          }


          /* PROJECTS */

          .portfolio-list-section {
            padding-bottom:
              32px;
          }

          .portfolio-project,
          .portfolio-project-reverse {
            display:
              flex;

            flex-direction:
              column;

            min-height:
              0;

            opacity:
              1;

            transform:
              none;

            overflow:
              visible;
          }

          .portfolio-project::after {
            display:
              none;
          }

          .portfolio-project-content,
          .portfolio-project-reverse
            .portfolio-project-content {
            width:
              100%;

            padding:
              25px 0 23px;
          }

          .portfolio-project-title {
            font-size:
              19px;
          }

          .portfolio-project-subtitle {
            font-size:
              10px;
          }

          .portfolio-project-description {
            max-width:
              100%;

            margin-top:
              15px;

            font-size:
              10px;

            line-height:
              1.65;
          }

          .portfolio-project-meta {
            margin-top:
              24px;

            padding-top:
              0;

            grid-template-columns:
              repeat(
                3,
                minmax(
                  0,
                  1fr
                )
              );

            gap:
              12px;
          }

          .portfolio-meta-group {
            gap:
              3px;
          }

          .portfolio-meta-group span,
          .portfolio-meta-group strong {
            font-size:
              7px;
          }

          .portfolio-project-media,
          .portfolio-project-reverse
            .portfolio-project-media {
            width:
              100%;

            padding:
              0 0 25px;
          }

          .portfolio-image-wrap {
            width:
              100%;

            max-width:
              none;

            height:
              225px;

            border-radius:
              9px;
          }

          .portfolio-view-button {
            min-width: 160px;
            height: 54px;
            padding: 0 24px;

            font-size: 15px;
            font-weight: 700;

            opacity: 1;

            transform:
              translate(-50%, -50%)
              scale(1);

            box-shadow:
              0 14px 32px
              rgba(14, 14, 14, 0.18);
          }

          .portfolio-project-image {
            transform:
              none;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 420px) {

          .portfolio-container {
            padding:
              0 20px;
          }

          .portfolio-hero-title {
            font-size:
              21px;
          }

          .portfolio-hero-description {
            font-size:
              9.5px;
          }

          .portfolio-stat-number {
            font-size:
              25px;
          }

          .portfolio-stat-label {
            font-size:
              7.8px;
          }

          .portfolio-project-title {
            font-size:
              18px;
          }

          .portfolio-project-subtitle {
            font-size:
              9.5px;
          }

          .portfolio-project-description {
            font-size:
              9.5px;
          }

          .portfolio-project-meta {
            gap:
              9px;
          }

          .portfolio-image-wrap {
            height:
              205px;
          }

        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (
          prefers-reduced-motion: reduce
        ) {

          .portfolio-project,
          .portfolio-project-image,
          .portfolio-primary-button,
          .portfolio-view-button {
            transition:
              none !important;
          }

          .portfolio-project {
            opacity:
              1;

            transform:
              none;
          }

        }

      `}</style>

    </main>
  );
}
