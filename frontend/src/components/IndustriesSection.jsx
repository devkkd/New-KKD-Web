"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

/* =========================================================
   INDUSTRIES DATA
========================================================= */

const INDUSTRIES = [
  {
    title: "FinTech & Financial",

    description:
      "Payment rails, lending platforms, investment tools, wealth management apps, insurance technology, crypto infrastructure, KYC/AML automation, open banking APIs. We build financial products that are secure by architecture, compliant by design, and audit-ready on day one. PCI DSS, PSD2, MAS, FINRA, and FCA compliance frameworks built in.",
  },

  {
    title: "Healthcare & HealthTech",

    description:
      "EHR integrations, telemedicine platforms, patient engagement apps, remote monitoring, clinical workflow tools, and health data pipelines. We design for HIPAA, HL7/FHIR, and GDPR from the first sprint, so compliance never becomes an afterthought.",
  },

  {
    title: "E-Commerce & Retail",

    description:
      "Storefronts, headless commerce, checkout flows, inventory systems, loyalty programs, and marketplace integrations. We build for conversion, speed, and scale across peak traffic events without compromising on UX.",
  },

  {
    title: "EdTech & Learning",

    description:
      "LMS platforms, cohort-based course tools, assessment engines, and content delivery systems. We build accessible, engaging learning experiences that hold up under real classroom and enterprise-training conditions.",
  },

  {
    title: "Logistics & Supply Chain",

    description:
      "Fleet tracking, warehouse management, route optimization, and real-time visibility dashboards. We build systems that handle high-frequency data and integrate cleanly with legacy ERP and WMS stacks.",
  },

  {
    title: "SaaS & B2B Software",

    description:
      "Multi-tenant architectures, admin dashboards, billing systems, and integration marketplaces. We build products that scale from first customer to enterprise rollout without a rewrite.",
  },

  {
    title: "Real Estate & PropTech",

    description:
      "Listing platforms, virtual tours, tenant portals, and transaction management tools. We build experiences that make complex real estate workflows feel simple for buyers, agents, and property managers alike.",
  },

  {
    title: "Travel & Hospitality",

    description:
      "Booking engines, itinerary planners, loyalty programs, and property management integrations. We build for peak-season load and the kind of polish travelers expect from a booking experience.",
  },
];

/* =========================================================
   STATIC INDUSTRY IMAGE
========================================================= */

const IMAGE_SRC =
  "/home/industries1.png";

/* =========================================================
   INDUSTRIES SECTION
========================================================= */

export default function Industries() {
  const [
    activeIndex,
    setActiveIndex,
  ] = useState(0);

  const itemRefs =
    useRef([]);

  useEffect(() => {
    const observedItems =
      itemRefs.current.filter(
        Boolean
      );

    if (
      observedItems.length === 0
    ) {
      return undefined;
    }

    /*
      Only one industry should normally
      intersect the center trigger zone
      at a time.
    */

    const observer =
      new IntersectionObserver(
        (entries) => {
          for (
            let i = 0;
            i < entries.length;
            i += 1
          ) {
            const entry =
              entries[i];

            if (
              !entry.isIntersecting
            ) {
              continue;
            }

            const index = Number(
              entry.target.getAttribute(
                "data-index"
              )
            );

            if (
              Number.isNaN(index)
            ) {
              continue;
            }

            /*
              Avoid unnecessary React render
              when the active item is already
              the same.
            */

            setActiveIndex(
              (current) =>
                current === index
                  ? current
                  : index
            );
          }
        },
        {
          root: null,

          /*
            SAME ACTIVE CENTER ZONE
          */

          rootMargin:
            "-45% 0px -45% 0px",

          threshold: 0,
        }
      );

    observedItems.forEach(
      (element) => {
        observer.observe(
          element
        );
      }
    );

    return () => {
      observer.disconnect();
    };
  }, []);

  const activeIndustry =
    INDUSTRIES[
      activeIndex
    ] || INDUSTRIES[0];

  return (
    <section className="ind-section">
      <div className="ind-container">
        {/* =========================================
            HEADER
        ========================================== */}

        <div className="ind-top">
          <span className="ind-eyebrow">
            INDUSTRIES
          </span>

          <div className="ind-top-row">
            <h2 className="ind-title">
              Deep domain expertise, Not a generalist.
            </h2>

            <p className="ind-intro">
              Every industry has compliance
              landmines, legacy integration
              nightmares, regulatory contexts,
              and competitive dynamics that
              outsiders simply don&apos;t understand.
              We&apos;ve done the work. We know
              your industry&apos;s terrain before
              we touch your project.
            </p>
          </div>
        </div>

        {/* =========================================
            BODY
        ========================================== */}

        <div className="ind-body">
          {/* =======================================
              LEFT
          ======================================== */}

          <div className="ind-left">
            <div className="ind-image-wrap">
              <img
                src={IMAGE_SRC}
                alt={activeIndustry.title}
                className="ind-image"
                width="420"
                loading="lazy"
                decoding="async"
                draggable="false"
              />
            </div>

            <button
              type="button"
              className="ind-cta"
            >
              Explore Your Industry

              <span className="ind-cta-arrow">
                ↑
              </span>
            </button>
          </div>

          {/* =======================================
              RIGHT
          ======================================== */}

          <div className="ind-right">
            {INDUSTRIES.map(
              (
                item,
                index
              ) => {
                const isActive =
                  index ===
                  activeIndex;

                return (
                  <div
                    key={
                      item.title
                    }
                    data-index={
                      index
                    }
                    ref={(element) => {
                      itemRefs.current[
                        index
                      ] =
                        element;
                    }}
                    className={`ind-item ${
                      isActive
                        ? "ind-item-active"
                        : ""
                    }`}
                  >
                    {/* =================================
                        TITLE
                    ================================== */}

                    <h3 className="ind-item-title">
                      {item.title}
                    </h3>

                    {/* =================================
                        DESCRIPTION
                    ================================== */}

                    <div
                      className="ind-item-desc-wrap"
                      style={{
                        gridTemplateRows:
                          isActive
                            ? "1fr"
                            : "0fr",
                      }}
                    >
                      <div className="ind-item-desc-inner">
                        <p className="ind-item-desc">
                          {
                            item.description
                          }
                        </p>

                        <button
                          type="button"
                          className="ind-know-more"
                        >
                          Know More

                          <span className="ind-know-more-arrow">
                            ↑
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* =====================================================
           SECTION
        ===================================================== */

        .ind-section {
          background:
            #f3f8ff;

          font-family:
            "Britti Sans Trial",
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;

          padding:
            80px 62px;

          width:
            100%;

          box-sizing:
            border-box;

          overflow:
            hidden;
        }

        /* =====================================================
           CONTAINER
        ===================================================== */

        .ind-container {
          width:
            100%;

          max-width:
            1400px;

          margin:
            0 auto;

          min-width:
            0;
        }

        /* =====================================================
           TOP
        ===================================================== */

        .ind-top {
          margin-bottom:
            64px;
        }

        .ind-eyebrow {
          display:
            block;

          font-size:
            13px;

          font-weight:
            600;

          letter-spacing:
            0.08em;

          color:
            #0e0e0e80;

          margin-bottom:
            16px;
        }

        .ind-top-row {
          display:
            flex;

          justify-content:
            space-between;

          align-items:
            flex-start;

          gap:
            48px;

          min-width:
            0;
        }

        /* =====================================================
           MAIN TITLE
        ===================================================== */

        .ind-title {
          font-size:
            clamp(
              24px,
              3vw,
              34px
            );

          font-weight:
            700;

          color:
            #0e0e0e;

          margin:
            0;

          max-width:
            480px;

          line-height:
            1.25;

          overflow-wrap:
            break-word;
        }

        /* =====================================================
           INTRO
        ===================================================== */

        .ind-intro {
          font-size:
            15px;

          line-height:
            1.6;

          color:
            #0e0e0e80;

          max-width:
            460px;

          margin:
            0;

          overflow-wrap:
            break-word;
        }

        /* =====================================================
           BODY
        ===================================================== */

        .ind-body {
          display:
            grid;

          grid-template-columns:
            420px
            minmax(
              0,
              1fr
            );

          gap:
            80px;

          min-width:
            0;
        }

        /* =====================================================
           LEFT / STICKY IMAGE
        ===================================================== */

        .ind-left {
          position:
            sticky;

          top:
            100px;

          align-self:
            start;

          display:
            flex;

          flex-direction:
            column;

          gap:
            32px;

          height:
            fit-content;

          min-width:
            0;
        }

        /* =====================================================
           IMAGE
        ===================================================== */

        .ind-image-wrap {
          width:
            100%;

          border-radius:
            24px;

          overflow:
            hidden;

          background:
            #ffffff;

          min-width:
            0;
        }

        .ind-image {
          width:
            100%;

          height:
            auto;

          display:
            block;

          max-width:
            100%;

          object-fit:
            cover;

          user-select:
            none;

          pointer-events:
            none;

          -webkit-user-drag:
            none;
        }

        /* =====================================================
           CTA
        ===================================================== */

        .ind-cta {
          display:
            inline-flex;

          align-items:
            center;

          justify-content:
            center;

          gap:
            10px;

          padding:
            16px
            28px;

          border:
            none;

          border-radius:
            100px;

          background:
            linear-gradient(
              135deg,
              #0180fd 0%,
              #0021af 100%
            );

          color:
            #ffffff;

          font-family:
            inherit;

          font-size:
            15px;

          font-weight:
            600;

          cursor:
            pointer;

          width:
            fit-content;

          white-space:
            nowrap;
        }

        .ind-cta-arrow {
          font-size:
            14px;

          transform:
            rotate(
              45deg
            );
        }

        /* =====================================================
           RIGHT LIST
        ===================================================== */

        .ind-right {
          display:
            flex;

          flex-direction:
            column;

          min-width:
            0;
        }

        /* =====================================================
           ITEM
        ===================================================== */

        .ind-item {
          padding:
            32px 0;

          border-bottom:
            1px solid
            rgba(
              14,
              14,
              14,
              0.08
            );

          /*
            Keep same transition.
          */

          transition:
            padding
              0.3s ease;

          min-width:
            0;
        }

        .ind-item:first-child {
          padding-top:
            0;
        }

        /* =====================================================
           TITLE
        ===================================================== */

        .ind-item-title {
          font-size:
            clamp(
              20px,
              2.2vw,
              26px
            );

          font-weight:
            700;

          margin:
            0;

          color:
            #0e0e0e40;

          transition:
            color
              0.35s ease;

          overflow-wrap:
            break-word;
        }

        .ind-item-active
          .ind-item-title {
          color:
            #0e0e0e;
        }

        /* =====================================================
           DESCRIPTION WRAPPER

           Same grid-row animation.
        ===================================================== */

        .ind-item-desc-wrap {
          display:
            grid;

          transition:
            grid-template-rows
              0.4s ease;

          overflow:
            hidden;

          min-height:
            0;
        }

        .ind-item-desc-inner {
          min-height:
            0;

          overflow:
            hidden;
        }

        .ind-item-desc {
          font-size:
            15px;

          line-height:
            1.7;

          color:
            #0e0e0e80;

          max-width:
            640px;

          margin:
            16px 0 20px;

          overflow-wrap:
            break-word;
        }

        /* =====================================================
           KNOW MORE
        ===================================================== */

        .ind-know-more {
          display:
            inline-flex;

          align-items:
            center;

          gap:
            8px;

          padding:
            10px 20px;

          border:
            1px solid
            rgba(
              14,
              14,
              14,
              0.15
            );

          border-radius:
            100px;

          background:
            transparent;

          color:
            #0e0e0e;

          font-family:
            inherit;

          font-size:
            14px;

          font-weight:
            600;

          cursor:
            pointer;
        }

        .ind-know-more-arrow {
          font-size:
            13px;

          transform:
            rotate(
              45deg
            );
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 900px) {
          .ind-section {
            padding:
              60px 20px;
          }

          .ind-body {
            grid-template-columns:
              minmax(
                0,
                1fr
              );

            gap:
              40px;
          }

          .ind-left {
            position:
              static;

            top:
              unset;
          }

          .ind-top-row {
            flex-direction:
              column;

            gap:
              20px;
          }

          .ind-title,
          .ind-intro {
            max-width:
              100%;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 640px) {
          .ind-section {
            padding:
              48px 20px;
          }

          .ind-top {
            margin-bottom:
              40px;
          }

          .ind-top-row {
            gap:
              18px;
          }

          .ind-title {
            font-size:
              clamp(
                24px,
                7vw,
                30px
              );

            line-height:
              1.2;
          }

          .ind-intro {
            font-size:
              14px;

            line-height:
              1.6;
          }

          .ind-body {
            gap:
              34px;
          }

          .ind-image-wrap {
            border-radius:
              20px;
          }

          .ind-cta {
            width:
              100%;
          }

          .ind-item {
            padding:
              24px 0;
          }

          .ind-item-title {
            font-size:
              21px;

            line-height:
              1.25;
          }

          .ind-item-desc {
            font-size:
              14px;

            line-height:
              1.65;

            margin:
              14px 0 18px;
          }

          .ind-know-more {
            font-size:
              13px;

            padding:
              9px 18px;
          }
        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 480px) {
          .ind-section {
            padding:
              48px 20px;
          }

          .ind-eyebrow {
            font-size:
              12px;

            margin-bottom:
              14px;
          }

          .ind-top {
            margin-bottom:
              40px;
          }

          .ind-title {
            font-size:
              24px;
          }

          .ind-intro {
            font-size:
              13px;
          }

          .ind-body {
            gap:
              30px;
          }

          .ind-cta {
            padding:
              15px 24px;

            font-size:
              14px;
          }

          .ind-item {
            padding:
              24px 0;
          }

          .ind-item-title {
            font-size:
              20px;
          }

          .ind-item-desc {
            font-size:
              13px;

            line-height:
              1.65;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (
          prefers-reduced-motion:
            reduce
        ) {
          .ind-item,
          .ind-item-title,
          .ind-item-desc-wrap {
            transition:
              none !important;
          }
        }
      `}</style>
    </section>
  );
}