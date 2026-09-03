"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function WebsiteLoader({ onComplete }) {
  const loaderRef = useRef(null);
  const overlayRef = useRef(null);

  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);

  const imageBoxRef = useRef(null);
  const imageInnerRef = useRef(null);

  const loadingImageRef = useRef(null);
  const heroImageRef = useRef(null);

  const onCompleteRef = useRef(onComplete);

  useLayoutEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useLayoutEffect(() => {
    const loader = loaderRef.current;
    const overlay = overlayRef.current;

    const leftText = leftTextRef.current;
    const rightText = rightTextRef.current;

    const imageBox = imageBoxRef.current;
    const imageInner = imageInnerRef.current;

    const loadingImage = loadingImageRef.current;
    const heroImage = heroImageRef.current;

    if (
      !loader ||
      !overlay ||
      !leftText ||
      !rightText ||
      !imageBox ||
      !imageInner ||
      !loadingImage ||
      !heroImage
    ) {
      return;
    }

    document.body.classList.add("loader-active");

    const isMobile = window.matchMedia(
      "(max-width: 767px)"
    ).matches;

    const ctx = gsap.context(() => {
      /* =================================================
         SOURCE IMAGES
      ================================================= */

      const loadingSrc = isMobile
        ? "/mobileloading.png"
        : "/loading.png";

      const heroSrc = "/home/hero.png";

      loadingImage.src = loadingSrc;
      heroImage.src = heroSrc;

      /* =================================================
         INITIAL STATE
      ================================================= */

      gsap.set(loader, {
        autoAlpha: 1,
      });

      gsap.set([leftText, rightText], {
        yPercent: 110,
        x: 0,
        opacity: 1,
      });

      gsap.set(imageBox, {
        left: "50%",
        top: "50%",

        xPercent: -50,
        yPercent: -50,

        x: 0,
        y: 0,

        width: 0,

        height: isMobile
          ? "clamp(85px, 24vw, 135px)"
          : "clamp(120px, 16vw, 250px)",
      });

      gsap.set(imageInner, {
        scale: 1.06,
      });

      gsap.set(loadingImage, {
        autoAlpha: 1,
      });

      gsap.set(heroImage, {
        autoAlpha: 0,
      });

      /* =================================================
         MEASURE HERO IMAGE

         Hero is already rendered underneath loader.
         We use its EXACT visible rectangle.
      ================================================= */

      const targetRect =
        heroImage.getBoundingClientRect();

      const viewportWidth =
        window.innerWidth;

      const viewportHeight =
        window.innerHeight;

      const targetCenterX =
        targetRect.left +
        targetRect.width / 2;

      const targetCenterY =
        targetRect.top +
        targetRect.height / 2;

      const targetX =
        targetCenterX -
        viewportWidth / 2;

      const targetY =
        targetCenterY -
        viewportHeight / 2;

      /* =================================================
         PRELOAD
      ================================================= */

      const loadingPreload =
        new window.Image();

      const heroPreload =
        new window.Image();

      loadingPreload.src =
        loadingSrc;

      heroPreload.src =
        heroSrc;

      let started = false;

      const startAnimation = () => {
        if (started) return;

        started = true;

        /* =================================================
           TIMELINE
        ================================================= */

        const tl = gsap.timeline({
          defaults: {
            ease: "expo.inOut",
          },

          onComplete: () => {
            document.body.classList.remove(
              "loader-active"
            );

            if (typeof onCompleteRef.current === "function") {
              onCompleteRef.current();
            }

            gsap.to(loader, {
              autoAlpha: 0,

              duration: 0.3,

              ease: "power2.out",

              onComplete: () => {
                loader.style.display = "none";
              },
            });
          },
        });

        /* =================================================
           1. TEXT ENTER
        ================================================= */

        tl.to(
          [leftText, rightText],
          {
            yPercent: 0,

            duration: 1.05,

            stagger: 0.03,

            ease: "expo.out",
          }
        );

        /* =================================================
           2. SMALL HOLD
        ================================================= */

        tl.to(
          {},
          {
            duration: 0.15,
          }
        );

        /* =================================================
           3. CENTER IMAGE REVEAL
        ================================================= */

        tl.to(
          imageBox,
          {
            width: isMobile
              ? "24vw"
              : "14vw",

            duration: 1.0,

            ease: "expo.inOut",
          }
        );

        /* =================================================
           4. TEXT OPENS
        ================================================= */

        tl.to(
          leftText,
          {
            x: isMobile
              ? "-11vw"
              : "-8vw",

            duration: 1.0,

            ease: "expo.inOut",
          },
          "<"
        );

        tl.to(
          rightText,
          {
            x: isMobile
              ? "11vw"
              : "8vw",

            duration: 1.0,

            ease: "expo.inOut",
          },
          "<"
        );

        /* =================================================
           5. IMAGE FOCUS
        ================================================= */

        tl.to(
          imageInner,
          {
            scale: 1,

            duration: 0.85,

            ease: "power3.out",
          },
          "-=0.65"
        );

        /* =================================================
           6. SHORT HOLD
        ================================================= */

        tl.to(
          {},
          {
            duration: 0.15,
          }
        );

        /* =================================================
           7. TEXT DISAPPEARS
        ================================================= */

        tl.to(
          [leftText, rightText],
          {
            opacity: 0,

            duration: 0.35,

            ease: "power2.out",
          }
        );

        /* =================================================
           8. IMAGE GOES BIG
        ================================================= */

        tl.to(
          imageBox,
          {
            width: isMobile
              ? "70vw"
              : "62vw",

            height: isMobile
              ? "60vh"
              : "68vh",

            duration: 1.15,

            ease: "expo.inOut",
          },
          "-=0.05"
        );

        /* =================================================
           9. SWITCH TO HERO IMAGE
           
           Both loader + hero use CONTAIN.
           This eliminates visual jump.
        ================================================= */

        tl.to(
          loadingImage,
          {
            autoAlpha: 0,

            duration: 0.18,

            ease: "none",
          }
        );

        tl.to(
          heroImage,
          {
            autoAlpha: 1,

            duration: 0.18,

            ease: "none",
          },
          "<"
        );

        /* =================================================
           10. EXACT HERO POSITION / SIZE

           NO SEPARATE gsap.to()
           NO EXTRA WAIT
        ================================================= */

        tl.to(
          imageBox,
          {
            width: targetRect.width,

            height: targetRect.height,

            x: targetX,

            y: targetY,

            duration: 1.15,

            ease: "expo.inOut",
          }
        );

        /* =================================================
           11. FINAL MICRO SETTLE
        ================================================= */

        tl.to(
          imageInner,
          {
            scale: 1,

            duration: 0.25,

            ease: "power2.out",
          },
          "-=0.2"
        );

        /* =================================================
           12. IMMEDIATE FADE
        ================================================= */

        tl.to(
          overlay,
          {
            opacity: 0,

            duration: 0.22,

            ease: "power2.out",
          },
          "-=0.1"
        );
      };

      /* =================================================
         PRELOAD LOGIC
      ================================================= */

      let loadingReady =
        loadingPreload.complete;

      let heroReady =
        heroPreload.complete;

      const checkReady = () => {
        if (
          loadingReady &&
          heroReady
        ) {
          startAnimation();
        }
      };

      loadingPreload.onload = () => {
        loadingReady = true;

        checkReady();
      };

      loadingPreload.onerror = () => {
        loadingReady = true;

        checkReady();
      };

      heroPreload.onload = () => {
        heroReady = true;

        checkReady();
      };

      heroPreload.onerror = () => {
        heroReady = true;

        checkReady();
      };

      checkReady();
    }, loaderRef);

    return () => {
      ctx.revert();

      document.body.classList.remove(
        "loader-active"
      );
    };
  }, []);

  return (
    <div
      ref={loaderRef}
      className="kk-loader"
    >
      {/* =========================================
          BACKGROUND
      ========================================== */}

      <div
        ref={overlayRef}
        className="kk-loader-overlay"
      />

      {/* =========================================
          STAGE
      ========================================== */}

      <div className="kk-loader-stage">
        {/* LEFT */}

        <div
          ref={leftTextRef}
          className="kk-loader-title kk-loader-left"
        >
          Kontent Kraft
        </div>

        {/* CENTER IMAGE */}

        <div
          ref={imageBoxRef}
          className="kk-loader-image-box"
        >
          <div
            ref={imageInnerRef}
            className="kk-loader-image-inner"
          >
            {/* INITIAL LOADING IMAGE */}

            <img
              ref={loadingImageRef}
              src="/loading.png"
              alt=""
              className="kk-loader-image kk-loader-loading-image"
              draggable="false"
            />

            {/* FINAL HERO IMAGE */}

            <img
              ref={heroImageRef}
              src="/home/hero.png"
              alt=""
              className="kk-loader-image kk-loader-hero-image"
              draggable="false"
            />
          </div>
        </div>

        {/* RIGHT */}

        <div
          ref={rightTextRef}
          className="kk-loader-title kk-loader-right"
        >
          Digital
        </div>
      </div>

      {/* =========================================
          INLINE CSS
      ========================================== */}

      <style jsx>{`
        /* =========================================
           LOADER
        ========================================= */

        .kk-loader {
          position: fixed;

          inset: 0;

          width: 100vw;
          height: 100dvh;

          z-index: 999999;

          overflow: hidden;

          background: #f3f8ff;

          color: #0021af;

          font-family:
            "Britti Sans Trial",
            Arial,
            Helvetica,
            sans-serif;

          isolation: isolate;

          transform: translateZ(0);
        }

        /* =========================================
           BACKGROUND
        ========================================= */

        .kk-loader-overlay {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          background: #f3f8ff;

          z-index: 1;

          pointer-events: none;
        }

        /* =========================================
           STAGE
        ========================================= */

        .kk-loader-stage {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          overflow: hidden;

          z-index: 2;
        }

        /* =========================================
           TEXT
        ========================================= */

        .kk-loader-title {
          position: absolute;

          top: 50%;

          z-index: 10;

          margin: 0;

          transform:
            translateY(-50%);

          color: #0021af;

          font-size:
            clamp(
              42px,
              5vw,
              78px
            );

          line-height: 0.92;

          font-weight: 600;

          letter-spacing:
            -0.055em;

          white-space: nowrap;

          user-select: none;

          pointer-events: none;

          will-change:
            transform,
            opacity;
        }

        .kk-loader-left {
          right: 50%;

          margin-right: 5px;

          text-align: right;
        }

        .kk-loader-right {
          left: 50%;

          margin-left: 5px;

          text-align: left;
        }

        /* =========================================
           IMAGE BOX
        ========================================= */

        .kk-loader-image-box {
          position: absolute;

          left: 50%;
          top: 50%;

          width: 0;

          height:
            clamp(
              120px,
              16vw,
              250px
            );

          overflow: hidden;

          z-index: 4;

          background: transparent;

          box-sizing: border-box;

          transform:
            translate(
              -50%,
              -50%
            );

          transform-origin:
            center center;

          will-change:
            width,
            height,
            transform;
        }

        /* =========================================
           INNER
        ========================================= */

        .kk-loader-image-inner {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          overflow: hidden;

          will-change:
            transform;
        }

        /* =========================================
           IMAGE
           
           MUST MATCH HERO:
           object-fit: contain
        ========================================= */

        .kk-loader-image {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          max-width: none;

          display: block;

          object-fit: contain;

          object-position:
            center center;

          user-select: none;

          pointer-events: none;

          -webkit-user-drag: none;

          will-change:
            opacity;
        }

        .kk-loader-loading-image {
          z-index: 2;

          opacity: 1;
        }

        .kk-loader-hero-image {
          z-index: 1;

          opacity: 0;

          visibility: hidden;
        }

        /* =========================================
           LARGE DESKTOP
        ========================================= */

        @media (min-width: 1440px) {
          .kk-loader-title {
            font-size:
              clamp(
                56px,
                4.8vw,
                86px
              );
          }
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 991px) {
          .kk-loader-title {
            font-size:
              clamp(
                34px,
                6vw,
                60px
              );
          }

          .kk-loader-left {
            margin-right: 4px;
          }

          .kk-loader-right {
            margin-left: 4px;
          }
        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 767px) {
          .kk-loader-title {
            font-size:
              clamp(
                18px,
                5.8vw,
                32px
              );

            letter-spacing:
              -0.06em;
          }

          .kk-loader-left {
            margin-right: 3px;
          }

          .kk-loader-right {
            margin-left: 3px;
          }

          .kk-loader-image-box {
            height:
              clamp(
                85px,
                24vw,
                135px
              );
          }
        }

        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 480px) {
          .kk-loader-title {
            font-size:
              clamp(
                16px,
                5.8vw,
                27px
              );
          }

          .kk-loader-left {
            margin-right: 2px;
          }

          .kk-loader-right {
            margin-left: 2px;
          }

          .kk-loader-image-box {
            height: 78px;
          }
        }

        /* =========================================
           VERY SMALL
        ========================================= */

        @media (max-width: 360px) {
          .kk-loader-title {
            font-size: 18px;
          }
        }

        /* =========================================
           REDUCED MOTION
        ========================================= */

        @media (
          prefers-reduced-motion: reduce
        ) {
          .kk-loader {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}