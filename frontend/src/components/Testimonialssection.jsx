"use client";

import {
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";



/* =========================================================
   DATA
========================================================= */

const TESTIMONIAL_TEXT =
  "I've worked with agencies on three continents. Kontent Kraft is the first partner where I genuinely felt they cared about our outcome not just their invoice. They delivered everything on time, on budget, and the product our investors actually got excited about.";

const testimonials = Array.from({
  length: 10,
}).map((_, i) => ({
  id: i + 1,
  image: `/home/testimonals/${(i % 2) + 1}.png`,
  name: "SARAH M.",
  role: "CPO, EDTECH PLATFORM · UK",
}));

export default function TestimonialsSection({
  showLabel = true,
}) {

  /* =========================================================
     CURRENT PATH
  ========================================================= */



  /* =========================================================
     TRACK
  ========================================================= */

  const trackRef = useRef(null);

  /* =========================================================
     DRAG STATE
  ========================================================= */

  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);

  const [dragging, setDragging] =
    useState(false);

  /* =========================================================
     POINTER DOWN
  ========================================================= */

  const onPointerDown = useCallback((e) => {
    const track = trackRef.current;

    if (!track) return;

    isDragging.current = true;

    setDragging(true);

    startX.current =
      e.clientX ??
      (e.touches &&
        e.touches[0]?.clientX) ??
      0;

    startScroll.current =
      track.scrollLeft;

    if (
      track.setPointerCapture &&
      e.pointerId != null
    ) {
      track.setPointerCapture(
        e.pointerId
      );
    }
  }, []);

  /* =========================================================
     POINTER MOVE
  ========================================================= */

  const onPointerMove = useCallback((e) => {
    if (!isDragging.current) return;

    const track = trackRef.current;

    if (!track) return;

    const x =
      e.clientX ??
      (e.touches &&
        e.touches[0]?.clientX) ??
      0;

    const delta =
      x - startX.current;

    track.scrollLeft =
      startScroll.current -
      delta;
  }, []);

  /* =========================================================
     POINTER UP
  ========================================================= */

  const onPointerUp = useCallback(() => {
    isDragging.current = false;

    setDragging(false);
  }, []);

  /* =========================================================
     EVENTS
  ========================================================= */

  useEffect(() => {
    window.addEventListener(
      "mousemove",
      onPointerMove
    );

    window.addEventListener(
      "mouseup",
      onPointerUp
    );

    window.addEventListener(
      "touchmove",
      onPointerMove,
      { passive: true }
    );

    window.addEventListener(
      "touchend",
      onPointerUp
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        onPointerMove
      );

      window.removeEventListener(
        "mouseup",
        onPointerUp
      );

      window.removeEventListener(
        "touchmove",
        onPointerMove
      );

      window.removeEventListener(
        "touchend",
        onPointerUp
      );
    };
  }, [
    onPointerMove,
    onPointerUp,
  ]);

  /* =========================================================
     HIDE ON ALL NON-HOME PAGES
     
     HOME = /
  ========================================================= */



  return (
    <section className="ts-section">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="ts-header">
       {showLabel && (
  <span className="ts-eyebrow">
    TESTIMONIALS
  </span>
)}

        <h2 className="ts-heading">
          100 companies, We&apos;ll let them talk
        </h2>
      </div>

      {/* =====================================================
          CAROUSEL
      ===================================================== */}

      <div className="ts-carousel-wrap">
        <div
          className={`ts-track ${
            dragging
              ? "ts-track--dragging"
              : ""
          }`}
          ref={trackRef}
          onMouseDown={onPointerDown}
          onTouchStart={onPointerDown}
        >
          {testimonials.map((t) => (
            <article
              className="ts-card"
              key={t.id}
            >
              {/* ==========================================
                  LEFT SIDE
              =========================================== */}

              <div className="ts-card-left">
                {/* IMAGE */}

                <div className="ts-card-img">
                  <img
                    src={t.image}
                    alt={t.name}
                    draggable={false}
                  />
                </div>

                {/* NAME + LOCATION
                    ONLY BELOW IMAGE */}

                <div className="ts-card-name-wrap">
                  <p className="ts-card-name">
                    {t.name}
                  </p>

                  <p className="ts-card-role">
                    {t.role}
                  </p>
                </div>
              </div>

              {/* ==========================================
                  RIGHT SIDE DESCRIPTION
              =========================================== */}

              <div className="ts-card-body">
                <p className="ts-card-text">
                  I&apos;ve worked with agencies
                  on three continents.{" "}
                  <strong>
                    Kontent Kraft
                  </strong>{" "}
                  is the first partner where I
                  genuinely felt they cared about
                  our outcome not just their
                  invoice. They delivered everything
                  on time, on budget, and the
                  product our investors actually
                  got excited about.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* =====================================================
          CTA
      ===================================================== */}

      <div className="ts-cta-wrap">
        <button
          type="button"
          className="ts-cta"
        >
          Know More What Our Client Say

          <span className="ts-cta-arrow">
            ▲
          </span>
        </button>
      </div>

      <style>{`
        /* =========================================================
           SECTION
        ========================================================= */

        .ts-section {
          width: 100%;

          background: #F3F8FF;

         padding:
  clamp(32px, 5vw, 70px)
  0
  clamp(56px, 8vw, 88px);

          font-family:
            "Britti Sans Trial",
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;

          color: #0E0E0E;

          overflow: hidden;

          box-sizing: border-box;
        }

        .ts-section * {
          box-sizing: border-box;
        }

        /* =========================================================
           HEADER
        ========================================================= */

        .ts-header {
          text-align: center;

          padding:
            0 20px;

          margin-bottom:
            clamp(
              28px,
              4vw,
              44px
            );
        }

        .ts-eyebrow {
          display: inline-block;

          font-size: 14px;

          font-weight: 400;

          letter-spacing:
            0.14em;

          color: #0E0E0E;

          margin-bottom:
            14px;
        }

        .ts-heading {
          font-family:
            "Britti Sans Trial",
            Arial,
            Helvetica,
            sans-serif;

          font-size:
            clamp(
              24px,
              4vw,
              40px
            );

          font-weight: 800;

          line-height: 1.15;

          margin: 0;

          letter-spacing:
            -0.01em;

          color:
            #0E0E0E;
        }

        /* =========================================================
           CAROUSEL
        ========================================================= */

        .ts-carousel-wrap {
          position:
            relative;

          width: 100%;
        }

        .ts-track {
          display: flex;

          gap: 24px;

          overflow-x: auto;

          overflow-y: hidden;

          scroll-behavior:
            smooth;

          -webkit-overflow-scrolling:
            touch;

          scrollbar-width:
            none;

          padding:
            8px
            clamp(
              20px,
              6vw,
              80px
            )
            20px;

          cursor:
            grab;

          user-select:
            none;
        }

        .ts-track::-webkit-scrollbar {
          display:
            none;
        }

        .ts-track--dragging {
          cursor:
            grabbing;

          scroll-behavior:
            auto;
        }

        /* =========================================================
           CARD
        ========================================================= */

        .ts-card {
          flex:
            0 0 auto;

          width:
            clamp(
              280px,
              32vw,
              386px
            );

          display:
            flex;

          flex-direction:
            row;

          align-items:
            flex-start;

          gap:
            18px;

          background:
            #FFFFFF;

          border:
            1px solid
            rgba(
              14,
              14,
              14,
              0.08
            );

          border-radius:
            16px;

          padding:
            18px;

          scroll-snap-align:
            start;

          box-sizing:
            border-box;
        }

        /* =========================================================
           LEFT COLUMN
        ========================================================= */

        .ts-card-left {
          flex:
            0 0 96px;

          width:
            96px;

          min-width:
            96px;

          display:
            flex;

          flex-direction:
            column;

          align-items:
            flex-start;

          justify-content:
            flex-start;
        }

        /* =========================================================
           IMAGE
        ========================================================= */

        .ts-card-img {
          width:
            96px;

          height:
            168px;

          flex:
            0 0 auto;

          border-radius:
            10px;

          overflow:
            hidden;

          background:
            #e9edf5;
        }

        .ts-card-img img {
          width:
            100%;

          height:
            100%;

          object-fit:
            cover;

          display:
            block;

          pointer-events:
            none;

          user-select:
            none;
        }

        /* =========================================================
           NAME + LOCATION
           UNDER IMAGE ONLY
        ========================================================= */

        .ts-card-name-wrap {
          width:
            100%;

          margin-top:
            12px;

          display:
            flex;

          flex-direction:
            column;

          align-items:
            flex-start;

          justify-content:
            flex-start;

          gap:
            0;
        }

        .ts-card-name {
          width:
            100%;

          margin:
            0;

          font-size:
            13px;

          line-height:
            1.2;

          font-weight:
            700;

          letter-spacing:
            0.01em;

          color:
            #0E0E0E;

          text-transform:
            uppercase;
        }

        .ts-card-role {
          width:
            100%;

          margin:
            5px 0 0;

          font-size:
            10px;

          line-height:
            1.35;

          font-weight:
            400;

          color:
            #0E0E0E;

          text-transform:
            uppercase;
        }

        /* =========================================================
           RIGHT SIDE TESTIMONIAL
        ========================================================= */

        .ts-card-body {
          flex:
            1 1 auto;

          min-width:
            0;

          width:
            auto;

          display:
            block;
        }

        .ts-card-text {
          font-size:
            14.5px;

          line-height:
            1.55;

          color:
            #0E0E0E;

          margin:
            0;
        }

        .ts-card-text strong {
          font-weight:
            700;
        }

        /* =========================================================
           CTA
        ========================================================= */

        .ts-cta-wrap {
          display:
            flex;

          justify-content:
            center;

          margin-top:
            clamp(
              32px,
              5vw,
              48px
            );

          padding:
            0 20px;
        }

        .ts-cta {
          display:
            inline-flex;

          align-items:
            center;

          gap:
            8px;

          background:
            transparent;

          border:
            1.5px solid
            rgba(
              14,
              14,
              14,
              0.35
            );

          border-radius:
            999px;

          padding:
            18px 26px;

          font-family:
            inherit;

          font-size:
            14px;

          font-weight:
            400;

          color:
            #0E0E0E;

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
            0.2s ease;
        }

        .ts-cta:hover {
          background:
            linear-gradient(
              135deg,
              #0180FD 0%,
              #0021AF 100%
            );

          border-color:
            transparent;

          color:
            #FFFFFF;

          transform:
            translateY(-1px);
        }

        .ts-cta-arrow {
          display:
            inline-block;

          transition:
            transform
            0.25s ease;
        }

        .ts-cta:hover
          .ts-cta-arrow {
          transform:
            translateY(-2px);
        }

        /* =========================================================
           TABLET
        ========================================================= */

        @media (max-width: 900px) {
          .ts-card {
            width:
              clamp(
                260px,
                60vw,
                320px
              );
          }

          .ts-card-left {
            flex:
              0 0 88px;

            width:
              88px;

            min-width:
              88px;
          }

          .ts-card-img {
            width:
              88px;

            height:
              156px;
          }
        }

        /* =========================================================
           MOBILE
        ========================================================= */

        @media (max-width: 768px) {
          .ts-track {
            gap:
              16px;

            scroll-snap-type:
              x mandatory;
          }

          .ts-card {
            width:
              78vw;

            padding:
              14px;

            gap:
              14px;

            flex-direction:
              row;
          }

          .ts-card-left {
            flex:
              0 0 80px;

            width:
              80px;

            min-width:
              80px;
          }

          .ts-card-img {
            width:
              80px;

            height:
              140px;
          }

          .ts-card-name-wrap {
            margin-top:
              10px;
          }

          .ts-card-name {
            font-size:
              12px;
          }

          .ts-card-role {
            font-size:
              9px;
          }

          .ts-card-text {
            font-size:
              13.5px;
          }
        }

        /* =========================================================
           SMALL MOBILE
        ========================================================= */

        @media (max-width: 480px) {
          .ts-heading {
            font-size:
              22px;
          }

          .ts-card {
            width:
              86vw;

            flex-direction:
              row;

            padding:
              14px;

            gap:
              12px;
          }

          .ts-card-left {
            flex:
              0 0 76px;

            width:
              76px;

            min-width:
              76px;
          }

          .ts-card-img {
            width:
              76px;

            height:
              132px;
          }

          .ts-card-name-wrap {
            margin-top:
              9px;
          }

          .ts-card-name {
            font-size:
              11px;
          }

          .ts-card-role {
            font-size:
              8px;

            line-height:
              1.3;
          }

          .ts-card-text {
            font-size:
              12px;

            line-height:
              1.5;
          }

          .ts-cta {
            font-size:
              13px;

            padding:
              11px 20px;
          }
        }

        /* =========================================================
           TOUCH
        ========================================================= */

        @media (hover: none) {
          .ts-cta:hover {
            transform:
              none;
          }
        }

        /* =========================================================
           REDUCED MOTION
        ========================================================= */

        @media (
          prefers-reduced-motion: reduce
        ) {
          .ts-card,
          .ts-cta {
            transition:
              none;
          }
        }
      `}</style>
    </section>
  );
}