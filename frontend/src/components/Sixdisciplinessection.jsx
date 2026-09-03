const disciplines = [
  {
    id: 1,
    number: "01.",
    title: "Web & Mobile Development",
    text: "Cross-platform applications built for scale, performance, and the kind of UX that keeps users coming back. We build the products your competitors wish they had.",
    image: "/home/six/1.png",
  },
  {
    id: 2,
    number: "02.",
    title: "AI & Machine Learning",
    text: "Not AI for the press release. AI that automates the work eating your team's time, predicts what competitors can't see coming, and compounds in value every week.",
    image: "/home/six/2.png",
  },
  {
    id: 3,
    number: "03.",
    title: "UI/UX Design & Strategy",
    text: "Design is the strategy made visible. Experiences that convert, retain, and generate the most valuable marketing of all word of mouth.",
    image: "/home/six/3.png",
  },
  {
    id: 4,
    number: "04.",
    title: "E-Commerce Engineering",
    text: "Revenue-engineered commerce platforms. From headless Shopify Plus to fully custom marketplace infrastructure. Built to sell.",
    image: "/home/six/4.png",
  },
  {
    id: 5,
    number: "05.",
    title: "Cloud & DevOps",
    text: "The invisible layer that separates products that scale from products that collapse. Infrastructure that engineers respect and business leaders sleep soundly with.",
    image: "/home/six/5.png",
  },
  {
    id: 6,
    number: "06.",
    title: "Digital Growth Engineering",
    text: "We don't run ads. We build growth systems SEO architectures, performance funnels, automation engines that compound long after the campaign ends.",
    image: "/home/six/6.png",
  },
];

function KnowMoreButton() {
  return (
    <button
      type="button"
      aria-label="Know more"
      style={{
        width: "145px",
        height: "44px",

        padding: "0 20px",

        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",

        gap: "7px",

        border: "1.4px solid #0E0E0E",
        borderRadius: "999px",

        background: "transparent",
        color: "#0E0E0E",

        fontFamily:
          "'Britti Sans Trial', Arial, Helvetica, sans-serif",

        fontSize: "13px",
        fontWeight: 400,

        lineHeight: 1,

        cursor: "pointer",

        boxSizing: "border-box",

      transition:
  "background 0.25s ease, color 0.25s ease, border-color 0.25s ease, transform 0.25s ease",

        alignSelf: "flex-start",
      }}
    onMouseEnter={(e) => {
  e.currentTarget.style.background =
    "linear-gradient(90deg, #0180FD 0%, #0021AF 100%)";

  e.currentTarget.style.color =
    "#FFFFFF";

  e.currentTarget.style.borderColor =
    "transparent";

  e.currentTarget.style.transform =
    "translateY(-2px)";
}}

onMouseLeave={(e) => {
  e.currentTarget.style.background =
    "transparent";

  e.currentTarget.style.color =
    "#0E0E0E";

  e.currentTarget.style.borderColor =
    "#0E0E0E";

  e.currentTarget.style.transform =
    "translateY(0)";
}}
    >
      <span>Know More  ➢</span>


    </button>
  );
}
export default function SixDisciplinesSection() {
  return (
    <section className="disc-section">
      <div className="disc-grid">
        <div className="disc-header">
          <h2 className="disc-title">Six Disciplines</h2>
          <h3 className="disc-subtitle">
            One Obsession: Building Things That Win
          </h3>
          <p className="disc-intro">
            We don&apos;t offer a menu of services you pick from like a takeaway.
            We offer a complete, integrated capability that covers the
            entire product lifecycle from the first whiteboard sketch to
            the thousandth production deploy.
          </p>
        </div>

        {disciplines.map((item, index) => (
          <div className={`disc-card card-pos-${index + 1}`} key={item.id}>
            <div className="disc-image-area">
              <div className="disc-image-spin">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="disc-image"
                />
              </div>
              <div className="disc-shadow" />
            </div>

            <div className="disc-number">{item.number}</div>
            <h4 className="disc-card-title">{item.title}</h4>
            <p className="disc-card-text">{item.text}</p>

            <KnowMoreButton />
          </div>
        ))}
      </div>

      <style jsx>{`
        .disc-section {
          background: #f3f8ff;
          width: 100%;
          padding: 64px 62px 96px 62px;
        }

        .disc-grid {
          max-width: 1440px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-areas:
            "header header c1 c2"
            "c3 c4 c5 c6";
          gap: 24px;
        }

        .disc-header {
          grid-area: header;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding-right: 24px;
        }

        .disc-title {
          font-family: "Britti Sans Trial", sans-serif;
          font-weight: 600;
          font-size: 30px;
          line-height: 1.2;
          color: #0e0e0e;
          margin: 0 0 20px 0;
        }

        .disc-subtitle {
          font-family: "Britti Sans Trial", sans-serif;
          font-weight: 600;
          font-size: 18px;
          line-height: 1.35;
          color: #0e0e0e;
          margin: 0 0 16px 0;
        }

        .disc-intro {
          font-family: "Britti Sans Trial", sans-serif;
          font-weight: 400;
          font-size: 13px;
          line-height: 1.65;
          color: #0e0e0e;
          margin: 0;
          max-width: 440px;
        }

        .card-pos-1 {
          grid-area: c1;
        }
        .card-pos-2 {
          grid-area: c2;
        }
        .card-pos-3 {
          grid-area: c3;
        }
        .card-pos-4 {
          grid-area: c4;
        }
        .card-pos-5 {
          grid-area: c5;
        }
        .card-pos-6 {
          grid-area: c6;
        }

       .disc-card {
  min-height: 320px;
  height: 420px;

  background: #F3F8FF;
  border: 1px solid #e3ecfa;
  border-radius: 15px;
  padding: 24px;

  display: flex;
  flex-direction: column;

  box-sizing: border-box;
}

        .disc-image-area {
          position: relative;
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          perspective: 700px;
        }

        .disc-image-spin {
          transform-style: preserve-3d;
          animation: spin3d 7s ease-in-out infinite;
        }

        .disc-card:nth-child(odd) .disc-image-spin {
          animation-delay: -1.5s;
        }

        .disc-card:nth-child(3n) .disc-image-spin {
          animation-delay: -3.2s;
        }

        .disc-image {
          width: 138px;
          height: 138px;
          object-fit: contain;
          display: block;
        }

        .disc-shadow {
          position: absolute;
          bottom: 6px;
          left: 50%;
          width: 64px;
          height: 14px;
          background: radial-gradient(
            ellipse at center,
            rgba(1, 33, 175, 0.22) 0%,
            rgba(1, 33, 175, 0) 72%
          );
          border-radius: 50%;
          transform: translateX(-50%);
          animation: shadowPulse 7s ease-in-out infinite;
        }

        .disc-card:nth-child(odd) .disc-shadow {
          animation-delay: -1.5s;
        }

        .disc-card:nth-child(3n) .disc-shadow {
          animation-delay: -3.2s;
        }

        @keyframes spin3d {
          0% {
            transform: rotateY(-24deg) rotateX(4deg) translateY(0px);
          }
          25% {
            transform: rotateY(0deg) rotateX(-2deg) translateY(-6px);
          }
          50% {
            transform: rotateY(24deg) rotateX(4deg) translateY(0px);
          }
          75% {
            transform: rotateY(0deg) rotateX(-2deg) translateY(-6px);
          }
          100% {
            transform: rotateY(-24deg) rotateX(4deg) translateY(0px);
          }
        }

        @keyframes shadowPulse {
          0% {
            transform: translateX(-50%) scale(1);
            opacity: 0.9;
          }
          25% {
            transform: translateX(-50%) scale(0.8);
            opacity: 0.55;
          }
          50% {
            transform: translateX(-50%) scale(1);
            opacity: 0.9;
          }
          75% {
            transform: translateX(-50%) scale(0.8);
            opacity: 0.55;
          }
          100% {
            transform: translateX(-50%) scale(1);
            opacity: 0.9;
          }
        }

        .disc-number {
          font-family: "Britti Sans Trial", sans-serif;
          font-weight: 600;
          font-size: 15px;
          color: #0e0e0e;
          margin-bottom: 4px;
        }

        .disc-card-title {
          font-family: "Britti Sans Trial", sans-serif;
          font-weight: 600;
          font-size: 16px;
          line-height: 1.3;
          color: #0e0e0e;
          margin: 0 0 12px 0;
        }

        .disc-card-text {
          font-family: "Britti Sans Trial", sans-serif;
          font-weight: 400;
          font-size: 13px;
          line-height: 1.6;
          color: #0e0e0e;
          margin: 0 0 24px 0;
          flex-grow: 1;
        }






        .know-more-btn:hover {
          background: #0e0e0e;
          color: #ffffff;
          transform: translateY(-2px);
        }

        .know-more-btn:hover svg path {
          stroke: #ffffff;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .disc-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-areas:
              "header header"
              "c1 c2"
              "c3 c4"
              "c5 c6";
            gap: 20px;
          }

          .disc-title {
            font-size: 28px;
          }

          .disc-subtitle {
            font-size: 18px;
          }

          .disc-intro {
            max-width: 100%;
          }
        }

        /* Mobile */
        @media (max-width: 640px) {
          .disc-section {
            padding: 48px 20px 64px 20px;
          }

          .disc-grid {
            grid-template-columns: 1fr;
            grid-template-areas:
              "header"
              "c1"
              "c2"
              "c3"
              "c4"
              "c5"
              "c6";
            gap: 16px;
          }

          .disc-header {
            padding-right: 0;
            margin-bottom: 8px;
          }

          .disc-title {
            font-size: 24px;
          }

          .disc-subtitle {
            font-size: 17px;
          }

          .disc-intro {
            font-size: 13.5px;
          }

          .disc-card {
            padding: 20px;
          }

          .disc-image-area {
            height: 120px;
          }

          .disc-image {
            width: 72px;
            height: 72px;
          }

          .disc-card-title {
            font-size: 16px;
          }

          .disc-card-text {
            font-size: 13px;
          }
        }
      `}</style>
    </section>
  );
}