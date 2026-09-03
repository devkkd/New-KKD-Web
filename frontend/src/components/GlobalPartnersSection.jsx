"use client";

const logos = Array.from(
  { length: 15 },
  (_, index) => `/home/global/${index + 1}.png`
);

export default function GlobalPartnersSection({
  heading = "Partners in Global Excellence",
}) {
  return (
    <section
      style={{
        width: "100%",
        background: "#F3F8FF",
        padding: "10px 32px 90px",
        boxSizing: "border-box",
        fontFamily:
          "'Britti Sans Trial', Arial, Helvetica, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* =========================================
            HEADING
        ========================================== */}

        <h2
          style={{
            margin: 0,
            textAlign: "center",

            fontFamily:
              "'Britti Sans Trial', Arial, sans-serif",

            fontSize: "32px",
            lineHeight: 1.15,

            fontWeight: 600,

            letterSpacing: "-0.045em",

            color: "#0E0E0E",
          }}
        >
{heading}
        </h2>

        {/* =========================================
            LOGO GRID
        ========================================== */}

        <div
          className="global-partners-grid"
          style={{
            width: "100%",

            marginTop: "70px",

            display: "grid",

            gridTemplateColumns:
              "repeat(5, minmax(0, 1fr))",

            columnGap: "55px",

            rowGap: "45px",

            alignItems: "center",

            justifyItems: "center",
          }}
        >
          {logos.map((logo, index) => (
            <div
              key={logo}
              className="global-partner-item"
              style={{
                width: "100%",
                height: "66px",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                boxSizing: "border-box",
              }}
            >
              {/* =========================================
                  MASK LOGO
              ========================================== */}

              <div
                className="global-partner-logo"
                role="img"
                aria-label={`Global Partner ${index + 1}`}
                style={{
                  width: "180px",
                  height: "88px",

                  maxWidth: "100%",
                  maxHeight: "100%",

                  backgroundColor: "#0E0E0E",

                  WebkitMaskImage: `url("${logo}")`,
                  maskImage: `url("${logo}")`,

                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",

                  WebkitMaskPosition: "center",
                  maskPosition: "center",

                  WebkitMaskSize: "contain",
                  maskSize: "contain",

                  WebkitMaskComposite: "source-over",
                  maskComposite: "add",

                  display: "block",

                  transition:
                    "background-color 0.45s ease, transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)",

                  transform: "scale(1)",

                  cursor: "pointer",

                  flexShrink: 0,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* =========================================
           DESKTOP HOVER
        ========================================== */

        .global-partner-logo:hover {
          background-color: #0180fd !important;

          transform: scale(1.06);
        }

        /* =========================================
           TABLET
           4 LOGOS PER ROW
        ========================================== */

        @media (max-width: 1024px) {
          section {
            padding:
              40px 32px
              75px !important;
          }

          h2 {
            font-size: 30px !important;
          }

          .global-partners-grid {
            grid-template-columns:
              repeat(
                4,
                minmax(0, 1fr)
              ) !important;

            column-gap: 30px !important;

            row-gap: 38px !important;

            margin-top: 58px !important;
          }

          .global-partner-item {
            height: 70px !important;
          }

          .global-partner-logo {
            width: 140px !important;
            height: 54px !important;
          }
        }

        /* =========================================
           MOBILE
           3 LOGOS PER ROW
        ========================================== */

        @media (max-width: 640px) {
          section {
            padding:
              48px 20px
              65px !important;
          }

          h2 {
            font-size: 27px !important;

            line-height: 1.12 !important;
          }

          .global-partners-grid {
            grid-template-columns:
              repeat(
                3,
                minmax(0, 1fr)
              ) !important;

            column-gap: 14px !important;

            row-gap: 28px !important;

            margin-top: 48px !important;
          }

          .global-partner-item {
            width: 100% !important;

            height: 60px !important;
          }

          .global-partner-logo {
            width: 100px !important;

            height: 42px !important;

            max-width: 100% !important;

            max-height: 100% !important;
          }

          /*
            Touch devices mein hover
            fake na ho isliye scale
            remove rakha hai.
          */

          .global-partner-logo:hover {
            transform: none;
          }
        }

        /* =========================================
           SMALL MOBILE
           STILL 3 PER ROW
        ========================================== */

        @media (max-width: 380px) {
          section {
            padding:
              42px 18px
              58px !important;
          }

          h2 {
            font-size: 24px !important;
          }

          .global-partners-grid {
            grid-template-columns:
              repeat(
                3,
                minmax(0, 1fr)
              ) !important;

            column-gap: 10px !important;

            row-gap: 24px !important;

            margin-top: 42px !important;
          }

          .global-partner-item {
            height: 54px !important;
          }

          .global-partner-logo {
            width: 90px !important;

            height: 38px !important;
          }
        }

        /* =========================================
           REDUCED MOTION
        ========================================== */

        @media (
          prefers-reduced-motion: reduce
        ) {
          .global-partner-logo {
            transition: none !important;
          }

          .global-partner-logo:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}