"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

/* =========================================================
   DATA
========================================================= */

const TESTIMONIAL_TEXT =
  "I've worked with agencies on three continents. Kontent Kraft is the first partner where I genuinely felt they cared about our outcome not just their invoice. They delivered everything on time, on budget, and the product our investors actually got excited about.";

const testimonials = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  image: `/home/testimonals/${(i % 2) + 1}.png`,
  name: "SARAH M.",
  role: "CPO, EDTECH PLATFORM · UK",
}));

/* =========================================================
   DRAG HINT
========================================================= */

function DragHint() {
  return (
    <div
      className="ts-drag-hint"
      aria-hidden="true"
    >
      <span className="ts-drag-arrow ts-drag-arrow-left">
        <span />
      </span>

      <span className="ts-drag-text">
        DRAG
      </span>

      <span className="ts-drag-arrow ts-drag-arrow-right">
        <span />
      </span>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function TestimonialsSection({
  showLabel = true,
}) {
  const trackRef = useRef(null);

  /* =======================================================
     POINTER / DRAG STATE
  ======================================================= */

  const pointerState = useRef({
    active: false,
    pointerId: null,
    startX: 0,
    startScrollLeft: 0,
    moved: false,
    pointerType: "",
  });

  const hideHintTimer = useRef(null);

  const [dragging, setDragging] = useState(false);
  const [dragHintVisible, setDragHintVisible] =
    useState(false);

  /* =======================================================
     HINT HELPERS
  ======================================================= */

  const clearHintTimer = useCallback(() => {
    if (hideHintTimer.current !== null) {
      window.clearTimeout(hideHintTimer.current);
      hideHintTimer.current = null;
    }
  }, []);

  const showDragHint = useCallback(() => {
    clearHintTimer();
    setDragHintVisible(true);
  }, [clearHintTimer]);

  const hideDragHint = useCallback(
    (delay = 0) => {
      clearHintTimer();

      if (delay <= 0) {
        setDragHintVisible(false);
        return;
      }

      hideHintTimer.current = window.setTimeout(() => {
        setDragHintVisible(false);
        hideHintTimer.current = null;
      }, delay);
    },
    [clearHintTimer]
  );

  useEffect(() => {
    return () => {
      clearHintTimer();
    };
  }, [clearHintTimer]);

  /* =======================================================
     POINTER ENTER
     Desktop hover → show hint
  ======================================================= */

  const onPointerEnter = useCallback(
    (event) => {
      if (event.pointerType === "mouse") {
        showDragHint();
      }
    },
    [showDragHint]
  );

  /* =======================================================
     POINTER LEAVE
  ======================================================= */

  const onPointerLeave = useCallback(
    (event) => {
      if (event.pointerType === "mouse") {
        const state = pointerState.current;

        if (!state.active) {
          hideDragHint(0);
        }
      }
    },
    [hideDragHint]
  );

  /* =======================================================
     POINTER DOWN
  ======================================================= */

  const onPointerDown = useCallback(
    (event) => {
      const track = trackRef.current;

      if (!track) return;

      /* Only primary mouse button */
      if (
        event.pointerType === "mouse" &&
        event.button !== 0
      ) {
        return;
      }

      clearHintTimer();

      /*
        Show hint immediately for touch.
        For mouse it is already visible on hover.
      */
      setDragHintVisible(true);

      pointerState.current = {
        active: true,
        pointerId: event.pointerId,
        startX: event.clientX,
        startScrollLeft: track.scrollLeft,
        moved: false,
        pointerType: event.pointerType,
      };

      setDragging(false);

      try {
        track.setPointerCapture(event.pointerId);
      } catch {
        /* Safe fallback */
      }
    },
    [clearHintTimer]
  );

  /* =======================================================
     POINTER MOVE
  ======================================================= */

  const onPointerMove = useCallback(
    (event) => {
      const track = trackRef.current;
      const state = pointerState.current;

      if (!track || !state.active) return;

      const deltaX =
        event.clientX - state.startX;

      /*
        Small movement = ignore.
        This prevents accidental movement from tiny
        finger/mouse changes.
      */
      if (Math.abs(deltaX) > 6) {
        state.moved = true;
        setDragging(true);
        setDragHintVisible(true);
      }

      if (!state.moved) return;

      track.scrollLeft =
        state.startScrollLeft - deltaX;

      /*
        Stop native selection while dragging.
      */
      if (event.cancelable) {
        event.preventDefault();
      }
    },
    []
  );

  /* =======================================================
     POINTER UP
  ======================================================= */

  const onPointerUp = useCallback(
    () => {
      const track = trackRef.current;
      const state = pointerState.current;

      if (!state.active) return;

      if (
        track &&
        state.pointerId !== null &&
        track.hasPointerCapture?.(
          state.pointerId
        )
      ) {
        try {
          track.releasePointerCapture(
            state.pointerId
          );
        } catch {
          /* Safe fallback */
        }
      }

      const wasTouch =
        state.pointerType === "touch" ||
        state.pointerType === "pen";

      const hadDragged =
        state.moved;

      pointerState.current = {
        active: false,
        pointerId: null,
        startX: 0,
        startScrollLeft:
          track?.scrollLeft ?? 0,
        moved: false,
        pointerType: "",
      };

      setDragging(false);

      /*
        Touch/pen:
        Keep hint visible briefly so user sees
        the drag instruction, then hide it.
      */
      if (wasTouch) {
        hideDragHint(
          hadDragged ? 850 : 1000
        );
      }
    },
    [hideDragHint]
  );

  /* =======================================================
     POINTER CANCEL
  ======================================================= */

  const onPointerCancel = useCallback(() => {
    pointerState.current = {
      active: false,
      pointerId: null,
      startX: 0,
      startScrollLeft:
        trackRef.current?.scrollLeft ?? 0,
      moved: false,
      pointerType: "",
    };

    setDragging(false);

    hideDragHint(700);
  }, [hideDragHint]);

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <section className="ts-section">

      {/* ===================================================
          HEADER
      =================================================== */}

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

      {/* ===================================================
          CAROUSEL
      =================================================== */}

      <div className="ts-carousel-wrap">

        {/* DRAG HINT */}

        <div
          className={`ts-drag-hint-layer ${
            dragHintVisible
              ? "is-visible"
              : ""
          } ${
            dragging
              ? "is-dragging"
              : ""
          }`}
          aria-hidden="true"
        >
          <DragHint />
        </div>

        {/* TRACK */}

        <div
          ref={trackRef}
          className={`ts-track ${
            dragging
              ? "ts-track--dragging"
              : ""
          }`}
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerCancel}
        >

          {testimonials.map((t) => (
            <article
              className="ts-card"
              key={t.id}
            >

              {/* =========================================
                  LEFT
              ========================================= */}

              <div className="ts-card-left">

                {/* IMAGE */}

                <div className="ts-card-img">
                  <img
                    src={t.image}
                    alt={t.name}
                    draggable={false}
                  />
                </div>

                {/* NAME */}

                <div className="ts-card-name-wrap">

                  <p className="ts-card-name">
                    {t.name}
                  </p>

                  <p className="ts-card-role">
                    {t.role}
                  </p>

                </div>
              </div>

              {/* =========================================
                  RIGHT
              ========================================= */}

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

      {/* ===================================================
          CTA
      =================================================== */}

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

        .ts-section *,
        .ts-section *::before,
        .ts-section *::after {
          box-sizing: border-box;
        }


        /* =========================================================
           HEADER
        ========================================================= */

        .ts-header {
          width: 100%;

          padding:
            0 20px;

          margin-bottom:
            clamp(
              28px,
              4vw,
              44px
            );

          text-align: center;
        }

        .ts-eyebrow {
          display: inline-block;

          margin-bottom:
            14px;

          font-size:
            14px;

          font-weight:
            400;

          line-height:
            1;

          letter-spacing:
            0.14em;

          color:
            #0E0E0E;
        }

        .ts-heading {
          margin: 0;

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

          font-weight:
            800;

          line-height:
            1.15;

          letter-spacing:
            -0.01em;

          color:
            #0E0E0E;
        }


        /* =========================================================
           CAROUSEL WRAPPER
        ========================================================= */

        .ts-carousel-wrap {
          position: relative;

          width: 100%;
        }


        /* =========================================================
           TRACK
        ========================================================= */

        .ts-track {
          width: 100%;

          display: flex;

          gap:
            24px;

          overflow-x: auto;
          overflow-y: hidden;

          padding:
            8px
            clamp(
              20px,
              6vw,
              80px
            )
            20px;

          scrollbar-width: none;

          -webkit-overflow-scrolling: touch;

          scroll-behavior:
            smooth;

          cursor:
            grab;

          user-select:
            none;

          /*
            Allow vertical scrolling on mobile while
            keeping our horizontal drag interaction.
          */
          touch-action:
            pan-y;

          overscroll-behavior-x:
            contain;
        }

        .ts-track::-webkit-scrollbar {
          display: none;
        }

        .ts-track--dragging {
          cursor:
            grabbing;

          scroll-behavior:
            auto;
        }


        /* =========================================================
           DRAG HINT LAYER
           
           Hidden by default.
           Appears only on hover / touch.
        ========================================================= */

        .ts-drag-hint-layer {
          position: absolute;

          /*
            Center of visible carousel area.
            Because pointer-events are disabled,
            it never blocks dragging.
          */
          left:
            50%;

          top:
            50%;

          z-index:
            20;

          pointer-events:
            none;

          opacity:
            0;

          visibility:
            hidden;

          transform:
            translate(
              -50%,
              -50%
            )
            scale(
              0.88
            );

          transition:
            opacity
            0.2s ease,
            transform
            0.25s
            cubic-bezier(
              0.22,
              1,
              0.36,
              1
            ),
            visibility
            0.2s ease;
        }

        .ts-drag-hint-layer.is-visible {
          opacity:
            1;

          visibility:
            visible;

          transform:
            translate(
              -50%,
              -50%
            )
            scale(
              1
            );
        }

        .ts-drag-hint-layer.is-dragging {
          transform:
            translate(
              -50%,
              -50%
            )
            scale(
              1.03
            );
        }


        /* =========================================================
           DRAG HINT CIRCLE
        ========================================================= */

        .ts-drag-hint {
          width:
            96px;

          height:
            96px;

          border-radius:
            50%;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          gap:
            7px;

          padding:
            0 10px;

          background:
            linear-gradient(
              135deg,
              #0180FD 0%,
              #0021AF 100%
            );

          color:
            #FFFFFF;

          box-shadow:
            0 14px 38px
            rgba(
              0,
              33,
              175,
              0.24
            );
        }


        /* =========================================================
           DRAG TEXT
        ========================================================= */

        .ts-drag-text {
          display:
            inline-flex;

          align-items:
            center;

          justify-content:
            center;

          font-size:
            12px;

          line-height:
            1;

          font-weight:
            600;

          letter-spacing:
            0.01em;

          white-space:
            nowrap;
        }


        /* =========================================================
           DRAG ARROWS
        ========================================================= */

        .ts-drag-arrow {
          width:
            9px;

          height:
            12px;

          display:
            inline-flex;

          align-items:
            center;

          justify-content:
            center;

          flex:
            0 0 9px;
        }

        .ts-drag-arrow span {
          display:
            block;

          width:
            0;

          height:
            0;

          border-top:
            4px solid
            transparent;

          border-bottom:
            4px solid
            transparent;
        }

        .ts-drag-arrow-left span {
          border-right:
            5px solid
            #FFFFFF;
        }

        .ts-drag-arrow-right span {
          border-left:
            5px solid
            #FFFFFF;
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

          min-width:
            0;

          display:
            flex;

          flex-direction:
            row;

          align-items:
            flex-start;

          gap:
            18px;

          padding:
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
            #E9EDF5;
        }

        .ts-card-img img {
          display:
            block;

          width:
            100%;

          height:
            100%;

          object-fit:
            cover;

          pointer-events:
            none;

          user-select:
            none;

          -webkit-user-drag:
            none;
        }


        /* =========================================================
           NAME + ROLE
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
           CARD BODY
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
          margin:
            0;

          font-size:
            14.5px;

          line-height:
            1.55;

          color:
            #0E0E0E;
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

          justify-content:
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

          line-height:
            1;

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

        @media (
          min-width: 768px
        ) and (
          max-width: 1100px
        ) {

          .ts-track {
            gap:
              20px;

            padding-left:
              32px;

            padding-right:
              32px;
          }

          .ts-card {
            width:
              clamp(
                330px,
                48vw,
                390px
              );

            padding:
              17px;

            gap:
              17px;
          }

          .ts-card-left {
            flex-basis:
              92px;

            width:
              92px;

            min-width:
              92px;
          }

          .ts-card-img {
            width:
              92px;

            height:
              160px;
          }

          .ts-card-name {
            font-size:
              12px;
          }

          .ts-card-role {
            font-size:
              9.5px;
          }

          .ts-card-text {
            font-size:
              14px;

            line-height:
              1.55;
          }

          .ts-drag-hint {
            width:
              88px;

            height:
              88px;
          }

          .ts-drag-text {
            font-size:
              11px;
          }
        }


        /* =========================================================
           MOBILE
        ========================================================= */

        @media (
          max-width: 767px
        ) {

          .ts-section {
            padding:
              34px
              0
              58px;
          }

          .ts-header {
            padding:
              0 20px;

            margin-bottom:
              28px;
          }

          .ts-eyebrow {
            margin-bottom:
              12px;

            font-size:
              12px;

            letter-spacing:
              0.1em;
          }

          .ts-heading {
            font-size:
              26px;

            line-height:
              1.2;
          }

          .ts-track {
            gap:
              16px;

            padding:
              6px
              20px
              18px;

            scroll-snap-type:
              x proximity;

            touch-action:
              pan-y;
          }

          .ts-card {
            width:
              min(
                86vw,
                360px
              );

            padding:
              16px;

            gap:
              15px;

            border-radius:
              15px;
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
              154px;

            border-radius:
              9px;
          }

          .ts-card-name-wrap {
            margin-top:
              10px;
          }

          .ts-card-name {
            font-size:
              12px;

            line-height:
              1.2;
          }

          .ts-card-role {
            margin-top:
              5px;

            font-size:
              9.5px;

            line-height:
              1.35;
          }

          .ts-card-text {
            font-size:
              14px;

            line-height:
              1.6;
          }


          /* ==============================================
             MOBILE DRAG HINT
          ============================================== */

          .ts-drag-hint {
            width:
              88px;

            height:
              88px;

            gap:
              6px;

            padding:
              0 9px;
          }

          .ts-drag-text {
            font-size:
              11px;

            font-weight:
              600;
          }

          .ts-drag-arrow {
            width:
              8px;

            height:
              11px;

            flex-basis:
              8px;
          }

          .ts-drag-arrow span {
            border-top-width:
              4px;

            border-bottom-width:
              4px;
          }


          /* ==============================================
             CTA
          ============================================== */

          .ts-cta-wrap {
            margin-top:
              34px;

            padding:
              0 20px;
          }

          .ts-cta {
            width:
              auto;

            max-width:
              100%;

            padding:
              13px 20px;

            font-size:
              13px;
          }
        }


        /* =========================================================
           SMALL MOBILE
        ========================================================= */

        @media (
          max-width: 480px
        ) {

          .ts-section {
            padding:
              30px
              0
              52px;
          }

          .ts-heading {
            font-size:
              23px;
          }

          .ts-track {
            gap:
              14px;

            padding-left:
              16px;

            padding-right:
              16px;
          }

          .ts-card {
            width:
              calc(
                100vw - 32px
              );

            max-width:
              350px;

            padding:
              14px;

            gap:
              13px;
          }

          .ts-card-left {
            flex:
              0 0 82px;

            width:
              82px;

            min-width:
              82px;
          }

          .ts-card-img {
            width:
              82px;

            height:
              145px;
          }

          .ts-card-name {
            font-size:
              11.5px;
          }

          .ts-card-role {
            font-size:
              9px;
          }

          .ts-card-text {
            font-size:
              13px;

            line-height:
              1.58;
          }


          /* ==============================================
             SMALL MOBILE DRAG HINT
          ============================================== */

          .ts-drag-hint {
            width:
              78px;

            height:
              78px;

            gap:
              5px;

            padding:
              0 8px;
          }

          .ts-drag-text {
            font-size:
              10px;
          }

          .ts-drag-arrow {
            width:
              7px;

            height:
              10px;

            flex-basis:
              7px;
          }

          .ts-drag-arrow span {
            border-top-width:
              3.5px;

            border-bottom-width:
              3.5px;
          }

          .ts-cta {
            width:
              100%;

            max-width:
              300px;

            padding:
              12px 18px;

            font-size:
              12.5px;
          }
        }


        /* =========================================================
           TOUCH DEVICES
        ========================================================= */

        @media (hover: none) {

          .ts-cta:hover {
            transform:
              none;

            background:
              transparent;

            border-color:
              rgba(
                14,
                14,
                14,
                0.35
              );

            color:
              #0E0E0E;
          }
        }


        /* =========================================================
           REDUCED MOTION
        ========================================================= */

        @media (
          prefers-reduced-motion: reduce
        ) {

          .ts-cta,
          .ts-drag-hint-layer {
            transition:
              none;
          }

          .ts-track {
            scroll-behavior:
              auto;
          }
        }

      `}</style>
    </section>
  );
}