"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
} from "react";

import gsap from "gsap";
import {
  ScrollTrigger,
} from "gsap/ScrollTrigger";

if (
  typeof window !== "undefined"
) {
  gsap.registerPlugin(
    ScrollTrigger
  );
}

const stats = [
  {
    id: 1,
    target: 400,
    decimals: 0,
    suffix: "+",
    label: "Products",
    labelLine2: "Shipped",
    image: "/home/s1.png",
    alt: "Products Shipped",
  },
  {
    id: 2,
    target: 150,
    decimals: 0,
    suffix: "+",
    label: "Companies",
    labelLine2: "Served",
    image: "/home/s2.png",
    alt: "Companies Served",
  },
  {
    id: 3,
    target: 98,
    decimals: 0,
    suffix: "%",
    label: "On-Time",
    labelLine2: "Delivery",
    image: "/home/s3.png",
    alt: "On-Time Delivery",
  },
  {
    id: 4,
    target: 4.9,
    decimals: 1,
    suffix: "★",
    label: "Clients",
    labelLine2: "Rating",
    image: "/home/s4.png",
    alt: "Clients Rating",
  },
];

/* =========================================================
   STAT CARD
========================================================= */

function StatCard({
  stat,
  index,
}) {
  const cardRef =
    useRef(null);

  const numberRef =
    useRef(null);

  useEffect(() => {
    const card =
      cardRef.current;

    const number =
      numberRef.current;

    if (!card || !number) {
      return undefined;
    }

    const prefersReducedMotion =
      window.matchMedia?.(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    /* =========================================
       REDUCED MOTION
    ========================================= */

    if (prefersReducedMotion) {
      number.textContent =
        `${stat.target.toFixed(
          stat.decimals
        )}${stat.suffix}`;

      gsap.set(card, {
        opacity: 1,
        scale: 1,
        y: 0,
      });

      return undefined;
    }

    /* =========================================
       INITIAL STATE
    ========================================= */

    const counter = {
      value: 0,
    };

    const delay =
      index * 0.12;

    const ctx =
      gsap.context(() => {
        gsap.set(card, {
          opacity: 0,
          scale: 0.6,
          y: 40,
        });

        number.textContent =
          `0${stat.suffix}`;

        /* =====================================
           ENTER
        ===================================== */

        const playIn = () => {
          gsap.killTweensOf(
            card
          );

          gsap.killTweensOf(
            counter
          );

          counter.value = 0;

          number.textContent =
            `0${stat.suffix}`;

          gsap.to(card, {
            opacity: 1,
            scale: 1,
            y: 0,

            duration: 0.7,

            delay,

            ease:
              "back.out(1.4)",

            overwrite: "auto",
          });

          gsap.to(counter, {
            value: stat.target,

            duration: 1.4,

            delay,

            ease:
              "power3.out",

            overwrite: "auto",

            onUpdate: () => {
              const current =
                stat.decimals > 0
                  ? counter.value.toFixed(
                      stat.decimals
                    )
                  : Math.round(
                      counter.value
                    ).toString();

              number.textContent =
                `${current}${stat.suffix}`;
            },

            onComplete: () => {
              number.textContent =
                `${stat.target.toFixed(
                  stat.decimals
                )}${stat.suffix}`;
            },
          });
        };

        /* =====================================
           LEAVE
        ===================================== */

        const playOut = () => {
          gsap.killTweensOf(
            card
          );

          gsap.killTweensOf(
            counter
          );

          gsap.set(card, {
            opacity: 0,
            scale: 0.6,
            y: 40,
          });

          counter.value = 0;

          number.textContent =
            `0${stat.suffix}`;
        };

        /* =====================================
           SCROLL TRIGGER
        ===================================== */

        const trigger =
          ScrollTrigger.create({
            trigger: card,

            start: "top 88%",

            end: "bottom 12%",

            onEnter: playIn,

            onEnterBack:
              playIn,

            onLeave: playOut,

            onLeaveBack:
              playOut,
          });

        return () => {
          trigger.kill();

          gsap.killTweensOf(
            card
          );

          gsap.killTweensOf(
            counter
          );
        };
      }, card);

    return () => {
      ctx.revert();
    };
  }, [
    stat,
    index,
  ]);

  return (
    <div
      className="stat-card"
      ref={cardRef}
    >
      {/* ======================================
          TOP
      ====================================== */}

      <div className="stat-card-top">
        <div className="stat-number">
          <span
            ref={numberRef}
          >
            0{stat.suffix}
          </span>
        </div>

        <div className="stat-label">
          {stat.label}
          <br />
          {stat.labelLine2}
        </div>
      </div>

      {/* ======================================
          IMAGE
      ====================================== */}

      <div className="stat-card-image">
        <Image
          src={stat.image}
          alt={stat.alt}
          fill
          sizes="
            (max-width: 600px) 50vw,
            (max-width: 900px) 50vw,
            25vw
          "
          quality={78}
          className="stat-card-image-element"
          draggable="false"
        />
      </div>
    </div>
  );
}

/* =========================================================
   MAIN SECTION
========================================================= */

export default function StatsSection() {
  const sectionRef =
    useRef(null);

  useEffect(() => {
    /*
      Wait until this section has been mounted before
      recalculating ScrollTrigger.

      This avoids unnecessary immediate refresh work.
    */

    const refresh =
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });

    return () => {
      cancelAnimationFrame(
        refresh
      );
    };
  }, []);

  return (
    <section
      className="stats-section"
      ref={sectionRef}
      aria-label="Company statistics"
    >
      <div className="stats-grid">
        {stats.map(
          (stat, index) => (
            <StatCard
              key={stat.id}
              stat={stat}
              index={index}
            />
          )
        )}
      </div>

      {/* =========================================
          PLAIN <style> TAG (NOT styled-jsx)

          Same fix as WebsiteLoader: styled-jsx needs
          a client runtime to inject its <style> tag,
          which costs extra JS + a small delay before
          rules apply. A plain <style> tag is emitted
          as normal server-rendered markup, so the
          rules are already there on first paint —
          no runtime, no injection delay. Every rule,
          value, and breakpoint below is UNCHANGED
          from the original.
      ========================================== */}

      <style>{`
        .stat-card {
          background: #ffffff;

          border:
            1px solid
            #e3ecfa;

          border-radius: 15px;

          overflow: hidden;

          box-shadow:
            0 4px 16px
              rgba(
                1,
                128,
                253,
                0.06
              );

          display: flex;

          flex-direction:
            column;

          will-change:
            transform,
            opacity;

          min-width: 0;
        }

        .stat-card-top {
          padding:
            34px
            34px
            34px
            34px;

          display: flex;

          align-items:
            flex-start;

          gap: 22px;

          min-width: 0;
        }

        .stat-number {
          flex-shrink: 0;

          font-family:
            "Britti Sans Trial",
            sans-serif;

          font-weight: 700;

          font-size: 32px;

          line-height:
            0.95;

          background:
            linear-gradient(
              180deg,
              #0180fd 0%,
              #0021af 100%
            );

          -webkit-background-clip:
            text;

          background-clip:
            text;

          -webkit-text-fill-color:
            transparent;

          display:
            inline-block;

          margin: 0;

          min-width: 3.8ch;

          white-space:
            nowrap;

          font-variant-numeric:
            tabular-nums;
        }

        .stat-label {
          padding-top: 0;

          font-family:
            "Britti Sans Trial",
            sans-serif;

          font-weight: 400;

          font-size: 15px;

          line-height: 1.25;

          color: #16181d;

          min-width: 0;
        }

        .stat-card-image {
          position: relative;

          width: 100%;

          height: 260px;

          overflow: hidden;

          flex-shrink: 0;
        }

        .stat-card-image-element {
          object-fit: cover;

          object-position:
            center center;

          display: block;

          user-select: none;

          pointer-events: none;

          transition:
            transform
              0.5s
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              );
        }

        .stat-card:hover
          .stat-card-image-element {
          transform:
            scale(1.025);
        }

        @media (max-width: 900px) {
          .stat-number {
            font-size: 36px;
          }

          .stat-label {
            font-size: 17px;
          }

          .stat-card-image {
            height: 200px;
          }
        }

        @media (max-width: 600px) {
          .stat-card {
            border-radius: 16px;
          }

          .stat-card-top {
            padding:
              16px
              14px;

            display: flex;

            align-items:
              flex-start;

            gap: 12px;
          }

          .stat-number {
            font-size: 32px;
          }

          .stat-label {
            padding-top: 1px;

            font-size: 13px;

            line-height: 1.2;
          }

          .stat-card-image {
            height: 130px;
          }
        }

        @media (max-width: 380px) {
          .stat-card-top {
            gap: 9px;
          }

          .stat-number {
            font-size: 28px;
          }

          .stat-label {
            font-size: 11px;
          }
        }

        @media (hover: none) {
          .stat-card:hover
            .stat-card-image-element {
            transform: none;
          }
        }

        @media (
          prefers-reduced-motion:
            reduce
        ) {
          .stat-card {
            will-change: auto;

            transition: none;
          }

          .stat-card-image-element {
            transition: none;
          }
        }

        .stats-section {
          background: #f3f8ff;

          padding:
            64px 24px;

          width: 100%;

          overflow: hidden;
        }

        .stats-grid {
          width: 100%;

          max-width: 1200px;

          margin: 0 auto;

          display: grid;

          grid-template-columns:
            repeat(
              4,
              minmax(0, 1fr)
            );

          gap: 24px;
        }

        @media (max-width: 900px) {
          .stats-grid {
            grid-template-columns:
              repeat(
                2,
                minmax(0, 1fr)
              );

            gap: 20px;
          }
        }

        @media (max-width: 600px) {
          .stats-section {
            padding:
              40px 16px;
          }

          .stats-grid {
            grid-template-columns:
              repeat(
                2,
                minmax(0, 1fr)
              );

            gap: 14px;
          }
        }
      `}</style>
    </section>
  );
}