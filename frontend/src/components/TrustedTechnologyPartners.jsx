"use client";
const trustedPartners = Array.from(
  { length: 6 },
  (_, index) => ({
    id: index + 1,
    image: `/home/trusted/${
      index + 1
    }.png`,
    alt: `Trusted Technology Partner ${
      index + 1
    }`,
  })
);

export default function TrustedTechnologyPartners() {
  return (
    <section className="trusted-section">
      <div className="trusted-container">
        {/* =========================================
            HEADING
        ========================================== */}

        <h2 className="trusted-title">
          Our Trusted Technology Partners
        </h2>

        {/* =========================================
            LOGO GRID
        ========================================== */}

        <div className="trusted-grid">
          {trustedPartners.map(
            (partner) => (
              <div
                key={partner.id}
                className="trusted-card"
              >
                <img
                  src={partner.image}
                  alt={partner.alt}
                  width="190"
                  height="62"
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                  className="trusted-logo"
                />
              </div>
            )
          )}
        </div>
      </div>

      <style jsx>{`
        /* =========================================
           SECTION
        ========================================== */

        .trusted-section {
          width: 100%;

          background: #f3f8ff;

          padding:
            72px 62px 82px;

          box-sizing:
            border-box;

          font-family:
            "Britti Sans Trial",
            Arial,
            Helvetica,
            sans-serif;

          overflow:
            hidden;
        }

        /* =========================================
           CONTAINER
        ========================================== */

        .trusted-container {
          width: 100%;

          max-width: 1400px;

          margin: 0 auto;

          box-sizing: border-box;

          min-width: 0;
        }

        /* =========================================
           HEADING
        ========================================== */

        .trusted-title {
          margin: 0;

          text-align: center;

          font-family:
            "Britti Sans Trial",
            Arial,
            sans-serif;

          font-size: 34px;

          line-height: 1.15;

          font-weight: 700;

          letter-spacing:
            -0.04em;

          color: #0e0e0e;

          overflow-wrap:
            break-word;
        }

        /* =========================================
           GRID
        ========================================== */

        .trusted-grid {
          width: 100%;

          margin-top: 52px;

          display: grid;

          grid-template-columns:
            repeat(
              3,
              minmax(
                0,
                1fr
              )
            );

          column-gap: 20px;

          row-gap: 18px;

          box-sizing:
            border-box;

          min-width: 0;
        }

        /* =========================================
           CARD
        ========================================== */

        .trusted-card {
          width: 100%;

          height: 128px;

          border:
            1px solid #d5dce7;

          border-radius:
            12px;

          display: flex;

          align-items:
            center;

          justify-content:
            center;

          padding:
            20px 28px;

          box-sizing:
            border-box;

          background:
            rgba(
              255,
              255,
              255,
              0.08
            );

          overflow: hidden;

          min-width: 0;

          transition:
            transform
              0.25s ease,
            border-color
              0.25s ease,
            box-shadow
              0.25s ease;

          /*
            Keep cards isolated from neighboring
            painting as much as possible.
          */
          contain:
            layout paint;
        }

        .trusted-card:hover {
          transform:
            translate3d(
              0,
              -2px,
              0
            );

          border-color:
            #c5cedd;

          box-shadow:
            0 8px 20px
              rgba(
                14,
                14,
                14,
                0.05
              );
        }

        /* =========================================
           LOGO
        ========================================== */

        .trusted-logo {
          display: block;

          width: auto;

          height: auto;

          max-width: 190px;

          max-height: 62px;

          object-fit:
            contain;

          user-select: none;

          pointer-events: none;

          -webkit-user-drag: none;
        }

        /* =========================================
           TABLET
        ========================================== */

        @media (max-width: 1024px) {
          .trusted-section {
            padding:
              60px 28px 70px;
          }

          .trusted-title {
            font-size:
              30px;
          }

          .trusted-grid {
            column-gap:
              16px;

            row-gap:
              16px;

            margin-top:
              42px;
          }

          .trusted-card {
            height:
              118px;

            padding:
              18px 20px;
          }

          .trusted-logo {
            max-width:
              160px;

            max-height:
              54px;
          }
        }

        /* =========================================
           MOBILE
           3 CARDS PER ROW
        ========================================== */

        @media (max-width: 767px) {
          .trusted-section {
            padding:
              48px 20px 60px;
          }

          .trusted-title {
            font-size:
              27px;

            line-height:
              1.12;
          }

          .trusted-grid {
            margin-top:
              38px;

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
              12px;
          }

          .trusted-card {
            height:
              92px;

            padding:
              12px 8px;

            border-radius:
              10px;
          }

          .trusted-logo {
            max-width:
              95px;

            max-height:
              42px;
          }

          /*
            Same mobile hover behavior.
          */

          .trusted-card:hover {
            transform:
              none;

            box-shadow:
              none;
          }
        }

        /* =========================================
           SMALL MOBILE
        ========================================== */

        @media (max-width: 420px) {
          .trusted-section {
            padding:
              42px 20px 54px;
          }

          .trusted-title {
            font-size:
              24px;
          }

          .trusted-grid {
            margin-top:
              32px;

            column-gap:
              8px;

            row-gap:
              10px;
          }

          .trusted-card {
            height:
              84px;

            padding:
              10px 6px;

            border-radius:
              9px;
          }

          .trusted-logo {
            max-width:
              82px;

            max-height:
              36px;
          }
        }

        /* =========================================
           TOUCH DEVICES
        ========================================== */

        @media (hover: none) {
          .trusted-card:hover {
            transform:
              none;

            box-shadow:
              none;
          }
        }

        /* =========================================
           REDUCED MOTION
        ========================================== */

        @media (
          prefers-reduced-motion:
            reduce
        ) {
          .trusted-card {
            transition:
              none;
          }

          .trusted-card:hover {
            transform:
              none;

            box-shadow:
              none;
          }
        }
      `}</style>
    </section>
  );
}