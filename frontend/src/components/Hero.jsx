"use client";

export default function Hero() {
  const marqueeText =
    "▲ PROVEN IMPACT ACROSS 200+ DIGITAL DELIVERIES SPANNING 20+ INDUSTRIES.";

  const marqueeItems = Array.from({
    length: 10,
  });

  return (
    <section className="kk-hero">
      {/* =========================================
          HERO IMAGE
      ========================================== */}

      <div className="kk-hero-image-wrap">
        <img
          src="/home/hero.png"
          alt="Kontent Kraft Digital"
          className="kk-hero-image"
          draggable="false"
          fetchPriority="high"
        />

        {/* Bottom dark blur only */}
        <div className="kk-hero-overlay" />
      </div>

      {/* =========================================
          HERO CONTENT
      ========================================== */}

      <div className="kk-hero-content">
        <div className="kk-hero-content-inner">
          {/* LEFT */}

          <div className="kk-hero-copy">
            <h1 className="kk-hero-title">
              WE CREATE THE NEXT GENERATION OF DIGITAL PRODUCTS
            </h1>

            <p className="kk-hero-description">
              Built For Scale, Performance, And Lasting
              Business Impact.
            </p>

            <div className="kk-hero-actions">
              <a
                href="#contact"
                className="kk-hero-primary"
              >
                <span>
                  Start Your Project
                </span>

                <span className="kk-hero-arrow">
                  ⬆
                </span>
              </a>

              <a
                href="#portfolio"
                className="kk-hero-secondary"
              >
                <span>
                  See Our Work
                </span>

                <span className="kk-hero-secondary-arrow">
                  ⬆
                </span>
              </a>
            </div>
          </div>

          {/* CERTIFICATES */}

          <div className="kk-hero-certificates">
            <div className="kk-certificate">
              <img
                src="/home/hl.png"
                alt="Recognition certificate"
                draggable="false"
              />
            </div>

            <div className="kk-certificate">
              <img
                src="/home/hl2.png"
                alt="Recognition certificate"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          MARQUEE
          UNCHANGED
      ========================================== */}

      <div className="kk-marquee">
        <div className="kk-marquee-track">
          {marqueeItems.map((_, index) => (
            <div
              className="kk-marquee-item"
              key={index}
            >
              <span className="kk-marquee-copy">
                {marqueeText}
              </span>

              <a
                href="#contact"
                className="kk-marquee-action"
              >
                EXPLORE NOW
              </a>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* =========================================
           HERO
        ========================================= */

        .kk-hero {
          position: relative;

          width: 100%;

          min-height:
            clamp(
              620px,
              44vw,
              700px
            );

          overflow: hidden;

          background: #050505;

          color: #ffffff;

          font-family:
            "Britti Sans Trial",
            Arial,
            Helvetica,
            sans-serif;

          isolation: isolate;
        }

        /* =========================================
           IMAGE WRAPPER

           Padding defines the final target
           rectangle used by the loader.
        ========================================= */

        .kk-hero-image-wrap {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          overflow: hidden;

          z-index: 1;

          padding:
            24px 32px 0;

          box-sizing: border-box;
        }

        /* =========================================
           HERO IMAGE

           This is the loader's final target.
        ========================================= */

        .kk-hero-image {
          position: relative;

          width: 100%;
          height: 100%;

          max-width: none;

          display: block;

          object-fit: contain;

          object-position:
            center center;

          user-select: none;

          pointer-events: none;

          transform: none;

          will-change: auto;
        }

        /* =========================================
           BOTTOM DARK BLUR
        ========================================= */

        .kk-hero-overlay {
          position: absolute;

          left: 0;
          right: 0;
          bottom: 0;

          top: 38%;

          width: 100%;

          background:
            linear-gradient(
              to bottom,

              rgba(
                5,
                5,
                5,
                0
              ) 0%,

              rgba(
                5,
                5,
                5,
                0.12
              ) 14%,

              rgba(
                5,
                5,
                5,
                0.42
              ) 42%,

              rgba(
                5,
                5,
                5,
                0.76
              ) 70%,

              rgba(
                5,
                5,
                5,
                0.98
              ) 100%
            );

          backdrop-filter:
            blur(10px);

          -webkit-backdrop-filter:
            blur(10px);

          z-index: 2;

          pointer-events: none;

          overflow: hidden;
        }

        /* =========================================
           CONTENT
        ========================================= */

        .kk-hero-content {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          z-index: 5;

          display: flex;

          align-items: flex-end;
        }

        .kk-hero-content-inner {
          width: 100%;

          max-width: 1700px;

          min-width: 0;

          margin: 0 auto;

          padding:
            0
            clamp(
              32px,
              5vw,
              78px
            )
            78px;

          display: grid;

          grid-template-columns:
            minmax(0, 1fr)
            auto;

          align-items: flex-end;

          gap:
            clamp(
              24px,
              4vw,
              70px
            );
        }

        /* =========================================
           COPY
        ========================================= */

        .kk-hero-copy {
          width: 100%;

          max-width: 1200px;

          min-width: 0;
        }

        /*
          TITLE
          Fluid clamp() sizing replaces the old fixed 28px + nowrap.
          Nowrap on a 51-character headline only actually fits on
          very wide viewports — below roughly 1400px it was
          overflowing/clipping past the visible hero area (worst on
          tablet, where it was still forced to a single 28px line).
          Letting it wrap keeps the design intact at every width and
          removes the overflow entirely; the min-width:1400px rule
          below restores the single-line look once there's genuinely
          room for it.
        */
        .kk-hero-title {
          margin: 0;

          width: 100%;

          color: #ffffff;

          font-size: clamp(22px, 2.6vw, 28px);

          line-height: 1.04;

          letter-spacing:
            -0.045em;

          font-weight: 700;

          text-transform: uppercase;

          white-space: normal;

          overflow-wrap: break-word;

          text-wrap: balance;
        }

        .kk-hero-description {
          margin:
            26px 0 0;

          max-width: 650px;

          color:
            rgba(
              255,
              255,
              255,
              0.92
            );

          font-size:
            clamp(
              13px,
              1.05vw,
              16px
            );

          line-height: 1.45;

          font-weight: 400;

          font-style: italic;
        }

        /* =========================================
           ACTIONS
        ========================================= */

        .kk-hero-actions {
          display: flex;

          align-items: center;

          gap: 24px;

          margin-top: 30px;

          flex-wrap: wrap;
        }

        .kk-hero-primary {
          min-height: 46px;

          padding:
            0 20px;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 10px;

          border-radius: 999px;

          background:
            linear-gradient(
              135deg,
              #0180fd 0%,
              #0021af 100%
            );

          color: #ffffff;

          font-size:
            clamp(
              11px,
              0.8vw,
              14px
            );

          font-weight: 600;

          line-height: 1;

          text-decoration: none;

          white-space: nowrap;

          box-shadow:
            0 9px 24px
              rgba(
                0,
                33,
                175,
                0.28
              );

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .kk-hero-primary:hover {
          transform:
            translateY(-2px);

          box-shadow:
            0 13px 30px
              rgba(
                0,
                33,
                175,
                0.38
              );
        }

        .kk-hero-arrow {
          font-size: 14px;
        }

        .kk-hero-secondary {
          display: inline-flex;

          align-items: center;

          gap: 5px;

          color: #ffffff;

          font-size:
            clamp(
              11px,
              0.8vw,
              14px
            );

          font-weight: 500;

          text-decoration: none;

          white-space: nowrap;
        }

        .kk-hero-secondary-arrow {
          font-size: 12px;
        }

        /* =========================================
           CERTIFICATES
        ========================================= */

        .kk-hero-certificates {
          display: flex;

          align-items: flex-end;

          gap:
            clamp(
              10px,
              1.2vw,
              18px
            );

          padding-bottom: 2px;

          flex-shrink: 0;
        }

        .kk-certificate {
          width:
            clamp(
              105px,
              9vw,
              145px
            );

          aspect-ratio:
            1 / 1.06;

          border-radius: 8px;

          overflow: hidden;

          background:
            rgba(
              0,
              0,
              0,
              0.25
            );

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.16
            );

          box-shadow:
            0 8px 22px
              rgba(
                0,
                0,
                0,
                0.24
              );

          display: flex;

          align-items: center;

          justify-content: center;

          flex-shrink: 0;
        }

        .kk-certificate img {
          width: 100%;
          height: 100%;

          max-width: none;

          display: block;

          object-fit: contain;

          user-select: none;

          pointer-events: none;
        }

        /* =========================================
           MARQUEE
           SAME
        ========================================= */

        .kk-marquee {
          position: absolute;

          left: 0;
          bottom: 0;

          width: 100%;

          min-height: 40px;

          overflow: hidden;

          z-index: 10;

          background:
            linear-gradient(
              135deg,
              #0180fd 0%,
              #0021af 100%
            );

          display: flex;

          align-items: center;

          white-space: nowrap;
        }

        .kk-marquee-track {
          display: flex;

          align-items: center;

          width: max-content;

          flex-shrink: 0;

          animation:
            kkHeroMarquee
            28s
            linear
            infinite;

          will-change:
            transform;
        }

        .kk-marquee-item {
          display: flex;

          align-items: center;

          gap: 46px;

          padding-right: 46px;

          color: #ffffff;

          font-size:
            clamp(
              12.5px,
              0.9vw,
              16px
            );

          line-height: 1;

          font-weight: 500;

          flex-shrink: 0;
        }

        .kk-marquee-copy {
          opacity: 0.96;
        }

        .kk-marquee-action {
          color: #ffffff;

          font-weight: 700;

          text-decoration: none;
        }

        @keyframes kkHeroMarquee {
          from {
            transform:
              translate3d(
                0,
                0,
                0
              );
          }

          to {
            transform:
              translate3d(
                -50%,
                0,
                0
              );
          }
        }

        /* =========================================
           LARGE DESKTOP
           Only here is there reliably enough room for
           the full headline to sit on a single line, so
           this is the one place nowrap is restored.
        ========================================= */

        @media (min-width: 1400px) {
          .kk-hero {
            min-height: 700px;
          }

          .kk-hero-content-inner {
            padding-left: 80px;

            padding-right: 80px;

            padding-bottom: 80px;
          }

          .kk-hero-title {
            font-size: 28px;

            line-height: 0.98;

            letter-spacing: -0.055em;

            white-space: nowrap;
          }

          .kk-hero-image-wrap {
            padding:
              28px 48px 0;
          }
        }

        /* =========================================
           TABLET
           Same two-column, bottom-aligned layout as
           desktop — just scaled down and with the
           title allowed to wrap to a second line so it
           never spills past the edge of the copy column.
        ========================================= */

        @media (max-width: 1100px) {
          .kk-hero {
            min-height: 660px;
          }

          .kk-hero-content-inner {
            padding:
              0
              35px
              70px;

            gap:
              clamp(20px, 4vw, 40px);
          }

          .kk-hero-title {
            font-size: clamp(24px, 3.6vw, 28px);
          }

          .kk-hero-description {
            font-size: 14px;

            max-width: 480px;
          }

          .kk-hero-certificates {
            gap: 10px;
          }

          .kk-certificate {
            width: clamp(80px, 10vw, 100px);
          }

          .kk-hero-image-wrap {
            padding:
              20px 24px 0;
          }

          .kk-hero-overlay {
            top: 36%;

            backdrop-filter:
              blur(8px);

            -webkit-backdrop-filter:
              blur(8px);
          }
        }

        /* =========================================
           SMALL TABLET / LARGE PHONE LANDSCAPE
           Between the tablet layout and the fully
           stacked mobile layout, the two-column grid
           gets tight — shrink certificates further and
           tighten the title so nothing crowds the edge.
        ========================================= */

        @media (max-width: 860px) {
          .kk-hero-content-inner {
            gap: clamp(16px, 3vw, 28px);
          }

          .kk-hero-title {
            font-size: clamp(21px, 4.2vw, 25px);
          }

          .kk-hero-description {
            max-width: 380px;
          }

          .kk-certificate {
            width: clamp(70px, 11vw, 90px);
          }
        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 767px) {
          .kk-hero {
            min-height: 720px;

            display: flex;

            flex-direction: column;
          }

          .kk-hero-image-wrap {
            height: 58%;

            padding:
              14px 14px 0;
          }

          .kk-hero-overlay {
            top: 34%;

            background:
              linear-gradient(
                to bottom,
                rgba(
                  5,
                  5,
                  5,
                  0
                ) 0%,

                rgba(
                  5,
                  5,
                  5,
                  0.16
                ) 16%,

                rgba(
                  5,
                  5,
                  5,
                  0.5
                ) 46%,

                rgba(
                  5,
                  5,
                  5,
                  0.82
                ) 72%,

                rgba(
                  5,
                  5,
                  5,
                  0.98
                ) 100%
              );

            backdrop-filter:
              blur(7px);

            -webkit-backdrop-filter:
              blur(7px);
          }

          .kk-hero-content {
            align-items: flex-end;

            padding-bottom: 45px;
          }

          .kk-hero-content-inner {
            padding:
              0
              20px
              0;

            display: flex;

            flex-direction: column;

            align-items: flex-start;

            justify-content: flex-end;

            gap: 26px;
          }

          .kk-hero-copy {
            width: 100%;

            max-width: none;
          }

          .kk-hero-title {
            width: 100%;

            font-size:
              clamp(
                22px,
                7vw,
                30px
              );

            line-height: 0.96;

            letter-spacing:
              -0.05em;

            white-space: normal;
          }

          .kk-hero-description {
            margin-top: 17px;

            max-width: 320px;

            font-size: 13px;
          }

          .kk-hero-actions {
            margin-top: 22px;

            gap: 18px;

            flex-wrap: wrap;
          }

          .kk-hero-primary {
            min-height: 43px;

            padding:
              0 18px;

            font-size: 11px;
          }

          .kk-hero-secondary {
            font-size: 11px;
          }

          .kk-hero-certificates {
            width: 100%;

            justify-content: flex-start;

            gap: 12px;
          }

          .kk-certificate {
            width:
              clamp(
                90px,
                26vw,
                115px
              );
          }
        }

        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 480px) {
          .kk-hero {
            min-height: 690px;
          }

          .kk-hero-image-wrap {
            height: 52%;

            padding:
              12px 12px 0;
          }

          .kk-hero-content {
            padding-bottom: 42px;
          }

          .kk-hero-content-inner {
            padding-left: 16px;
            padding-right: 16px;
          }

          .kk-hero-title {
            font-size:
              clamp(
                20px,
                6.8vw,
                27px
              );
          }

          .kk-hero-description {
            font-size: 12px;
          }

          .kk-certificate {
            width: 92px;
          }
        }

        /* =========================================
           VERY SMALL MOBILE
        ========================================= */

        @media (max-width: 360px) {
          .kk-hero-title {
            font-size: 20px;
          }
        }

        /* =========================================
           REDUCED MOTION
        ========================================= */

        @media (
          prefers-reduced-motion: reduce
        ) {
          .kk-marquee-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}