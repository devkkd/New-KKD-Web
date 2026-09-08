"use client";

import { useEffect, useRef } from "react";

const content = {
  heading: "We're in a Different Business Outcomes",
  paragraph1:
    "Every engagement we take begins with one question what does success actually look like for you? and ends only when we've delivered it.",
  paragraph2:
    "We've been doing this for 5 years, 100+ products, $5M+ raised by our clients. Tens of millions of users served. We don't have a template for your project. We have something better experience.",
};

function buildCharSpans(container, text) {
  container.innerHTML = "";
  text.split("").forEach((ch) => {
    const span = document.createElement("span");
    span.className = "bo-char";
    span.dataset.char = ch;
    span.textContent = ch;
    container.appendChild(span);
  });
}

function typeReveal({ container, cursorEl, generationRef, myGeneration, typingSpeed, glitch, onDone }) {
  const spans = Array.from(container.querySelectorAll(".bo-char"));
  const total = spans.length;

  if (total === 0) {
    onDone && onDone();
    return;
  }

  let completed = 0;

  function finishChar() {
    completed++;
    if (completed === total) {
      if (cursorEl && cursorEl.parentNode) cursorEl.parentNode.removeChild(cursorEl);
      onDone && onDone();
    }
  }

  spans.forEach((span, index) => {
    const startDelay = index * typingSpeed;

    setTimeout(() => {
      if (generationRef.current !== myGeneration) return;

      if (cursorEl) {
        const next = spans[index + 1];
        if (next) container.insertBefore(cursorEl, next);
        else container.appendChild(cursorEl);
      }

      const finalChar = span.dataset.char;
      span.classList.add("visible");

      const shouldGlitch = glitch && finalChar !== " " && Math.random() < glitch.chance;

      if (!shouldGlitch) {
        span.textContent = finalChar;
        finishChar();
        return;
      }

      const cycles = Math.max(
        1,
        Math.round(
          glitch.cycles +
            (Math.random() * 2 - 1) * (glitch.cycleVariance || 0) * glitch.cycles
        )
      );
      let cycle = 0;

      function tickGlitch() {
        if (generationRef.current !== myGeneration) return;

        if (cycle >= cycles) {
          span.textContent = finalChar;
          finishChar();
          return;
        }

        const progress = cycle / cycles;
        const bias = progress + (Math.random() * 2 - 1) * (glitch.symbolsVariance || 0);
        const pool = glitch.symbolsEnd && bias > 0.5 ? glitch.symbolsEnd : glitch.symbolsStart;
        span.textContent = pool[Math.floor(Math.random() * pool.length)];
        cycle++;
        setTimeout(tickGlitch, glitch.interval);
      }

      tickGlitch();
    }, startDelay);
  });
}

export default function BusinessOutcomesSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const para1Ref = useRef(null);
  const para2Ref = useRef(null);
  const generationRef = useRef(0);

  useEffect(() => {
  const section = sectionRef.current;

  if (!section) return;

  buildCharSpans(
    headingRef.current,
    content.heading
  );

  buildCharSpans(
    para1Ref.current,
    content.paragraph1
  );

  buildCharSpans(
    para2Ref.current,
    content.paragraph2
  );

  const prefersReducedMotion =
    window.matchMedia &&
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

  /*
   * ==========================================
   * REDUCED MOTION
   * ==========================================
   */

  if (prefersReducedMotion) {
    [headingRef, para1Ref, para2Ref].forEach(
      (ref) => {
        if (!ref.current) return;

        ref.current
          .querySelectorAll(".bo-char")
          .forEach((span) => {
            span.classList.add("visible");
          });
      }
    );

    return;
  }

  /*
   * ==========================================
   * CURSOR
   * ==========================================
   */

  const cursor =
    document.createElement("span");

  cursor.className = "bo-caret";

  /*
   * ==========================================
   * TIMERS
   * ==========================================
   */

  const timers = [];

  let destroyed = false;

  /*
   * ==========================================
   * RESET
   * ==========================================
   */

  function resetAll() {
    generationRef.current++;

    [
      headingRef,
      para1Ref,
      para2Ref,
    ].forEach((ref) => {
      if (!ref.current) return;

      ref.current
        .querySelectorAll(".bo-char")
        .forEach((span) => {
          span.classList.remove(
            "visible"
          );

          span.textContent =
            span.dataset.char;
        });
    });

    if (
      cursor.parentNode
    ) {
      cursor.parentNode.removeChild(
        cursor
      );
    }
  }

  /*
   * ==========================================
   * SEQUENCE
   * ==========================================
   */

  function playSequence() {
    if (destroyed) return;

    /*
     * New generation
     */
    generationRef.current++;

    const myGen =
      generationRef.current;

    /*
     * ----------------------------------------
     * HEADING
     * ----------------------------------------
     */

    typeReveal({
      container: headingRef.current,
      cursorEl: cursor,
      generationRef,
      myGeneration: myGen,
      typingSpeed: 45,

      onDone: () => {
        if (destroyed) return;

        /*
         * Small pause after heading
         */
        const timer = setTimeout(() => {
          if (destroyed) return;

          /*
           * ----------------------------------
           * FIRST PARAGRAPH
           * ----------------------------------
           */

          typeReveal({
            container:
              para1Ref.current,

            cursorEl: cursor,

            generationRef,
            myGeneration: myGen,

            typingSpeed: 16,

            glitch: {
              cycles: 10,
              interval: 100,
              chance: 1,

              symbolsStart:
                "■▇▆▅▄▃▃▁▉▊▌▍▎▏",

              symbolsEnd:
                null,
            },

            onDone: () => {
              if (destroyed) return;

              /*
               * Small pause before second
               * paragraph.
               */

              const timer2 =
                setTimeout(() => {
                  if (destroyed) return;

                  /*
                   * ------------------------
                   * SECOND PARAGRAPH
                   * ------------------------
                   */

                  typeReveal({
                    container:
                      para2Ref.current,

                    cursorEl:
                      cursor,

                    generationRef,
                    myGeneration:
                      myGen,

                    typingSpeed: 7,

                    glitch: {
                      cycles: 50,
                      cycleVariance:
                        0.4,

                      interval: 50,
                      chance: 0.99,

                      symbolsStart:
                        "-",

                      symbolsEnd:
                        "0123456789",

                      symbolsVariance:
                        0.5,
                    },

                    onDone: () => {
                      if (
                        destroyed
                      ) {
                        return;
                      }

                      /*
                       * =================================
                       * CONTENT COMPLETE
                       * =================================
                       *
                       * Ab complete content user
                       * padh sakta hai.
                       */

                      const readingTimer =
                        setTimeout(
                          () => {
                            if (
                              destroyed
                            ) {
                              return;
                            }

                            /*
                             * Cursor hatao
                             */
                            if (
                              cursor.parentNode
                            ) {
                              cursor.parentNode.removeChild(
                                cursor
                              );
                            }

                            /*
                             * =================================
                             * NEXT CYCLE
                             * =================================
                             *
                             * Full animation dobara.
                             */

                            const nextCycle =
                              setTimeout(
                                () => {
                                  if (
                                    destroyed
                                  ) {
                                    return;
                                  }

                                  resetAll();

                                  /*
                                   * Small restart pause
                                   */
                                  const restartTimer =
                                    setTimeout(
                                      () => {
                                        if (
                                          destroyed
                                        ) {
                                          return;
                                        }

                                        playSequence();
                                      },
                                      350
                                    );

                                  timers.push(
                                    restartTimer
                                  );
                                },
                                10000
                              );

                            timers.push(
                              nextCycle
                            );
                          },
                          3500
                        );

                      timers.push(
                        readingTimer
                      );
                    },
                  });
                }, 450);

              timers.push(timer2);
            },
          });
        }, 350);

        timers.push(timer);
      },
    });
  }

  /*
   * ==========================================
   * PAGE LOAD
   * ==========================================
   *
   * Page load ke baad automatically start.
   * Section visible hona zaroori nahi.
   */

  const initialTimer =
    setTimeout(() => {
      if (!destroyed) {
        resetAll();
        playSequence();
      }
    }, 700);

  timers.push(initialTimer);

  /*
   * ==========================================
   * CLEANUP
   * ==========================================
   */

  return () => {
    destroyed = true;

    generationRef.current++;

    timers.forEach((timer) => {
      clearTimeout(timer);
    });

    timers.length = 0;

    if (
      cursor.parentNode
    ) {
      cursor.parentNode.removeChild(
        cursor
      );
    }
  };
}, []);

  return (
    <section className="bo-section" ref={sectionRef}>
      <div className="bo-inner">
        <h2 className="bo-heading">
          <span className="bo-visually-hidden">{content.heading}</span>
          <span className="bo-chars" aria-hidden="true" ref={headingRef}></span>
        </h2>

        <p className="bo-paragraph-primary">
          <span className="bo-visually-hidden">{content.paragraph1}</span>
          <span className="bo-chars" aria-hidden="true" ref={para1Ref}></span>
        </p>

        <p className="bo-paragraph-secondary">
          <span className="bo-visually-hidden">{content.paragraph2}</span>
          <span className="bo-chars" aria-hidden="true" ref={para2Ref}></span>
        </p>
      </div>

      <style jsx>{`
        .bo-section {
          background: #f3f8ff;
          padding: 50px 24px;
          width: 100%;
          font-family: "Britti Sans Trial", sans-serif;
        }

        .bo-inner {
          max-width: 980px;
          margin: 0 auto;
          text-align: center;
        }

        .bo-heading {
          font-family: "Britti Sans Trial", sans-serif;
          font-weight: 800;
          font-size: clamp(26px, 4.2vw, 42px);
          line-height: 1.2;
          color: #0e0e0e;
          margin: 0 0 28px 0;
        }

        .bo-paragraph-primary {
          font-family: "Britti Sans Trial", sans-serif;
          font-weight: 600;
          font-size: clamp(16px, 2.1vw, 20px);
          line-height: 1.6;
          color: #0e0e0e;
          margin: 0 0 20px 0;
        }

        .bo-paragraph-secondary {
         font-family: "Britti Sans Trial", sans-serif;
          font-weight: 600;
          font-size: clamp(16px, 2.1vw, 20px);
          line-height: 1.6;
          color: #0e0e0e;
          margin: 0 0 20px 0;
        }

        .bo-chars :global(.bo-char) {
          opacity: 0;
          transition: opacity 0.18s ease-in;
        }

        .bo-chars :global(.bo-char.visible) {
          opacity: 1;
        }

        .bo-chars :global(.bo-caret) {
          display: inline-block;
          width: 0;
          height: 1em;
          vertical-align: bottom;
          border-right: 0.12em solid currentColor;
          margin-right: -0.12em;
          animation: bo-blink-caret 0.75s step-end infinite;
        }

        @keyframes bo-blink-caret {
          from,
          to {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        .bo-visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        @media (max-width: 900px) {
          .bo-section {
            padding: 64px 20px;
          }
        }

        @media (max-width: 600px) {
          .bo-section {
            padding: 48px 16px;
          }
          .bo-inner {
            max-width: 100%;
          }
        }

        @media (max-width: 380px) {
          .bo-heading {
            margin-bottom: 20px;
          }
          .bo-paragraph-primary {
            margin-bottom: 16px;
          }
        }
      `}</style>
    </section>
  );
}