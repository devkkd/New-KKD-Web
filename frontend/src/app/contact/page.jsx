import Contactform from "@/components/Contactform";
import GlobalPartnersSection from "@/components/GlobalPartnersSection";
import TestimonialsSection from "@/components/Testimonialssection";

const FAQS = [
  {
    id: 1,
    question:
      "How soon will someone get back to me?",
    answer:
      "We aim to respond to every inquiry quickly, typically within one business day.",
  },
  {
    id: 2,
    question:
      "Do I need a fully-formed idea before reaching out?",
    answer:
      "Not at all. Many of our clients start with just a rough concept. We're happy to help shape it into a clear plan during our first conversation.",
  },
  {
    id: 3,
    question:
      "Is there a cost for the initial consultation?",
    answer:
      "No. Your first consultation is completely free, with no obligation to move forward.",
  },
  {
    id: 4,
    question:
      "What information should I include when I reach out?",
    answer:
      "A general idea of what you want to build, any timeline you're working with, and a rough budget range if you have one — this helps us prepare better for our first conversation.",
  },
  {
    id: 5,
    question:
      "Can we schedule a call instead of filling out the form?",
    answer:
      "Yes. If you'd rather talk directly, feel free to reach out by phone or email and we'll find a time that works.",
  },
];

export default function ContactPage() {
  return (
    <main className="contact-page">

      {/* =====================================================
          CONTACT INTRO
      ===================================================== */}

      <section className="contact-intro">
        <div className="contact-page-container">
          <div className="contact-intro-inner">

            <div className="contact-eyebrow">
              Contact Us
            </div>

            <h1 className="contact-heading">
              Let&apos;s Build Something Worth Talking About
            </h1>

            <p className="contact-intro-text">
              Got a project in mind, a problem to solve, or just
              an idea you want to talk through?
              <br />
              <strong>Tell us about it.</strong> No forms full of
              jargon, no sales run-around just a real conversation
              about what you need and how we can help.
            </p>

          </div>
        </div>
      </section>


      {/* =====================================================
          CONTACT FORM
          
          NO PAGE PADDING IS ADDED HERE.
          Contactform controls its own UI.
      ===================================================== */}

      <section className="contact-form-section">
        <Contactform />
      </section>


      {/* =====================================================
          DIRECT CONTACT
      ===================================================== */}

      <section className="direct-contact-section">
        <div className="contact-page-container">

          <h2 className="direct-contact-heading">
            Prefer To Talk Directly?
          </h2>

          <div className="direct-contact-grid">

            {/* ADDRESS */}

            <div className="direct-contact-block">

              <h3>
                Address:
              </h3>

              <p>
                First Floor, Plot-22, Muhana Mandi Rd, Near Kesar
                Chauraha,
                <br />
                Mansarovar Extension,
                <br />
                Kalyanpura, Jagatpura, Jaipur, Barhthorampura,
                Rajasthan 302020
                <br />
                (INDIA)
              </p>

            </div>


            {/* CONTACT */}

            <div className="direct-contact-block direct-contact-right">

              <p>
                <strong>
                  Call :
                </strong>{" "}
                078783 41302
              </p>

              <p>
                <strong>
                  Email :
                </strong>{" "}
                hello@kontentkraftdigital.com
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          GLOBAL PARTNERS
          
          FULL WIDTH
          NO PAGE SIDE PADDING
      ===================================================== */}

      <section className="contact-full-width-section">
        <GlobalPartnersSection
          heading="Trusted By Businesses Across Industries"
        />
      </section>
       <section className="contact-full-width-section">
        <TestimonialsSection
          showLabel={false}
        />
      </section>


      {/* =====================================================
          FAQ
          
          INLINE SECTION
          NO FAQ COMPONENT
      ===================================================== */}

      <section className="contact-faq-section">

        <div className="contact-faq-container">

          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div className="contact-faq-left">

            <div className="contact-faq-eyebrow">
              FAQ&apos;s
            </div>

            <h2 className="contact-faq-heading">
              The Questions Everyone
              <br />
              Asks Anyway
            </h2>

          </div>


          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div className="contact-faq-right">

            {FAQS.map((faq) => (
              <div
                key={faq.id}
                className="contact-faq-item"
              >

                <h3 className="contact-faq-question">
                  {faq.question}
                </h3>

                <p className="contact-faq-answer">
                  {faq.answer}
                </p>

              </div>
            ))}


            {/* BUTTON */}

            <div className="contact-faq-button-wrap">

              <a
                href="/faq"
                className="contact-faq-button"
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

      </section>


      {/* =====================================================
          TESTIMONIALS
          
          FULL WIDTH
          NO PAGE SIDE PADDING
      ===================================================== */}

     


      {/* =====================================================
          CSS
      ===================================================== */}

      <style>{`

        /* =====================================================
           GLOBAL PAGE
        ===================================================== */

        .contact-page {
          width:
            100%;

          min-height:
            100vh;

          margin:
            0;

          padding:
            0;

          background:
            #F3F8FF;

          color:
            #0E0E0E;

          font-family:
            "Britti Sans Trial",
            Arial,
            Helvetica,
            sans-serif;

          box-sizing:
            border-box;

          overflow-x:
            hidden;
        }


        .contact-page *,
        .contact-page *::before,
        .contact-page *::after {
          box-sizing:
            border-box;
        }


        /* =====================================================
           COMMON PAGE CONTAINER
        ===================================================== */

        .contact-page-container {
          width:
            100%;

          max-width:
            1400px;

          margin:
            0 auto;

          padding-left:
            30px;

          padding-right:
            30px;

          box-sizing:
            border-box;
        }


        /* =====================================================
           CONTACT INTRO
        ===================================================== */

        .contact-intro {
          width:
            100%;

          padding:
            42px 0 34px;

          margin:
            0;

          background:
            #F3F8FF;
        }


        .contact-intro-inner {
          width:
            100%;

          display:
            flex;

          flex-direction:
            column;

          align-items:
            center;

          text-align:
            center;
        }


        .contact-eyebrow {
          margin:
            0 0 18px;

          padding:
            0;

          font-size:
            19px;

          line-height:
            1;

          font-weight:
            600;

          color:
            #0E0E0E;
        }


        .contact-heading {
          margin:
            0;

          padding:
            0;

          font-size:
            28px;

          line-height:
            1.2;

          font-weight:
            600;

          letter-spacing:
            -0.035em;

          color:
            #0E0E0E;
        }


        .contact-intro-text {
          width:
            100%;

          max-width:
            700px;

          margin:
            24px auto 0;

          padding:
            0;

          font-size:
            13.5px;

          line-height:
            1.55;

          font-weight:
            400;

          color:
            #0E0E0E;
        }


        .contact-intro-text strong {
          font-weight:
            700;
        }


        /* =====================================================
           CONTACT FORM

           IMPORTANT:
           NO HORIZONTAL PADDING HERE.
           Contactform itself controls its padding.
        ===================================================== */

        .contact-form-section {
          width:
            100%;

          max-width:
            100%;

          margin:
            0;

          padding:
            0;

          background:
            #F3F8FF;

          box-sizing:
            border-box;

          overflow:
            visible;
        }


        .contact-form-section > * {
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
           DIRECT CONTACT
        ===================================================== */

        .direct-contact-section {
          width:
            100%;

          margin:
            0;

          padding:
            36px 0 72px;

          background:
            #F3F8FF;
        }


        .direct-contact-heading {
          margin:
            0 0 28px;

          padding:
            0;

          text-align:
            center;

          font-size:
            24px;

          line-height:
            1.2;

          font-weight:
            700;

          letter-spacing:
            -0.03em;

          color:
            #0E0E0E;
        }


        .direct-contact-grid {
          width:
            100%;

          display:
            grid;

          grid-template-columns:
            minmax(
              0,
              1fr
            )
            minmax(
              0,
              1fr
            );

          column-gap:
            42px;

          align-items:
            stretch;
        }


        .direct-contact-block {
          min-height:
            76px;

          padding:
            8px 0;

          margin:
            0;

          color:
            #0E0E0E;
        }


        .direct-contact-block:first-child {
          padding-right:
            42px;

          border-right:
            1px solid
            #D5DDE8;
        }


        .direct-contact-block h3 {
          margin:
            0 0 5px;

          padding:
            0;

          font-size:
            14px;

          line-height:
            1.25;

          font-weight:
            600;

          color:
            #0E0E0E;
        }


        .direct-contact-block p {
          margin:
            0;

          padding:
            0;

          font-size:
            13px;

          line-height:
            1.55;

          font-weight:
            400;

          color:
            #0E0E0E;
        }


        .direct-contact-block p + p {
          margin-top:
            2px;
        }


        .direct-contact-block strong {
          font-weight:
            700;
        }


        .direct-contact-right {
          padding-left:
            0;
        }


        /* =====================================================
           FULL WIDTH CHILD SECTIONS
           
           No page padding.
        ===================================================== */

        .contact-full-width-section {
          width:
            100%;

          max-width:
            100%;

          margin:
            0;

          padding:
            0;

          background:
            #F3F8FF;

          box-sizing:
            border-box;

          overflow:
            visible;
        }


        .contact-full-width-section > * {
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
           INLINE FAQ SECTION
        ===================================================== */

        .contact-faq-section {
          width:
            100%;

          margin:
            0;

          padding:
            72px 0 86px;

          background:
            #F3F8FF;

          color:
            #0E0E0E;

          box-sizing:
            border-box;

          overflow:
            hidden;
        }


        .contact-faq-container {
          width:
            100%;

          max-width:
            1400px;

          margin:
            0 auto;

          padding-left:
            30px;

          padding-right:
            30px;

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

          box-sizing:
            border-box;
        }


        /* =====================================================
           FAQ LEFT
        ===================================================== */

        .contact-faq-left {
          width:
            100%;

          min-width:
            0;

          padding:
            0;

          margin:
            0;
        }


        .contact-faq-eyebrow {
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


        .contact-faq-heading {
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


        /* =====================================================
           FAQ RIGHT
        ===================================================== */

        .contact-faq-right {
          width:
            100%;

          min-width:
            0;

          display:
            flex;

          flex-direction:
            column;

          margin:
            0;

          padding:
            0;
        }


        /* =====================================================
           FAQ ITEM
        ===================================================== */

        .contact-faq-item {
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


        .contact-faq-item + .contact-faq-item {
          padding-top:
            18px;
        }


        /* =====================================================
           FAQ QUESTION
        ===================================================== */

        .contact-faq-question {
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


        /* =====================================================
           FAQ ANSWER
        ===================================================== */

        .contact-faq-answer {
          width:
            100%;

          max-width:
            100%;

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


        /* =====================================================
           FAQ BUTTON
        ===================================================== */

        .contact-faq-button-wrap {
          width:
            100%;

          display:
            flex;

          align-items:
            center;

          justify-content:
            flex-start;

          margin:
            34px 0 0;

          padding:
            0;
        }


        .contact-faq-button {
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
            "Britti Sans Trial",
            Arial,
            Helvetica,
            sans-serif;

          font-size:
            12px;

          line-height:
            1;

          font-weight:
            400;

          white-space:
            nowrap;

          text-decoration:
            none;

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


        .contact-faq-button svg {
          width:
            11px;

          height:
            11px;

          display:
            block;

          flex-shrink:
            0;
        }


        .contact-faq-button:hover {
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
            translateY(-2px);

          box-shadow:
            0 8px 18px
            rgba(
              0,
              33,
              175,
              0.16
            );
        }


        .contact-faq-button:focus-visible {
          outline:
            2px solid
            #0180FD;

          outline-offset:
            3px;
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1100px) {

          .contact-page-container {
            padding-left:
              32px;

            padding-right:
              32px;
          }


          .contact-heading {
            font-size:
              24px;
          }


          .contact-intro-text {
            font-size:
              11.5px;
          }


          .contact-faq-section {
            padding:
              64px 0 74px;
          }


          .contact-faq-container {
            padding-left:
              32px;

            padding-right:
              32px;

            column-gap:
              55px;
          }


          .contact-faq-heading {
            font-size:
              21px;
          }


          .contact-faq-question {
            font-size:
              14px;
          }


          .contact-faq-answer {
            font-size:
              10px;
          }
        }


        /* =====================================================
           MOBILE
        ===================================================== */

      /* =====================================================
   MOBILE
   767px and below
===================================================== */

@media (max-width: 767px) {

  /* ===================================================
     COMMON CONTAINER
  =================================================== */

  .contact-page-container {
    width: 100%;
    max-width: none;

    margin: 0 auto;

    padding-left: 20px;
    padding-right: 20px;
  }

  /* ===================================================
     CONTACT INTRO
  =================================================== */

  .contact-intro {
    width: 100%;

    padding:
      38px 0 30px;

    margin: 0;
  }

  .contact-intro-inner {
    width: 100%;

    display: flex;
    flex-direction: column;

    align-items: center;

    text-align: center;
  }

  .contact-eyebrow {
    margin:
      0 0 16px;

    font-size:
      15px;

    line-height:
      1.2;

    font-weight:
      600;
  }

  .contact-heading {
    width: 100%;
    max-width: 620px;

    margin: 0;
    padding: 0;

    font-size:
      26px;

    line-height:
      1.2;

    font-weight:
      600;

    letter-spacing:
      -0.03em;

    text-align:
      center;
  }

  .contact-intro-text {
    width: 100%;
    max-width: 620px;

    margin:
      20px auto 0;

    padding: 0;

    font-size:
      15px;

    line-height:
      1.65;

    font-weight:
      400;

    color:
      #0E0E0E;

    text-align:
      center;
  }

  .contact-intro-text strong {
    font-weight:
      700;
  }

  /* ===================================================
     CONTACT FORM
     FULL WIDTH
  =================================================== */

  .contact-form-section {
    width: 100%;
    max-width: 100%;

    margin: 0;
    padding: 0;

    background:
      #F3F8FF;
  }

  .contact-form-section > * {
    width: 100%;
    max-width: 100%;

    margin-left: 0;
    margin-right: 0;
  }

  /* ===================================================
     DIRECT CONTACT
  =================================================== */

  .direct-contact-section {
    width: 100%;

    margin: 0;

    padding:
      36px 0 58px;

    background:
      #F3F8FF;
  }

  .direct-contact-heading {
    margin:
      0 0 28px;

    padding: 0;

    text-align:
      center;

    font-size:
      25px;

    line-height:
      1.2;

    font-weight:
      700;

    letter-spacing:
      -0.025em;
  }

  .direct-contact-grid {
    width: 100%;

    display: grid;

    grid-template-columns:
      1fr;

    row-gap:
      26px;

    align-items:
      stretch;
  }

  .direct-contact-block {
    width: 100%;

    min-height:
      auto;

    padding: 0;
    margin: 0;

    color:
      #0E0E0E;
  }

  .direct-contact-block:first-child {
    padding-right:
      0;

    padding-bottom:
      24px;

    border-right:
      none;

    border-bottom:
      1px solid #D5DDE8;
  }

  .direct-contact-right {
    padding-left:
      0;
  }

  .direct-contact-block h3 {
    margin:
      0 0 8px;

    padding: 0;

    font-size:
      16px;

    line-height:
      1.25;

    font-weight:
      600;
  }

  .direct-contact-block p {
    margin: 0;
    padding: 0;

    font-size:
      15px;

    line-height:
      1.65;

    font-weight:
      400;

    color:
      #0E0E0E;
  }

  .direct-contact-block p + p {
    margin-top:
      8px;
  }

  .direct-contact-block strong {
    font-weight:
      700;
  }

  /* ===================================================
     FULL WIDTH COMPONENTS
  =================================================== */

  .contact-full-width-section {
    width: 100%;
    max-width: 100%;

    margin: 0;
    padding: 0;

    background:
      #F3F8FF;
  }

  .contact-full-width-section > * {
    width: 100%;
    max-width: 100%;

    margin-left: 0;
    margin-right: 0;
  }

  /* ===================================================
     FAQ
  =================================================== */

  .contact-faq-section {
    width: 100%;

    margin: 0;

    padding:
      58px 0 68px;

    background:
      #F3F8FF;

    color:
      #0E0E0E;

    overflow:
      hidden;
  }

  .contact-faq-container {
    width: 100%;
    max-width: none;

    margin: 0;

    padding-left:
      20px;

    padding-right:
      20px;

    display:
      flex;

    flex-direction:
      column;

    gap:
      38px;
  }

  /* ===================================================
     FAQ LEFT
  =================================================== */

  .contact-faq-left {
    width: 100%;
    min-width: 0;

    padding: 0;
    margin: 0;
  }

  .contact-faq-eyebrow {
    margin:
      0 0 18px;

    padding: 0;

    font-size:
      14px;

    line-height:
      1;

    font-weight:
      400;
  }

  .contact-faq-heading {
    width: 100%;

    margin: 0;
    padding: 0;

    font-size:
      26px;

    line-height:
      1.25;

    font-weight:
      700;

    letter-spacing:
      -0.03em;
  }

  /* ===================================================
     FAQ RIGHT
  =================================================== */

  .contact-faq-right {
    width: 100%;
    min-width: 0;

    display: flex;
    flex-direction: column;

    margin: 0;
    padding: 0;
  }

  /* ===================================================
     FAQ ITEM
  =================================================== */

  .contact-faq-item {
    width: 100%;
    min-width: 0;

    margin: 0;

    padding:
      0 0 22px;

    border-bottom:
      1px solid #D1DBE8;
  }

  .contact-faq-item + .contact-faq-item {
    padding-top:
      22px;
  }

  /* ===================================================
     FAQ QUESTION
  =================================================== */

  .contact-faq-question {
    margin:
      0 0 12px;

    padding: 0;

    font-size:
      17px;

    line-height:
      1.35;

    font-weight:
      700;

    letter-spacing:
      -0.015em;

    color:
      #0E0E0E;
  }

  /* ===================================================
     FAQ ANSWER
  =================================================== */

  .contact-faq-answer {
    width: 100%;
    max-width: 100%;

    margin: 0;
    padding: 0;

    font-size:
      14px;

    line-height:
      1.7;

    font-weight:
      400;

    color:
      #0E0E0E;
  }

  /* ===================================================
     FAQ BUTTON
  =================================================== */

  .contact-faq-button-wrap {
    width: 100%;

    display: flex;

    align-items: center;
    justify-content: flex-start;

    margin:
      32px 0 0;

    padding: 0;
  }

  .contact-faq-button {
    width:
      140px;

    height:
      42px;

    padding:
      0 16px;

    display: inline-flex;

    align-items: center;
    justify-content: center;

    gap:
      6px;

    border:
      1px solid #0E0E0E;

    border-radius:
      999px;

    background:
      transparent;

    color:
      #0E0E0E;

    font-family:
      "Britti Sans Trial",
      Arial,
      Helvetica,
      sans-serif;

    font-size:
      13px;

    line-height:
      1;

    font-weight:
      500;

    white-space:
      nowrap;

    text-decoration:
      none;

    cursor:
      pointer;
  }

  .contact-faq-button svg {
    width:
      11px;

    height:
      11px;

    display:
      block;

    flex-shrink:
      0;
  }
}


/* =====================================================
   SMALL MOBILE
   420px and below
===================================================== */

@media (max-width: 420px) {

  /* ===================================================
     INTRO
  =================================================== */

  .contact-intro {
    padding:
      32px 0 26px;
  }

  .contact-eyebrow {
    margin-bottom:
      14px;

    font-size:
      14px;
  }

  .contact-heading {
    font-size:
      23px;

    line-height:
      1.25;
  }

  .contact-intro-text {
    margin-top:
      18px;

    font-size:
      14px;

    line-height:
      1.65;
  }

  /* ===================================================
     DIRECT CONTACT
  =================================================== */

  .direct-contact-section {
    padding:
      32px 0 52px;
  }

  .direct-contact-heading {
    margin-bottom:
      24px;

    font-size:
      23px;
  }

  .direct-contact-grid {
    row-gap:
      24px;
  }

  .direct-contact-block:first-child {
    padding-bottom:
      22px;
  }

  .direct-contact-block h3 {
    margin-bottom:
      7px;

    font-size:
      15px;
  }

  .direct-contact-block p {
    font-size:
      14px;

    line-height:
      1.65;
  }

  .direct-contact-block p + p {
    margin-top:
      7px;
  }

  /* ===================================================
     FAQ
  =================================================== */

  .contact-faq-section {
    padding:
      52px 0 60px;
  }

  .contact-faq-container {
    gap:
      34px;

    padding-left:
      20px;

    padding-right:
      20px;
  }

  .contact-faq-eyebrow {
    margin-bottom:
      16px;

    font-size:
      13px;
  }

  .contact-faq-heading {
    font-size:
      23px;

    line-height:
      1.3;
  }

  .contact-faq-item {
    padding-bottom:
      20px;
  }

  .contact-faq-item + .contact-faq-item {
    padding-top:
      20px;
  }

  .contact-faq-question {
    margin-bottom:
      11px;

    font-size:
      16px;

    line-height:
      1.35;
  }

  .contact-faq-answer {
    font-size:
      13px;

    line-height:
      1.7;
  }

  .contact-faq-button-wrap {
    margin-top:
      28px;
  }

  .contact-faq-button {
    width:
      135px;

    height:
      41px;

    font-size:
      12.5px;
  }
}


/* =====================================================
   TOUCH DEVICES
===================================================== */

@media (hover: none) {

  .contact-faq-button:hover {
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

@media (prefers-reduced-motion: reduce) {

  .contact-page {
    scroll-behavior:
      auto;
  }

  .contact-faq-button {
    transition:
      none;
  }
}


        /* =====================================================
           TOUCH DEVICES
        ===================================================== */

        @media (hover: none) {

          .contact-faq-button:hover {
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

          .contact-page {
            scroll-behavior:
              auto;
          }


          .contact-faq-button {
            transition:
              none;
          }
        }

      `}</style>

    </main>
  );
}