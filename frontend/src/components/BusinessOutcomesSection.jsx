"use client";

import {
  useEffect,
  useRef,
} from "react";

/* =========================================================
   CONTENT
========================================================= */

const content = {
  heading:
    "We're in a Different Business Outcomes",

  paragraph1:
    "Every engagement we take begins with one question what does success actually look like for you? and ends only when we've delivered it.",

  paragraph2:
    "We've been doing this for 5 years, 100+ products, $5M+ raised by our clients. Tens of millions of users served. We don't have a template for your project. We have something better experience.",
};

/* =========================================================
   BUILD CHARACTER SPANS
========================================================= */

function buildCharSpans(
  container,
  text
) {
  if (!container) return;

  const fragment =
    document.createDocumentFragment();

  for (
    let i = 0;
    i < text.length;
    i += 1
  ) {
    const span =
      document.createElement(
        "span"
      );

    const character =
      text[i];

    span.className =
      "bo-char";

    span.dataset.char =
      character;

    span.textContent =
      character;

    fragment.appendChild(
      span
    );
  }

  /*
    One DOM replacement instead of
    repeatedly mutating innerHTML.
  */
  container.replaceChildren(
    fragment
  );
}

/* =========================================================
   SAFE CURSOR REMOVE
========================================================= */

function removeCursor(
  cursorEl
) {
  if (
    cursorEl &&
    cursorEl.parentNode
  ) {
    cursorEl.parentNode.removeChild(
      cursorEl
    );
  }
}

/* =========================================================
   TYPE / GLITCH REVEAL
========================================================= */

function typeReveal({
  container,
  cursorEl,
  generationRef,
  myGeneration,
  typingSpeed,
  glitch,
  schedule,
  onDone,
}) {
  if (
    !container ||
    generationRef.current !==
      myGeneration
  ) {
    return;
  }

  const spans = Array.from(
    container.querySelectorAll(
      ".bo-char"
    )
  );

  const total =
    spans.length;

  if (!total) {
    onDone?.();
    return;
  }

  let completed = 0;

  const isActive = () =>
    generationRef.current ===
      myGeneration &&
    container.isConnected;

  const moveCursor = (
    index
  ) => {
    if (
      !cursorEl ||
      !isActive()
    ) {
      return;
    }

    const next =
      spans[index + 1];

    /*
      DOM automatically moves the
      existing cursor when inserted.
    */

    if (next) {
      container.insertBefore(
        cursorEl,
        next
      );
    } else {
      container.appendChild(
        cursorEl
      );
    }
  };

  const finishChar = () => {
    completed += 1;

    if (
      completed >= total
    ) {
      removeCursor(
        cursorEl
      );

      onDone?.();
    }
  };

  /*
    IMPORTANT:
    Keep the ORIGINAL behaviour:
    every character gets its own
    scheduled start time.

    This preserves the exact same
    animation speed and overlapping
    glitch behaviour.
  */

  spans.forEach(
    (span, index) => {
      const startDelay =
        index *
        typingSpeed;

      schedule(
        () => {
          if (
            !isActive()
          ) {
            return;
          }

          moveCursor(
            index
          );

          const finalChar =
            span.dataset.char ||
            "";

          span.classList.add(
            "visible"
          );

          const shouldGlitch =
            Boolean(glitch) &&
            finalChar !== " " &&
            Math.random() <
              glitch.chance;

          /* =====================================
             NORMAL CHARACTER
          ====================================== */

          if (
            !shouldGlitch
          ) {
            span.textContent =
              finalChar;

            finishChar();

            return;
          }

          /* =====================================
             GLITCH CHARACTER
          ====================================== */

          const variance =
            glitch.cycleVariance ||
            0;

          const baseCycles =
            glitch.cycles || 1;

          const cycles =
            Math.max(
              1,
              Math.round(
                baseCycles +
                  (Math.random() *
                    2 -
                    1) *
                    variance *
                    baseCycles
              )
            );

          let cycle = 0;

          const tickGlitch =
            () => {
              if (
                !isActive()
              ) {
                return;
              }

              if (
                cycle >=
                cycles
              ) {
                span.textContent =
                  finalChar;

                finishChar();

                return;
              }

              const progress =
                cycle /
                cycles;

              const bias =
                progress +
                (Math.random() *
                  2 -
                  1) *
                  (glitch.symbolsVariance ||
                    0);

              const symbolsStart =
                glitch.symbolsStart ||
                "!<>-_\\/[]{}—=+*^?#_@";

              const symbolsEnd =
                glitch.symbolsEnd ||
                symbolsStart;

              const pool =
                symbolsEnd !==
                  symbolsStart &&
                bias > 0.5
                  ? symbolsEnd
                  : symbolsStart;

              if (
                pool.length
              ) {
                span.textContent =
                  pool[
                    Math.floor(
                      Math.random() *
                        pool.length
                    )
                  ];
              }

              cycle += 1;

              /*
                IMPORTANT:
                Track every glitch timer
                through the same scheduler.
              */
              schedule(
                tickGlitch,
                glitch.interval
              );
            };

          tickGlitch();
        },
        startDelay
      );
    }
  );
}

/* =========================================================
   BUSINESS OUTCOMES SECTION
========================================================= */

export default function BusinessOutcomesSection() {
  const sectionRef =
    useRef(null);

  const headingRef =
    useRef(null);

  const para1Ref =
    useRef(null);

  const para2Ref =
    useRef(null);

  const generationRef =
    useRef(0);

  useEffect(() => {
    const section =
      sectionRef.current;

    const heading =
      headingRef.current;

    const para1 =
      para1Ref.current;

    const para2 =
      para2Ref.current;

    if (
      !section ||
      !heading ||
      !para1 ||
      !para2
    ) {
      return undefined;
    }

    /* =========================================
       BUILD DOM ONCE
    ========================================== */

    buildCharSpans(
      heading,
      content.heading
    );

    buildCharSpans(
      para1,
      content.paragraph1
    );

    buildCharSpans(
      para2,
      content.paragraph2
    );

    /* =========================================
       REDUCED MOTION
    ========================================== */

    const prefersReducedMotion =
      window.matchMedia?.(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    if (
      prefersReducedMotion
    ) {
      [
        heading,
        para1,
        para2,
      ].forEach(
        (container) => {
          container
            .querySelectorAll(
              ".bo-char"
            )
            .forEach(
              (span) => {
                span.classList.add(
                  "visible"
                );

                span.textContent =
                  span.dataset.char ||
                  "";
              }
            );
        }
      );

      return undefined;
    }

    /* =========================================
       CURSOR
    ========================================== */

    const cursor =
      document.createElement(
        "span"
      );

    cursor.className =
      "bo-caret";

    /* =========================================
       CENTRAL TIMER MANAGER
    ========================================== */

    const timers =
      new Set();

    let destroyed =
      false;

    const schedule = (
      callback,
      delay = 0
    ) => {
      if (
        destroyed
      ) {
        return null;
      }

      const timer =
        window.setTimeout(
          () => {
            timers.delete(
              timer
            );

            if (
              destroyed
            ) {
              return;
            }

            callback();
          },
          Math.max(
            0,
            delay
          )
        );

      timers.add(
        timer
      );

      return timer;
    };

    const clearAllTimers =
      () => {
        timers.forEach(
          (timer) => {
            window.clearTimeout(
              timer
            );
          }
        );

        timers.clear();
      };

    /* =========================================
       RESET
    ========================================== */

    const resetAll =
      () => {
        generationRef.current +=
          1;

        clearAllTimers();

        [
          heading,
          para1,
          para2,
        ].forEach(
          (container) => {
            const spans =
              container.querySelectorAll(
                ".bo-char"
              );

            spans.forEach(
              (span) => {
                span.classList.remove(
                  "visible"
                );

                span.textContent =
                  span.dataset.char ||
                  "";
              }
            );
          }
        );

        removeCursor(
          cursor
        );
      };

    /* =========================================
       COMPLETE SEQUENCE
    ========================================== */

    const playSequence =
      () => {
        if (
          destroyed
        ) {
          return;
        }

        generationRef.current +=
          1;

        const myGeneration =
          generationRef.current;

        /* =====================================
           1. HEADING
        ====================================== */

        typeReveal({
          container:
            heading,

          cursorEl:
            cursor,

          generationRef,

          myGeneration,

          /*
            ORIGINAL SPEED
          */
          typingSpeed:
            45,

          glitch:
            null,

          schedule,

          onDone:
            () => {
              if (
                destroyed ||
                generationRef.current !==
                  myGeneration
              ) {
                return;
              }

              /* =================================
                 ORIGINAL 350ms PAUSE
              ================================= */

              schedule(
                () => {
                  /* ===============================
                     2. PARAGRAPH 1
                  =============================== */

                  typeReveal({
                    container:
                      para1,

                    cursorEl:
                      cursor,

                    generationRef,

                    myGeneration,

                    /*
                      ORIGINAL SPEED
                    */
                    typingSpeed:
                      16,

                    schedule,

                    glitch: {
                      cycles:
                        10,

                      interval:
                        100,

                      chance:
                        1,

                      symbolsStart:
                        "■▇▆▅▄▃▃▁▉▊▌▍▎▏",

                      symbolsEnd:
                        null,
                    },

                    onDone:
                      () => {
                        if (
                          destroyed ||
                          generationRef.current !==
                            myGeneration
                        ) {
                          return;
                        }

                        /* =========================
                           ORIGINAL 450ms PAUSE
                        ========================== */

                        schedule(
                          () => {
                            /* =======================
                               3. PARAGRAPH 2
                            ======================== */

                            typeReveal({
                              container:
                                para2,

                              cursorEl:
                                cursor,

                              generationRef,

                              myGeneration,

                              /*
                                ORIGINAL SPEED
                              */
                              typingSpeed:
                                7,

                              schedule,

                              glitch:
                                {
                                  cycles:
                                    50,

                                  cycleVariance:
                                    0.4,

                                  interval:
                                    50,

                                  chance:
                                    0.99,

                                  symbolsStart:
                                    "-",

                                  symbolsEnd:
                                    "0123456789",

                                  symbolsVariance:
                                    0.5,
                                },

                              onDone:
                                () => {
                                  if (
                                    destroyed ||
                                    generationRef.current !==
                                      myGeneration
                                  ) {
                                    return;
                                  }

                                  /* =================
                                     READING TIME
                                     ORIGINAL 3500ms
                                  ================== */

                                  schedule(
                                    () => {
                                      if (
                                        destroyed ||
                                        generationRef.current !==
                                          myGeneration
                                      ) {
                                        return;
                                      }

                                      removeCursor(
                                        cursor
                                      );

                                      /* =================
                                         NEXT CYCLE
                                         ORIGINAL 10000ms
                                      ================== */

                                      schedule(
                                        () => {
                                          if (
                                            destroyed
                                          ) {
                                            return;
                                          }

                                          resetAll();

                                          /* ===============
                                             RESTART PAUSE
                                             ORIGINAL 350ms
                                          ================ */

                                          schedule(
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
                                        },
                                        10000
                                      );
                                    },
                                    3500
                                  );
                                },
                            });
                          },
                          450
                        );
                      },
                  });
                },
                350
              );
            },
        });
      };

    /* =========================================
       INITIAL START
       ORIGINAL 700ms + 50ms
    ========================================== */

    schedule(
      () => {
        if (
          destroyed
        ) {
          return;
        }

        resetAll();

        schedule(
          () => {
            if (
              !destroyed
            ) {
              playSequence();
            }
          },
          50
        );
      },
      700
    );

    /* =========================================
       CLEANUP
    ========================================== */

    return () => {
      destroyed = true;

      generationRef.current +=
        1;

      clearAllTimers();

      removeCursor(
        cursor
      );
    };
  }, []);

  return (
    <section
      className="bo-section"
      ref={sectionRef}
    >
      <div className="bo-inner">
        {/* =====================================
            HEADING
        ====================================== */}

        <h2 className="bo-heading">
          <span className="bo-visually-hidden">
            {content.heading}
          </span>

          <span
            className="bo-chars"
            aria-hidden="true"
            ref={headingRef}
          ></span>
        </h2>

        {/* =====================================
            PARAGRAPH 1
        ====================================== */}

        <p className="bo-paragraph-primary">
          <span className="bo-visually-hidden">
            {content.paragraph1}
          </span>

          <span
            className="bo-chars"
            aria-hidden="true"
            ref={para1Ref}
          ></span>
        </p>

        {/* =====================================
            PARAGRAPH 2
        ====================================== */}

        <p className="bo-paragraph-secondary">
          <span className="bo-visually-hidden">
            {content.paragraph2}
          </span>

          <span
            className="bo-chars"
            aria-hidden="true"
            ref={para2Ref}
          ></span>
        </p>
      </div>

      <style jsx>{`
        /* =========================================
           SECTION
        ========================================== */

        .bo-section {
          background: #f3f8ff;
          padding: 50px 24px;
          width: 100%;
          font-family: "Britti Sans Trial", sans-serif;
        }

        /* =========================================
           INNER
        ========================================== */

        .bo-inner {
          max-width: 980px;
          margin: 0 auto;
          text-align: center;
        }

        /* =========================================
           HEADING
        ========================================== */

        .bo-heading {
          font-family: "Britti Sans Trial", sans-serif;
          font-weight: 800;
          font-size: clamp(26px, 4.2vw, 42px);
          line-height: 1.2;
          color: #0e0e0e;
          margin: 0 0 28px 0;
        }

        /* =========================================
           PRIMARY PARAGRAPH
        ========================================== */

        .bo-paragraph-primary {
          font-family: "Britti Sans Trial", sans-serif;
          font-weight: 600;
          font-size: clamp(16px, 2.1vw, 20px);
          line-height: 1.6;
          color: #0e0e0e;
          margin: 0 0 20px 0;
        }

        /* =========================================
           SECONDARY PARAGRAPH
        ========================================== */

        .bo-paragraph-secondary {
          font-family: "Britti Sans Trial", sans-serif;
          font-weight: 600;
          font-size: clamp(16px, 2.1vw, 20px);
          line-height: 1.6;
          color: #0e0e0e;
          margin: 0 0 20px 0;
        }

        /* =========================================
           CHARACTER REVEAL
        ========================================== */

        .bo-chars {
          display: inline;
        }

        .bo-chars :global(.bo-char) {
          opacity: 0;
          transition: opacity 0.18s ease-in;
        }

        .bo-chars :global(.bo-char.visible) {
          opacity: 1;
        }

        /* =========================================
           CARET
        ========================================== */

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

        /* =========================================
           SCREEN READER
        ========================================== */

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

        /* =========================================
           TABLET
        ========================================== */

        @media (max-width: 900px) {
          .bo-section {
            padding: 64px 20px;
          }
        }

        /* =========================================
           MOBILE
        ========================================== */

        @media (max-width: 600px) {
          .bo-section {
            padding: 48px 16px;
          }

          .bo-inner {
            max-width: 100%;
          }
        }

        /* =========================================
           SMALL MOBILE
        ========================================== */

        @media (max-width: 380px) {
          .bo-heading {
            margin-bottom: 20px;
          }

          .bo-paragraph-primary {
            margin-bottom: 16px;
          }
        }

        /* =========================================
           REDUCED MOTION
        ========================================== */

        @media (
          prefers-reduced-motion: reduce
        ) {
          .bo-chars :global(.bo-char) {
            opacity: 1;
            transition: none;
          }

          .bo-chars :global(.bo-caret) {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}