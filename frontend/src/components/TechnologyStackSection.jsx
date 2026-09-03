"use client";

import { useEffect, useState } from "react";

/* =========================================================
   DATA
========================================================= */

const frontendLogos = [
  { name: "React.js", image: "/home/stack/frontend/1.png" },
  { name: "Vue.js 3", image: "/home/stack/frontend/2.png" },
  { name: "Angular", image: "/home/stack/frontend/3.png" },
  { name: "TypeScript", image: "/home/stack/frontend/4.png" },
  { name: "Tailwind CSS", image: "/home/stack/frontend/5.png" },
];

const mobileLogos = [
  { name: "Swift", image: "/home/stack/mobile/1.png" },
  { name: "Kotlin", image: "/home/stack/mobile/2.png" },
  { name: "React Native", image: "/home/stack/mobile/3.png" },
  { name: "Flutter", image: "/home/stack/mobile/4.png" },
];

const backendLogos = [
  { name: "Node.js", image: "/home/stack/backend/1.png" },
  { name: "Django", image: "/home/stack/backend/2.png" },
  { name: "Go", image: "/home/stack/backend/3.png" },
  { name: "Ruby on Rails", image: "/home/stack/backend/4.png" },
  { name: "Laravel", image: "/home/stack/backend/5.png" },
];

const aiLogos = [
  { name: "PyTorch", image: "/home/stack/data/1.png" },
  { name: "LangChain", image: "/home/stack/data/2.png" },
  { name: "OpenAI", image: "/home/stack/data/3.png" },
  { name: "Pinecone", image: "/home/stack/data/4.png" },
  { name: "Apache Spark", image: "/home/stack/data/5.png" },
];

const cloudLogos = [
  { name: "AWS", image: "/home/stack/cloud/1.png" },
  { name: "Google Cloud", image: "/home/stack/cloud/2.png" },
  { name: "Microsoft Azure", image: "/home/stack/cloud/3.png" },
  { name: "Docker", image: "/home/stack/cloud/4.png" },
  { name: "Terraform", image: "/home/stack/cloud/5.png" },
  { name: "GitHub", image: "/home/stack/cloud/6.png" },
];

/* =========================================================
   RESPONSIVE HOOK

   Inline styles can't use @media, so breakpoints are tracked
   in JS and every style object below reads from these flags.
   Same breakpoints as the original CSS: 1100 / 767 / 420.
========================================================= */

function useBreakpoints() {
  // IMPORTANT:
  // Server and first client render must use the SAME value.
  const [width, setWidth] = useState(1400);

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    updateWidth();

    window.addEventListener(
      "resize",
      updateWidth
    );

    return () => {
      window.removeEventListener(
        "resize",
        updateWidth
      );
    };
  }, []);

  return {
    isTablet: width <= 1100,
    isMobile: width <= 767,
    isSmall: width <= 420,
  };
}

/* =========================================================
   LOGO ITEM
========================================================= */

function LogoItem({ name, image, bp }) {
  const { isTablet, isMobile, isSmall } = bp;

  const itemStyle = {
    flex: "1 1 0",
    minWidth: 0,
    width: isMobile ? "auto" : "100%",
    height: isSmall ? "72px" : isMobile ? "76px" : "84px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    textAlign: "center",
    boxSizing: "border-box",
  };

  const boxStyle = {
    width: "100%",
    height: isSmall ? "42px" : isMobile ? "46px" : "52px",
    minHeight: isSmall ? "42px" : isMobile ? "46px" : "52px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
  };

  const imageStyle = {
  width: isSmall
    ? "52px"
    : isMobile
    ? "60px"
    : isTablet
    ? "70px"
    : "82px",

  height: isSmall
    ? "42px"
    : isMobile
    ? "48px"
    : isTablet
    ? "56px"
    : "64px",

  maxWidth: "none",
  maxHeight: "none",

  display: "block",

  objectFit: "contain",
  objectPosition: "center",

  userSelect: "none",
  pointerEvents: "none",

  WebkitUserDrag: "none",

  flexShrink: 0,
};

  const nameStyle = {
  width: "100%",

  height: isSmall
    ? "24px"
    : isMobile
    ? "26px"
    : isTablet
    ? "28px"
    : "30px",

  minHeight: isSmall
    ? "24px"
    : isMobile
    ? "26px"
    : isTablet
    ? "28px"
    : "30px",

  marginTop: isMobile
    ? "8px"
    : "10px",

  display: "flex",

  alignItems: "flex-start",

  justifyContent: "center",

  fontSize: isSmall
    ? "8px"
    : isMobile
    ? "9px"
    : isTablet
    ? "10px"
    : "12px",

  lineHeight: 1.2,

  fontWeight: 400,

  color: "#0e0e0e",

  whiteSpace: "nowrap",

  textAlign: "center",

  boxSizing: "border-box",
};

  return (
    <div style={itemStyle}>
      <div style={boxStyle}>
        <img
          src={image}
          alt={name}
          style={imageStyle}
          draggable="false"
        />
      </div>

      <div style={nameStyle}>{name}</div>
    </div>
  );
}

/* =========================================================
   TECHNOLOGY GROUP
========================================================= */

function TechnologyGroup({ title, logos, side, bp }) {
  const { isTablet, isMobile, isSmall } = bp;

  const groupStyle = isMobile
    ? {
        width: "100%",
        minWidth: 0,
        padding: isSmall ? "22px 0 24px" : "24px 0 26px",
        borderBottom: "1px solid #d7dfeb",
        boxSizing: "border-box",
      }
    : {
        width: "100%",
        minWidth: 0,
        padding: "2px 0 31px",
        boxSizing: "border-box",
        ...(side === "left"
  ? {
      paddingRight: isTablet ? "20px" : "29px",
    }
  : {
      paddingLeft: isTablet ? "20px" : "29px",
    }),
      };

  const titleStyle = {
    margin: isMobile ? "0 0 23px" : "0 0 28px",
    fontSize: isSmall ? "17px" : "18px",
    lineHeight: 1.2,
    fontWeight: 700,
    letterSpacing: "-0.035em",
    color: "#0e0e0e",
  };

  const gridStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: isSmall ? "3px" : isMobile ? "5px" : isTablet ? "8px" : "12px",
    overflow: "visible",
    boxSizing: "border-box",
  };

  return (
    <div style={groupStyle}>
      <h3 style={titleStyle}>{title}</h3>

      <div style={gridStyle}>
        {logos.map((logo) => (
          <LogoItem key={logo.name} name={logo.name} image={logo.image} bp={bp} />
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   MAIN SECTION
========================================================= */

export default function TechnologyStackSection() {
  const bp = useBreakpoints();
  const { isTablet, isMobile, isSmall } = bp;

  const [buttonHovered, setButtonHovered] = useState(false);
  const [supportsHover, setSupportsHover] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      setSupportsHover(window.matchMedia("(hover: hover)").matches);
    }
  }, []);

  /* ---------------- SECTION / CONTAINER ---------------- */

  const sectionStyle = {
    width: "100%",
    background: "#f3f8ff",
    color: "#0e0e0e",
    fontFamily: '"Britti Sans Trial", Arial, Helvetica, sans-serif',
    padding: isSmall
      ? "40px 20px 54px"
      : isMobile
      ? "44px 20px 60px"
      : isTablet
      ? "42px 32px 72px"
      : "44px 62px 82px",
    boxSizing: "border-box",
  };

  const containerStyle = {
    width: "100%",
    maxWidth: "1400px",
    margin: "0 auto",
    boxSizing: "border-box",
  };

  /* ---------------- HEADER ---------------- */

  const headerStyle = isMobile
    ? {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        paddingBottom: "30px",
        boxSizing: "border-box",
      }
    : {
        width: "100%",
        display: "grid",
        gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 0.8fr)",
        columnGap: isTablet ? "50px" : "90px",
        alignItems: "start",
        paddingBottom: "40px",
        boxSizing: "border-box",
      };

  const eyebrowStyle = {
    marginBottom: isMobile ? "18px" : "23px",
    fontSize: isMobile ? "11px" : "12px",
    lineHeight: 1,
    fontWeight: 400,
    color: "#0e0e0e",
  };

  const headingStyle = {
    margin: 0,
    fontSize: isSmall ? "19px" : isMobile ? "20px" : "22px",
    lineHeight: isMobile ? 1.3 : 1.35,
    fontWeight: 700,
    letterSpacing: "-0.03em",
    color: "#0e0e0e",
  };

  const headerCopyStyle = {
  maxWidth: isMobile ? "100%" : "520px",

  margin: isMobile
    ? 0
    : "39px 0 0 -75px",

  fontSize: "13px",
  lineHeight: isMobile ? 1.6 : 1.55,
  fontWeight: 400,
  color: "#0e0e0e",
};

  /* ---------------- TWO COLUMN ROWS ---------------- */

 const twoColumnRowStyle = isMobile
  ? {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      borderBottom: 0,
      boxSizing: "border-box",
    }
  : {
      width: "100%",
      display: "grid",
      gridTemplateColumns:
        "minmax(0, 1fr) minmax(0, 1fr)",
      borderBottom:
        "1px solid #d7dfeb",
      boxSizing: "border-box",
      position: "relative",
    };

  /* ---------------- CLOUD SECTION ---------------- */

  const cloudSectionStyle = isMobile
    ? {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        gap: "30px",
        paddingTop: "27px",
        boxSizing: "border-box",
      }
    : {
        width: "100%",
        display: "grid",
        gridTemplateColumns: "minmax(0, 1fr) 270px",
        columnGap: "60px",
        alignItems: "center",
        padding: "32px 0 0",
        boxSizing: "border-box",
      };

  const cloudTitleStyle = {
    margin: isMobile ? "0 0 23px" : "0 0 28px",
    fontSize: isSmall ? "17px" : "18px",
    lineHeight: 1.2,
    fontWeight: 700,
    letterSpacing: "-0.035em",
    color: "#0e0e0e",
  };

  const cloudLogosGridStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: isSmall ? "3px" : isMobile ? "5px" : isTablet ? "8px" : "12px",
    overflow: "visible",
    boxSizing: "border-box",
  };

  /* ---------------- BUTTON ---------------- */

  const buttonWrapStyle = {
    display: "flex",
    justifyContent: isMobile ? "flex-start" : "flex-end",
    alignItems: "center",
    width: isMobile ? "100%" : undefined,
  };

  const hoverActive = supportsHover && buttonHovered;

  const buttonStyle = {
  width: isMobile ? "280px" : "320px",
  height: isMobile ? "56px" : "62px",

  padding: "0 24px",

  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",

  gap: "8px",

  border: "none",
  borderRadius: "999px",

  background:
    "linear-gradient(90deg, #0180FD 0%, #0021AF 100%)",

  color: "#ffffff",

  fontFamily:
    '"Britti Sans Trial", Arial, Helvetica, sans-serif',

  fontSize: isMobile ? "12px" : "14px",

  lineHeight: 1,
  fontWeight: 600,

  textDecoration: "none",
  whiteSpace: "nowrap",

  boxSizing: "border-box",

  cursor: "pointer",

  transition:
    "transform 0.25s ease, box-shadow 0.25s ease",

  transform:
    hoverActive
      ? "translateY(-2px)"
      : "translateY(0)",

  boxShadow:
    hoverActive
      ? "0 12px 26px rgba(0, 33, 175, 0.24)"
      : "0 8px 18px rgba(0, 33, 175, 0.16)",
};

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>

        {/* HEADER */}

        <div style={headerStyle}>
          <div>
            <div style={eyebrowStyle}>TECHNOLOGY STACK</div>

            <h2 style={headingStyle}>
              We&apos;re technology agnostic,
              <br />
              We&apos;re outcome obsessed
            </h2>
          </div>

          <p style={headerCopyStyle}>
            We recommend the right tools for your problem not the ones we
            find easiest to sell. That said, here&apos;s the refined toolkit
            representing our 4 years and 100+ production deployments.
          </p>
        </div>

        {/* FRONTEND + MOBILE */}

       <div style={twoColumnRowStyle}>
  <TechnologyGroup
    title="Frontend & Web"
    logos={frontendLogos}
    side="left"
    bp={bp}
  />

  <TechnologyGroup
    title="Mobile"
    logos={mobileLogos}
    side="right"
    bp={bp}
  />

  {!isMobile && (
    <div
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: "50%",
        width: "1px",
        background: "#d7dfeb",
        transform: "translateX(-0.5px)",
        pointerEvents: "none",
      }}
    />
  )}
</div>

        {/* BACKEND + AI */}

  <div
  style={{
    ...twoColumnRowStyle,
    paddingTop: isMobile
      ? "18px"
      : "35px",
  }}
>
  <TechnologyGroup
    title="Backend & APIs"
    logos={backendLogos}
    side="left"
    bp={bp}
  />

  <TechnologyGroup
    title="AI, ML & Data"
    logos={aiLogos}
    side="right"
    bp={bp}
  />

  {!isMobile && (
    <div
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: "50%",
        width: "1px",
        background: "#d7dfeb",
        transform: "translateX(-0.5px)",
        pointerEvents: "none",
      }}
    />
  )}
</div>

        {/* CLOUD */}

        <div style={cloudSectionStyle}>
          <div style={{ minWidth: 0 }}>
            <h3 style={cloudTitleStyle}>
              Cloud, Infrastructure & DevOps
            </h3>

            <div style={cloudLogosGridStyle}>
              {cloudLogos.map((logo) => (
                <LogoItem
                  key={logo.name}
                  name={logo.name}
                  image={logo.image}
                  bp={bp}
                />
              ))}
            </div>
          </div>

          <div style={buttonWrapStyle}>
            <a
              href="#contact"
              style={buttonStyle}
              onMouseEnter={() => setButtonHovered(true)}
              onMouseLeave={() => setButtonHovered(false)}
            >
              <span>Explore More Technology Stack</span>

              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                aria-hidden="true"
              >
                <path d="M5.5 1.6L9.2 8.8H1.8L5.5 1.6Z" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}