"use client";

import { useEffect, useRef, useState } from "react";

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

const IMAGE_SRC = "/home/industries1.png";

export default function Industries() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(idx);
          }
        });
      },
      {
        root: null,
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="ind-section" ref={sectionRef}>
      <div className="ind-container">
        <div className="ind-top">
          <span className="ind-eyebrow">INDUSTRIES</span>
          <div className="ind-top-row">
            <h2 className="ind-title">Deep domain expertise, Not a generalist.</h2>
            <p className="ind-intro">
              Every industry has compliance landmines, legacy integration
              nightmares, regulatory contexts, and competitive dynamics that
              outsiders simply don&apos;t understand. We&apos;ve done the
              work. We know your industry&apos;s terrain before we touch your
              project.
            </p>
          </div>
        </div>

        <div className="ind-body">
          <div className="ind-left">
            <div className="ind-image-wrap">
              <img
                src={IMAGE_SRC}
                alt={INDUSTRIES[activeIndex].title}
                className="ind-image"
              />
            </div>
            <button type="button" className="ind-cta">
              Explore Your Industry
              <span className="ind-cta-arrow">↑</span>
            </button>
          </div>

          <div className="ind-right">
            {INDUSTRIES.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={item.title}
                  data-index={index}
                  ref={(el) => (itemRefs.current[index] = el)}
                  className={`ind-item ${isActive ? "ind-item-active" : ""}`}
                >
                  <h3 className="ind-item-title">{item.title}</h3>
                  <div
                    className="ind-item-desc-wrap"
                    style={{
                      gridTemplateRows: isActive ? "1fr" : "0fr",
                    }}
                  >
                    <div className="ind-item-desc-inner">
                      <p className="ind-item-desc">{item.description}</p>
                      <button type="button" className="ind-know-more">
                        Know More
                        <span className="ind-know-more-arrow">↑</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .ind-section {
          background: #F3F8FF;
          font-family: "Britti Sans Trial", -apple-system, sans-serif;
          padding: 80px 62px;
          width: 100%;
          box-sizing: border-box;
        }

        .ind-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .ind-top {
          margin-bottom: 64px;
        }

        .ind-eyebrow {
          display: block;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: #0E0E0E80;
          margin-bottom: 16px;
        }

        .ind-top-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 48px;
        }

        .ind-title {
          font-size: clamp(24px, 3vw, 34px);
          font-weight: 700;
          color: #0E0E0E;
          margin: 0;
          max-width: 480px;
          line-height: 1.25;
        }

        .ind-intro {
          font-size: 15px;
          line-height: 1.6;
          color: #0E0E0E80;
          max-width: 460px;
          margin: 0;
        }

        .ind-body {
          display: grid;
          grid-template-columns: 420px 1fr;
          gap: 80px;
        }

        .ind-left {
          position: sticky;
          top: 100px;
          align-self: start;
          display: flex;
          flex-direction: column;
          gap: 32px;
          height: fit-content;
        }

        .ind-image-wrap {
          width: 100%;
          border-radius: 24px;
          overflow: hidden;
          background: #fff;
        }

        .ind-image {
          width: 100%;
          height: auto;
          display: block;
        }

        .ind-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 28px;
          border: none;
          border-radius: 100px;
          background: linear-gradient(135deg, #0180FD 0%, #0021AF 100%);
          color: #fff;
          font-family: inherit;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          width: fit-content;
        }

        .ind-cta-arrow {
          font-size: 14px;
          transform: rotate(45deg);
        }

        .ind-right {
          display: flex;
          flex-direction: column;
        }

        .ind-item {
          padding: 32px 0;
          border-bottom: 1px solid rgba(14, 14, 14, 0.08);
          transition: padding 0.3s ease;
        }

        .ind-item:first-child {
          padding-top: 0;
        }

        .ind-item-title {
          font-size: clamp(20px, 2.2vw, 26px);
          font-weight: 700;
          margin: 0;
          color: #0E0E0E40;
          transition: color 0.35s ease;
        }

        .ind-item-active .ind-item-title {
          color: #0E0E0E;
        }

        .ind-item-desc-wrap {
          display: grid;
          transition: grid-template-rows 0.4s ease;
          overflow: hidden;
        }

        .ind-item-desc-inner {
          min-height: 0;
        }

        .ind-item-desc {
          font-size: 15px;
          line-height: 1.7;
          color: #0E0E0E80;
          max-width: 640px;
          margin: 16px 0 20px;
        }

        .ind-know-more {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border: 1px solid rgba(14, 14, 14, 0.15);
          border-radius: 100px;
          background: transparent;
          color: #0E0E0E;
          font-family: inherit;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
        }

        .ind-know-more-arrow {
          font-size: 13px;
          transform: rotate(45deg);
        }

        @media (max-width: 900px) {
          .ind-section {
            padding: 60px 20px;
          }

          .ind-body {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .ind-left {
            position: static;
            top: unset;
          }

          .ind-top-row {
            flex-direction: column;
            gap: 20px;
          }

          .ind-title,
          .ind-intro {
            max-width: 100%;
          }
        }

        @media (max-width: 480px) {
          .ind-section {
            padding: 48px 20px;
          }

          .ind-top {
            margin-bottom: 40px;
          }

          .ind-cta {
            width: 100%;
          }

          .ind-item {
            padding: 24px 0;
          }
        }
      `}</style>
    </section>
  );
}