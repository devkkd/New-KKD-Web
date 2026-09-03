"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(Observer);

const AWARD_IMAGES = [
  "/home/awards/1.png",
  "/home/awards/2.png",
  "/home/awards/3.png",
  "/home/awards/4.png",
];

export default function NotFound() {
  const pageRef = useRef(null);
  const canvasRef = useRef(null);

  const drawingRef = useRef(false);

  const startXRef = useRef(0);
  const startYRef = useRef(0);
  const lastDistanceRef = useRef(0);

  const currentLineRef = useRef(null);
  const currentCircleRef = useRef(null);
  const currentImageRef = useRef(null);

  const observerRef = useRef(null);

  /* =========================================================
     PRELOAD IMAGES
  ========================================================= */

  useEffect(() => {
    AWARD_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  /* =========================================================
     EXPLOSION
  ========================================================= */

  const createExplosion = (x, y, distance = 180) => {
    const page = pageRef.current;

    if (!page) return;

    const count = Math.max(
      8,
      Math.min(
        28,
        Math.round(
          Math.max(distance, 80) / 18
        )
      )
    );

    for (let i = 0; i < count; i++) {
      const img = document.createElement("img");

      img.src =
        AWARD_IMAGES[
          Math.floor(
            Math.random() *
              AWARD_IMAGES.length
          )
        ];

      img.className = "not-found-explosion";

      const size =
        22 +
        Math.random() * 34;

      img.style.width = `${size}px`;
      img.style.height = `${size}px`;
      img.style.left = `${x}px`;
      img.style.top = `${y}px`;

      page.appendChild(img);

      const angle =
        Math.random() *
        Math.PI *
        2;

      const velocity =
        120 +
        Math.random() *
          280 +
        Math.min(distance, 500) *
          0.4;

      const endX =
        Math.cos(angle) *
        velocity;

      const endY =
        Math.sin(angle) *
          velocity +
        110 +
        Math.random() *
          180;

      gsap.fromTo(
        img,
        {
          x: -size / 2,
          y: -size / 2,
          scale:
            0.35 +
            Math.random() *
              0.6,
          rotation:
            Math.random() *
              90 -
            45,
        },
        {
          x:
            -size / 2 +
            endX,

          y:
            -size / 2 +
            endY,

          scale:
            0.65 +
            Math.random() *
              0.65,

          rotation:
            gsap.utils.random(
              -280,
              280
            ),

          opacity: 0,

          duration:
            0.85 +
            Math.random() *
              0.55,

          ease:
            "power2.out",

          onComplete: () => {
            img.remove();
          },
        }
      );
    }
  };

  /* =========================================================
     CLEAR DRAWING
  ========================================================= */

  const clearDrawing = () => {
    const canvas =
      canvasRef.current;

    if (canvas) {
      canvas.innerHTML = "";
    }

    currentLineRef.current = null;
    currentCircleRef.current = null;
    currentImageRef.current = null;

    drawingRef.current = false;
    lastDistanceRef.current = 0;
  };

  /* =========================================================
     START DRAWING
  ========================================================= */

  const startDrawing = (event) => {
    if (
      !event ||
      typeof event.x !== "number" ||
      typeof event.y !== "number"
    ) {
      return;
    }

    const canvas =
      canvasRef.current;

    if (!canvas) return;

    drawingRef.current = true;

    startXRef.current = event.x;
    startYRef.current = event.y;

    lastDistanceRef.current = 0;

    /* -------------------------------------------------------
       DASHED LINE
    ------------------------------------------------------- */

    const line =
      document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line"
      );

    line.setAttribute(
      "x1",
      event.x
    );

    line.setAttribute(
      "y1",
      event.y
    );

    line.setAttribute(
      "x2",
      event.x
    );

    line.setAttribute(
      "y2",
      event.y
    );

    line.setAttribute(
      "stroke",
      "#0E0E0E"
    );

    line.setAttribute(
      "stroke-width",
      "1.5"
    );

    line.setAttribute(
      "stroke-dasharray",
      "4 5"
    );

    /* -------------------------------------------------------
       START CIRCLE
    ------------------------------------------------------- */

    const circle =
      document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );

    circle.setAttribute(
      "cx",
      event.x
    );

    circle.setAttribute(
      "cy",
      event.y
    );

    circle.setAttribute(
      "r",
      "24"
    );

    circle.setAttribute(
      "fill",
      "#F3F8FF"
    );

    circle.setAttribute(
      "stroke",
      "#0E0E0E"
    );

    circle.setAttribute(
      "stroke-width",
      "1"
    );

    /* -------------------------------------------------------
       START IMAGE
    ------------------------------------------------------- */

    const image =
      document.createElementNS(
        "http://www.w3.org/2000/svg",
        "image"
      );

    const randomImage =
      AWARD_IMAGES[
        Math.floor(
          Math.random() *
            AWARD_IMAGES.length
        )
      ];

    image.setAttribute(
      "x",
      event.x - 24
    );

    image.setAttribute(
      "y",
      event.y - 24
    );

    image.setAttribute(
      "width",
      "48"
    );

    image.setAttribute(
      "height",
      "48"
    );

    image.setAttribute(
      "preserveAspectRatio",
      "xMidYMid slice"
    );

    image.setAttributeNS(
      "http://www.w3.org/1999/xlink",
      "href",
      randomImage
    );

    image.style.clipPath =
      "circle(50% at 50% 50%)";

    canvas.appendChild(line);
    canvas.appendChild(circle);
    canvas.appendChild(image);

    currentLineRef.current = line;
    currentCircleRef.current = circle;
    currentImageRef.current = image;
  };

  /* =========================================================
     UPDATE DRAWING
  ========================================================= */

  const updateDrawing = (event) => {
    if (
      !drawingRef.current ||
      !currentLineRef.current ||
      !currentCircleRef.current ||
      !currentImageRef.current
    ) {
      return;
    }

    const cursorX = event.x;
    const cursorY = event.y;

    const dx =
      cursorX -
      startXRef.current;

    const dy =
      cursorY -
      startYRef.current;

    const distance =
      Math.sqrt(
        dx * dx +
          dy * dy
      );

    lastDistanceRef.current =
      distance;

    let endX =
      startXRef.current;

    let endY =
      startYRef.current;

    if (distance > 24) {
      const factor =
        (distance - 24) /
        distance;

      endX =
        startXRef.current +
        dx * factor;

      endY =
        startYRef.current +
        dy * factor;
    }

    currentLineRef.current.setAttribute(
      "x2",
      endX
    );

    currentLineRef.current.setAttribute(
      "y2",
      endY
    );

    const angle =
      Math.atan2(
        dy,
        dx
      ) *
      (180 / Math.PI);

    const scale =
      Math.max(
        0.8,
        Math.min(
          1.65,
          0.8 +
            distance / 250
        )
      );

    const transform = `
      rotate(
        ${angle - 45}
        ${startXRef.current}
        ${startYRef.current}
      )
      translate(
        ${startXRef.current}
        ${startYRef.current}
      )
      scale(${scale})
      translate(
        ${-startXRef.current}
        ${-startYRef.current}
      )
    `;

    currentCircleRef.current.setAttribute(
      "transform",
      transform
    );

    currentImageRef.current.setAttribute(
      "transform",
      transform
    );
  };

  /* =========================================================
     RELEASE
  ========================================================= */

  const finishDrawing = () => {
    if (!drawingRef.current) {
      return;
    }

    createExplosion(
      startXRef.current,
      startYRef.current,
      lastDistanceRef.current
    );

    clearDrawing();
  };

  /* =========================================================
     OBSERVER
  ========================================================= */

  useEffect(() => {
    const page =
      pageRef.current;

    if (!page) return;

    const observer =
      Observer.create({
        target: page,

        type:
          "pointer,touch",

        preventDefault:
          false,

        allowClicks:
          true,

        onPress: (event) => {
          startDrawing(event);
        },

        onDrag: (event) => {
          updateDrawing(event);
        },

        onDragEnd: () => {
          finishDrawing();
        },

        onRelease: () => {
          finishDrawing();
        },
      });

    observerRef.current =
      observer;

    /* =======================================================
       SMALL INTRO EXPLOSION
    ======================================================= */

    const introTimer =
      window.setTimeout(() => {
        createExplosion(
          window.innerWidth / 2,
          window.innerHeight / 2,
          180
        );
      }, 900);

    return () => {
      window.clearTimeout(
        introTimer
      );

      observer.kill();

      observerRef.current =
        null;

      clearDrawing();
    };
  }, []);

  return (
    <main
      ref={pageRef}
      className="not-found-page"
    >
      {/* =====================================================
          LOGO
      ===================================================== */}

      <div className="not-found-logo">
        <img
          src="/logo.png"
          alt="Kontent Kraft Digital"
          draggable="false"
        />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="not-found-content">

        {/* SMALL TEXT */}

        <div className="not-found-braces">
          <span>{"{"}</span>

          <span>
            &nbsp;We can&apos;t find the page...&nbsp;
          </span>

          <span>{"}"}</span>
        </div>

        {/* OOPS */}

        <h1 className="not-found-title">
          Oops
        </h1>

        {/* DESCRIPTION */}

        <p className="not-found-description">
          The page you&apos;re looking for may have been
          moved, renamed, or the link might be incorrect.
          <br />
          But you&apos;re not in the wrong place your next
          great digital product could start right here.
        </p>

        {/* HOME */}

        <a
          href="/"
          className="not-found-button"
        >
          <span>
            Take Me Home
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

      {/* =====================================================
          SVG INTERACTION LAYER
      ===================================================== */}

      <svg
        ref={canvasRef}
        className="not-found-canvas"
        aria-hidden="true"
      />

      <style>{`
        /* =====================================================
           PAGE
        ===================================================== */

        .not-found-page {
          position: fixed;

          inset: 0;

          width: 100vw;
          height: 100vh;

          min-height: 100dvh;

          overflow: hidden;

          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: center;

          background: #F3F8FF;

          color: #0E0E0E;

          font-family:
            "Britti Sans Trial",
            Arial,
            Helvetica,
            sans-serif;

          box-sizing: border-box;

          isolation: isolate;

          user-select: none;

          /*
            IMPORTANT:
            normal browser cursor is kept.
          */
          cursor: default;
        }

        .not-found-page * {
          box-sizing:
            border-box;
        }

        /* =====================================================
           LOGO
        ===================================================== */

        .not-found-logo {
          position: absolute;

          top: 24px;

          left: 50%;

          transform:
            translateX(-50%);

          width: 190px;

          display: flex;

          align-items: center;

          justify-content: center;

          z-index: 30;

          pointer-events:
            none;
        }

        .not-found-logo img {
          display: block;

          width: 100%;

          height: auto;

          max-width: 190px;

          object-fit: contain;

          user-select: none;

          -webkit-user-drag: none;
        }

        /* =====================================================
           CONTENT
        ===================================================== */

        .not-found-content {
          position: relative;

          z-index: 8;

          width: min(
            100%,
            1400px
          );

          padding:
            120px 62px
            70px;

          margin: 0 auto;

          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: center;

          text-align: center;

          pointer-events: none;
        }

        /* =====================================================
           BRACES
        ===================================================== */

        .not-found-braces {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          max-width: 100%;

          margin:
            0 0 18px;

          font-size: 18px;

          line-height: 1.3;

          font-weight: 400;

          letter-spacing:
            -0.02em;

          color:
            #0E0E0E;

          white-space:
            nowrap;
        }

        .not-found-braces
          span:first-child,
        .not-found-braces
          span:last-child {
          font-size:
            24px;
        }

        /* =====================================================
           OOPS
        ===================================================== */

        .not-found-title {
          display: block;

          width: 100%;

          max-width: 100%;

          margin: 0;

          padding: 0;

          font-family:
            "Britti Sans Trial",
            Arial,
            Helvetica,
            sans-serif;

          font-size:
            190px;

          line-height:
            0.88;

          font-weight:
            700;

          letter-spacing:
            -0.075em;

          color:
            transparent;

          background:
            linear-gradient(
              90deg,
              #0180FD 0%,
              #0021AF 100%
            );

          -webkit-background-clip:
            text;

          background-clip:
            text;

          white-space:
            nowrap;

          text-align:
            center;

          pointer-events:
            none;
        }

        /* =====================================================
           DESCRIPTION
        ===================================================== */

        .not-found-description {
          width:
            100%;

          max-width:
            760px;

          margin:
            48px auto 0;

          padding: 0;

          font-size:
            15px;

          line-height:
            1.65;

          font-weight:
            400;

          letter-spacing:
            -0.01em;

          color:
            #0E0E0E;

          pointer-events:
            none;
        }

        /* =====================================================
           HOME BUTTON
        ===================================================== */

        .not-found-button {
          width:
            224px;

          height:
            76px;

          margin-top:
            62px;

          padding:
            0 24px;

          display:
            inline-flex;

          align-items:
            center;

          justify-content:
            center;

          gap:
            7px;

          border:
            none;

          border-radius:
            999px;

          background:
            linear-gradient(
              90deg,
              #0180FD 0%,
              #0021AF 100%
            );

          color:
            #FFFFFF;

          text-decoration:
            none;

          font-family:
            "Britti Sans Trial",
            Arial,
            Helvetica,
            sans-serif;

          font-size:
            15px;

          line-height:
            1;

          font-weight:
            700;

          white-space:
            nowrap;

          cursor:
            pointer;

          pointer-events:
            auto;

          transition:
            transform
            0.25s ease,
            box-shadow
            0.25s ease;
        }

        .not-found-button:hover {
          transform:
            translateY(-3px);

          box-shadow:
            0 14px 30px
            rgba(
              0,
              33,
              175,
              0.2
            );
        }

        .not-found-button svg {
          display:
            block;

          flex-shrink:
            0;
        }

        /* =====================================================
           SVG
        ===================================================== */

        .not-found-canvas {
          position:
            fixed;

          inset:
            0;

          width:
            100vw;

          height:
            100vh;

          display:
            block;

          overflow:
            visible;

          pointer-events:
            none;

          z-index:
            20;
        }

        /* =====================================================
           EXPLOSION
        ===================================================== */

        .not-found-explosion {
          position:
            absolute;

          left:
            0;

          top:
            0;

          display:
            block;

          object-fit:
            cover;

          object-position:
            center;

          border-radius:
            50%;

          pointer-events:
            none;

          user-select:
            none;

          -webkit-user-drag:
            none;

          transform-origin:
            center;

          z-index:
            25;
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1100px) {
          .not-found-logo {
            width:
              170px;
          }

          .not-found-logo img {
            max-width:
              170px;
          }

          .not-found-content {
            padding:
              115px 32px
              60px;
          }

          .not-found-title {
            font-size:
              155px;
          }

          .not-found-description {
            max-width:
              680px;

            font-size:
              14px;
          }

          .not-found-button {
            width:
              210px;

            height:
              70px;

            margin-top:
              55px;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 767px) {
          .not-found-page {
            min-height:
              100svh;

            overflow:
              hidden;
          }

          .not-found-logo {
            top:
              20px;

            width:
              145px;
          }

          .not-found-logo img {
            max-width:
              145px;
          }

          .not-found-content {
            width:
              100%;

            padding:
              100px 20px
              40px;
          }

          .not-found-braces {
            margin-bottom:
              14px;

            font-size:
              13px;
          }

          .not-found-braces
            span:first-child,
          .not-found-braces
            span:last-child {
            font-size:
              19px;
          }

          .not-found-title {
            width:
              100%;

            font-size:
              105px;

            line-height:
              0.9;

            letter-spacing:
              -0.065em;
          }

          .not-found-description {
            max-width:
              360px;

            margin-top:
              34px;

            font-size:
              12.5px;

            line-height:
              1.6;
          }

          .not-found-button {
            width:
              188px;

            height:
              56px;

            margin-top:
              42px;

            font-size:
              13px;
          }
        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 420px) {
          .not-found-logo {
            top:
              17px;

            width:
              135px;
          }

          .not-found-logo img {
            max-width:
              135px;
          }

          .not-found-content {
            padding:
              92px 20px
              32px;
          }

          .not-found-braces {
            font-size:
              12px;
          }

          .not-found-braces
            span:first-child,
          .not-found-braces
            span:last-child {
            font-size:
              17px;
          }

          .not-found-title {
            font-size:
              82px;
          }

          .not-found-description {
            max-width:
              315px;

            margin-top:
              30px;

            font-size:
              11.5px;
          }

          .not-found-button {
            width:
              175px;

            height:
              53px;

            margin-top:
              36px;

            font-size:
              12.5px;
          }
        }

        /* =====================================================
           SHORT DESKTOP SCREEN
        ===================================================== */

        @media (
          min-width: 768px
        ) and (
          max-height: 760px
        ) {
          .not-found-logo {
            top:
              14px;
          }

          .not-found-content {
            padding:
              90px 62px
              35px;
          }

          .not-found-braces {
            margin-bottom:
              10px;
          }

          .not-found-title {
            font-size:
              145px;
          }

          .not-found-description {
            margin-top:
              28px;
          }

          .not-found-button {
            height:
              60px;

            margin-top:
              34px;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (
          prefers-reduced-motion: reduce
        ) {
          .not-found-explosion,
          .not-found-button {
            transition:
              none !important;
          }
        }
      `}</style>
    </main>
  );
}