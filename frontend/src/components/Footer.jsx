"use client";

import { useState } from "react";

export default function Footer() {
  const [openSection, setOpenSection] =
    useState(null);

  const toggleSection = (section) => {
    setOpenSection((current) =>
      current === section
        ? null
        : section
    );
  };

  const sections = [
    {
      id: "company",
      title: "Company",
      items: [
        "About Us",
        "Leadership Team",
        "Careers",
        "Corporate Responsibility",
        "Our Process",
        "Awards & Recognition",
        "FAQs",
        "Compliance & Certifications",
      ],
    },
    {
      id: "services",
      title: "Services",
      items: [
        "Digital Transformation",
        "Product & Technology Consulting",
        "Mobile App Development",
        "Custom Software Engineering",
        "Cloud & DevOps Solutions",
        "Managed Technology Services",
        "Explore All Services →",
      ],
    },
    {
      id: "case-studies",
      title: "Case Studies",
      items: [
        "Project - 1",
        "Project - 2",
        "Project - 3",
        "Project - 4",
        "Project - 5",
        "See All Case Studies",
      ],
    },
    {
      id: "technologies",
      title: "Technologies",
      items: [
        "Frontend & Web",
        "Mobile",
        "Backend & APIs",
        "AI, ML & Data",
        "Cloud, Infrastructure & DevOps",
        "Explore All Services →",
      ],
    },
    {
      id: "industries",
      title: "Industries",
      items: [
        "FinTech & Financial",
        "Healthcare & HealthTech",
        "E-Commerce & Retail",
        "EdTech & Learning",
        "Logistics & Supply Chain",
        "SaaS & B2B Software",
        "Real Estate & PropTech",
        "Travel & Hospitality",
        "Explore All Services →",
      ],
    },
    {
      id: "resources",
      title: "Resources",
      items: [
        "Insights",
        "Guides & Whitepapers",
        "Client Success Stories",
      ],
    },
  ];

  return (
    <footer className="kk-footer">
      {/* =================================================
          NEWSLETTER
      ================================================= */}

      <section className="kk-newsletter">
        <div className="kk-newsletter-inner">
          <div className="kk-newsletter-title">
            Subscribe to our Newsletter
          </div>

          <form
            className="kk-newsletter-form"
            onSubmit={(e) =>
              e.preventDefault()
            }
          >
            <label
              htmlFor="newsletter-email"
              className="kk-newsletter-label"
            >
              Email Address
            </label>

            <div className="kk-newsletter-form-row">
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email address"
                className="kk-newsletter-input"
                aria-label="Email Address"
              />

              <button
                type="submit"
                className="kk-newsletter-button"
              >
                Subscribe <span>⬆</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* =================================================
          MAIN FOOTER
      ================================================= */}

      <section className="kk-footer-main">
        <div className="kk-footer-container">

          {/* =================================================
              HELLO ROW
          ================================================= */}

          <div className="kk-footer-hello">
            <div className="kk-footer-flogo-wrap">
              <img
                src="/flogo.png"
                alt="Kontent Kraft Digital"
                className="kk-footer-flogo"
                draggable="false"
              />
            </div>

            <a
              href="#contact"
              className="kk-strategy-button"
            >
              Start With a Free Strategy Call
              <span>⬆</span>
            </a>
          </div>

          {/* =================================================
              DESKTOP COLUMNS
          ================================================= */}

          <div className="kk-footer-columns">
            {sections.map((section) => (
              <div
                key={section.id}
                className="kk-footer-column"
              >
                <h3 className="kk-footer-column-title">
                  {section.title}
                </h3>

                <div className="kk-footer-column-list">
                  {section.items.map((item) => (
                    <a
                      href="#"
                      key={item}
                      className={`kk-footer-link ${
                        item.includes("Explore") ||
                        item.includes("See All")
                          ? "kk-footer-link-special"
                          : ""
                      }`}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* =================================================
              MOBILE ACCORDION
          ================================================= */}

          <div className="kk-footer-mobile">
            {sections.map((section) => {
              const isOpen =
                openSection ===
                section.id;

              return (
                <div
                  key={section.id}
                  className={`kk-footer-mobile-section ${
                    isOpen ? "is-open" : ""
                  }`}
                >
                  <button
                    type="button"
                    className="kk-footer-mobile-header"
                    onClick={() =>
                      toggleSection(
                        section.id
                      )
                    }
                    aria-expanded={isOpen}
                    aria-controls={`footer-${section.id}`}
                  >
                    <span>
                      {section.title}
                    </span>

                    <span className="kk-footer-mobile-icon">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    id={`footer-${section.id}`}
                    className="kk-footer-mobile-content"
                  >
                    <div className="kk-footer-mobile-content-inner">
                      {section.items.map(
                        (item) => (
                          <a
                            href="#"
                            key={item}
                            className={`kk-footer-mobile-link ${
                              item.includes(
                                "Explore"
                              ) ||
                              item.includes(
                                "See All"
                              )
                                ? "kk-footer-link-special"
                                : ""
                            }`}
                            onClick={() =>
                              setOpenSection(
                                null
                              )
                            }
                          >
                            {item}
                          </a>
                        )
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* =================================================
              BOTTOM FOOTER
          ================================================= */}

          <div className="kk-footer-bottom">

            {/* LEFT */}

            <div className="kk-footer-bottom-left">
              <img
                src="/flogo2.png"
                alt="Kontent Kraft Digital"
                className="kk-footer-flogo2"
                draggable="false"
              />

              <p className="kk-footer-description">
                From idea to impact, we design, build,
                and ship digital products fast.
              </p>

              <div className="kk-socials">
                <a
                  href="#"
                  className="kk-social"
                >
                  LinkedIn
                </a>

                <a
                  href="#"
                  className="kk-social"
                >
                  Instagram
                </a>

                <a
                  href="#"
                  className="kk-social"
                >
                  Facebook
                </a>
              </div>
            </div>

            {/* RIGHT */}

            <div className="kk-footer-bottom-right">
              <div className="kk-address-block">
                <strong>
                  Address:
                </strong>

                <p>
                  First Floor, Plot-22, Mahana Mandi Rd,
                  Near Ke sar Chauraha, Mansarovar
                  Extension, Kalyanpura, Jaipur, Jaipur,
                  Baranhorpura, Rajasthan 302020 (INDIA)
                </p>
              </div>

              <div className="kk-contact-line">
                <strong>
                  Call :
                </strong>{" "}
                <a href="tel:07873413302">
                  07878 41302
                </a>

                <span className="kk-divider">
                  |
                </span>

                <strong>
                  Email :
                </strong>{" "}
                <a href="mailto:hello@kontentkraftdigital.com">
                  hello@kontentkraftdigital.com
                </a>
              </div>

              <div className="kk-legal">
                <a href="#">
                  Privacy Policy
                </a>

                <span>|</span>

                <a href="#">
                  Terms And Conditions
                </a>

                <span>|</span>

                <span>
                  2026 Kontent Kraft Digital. All Rights
                  Reserved
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* =================================================
           FOOTER ROOT
        ================================================= */

        .kk-footer {
          width: 100%;
          max-width: 100%;
          min-width: 0;

          font-family:
            "Britti Sans Trial",
            Arial,
            Helvetica,
            sans-serif;

          color: #ffffff;

          background: #0021af;

          box-sizing: border-box;

          overflow-x: hidden;
        }

        .kk-footer *,
        .kk-footer *::before,
        .kk-footer *::after {
          box-sizing: border-box;
        }

        /* =================================================
           NEWSLETTER
        ================================================= */

        .kk-newsletter {
          width: 100%;

          background: #0021af;

          border-top:
            1px solid
            rgba(
              255,
              255,
              255,
              0.14
            );

          border-bottom:
            1px solid
            rgba(
              255,
              255,
              255,
              0.12
            );
        }

        .kk-newsletter-inner {
          width: 100%;

          min-height: 86px;

          padding:
            0
            clamp(
              28px,
              5vw,
              78px
            );

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 40px;

          box-sizing: border-box;
        }

        .kk-newsletter-title {
          font-size:
            clamp(
              16px,
              1.15vw,
              19px
            );

          font-weight: 600;

          line-height: 1.2;

          white-space: nowrap;
        }

        .kk-newsletter-form {
          width:
            min(
              450px,
              38vw
            );
        }

        .kk-newsletter-label {
          display: block;

          margin-bottom: 7px;

          font-size: 12px;

          line-height: 1;

          color: #ffffff;
        }

        .kk-newsletter-form-row {
          display: flex;

          align-items: center;

          gap: 16px;
        }

        .kk-newsletter-input {
          flex: 1 1 auto;

          min-width: 0;

          width: 100%;

          height: 28px;

          padding: 0 0 7px;

          border: 0;

          border-bottom:
            1px solid
            rgba(
              255,
              255,
              255,
              0.45
            );

          outline: none;

          background: transparent;

          color: #ffffff;

          font-family: inherit;

          font-size: 12px;
        }

        .kk-newsletter-input::placeholder {
          color:
            rgba(
              255,
              255,
              255,
              0.62
            );
        }

        .kk-newsletter-button {
          flex:
            0 0 auto;

          min-width: 78px;

          height: 38px;

          padding:
            0 16px;

          border: 0;

          border-radius:
            999px;

          background: #ffffff;

          color: #0e0e0e;

          font-family: inherit;

          font-size: 12px;

          font-weight: 500;

          cursor: pointer;

          transition:
            transform 0.25s ease,
            opacity 0.25s ease;
        }

        .kk-newsletter-button:hover {
          transform:
            translateY(-1px);

          opacity: 0.92;
        }

        .kk-newsletter-button span {
          margin-left: 2px;
        }

        /* =================================================
           MAIN BLUE AREA
        ================================================= */

        .kk-footer-main {
          width: 100%;

          background:
            linear-gradient(
              180deg,
              #0180fd 0%,
              #0021af 70%,
              #0021af 100%
            );
        }

        .kk-footer-container {
          width: 100%;

          max-width: 1700px;

          margin: 0 auto;

          padding:
            clamp(
              54px,
              6vw,
              84px
            )
            clamp(
              28px,
              5vw,
              78px
            )
            40px;

          box-sizing: border-box;
        }

        /* =================================================
           HELLO ROW
        ================================================= */

        .kk-footer-hello {
          width: 100%;

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 40px;

          margin-bottom:
            clamp(
              50px,
              6vw,
              72px
            );
        }

        .kk-footer-flogo-wrap {
          min-width: 0;

          display: flex;

          align-items: center;
        }

        .kk-footer-flogo {
          display: block;

          width:
            clamp(
              280px,
              30vw,
              520px
            );

          height: auto;

          max-width: 100%;

          object-fit: contain;

          object-position: left center;

          flex-shrink: 0;
        }

        .kk-strategy-button {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 8px;

          width:
            clamp(
              170px,
              16vw,
              230px
            );

          min-width:
            clamp(
              170px,
              16vw,
              230px
            );

          height:
            clamp(
              42px,
              4vw,
              48px
            );

          padding:
            0 20px;

          border-radius:
            999px;

          background:
            #ffffff;

          color:
            #0e0e0e;

          font-size:
            clamp(
              11px,
              0.85vw,
              14px
            );

          font-weight:
            600;

          text-decoration:
            none;

          white-space:
            nowrap;

          flex-shrink:
            0;

          transition:
            transform
            0.25s ease,
            box-shadow
            0.25s ease;
        }

        .kk-strategy-button:hover {
          transform:
            translateY(-2px);

          box-shadow:
            0 10px 28px
            rgba(
              0,
              0,
              0,
              0.16
            );
        }

        .kk-strategy-button span {
          font-size: 14px;
        }

        /* =================================================
           DESKTOP COLUMNS
        ================================================= */

        .kk-footer-columns {
          width: 100%;

          display: grid;

          grid-template-columns:
            1.1fr
            1.15fr
            0.9fr
            1.15fr
            1.3fr
            0.85fr;

          gap:
            clamp(
              18px,
              2.5vw,
              40px
            );

          margin-bottom:
            55px;
        }

        .kk-footer-column {
          min-width: 0;
        }

        .kk-footer-column-title {
          margin:
            0 0 17px;

          color:
            #ffffff;

          font-size:
            clamp(
              14px,
              0.65vw,
              11px
            );

          line-height:
            1.2;

          font-weight:
            600;
        }

        .kk-footer-column-list {
          display:
            flex;

          flex-direction:
            column;

          gap:
            7px;
        }

        .kk-footer-link {
          color:
            rgba(
              255,
              255,
              255,
              0.94
            );

          font-size:
            clamp(
              12px,
              0.58vw,
              10px
            );

          line-height:
            1.25;

          text-decoration:
            none;

          transition:
            opacity
              0.2s ease,
            transform
              0.2s ease;
        }

        .kk-footer-link:hover {
          opacity:
            0.72;

          transform:
            translateX(2px);
        }

        .kk-footer-link-special {
          margin-top:
            4px;
        }

        /* =================================================
           MOBILE ACCORDION
        ================================================= */

        .kk-footer-mobile {
          display:
            none;
        }

        /* =================================================
           BOTTOM FOOTER
           IMPORTANT:
           NO 100vw / viewport-offset here
        ================================================= */

        .kk-footer-bottom {
          width: 100%;

          max-width: 100%;

          display: flex;

          align-items: flex-start;

          justify-content: space-between;

          gap: 50px;

          padding:
            26px 0 0;

          margin:
            0;

          border-top:
            1px solid
            rgba(
              255,
              255,
              255,
              0.24
            );

          box-sizing:
            border-box;
        }

        .kk-footer-bottom-left {
          flex:
            0 1 38%;

          min-width:
            0;
        }

        .kk-footer-flogo2 {
          display:
            block;

          width:
            clamp(
              100px,
              9vw,
              145px
            );

          height:
            auto;

          max-width:
            100%;

          object-fit:
            contain;

          object-position:
            left center;

          flex-shrink:
            0;
        }

        .kk-footer-description {
          margin:
            24px 0 0;

          max-width:
            340px;

          color:
            rgba(
              255,
              255,
              255,
              0.9
            );

          font-size:
            clamp(
              12px,
              0.62vw,
              10px
            );

          line-height:
            1.5;
        }

        /* =================================================
           SOCIALS
        ================================================= */

        .kk-socials {
          display:
            flex;

          align-items:
            center;

          gap:
            9px;

          margin-top:
            24px;

          flex-wrap:
            wrap;
        }

        .kk-social {
          display:
            inline-flex;

          align-items:
            center;

          justify-content:
            center;

          min-width:
            50px;

          height:
            30px;

          padding:
            0 11px;

          border-radius:
            999px;

          background:
            #ffffff;

          color:
            #0e0e0e;

          font-size:
            11px;

          font-weight:
            500;

          text-decoration:
            none;

          white-space:
            nowrap;

          transition:
            transform
              0.2s ease,
            opacity
              0.2s ease;
        }

        .kk-social:hover {
          transform:
            translateY(-1px);

          opacity:
            0.9;
        }

        /* =================================================
           RIGHT INFO
        ================================================= */

        .kk-footer-bottom-right {
          flex:
            0 1 48%;

          min-width:
            0;

          color:
            rgba(
              255,
              255,
              255,
              0.92
            );

          font-size:
            clamp(
              12px,
              0.62vw,
              14px
            );

          line-height:
            1.5;
        }

        .kk-address-block strong,
        .kk-contact-line strong {
          color:
            #ffffff;

          font-weight:
            600;
        }

        .kk-address-block p {
          margin:
            3px 0 0;

          max-width:
            600px;
        }

        .kk-contact-line {
          margin-top:
            20px;
        }

        .kk-contact-line a {
          color:
            #ffffff;

          text-decoration:
            none;
        }

        .kk-divider {
          margin:
            0 7px;

          opacity:
            0.6;
        }

        .kk-legal {
          display:
            flex;

          flex-wrap:
            wrap;

          align-items:
            center;

          gap:
            5px;

          margin-top:
            18px;

          font-size:
            clamp(
              12px,
              0.55vw,
              11px
            );

          color:
            rgba(
              255,
              255,
              255,
              0.82
            );
        }

        .kk-legal a {
          color:
            inherit;

          text-decoration:
            none;
        }

        /* =================================================
           LARGE DESKTOP
        ================================================= */

        @media (min-width: 1440px) {
          .kk-footer-container {
            padding-left:
              80px;

            padding-right:
              80px;
          }

          .kk-footer-columns {
            gap:
              42px;
          }
        }

        /* =================================================
           TABLET
        ================================================= */

        @media (max-width: 1100px) {
          .kk-newsletter-inner {
            padding-left:
              35px;

            padding-right:
              35px;
          }

          .kk-footer-container {
            padding-left:
              35px;

            padding-right:
              35px;
          }

          .kk-footer-columns {
            grid-template-columns:
              repeat(
                3,
                minmax(
                  0,
                  1fr
                )
              );

            row-gap:
              42px;
          }

          .kk-footer-bottom {
            gap:
              35px;
          }
        }

        /* =================================================
           MOBILE
        ================================================= */

        @media (max-width: 767px) {
          /* NEWSLETTER */

          .kk-newsletter-inner {
            width:
              100%;

            min-height:
              auto;

            padding:
              28px 20px;

            display:
              flex;

            flex-direction:
              column;

            align-items:
              flex-start;

            justify-content:
              flex-start;

            gap:
              22px;
          }

          .kk-newsletter-title {
            width:
              100%;

            font-size:
              16px;

            line-height:
              1.25;

            white-space:
              normal;
          }

          .kk-newsletter-form {
            width:
              100%;

            max-width:
              none;
          }

          .kk-newsletter-label {
            margin-bottom:
              7px;

            font-size:
              10px;
          }

          .kk-newsletter-form-row {
            width:
              100%;

            display:
              flex;

            align-items:
              center;

            gap:
              12px;
          }

          .kk-newsletter-input {
            flex:
              1 1 auto;

            min-width:
              0;

            width:
              100%;

            height:
              34px;

            padding:
              0 0 7px;

            font-size:
              10px;
          }

          .kk-newsletter-button {
            flex:
              0 0 auto;

            min-width:
              82px;

            width:
              auto;

            height:
              30px;

            padding:
              0 15px;

            font-size:
              10px;

            white-space:
              nowrap;
          }

          /* MAIN */

          .kk-footer-container {
            width:
              100%;

            max-width:
              none;

            margin:
              0;

            padding:
              42px 20px 30px;

            box-sizing:
              border-box;
          }

          /* HELLO */

          .kk-footer-hello {
            width:
              100%;

            display:
              flex;

            flex-direction:
              column;

            align-items:
              flex-start;

            justify-content:
              flex-start;

            gap:
              26px;

            margin-bottom:
              36px;
          }

          .kk-footer-flogo-wrap {
            width:
              100%;

            display:
              flex;

            align-items:
              flex-start;

            justify-content:
              flex-start;
          }

          .kk-footer-flogo {
            width:
              100%;

            max-width:
              320px;

            height:
              auto;

            display:
              block;

            object-fit:
              contain;
          }

          .kk-strategy-button {
            width:
              auto;

            min-width:
              190px;

            height:
              44px;

            padding:
              0 20px;

            font-size:
              11px;

            white-space:
              nowrap;
          }

          /* HIDE DESKTOP COLUMNS */

          .kk-footer-columns {
            display:
              none;
          }

          /* MOBILE ACCORDION */

          .kk-footer-mobile {
            display:
              block;

            width:
              100%;

            margin:
              0 0 34px;
          }

          .kk-footer-mobile-section {
            width:
              100%;

            border-top:
              1px solid
              rgba(
                255,
                255,
                255,
                0.25
              );
          }

          .kk-footer-mobile-section:last-child {
            border-bottom:
              1px solid
              rgba(
                255,
                255,
                255,
                0.25
              );
          }

          .kk-footer-mobile-header {
            width:
              100%;

            min-height:
              56px;

            padding:
              0;

            display:
              flex;

            align-items:
              center;

            justify-content:
              space-between;

            border:
              0;

            background:
              transparent;

            color:
              #ffffff;

            font-family:
              inherit;

            font-size:
              14px;

            font-weight:
              600;

            line-height:
              1;

            text-align:
              left;

            cursor:
              pointer;
          }

          .kk-footer-mobile-icon {
            flex:
              0 0 auto;

            width:
              27px;

            height:
              27px;

            display:
              flex;

            align-items:
              center;

            justify-content:
              center;

            border:
              1px solid
              rgba(
                255,
                255,
                255,
                0.55
              );

            border-radius:
              50%;

            font-size:
              18px;

            font-weight:
              300;

            line-height:
              1;
          }

          .kk-footer-mobile-content {
            display:
              grid;

            grid-template-rows:
              0fr;

            transition:
              grid-template-rows
              0.35s
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              );
          }

          .kk-footer-mobile-section.is-open
            .kk-footer-mobile-content {
            grid-template-rows:
              1fr;
          }

          .kk-footer-mobile-content-inner {
            min-height:
              0;

            overflow:
              hidden;

            display:
              flex;

            flex-direction:
              column;

            gap:
              9px;

            padding:
              0 2px;
          }

          .kk-footer-mobile-section.is-open
            .kk-footer-mobile-content-inner {
            padding:
              0 2px 18px;
          }

          .kk-footer-mobile-link {
            color:
              rgba(
                255,
                255,
                255,
                0.9
              );

            font-size:
              11px;

            line-height:
              1.4;

            text-decoration:
              none;
          }

          .kk-footer-mobile-link-special {
            margin-top:
              4px;
          }

          /* =================================================
             BOTTOM FOOTER
             FIXED MOBILE VERSION
          ================================================= */

          .kk-footer-bottom {
            width:
              100%;

            max-width:
              100%;

            display:
              flex;

            flex-direction:
              column;

            align-items:
              stretch;

            justify-content:
              flex-start;

            gap:
              0;

            padding:
              28px 0 0;

            margin:
              0;

            border-top:
              1px solid
              rgba(
                255,
                255,
                255,
                0.24
              );

            box-sizing:
              border-box;
          }

          .kk-footer-bottom-left {
            width:
              100%;

            flex:
              none;

            display:
              flex;

            flex-direction:
              column;

            align-items:
              flex-start;

            justify-content:
              flex-start;
          }

          .kk-footer-flogo2 {
            width:
              145px;

            height:
              auto;

            max-width:
              100%;

            display:
              block;

            object-fit:
              contain;
          }

          .kk-footer-description {
            width:
              100%;

            max-width:
              320px;

            margin:
              20px 0 0;

            color:
              rgba(
                255,
                255,
                255,
                0.9
              );

            font-size:
              10px;

            line-height:
              1.55;
          }

          .kk-socials {
            width:
              100%;

            display:
              flex;

            align-items:
              center;

            justify-content:
              flex-start;

            flex-wrap:
              wrap;

            gap:
              10px;

            margin:
              22px 0 0;
          }

          .kk-social {
            flex:
              0 0 auto;

            min-width:
              0;

            width:
              auto;

            height:
              34px;

            padding:
              0 18px;

            display:
              inline-flex;

            align-items:
              center;

            justify-content:
              center;

            border-radius:
              999px;

            background:
              #ffffff;

            color:
              #0e0e0e;

            font-size:
              10px;

            font-weight:
              500;

            line-height:
              1;

            text-decoration:
              none;

            white-space:
              nowrap;
          }

          .kk-footer-bottom-right {
            width:
              100%;

            flex:
              none;

            margin:
              38px 0 0;

            color:
              rgba(
                255,
                255,
                255,
                0.92
              );

            font-size:
              10px;

            line-height:
              1.6;

            box-sizing:
              border-box;
          }

          .kk-address-block {
            width:
              100%;
          }

          .kk-address-block strong {
            display:
              block;

            margin:
              0 0 6px;

            color:
              #ffffff;

            font-size:
              12px;

            font-weight:
              600;

            line-height:
              1.2;
          }

          .kk-address-block p {
            width:
              100%;

            max-width:
              none;

            margin:
              0;

            color:
              rgba(
                255,
                255,
                255,
                0.92
              );

            font-size:
              10px;

            line-height:
              1.6;
          }

          .kk-contact-line {
            width:
              100%;

            margin:
              24px 0 0;

            display:
              block;

            font-size:
              10px;

            line-height:
              1.7;
          }

          .kk-contact-line strong {
            color:
              #ffffff;

            font-weight:
              600;
          }

          .kk-contact-line a {
            color:
              #ffffff;

            text-decoration:
              none;
          }

          .kk-divider {
            margin:
              0 7px;

            opacity:
              0.6;
          }

          .kk-legal {
            width:
              100%;

            display:
              flex;

            flex-wrap:
              wrap;

            align-items:
              center;

            gap:
              6px;

            margin:
              22px 0 0;

            font-size:
              9px;

            line-height:
              1.6;

            color:
              rgba(
                255,
                255,
                255,
                0.82
              );
          }

          .kk-legal a {
            color:
              inherit;

            text-decoration:
              none;
          }
        }

        /* =================================================
           SMALL MOBILE
        ================================================= */

        @media (max-width: 480px) {
          .kk-newsletter-inner {
            padding:
              24px 20px;
          }

          .kk-newsletter-title {
            font-size:
              15px;
          }

          .kk-newsletter-form-row {
            flex-direction:
              column;

            align-items:
              stretch;

            gap:
              10px;
          }

          .kk-newsletter-input {
            width:
              100%;

            height:
              34px;

            font-size:
              10px;
          }

          .kk-newsletter-button {
            width:
              100%;

            min-width:
              0;

            height:
              34px;

            font-size:
              10px;
          }

          .kk-footer-container {
            padding:
              34px 20px 26px;
          }

          .kk-footer-hello {
            gap:
              24px;

            margin-bottom:
              32px;
          }

          .kk-footer-flogo {
            width:
              100%;

            max-width:
              290px;
          }

          .kk-strategy-button {
            min-width:
              0;

            height:
              42px;

            padding:
              0 18px;

            font-size:
              10px;
          }

          .kk-footer-mobile {
            margin-bottom:
              30px;
          }

          .kk-footer-mobile-header {
            min-height:
              54px;

            font-size:
              13px;
          }

          .kk-footer-mobile-icon {
            width:
              26px;

            height:
              26px;

            font-size:
              17px;
          }

          .kk-footer-mobile-link {
            font-size:
              10px;
          }

          .kk-footer-bottom {
            padding-top:
              24px;
          }

          .kk-footer-flogo2 {
            width:
              135px;
          }

          .kk-footer-description {
            max-width:
              300px;

            margin-top:
              18px;

            font-size:
              9px;

            line-height:
              1.55;
          }

          .kk-socials {
            gap:
              9px;

            margin-top:
              20px;
          }

          .kk-social {
            height:
              32px;

            padding:
              0 16px;

            font-size:
              9px;
          }

          .kk-footer-bottom-right {
            margin-top:
              34px;

            font-size:
              9px;

            line-height:
              1.6;
          }

          .kk-address-block strong {
            font-size:
              11px;
          }

          .kk-address-block p {
            font-size:
              9px;

            line-height:
              1.6;
          }

          .kk-contact-line {
            margin-top:
              20px;

            font-size:
              9px;

            line-height:
              1.7;
          }

          .kk-legal {
            margin-top:
              20px;

            gap:
              5px;

            font-size:
              8px;

            line-height:
              1.55;
          }
        }

        /* =================================================
           VERY SMALL MOBILE
        ================================================= */

        @media (max-width: 360px) {
          .kk-footer-container {
            padding:
              32px 18px 24px;
          }

          .kk-footer-flogo {
            max-width:
              270px;
          }

          .kk-footer-flogo2 {
            width:
              125px;
          }

          .kk-footer-description {
            max-width:
              280px;

            font-size:
              8.5px;
          }

          .kk-socials {
            gap:
              8px;
          }

          .kk-social {
            height:
              30px;

            padding:
              0 14px;

            font-size:
              8.5px;
          }

          .kk-footer-bottom-right {
            margin-top:
              30px;

            font-size:
              8.5px;
          }

          .kk-address-block strong {
            font-size:
              10px;
          }

          .kk-address-block p {
            font-size:
              8.5px;
          }

          .kk-contact-line {
            font-size:
              8.5px;
          }

          .kk-legal {
            font-size:
              7.5px;
          }
        }

        /* =================================================
           TOUCH DEVICES
        ================================================= */

        @media (hover: none) {
          .kk-newsletter-button:hover,
          .kk-strategy-button:hover,
          .kk-social:hover {
            transform:
              none;
          }

          .kk-footer-link:hover {
            opacity:
              1;

            transform:
              none;
          }
        }

        /* =================================================
           REDUCED MOTION
        ================================================= */

        @media (
          prefers-reduced-motion: reduce
        ) {
          .kk-newsletter-button,
          .kk-strategy-button,
          .kk-social,
          .kk-footer-link {
            transition:
              none !important;
          }
        }
      `}</style>
    </footer>
  );
}