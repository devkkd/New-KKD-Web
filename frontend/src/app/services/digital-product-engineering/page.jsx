"use client";

import Contactform from "@/components/Contactform";
import { useEffect, useRef, useState } from "react";

/* =========================================================
   SERVICE DATA
========================================================= */

const SERVICES = [
  {
    title: "Web & Mobile Development",
    description:
      "At Kontent Kraft Digital, we build high-performance websites and mobile applications that combine exceptional user experiences with scalable engineering. From corporate websites and customer portals to enterprise web applications and cross-platform mobile apps, we create digital solutions designed to engage users, streamline operations, and accelerate business growth.",
    items: [
      "Website Design & Development",
      "Custom Web Application Development",
      "E-Commerce Development",
      "Mobile App Development",
      "CMS & Website Management Solutions",
      "Website Revamp & Modernization",
    ],
  },
  {
    title: "Custom Software Development",
    description:
      "Every business has unique challenges that off-the-shelf software can't solve. We develop secure, scalable, and tailor-made software solutions that automate workflows, improve operational efficiency, and support long-term business growth.",
    items: [
      "Enterprise Software Development",
      "SaaS Product Development",
      "CRM & ERP Solutions",
      "Business Process Automation",
      "API Development & Integration",
      "Legacy Software Modernization",
    ],
  },
  {
    title: "AI & Machine Learning",
    description:
      "Transform data into intelligent business decisions with AI-powered applications. We develop machine learning models, automation tools, and generative AI solutions that improve efficiency, enhance customer experiences, and unlock new opportunities for innovation.",
    items: [
      "Generative AI Solutions",
      "AI Chatbots & Virtual Assistants",
      "Machine Learning Models",
      "Predictive Analytics",
      "Intelligent Process Automation",
      "AI Integration & Consulting",
    ],
  },
  {
    title: "Product Design (UI/UX)",
    description:
      "Great products begin with exceptional user experiences. Our design team combines user research, strategy, and modern design systems to create intuitive digital products that users love and businesses trust.",
    items: [
      "UX Research & Strategy",
      "User Journey Mapping",
      "Wireframing & Prototyping",
      "UI Design Systems",
      "Mobile & Web Interface Design",
      "Usability Testing",
    ],
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Build online shopping experiences that convert visitors into loyal customers. We develop scalable e-commerce platforms optimized for performance, customer engagement, and business growth.",
    items: [
      "Custom E-Commerce Development",
      "Shopify Development",
      "WooCommerce Development",
      "Marketplace Solutions",
      "Payment Gateway Integration",
      "E-Commerce Optimization",
    ],
  },
  {
    title: "Cloud & DevOps",
    description:
      "Accelerate software delivery with secure cloud infrastructure and modern DevOps practices. We help businesses deploy, scale, and manage applications with greater speed, reliability, and security.",
    items: [
      "Cloud Infrastructure Setup",
      "AWS, Azure & Google Cloud",
      "CI/CD Pipeline Automation",
      "Docker & Kubernetes",
      "Infrastructure Monitoring",
      "Cloud Migration",
    ],
  },
  {
    title: "Product Management",
    description:
      "From product strategy to successful delivery, we help businesses build products with clarity, focus, and measurable outcomes. Our product managers ensure every feature aligns with user needs and business objectives.",
    items: [
      "Product Discovery",
      "Product Roadmapping",
      "Agile Sprint Planning",
      "Feature Prioritization",
      "Stakeholder Management",
      "Product Analytics",
    ],
  },
  {
    title: "Managed IT Services",
    description:
      "Focus on growing your business while we manage your technology. Our proactive IT support ensures your infrastructure remains secure, reliable, and optimized around the clock.",
    items: [
      "IT Infrastructure Management",
      "Application Support",
      "Security Monitoring",
      "System Maintenance",
      "Backup & Disaster Recovery",
      "24/7 Technical Support",
    ],
  },
  {
    title: "Enterprise Applications",
    description:
      "We develop enterprise-grade applications that improve collaboration, streamline operations, and enable organizations to scale with confidence through secure and integrated digital ecosystems.",
    items: [
      "Enterprise Web Portals",
      "HRMS & ERP Systems",
      "CRM Solutions",
      "Workflow Automation",
      "Business Intelligence Dashboards",
      "Enterprise System Integration",
    ],
  },
  {
    title: "Growth Engineering",
    description:
      "Growth isn't accidental—it's engineered. We combine technology, analytics, experimentation, and optimization to help businesses acquire customers, improve conversions, and maximize lifetime value.",
    items: [
      "Conversion Rate Optimization (CRO)",
      "Marketing Automation",
      "Analytics & Performance Tracking",
      "Customer Journey Optimization",
      "A/B Testing",
      "Growth Strategy & Experimentation",
    ],
  },
];

// Shared fallback image for any service that doesn't define its own `image` field.
const DEFAULT_SERVICE_IMAGE = "/hire/1.png";

/* =========================================================
   ANIMATED STAT NUMBER
========================================================= */

function AnimatedNumber({ value, suffix = "", start }) {
  const [current, setCurrent] = useState(0);
  const frameRef = useRef(null);

  useEffect(() => {
    const numericValue = parseFloat(value);

    if (!start || Number.isNaN(numericValue)) {
      setCurrent(Number.isNaN(numericValue) ? value : 0);
      return;
    }

    const duration = 1400;
    const startTime = performance.now();

    const animate = (time) => {
      const progress = Math.min(1, (time - startTime) / duration);
      const eased = 1 - Math.pow(1 - progress, 4);
      const next = numericValue * eased;

      setCurrent(
        Number.isInteger(numericValue)
          ? Math.round(next)
          : Number(next.toFixed(1))
      );

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
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

export default function ServicesPage() {
  const [statsStarted, setStatsStarted] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let timer = null;

    const start = () => {
      if (cancelled) return;
      timer = window.setTimeout(() => {
        if (!cancelled) setStatsStarted(true);
      }, 120);
    };

    if (document.fonts?.ready) {
      document.fonts.ready.then(start).catch(start);
    } else {
      start();
    }

    return () => {
      cancelled = true;
      if (timer !== null) window.clearTimeout(timer);
    };
  }, []);

  return (
    <main className="services-page">
      {/* HERO */}
      <section className="services-hero">
        <div className="services-container">
          <div className="services-hero-grid">
            <div className="services-hero-left">
              <div className="services-eyebrow">Services</div>
              <div className="services-category">Digital Product Engineering</div>
            </div>

            <div className="services-hero-right">
              <h1 className="services-hero-title">
                Engineering the Future of Digital Innovation
              </h1>
              <p className="services-hero-description">
                We combine product strategy, user-centric design, and modern
                engineering to build web applications, mobile apps, enterprise
                software, and AI solutions that accelerate growth, improve
                customer experiences, and create lasting competitive
                advantage.
              </p>
            </div>
          </div>

          {/* STATS */}
          <div className="services-stats">
            <div className="service-stat">
              <div className="service-stat-number">
                <AnimatedNumber value={6} suffix="+" start={statsStarted} />
              </div>
              <div className="service-stat-label">Years of Industry Experience</div>
            </div>

            <div className="service-stat">
              <div className="service-stat-number">
                <AnimatedNumber value={400} suffix="+" start={statsStarted} />
              </div>
              <div className="service-stat-label">Digital Assets Delivered</div>
            </div>

            <div className="service-stat">
              <div className="service-stat-number">
                <AnimatedNumber value={10} suffix="+" start={statsStarted} />
              </div>
              <div className="service-stat-label">Awards and Certifications</div>
            </div>

            <div className="service-stat">
              <div className="service-stat-number">
                <AnimatedNumber value={90} suffix="%" start={statsStarted} />
              </div>
              <div className="service-stat-label">Returning Client Rate</div>
            </div>
          </div>

          {/* CTA */}
          <div className="services-hero-cta">
            <a href="/book-call" className="services-primary-button">
              Get a Free Consultation
              <span>▲</span>
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="services-list-section">
        <div className="services-container">
          <div className="services-list">
            {SERVICES.map((service, index) => (
              <article className="service-row" key={service.title}>
                <div className="service-content">
                  <h2 className="service-title">{service.title}</h2>
                  <p className="service-description">{service.description}</p>

                  <div className="service-items-title">Services</div>
                  <ul className="service-items">
                    {service.items.map((item) => (
                      <li key={item}>
                        <span className="service-arrow">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-divider" />

                <div className="service-image-column">
                  <div className="service-image-wrap">
                    <img
                      src={service.image || DEFAULT_SERVICE_IMAGE}
                      alt={service.title}
                      className="service-image"
                      width="720"
                      height="500"
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                      draggable="false"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <Contactform />
      </section>

      {/*
        IMPORTANT: this is a plain, static <style> tag on purpose — NOT
        styled-jsx's `<style jsx>`. styled-jsx relies on a JS runtime step
        to insert its scoped styles, and depending on how the app router /
        build is configured that insertion can land a tick after first
        paint. That's what was causing the "renders once, then re-lays-out"
        jump on refresh: the browser briefly paints unstyled/partially
        styled markup, then the real CSS snaps in.

        A plain <style> tag is emitted as literal HTML — it is part of the
        server-rendered markup itself, so the browser always has the full
        CSS before it paints anything, on every refresh, every time,
        regardless of hydration timing. All selectors below are already
        namespaced under .services-page / .service-*, so there's no loss
        of scoping by dropping styled-jsx.
      */}
      <style>{`
        html {
          scrollbar-gutter: stable;
        }

        .services-page {
          --bg: #f3f8ff;
          --text: #0e0e0e;
          --blue: #0180fd;
          --deep-blue: #0021af;

          width: 100%;
          margin: 0;
          padding: 0;
          background: var(--bg);
          color: var(--text);
          font-family: "Britti Sans Trial", Arial, Helvetica, sans-serif;
          overflow-x: hidden;
          box-sizing: border-box;
        }

        .services-page *,
        .services-page *::before,
        .services-page *::after {
          box-sizing: border-box;
        }

        .services-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 30px;
        }

        /* HERO */
        .services-hero {
          width: 100%;
          padding: 42px 0 46px;
          background: var(--bg);
        }

        .services-hero-grid {
          display: grid;
          grid-template-columns: minmax(170px, 0.56fr) minmax(0, 1.44fr);
          gap: 56px;
          align-items: start;
        }

        .services-hero-left {
          padding-top: 5px;
        }

        .services-eyebrow {
          margin: 0 0 5px;
          font-size: 14px;
          line-height: 1.2;
          font-weight: 400;
        }

        .services-category {
          font-size: 14px;
          line-height: 1.3;
          font-weight: 700;
        }

        .services-hero-right {
          min-width: 0;
        }

        .services-hero-title {
          max-width: 760px;
          margin: 0;
          font-size: 25px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: -0.04em;
        }

        .services-hero-description {
          width: 100%;
          max-width: 760px;
          margin: 20px 0 0;
          font-size: 12px;
          line-height: 1.65;
          font-weight: 400;
        }

        /* STATS */
        .services-stats {
          width: 100%;
          margin-top: 32px;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .service-stat {
          min-width: 0;
          min-height: 86px;
          padding: 10px 24px 4px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          border-right: 1px solid #d7dfea;
        }

        .service-stat:first-child {
          padding-left: 0;
        }

        .service-stat:last-child {
          padding-right: 0;
          border-right: 0;
        }

        .service-stat-number {
          width: 5ch;
          min-height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 36px;
          line-height: 1;
          font-weight: 700;
          letter-spacing: -0.05em;
          font-variant-numeric: tabular-nums;
          color: #0b63e5;
        }

        .service-stat-label {
          max-width: 180px;
          margin-top: 12px;
          font-size: 12px;
          line-height: 1.25;
          font-weight: 700;
          color: #0b63e5;
        }

        /* CTA */
        .services-hero-cta {
          display: flex;
          justify-content: center;
          margin-top: 23px;
        }

        .services-primary-button {
          min-width: 192px;
          height: 47px;
          padding: 0 20px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          border-radius: 999px;
          background: linear-gradient(135deg, var(--blue), var(--deep-blue));
          color: #fff;
          font-size: 12px;
          line-height: 1;
          font-weight: 500;
          text-decoration: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .services-primary-button span {
          font-size: 8px;
        }

        .services-primary-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(0, 33, 175, 0.18);
        }

        /* SERVICE LIST */
        .services-list-section {
          width: 100%;
          padding: 0 0 42px;
          background: var(--bg);
        }

        .services-list {
          width: 100%;
          border-top: 1px solid #d7dfea;
          border-bottom: 1px solid #d7dfea;
        }

        .service-row {
          width: 100%;
          min-height: 310px;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 1px minmax(0, 0.92fr);
          border-bottom: 1px solid #d7dfea;
        }

        .service-row:last-child {
          border-bottom: 0;
        }

        .service-content {
          min-width: 0;
          padding: 30px 42px 30px 0;
        }

        .service-title {
          margin: 0;
          font-size: 25px;
          line-height: 1.18;
          font-weight: 700;
          letter-spacing: -0.04em;
        }

        .service-description {
          width: 100%;
          max-width: 720px;
          margin: 27px 0 0;
          font-size: 13px;
          line-height: 1.65;
          font-weight: 400;
        }

        .service-items-title {
          margin-top: 38px;
          font-size: 14px;
          line-height: 1.2;
          font-weight: 700;
        }

        .service-items {
          margin: 16px 0 0;
          padding: 0;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .service-items li {
          display: flex;
          align-items: flex-start;
          gap: 6px;
          font-size: 12px;
          line-height: 1.3;
          font-weight: 400;
        }

        .service-arrow {
          flex: 0 0 auto;
          font-size: 10px;
          line-height: 1;
        }

        .service-divider {
          width: 1px;
          background: #d7dfea;
        }

        .service-image-column {
          min-width: 0;
          padding: 22px 0 22px 36px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        .service-image-wrap {
          width: 100%;
          max-width: 560px;
          height: 265px;
          overflow: hidden;
          border-radius: 10px;
          background: #e8eef7;
        }

        .service-image {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
          user-select: none;
          pointer-events: none;
          -webkit-user-drag: none;
          transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .service-image-wrap:hover .service-image {
          transform: scale(1.025);
        }

        /* TABLET */
        @media (max-width: 1100px) {
          .services-hero-grid {
            grid-template-columns: 0.45fr 1.55fr;
            gap: 34px;
          }

          .services-hero-title {
            font-size: 23px;
          }

          .service-stat {
            padding-left: 12px;
            padding-right: 12px;
          }

          .service-stat-number {
            font-size: 32px;
          }

          .service-row {
            grid-template-columns: minmax(0, 1fr) 1px minmax(0, 0.95fr);
          }

          .service-content {
            padding-right: 28px;
          }

          .service-title {
            font-size: 21px;
          }

          .service-image-column {
            padding-left: 28px;
          }

          .service-image-wrap {
            height: 225px;
          }
        }

        /* MOBILE */
        @media (max-width: 767px) {
          .services-container {
            max-width: none;
            padding: 0 20px;
          }

          .services-hero {
            padding: 42px 0;
          }

          .services-hero-grid {
            display: flex;
            flex-direction: column;
            gap: 24px;
          }

          .services-hero-left {
            padding: 0;
          }

          .services-hero-right {
            width: 100%;
          }

          .services-hero-title {
            max-width: 100%;
            font-size: 23px;
            line-height: 1.22;
          }

          .services-hero-description {
            max-width: 100%;
            margin-top: 15px;
            font-size: 11px;
            line-height: 1.65;
          }

          .services-stats {
            margin-top: 30px;
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .service-stat {
            min-height: 82px;
            padding: 10px 12px;
          }

          .service-stat:nth-child(2),
          .service-stat:nth-child(4) {
            border-right: 0;
          }

          .service-stat:nth-child(n + 3) {
            border-top: 1px solid #d7dfea;
          }

          .service-stat-number {
            min-height: 34px;
            font-size: 29px;
          }

          .service-stat-label {
            max-width: 120px;
            margin-top: 9px;
            font-size: 9px;
            line-height: 1.3;
          }

          .services-hero-cta {
            margin-top: 24px;
          }

          .services-primary-button {
            width: 190px;
            height: 46px;
          }

          .service-row {
            display: flex;
            flex-direction: column;
            min-height: 0;
          }

          .service-content {
            width: 100%;
            padding: 28px 0 25px;
          }

          .service-title {
            font-size: 22px;
          }

          .service-description {
            max-width: 100%;
            margin-top: 18px;
            font-size: 10.5px;
          }

          .service-items-title {
            margin-top: 27px;
          }

          .service-items {
            margin-top: 13px;
          }

          .service-items li {
            font-size: 9.5px;
          }

          .service-divider {
            display: none;
          }

          .service-image-column {
            width: 100%;
            padding: 0 0 28px;
          }

          .service-image-wrap {
            width: 100%;
            max-width: none;
            height: 230px;
            border-radius: 9px;
          }
        }

        /* SMALL MOBILE */
        @media (max-width: 420px) {
          .services-hero {
            padding: 36px 0 38px;
          }

          .services-hero-grid {
            gap: 21px;
          }

          .services-hero-title {
            font-size: 21px;
          }

          .services-hero-description {
            font-size: 10px;
          }

          .service-stat {
            min-height: 78px;
            padding: 9px 8px;
          }

          .service-stat-number {
            font-size: 26px;
          }

          .service-stat-label {
            font-size: 8.5px;
          }

          .service-title {
            font-size: 20px;
          }

          .service-description {
            font-size: 10px;
          }

          .service-items li {
            font-size: 9px;
          }

          .service-image-wrap {
            height: 205px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .services-primary-button,
          .service-image {
            transition: none !important;
          }
        }
      `}</style>
    </main>
  );
}