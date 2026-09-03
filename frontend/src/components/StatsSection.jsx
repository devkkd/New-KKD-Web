"use client";

import { useEffect, useRef, useState } from "react";

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

function StatCard({ stat }) {
  const [value, setValue] = useState(0);
  const cardRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const duration = 1500;
            const startTime = performance.now();

            const step = (now) => {
              const progress = Math.min((now - startTime) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = stat.target * eased;
              setValue(current);
              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                setValue(stat.target);
              }
            };
            requestAnimationFrame(step);
            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [stat.target]);

  return (
    <div className="stat-card" ref={cardRef}>
      <div className="stat-card-top">
        <div className="stat-number">
          {value.toFixed(stat.decimals)}
          {stat.suffix}
        </div>
        <div className="stat-label">
          {stat.label}
          <br />
          {stat.labelLine2}
        </div>
      </div>
      <div className="stat-card-image">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={stat.image} alt={stat.alt} />
      </div>

      <style jsx>{`
        .stat-card {
          background: #ffffff;
          border: 1px solid #e3ecfa;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(1, 128, 253, 0.06);
          display: flex;
          flex-direction: column;
        }

       .stat-card-top {
  padding: 34px 34px 34px 34px;

  display: flex;
  align-items: flex-start;

  gap: 22px;
}

       .stat-number {
  flex-shrink: 0;

  font-family: "Britti Sans Trial", sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 0.95;

  background:
    linear-gradient(
      180deg,
      #0180fd 0%,
      #0021af 100%
    );

  -webkit-background-clip: text;
  background-clip: text;

  -webkit-text-fill-color: transparent;

  display: inline-block;

  margin: 0;
}

      .stat-label {
  padding-top: 0px;

  font-family:
    "Britti Sans Trial",
    sans-serif;

  font-weight: 400;

  font-size: 15px;

  line-height: 1.25;

  color: #16181d;
}

        .stat-card-image {
          width: 100%;
          height: 260px;
          overflow: hidden;
        }

        .stat-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
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
    padding: 16px 14px;

    display: flex;
    align-items: flex-start;

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
      `}</style>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stats-grid">
        {stats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </div>

      <style jsx>{`
        .stats-section {
          background: #f3f8ff;
          padding: 64px 24px;
          width: 100%;
        }

        .stats-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        @media (max-width: 900px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 600px) {
          .stats-section {
            padding: 40px 16px;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
        }
      `}</style>
    </section>
  );
}