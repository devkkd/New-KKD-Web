import GlobalPartnersSection from "@/components/GlobalPartnersSection";
import TestimonialsSection from "@/components/Testimonialssection";
import Contactform from "@/components/Contactform";

export default function ClientsPage() {
  return (
    <main className="clients-page">

      {/* =====================================================
          HERO
          ONLY THIS CONTENT USES PAGE SIDE PADDING
      ===================================================== */}

      <section className="clients-hero">
        <div className="clients-hero-container">

          {/* EYEBROW */}

          <div className="clients-eyebrow">
            Clients
          </div>

          {/* HEADING */}

          <h1 className="clients-title">
            Businesses We&apos;ve Built With
          </h1>

          {/* DESCRIPTION */}

          <p className="clients-description">
            We don&apos;t measure success by projects finished
            we measure it by relationships that last past
            launch day.
            <br className="clients-desktop-break" />
            Here&apos;s a look at the kinds of businesses
            that trust us with their websites, apps, and
            digital growth.
          </p>

          {/* BUTTON */}

          <a
            href="/contact"
            className="clients-cta"
          >
            <span>
              Become Our Next Client
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
          GLOBAL PARTNERS

          FULL WIDTH
          NO PAGE SIDE PADDING
      ===================================================== */}

      <section className="clients-full-section">
        <GlobalPartnersSection
          heading="Trusted By Businesses Across Industries"
        />
      </section>


      {/* =====================================================
          TESTIMONIALS

          FULL WIDTH
          NO PAGE SIDE PADDING
      ===================================================== */}

      <section className="clients-full-section">
        <TestimonialsSection
          showLabel={false}
        />
      </section>


      {/* =====================================================
          CONTACT FORM

          FULL WIDTH
          NO PAGE SIDE PADDING
      ===================================================== */}

      <section
        id="contact"
        className="clients-form-section"
      >
        <div className="clients-form-inner">
          <Contactform />
        </div>
      </section>


      {/* =====================================================
          CSS
      ===================================================== */}

      <style>{`

        /* =====================================================
           PAGE
        ===================================================== */

        .clients-page {
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

        .clients-page *,
        .clients-page *::before,
        .clients-page *::after {
          box-sizing: border-box;
        }


        /* =====================================================
           HERO
        ===================================================== */

        .clients-hero {
          width: 100%;

          margin: 0;
          padding: 0;

          background: #F3F8FF;
        }

        .clients-hero-container {
          width: 100%;

          max-width: 1400px;

          margin: 0 auto;

          padding:
            42px 32px
            54px;

          display: flex;

          flex-direction: column;

          align-items: center;

          text-align: center;

          box-sizing: border-box;
        }


        /* =====================================================
           EYEBROW
        ===================================================== */

        .clients-eyebrow {
          margin: 0;

          padding: 0;

          font-family:
            "Britti Sans Trial",
            Arial,
            sans-serif;

          font-size: 19px;

          line-height: 1.15;

          font-weight: 600;

          letter-spacing:
            -0.025em;

          color: #0E0E0E;
        }


        /* =====================================================
           HEADING
        ===================================================== */

        .clients-title {
          width: 100%;

          max-width: 900px;

          margin:
            28px auto 0;

          padding: 0;

          font-family:
            "Britti Sans Trial",
            Arial,
            sans-serif;

          font-size: 30px;

          line-height: 1.15;

          font-weight: 600;

          letter-spacing:
            -0.045em;

          color: #0E0E0E;
        }


        /* =====================================================
           DESCRIPTION
        ===================================================== */

        .clients-description {
          width: 100%;

          max-width: 930px;

          margin:
            42px auto 0;

          padding: 0;

          font-family:
            "Britti Sans Trial",
            Arial,
            sans-serif;

          font-size: 14px;

          line-height: 1.6;

          font-weight: 400;

          color: #0E0E0E;
        }


        /* =====================================================
           CTA
        ===================================================== */

        .clients-cta {
          width: 196px;

          height: 45px;

          margin-top: 30px;

          padding: 0 20px;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 6px;

          border: none;

          border-radius: 999px;

          background:
            linear-gradient(
              90deg,
              #0180FD 0%,
              #0021AF 100%
            );

          color: #FFFFFF;

          font-family:
            "Britti Sans Trial",
            Arial,
            sans-serif;

          font-size: 12px;

          line-height: 1;

          font-weight: 500;

          text-decoration: none;

          white-space: nowrap;

          cursor: pointer;

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;

          flex: 0 0 auto;
        }

        .clients-cta svg {
          width: 11px;
          height: 11px;

          display: block;

          flex-shrink: 0;
        }

        .clients-cta:hover {
          transform:
            translateY(-2px);

          box-shadow:
            0 10px 24px
            rgba(
              0,
              33,
              175,
              0.20
            );
        }


        /* =====================================================
           FULL WIDTH CHILD SECTIONS
           
           IMPORTANT:
           NO PAGE SIDE PADDING
           NO EXTRA MARGIN
        ===================================================== */

        .clients-full-section {
          width: 100%;
          max-width: 100%;

          margin: 0;
          padding: 0;

          box-sizing: border-box;

          overflow: visible;
        }

        .clients-form-section {
          width: 100%;
          max-width: 100%;

          margin: 0;
          padding: 0;

          background: #F3F8FF;

          box-sizing: border-box;

          overflow: visible;
        }

        .clients-form-inner {
          width: 100%;
          max-width: 100%;

          margin: 0;
          padding: 0;

          box-sizing: border-box;
        }

        .clients-form-inner > * {
          width: 100%;

          max-width: 100%;

          margin-left: 0;
          margin-right: 0;
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1100px) {

          .clients-hero-container {
            padding:
              48px 32px
              48px;
          }

          .clients-title {
            font-size:
              29px;
          }

          .clients-description {
            font-size:
              13px;

            max-width:
              850px;
          }

          .clients-cta {
            width:
              190px;

            height:
              50px;
          }
        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 767px) {

          .clients-hero-container {
            width: 100%;

            max-width: none;

            padding:
              42px 20px
              42px;
          }

          .clients-eyebrow {
            font-size:
              14px;
          }

          .clients-title {
            max-width:
              100%;

            margin-top:
              20px;

            font-size:
              25px;

            line-height:
              1.2;
          }

          .clients-description {
            max-width:
              100%;

            margin-top:
              26px;

            font-size:
              12px;

            line-height:
              1.65;
          }

          .clients-desktop-break {
            display:
              none;
          }

          .clients-cta {
            width:
              184px;

            height:
              50px;

            margin-top:
              26px;

            padding:
              0 16px;

            font-size:
              11px;
          }


          /*
            Child sections remain full width.
            Nothing here adds 20px to them.
          */

          .clients-full-section,
          .clients-form-section,
          .clients-form-inner {
            width: 100%;

            max-width: 100%;

            margin: 0;

            padding: 0;
          }
        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 420px) {

          .clients-hero-container {
            padding:
              36px 20px
              38px;
          }

          .clients-eyebrow {
            font-size:
              13px;
          }

          .clients-title {
            font-size:
              23px;
          }

          .clients-description {
            margin-top:
              23px;

            font-size:
              11px;
          }

          .clients-cta {
            width:
              178px;

            height:
              48px;

            margin-top:
              24px;

            font-size:
              10.5px;
          }
        }


        /* =====================================================
           TOUCH
        ===================================================== */

        @media (hover: none) {

          .clients-cta:hover {
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

          .clients-cta {
            transition:
              none;
          }
        }

      `}</style>

    </main>
  );
}