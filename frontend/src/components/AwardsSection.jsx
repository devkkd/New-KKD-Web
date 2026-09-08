"use client";

import { useEffect, useRef, useState } from "react";

/* =========================================================
   DATA
========================================================= */

const AWARD_ITEMS = [
  { id: 1, title: "2× Awwwards Site of the Month" },
  { id: 2, title: "Top 100 Fastest-Growing Companies – Clutch" },
  { id: 3, title: "Top Development Company – GoodFirms" },
];

const AWARD_IMAGES = [
  "/home/awards/1.png",
  "/home/awards/2.png",
  "/home/awards/3.png",
  "/home/awards/4.png",
];

export default function AwardsSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const intervalRef = useRef(null);
  const imageIndexRef = useRef(0);

  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);

  /* TOUCH CHECK */
  useEffect(() => {
    if (typeof window === "undefined") return;
    const touch =
      window.matchMedia?.("(hover: none), (pointer: coarse)")?.matches ??
      false;
    setIsTouchDevice(touch);
  }, []);

  /* PRELOAD IMAGES */
  useEffect(() => {
    AWARD_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  /* SHOW CURRENT IMAGE */
  const showCurrentImage = () => {
    const image = imageRef.current;
    if (!image) return;
    image.src = AWARD_IMAGES[imageIndexRef.current];
    setImageVisible(true);
  };

  /* START IMAGE CYCLING */
  const startImageAnimation = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    imageIndexRef.current = 0;
    showCurrentImage();
    intervalRef.current = setInterval(() => {
      imageIndexRef.current = (imageIndexRef.current + 1) % AWARD_IMAGES.length;
      showCurrentImage();
    }, 550);
  };

  /* STOP IMAGE ANIMATION */
  const stopImageAnimation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setImageVisible(false);
  };

  /* Shared helper: measures the image's ACTUAL rendered size
     (offsetWidth/offsetHeight ignore the scale() transform, unlike
     getBoundingClientRect which would report it shrunk) so the maths
     works correctly at every breakpoint, not just the desktop 260px
     size that was hardcoded before. */
  const getImageSize = () => {
    const image = imageRef.current;
    return {
      width: image?.offsetWidth || 260,
      height: image?.offsetHeight || 260,
    };
  };

  /* TITLE MOUSE MOVE
     FIX: previously wrote image.style.left / image.style.top on every
     mousemove — that forces the browser to re-run layout (reflow) on
     every frame, which is what made the floating image feel like it
     was "shaking" while dragging across the title. Using a single
     translate3d() transform instead only triggers compositing, so the
     movement is smooth and never touches layout. */
  const handleTitleMouseMove = (e) => {
    if (isTouchDevice) return;

    const title = titleRef.current;
    const image = imageRef.current;
    const section = sectionRef.current;
    if (!title || !image || !section) return;

    const titleRect = title.getBoundingClientRect();
    const sectionRect = section.getBoundingClientRect();
    const { width: imageWidth, height: imageHeight } = getImageSize();

    let x = e.clientX - titleRect.left - imageWidth / 2;
    let y = e.clientY - sectionRect.top - imageHeight / 2;

    const minX = Math.max(0, titleRect.left - sectionRect.left - 40);
    const maxX = Math.min(
      sectionRect.width - imageWidth,
      titleRect.right - sectionRect.left + 40
    );

    x = Math.max(
      minX,
      Math.min(x + titleRect.left - sectionRect.left, maxX)
    );
    y = Math.max(30, Math.min(y, sectionRect.height - imageHeight - 30));

    image.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${
      imageVisible ? 1 : 0.08
    })`;
  };

  /* Mobile: no cursor to follow, so the image is centered directly on
     top of the AWARDS word itself — same spot the desktop hover image
     lands on, instead of being pinned to a corner. */
  const centerImageOnTitle = (visible) => {
    const title = titleRef.current;
    const image = imageRef.current;
    const section = sectionRef.current;
    if (!title || !image || !section) return;

    const titleRect = title.getBoundingClientRect();
    const sectionRect = section.getBoundingClientRect();
    const { width: imageWidth, height: imageHeight } = getImageSize();

    const x =
      titleRect.left - sectionRect.left + titleRect.width / 2 - imageWidth / 2;
    const y =
      titleRect.top - sectionRect.top + titleRect.height / 2 - imageHeight / 2;

    image.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${
      visible ? 1 : 0.08
    })`;
  };

  const handleTitleMouseEnter = () => {
    if (isTouchDevice) return;
    startImageAnimation();
  };

  const handleTitleMouseLeave = () => {
    if (isTouchDevice) return;
    stopImageAnimation();
  };

  /* MOBILE TAP */
  const handleTitleClick = () => {
    if (!isTouchDevice) return;

    if (imageVisible) {
      stopImageAnimation();
      return;
    }

    imageIndexRef.current = 0;
    centerImageOnTitle(true);
    showCurrentImage();

    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      imageIndexRef.current = (imageIndexRef.current + 1) % AWARD_IMAGES.length;
      showCurrentImage();
    }, 800);
  };

  return (
    <section ref={sectionRef} className="awards-section">
      <img
        ref={imageRef}
        className={`awards-hover-image ${
          imageVisible ? "awards-hover-image--visible" : ""
        }`}
        alt=""
        draggable="false"
        aria-hidden="true"
      />

      <div className="awards-container">
        <div
          ref={titleRef}
          className="awards-title-wrap"
          onMouseEnter={handleTitleMouseEnter}
          onMouseMove={handleTitleMouseMove}
          onMouseLeave={handleTitleMouseLeave}
          onClick={handleTitleClick}
        >
          <h2 className="awards-title">AWARDS</h2>
        </div>

        <div className="awards-content">
          <div className="awards-left">
            <h3 className="awards-left-title">AWARD WINNING</h3>
          </div>

          <div className="awards-right">
            {AWARD_ITEMS.map((item) => (
              <div key={item.id} className="award-row">
                <span className="award-row-text">{item.title}</span>
              </div>
            ))}

            <button type="button" className="awards-know-more">
              <span>Know More About us</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path d="M6 2L10 10H2L6 2Z" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        /* scrollbar-gutter: stable stops the vertical scrollbar from
           appearing/disappearing after refresh. The title's font-size
           uses a viewport-relative unit, so the ~15px the scrollbar
           takes/gives back was recalculating the 260px+ heading a few
           pixels every refresh — the other half of the "hilna". */
        html {
          scrollbar-gutter: stable;
        }

        .awards-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          background: #f3f8ff;
          color: #0e0e0e;
          overflow: hidden;
          box-sizing: border-box;
          font-family: "Britti Sans Trial", Arial, Helvetica, sans-serif;
          padding: 28px 62px 85px;
        }

        .awards-container {
          position: relative;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        .awards-title-wrap {
          position: relative;
          width: 100%;
          max-width: 100%;
          margin: 0 0 92px;
          padding: 35px 0;
          cursor: pointer;
          z-index: 2;
          user-select: none;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: visible;
          box-sizing: border-box;
        }

        /* FIX: container query unit (cqw) instead of vw — it tracks the
           width of .awards-section itself, not the browser viewport, so
           it no longer reacts to the scrollbar showing/hiding at all.
           clamp() min/max stay as a safety net for very old browsers
           that ignore the cqw value. */
        .awards-section {
          container-type: inline-size;
        }

        .awards-title {
          margin: 0;
          padding: 0;
          width: 100%;
          text-align: center;
          font-family: "Britti Sans Trial", Arial, Helvetica, sans-serif;
          font-size: clamp(140px, 26cqw, 270px);
          line-height: 0.84;
          font-weight: 700;
          letter-spacing: -0.06em;
          white-space: nowrap;
          color: transparent;
          background: linear-gradient(90deg, #0180fd 0%, #0021af 100%);
          -webkit-background-clip: text;
          background-clip: text;
          user-select: none;
          transform: none;
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .awards-title-wrap:hover .awards-title {
          transform: scale(1.008);
        }

        .awards-content {
          width: 100%;
          display: grid;
          grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
          column-gap: 90px;
          align-items: start;
          box-sizing: border-box;
        }

        .awards-left {
          padding-top: 2px;
          box-sizing: border-box;
        }

        .awards-left-title {
          margin: 0;
          font-family: "Britti Sans Trial", Arial, Helvetica, sans-serif;
          font-size: 26px;
          line-height: 1.15;
          font-weight: 700;
          letter-spacing: -0.045em;
          color: #0e0e0e;
        }

        .awards-right {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          box-sizing: border-box;
        }

        .award-row {
          position: relative;
          width: 100%;
          min-height: 90px;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          border: 0;
          border-bottom: 1px solid #cfd7e3;
          background: transparent;
          color: #0e0e0e;
          font-family: "Britti Sans Trial", Arial, Helvetica, sans-serif;
          text-align: left;
          box-sizing: border-box;
        }

        .award-row-text {
          display: block;
          max-width: 100%;
          font-size: 18px;
          line-height: 1.3;
          font-weight: 400;
          letter-spacing: -0.02em;
          color: #0e0e0e;
          transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .award-row:hover .award-row-text {
          transform: translateX(7px);
        }

        .awards-know-more {
          width: 200px;
          height: 52px;
          margin-top: 46px;
          padding: 0 22px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          border: 1px solid #0e0e0e;
          border-radius: 999px;
          background: transparent;
          color: #0e0e0e;
          font-family: "Britti Sans Trial", Arial, Helvetica, sans-serif;
          font-size: 11px;
          line-height: 1;
          font-weight: 400;
          cursor: pointer;
          box-sizing: border-box;
          transition: background 0.25s ease, color 0.25s ease,
            border-color 0.25s ease, transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .awards-know-more svg {
          display: block;
          flex-shrink: 0;
        }

        .awards-know-more:hover {
          background: linear-gradient(90deg, #0180fd 0%, #0021af 100%);
          color: #ffffff;
          border-color: transparent;
          transform: translateY(-2px);
          box-shadow: 0 10px 22px rgba(0, 33, 175, 0.18);
        }

        /* FIX: position is now driven purely by transform (set from JS),
           so left/top are no longer needed and will-change only lists
           the properties that actually animate. */
        .awards-hover-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 260px;
          height: 260px;
          object-fit: contain;
          object-position: center;
          border-radius: 0;
          border: none;
          background: transparent;
          opacity: 0;
          pointer-events: none;
          z-index: 10;
          transform: translate3d(0, 0, 0) scale(0.08);
          transition: transform 0.18s cubic-bezier(0.215, 0.61, 0.355, 1),
            opacity 0.12s ease;
          will-change: transform, opacity;
          user-select: none;
          -webkit-user-drag: none;
        }

        .awards-hover-image--visible {
          opacity: 1;
        }

        /* TABLET */
        @media (max-width: 1100px) {
          .awards-section {
            padding: 24px 32px 70px;
          }
          .awards-title-wrap {
            margin-bottom: 58px;
          }
          .awards-title {
            font-size: clamp(110px, 21cqw, 250px);
          }
          .awards-content {
            column-gap: 55px;
          }
          .awards-left-title {
            font-size: 23px;
          }
          .award-row {
            min-height: 82px;
          }
          .award-row-text {
            font-size: 16px;
          }
          .awards-hover-image {
            width: 220px;
            height: 220px;
          }
        }

        /* MOBILE */
        @media (max-width: 767px) {
          .awards-section {
            min-height: auto;
            padding: 28px 20px 60px;
          }

          .awards-title-wrap {
            width: 100%;
            margin: 0 0 48px;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: visible;
          }

          .awards-title {
            width: 100%;
            max-width: 100%;
            text-align: center;
            font-size: clamp(76px, 23cqw, 130px);
            line-height: 0.86;
            letter-spacing: -0.055em;
            transform: none;
          }

          .awards-title-wrap:hover .awards-title {
            transform: none;
          }

          .awards-content {
            display: flex;
            flex-direction: column;
            gap: 36px;
            width: 100%;
          }

          .awards-left,
          .awards-right {
            width: 100%;
          }

          .awards-left-title {
            font-size: 22px;
          }

          .award-row {
            min-height: 76px;
          }

          .award-row-text {
            font-size: 16px;
            line-height: 1.3;
          }

          .awards-know-more {
            width: 185px;
            height: 48px;
            margin-top: 32px;
            font-size: 10.5px;
          }

          /* FIX: was pinned to the bottom-right corner with position:
             fixed + a white circle background. Now it stays
             position: absolute (inherited from the base rule) and
             transparent — centerImageOnTitle() in JS places it right
             over the AWARDS word on tap, same as the desktop hover
             behaviour, just without following a cursor. */
          .awards-hover-image {
            width: 130px;
            height: 130px;
          }
        }

        /* SMALL MOBILE */
        @media (max-width: 420px) {
          .awards-section {
            padding: 24px 20px 52px;
          }
          .awards-title-wrap {
            margin-bottom: 40px;
          }
          .awards-title {
            font-size: 78px;
          }
          .awards-content {
            gap: 30px;
          }
          .awards-left-title {
            font-size: 20px;
          }
          .award-row {
            min-height: 70px;
          }
          .award-row-text {
            font-size: 14px;
            max-width: 95%;
          }
          .awards-know-more {
            width: 175px;
            height: 46px;
            margin-top: 28px;
            font-size: 10px;
          }
          .awards-hover-image {
            width: 105px;
            height: 105px;
          }
        }

        /* TOUCH DEVICE */
        @media (hover: none) {
          .awards-know-more:hover {
            transform: none;
            box-shadow: none;
            background: transparent;
            color: #0e0e0e;
            border-color: #0e0e0e;
          }
          .award-row:hover .award-row-text {
            transform: none;
          }
        }

        /* REDUCED MOTION */
        @media (prefers-reduced-motion: reduce) {
          .awards-hover-image,
          .award-row-text,
          .awards-title,
          .awards-know-more {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}