"use client";

import { useState } from "react";
import Contactform from "@/components/Contactform";

const HIRE_OPTIONS = [
  {
    id: 1,
    title: "Dedicated Developers",
    text: "Hire skilled developers front-end, back-end, full-stack, or mobile who work exclusively on your project for as long as you need them, fully integrated into your team's process.",
    image: "/hire/1.png",
  },
  {
    id: 2,
    title: "Dedicated Designers",
    text: "Bring on UI/UX designers to handle your product's design needs, from a single project to ongoing design support as your product evolves.",
    image: "/hire/1.png",
  },
  {
    id: 3,
    title: "Dedicated Project Managers",
    text: "Get an experienced project manager to keep your development work organized, on schedule, and aligned with your business goals.",
    image: "/hire/1.png",
  },
  {
    id: 4,
    title: "Full Project Teams",
    text: "Need more than one role? We assemble complete teams of developers, designers, QA, and project management built around the specific needs of your project.",
    image: "/hire/1.png",
  },
  {
    id: 5,
    title: "Short-Term & Project-Based Support",
    text: "Bring in extra hands for a defined project or a busy stretch, without committing to a long-term hire.",
    image: "/hire/1.png",
  },
  {
    id: 6,
    title: "Long-Term & Ongoing Support",
    text: "For businesses that need consistent, continued development capacity, we offer long-term resource engagements that function like an extended in-house team.",
    image: "/hire/1.png",
  },
  {
    id: 7,
    title: "Specialized Skill Hiring",
    text: "Need specific expertise AI development, DevOps, e-commerce platforms, or a particular tech stack? We match you with resources who have hands-on experience in exactly what you need.",
    image: "/hire/1.png",
  },
];

const PROCESS_ITEMS = [
  {
    number: "01.",
    title: "Tell Us What You Need",
    text: "We start by understanding your project, timeline, and the specific skills required.",
  },
  {
    number: "02.",
    title: "Meet and Confirm",
    text: "You review candidates and confirm the right fit before work begins.",
  },
  {
    number: "03.",
    title: "Onboarding and Integration",
    text: "Your resource is onboarded into your tools, workflows, and communication channels.",
  },
  {
    number: "04.",
    title: "Ongoing Collaboration",
    text: "Your dedicated resource works as part of your team, with regular check-ins to make sure things stay on track.",
  },
  {
    number: "05.",
    title: "Scale as Needed",
    text: "Extend, adjust, or expand your team as your project evolves.",
  },
];

const FAQS = [
  {
    id: 1,
    question: "How quickly can I get a resource onboarded?",
    answer:
      "Timelines vary based on the specific skills required, but we work to connect you with the right resource as quickly as possible, often within days rather than weeks.",
  },
  {
    id: 2,
    question:
      "What's the difference between hiring a dedicated resource and outsourcing a full project?",
    answer:
      "A dedicated resource works as an extension of your team under your direction, while a full project engagement means we manage the project end-to-end. We can support either model depending on how much control you want to retain.",
  },
  {
    id: 3,
    question: "Can I hire more than one resource at a time?",
    answer:
      "Yes. Many clients start with one resource and scale up to a full team as their project grows.",
  },
  {
    id: 4,
    question: "What if the resource isn't the right fit?",
    answer:
      "We check in regularly to make sure the engagement is working well, and can make adjustments if a resource isn't the right fit for your project.",
  },
  {
    id: 5,
    question:
      "Can the same platform serve multiple industries if my business spans more than one?",
    answer:
      "Yes. We can design flexible platforms that serve multiple business lines or customer types within a single product.",
  },
  {
    id: 6,
    question:
      "Do I need to manage the resource myself, or does Kontent Kraft Digital manage them?",
    answer:
      "It depends on the engagement. Some clients prefer to manage resources directly, while others want us to handle day-to-day management. We can support either approach.",
  },
  {
    id: 7,
    question:
      "Can I hire resources for a short-term project only?",
    answer:
      "Yes. We support both short-term, project-based engagements and long-term, ongoing hires depending on what your business needs.",
  },
];

export default function HireResourcesPage() {
  const [activeHire, setActiveHire] = useState(0);
  const [activeProcess, setActiveProcess] = useState(2);

  const currentHire = HIRE_OPTIONS[activeHire];

  return (
    <main className="hire-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hire-hero">
        <div className="hire-hero-container">

          <div className="hire-eyebrow">
            Hire Resources
          </div>

          <h1 className="hire-hero-title">
            Extend Your Team Without the Overhead of Hiring
          </h1>

          <p className="hire-hero-description">
            At <strong>Kontent Kraft Digital</strong>, we help
            businesses scale their development, design, and
            marketing capacity by giving them direct access to
            skilled professionals without the time, cost, and
            risk of a full in-house hiring process. Whether you
            need one developer for a few months or a full team
            for an ongoing product, we match you with the right
            people, fast.
            <br />
            Our resources work as an extension of your team
            integrated into your workflow, your tools, and your
            timeline so you get the output of an in-house hire
            with the flexibility of a partner.
          </p>

          <a
            href="/contact"
            className="hire-hero-button"
          >
            <span>
              Get a Free Consultation
            </span>

            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5.5 1.5L9 8.5H2L5.5 1.5Z"
                fill="currentColor"
              />
            </svg>
          </a>

        </div>
      </section>


      {/* =====================================================
          GALLERY
          EXACTLY 2 TO 8
      ===================================================== */}

      <section className="hire-gallery-section">
        <div className="hire-gallery">

          <div className="hire-gallery-main">
            <img
              src="/career/2.png"
              alt=""
              draggable="false"
            />
          </div>

          <div className="hire-gallery-stack">
            <div className="hire-gallery-stack-item">
              <img
                src="/career/3.png"
                alt=""
                draggable="false"
              />
            </div>

            <div className="hire-gallery-stack-item">
              <img
                src="/career/4.png"
                alt=""
                draggable="false"
              />
            </div>
          </div>

          <div className="hire-gallery-main">
            <img
              src="/career/5.png"
              alt=""
              draggable="false"
            />
          </div>

          <div className="hire-gallery-stack">
            <div className="hire-gallery-stack-item">
              <img
                src="/career/6.png"
                alt=""
                draggable="false"
              />
            </div>

            <div className="hire-gallery-stack-item">
              <img
                src="/career/7.png"
                alt=""
                draggable="false"
              />
            </div>
          </div>

          <div className="hire-gallery-main">
            <img
              src="/career/8.png"
              alt=""
              draggable="false"
            />
          </div>

        </div>
      </section>


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <section className="hire-main-section">
        <div className="hire-container">

          {/* =================================================
              WAYS TO HIRE
          ================================================= */}

          <section className="ways-section">

            <h2 className="ways-heading">
              Ways to Hire Our Resources
            </h2>

            <div className="ways-layout">

              {/* =============================================
                  LEFT IMAGE
              ============================================== */}

              <div className="ways-image-wrap">
                <img
                  key={currentHire.image}
                  src={currentHire.image}
                  alt={currentHire.title}
                  className="ways-image"
                  draggable="false"
                />
              </div>


              {/* =============================================
                  RIGHT SIDE
                  TITLE + DESCRIPTION
              ============================================== */}

              <div className="ways-content">

                {HIRE_OPTIONS.map(
                  (item, index) => (
                    <button
                      key={item.id}
                      type="button"
                      className={`ways-row ${
                        activeHire === index
                          ? "is-active"
                          : ""
                      }`}
                      onMouseEnter={() =>
                        setActiveHire(index)
                      }
                      onFocus={() =>
                        setActiveHire(index)
                      }
                      onClick={() =>
                        setActiveHire(index)
                      }
                    >

                      {/* TITLE */}

                      <span className="ways-row-title">
                        {item.title}
                      </span>


                      {/* DESCRIPTION */}

                      <span className="ways-row-description">
                        {item.text}
                      </span>

                    </button>
                  )
                )}

              </div>

            </div>

          </section>


          {/* =================================================
              PROCESS CARDS
          ================================================= */}

          <section className="hire-process-section">

            <div className="hire-process-grid">

              {PROCESS_ITEMS.map(
                (item, index) => (
                  <button
                    key={item.number}
                    type="button"
                    className={`process-card ${
                      activeProcess === index
                        ? "is-active"
                        : ""
                    }`}
                    onMouseEnter={() =>
                      setActiveProcess(index)
                    }
                    onFocus={() =>
                      setActiveProcess(index)
                    }
                    onClick={() =>
                      setActiveProcess(index)
                    }
                  >

                    <span className="process-number">
                      {item.number}
                    </span>

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.text}
                    </p>

                  </button>
                )
              )}

            </div>

          </section>

        </div>
      </section>


      {/* =====================================================
          CONTACT FORM
          FULL WIDTH
      ===================================================== */}

      <section
        id="contact"
        className="hire-form-section"
      >
        <Contactform />
      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="hire-faq-section">

        <div className="hire-container">

          <div className="hire-faq-layout">

            {/* LEFT */}

            <div className="hire-faq-left">

              <div className="hire-faq-eyebrow">
                FAQ&apos;s
              </div>

              <h2>
                The Questions Everyone
                <br />
                Asks Anyway
              </h2>

            </div>


            {/* RIGHT */}

            <div className="hire-faq-right">

              {FAQS.map((faq) => (
                <div
                  key={faq.id}
                  className="hire-faq-item"
                >

                  <h3>
                    {faq.question}
                  </h3>

                  <p>
                    {faq.answer}
                  </p>

                </div>
              ))}

              <div className="hire-faq-button-wrap">

                <a
                  href="/faq"
                  className="hire-faq-button"
                >
                  <span>
                    See All FAQ&apos;s
                  </span>

                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5.5 1.5L9 8.5H2L5.5 1.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CSS
      ===================================================== */}

      <style>{`

        /* =====================================================
           PAGE
        ===================================================== */

        .hire-page {
          width: 100%;
          max-width: 100%;

          min-height: 100vh;

          margin: 0;
          padding: 0;

          background: #F3F8FF;

          color: #0E0E0E;

          font-family:
            "Britti Sans Trial",
            Arial,
            Helvetica,
            sans-serif;

          overflow-x: hidden;

          box-sizing: border-box;
        }

        .hire-page *,
        .hire-page *::before,
        .hire-page *::after {
          box-sizing: border-box;
        }


        /* =====================================================
           COMMON CONTAINER
        ===================================================== */

        .hire-container {
          width: 100%;

          max-width: 1400px;

          margin: 0 auto;

          padding:
            0 30px;
        }


        /* =====================================================
           HERO
        ===================================================== */

        .hire-hero {
          width: 100%;

          margin: 0;
          padding: 0;

          background: #F3F8FF;
        }

        .hire-hero-container {
          width: 100%;

          max-width: 1400px;

          margin: 0 auto;

          padding:
            42px 30px
            40px;

          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: flex-start;

          text-align: center;
        }

        .hire-eyebrow {
          margin: 0;

          font-size: 19px;

          line-height: 1.2;

          font-weight: 600;

          color: #0E0E0E;
        }

        .hire-hero-title {
          width: 100%;

          max-width: 900px;

          margin:
            25px auto 0;

          padding: 0;

          font-size: 30px;

          line-height: 1.2;

          font-weight: 600;

          letter-spacing:
            -0.04em;

          color: #0E0E0E;
        }

        .hire-hero-description {
          width: 100%;

          max-width: 810px;

          margin:
            30px auto 0;

          padding: 0;

          font-size: 14px;

          line-height: 1.65;

          font-weight: 400;

          color: #0E0E0E;
        }

        .hire-hero-description strong {
          font-weight: 600;
        }

        .hire-hero-button {
          width: 190px;

          height: 56px;

          margin-top: 25px;

          padding: 0 16px;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 5px;

          border: none;

          border-radius: 999px;

          background:
            linear-gradient(
              90deg,
              #0180FD 0%,
              #0021AF 100%
            );

          color: #FFFFFF;

          font-family: inherit;

          font-size: 12px;

          line-height: 1;

          font-weight: 600;

          text-decoration: none;

          white-space: nowrap;

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .hire-hero-button:hover {
          transform:
            translateY(-2px);

          box-shadow:
            0 10px 22px
            rgba(
              0,
              33,
              175,
              0.18
            );
        }

        .hire-hero-button svg {
          display: block;
          flex-shrink: 0;
        }


        /* =====================================================
           GALLERY
        ===================================================== */

        .hire-gallery-section {
          width: 100%;
          max-width: 100%;

          margin: 0;
          padding: 0;

          background: #F3F8FF;

          overflow: hidden;

          line-height: 0;
        }

        .hire-gallery {
          width: 100%;

          height: 400px;

          display: grid;

          grid-template-columns:
            1.12fr
            0.72fr
            0.95fr
            0.72fr
            1.12fr;

          gap: 7px;

          overflow: hidden;
        }

        .hire-gallery-main {
          width: 100%;
          height: 400px;

          min-width: 0;

          overflow: hidden;

          border-radius: 8px;

          background:
            #E9EEF6;
        }

        .hire-gallery-main img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
          object-position: center;

          user-select: none;
          pointer-events: none;

          -webkit-user-drag: none;
        }

        .hire-gallery-stack {
          width: 100%;
          height: 400px;

          min-width: 0;

          display: flex;

          flex-direction: column;

          gap: 7px;

          overflow: hidden;
        }

        .hire-gallery-stack-item {
          width: 100%;

          height:
            calc(
              50% - 3.5px
            );

          min-height: 0;

          overflow: hidden;

          border-radius: 8px;

          background:
            #E9EEF6;
        }

        .hire-gallery-stack-item img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
          object-position: center;

          user-select: none;
          pointer-events: none;

          -webkit-user-drag: none;
        }


        /* =====================================================
           MAIN
        ===================================================== */

        .hire-main-section {
          width: 100%;

          margin: 0;

          padding:
            65px 0 0;
        }


        /* =====================================================
           WAYS TO HIRE
        ===================================================== */

        .ways-section {
          width: 100%;
        }

        .ways-heading {
          margin:
            0 0 56px;

          padding: 0;

          font-size:
            30px;

          line-height:
            1.15;

          font-weight:
            700;

          letter-spacing:
            -0.035em;

          color:
            #0E0E0E;
        }


        /* =====================================================
           WAYS LAYOUT

           LEFT:
           IMAGE

           RIGHT:
           TITLE | DESCRIPTION
        ===================================================== */

        .ways-layout {
          width: 100%;

          display: grid;

          grid-template-columns:
            0.9fr
            2.1fr;

          column-gap:
            58px;

          align-items:
            start;
        }


        /* =====================================================
           LEFT IMAGE
        ===================================================== */

        .ways-image-wrap {
          width: 100%;

          height:
            230px;

          overflow:
            hidden;

          border-radius:
            8px;

          background:
            #E9EEF6;

          position:
            sticky;

          top:
            30px;
        }

        .ways-image {
          width: 100%;

          height: 100%;

          display: block;

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

          animation:
            ways-image-enter
            0.3s
            ease;
        }

        @keyframes ways-image-enter {
          from {
            opacity:
              0.65;

            transform:
              scale(
                0.985
              );
          }

          to {
            opacity:
              1;

            transform:
              scale(
                1
              );
          }
        }


        /* =====================================================
           RIGHT CONTENT
        ===================================================== */

        .ways-content {
          width: 100%;

          min-width: 0;

          display:
            flex;

          flex-direction:
            column;
        }


        /* =====================================================
           EACH ROW
           
           TITLE LEFT
           DESCRIPTION RIGHT
        ===================================================== */

        .ways-row {
          width: 100%;

          min-width: 0;

          margin: 0;

          padding:
            0 0 26px;

          border: none;

          border-radius: 0;

          border-bottom:
            1px solid
            #D5DDE8;

          background:
            transparent;

          color:
            #0E0E0E;

          font-family:
            inherit;

          text-align:
            left;

          cursor:
            pointer;

          display:
            grid;

          grid-template-columns:
            minmax(
              0,
              1.05fr
            )
            minmax(
              0,
              1.55fr
            );

          column-gap:
            55px;

          align-items:
            start;

          opacity:
            0.42;

          transition:
            opacity
            0.25s ease;
        }

        .ways-row + .ways-row {
          padding-top:
            26px;
        }

        .ways-row:hover,
        .ways-row:focus-visible,
        .ways-row.is-active {
          opacity:
            1;
        }

        .ways-row:focus-visible {
          outline:
            none;
        }


        /* =====================================================
           ROW TITLE
        ===================================================== */

        .ways-row-title {
          min-width:
            0;

          display:
            block;

          margin:
            0;

          font-size:
            22px;

          line-height:
            1.25;

          font-weight:
            600;

          letter-spacing:
            -0.025em;

          color:
            inherit;
        }


        /* =====================================================
           ROW DESCRIPTION
        ===================================================== */

        .ways-row-description {
          min-width:
            0;

          display:
            block;

          margin:
            0;

          font-size:
            14px;

          line-height:
            1.55;

          font-weight:
            400;

          color:
            inherit;
        }


        /* =====================================================
           PROCESS
        ===================================================== */

        .hire-process-section {
          width:
            100%;

          margin-top:
            88px;
        }

        .hire-process-grid {
          width:
            100%;

          display:
            grid;

          grid-template-columns:
            repeat(
              5,
              minmax(
                0,
                1fr
              )
            );

          gap:
            0;
        }

        .process-card {
          width:
            100%;

          min-height:
            276px;

          padding:
            18px 20px;

          margin:
            0;

          border:
            none;

          border-radius:
            8px;

          background:
            transparent;

          color:
            #0E0E0E;

          text-align:
            left;

          font-family:
            inherit;

          cursor:
            pointer;

          display:
            flex;

          flex-direction:
            column;

          align-items:
            flex-start;

          justify-content:
            flex-start;

          transition:
            background
              0.3s ease,
            color
              0.3s ease,
            transform
              0.25s ease,
            box-shadow
              0.3s ease;
        }

        .process-card:hover {
          transform:
            translateY(
              -2px
            );
        }

        .process-card.is-active {
          min-height:
            276px;

          background:
            linear-gradient(
              180deg,
              #0180FD 0%,
              #0021AF 100%
            );

          color:
            #FFFFFF;

          transform:
            translateY(
              0
            );

          box-shadow:
            0 10px 30px
            rgba(
              0,
              33,
              175,
              0.15
            );
        }

        .process-number {
          display:
            block;

          margin-bottom:
            14px;

          font-size:
            22px;

          line-height:
            1.2;

          font-weight:
            600;
        }

        .process-card h3 {
          margin:
            0;

          font-size:
            22px;

          line-height:
            1.35;

          font-weight:
            600;

          letter-spacing:
            -0.025em;
        }

        .process-card p {
          margin:
            15px 0 0;

          font-size:
            13px;

          line-height:
            1.6;

          font-weight:
            400;

          color:
            inherit;
        }


        /* =====================================================
           FORM
        ===================================================== */

        .hire-form-section {
          width:
            100%;

          max-width:
            100%;

          margin:
            36px 0 0;

          padding:
            0;

          background:
            #F3F8FF;

          overflow:
            visible;
        }

        .hire-form-section > * {
          width:
            100%;

          max-width:
            100%;

          margin-left:
            0;

          margin-right:
            0;
        }


        /* =====================================================
           FAQ
        ===================================================== */

        .hire-faq-section {
          width:
            100%;

          margin:
            0;

          padding:
            72px 0 88px;

          background:
            #F3F8FF;
        }

        .hire-faq-layout {
          width:
            100%;

          display:
            grid;

          grid-template-columns:
            minmax(
              0,
              0.78fr
            )
            minmax(
              0,
              1.22fr
            );

          column-gap:
            95px;

          align-items:
            start;
        }

        .hire-faq-left {
          width:
            100%;

          min-width:
            0;
        }

        .hire-faq-eyebrow {
          margin:
            0 0 30px;

          padding:
            0;

          font-size:
            15px;

          line-height:
            1;

          font-weight:
            400;

          color:
            #0E0E0E;
        }

        .hire-faq-left h2 {
          margin:
            0;

          padding:
            0;

          font-size:
            26px;

          line-height:
            1.35;

          font-weight:
            700;

          letter-spacing:
            -0.035em;

          color:
            #0E0E0E;
        }

        .hire-faq-right {
          width:
            100%;

          min-width:
            0;

          display:
            flex;

          flex-direction:
            column;
        }

        .hire-faq-item {
          width:
            100%;

          min-width:
            0;

          margin:
            0;

          padding:
            0 0 18px;

          border-bottom:
            1px solid
            #D1DBE8;
        }

        .hire-faq-item + .hire-faq-item {
          padding-top:
            18px;
        }

        .hire-faq-item h3 {
          margin:
            0 0 20px;

          padding:
            0;

          font-size:
            17px;

          line-height:
            1.25;

          font-weight:
            700;

          letter-spacing:
            -0.02em;

          color:
            #0E0E0E;
        }

        .hire-faq-item p {
          margin:
            0;

          padding:
            0;

          font-size:
            14px;

          line-height:
            1.65;

          font-weight:
            400;

          color:
            #0E0E0E;
        }

        .hire-faq-button-wrap {
          width:
            100%;

          margin:
            34px 0 0;

          display:
            flex;

          align-items:
            center;

          justify-content:
            flex-start;
        }

        .hire-faq-button {
          width:
            125px;

          height:
            42px;

          padding:
            0 14px;

          display:
            inline-flex;

          align-items:
            center;

          justify-content:
            center;

          gap:
            5px;

          border:
            1px solid
            #0E0E0E;

          border-radius:
            999px;

          background:
            transparent;

          color:
            #0E0E0E;

          font-family:
            inherit;

          font-size:
            12px;

          line-height:
            1;

          font-weight:
            400;

          text-decoration:
            none;

          white-space:
            nowrap;

          cursor:
            pointer;

          transition:
            background
              0.25s ease,
            color
              0.25s ease,
            border-color
              0.25s ease,
            transform
              0.25s ease,
            box-shadow
              0.25s ease;
        }

        .hire-faq-button:hover {
          background:
            linear-gradient(
              90deg,
              #0180FD 0%,
              #0021AF 100%
            );

          color:
            #FFFFFF;

          border-color:
            transparent;

          transform:
            translateY(
              -2px
            );

          box-shadow:
            0 8px 18px
            rgba(
              0,
              33,
              175,
              0.16
            );
        }

        .hire-faq-button svg {
          width:
            11px;

          height:
            11px;

          display:
            block;

          flex-shrink:
            0;
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1100px) {

          .hire-container {
            padding:
              0 30px;
          }

          .hire-hero-container {
            padding:
              42px 30px
              36px;
          }

          .hire-gallery {
            height:
              260px;
          }

          .hire-gallery-main,
          .hire-gallery-stack {
            height:
              260px;
          }

          .hire-hero-title {
            font-size:
              28px;
          }

          .hire-hero-description {
            font-size:
              12px;
          }

          .ways-layout {
            column-gap:
              35px;
          }

          .ways-row {
            grid-template-columns:
              minmax(
                0,
                1fr
              )
              minmax(
                0,
                1.45fr
              );

            column-gap:
              30px;
          }

          .ways-row-title {
            font-size:
              18px;
          }

          .ways-row-description {
            font-size:
              10px;
          }

          .ways-heading {
            font-size:
              24px;
          }

          .process-card {
            min-height:
              180px;

            padding:
              16px;
          }

          .process-card.is-active {
            min-height:
              180px;
          }

          .process-card h3 {
            font-size:
              15px;
          }

          .process-card p {
            font-size:
              8px;
          }

          .hire-faq-layout {
            column-gap:
              55px;
          }
        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 767px) {

          .hire-container {
            width:
              100%;

            max-width:
              none;

            padding:
              0 20px;
          }


          /* HERO */

          .hire-hero-container {
            width:
              100%;

            max-width:
              none;

            margin:
              0;

            padding:
              42px 20px
              34px;
          }

          .hire-eyebrow {
            font-size:
              14px;
          }

          .hire-hero-title {
            max-width:
              100%;

            margin-top:
              20px;

            font-size:
              24px;

            line-height:
              1.2;
          }

          .hire-hero-description {
            max-width:
              100%;

            margin-top:
              22px;

            font-size:
              11px;

            line-height:
              1.65;
          }

          .hire-hero-button {
            width:
              155px;

            height:
              46px;

            margin-top:
              23px;

            font-size:
              10px;
          }


          /* GALLERY */

          .hire-gallery {
            height:
              205px;

            grid-template-columns:
              1.12fr
              0.72fr
              0.95fr
              0.72fr
              1.12fr;

            gap:
              4px;
          }

          .hire-gallery-main,
          .hire-gallery-stack {
            height:
              205px;
          }

          .hire-gallery-main,
          .hire-gallery-stack-item {
            border-radius:
              5px;
          }

          .hire-gallery-stack {
            gap:
              4px;
          }

          .hire-gallery-stack-item {
            height:
              calc(
                50% - 2px
              );
          }


          /* MAIN */

          .hire-main-section {
            padding-top:
              42px;
          }


          /* WAYS */

          .ways-heading {
            margin-bottom:
              28px;

            font-size:
              20px;
          }

          /*
            Mobile image stays on top.
          */

          .ways-layout {
            display:
              flex;

            flex-direction:
              column;

            gap:
              28px;
          }

          .ways-image-wrap {
            position:
              relative;

            top:
              auto;

            width:
              100%;

            height:
              190px;

            border-radius:
              7px;

            order:
              0;
          }

          .ways-content {
            width:
              100%;

            order:
              1;
          }


          /*
            Mobile:
            title on top,
            description below.
          */

          .ways-row {
            width:
              100%;

            display:
              grid;

            grid-template-columns:
              1fr;

            row-gap:
              9px;

            column-gap:
              0;

            padding-bottom:
              20px;
          }

          .ways-row + .ways-row {
            padding-top:
              17px;
          }

          .ways-row-title {
            font-size:
              17px;

            line-height:
              1.25;
          }

          .ways-row-description {
            font-size:
              9px;

            line-height:
              1.55;
          }


          /* PROCESS */

          .hire-process-section {
            margin-top:
              58px;
          }

          .hire-process-grid {
            width:
              100%;

            display:
              flex;

            flex-direction:
              column;

            gap:
              8px;
          }

          .process-card,
          .process-card.is-active {
            width:
              100%;

            min-height:
              145px;

            padding:
              18px;

            border-radius:
              7px;
          }

          .process-card h3 {
            font-size:
              17px;
          }

          .process-card p {
            font-size:
              9px;

            line-height:
              1.6;
          }


          /* FORM */

          .hire-form-section {
            width:
              100%;

            max-width:
              100%;

            margin-top:
              58px;

            padding:
              0;
          }


          /* FAQ */

          .hire-faq-section {
            padding:
              52px 0 62px;
          }

          .hire-faq-layout {
            display:
              flex;

            flex-direction:
              column;

            gap:
              34px;
          }

          .hire-faq-left {
            width:
              100%;
          }

          .hire-faq-eyebrow {
            margin-bottom:
              18px;

            font-size:
              11px;
          }

          .hire-faq-left h2 {
            font-size:
              21px;

            line-height:
              1.3;
          }

          .hire-faq-right {
            width:
              100%;
          }

          .hire-faq-item {
            width:
              100%;

            padding-bottom:
              18px;
          }

          .hire-faq-item + .hire-faq-item {
            padding-top:
              18px;
          }

          .hire-faq-item h3 {
            margin-bottom:
              15px;

            font-size:
              15px;

            line-height:
              1.3;
          }

          .hire-faq-item p {
            font-size:
              10px;

            line-height:
              1.65;
          }

          .hire-faq-button-wrap {
            margin-top:
              30px;
          }

          .hire-faq-button {
            width:
              115px;

            height:
              38px;

            font-size:
              9px;
          }
        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 420px) {

          .hire-container {
            padding:
              0 20px;
          }

          .hire-hero-container {
            padding:
              38px 20px
              32px;
          }

          .hire-eyebrow {
            font-size:
              13px;
          }

          .hire-hero-title {
            font-size:
              22px;
          }

          .hire-hero-description {
            font-size:
              10px;
          }

          .hire-hero-button {
            width:
              150px;

            height:
              44px;

            font-size:
              9.5px;
          }


          /* GALLERY */

          .hire-gallery {
            height:
              175px;
          }

          .hire-gallery-main,
          .hire-gallery-stack {
            height:
              175px;
          }


          /* WAYS */

          .ways-heading {
            font-size:
              19px;
          }

          .ways-image-wrap {
            height:
              170px;
          }

          .ways-row-title {
            font-size:
              16px;
          }

          .ways-row-description {
            font-size:
              8.5px;
          }


          /* PROCESS */

          .process-card,
          .process-card.is-active {
            min-height:
              135px;

            padding:
              16px;
          }

          .process-card h3 {
            font-size:
              16px;
          }

          .process-card p {
            font-size:
              8.5px;
          }


          /* FAQ */

          .hire-faq-section {
            padding:
              46px 0 54px;
          }

          .hire-faq-left h2 {
            font-size:
              20px;
          }

          .hire-faq-item h3 {
            font-size:
              14px;
          }

          .hire-faq-item p {
            font-size:
              9.5px;
          }

          .hire-faq-button {
            width:
              110px;

            height:
              37px;

            font-size:
              8.5px;
          }
        }


        /* =====================================================
           TOUCH
        ===================================================== */

        @media (hover: none) {

          .hire-hero-button:hover {
            transform:
              none;

            box-shadow:
              none;
          }

          .ways-row:hover {
            opacity:
              0.42;
          }

          .ways-row.is-active {
            opacity:
              1;
          }

          .process-card:hover {
            transform:
              none;
          }

          .hire-faq-button:hover {
            background:
              transparent;

            color:
              #0E0E0E;

            border-color:
              #0E0E0E;

            transform:
              none;

            box-shadow:
              none;
          }
        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (
          prefers-reduced-motion: reduce
        ) {

          .hire-hero-button,
          .ways-row,
          .process-card,
          .hire-faq-button,
          .ways-image {
            transition:
              none;

            animation:
              none;
          }
        }

      `}</style>
    </main>
  );
}