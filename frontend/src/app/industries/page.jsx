"use client";

import Contactform from "@/components/Contactform";
import { useEffect, useRef, useState } from "react";

/* =========================================================
   INDUSTRIES DATA
   Add `image` later to use a different image per industry.
========================================================= */
const INDUSTRIES = [
  {
    title: "Fintech & Financial",
    anchor: "fintech-financial",
    description:
      "We build secure, reliable digital products for the financial sector from payment platforms and digital wallets to investment and budgeting tools designed with the security and compliance expectations financial services demand.",
  },
  {
    title: "Healthcare & HealthTech",
    anchor: "healthcare-healthtech",
    description:
      "We develop patient-friendly, secure healthcare solutions including telehealth platforms, appointment systems, and health tracking tools, built with the privacy and data-handling standards the industry requires.",
  },
  {
    title: "E-Commerce & Retail",
    anchor: "e-commerce-retail",
    description:
      "We build online stores and retail platforms engineered to convert browsers into buyers, manage inventory efficiently, and handle traffic at scale during peak shopping periods.",
  },
  {
    title: "EdTech & Learning",
    anchor: "edtech-learning",
    description:
      "We create engaging learning platforms, course portals, and educational apps that make it easier for students and instructors to teach, learn, and track progress online.",
  },
  {
    title: "Logistics & Supply Chain",
    anchor: "logistics-supply-chain",
    description:
      "We build tracking systems, fleet management tools, and supply chain platforms that give businesses real-time visibility and control over their operations.",
  },
  {
    title: "SaaS & B2B Software",
    anchor: "saas-b2b-software",
    description:
      "We design and develop multi-tenant SaaS products and B2B platforms built to onboard users smoothly, scale with demand, and support the workflows business customers rely on.",
  },
  {
    title: "Real Estate & PropTech",
    anchor: "real-estate-proptech",
    description:
      "We build property listing platforms, virtual tour experiences, and management tools that make it easier for buyers, renters, and agents to connect and transact.",
  },
  {
    title: "Travel & Hospitality",
    anchor: "travel-hospitality",
    description:
      "We develop booking platforms, itinerary tools, and guest experience apps that make travel planning and hospitality management simpler for both businesses and their customers.",
  },
  {
    title: "Social Media",
    anchor: "social-media",
    description:
      "We build social platforms and community-driven apps with the engagement features, content tools, and scalability that social products need to grow.",
  },
  {
    title: "Marketing",
    anchor: "marketing",
    description:
      "We build websites, landing pages, and campaign tools that power marketing efforts designed to convert traffic and integrate cleanly with the analytics and automation tools your team already uses.",
  },
  {
    title: "Events",
    anchor: "events",
    description:
      "We develop event registration platforms, ticketing systems, and event management tools that make planning and attending events smoother for organizers and attendees alike.",
  },
  {
    title: "Restaurant",
    anchor: "restaurant",
    description:
      "We build ordering platforms, reservation systems, and delivery integrations that help restaurants serve customers efficiently online and in person.",
  },
];

/* =========================================================
   COMMON IMAGE
   Future:
   {
     title: "...",
     image: "/industries/1.png"
   }
========================================================= */

const DEFAULT_INDUSTRY_IMAGE = "/hire/1.png";

/* =========================================================
   ANIMATED NUMBER
========================================================= */

function AnimatedNumber({
  value,
  suffix = "",
  start,
}) {
  const [current, setCurrent] =
    useState(0);

  const frameRef =
    useRef(null);

  useEffect(() => {
    if (!start) {
      setCurrent(0);
      return undefined;
    }

    const numericValue =
      Number(value);

    if (
      Number.isNaN(numericValue)
    ) {
      setCurrent(value);
      return undefined;
    }

    const duration = 1400;

    const startTime =
      performance.now();

    const animate = (time) => {
      const progress =
        Math.min(
          1,
          (time - startTime) /
            duration
        );

      const eased =
        1 -
        Math.pow(
          1 - progress,
          4
        );

      const next =
        numericValue * eased;

      setCurrent(
        Number.isInteger(
          numericValue
        )
          ? Math.round(next)
          : Number(
              next.toFixed(1)
            )
      );

      if (
        progress < 1
      ) {
        frameRef.current =
          requestAnimationFrame(
            animate
          );
      }
    };

    frameRef.current =
      requestAnimationFrame(
        animate
      );

    return () => {
      if (
        frameRef.current !==
        null
      ) {
        cancelAnimationFrame(
          frameRef.current
        );
      }
    };
  }, [value, start]);

  return (
    <>
      {current}
      {suffix}
    </>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function IndustriesPage() {
  const [statsStarted, setStatsStarted] =
    useState(false);

  useEffect(() => {
    let cancelled = false;

    let timer = null;

    const startStats = () => {
      if (cancelled) {
        return;
      }

      timer =
        window.setTimeout(() => {
          if (!cancelled) {
            setStatsStarted(true);
          }
        }, 120);
    };

    if (
      document.fonts?.ready
    ) {
      document.fonts.ready
        .then(startStats)
        .catch(startStats);
    } else {
      startStats();
    }

    return () => {
      cancelled = true;

      if (
        timer !== null
      ) {
        window.clearTimeout(
          timer
        );
      }
    };
  }, []);

  return (
    <main className="industries-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="industries-hero">

        <div className="industries-container">

          <div className="industries-hero-grid">

            {/* LEFT */}

            <div className="industries-hero-left">

              <div className="industries-eyebrow">
                Industries
              </div>

            </div>


            {/* RIGHT */}

            <div className="industries-hero-right">

              <h1 className="industries-hero-title">
                Industry-Focused Solutions
              </h1>

              <p className="industries-hero-description">
                Every industry has unique challenges.
                We build tailored digital solutions
                that align with your business goals,
                customer expectations, and industry
                requirements—not one-size-fits-all
                software. From strategy and design to
                development and ongoing optimization,
                every solution is engineered to help
                your business grow, adapt, and stay
                ahead of the competition.
              </p>

            </div>

          </div>


          {/* =================================================
              STATS
          ================================================= */}

          <div className="industries-stats">

            <div className="industry-stat">

              <div className="industry-stat-number">

                <AnimatedNumber
                  value={6}
                  suffix="+"
                  start={
                    statsStarted
                  }
                />

              </div>

              <div className="industry-stat-label">
                Years of Industry Experience
              </div>

            </div>


            <div className="industry-stat">

              <div className="industry-stat-number">

                <AnimatedNumber
                  value={400}
                  suffix="+"
                  start={
                    statsStarted
                  }
                />

              </div>

              <div className="industry-stat-label">
                Digital Assets Delivered
              </div>

            </div>


            <div className="industry-stat">

              <div className="industry-stat-number">

                <AnimatedNumber
                  value={10}
                  suffix="+"
                  start={
                    statsStarted
                  }
                />

              </div>

              <div className="industry-stat-label">
                Awards and Certifications
              </div>

            </div>


            <div className="industry-stat">

              <div className="industry-stat-number">

                <AnimatedNumber
                  value={90}
                  suffix="%"
                  start={
                    statsStarted
                  }
                />

              </div>

              <div className="industry-stat-label">
                Returning Client Rate
              </div>

            </div>

          </div>


          {/* =================================================
              CTA
          ================================================= */}

          <div className="industries-hero-cta">

            <a
              href="/book-call"
              className="industries-primary-button"
            >
              Get a Free Consultation
              <span>▲</span>
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          INDUSTRIES WE SERVE
      ===================================================== */}

      <section className="industries-list-section">

        <div className="industries-container">

          <h2 className="industries-section-title">
            Industries We Serve
          </h2>


          <div className="industries-grid">

            {INDUSTRIES.map(
              (
                industry,
                index
              ) => (

               <article
  className="industry-card"
  key={industry.title}
  id={industry.anchor}
>

                  {/* IMAGE */}

                  <div className="industry-image-wrap">

                    <img
                      src={
                        industry.image ||
                        DEFAULT_INDUSTRY_IMAGE
                      }
                      alt={
                        industry.title
                      }
                      className="industry-image"
                      width="720"
                      height="420"
                      loading={
                        index < 2
                          ? "eager"
                          : "lazy"
                      }
                      decoding="async"
                      draggable="false"
                    />

                  </div>


                  {/* TITLE */}

                  <h3 className="industry-card-title">
                    {industry.title}
                  </h3>


                  {/* DESCRIPTION */}

                  <p className="industry-card-description">
                    {
                      industry.description
                    }
                  </p>

                </article>

              )
            )}

          </div>

        </div>

      </section>
        <Contactform />


      {/* =====================================================
          CONTACT FORM
      ===================================================== */}

      


      {/* =====================================================
          CSS
      ===================================================== */}

      <style>{`

        /* =====================================================
           BASE
        ===================================================== */

        .industries-page {
          --bg:
            #F3F8FF;

          --text:
            #0E0E0E;

          --blue:
            #0180FD;

          --deep-blue:
            #0021AF;

          width:
            100%;

          min-height:
            100vh;

          margin:
            0;

          padding:
            0;

          background:
            var(--bg);

          color:
            var(--text);

          font-family:
            "Britti Sans Trial",
            Arial,
            Helvetica,
            sans-serif;

          overflow-x:
            hidden;

          overflow-anchor:
            none;
        }

        .industries-page *,
        .industries-page *::before,
        .industries-page *::after {
          box-sizing:
            border-box;
        }


        /* =====================================================
           CONTAINER
        ===================================================== */

        .industries-container {
          width:
            100%;

          max-width:
            1400px;

          margin:
            0 auto;

          padding:
            0 30px;
        }


        /* =====================================================
           HERO
        ===================================================== */

        .industries-hero {
          width:
            100%;

          padding:
            42px 0 58px;

          background:
            var(--bg);
        }

        .industries-hero-grid {
          display:
            grid;

          grid-template-columns:
            minmax(
              180px,
              0.56fr
            )
            minmax(
              0,
              1.44fr
            );

          column-gap:
            56px;

          align-items:
            start;
        }

        .industries-hero-left {
          padding-top:
            5px;
        }

        .industries-eyebrow {
          margin:
            0;

          font-size:
            16px;

          line-height:
            1.2;

          font-weight:
            400;
        }

        .industries-hero-right {
          min-width:
            0;
        }

        .industries-hero-title {
          max-width:
            800px;

          margin:
            0;

          font-size:
            30px;

          line-height:
            1.18;

          font-weight:
            700;

          letter-spacing:
            -0.04em;
        }

        .industries-hero-description {
          max-width:
            780px;

          margin:
            25px 0 0;

          font-size:
            14px;

          line-height:
            1.7;

          font-weight:
            400;
        }


        /* =====================================================
           STATS
        ===================================================== */

        .industries-stats {
          width:
            100%;

          margin-top:
            45px;

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
        }

        .industry-stat {
          min-width:
            0;

          min-height:
            102px;

          padding:
            10px 24px 6px;

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

          border-right:
            1px solid
            #D7DFEA;
        }

        .industry-stat:first-child {
          padding-left:
            0;
        }

        .industry-stat:last-child {
          padding-right:
            0;

          border-right:
            0;
        }

        .industry-stat-number {
          width:
            5ch;

          min-height:
            54px;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          font-size:
            44px;

          line-height:
            1;

          font-weight:
            700;

          letter-spacing:
            -0.05em;

          font-variant-numeric:
            tabular-nums;

          color:
            #0B63E5;
        }

        .industry-stat-label {
          max-width:
            230px;

          margin-top:
            13px;

          font-size:
            14px;

          line-height:
            1.25;

          font-weight:
            700;

          color:
            #0B63E5;
        }


        /* =====================================================
           HERO CTA
        ===================================================== */

        .industries-hero-cta {
          width:
            100%;

          margin-top:
            29px;

          display:
            flex;

          justify-content:
            center;
        }

        .industries-primary-button {
          min-width:
            230px;

          height:
            56px;

          padding:
            0 25px;

          display:
            inline-flex;

          align-items:
            center;

          justify-content:
            center;

          gap:
            6px;

          border-radius:
            999px;

          background:
            linear-gradient(
              135deg,
              var(--blue),
              var(--deep-blue)
            );

          color:
            #FFFFFF;

          font-size:
            13px;

          line-height:
            1;

          font-weight:
            500;

          text-decoration:
            none;

          transition:
            transform
            0.25s ease,
            box-shadow
            0.25s ease;
        }

        .industries-primary-button span {
          font-size:
            8px;
        }

        .industries-primary-button:hover {
          transform:
            translateY(-2px);

          box-shadow:
            0 12px 28px
            rgba(
              0,
              33,
              175,
              0.2
            );
        }


        /* =====================================================
           INDUSTRIES LIST
        ===================================================== */

        .industries-list-section {
          width:
            100%;

          padding:
            0 0 65px;

          background:
            var(--bg);
        }

        .industries-section-title {
          margin:
            0 0 43px;

          text-align:
            center;

          font-size:
            30px;

          line-height:
            1.18;

          font-weight:
            700;

          letter-spacing:
            -0.04em;
        }


        /* =====================================================
           2 COLUMN GRID
        ===================================================== */

        .industries-grid {
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
            46px;

          row-gap:
            52px;
        }


        /* =====================================================
           INDUSTRY CARD
        ===================================================== */

       .industry-card {
  width: 100%;
  min-width: 0;
  scroll-margin-top: 100px;
}

        .industry-image-wrap {
          position:
            relative;

          width:
            100%;

          aspect-ratio:
            1.72 / 1;

          overflow:
            hidden;

          border-radius:
            11px;

          background:
            #E9EEF6;
        }

        .industry-image {
          width:
            100%;

          height:
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

          transition:
            transform
            0.45s
            cubic-bezier(
              0.22,
              1,
              0.36,
              1
            );
        }

        .industry-card:hover
          .industry-image {
          transform:
            scale(1.025);
        }


        /* =====================================================
           CARD TITLE
        ===================================================== */

        .industry-card-title {
          margin:
            20px 0 0;

          font-size:
            22px;

          line-height:
            1.2;

          font-weight:
            700;

          letter-spacing:
            -0.025em;

          color:
            var(--text);
        }


        /* =====================================================
           CARD DESCRIPTION
        ===================================================== */

        .industry-card-description {
          max-width:
            650px;

          margin:
            20px 0 0;

          font-size:
            13px;

          line-height:
            1.7;

          font-weight:
            400;

          color:
            var(--text);
        }


        /* =====================================================
           CONTACT SECTION
        ===================================================== */

        .industries-contact-section {
          width:
            100%;

          padding:
            0 0 42px;

          background:
            var(--bg);
        }

        .industries-contact-section
          :global(form) {
          width:
            100%;
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1100px) {

          .industries-hero-grid {
            grid-template-columns:
              0.45fr
              1.55fr;

            column-gap:
              34px;
          }

          .industries-hero-title {
            font-size:
              27px;
          }

          .industries-stats {
            margin-top:
              38px;
          }

          .industry-stat {
            padding-left:
              14px;

            padding-right:
              14px;
          }

          .industry-stat-number {
            font-size:
              39px;
          }

          .industry-stat-label {
            font-size:
              11px;
          }

          .industries-grid {
            column-gap:
              30px;

            row-gap:
              44px;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 767px) {

          .industries-container {
            max-width:
              none;

            padding:
              0 20px;
          }

          .industries-hero {
            padding:
              42px 0 48px;
          }

          .industries-hero-grid {
            display:
              flex;

            flex-direction:
              column;

            gap:
              22px;
          }

          .industries-hero-left {
            padding:
              0;
          }

          .industries-eyebrow {
            font-size:
              12px;
          }

          .industries-hero-right {
            width:
              100%;
          }

          .industries-hero-title {
            max-width:
              100%;

            font-size:
              24px;

            line-height:
              1.2;
          }

          .industries-hero-description {
            max-width:
              100%;

            margin-top:
              17px;

            font-size:
              10.5px;

            line-height:
              1.7;
          }


          /* MOBILE STATS */

          .industries-stats {
            margin-top:
              31px;

            grid-template-columns:
              repeat(
                2,
                minmax(
                  0,
                  1fr
                )
              );
          }

          .industry-stat {
            min-height:
              86px;

            padding:
              9px 10px;

            border-right:
              1px solid
              #D7DFEA;
          }

          .industry-stat:nth-child(
            2
          ),
          .industry-stat:nth-child(
            4
          ) {
            border-right:
              0;
          }

          .industry-stat:nth-child(
            n + 3
          ) {
            border-top:
              1px solid
              #D7DFEA;
          }

          .industry-stat-number {
            min-height:
              35px;

            font-size:
              29px;
          }

          .industry-stat-label {
            max-width:
              140px;

            margin-top:
              9px;

            font-size:
              9px;

            line-height:
              1.3;
          }


          /* MOBILE CTA */

          .industries-hero-cta {
            margin-top:
              24px;
          }

          .industries-primary-button {
            width:
              210px;

            min-width:
              210px;

            height:
              48px;

            font-size:
              11px;
          }


          /* MOBILE INDUSTRY LIST */

          .industries-list-section {
            padding-bottom:
              48px;
          }

          .industries-section-title {
            margin-bottom:
              30px;

            font-size:
              24px;
          }

          .industries-grid {
            display:
              grid;

            grid-template-columns:
              1fr;

            column-gap:
              0;

            row-gap:
              39px;
          }

          .industry-image-wrap {
            aspect-ratio:
              1.65 / 1;

            border-radius:
              9px;
          }

          .industry-card-title {
            margin-top:
              15px;

            font-size:
              20px;
          }

          .industry-card-description {
            max-width:
              100%;

            margin-top:
              13px;

            font-size:
              10px;

            line-height:
              1.65;
          }

          .industries-contact-section {
            padding-bottom:
              42px;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 420px) {

          .industries-container {
            padding:
              0 20px;
          }

          .industries-hero {
            padding:
              36px 0 42px;
          }

          .industries-hero-title {
            font-size:
              22px;
          }

          .industries-hero-description {
            font-size:
              10px;
          }

          .industry-stat {
            min-height:
              80px;

            padding:
              8px 7px;
          }

          .industry-stat-number {
            font-size:
              26px;
          }

          .industry-stat-label {
            font-size:
              8.5px;
          }

          .industries-section-title {
            font-size:
              22px;
          }

          .industry-card-title {
            font-size:
              19px;
          }

          .industry-card-description {
            font-size:
              9.5px;
          }

        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (
          prefers-reduced-motion: reduce
        ) {

          .industries-primary-button,
          .industry-image {
            transition:
              none !important;
          }

        }

      `}</style>

    </main>
  );
}