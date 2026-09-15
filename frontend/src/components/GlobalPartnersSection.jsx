"use client";
const logos = Array.from(
  { length: 15 },
  (_, index) =>
    `/home/global/${index + 1}.png`
);

export default function GlobalPartnersSection({
  heading = "Partners in Global Excellence",
}) {
  return (
    <section className="global-partners-section">
      <div className="global-partners-container">
        {/* =========================================
            HEADING
        ========================================== */}

        <h2 className="global-partners-heading">
          {heading}
        </h2>

        {/* =========================================
            LOGO GRID
        ========================================== */}

        <div className="global-partners-grid">
          {logos.map((logo, index) => (
            <div
              key={logo}
              className="global-partner-item"
            >
              <div
                className="global-partner-logo"
                role="img"
                aria-label={`Global Partner ${
                  index + 1
                }`}
                style={{
                  "--partner-logo": `url("${logo}")`,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* =========================================
           SECTION
        ========================================== */

        .global-partners-section {
          width: 100%;

          background: #f3f8ff;

          padding:
            10px 32px 90px;

          box-sizing: border-box;

          font-family:
            "Britti Sans Trial",
            Arial,
            Helvetica,
            sans-serif;

          overflow: hidden;
        }

        /* =========================================
           CONTAINER
        ========================================== */

        .global-partners-container {
          width: 100%;

          max-width: 1400px;

          margin: 0 auto;

          min-width: 0;
        }

        /* =========================================
           HEADING
        ========================================== */

        .global-partners-heading {
          margin: 0;

          text-align: center;

          font-family:
            "Britti Sans Trial",
            Arial,
            sans-serif;

          font-size: 32px;

          line-height: 1.15;

          font-weight: 600;

          letter-spacing:
            -0.045em;

          color: #0e0e0e;

          max-width: 100%;

          overflow-wrap:
            break-word;
        }

        /* =========================================
           GRID
        ========================================== */

        .global-partners-grid {
          width: 100%;

          margin-top: 70px;

          display: grid;

          grid-template-columns:
            repeat(
              5,
              minmax(
                0,
                1fr
              )
            );

          column-gap: 55px;

          row-gap: 45px;

          align-items: center;

          justify-items: center;
        }

        /* =========================================
           ITEM
        ========================================== */

        .global-partner-item {
          width: 100%;

          height: 66px;

          display: flex;

          align-items: center;

          justify-content: center;

          box-sizing: border-box;

          min-width: 0;
        }

        /* =========================================
           LOGO MASK
        ========================================== */

        .global-partner-logo {
          width: 180px;

          height: 88px;

          max-width: 100%;

          max-height: 100%;

          flex-shrink: 0;

          display: block;

          background-color: #0e0e0e;

          -webkit-mask-image:
            var(--partner-logo);

          mask-image:
            var(--partner-logo);

          -webkit-mask-repeat:
            no-repeat;

          mask-repeat:
            no-repeat;

          -webkit-mask-position:
            center;

          mask-position:
            center;

          -webkit-mask-size:
            contain;

          mask-size:
            contain;

          -webkit-mask-composite:
            source-over;

          mask-composite:
            add;

          transform:
            translate3d(
              0,
              0,
              0
            )
            scale(1);

          transition:
            background-color
              0.45s ease,

            transform
              0.45s
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              );

          cursor:
            pointer;

          will-change:
            transform;
        }

        /* =========================================
           DESKTOP HOVER
        ========================================== */

        .global-partner-logo:hover {
          background-color:
            #0180fd;

          transform:
            translate3d(
              0,
              0,
              0
            )
            scale(
              1.06
            );
        }

        /* =========================================
           TABLET
           4 LOGOS PER ROW
        ========================================== */

        @media (max-width: 1024px) {
          .global-partners-section {
            padding:
              40px 32px
              75px;
          }

          .global-partners-heading {
            font-size:
              30px;
          }

          .global-partners-grid {
            grid-template-columns:
              repeat(
                4,
                minmax(
                  0,
                  1fr
                )
              );

            column-gap:
              30px;

            row-gap:
              38px;

            margin-top:
              58px;
          }

          .global-partner-item {
            height:
              70px;
          }

          .global-partner-logo {
            width:
              140px;

            height:
              54px;
          }
        }

        /* =========================================
           MOBILE
           3 LOGOS PER ROW
        ========================================== */

        @media (max-width: 640px) {
          .global-partners-section {
            padding:
              48px 20px
              65px;
          }

          .global-partners-heading {
            font-size:
              27px;

            line-height:
              1.12;
          }

          .global-partners-grid {
            grid-template-columns:
              repeat(
                3,
                minmax(
                  0,
                  1fr
                )
              );

            column-gap:
              14px;

            row-gap:
              28px;

            margin-top:
              48px;
          }

          .global-partner-item {
            width:
              100%;

            height:
              60px;
          }

          .global-partner-logo {
            width:
              100px;

            height:
              42px;

            max-width:
              100%;

            max-height:
              100%;
          }
        }

        /* =========================================
           SMALL MOBILE
           3 LOGOS PER ROW
        ========================================== */

        @media (max-width: 380px) {
          .global-partners-section {
            padding:
              42px 18px
              58px;
          }

          .global-partners-heading {
            font-size:
              24px;
          }

          .global-partners-grid {
            grid-template-columns:
              repeat(
                3,
                minmax(
                  0,
                  1fr
                )
              );

            column-gap:
              10px;

            row-gap:
              24px;

            margin-top:
              42px;
          }

          .global-partner-item {
            height:
              54px;
          }

          .global-partner-logo {
            width:
              90px;

            height:
              38px;
          }
        }

        /* =========================================
           TOUCH DEVICES
        ========================================== */

        @media (hover: none) {
          .global-partner-logo:hover {
            transform:
              translate3d(
                0,
                0,
                0
              )
              scale(1);
          }
        }

        /* =========================================
           REDUCED MOTION
        ========================================== */

        @media (
          prefers-reduced-motion:
            reduce
        ) {
          .global-partner-logo {
            transition:
              none;
            will-change:
              auto;
          }

          .global-partner-logo:hover {
            transform:
              translate3d(
                0,
                0,
                0
              )
              scale(1);
          }
        }
      `}</style>
    </section>
  );
}