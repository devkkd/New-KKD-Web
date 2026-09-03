"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

/* =========================================================
   DATA
========================================================= */

const AWARD_ITEMS = [
  {
    id: 1,
    title: "2× Awwwards Site of the Month",
  },
  {
    id: 2,
    title:
      "Top 100 Fastest-Growing Companies – Clutch",
  },
  {
    id: 3,
    title:
      "Top Development Company – GoodFirms",
  },
];

/* =========================================================
   YOUR LOCAL AWARD IMAGES
========================================================= */

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

  const [isTouchDevice, setIsTouchDevice] =
    useState(false);

  const [imageVisible, setImageVisible] =
    useState(false);

  /* =========================================================
     TOUCH CHECK
  ========================================================= */

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const touch =
      window.matchMedia?.(
        "(hover: none), (pointer: coarse)"
      )?.matches ?? false;

    setIsTouchDevice(touch);
  }, []);

  /* =========================================================
     PRELOAD IMAGES
  ========================================================= */

  useEffect(() => {
    AWARD_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  /* =========================================================
     SHOW CURRENT IMAGE
  ========================================================= */

  const showCurrentImage = () => {
    const image = imageRef.current;

    if (!image) return;

    const currentSrc =
      AWARD_IMAGES[
        imageIndexRef.current
      ];

    image.src = currentSrc;

    setImageVisible(true);
  };

  /* =========================================================
     START IMAGE CYCLING
  ========================================================= */

  const startImageAnimation = () => {
    if (intervalRef.current) {
      clearInterval(
        intervalRef.current
      );
    }

    imageIndexRef.current = 0;

    showCurrentImage();

    intervalRef.current =
      setInterval(() => {
        imageIndexRef.current =
          (imageIndexRef.current + 1) %
          AWARD_IMAGES.length;

        showCurrentImage();
      }, 550);
  };

  /* =========================================================
     STOP IMAGE ANIMATION
  ========================================================= */

  const stopImageAnimation = () => {
    if (intervalRef.current) {
      clearInterval(
        intervalRef.current
      );

      intervalRef.current = null;
    }

    setImageVisible(false);
  };

  /* =========================================================
     TITLE MOUSE MOVE
  ========================================================= */

  const handleTitleMouseMove = (e) => {
    if (isTouchDevice) return;

    const title =
      titleRef.current;

    const image =
      imageRef.current;

    if (!title || !image) return;

    const section =
      sectionRef.current;

    if (!section) return;

    const titleRect =
      title.getBoundingClientRect();

    const sectionRect =
      section.getBoundingClientRect();

    const imageWidth = 260;
    const imageHeight = 260;

    /* Cursor position relative to TITLE */

    let x =
      e.clientX -
      titleRect.left -
      imageWidth / 2;

    let y =
      e.clientY -
      sectionRect.top -
      imageHeight / 2;

    /*
      Keep image around the big AWARDS word
      instead of letting it leave the section.
    */

    const minX =
      Math.max(
        0,
        titleRect.left -
          sectionRect.left -
          40
      );

    const maxX =
      Math.min(
        sectionRect.width -
          imageWidth,
        titleRect.right -
          sectionRect.left +
          40
      );

    x =
      Math.max(
        minX,
        Math.min(
          x +
            titleRect.left -
            sectionRect.left,
          maxX
        )
      );

    y =
      Math.max(
        30,
        Math.min(
          y,
          sectionRect.height -
            imageHeight -
            30
        )
      );

    image.style.left =
      `${x}px`;

    image.style.top =
      `${y}px`;
  };

  /* =========================================================
     TITLE ENTER
  ========================================================= */

  const handleTitleMouseEnter =
    () => {
      if (isTouchDevice) return;

      startImageAnimation();
    };

  /* =========================================================
     TITLE LEAVE
  ========================================================= */

  const handleTitleMouseLeave =
    () => {
      if (isTouchDevice) return;

      stopImageAnimation();
    };

  /* =========================================================
     MOBILE TAP
  ========================================================= */

  const handleTitleClick = () => {
    if (!isTouchDevice) return;

    if (imageVisible) {
      stopImageAnimation();
      return;
    }

    imageIndexRef.current = 0;

    showCurrentImage();

    /*
      On mobile keep changing
      images while title remains active.
    */

    if (intervalRef.current) {
      clearInterval(
        intervalRef.current
      );
    }

    intervalRef.current =
      setInterval(() => {
        imageIndexRef.current =
          (imageIndexRef.current + 1) %
          AWARD_IMAGES.length;

        showCurrentImage();
      }, 800);
  };

  return (
    <section
      ref={sectionRef}
      className="awards-section"
    >
      {/* =====================================================
          HOVER IMAGE
      ===================================================== */}

      <img
        ref={imageRef}
        className={`awards-hover-image ${
          imageVisible
            ? "awards-hover-image--visible"
            : ""
        }`}
        alt=""
        draggable="false"
        aria-hidden="true"
      />

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div className="awards-container">

        {/* ===================================================
            AWARDS TITLE
        =================================================== */}

        <div
          ref={titleRef}
          className="awards-title-wrap"
          onMouseEnter={
            handleTitleMouseEnter
          }
          onMouseMove={
            handleTitleMouseMove
          }
          onMouseLeave={
            handleTitleMouseLeave
          }
          onClick={
            handleTitleClick
          }
        >
          <h2 className="awards-title">
            AWARDS
          </h2>
        </div>

        {/* ===================================================
            CONTENT
        =================================================== */}

        <div className="awards-content">

          {/* ================================================
              LEFT
          ================================================ */}

          <div className="awards-left">
            <h3 className="awards-left-title">
              AWARD WINNING
            </h3>
          </div>

          {/* ================================================
              RIGHT
          ================================================ */}

          <div className="awards-right">
            {AWARD_ITEMS.map(
              (item) => (
                <div
                  key={item.id}
                  className="award-row"
                >
                  <span className="award-row-text">
                    {item.title}
                  </span>
                </div>
              )
            )}

            {/* ==========================================
                KNOW MORE
            =========================================== */}

            <button
              type="button"
              className="awards-know-more"
            >
              <span>
                Know More About us
              </span>

              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 2L10 10H2L6 2Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* =========================================================
           SECTION
        ========================================================= */

        .awards-section {
          position:
            relative;

          width:
            100%;

          min-height:
            100vh;

          background:
            #F3F8FF;

          color:
            #0E0E0E;

          overflow:
            hidden;

          box-sizing:
            border-box;

          font-family:
            "Britti Sans Trial",
            Arial,
            Helvetica,
            sans-serif;

          padding:
            28px 62px 85px;
        }

        /* =========================================================
           CONTAINER
        ========================================================= */

        .awards-container {
          position:
            relative;

          width:
            100%;

          max-width:
            1400px;

          margin:
            0 auto;

          box-sizing:
            border-box;
        }

        /* =========================================================
           TITLE WRAPPER
        ========================================================= */
.awards-title-wrap {
  position: relative;

  width: 100%;

  max-width: 100%;

  margin: 0 0 92px;

  padding:
    35px 0;

  cursor: pointer;

  z-index: 2;

  user-select: none;

  display: flex;

  align-items: center;

  justify-content: center;

  overflow: visible;

  box-sizing: border-box;
}

        /* =========================================================
           BIG AWARDS WORD
        ========================================================= */

       .awards-title {
  margin: 0;

  padding: 0;

  width: 100%;

  text-align: center;

  font-family:
    "Britti Sans Trial",
    Arial,
    Helvetica,
    sans-serif;

  font-size:
  clamp(
    140px,
    26vw,
    270px
  );

  line-height:
    0.84;

  font-weight:
    700;

  letter-spacing:
    -0.06em;

  white-space:
    nowrap;

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

  user-select:
    none;

  transform:
    none;

  transition:
    transform 0.35s
    cubic-bezier(
      0.22,
      1,
      0.36,
      1
    );
}

       .awards-title-wrap:hover
  .awards-title {
  transform:
    scale(1.008);
}

        /* =========================================================
           CONTENT
        ========================================================= */

        .awards-content {
          width:
            100%;

          display:
            grid;

          grid-template-columns:
            minmax(
              0,
              0.92fr
            )
            minmax(
              0,
              1.08fr
            );

          column-gap:
            90px;

          align-items:
            start;

          box-sizing:
            border-box;
        }

        /* =========================================================
           LEFT
        ========================================================= */

        .awards-left {
          padding-top:
            2px;

          box-sizing:
            border-box;
        }

        .awards-left-title {
          margin:
            0;

          font-family:
            "Britti Sans Trial",
            Arial,
            Helvetica,
            sans-serif;

          font-size:
            26px;

          line-height:
            1.15;

          font-weight:
            700;

          letter-spacing:
            -0.045em;

          color:
            #0E0E0E;
        }

        /* =========================================================
           RIGHT
        ========================================================= */

        .awards-right {
          width:
            100%;

          display:
            flex;

          flex-direction:
            column;

          align-items:
            stretch;

          box-sizing:
            border-box;
        }

        /* =========================================================
           AWARD ROW
        ========================================================= */

        .award-row {
          position:
            relative;

          width:
            100%;

          min-height:
            90px;

          padding:
            0;

          margin:
            0;

          display:
            flex;

          align-items:
            center;

          justify-content:
            flex-start;

          border:
            0;

          border-bottom:
            1px solid
            #CFD7E3;

          background:
            transparent;

          color:
            #0E0E0E;

          font-family:
            "Britti Sans Trial",
            Arial,
            Helvetica,
            sans-serif;

          text-align:
            left;

          box-sizing:
            border-box;
        }

        .award-row-text {
          display:
            block;

          max-width:
            100%;

          font-size:
            18px;

          line-height:
            1.3;

          font-weight:
            400;

          letter-spacing:
            -0.02em;

          color:
            #0E0E0E;

          transition:
            transform
            0.3s
            cubic-bezier(
              0.22,
              1,
              0.36,
              1
            );
        }

        .award-row:hover
          .award-row-text {
          transform:
            translateX(7px);
        }

        /* =========================================================
           KNOW MORE
        ========================================================= */

        .awards-know-more {
          width:
            200px;

          height:
            52px;

          margin-top:
            46px;

          padding:
            0 22px;

          display:
            inline-flex;

          align-items:
            center;

          justify-content:
            center;

          gap:
            6px;

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
            11px;

          line-height:
            1;

          font-weight:
            400;

          cursor:
            pointer;

          box-sizing:
            border-box;

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

        .awards-know-more svg {
          display:
            block;

          flex-shrink:
            0;
        }

        .awards-know-more:hover {
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
            0 10px 22px
            rgba(
              0,
              33,
              175,
              0.18
            );
        }

        /* =========================================================
           HOVER IMAGE
        ========================================================= */

       .awards-hover-image {
  position: absolute;

  top: 0;
  left: 0;

  width: 260px;
  height: 260px;

  object-fit: contain;
  object-position: center;

  /* NO CIRCLE */
  border-radius: 0;

  /* NO BORDER */
  border: none;

  /* COMPLETELY TRANSPARENT */
  background: transparent;

  opacity: 0;

  pointer-events: none;

  z-index: 10;

  transform: scale(0.08);

  transition:
    transform 0.18s
    cubic-bezier(
      0.215,
      0.61,
      0.355,
      1
    ),
    opacity 0.12s ease;

  will-change:
    left,
    top,
    transform;

  user-select:
    none;

  -webkit-user-drag:
    none;
}

        .awards-hover-image--visible {
          opacity:
            1;

          transform:
            scale(1);
        }

        /* =========================================================
           TABLET
        ========================================================= */

        @media (max-width: 1100px) {
          .awards-section {
            padding:
              24px 32px 70px;
          }

          .awards-title-wrap {
            margin-bottom:
              58px;
          }

          .awards-title {
            font-size:
              clamp(
                110px,
                21vw,
                250px
              );
          }

          .awards-content {
            column-gap:
              55px;
          }

          .awards-left-title {
            font-size:
              23px;
          }

          .award-row {
            min-height:
              82px;
          }

          .award-row-text {
            font-size:
              16px;
          }

          .awards-hover-image {
            width:
              220px;

            height:
              220px;
          }
        }

        /* =========================================================
           MOBILE
        ========================================================= */

        @media (max-width: 767px) {
          .awards-section {
            min-height:
              auto;

            padding:
              28px 20px 60px;
          }

          .awards-title-wrap {
  width: 100%;

  margin:
    0 0 48px;

  display: flex;

  justify-content: center;

  align-items: center;

  overflow: visible;
}

         .awards-title {
  width: 100%;

  max-width: 100%;

  text-align: center;

  font-size:
    clamp(
      76px,
      23vw,
      130px
    );

  line-height:
    0.86;

  letter-spacing:
    -0.055em;

  transform:
    none;
}

          .awards-title-wrap:hover
            .awards-title {
            transform:
              none;
          }

          .awards-content {
            display:
              flex;

            flex-direction:
              column;

            gap:
              36px;

            width:
              100%;
          }

          .awards-left {
            width:
              100%;
          }

          .awards-left-title {
            font-size:
              22px;
          }

          .awards-right {
            width:
              100%;
          }

          .award-row {
            min-height:
              76px;
          }

          .award-row-text {
            font-size:
              16px;

            line-height:
              1.3;
          }

          .awards-know-more {
            width:
              185px;

            height:
              48px;

            margin-top:
              32px;

            font-size:
              10.5px;
          }

          /* MOBILE IMAGE */

          .awards-hover-image {
            width:
              145px;

            height:
              145px;

            border-radius:
              50%;

            right:
              20px;

            left:
              auto;

            top:
              auto;

            bottom:
              120px;

            transition:
              transform
              0.22s
              cubic-bezier(
                0.215,
                0.61,
                0.355,
                1
              ),
              opacity
              0.2s ease;
          }
        }

        /* =========================================================
           SMALL MOBILE
        ========================================================= */

        @media (max-width: 420px) {
          .awards-section {
            padding:
              24px 20px 52px;
          }

          .awards-title-wrap {
            margin-bottom:
              40px;
          }

          .awards-title {
            font-size:
              78px;
          }

          .awards-content {
            gap:
              30px;
          }

          .awards-left-title {
            font-size:
              20px;
          }

          .award-row {
            min-height:
              70px;
          }

          .award-row-text {
            font-size:
              14px;

            max-width:
              95%;
          }

          .awards-know-more {
            width:
              175px;

            height:
              46px;

            margin-top:
              28px;

            font-size:
              10px;
          }

          .awards-hover-image {
            width:
              125px;

            height:
              125px;

            right:
              20px;

            bottom:
              105px;
          }
        }

        /* =========================================================
           TOUCH DEVICE
        ========================================================= */

        @media (hover: none) {
          .awards-know-more:hover {
            transform:
              none;

            box-shadow:
              none;

            background:
              transparent;

            color:
              #0E0E0E;

            border-color:
              #0E0E0E;
          }

          .award-row:hover
            .award-row-text {
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
          .awards-hover-image,
          .award-row-text,
          .awards-title,
          .awards-know-more {
            transition:
              none !important;
          }
        }
      `}</style>
    </section>
  );
}