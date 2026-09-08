"use client";

import AwardsSection from "@/components/AwardsSection";
import { useEffect, useRef, useState } from "react";

/* =========================================================
   IMAGE DATA
========================================================= */

const GALLERY_IMAGES = [
  "/career/2.png",
  "/career/3.png",
  "/career/4.png",
  "/career/5.png",
  "/career/6.png",
  "/career/7.png",
  "/career/8.png",
];

const VALUE_CARDS = [
  {
    id: 1,
    title: "Partnership Over Transaction",
    description:
      "Our best client relationships span years. We invest in understanding your business at a level that lets us anticipate needs before you can articulate them. We care what happens after launch.",
  },
  {
    id: 2,
    title: "Curiosity as Infrastructure",
    description:
      "Technology compounds. Our team dedicates 20% of their time to learning, experimenting, and building. The AI revolution didn't catch us off guard—we've been preparing for it for three years.",
  },
  {
    id: 3,
    title: "Kraft Over Volume",
    description:
      "We take fewer clients than our pipeline allows not because we can't handle the volume, but because mediocre output is genuinely painful for us. We'd rather decline a project than do work we're not proud of.",
  },
  {
    id: 4,
    title: "Honesty Over Comfort",
    description:
      "If your timeline is unrealistic, we'll say so. If a feature won't serve your users, we'll push back. If a competitor has built something better, you deserve to know. Comfortable lies compound into expensive disasters.",
  },
];

const STATS = [
  { value: 400, suffix: "+", label: "Products Shipped", decimal: false },
  { value: 150, suffix: "+", label: "Companies Served", decimal: false },
  { value: 98, suffix: "%", label: "On-Time Delivery", decimal: false },
  { value: 4.9, suffix: "★", label: "Clients Rating", decimal: true },
];

const STAT_IMAGES = [
  "/home/s1.png",
  "/home/s2.png",
  "/home/s3.png",
  "/home/s4.png",
];

const QUOTE_LINES = [
  "The best agencies don't deliver what you asked for.",
  "They deliver what you actually needed.",
  "- That's the standard we hold ourselves to.",
];

const QUOTE_STEP_MS = 250;
const QUOTE_HOLD_MS = 1300;
const VALUES_INTERVAL_MS = 2600;
const STATS_ANIM_MS = 1600;

/* =========================================================
   ANIMATED NUMBER
   Width is reserved via CSS (min-width), so counting up
   never changes the row's layout.
========================================================= */

function AnimatedStat({ item, start }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!start) {
      setDisplayValue(0);
      return undefined;
    }

    let frameId = null;
    const startedAt = performance.now();

    const tick = (now) => {
      const progress = Math.min(1, (now - startedAt) / STATS_ANIM_MS);
      const eased = 1 - Math.pow(1 - progress, 4);
      const nextValue = item.value * eased;

      setDisplayValue(
        item.decimal ? Number(nextValue.toFixed(1)) : Math.round(nextValue)
      );

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => {
      if (frameId !== null) cancelAnimationFrame(frameId);
    };
  }, [item, start]);

  const formatted = item.decimal ? displayValue.toFixed(1) : String(displayValue);

  return (
    <span className="stat-value-content">
      {formatted}
      {item.suffix}
    </span>
  );
}

export default function AboutPage() {
  const quoteSectionRef = useRef(null);
  const statsSectionRef = useRef(null);

  const [quoteActive, setQuoteActive] = useState(false);
  const [quoteStep, setQuoteStep] = useState(0);
  const [statsStarted, setStatsStarted] = useState(false);
  const [valuesPaused, setValuesPaused] = useState(false);
  const [pageReady, setPageReady] = useState(false);

  /*
    Wait only for fonts to finish loading before starting any
    animation. This is the single source of the "text moves on
    refresh" bug: web fonts swap in after first paint and change
    text width (esp. with negative letter-spacing), so anything
    animating before that swap appears to jump. One check, no
    extra rAF chain.
  */
  useEffect(() => {
    let cancelled = false;

    const markReady = () => {
      if (!cancelled) setPageReady(true);
    };

    if (document.fonts?.ready) {
      document.fonts.ready.then(markReady).catch(markReady);
    } else {
      markReady();
    }

    return () => {
      cancelled = true;
    };
  }, []);

  const quoteWords = QUOTE_LINES.flatMap((line) => line.split(" "));

  /* Quote section visibility */
  useEffect(() => {
    const element = quoteSectionRef.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setQuoteActive(entry.isIntersecting),
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  /*
    Quote word-reveal loop.
    Fixed: previously ran two independent intervals (a stepper +
    a separate resetter) that were not synced, so the reset could
    fire mid-step and snap words backward. Now it's a single
    recursive setTimeout chain — always one timer, always in sync.
  */
  useEffect(() => {
    if (!pageReady || !quoteActive) {
      setQuoteStep(0);
      return undefined;
    }

    const total = quoteWords.length;
    let step = 0;
    let timeoutId = null;

    setQuoteStep(0);

    const tick = () => {
      step += 1;
      setQuoteStep(step);

      if (step < total) {
        timeoutId = setTimeout(tick, QUOTE_STEP_MS);
      } else {
        timeoutId = setTimeout(() => {
          step = 0;
          setQuoteStep(0);
          timeoutId = setTimeout(tick, QUOTE_STEP_MS);
        }, QUOTE_HOLD_MS);
      }
    };

    timeoutId = setTimeout(tick, QUOTE_STEP_MS);

    return () => {
      if (timeoutId !== null) clearTimeout(timeoutId);
    };
  }, [pageReady, quoteActive, quoteWords.length]);

  /* Stats visibility */
  useEffect(() => {
    if (!pageReady) return undefined;

    const element = statsSectionRef.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [pageReady]);

  /*
    Values animation:
    CSS controls the actual up/down motion so the cards never change
    document flow. React only controls the pause state. This keeps the
    animation stable on refresh and makes hover/finger pause reliable.
  */
  const pauseValues = () => setValuesPaused(true);
  const resumeValues = () => setValuesPaused(false);

  return (
    <main className="about-page">
      {/* ABOUT INTRO */}
      <section className="about-intro-section">
        <div className="about-container">
          <div className="about-eyebrow">About Kontent Kraft Digital</div>

          <h1 className="about-title">We Build Like It&apos;s Our Own Product</h1>

         <div className="about-copy">

  <p className="about-copy-primary">
    <strong>Kontent Kraft Digital</strong> was founded on a
    frustration. Our founders had spent years watching talented
    teams fail not because of bad engineers or bad ideas, but
    because of misaligned incentives, opaque processes, and
    agencies that optimised for billing hours instead of business
    outcomes.
  </p>

  <p className="about-copy-secondary">
    So we built the agency we always wished existed. One where
    senior engineers make architectural decisions. Where design
    is grounded in user psychology, not aesthetic trends. Where
    every estimate is honest, every timeline is defensible, and
    every sprint delivers something real.
  </p>

  <p className="about-copy-secondary">
    Today, we&apos;re a 50+ person team across three continents
    engineers, data scientists, designers, product strategists,
    and growth specialists united by one genuine obsession:
    building things worth being proud of.
  </p>

</div>
        </div>
      </section>

      {/* GALLERY — 7 images, fixed-height containers so image load never shifts layout */}
      <section className="about-gallery-section">
        <div className="about-gallery">
          <div className="about-gallery-main">
            <img src={GALLERY_IMAGES[0]} alt="" width="1120" height="320" loading="eager" decoding="async" draggable="false" />
          </div>

          <div className="about-gallery-stack">
            <div className="about-gallery-small">
              <img src={GALLERY_IMAGES[1]} alt="" width="720" height="160" loading="eager" decoding="async" draggable="false" />
            </div>
            <div className="about-gallery-small">
              <img src={GALLERY_IMAGES[2]} alt="" width="720" height="160" loading="eager" decoding="async" draggable="false" />
            </div>
          </div>

          <div className="about-gallery-main">
            <img src={GALLERY_IMAGES[3]} alt="" width="950" height="320" loading="eager" decoding="async" draggable="false" />
          </div>

          <div className="about-gallery-stack">
            <div className="about-gallery-small">
              <img src={GALLERY_IMAGES[4]} alt="" width="720" height="160" loading="eager" decoding="async" draggable="false" />
            </div>
            <div className="about-gallery-small">
              <img src={GALLERY_IMAGES[5]} alt="" width="720" height="160" loading="eager" decoding="async" draggable="false" />
            </div>
          </div>

          <div className="about-gallery-main">
            <img src={GALLERY_IMAGES[6]} alt="" width="950" height="320" loading="eager" decoding="async" draggable="false" />
          </div>
        </div>
      </section>

      {/* QUOTE / WORD REVEAL */}
      <section ref={quoteSectionRef} className="about-quote-section">
        <div className="about-quote">
          {QUOTE_LINES.map((line, lineIndex) => {
            const words = line.split(" ");
            let previousCount = 0;
            for (let i = 0; i < lineIndex; i += 1) {
              previousCount += QUOTE_LINES[i].split(" ").length;
            }

            return (
              <div key={line} className={`about-quote-line ${lineIndex === 0 ? "is-primary" : ""}`}>
                {words.map((word, wordIndex) => {
                  const globalIndex = previousCount + wordIndex;
                  const dark = globalIndex < quoteStep;

                  return (
                    <span key={`${lineIndex}-${wordIndex}`} className={`about-quote-word ${dark ? "is-dark" : ""}`}>
                      {word}
                    </span>
                  );
                })}
              </div>
            );
          })}
        </div>

       <div className="about-bottom-copy">
  <div className="about-bottom-line about-bottom-line-1">
    We&apos;ve shipped 100+ products, helped clients raise $5M+ in venture funding, and built
  </div>

  <div className="about-bottom-line about-bottom-line-2">
    systems that serve tens of millions of users daily. We don&apos;t take every project that
  </div>

  <div className="about-bottom-line about-bottom-line-3">
    comes our way. We take the ones where we can genuinely move the needle.
  </div>
</div>
      </section>

      {/* VALUES */}
      <section className="about-values-section">
        <div className="about-container">
          <div className="values-header">
            <div className="values-eyebrow">VALUES</div>
            <h2 className="values-title">What We Actually Believe</h2>
          </div>

          <div
            className="values-stage"
            onMouseEnter={pauseValues}
            onMouseLeave={resumeValues}
            onPointerDown={pauseValues}
            onPointerUp={resumeValues}
            onPointerCancel={resumeValues}
            onTouchStart={pauseValues}
            onTouchEnd={resumeValues}
          >
            {VALUE_CARDS.map((card, index) => {
              const isTop = index % 2 === 0;

              return (
                <article
                  key={card.id}
                  className={`value-card ${
                    isTop
                      ? "value-card-top"
                      : "value-card-bottom"
                  } ${valuesPaused ? "is-paused" : ""}`}
                >
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section
        ref={statsSectionRef}
        className="about-stats-section"
      >
        <div className="about-container">

          <div className="about-stats-list">

            {STATS.map((item, index) => (
              <div
                key={item.label}
                className="about-stat-row"
                style={{
                  "--stat-index": index,
                }}
              >

                <div className="about-stat-number">
                  <AnimatedStat
                    item={item}
                    start={statsStarted}
                  />
                </div>

                <div className="about-stat-label">
                  {item.label}
                </div>

                <div className="about-stat-image-wrap">
                  <img
                    className="about-stat-image"
                    src={STAT_IMAGES[index]}
                    alt=""
                    width="330"
                    height="143"
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    draggable="false"
                  />
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>
         <AwardsSection />

      <style>{`
        .about-page {
          width: 100%;
          min-height: 100vh;
          overflow-anchor: none;
          margin: 0;
          padding: 0;
          background: #F3F8FF;
          color: #0E0E0E;
          font-family: "Britti Sans Trial", Arial, Helvetica, sans-serif;
          font-synthesis: none;
          overflow-x: hidden;
          box-sizing: border-box;
        }

        .about-page *,
        .about-page *::before,
        .about-page *::after {
          box-sizing: border-box;
        }

        .about-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 30px;
        }

        /* INTRO */
        .about-intro-section {
          width: 100%;
          min-height: 445px;
          padding: 42px 0 72px;
        }

        .about-intro-section .about-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .about-eyebrow {
          margin: 0 0 27px;
          font-size: 16px;
          line-height: 1.2;
        }

        .about-title {
          width: 100%;
          max-width: 850px;
          margin: 0;
          font-size: 30px;
          line-height: 1.2;
          font-weight: 600;
          letter-spacing: -0.04em;
        }

       .about-copy {
  width: 100%;
  max-width: 800px;
  margin: 30px auto 0;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.about-copy p {
  margin: 0;
  font-size: 15px;
  line-height: 1.65;
  text-align: center;
}

.about-copy-primary {
  width: 100%;
  max-width: 1180px;
}

.about-copy-secondary {
  width: 100%;
  max-width: 900px;
}

.about-copy p + p {
  margin-top: 25px;
}

.about-copy strong {
  font-weight: 700;
}

        .about-copy p + p {
          margin-top: 25px;
        }

        .about-copy strong {
          font-weight: 700;
        }

        /* GALLERY — fixed pixel heights per breakpoint so images never cause CLS */
        .about-gallery-section {
          width: 100%;
          overflow: hidden;
        }

        .about-gallery {
          width: 100%;
          height: 420px;
          display: grid;
          grid-template-columns: 1.12fr 0.72fr 0.95fr 0.72fr 1.12fr;
          gap: 7px;
          overflow: hidden;
          line-height: 0;
        }

        .about-gallery-main,
        .about-gallery-stack {
          width: 100%;
          height: 420px;
          min-width: 0;
          overflow: hidden;
        }

        .about-gallery-main {
          border-radius: 8px;
          background: #E9EEF6;
        }

        .about-gallery-stack {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .about-gallery-small {
          width: 100%;
          height: calc(50% - 3.5px);
          overflow: hidden;
          border-radius: 8px;
          background: #E9EEF6;
        }

        .about-gallery-main img,
        .about-gallery-small img,
        .about-stat-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
          user-select: none;
          pointer-events: none;
          -webkit-user-drag: none;
        }

        /* QUOTE */
        .about-quote-section {
          width: 100%;
          min-height: 430px;
          padding: 108px 20px 86px;
          text-align: center;
          overflow-anchor: none;
        }

        .about-quote {
          width: 100%;
          max-width: 1000px;
          min-height: 115px;
          margin: 0 auto;
        }

        .about-quote-line {
          width: 100%;
          min-height: 37px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 6px;
          font-size: 25px;
          line-height: 1.5;
          font-weight: 700;
          letter-spacing: -0.035em;
        }

        .about-quote-word {
          display: inline-block;
          color: #C9D0DD;
          transition: color 0.25s ease;
        }

        .about-quote-word.is-dark {
          color: #0E0E0E;
        }

        .about-bottom-copy {
  width: 100%;
  max-width: 1100px;
  margin: 45px auto 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 18px;
  line-height: 1.55;
  text-align: center;
}

.about-bottom-line {
  display: block;
  margin: 0;
  color: #0E0E0E;
}

.about-bottom-line-1 {
  width: 100%;
  max-width: 1050px;
}

.about-bottom-line-2 {
  width: 100%;
  max-width: 900px;
}

.about-bottom-line-3 {
  width: 100%;
  max-width: 730px;
}

        /* VALUES */
        .about-values-section {
          width: 100%;
          min-height: 450px;
          padding: 54px 0 85px;
        }

        .values-header {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .values-eyebrow {
          margin: 0 0 25px;
          font-size: 11px;
          line-height: 1;
        }

        .values-title {
          margin: 0;
          font-size: 27px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: -0.035em;
        }

        .values-stage {
          position: relative;
          width: 100%;
          height: 310px;
          margin: 34px auto 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          overflow: hidden;
          touch-action: pan-y;
          user-select: none;
        }

        .value-card {
          position: relative;
          flex: 0 0 22%;
          width: 22%;
          min-height: 216px;
          padding: 20px 16px;
          border: 1px solid #D5DDE8;
          border-radius: 8px;
          background: rgba(243, 248, 255, 0.68);
          opacity: 0.96;
          will-change: transform;
          animation-duration: 2600ms;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-direction: alternate;
          animation-fill-mode: both;
        }

        /*
          Desktop pattern:
          1st card UP
          2nd card DOWN
          3rd card UP
          4th card DOWN

          Each card continuously alternates between its high/low
          positions. Hover/finger pause freezes all four together.
        */
        .value-card-top {
          animation-name: valueCardUpDown;
        }

        .value-card-bottom {
          animation-name: valueCardDownUp;
        }

        .value-card.is-paused {
          animation-play-state: paused;
        }

        @keyframes valueCardUpDown {
          0%,
          100% {
            transform: translate3d(0, -36px, 0);
          }

          50% {
            transform: translate3d(0, 36px, 0);
          }
        }

        @keyframes valueCardDownUp {
          0%,
          100% {
            transform: translate3d(0, 36px, 0);
          }

          50% {
            transform: translate3d(0, -36px, 0);
          }
        }

        .value-card h3 {
          margin: 0;
          font-size: 20px;
          line-height: 1.4;
          font-weight: 600;
          letter-spacing: -0.02em;
        }

        .value-card p {
          margin: 18px 0 0;
          font-size: 14px;
          line-height: 1.6;
        }

        /* =====================================================
           STATS
           IMAGE HEIGHT IS CONTROLLED FROM ONE PLACE:
           --stats-image-height
        ===================================================== */

        .about-stats-section {
          width: 100%;
          padding: 0 0 90px;

          /*
            Change only this variable when you want
            the right-side image height to change.
          */
          --stats-image-height: 203px;
        }

        .about-stats-list {
          width: 100%;
          min-width: 0;
        }

        .about-stat-row {
          position: relative;

          width: 100%;
          min-height: var(--stats-image-height);

          padding:
            30px 0;

          display: grid;

          /*
            LEFT  = number
            CENTER = heading
            RIGHT = image
          */
          grid-template-columns:
            170px
            minmax(0, 1fr)
            330px;

          column-gap:
            60px;

          align-items:
            center;

          border-bottom:
            1px solid #D7DFEA;

          isolation:
            isolate;
        }

        .about-stat-number {
          width: 170px;
          min-width: 170px;

          display:
            flex;

          align-items:
            center;

          justify-content:
            flex-start;

          white-space:
            nowrap;

          font-size:
            44px;

          line-height:
            1;

          font-weight:
            700;

          font-variant-numeric:
            tabular-nums;

          letter-spacing:
            -0.045em;

          color:
            #0B63E5;
        }

        .stat-value-content {
          display:
            inline-block;

          min-width:
            4.8ch;

          text-align:
            left;
        }

        .about-stat-label {
          min-width:
            0;

          padding:
            0;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          font-size:
            30px;

          line-height:
            1.25;

          font-weight:
            400;

          color:
            #0E0E0E;

          text-align:
            left;
        }

        .about-stat-image-wrap {
          position:
            relative;

          width:
            330px;

          min-width:
            330px;

          height:
            var(--stats-image-height);

          overflow:
            hidden;

          border-radius:
            10px;

          background:
            #E9EEF6;

          z-index:
            2;
        }

        .about-stat-image {
          width:
            100%;

          height:
            100%;

          display:
            block;

          object-fit:
            cover;

          object-position:
            center;

          user-select:
            none;

          pointer-events:
            none;

          -webkit-user-drag:
            none;

          will-change:
            transform,
            opacity;

          animation:
            statsImageReveal
            0.85s
            cubic-bezier(
              0.22,
              1,
              0.36,
              1
            )
            both;
        }

        @keyframes statsImageReveal {
          from {
            opacity:
              0;

            transform:
              scale(1.055)
              translateY(16px);
          }

          to {
            opacity:
              1;

            transform:
              scale(1)
              translateY(0);
          }
        }

        .about-stat-row:nth-child(1)
          .about-stat-image {
          animation-delay:
            0.05s;
        }

        .about-stat-row:nth-child(2)
          .about-stat-image {
          animation-delay:
            0.15s;
        }

        .about-stat-row:nth-child(3)
          .about-stat-image {
          animation-delay:
            0.25s;
        }

        .about-stat-row:nth-child(4)
          .about-stat-image {
          animation-delay:
            0.35s;
        }

        /* TABLET */
       /* =====================================================
   TABLET
   768px - 1199px
===================================================== */

@media (min-width: 768px) and (max-width: 1199px) {

  /* ===================================================
     CONTAINER
  =================================================== */

  .about-container {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 32px;
  }

  /* ===================================================
     INTRO
  =================================================== */

  .about-intro-section {
    width: 100%;
    min-height: auto;

    padding:
      48px 0 56px;
  }

  .about-intro-section .about-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .about-eyebrow {
    margin: 0 0 22px;

    font-size: 14px;
    line-height: 1.2;
  }

  .about-title {
    width: 100%;
    max-width: 760px;

    margin: 0;

    font-size: 28px;
    line-height: 1.2;
    font-weight: 600;

    letter-spacing: -0.035em;
  }

  /* ===================================================
     INTRO COPY
  =================================================== */

  .about-copy {
    width: 100%;
    max-width: 760px;

    margin: 26px auto 0;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .about-copy p {
    margin: 0;

    font-size: 13px;
    line-height: 1.65;

    text-align: center;
  }

  .about-copy-primary {
    width: 100%;
    max-width: 760px;
  }

  .about-copy-secondary {
    width: 100%;
    max-width: 720px;
  }

  .about-copy p + p {
    margin-top: 20px;
  }

  .about-copy strong {
    font-weight: 700;
  }

  /* ===================================================
     GALLERY
  =================================================== */

  .about-gallery-section {
    width: 100%;
    overflow: hidden;
  }

  .about-gallery {
    width: 100%;

    height: 300px;

    display: grid;

    grid-template-columns:
      1.12fr
      0.72fr
      0.95fr
      0.72fr
      1.12fr;

    gap: 5px;

    overflow: hidden;
    line-height: 0;
  }

  .about-gallery-main,
  .about-gallery-stack {
    width: 100%;
    height: 300px;

    min-width: 0;

    overflow: hidden;
  }

  .about-gallery-main {
    border-radius: 7px;
    background: #E9EEF6;
  }

  .about-gallery-stack {
    display: flex;
    flex-direction: column;

    gap: 5px;
  }

  .about-gallery-small {
    width: 100%;

    height:
      calc(50% - 2.5px);

    overflow: hidden;

    border-radius: 7px;

    background: #E9EEF6;
  }

  .about-gallery-main img,
  .about-gallery-small img,
  .about-stat-image img {
    width: 100%;
    height: 100%;

    display: block;

    object-fit: cover;
    object-position: center;

    user-select: none;
    pointer-events: none;
    -webkit-user-drag: none;
  }

  /* ===================================================
     QUOTE
  =================================================== */

  .about-quote-section {
    width: 100%;

    min-height: auto;

    padding:
      82px 32px 68px;

    text-align: center;

    overflow-anchor: none;
  }

  .about-quote {
    width: 100%;
    max-width: 820px;

    min-height: 105px;

    margin: 0 auto;
  }

  .about-quote-line {
    width: 100%;

    min-height: 34px;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-wrap: wrap;

    gap: 5px;

    font-size: 22px;
    line-height: 1.45;

    font-weight: 700;

    letter-spacing: -0.03em;
  }

  .about-quote-word {
    display: inline-block;
    color: #C9D0DD;

    transition:
      color 0.25s ease;
  }

  .about-quote-word.is-dark {
    color: #0E0E0E;
  }

  /* ===================================================
     QUOTE BOTTOM COPY
  =================================================== */

  .about-bottom-copy {
    width: 100%;
    max-width: 900px;

    margin:
      38px auto 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: 15px;
    line-height: 1.55;

    text-align: center;
  }

  .about-bottom-line {
    display: block;

    margin: 0;

    color: #0E0E0E;
  }

  .about-bottom-line-1 {
    width: 100%;
    max-width: 850px;
  }

  .about-bottom-line-2 {
    width: 100%;
    max-width: 760px;
  }

  .about-bottom-line-3 {
    width: 100%;
    max-width: 620px;
  }

  /* ===================================================
     VALUES
  =================================================== */

  .about-values-section {
    width: 100%;

    min-height: auto;

    padding:
      46px 0 72px;
  }

  .values-header {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;
  }

  .values-eyebrow {
    margin:
      0 0 20px;

    font-size: 10px;
    line-height: 1;
  }

  .values-title {
    margin: 0;

    font-size: 24px;
    line-height: 1.2;

    font-weight: 700;

    letter-spacing: -0.03em;
  }

  /* ===================================================
     VALUES CARDS
  =================================================== */

  .values-stage {
    position: relative;

    width: 100%;

    height: 275px;

    margin:
      28px auto 0;

    display: flex;

    align-items: center;
    justify-content: space-between;

    gap: 14px;

    overflow: hidden;

    touch-action: pan-y;
    user-select: none;
  }

  .value-card {
    position: relative;

    flex:
      0 0 calc(
        (100% - 42px) / 4
      );

    width:
      calc(
        (100% - 42px) / 4
      );

    min-height: 165px;

    padding:
      18px 14px;

    border:
      1px solid #D5DDE8;

    border-radius: 8px;

    background:
      rgba(
        243,
        248,
        255,
        0.68
      );

    opacity: 0.96;

    will-change: transform;

    animation-duration:
      2600ms;

    animation-timing-function:
      ease-in-out;

    animation-iteration-count:
      infinite;

    animation-direction:
      alternate;

    animation-fill-mode:
      both;
  }

  .value-card h3 {
    margin: 0;

    font-size: 17px;
    line-height: 1.35;

    font-weight: 600;

    letter-spacing:
      -0.018em;
  }

  .value-card p {
    margin:
      14px 0 0;

    font-size: 12px;
    line-height: 1.55;
  }

  /* ===================================================
     STATS
  =================================================== */

  .about-stats-section {
    width: 100%;

    padding:
      0 0 72px;

    --stats-image-height:
      135px;
  }

  .about-stats-list {
    width: 100%;
    min-width: 0;
  }

  .about-stat-row {
    position: relative;

    width: 100%;

    min-height:
      var(--stats-image-height);

    padding:
      24px 0;

    display: grid;

    grid-template-columns:
      120px
      minmax(0, 1fr)
      240px;

    column-gap:
      30px;

    align-items: center;

    border-bottom:
      1px solid #D7DFEA;

    isolation: isolate;
  }

  /* ===================================================
     STAT NUMBER
  =================================================== */

  .about-stat-number {
    width: 120px;
    min-width: 120px;

    display: flex;

    align-items: center;
    justify-content: flex-start;

    white-space: nowrap;

    font-size:
      34px;

    line-height: 1;

    font-weight: 700;

    font-variant-numeric:
      tabular-nums;

    letter-spacing:
      -0.04em;

    color:
      #0B63E5;
  }

  .stat-value-content {
    display: inline-block;

    min-width:
      4.8ch;

    text-align: left;
  }

  /* ===================================================
     STAT LABEL
  =================================================== */

  .about-stat-label {
    min-width: 0;

    padding: 0;

    display: flex;

    align-items: center;
    justify-content: center;

    font-size:
      22px;

    line-height:
      1.25;

    font-weight: 400;

    color:
      #0E0E0E;

    text-align: left;
  }

  /* ===================================================
     STAT IMAGE
  =================================================== */

  .about-stat-image-wrap {
    position: relative;

    width: 240px;
    min-width: 240px;

    height:
      var(--stats-image-height);

    overflow: hidden;

    border-radius:
      9px;

    background:
      #E9EEF6;

    z-index: 2;
  }

  .about-stat-image {
    width: 100%;
    height: 100%;

    display: block;

    object-fit: cover;
    object-position: center;

    user-select: none;
    pointer-events: none;
    -webkit-user-drag: none;

    will-change:
      transform,
      opacity;

    animation:
      statsImageReveal
      0.85s
      cubic-bezier(
        0.22,
        1,
        0.36,
        1
      )
      both;
  }
}

        /* MOBILE */
        @media (max-width: 767px) {
          .about-container { max-width: none; padding: 0 20px; }

          .about-intro-section { min-height: auto; padding: 40px 0 48px; }
          .about-eyebrow { margin-bottom: 19px; font-size: 11px; }
          .about-title { max-width: 100%; min-height: 56px; font-size: 22px; line-height: 1.25; }
          .about-copy { max-width: 100%; margin-top: 24px; }
          .about-copy p { font-size: 11px; }
          .about-copy p + p { margin-top: 18px; }

          .about-gallery { height: 205px; gap: 4px; }
          .about-gallery-main, .about-gallery-stack { height: 205px; }
          .about-gallery-main, .about-gallery-small { border-radius: 5px; }
          .about-gallery-stack { gap: 4px; }
          .about-gallery-small { height: calc(50% - 2px); }

          .about-quote-section { min-height: 350px; padding: 68px 20px 60px; }
          .about-quote { min-height: 105px; }
          .about-quote-line { min-height: 30px; gap: 4px; font-size: 20px; line-height: 1.45; }
          .about-bottom-copy { max-width: 100%; margin-top: 34px; font-size: 11px; }

          .about-values-section { padding: 38px 0 58px; }
          .values-eyebrow { margin-bottom: 18px; font-size: 10px; }
          .values-title { min-height: 26px; font-size: 21px; }

          .values-stage {
            height: auto;
            margin-top: 26px;
            flex-direction: column;
            align-items: stretch;
            justify-content: flex-start;
            gap: 14px;
            overflow: visible;
          }

          .value-card,
          .value-card:nth-child(even),
          .value-card-top,
          .value-card-bottom {
            width: 100%;
            flex: 0 0 auto;
            min-height: 0;
            margin: 0;
            padding: 18px;
            transform: none !important;
            opacity: 1;
            animation: none !important;
            transition: none;
          }

          .value-card h3 { min-height: 0; font-size: 16px; }
          .value-card p { margin-top: 12px; font-size: 9px; }

          .about-stats-section {
            padding:
              0 0 56px;

            --stats-image-height:
              190px;
          }

          .about-stat-row {
            width:
              100%;

            min-height:
              0;

            padding:
              24px 0;

            display:
              grid;

            grid-template-columns:
              96px
              minmax(0, 1fr);

            column-gap:
              18px;

            row-gap:
              18px;

            align-items:
              center;
          }

          .about-stat-number {
            width:
              96px;

            min-width:
              96px;

            font-size:
              27px;
          }

          .stat-value-content {
            min-width:
              4.8ch;
          }

          .about-stat-label {
            min-width:
              0;

            font-size:
              17px;

            line-height:
              1.25;
          }

          .about-stat-image-wrap {
            width:
              100%;

            min-width:
              0;

            height:
              var(--stats-image-height);

            grid-column:
              1 / -1;

            border-radius:
              8px;
          }

          .about-stat-image {
            width:
              100%;

            height:
              100%;

            border-radius:
              8px;
          }
        }

        /* SMALL MOBILE */
        @media (max-width: 420px) {
          .about-intro-section { min-height: auto; padding: 34px 0 42px; }
          .about-title { min-height: 52px; font-size: 20px; }
          .about-copy p { font-size: 10px; }
          .about-gallery, .about-gallery-main, .about-gallery-stack { height: 175px; }
          .about-quote-section { min-height: 320px; padding: 56px 20px 50px; }
          .about-quote-line { min-height: 27px; font-size: 18px; }
          .about-bottom-copy { min-height: 50px; font-size: 10px; }
          .about-bottom-copy {
  max-width: 100%;
  margin-top: 34px;
  font-size: 11px;
  line-height: 1.65;
}

.about-bottom-line-1,
.about-bottom-line-2,
.about-bottom-line-3 {
  width: 100%;
  max-width: 100%;
}
          .values-title { font-size: 20px; }
          .about-stats-section {
            --stats-image-height:
              160px;
          }

          .about-stat-row {
            grid-template-columns:
              90px
              minmax(0, 1fr);

            column-gap:
              15px;

            padding:
              20px 0;
          }

          .about-stat-number {
            width:
              90px;

            min-width:
              90px;

            font-size:
              24px;
          }

          .about-stat-label {
            font-size:
              15px;
          }

          .about-stat-image-wrap {
            height:
              var(--stats-image-height);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-quote-word,
          .value-card {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>
   
    </main>
  );
}