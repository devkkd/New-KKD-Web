"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

/* =========================================================
   ABOUT  (3 items — each opens its own page)
========================================================= */

const ABOUT_ITEMS = [
  ["About Kontent Kraft Digital", "/about"],
  ["How We Work", "#"],
  ["FAQ’s", "#"],
];

/* =========================================================
   SERVICES
   Each column heading is itself a link to its own service
   category page (3 real headings — the 2nd column continues
   the 1st column's list and has no heading of its own).
========================================================= */

const SERVICES_COLUMNS = [
  {
  title: "Digital Product Engineering",
  titleHref: "/services/digital-product-engineering/",
  items: [
    [
      "Web & Mobile Development",
      "/services/digital-product-engineering/#web-mobile-development",
    ],
    [
      "Custom Software Development",
      "/services/digital-product-engineering/#custom-software-development",
    ],
    [
      "AI & Machine Learning",
      "/services/digital-product-engineering/#ai-machine-learning",
    ],
    [
      "Product Design (UI/UX)",
      "/services/digital-product-engineering/#product-design-ui-ux",
    ],
    [
      "E-Commerce Solutions",
      "/services/digital-product-engineering/#e-commerce-solutions",
    ],
  ],
},
{
  title: "",
  titleHref: "",
  items: [
    [
      "Cloud & DevOps",
      "/services/digital-product-engineering/#cloud-devops",
    ],
    [
      "Product Management",
      "/services/digital-product-engineering/#product-management",
    ],
    [
      "Managed IT Services",
      "/services/digital-product-engineering/#managed-it-services",
    ],
    [
      "Enterprise Applications",
      "/services/digital-product-engineering/#enterprise-applications",
    ],
  ],
},
  
  {
  title: "Growth Marketing",
  titleHref: "/services/growth-marketing/",
  items: [
    [
      "Digital Marketing",
      "/services/growth-marketing/#digital-marketing",
    ],
    [
      "SEO & Organic Growth",
      "/services/growth-marketing/#seo-organic-growth",
    ],
    [
      "Performance Marketing",
      "/services/growth-marketing/#performance-marketing",
    ],
    [
      "Content & Email Marketing",
      "/services/growth-marketing/#content-email-marketing",
    ],
    [
      "Influencer Marketing",
      "/services/growth-marketing/#influencer-marketing",
    ],
    [
      "Local SEO",
      "/services/growth-marketing/#local-seo",
    ],
  ],
},
 {
  title: "Strategic Consulting",
  titleHref: "/services/strategic-consulting/",
  items: [
    [
      "Digital Transformation Consulting",
      "/services/strategic-consulting/#digital-transformation-consulting",
    ],
    [
      "Software Strategy",
      "/services/strategic-consulting/#software-strategy",
    ],
    [
      "Fintech Advisory",
      "/services/strategic-consulting/#fintech-advisory",
    ],
    [
      "Mobile Strategy",
      "/services/strategic-consulting/#mobile-strategy",
    ],
    [
      "Technology Staffing & Hiring",
      "/services/strategic-consulting/#technology-staffing-hiring",
    ],
  ],
},
];

/* =========================================================
   INDUSTRIES
========================================================= */

const INDUSTRY_ITEMS = [
  [
    "FinTech & Financial",
    "/industries/#fintech-financial",
  ],
  [
    "Healthcare & HealthTech",
    "/industries/#healthcare-healthtech",
  ],
  [
    "E-Commerce & Retail",
    "/industries/#e-commerce-retail",
  ],
  [
    "EdTech & Learning",
    "/industries/#edtech-learning",
  ],
  [
    "Logistics & Supply Chain",
    "/industries/#logistics-supply-chain",
  ],
  [
    "SaaS & B2B Software",
    "/industries/#saas-b2b-software",
  ],
  [
    "Real Estate & PropTech",
    "/industries/#real-estate-proptech",
  ],
  [
    "Travel & Hospitality",
    "/industries/#travel-hospitality",
  ],
  [
    "Social Media",
    "/industries/#social-media",
  ],
  [
    "Marketing",
    "/industries/#marketing",
  ],
  [
    "Events",
    "/industries/#events",
  ],
  [
    "Restaurant",
    "/industries/#restaurant",
  ],
];

/* =========================================================
   PORTFOLIO
   Each logo sits on its own tinted tile (matches each brand's
   own palette). Drop the real <img> for each logo into the
   `logo` field — the tile color stays as a backdrop either way.
========================================================= */

const PORTFOLIO_ITEMS = [
  { label: "Furrmaa – Pet Care Digital Platform (App & Web)", href: "#", bg: "#E9F4F1", logo: "/header/1.png" },
  { label: "Ratoomals – Handcrafted Decor & Sculpture Manufacturer", href: "#", bg: "#FBF1DF", logo: "/header/2.png" },
  { label: "Wizard India – Precision Audio Components", href: "#", bg: "#FFFFFF", logo: "/header/3.png" },
  { label: "Atlantis – Handcrafted Decor & Sculpture Manufacturer", href: "#", bg: "#FBF1DF", logo: "/header/4.png" },
  { label: "Malani Impex – Heritage Textile & Home Décor Brand", href: "#", bg: "#FCF6DA", logo: "/header/5.png" },
  { label: "BariBes – Handcrafted Decor & Sculpture Manufacturer", href: "#", bg: "#F8F1EC", logo: "/header/6.png" },
];

/* =========================================================
   RESOURCES
========================================================= */

const RESOURCE_ITEMS = [
  {
    label:
      "The AI Implementation Playbook: What Works, What Doesn't, and What to Do First",
    href: "#",
    image: "/header/7.png",
  },
  {
    label:
      "Why 85% of Mobile Apps Are Abandoned After a Single Use And How to Beat the Odds",
    href: "#",
    image: "/header/8.png",
  },
];

/* =========================================================
   MENU TYPES
========================================================= */

const MENU_TYPES = {
  ABOUT: "about",
  SERVICES: "services",
  INDUSTRIES: "industries",
  PORTFOLIO: "portfolio",
  RESOURCES: "resources",
};

/* =========================================================
   CHEVRON
========================================================= */

function Chevron() {
  return <span className="kk-chevron" aria-hidden="true" />;
}

/* =========================================================
   SAFE LINK
========================================================= */

function SafeLink({ href, children, className = "", onClick }) {
  const isDisabled = !href || href === "#";

  if (isDisabled) {
    return (
      <span
        className={`${className} kk-disabled-link`.trim()}
        aria-disabled="true"
      >
        {children}
      </span>
    );
  }

  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
}

/* =========================================================
   HEADER
========================================================= */

export default function Header() {
  const headerRef = useRef(null);
  const dropdownRef = useRef(null);

  const [openMenu, setOpenMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownShift, setDropdownShift] = useState(0);

  const closeAll = () => {
    setOpenMenu(null);
    setMobileMenuOpen(false);
  };

  const toggleDropdown = (menu) => {
    setOpenMenu((current) => (current === menu ? null : menu));
  };

  /* OUTSIDE CLICK */
  useEffect(() => {
    const handlePointerDown = (event) => {
      const header = headerRef.current;
      if (!header || header.contains(event.target)) return;
      setOpenMenu(null);
      setMobileMenuOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  /* ESCAPE KEY */
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  /* MOBILE SCROLL LOCK */
  useEffect(() => {
    if (!mobileMenuOpen) {
      document.body.style.removeProperty("overflow");
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

  /* RESIZE GUARD — reset everything if the viewport crosses the mobile
     breakpoint while a menu is open, so nothing gets stuck open in the
     wrong layout. */
  useEffect(() => {
    const MOBILE_BREAKPOINT = 767;
    let lastWasMobile = window.innerWidth <= MOBILE_BREAKPOINT;

    const handleBreakpointResize = () => {
      const isMobile = window.innerWidth <= MOBILE_BREAKPOINT;
      if (isMobile !== lastWasMobile) {
        lastWasMobile = isMobile;
        setOpenMenu(null);
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleBreakpointResize);
    return () => window.removeEventListener("resize", handleBreakpointResize);
  }, []);

  /* VIEWPORT OVERFLOW GUARD — this is the fix for the desktop mega-menu
     dropdown bleeding off the edge of the screen and forcing the whole
     page to scroll sideways. Every time a dropdown opens (or the window
     resizes while one is open), measure its real position on screen and,
     if it would spill past the right (or left) edge, nudge it back in
     with a transform. Only relevant above the mobile breakpoint, since
     the mobile menu is a full-width in-flow panel, not an absolutely
     positioned dropdown. */
  useLayoutEffect(() => {
    if (!openMenu || mobileMenuOpen) {
      setDropdownShift(0);
      return undefined;
    }

    const measure = () => {
      const el = dropdownRef.current;
      if (!el) return;
      const margin = 16;

      // Reset first so we measure the dropdown's natural, unshifted position.
      el.style.transform = "translateX(0px)";
      const rect = el.getBoundingClientRect();

      let shift = 0;
      if (rect.right > window.innerWidth - margin) {
        shift = rect.right - (window.innerWidth - margin);
      }
      if (rect.left - shift < margin) {
        shift = rect.left - margin;
      }

      setDropdownShift(shift);
    };

    // Wait a frame so the dropdown has actually painted at its natural
    // width before we measure it.
    const raf = requestAnimationFrame(measure);
    window.addEventListener("resize", measure);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
    };
  }, [openMenu, mobileMenuOpen]);

  /* TOP MENU */
  const topMenus = [
    { key: MENU_TYPES.ABOUT, label: "About", href: "/about", direct: true },
    { key: MENU_TYPES.SERVICES, label: "Services", href: "#", direct: false },
    { key: MENU_TYPES.INDUSTRIES, label: "Industries", href: "/industries", direct: true },
    { key: MENU_TYPES.PORTFOLIO, label: "Portfolio", href: "/portfolio", direct: true },
    { key: MENU_TYPES.RESOURCES, label: "Resources", href: "/resources", direct: true },
  ];

  /* ---------------------------------------------------------
     DESKTOP DROPDOWNS
  --------------------------------------------------------- */

  const renderAboutDropdown = () => (
    <div className="kk-simple-dropdown">
      {ABOUT_ITEMS.map(([label, href]) => (
        <SafeLink key={label} href={href} className="kk-dropdown-link" onClick={closeAll}>
          {label}
        </SafeLink>
      ))}
    </div>
  );

  const renderServicesDropdown = () => (
    <div className="kk-wide-dropdown kk-services-dropdown">
      <div className="kk-services-grid">
        {SERVICES_COLUMNS.map((column, index) => (
          <div className="kk-services-column" key={`${column.title}-${index}`}>
            {column.title ? (
              <a
                href={column.titleHref || "#"}
                className="kk-dropdown-heading kk-dropdown-heading-link"
                onClick={closeAll}
              >
                {column.title}
              </a>
            ) : (
              <div className="kk-dropdown-heading kk-dropdown-heading-spacer" aria-hidden="true" />
            )}

            <div className="kk-dropdown-items">
              {column.items.map(([label, href]) => (
                <SafeLink key={label} href={href} className="kk-dropdown-link" onClick={closeAll}>
                  {label}
                </SafeLink>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="kk-dropdown-cta">
        <div className="kk-dropdown-cta-copy">
          <strong>Need something specific?</strong>
          <span>Tell us what you’re looking for we’ll customize it for you.</span>
        </div>

        <SafeLink href="/book-call" className="kk-dropdown-cta-button" onClick={closeAll}>
          Book a Free Strategy Call
          <span>▲</span>
        </SafeLink>
      </div>
    </div>
  );

  const renderIndustriesDropdown = () => (
    <div className="kk-wide-dropdown kk-industries-dropdown">
      <div className="kk-industries-grid">
        {INDUSTRY_ITEMS.map(([label, href]) => (
          <SafeLink key={label} href={href} className="kk-dropdown-link" onClick={closeAll}>
            {label}
          </SafeLink>
        ))}
      </div>

      <div className="kk-dropdown-cta">
        <div className="kk-dropdown-cta-copy">
          <strong>Need something specific?</strong>
          <span>Tell us what you’re looking for we’ll customize it for you.</span>
        </div>

        <SafeLink href="/book-call" className="kk-dropdown-cta-button" onClick={closeAll}>
          Book a Free Strategy Call
          <span>▲</span>
        </SafeLink>
      </div>
    </div>
  );

  const renderPortfolioDropdown = () => (
    <div className="kk-wide-dropdown kk-portfolio-dropdown">
      <div className="kk-portfolio-list">
        {PORTFOLIO_ITEMS.map((item) => (
          <div className="kk-portfolio-row" key={item.label}>
            <div className="kk-portfolio-placeholder" style={{ background: item.bg }} aria-hidden="true">
              {item.logo ? (
                <img src={item.logo} alt="" className="kk-portfolio-logo" />
              ) : null}
            </div>
            <SafeLink href={item.href} className="kk-portfolio-link" onClick={closeAll}>
              {item.label}
            </SafeLink>
          </div>
        ))}
      </div>
    </div>
  );

  const renderResourcesDropdown = () => (
    <div className="kk-wide-dropdown kk-resources-dropdown">
      <div className="kk-resource-header">Insight</div>

      <div className="kk-resources-list">
        {RESOURCE_ITEMS.map((item) => (
          <div className="kk-resource-row" key={item.label}>
            <div className="kk-resource-image">
              <img
                src={item.image}
                alt=""
                width="360"
                height="190"
                loading="lazy"
                decoding="async"
                draggable="false"
              />
            </div>

            <SafeLink href={item.href} className="kk-resource-link" onClick={closeAll}>
              {item.label}
            </SafeLink>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDropdown = (menu) => {
    switch (menu) {
      case MENU_TYPES.ABOUT:
        return renderAboutDropdown();
      case MENU_TYPES.SERVICES:
        return renderServicesDropdown();
      case MENU_TYPES.INDUSTRIES:
        return renderIndustriesDropdown();
      case MENU_TYPES.PORTFOLIO:
        return renderPortfolioDropdown();
      case MENU_TYPES.RESOURCES:
        return renderResourcesDropdown();
      default:
        return null;
    }
  };

  /* ---------------------------------------------------------
     MOBILE SUBMENUS
     Mirrors the desktop dropdown content (including images for
     Portfolio/Resources and column headings for Services) but
     laid out for a narrow, single-column screen.
  --------------------------------------------------------- */

  const renderMobileItems = (menu) => {
    if (menu === MENU_TYPES.ABOUT) {
      return ABOUT_ITEMS.map(([label, href]) => (
        <SafeLink key={label} href={href} onClick={closeAll} className="kk-mobile-sublink">
          {label}
        </SafeLink>
      ));
    }

    if (menu === MENU_TYPES.SERVICES) {
      return SERVICES_COLUMNS.map((column, index) => (
        <div className="kk-mobile-sub-group" key={`${column.title}-${index}`}>
          {column.title ? (
            <SafeLink href={column.titleHref} onClick={closeAll} className="kk-mobile-sub-heading">
              {column.title}
            </SafeLink>
          ) : null}

          {column.items.map(([label, href]) => (
            <SafeLink key={label} href={href} onClick={closeAll} className="kk-mobile-sublink">
              {label}
            </SafeLink>
          ))}
        </div>
      ));
    }

    if (menu === MENU_TYPES.INDUSTRIES) {
      return INDUSTRY_ITEMS.map(([label, href]) => (
        <SafeLink key={label} href={href} onClick={closeAll} className="kk-mobile-sublink">
          {label}
        </SafeLink>
      ));
    }

    if (menu === MENU_TYPES.PORTFOLIO) {
      return PORTFOLIO_ITEMS.map((item) => (
        <SafeLink
          key={item.label}
          href={item.href}
          onClick={closeAll}
          className="kk-mobile-portfolio-item"
        >
          <span className="kk-mobile-portfolio-thumb" style={{ background: item.bg }}>
            {item.logo ? <img src={item.logo} alt="" draggable="false" /> : null}
          </span>
          <span className="kk-mobile-portfolio-label">{item.label}</span>
        </SafeLink>
      ));
    }

    if (menu === MENU_TYPES.RESOURCES) {
      return RESOURCE_ITEMS.map((item) => (
        <SafeLink
          key={item.label}
          href={item.href}
          onClick={closeAll}
          className="kk-mobile-resource-item"
        >
          <span className="kk-mobile-resource-image">
            <img
              src={item.image}
              alt=""
              loading="lazy"
              decoding="async"
              draggable="false"
            />
          </span>
          <span className="kk-mobile-resource-label">{item.label}</span>
        </SafeLink>
      ));
    }

    return null;
  };

  return (
    <>
      <header ref={headerRef} className="kk-header">
        <div className="kk-header-inner">
          {/* LEFT NAVIGATION */}
          <nav className="kk-nav kk-nav-left" aria-label="Primary navigation">
            {topMenus.map((menu) => (
              <div
                key={menu.key}
                className="kk-nav-dropdown-wrap"
                onMouseEnter={() => setOpenMenu(menu.key)}
                onMouseLeave={() => setOpenMenu((current) => (current === menu.key ? null : current))}
              >
                {menu.direct ? (
                  <a href={menu.href} className="kk-nav-link" onClick={closeAll}>
                    {menu.label}
                    <Chevron />
                  </a>
                ) : (
                  <button
                    type="button"
                    className="kk-nav-link kk-nav-button"
                    onClick={() => toggleDropdown(menu.key)}
                    aria-expanded={openMenu === menu.key}
                  >
                    {menu.label}
                    <Chevron />
                  </button>
                )}

                {openMenu === menu.key && (
                  <div
                    ref={dropdownRef}
                    className="kk-desktop-dropdown-holder"
                    style={{ transform: `translateX(-${dropdownShift}px)` }}
                  >
                    {renderDropdown(menu.key)}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* LOGO */}
          <a href="/" className="kk-logo-link" aria-label="Kontent Kraft Digital" onClick={closeAll}>
            <img
              src="/logo.png"
              alt="Kontent Kraft Digital"
              className="kk-logo"
              width="180"
              height="52"
              draggable="false"
            />
          </a>

          {/* RIGHT NAVIGATION */}
          <nav className="kk-nav kk-nav-right" aria-label="Secondary navigation">
            <a href="/hire-resources" className="kk-nav-link">Hire Resources</a>
            <a href="/clients" className="kk-nav-link">Clients</a>
            <a href="/careers" className="kk-nav-link">Careers</a>
            <a href="/book-call" className="kk-nav-link">Book Call</a>
            <a href="/contact" className="kk-contact-button">
              <span className="kk-contact-star">✦</span>
              Contact Us
            </a>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            className={`kk-menu-button ${mobileMenuOpen ? "is-open" : ""}`}
            onClick={() => setMobileMenuOpen((current) => !current)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* MOBILE MENU */}
        <div className={`kk-mobile-menu ${mobileMenuOpen ? "is-open" : ""}`}>
          <nav className="kk-mobile-nav">
            {topMenus.map((menu) => (
              <div className="kk-mobile-dropdown-wrap" key={menu.key}>
                <div className="kk-mobile-top-row">
                 {menu.direct ? (
  <SafeLink
    href={menu.href}
    className="kk-mobile-link kk-mobile-primary-link"
    onClick={closeAll}
  >
    {menu.label}
  </SafeLink>
) : (
  <button
    type="button"
    className="kk-mobile-link kk-mobile-primary-link"
    onClick={() => toggleDropdown(menu.key)}
    aria-expanded={openMenu === menu.key}
  >
    {menu.label}
  </button>
)}

<button
  type="button"
  className={`kk-mobile-expand ${
    openMenu === menu.key ? "is-open" : ""
  }`}
  onClick={() => toggleDropdown(menu.key)}
  aria-label={`Open ${menu.label} submenu`}
  aria-expanded={openMenu === menu.key}
>
  <Chevron />
</button>
                </div>

                {/*
                  IMPORTANT: the grid-template-rows 0fr -> 1fr collapse
                  trick only works cleanly when the animated grid has a
                  SINGLE child row. Previously the sublinks were direct
                  children of .kk-mobile-submenu, so with more than one
                  child the extra rows fell back to "auto" sizing and
                  never actually collapsed to 0 — that's what was
                  leaving the big empty gaps under About/Services in the
                  closed state. Wrapping everything in one
                  .kk-mobile-submenu-inner element fixes that.
                */}
                <div className={`kk-mobile-submenu ${openMenu === menu.key ? "is-open" : ""}`}>
                  <div className="kk-mobile-submenu-inner">
                    {renderMobileItems(menu.key)}

                    {(menu.key === MENU_TYPES.SERVICES || menu.key === MENU_TYPES.INDUSTRIES) && (
                      <SafeLink href="/book-call" onClick={closeAll} className="kk-mobile-book-link">
                        Book a Free Strategy Call
                        <span>▲</span>
                      </SafeLink>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <div className="kk-mobile-divider" />

            <SafeLink href="/hire-resources" onClick={closeAll} className="kk-mobile-link">Hire Resources</SafeLink>
            <SafeLink href="/clients" onClick={closeAll} className="kk-mobile-link">Clients</SafeLink>
            <SafeLink href="/careers" onClick={closeAll} className="kk-mobile-link">Careers</SafeLink>
            <SafeLink href="/book-call" onClick={closeAll} className="kk-mobile-link">Book Call</SafeLink>

            <SafeLink href="/contact" onClick={closeAll} className="kk-mobile-contact">
              <span>✦</span>
              Contact Us
            </SafeLink>
          </nav>
        </div>
      </header>

      <style>{`
        .kk-header, .kk-header *, .kk-header *::before, .kk-header *::after {
          box-sizing: border-box;
        }

        .kk-header {
          position: relative;
          width: 100%;
          max-width: 100%;
          min-width: 0;
          z-index: 1000;
          background: #f3f8ff;
          border-bottom: 1px solid rgba(14, 14, 14, 0.14);
          font-family: "Britti Sans Trial", Arial, Helvetica, sans-serif;
          overflow: visible;
          overflow-anchor: none;
        }

        .kk-header-inner {
          position: relative;
          width: 100%;
          max-width: 1900px;
          min-width: 0;
          height: 80px;
          min-height: 80px;
          padding: 0 clamp(24px, 4vw, 64px);
          display: grid;
          grid-template-columns: minmax(0, 1fr) 180px minmax(0, 1fr);
          align-items: center;
          column-gap: clamp(16px, 2.2vw, 34px);
          margin: 0 auto;
        }

        /* NAV */
        .kk-nav {
          min-width: 0;
          display: flex;
          align-items: center;
          white-space: nowrap;
        }

        .kk-nav-left { justify-content: flex-start; gap: 40px; }
        .kk-nav-right { justify-content: flex-end; gap: 35px; }

        .kk-nav-dropdown-wrap {
          position: relative;
          display: flex;
          align-items: center;
          height: 80px;
          flex: 0 0 auto;
        }

        .kk-nav-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          flex: 0 0 auto;
          padding: 0;
          margin: 0;
          border: 0;
          background: transparent;
          color: #0e0e0e;
          font-family: inherit;
          font-size: clamp(12.2px, 1.05vw, 15px);
          line-height: 1;
          font-weight: 500;
          text-decoration: none;
          white-space: nowrap;
          cursor: pointer;
          border-radius: 4px;
          transition: opacity 0.25s ease, color 0.25s ease;
        }

        .kk-nav-link:hover { opacity: 0.68; }
        .kk-nav-button { appearance: none; }

        .kk-chevron {
          width: 0;
          height: 0;
          display: inline-block;
          margin-top: 2px;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 8px solid #0e0e0e;
          flex: 0 0 auto;
          transform: translateY(1px) scaleX(0.9);
        }

        /* LOGO */
        .kk-logo-link {
          width: 180px;
          height: 52px;
          flex: 0 0 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          justify-self: center;
          text-decoration: none;
          overflow: hidden;
        }

        .kk-logo {
          display: block;
          width: 180px;
          height: 52px;
          max-width: 180px;
          max-height: 52px;
          object-fit: contain;
          object-position: center;
          flex: 0 0 auto;
          user-select: none;
          -webkit-user-drag: none;
        }

        /* CONTACT BUTTON */
        .kk-contact-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          flex: 0 0 auto;
          min-width: 130px;
          height: 44px;
          padding: 0 22px;
          border-radius: 999px;
          background: linear-gradient(135deg, #0180fd 0%, #0021af 100%);
          color: #ffffff;
          font-size: 15px;
          font-weight: 500;
          line-height: 1;
          white-space: nowrap;
          text-decoration: none;
          box-shadow: 0 8px 24px rgba(0, 33, 175, 0.14);
          transition: transform 0.25s ease, box-shadow 0.25s ease, opacity 0.25s ease;
        }

        .kk-contact-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(0, 33, 175, 0.22);
        }

        .kk-contact-star {
          width: 13px;
          height: 13px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          line-height: 1;
          flex: 0 0 13px;
        }

        /*
          DESKTOP DROPDOWN HOLDER
          Base position is flush against the left edge of whichever item
          opened it (position:absolute; top:100%; left:0 on the trigger's
          own wrap). The inline transform: translateX(-Npx) applied in
          JS (see the VIEWPORT OVERFLOW GUARD effect above) then nudges
          it back onto the screen if it would otherwise spill past the
          right or left edge of the viewport — this is what stops the
          mega-menus from pushing the whole page into horizontal scroll.
        */
        .kk-desktop-dropdown-holder {
          position: absolute;
          top: 100%;
          left: 0;
          width: max-content;
          max-width: calc(100vw - 32px);
          z-index: 99999;
          transition: transform 0.15s ease;
        }

        .kk-simple-dropdown, .kk-wide-dropdown {
          position: relative;
          display: block;
          overflow: visible;
          background: #f3f8ff;
          border: 1px solid rgba(14, 14, 14, 0.16);
          border-radius: 0 0 10px 10px;
          box-shadow: 0 18px 50px rgba(14, 14, 14, 0.14);
        }

        .kk-simple-dropdown { width: 235px; padding: 18px 20px; }
        .kk-wide-dropdown { padding: 30px; }

        .kk-dropdown-link {
          display: block;
          color: #0e0e0e;
          text-decoration: none;
          font-size: 15px;
          line-height: 1.35;
          font-weight: 500;
          transition: color 0.2s ease, opacity 0.2s ease;
        }

        .kk-dropdown-link + .kk-dropdown-link { margin-top: 22px; }
        .kk-dropdown-link:hover { color: #0021af; }

        .kk-disabled-link {
          cursor: default;
          pointer-events: none;
        }

        .kk-dropdown-link.kk-disabled-link:hover {
          color: #0e0e0e;
        }

        /* SERVICES */
        .kk-services-dropdown { width: min(1210px, calc(100vw - 80px)); }

        .kk-services-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr 1fr 1fr;
          gap: 28px;
        }

        .kk-dropdown-heading {
          margin-bottom: 24px;
          color: #0021af;
          font-size: 17px;
          line-height: 1.2;
          font-weight: 700;
        }

        .kk-dropdown-heading-link {
          display: inline-block;
          text-decoration: none;
          cursor: pointer;
          transition: opacity 0.2s ease;
        }

        .kk-dropdown-heading-link:hover { opacity: 0.7; }

        .kk-dropdown-heading-spacer { min-height: 20px; margin-bottom: 24px; }

        .kk-services-column .kk-dropdown-link + .kk-dropdown-link { margin-top: 18px; }

        /* CTA */
        .kk-dropdown-cta {
          margin-top: 30px;
          min-height: 108px;
          padding: 24px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          border-radius: 22px;
          background: linear-gradient(135deg, #0180fd 0%, #0021af 100%);
          color: #ffffff;
        }

        .kk-dropdown-cta-copy { display: flex; flex-direction: column; gap: 6px; }
        .kk-dropdown-cta-copy strong { font-size: 18px; line-height: 1.25; font-weight: 700; }
        .kk-dropdown-cta-copy span { font-size: 17px; line-height: 1.35; font-weight: 600; }

        .kk-dropdown-cta-button {
          flex: 0 0 auto;
          min-width: 160px;
          height: 64px;
          padding: 0 28px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          border-radius: 999px;
          background: #f3f8ff;
          color: #0021af;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
        }

        /* INDUSTRIES */
        .kk-industries-dropdown { width: min(920px, calc(100vw - 80px)); }

        .kk-industries-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          column-gap: 52px;
          row-gap: 24px;
        }

        .kk-industries-grid .kk-dropdown-link + .kk-dropdown-link { margin-top: 0; }

        /* PORTFOLIO */
        .kk-portfolio-dropdown { width: min(1020px, calc(100vw - 80px)); }

        .kk-portfolio-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 26px 34px;
        }

        .kk-portfolio-row {
          display: grid;
          grid-template-columns: 122px minmax(0, 1fr);
          gap: 18px;
          align-items: center;
        }

        .kk-portfolio-placeholder {
          width: 122px;
          height: 90px;
          border-radius: 14px;
          border: 1px solid rgba(14, 14, 14, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .kk-portfolio-logo {
          max-width: 78%;
          max-height: 68%;
          object-fit: contain;
        }

        .kk-portfolio-link, .kk-resource-link {
          color: #0e0e0e;
          text-decoration: none;
          font-size: 13px;
          line-height: 1.45;
          font-weight: 500;
        }

        .kk-portfolio-link:hover, .kk-resource-link:hover { color: #0021af; }

        /* =====================================================
           RESOURCES
        ===================================================== */

        .kk-resources-dropdown {
          width: min(1100px, calc(100vw - 80px));
          padding: 24px 36px 26px;
        }

        .kk-resource-header {
          margin: 0 0 22px;
          font-size: 18px;
          line-height: 1;
          font-weight: 500;
          color: #0e0e0e;
        }

        .kk-resources-list {
          display: grid;
          gap: 24px;
        }

        .kk-resource-row {
          width: 100%;
          display: grid;
          grid-template-columns: 360px minmax(0, 1fr);
          align-items: start;
          column-gap: 38px;
          min-width: 0;
        }

        .kk-resource-image {
          width: 360px;
          height: 150px;
          min-width: 0;
          overflow: hidden;
          border-radius: 16px;
          background: #e9eef6;
        }

        .kk-resource-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
          user-select: none;
          pointer-events: none;
          -webkit-user-drag: none;
        }

        .kk-resource-link {
          width: 100%;
          max-width: 560px;
          margin: 7px 0 0;
          display: block;
          font-size: 18px;
          line-height: 1.45;
          font-weight: 500;
          white-space: normal;
          overflow-wrap: break-word;
          word-break: normal;
          color: #0e0e0e;
          text-decoration: none;
        }

        /* MOBILE HIDDEN DEFAULT */
        .kk-menu-button, .kk-mobile-menu { display: none; }

        /* TABLET — kept visually identical to desktop, just scaled down */
/* =====================================================
   TABLET HEADER
   768px - 1199px
===================================================== */

@media (min-width: 768px) and (max-width: 1199px) {

  .kk-header-inner {
    position: relative;
    width: 100%;
    max-width: 1900px;

    height: 72px;
    min-height: 72px;

    padding: 0 12px;

    display: grid;
    grid-template-columns:
      minmax(0, 1fr)
      120px
      minmax(0, 1fr);

    align-items: center;
    column-gap: 10px;

    margin: 0 auto;
  }

  /* =========================
     NAV BASE
  ========================= */

  .kk-nav {
    min-width: 0;

    display: flex;
    align-items: center;

    white-space: nowrap;
  }

  .kk-nav-left {
    justify-content: flex-start;
    gap: 9px;
    min-width: 0;
    overflow: hidden;
  }

  .kk-nav-right {
    justify-content: flex-end;
    gap: 8px;
    min-width: 0;
    overflow: hidden;
  }

  /* =========================
     NAV LINKS
  ========================= */

  .kk-nav-link {
    min-width: 0;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    gap: 4px;

    padding: 0;
    margin: 0;

    border: 0;
    background: transparent;

    color: #0e0e0e;
    font-family: inherit;

    font-size: 9px;
    line-height: 1;
    font-weight: 500;

    white-space: nowrap;
    text-decoration: none;

    cursor: pointer;

    flex: 0 0 auto;
  }

  /* =========================
     DROPDOWN WRAPPER
  ========================= */

  .kk-nav-dropdown-wrap {
    position: relative;

    height: 72px;

    display: flex;
    align-items: center;

    flex: 0 0 auto;
    min-width: 0;
  }

  /* =========================
     CHEVRON
  ========================= */

  .kk-chevron {
    width: 0;
    height: 0;

    display: inline-block;

    margin-top: 1px;

    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 6px solid #0e0e0e;

    flex: 0 0 auto;

    transform: translateY(1px) scaleX(0.9);
  }

  /* =========================
     LOGO
  ========================= */

  .kk-logo-link {
    width: 120px;
    height: 40px;

    flex: 0 0 120px;

    display: flex;
    align-items: center;
    justify-content: center;

    justify-self: center;

    text-decoration: none;

    overflow: hidden;
  }

  .kk-logo {
    display: block;

    width: 120px;
    height: 40px;

    max-width: 120px;
    max-height: 40px;

    object-fit: contain;
    object-position: center;

    flex: 0 0 auto;

    user-select: none;
    -webkit-user-drag: none;
  }

  /* =========================
     CONTACT BUTTON
  ========================= */

  .kk-contact-button {
    min-width: 92px;
    width: 92px;
    height: 34px;

    padding: 0 10px;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    gap: 4px;

    flex: 0 0 92px;

    border-radius: 999px;

    background:
      linear-gradient(
        135deg,
        #0180fd 0%,
        #0021af 100%
      );

    color: #ffffff;

    font-size: 9.5px;
    line-height: 1;
    font-weight: 500;

    white-space: nowrap;
    text-decoration: none;

    box-shadow:
      0 7px 18px
      rgba(0, 33, 175, 0.14);
  }

  .kk-contact-star {
    width: 9px;
    height: 9px;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    font-size: 9px;
    line-height: 1;

    flex: 0 0 9px;
  }

  /* =========================
     DROPDOWN HOLDER
  ========================= */

  .kk-desktop-dropdown-holder {
    position: absolute;

    top: 100%;
    left: 0;

    width: max-content;
    max-width: calc(100vw - 24px);

    z-index: 99999;
  }

  /* =========================
     DROPDOWN COMMON
  ========================= */

  .kk-simple-dropdown,
  .kk-wide-dropdown {
    position: relative;

    display: block;

    background: #f3f8ff;

    border:
      1px solid
      rgba(14, 14, 14, 0.16);

    border-radius:
      0 0 10px 10px;

    box-shadow:
      0 18px 50px
      rgba(14, 14, 14, 0.14);
  }

  .kk-simple-dropdown {
    width: 210px;
    padding: 16px 18px;
  }

  .kk-wide-dropdown {
    padding: 24px;
  }

  /* =========================
     DROPDOWN TEXT
  ========================= */

  .kk-dropdown-link {
    display: block;

    color: #0e0e0e;

    font-size: 12px;
    line-height: 1.35;
    font-weight: 500;

    text-decoration: none;
  }

  .kk-dropdown-link + .kk-dropdown-link {
    margin-top: 16px;
  }

  /* =========================
     SERVICES
  ========================= */

  .kk-services-dropdown {
    width:
      min(
        900px,
        calc(100vw - 28px)
      );
  }

  .kk-services-grid {
    display: grid;

    grid-template-columns:
      1.1fr
      1fr
      1fr
      1fr;

    gap: 18px;
  }

  .kk-dropdown-heading {
    margin-bottom: 16px;

    color: #0021af;

    font-size: 13px;
    line-height: 1.2;
    font-weight: 700;
  }

  .kk-services-column
  .kk-dropdown-link
  + .kk-dropdown-link {
    margin-top: 13px;
  }

  /* =========================
     CTA
  ========================= */

  .kk-dropdown-cta {
    margin-top: 22px;

    min-height: 82px;

    padding: 16px 18px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 18px;

    border-radius: 17px;

    background:
      linear-gradient(
        135deg,
        #0180fd 0%,
        #0021af 100%
      );

    color: #ffffff;
  }

  .kk-dropdown-cta-copy {
    min-width: 0;

    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .kk-dropdown-cta-copy strong {
    font-size: 14px;
    line-height: 1.2;
    font-weight: 700;
  }

  .kk-dropdown-cta-copy span {
    font-size: 12px;
    line-height: 1.3;
    font-weight: 500;
  }

  .kk-dropdown-cta-button {
    flex: 0 0 auto;

    min-width: 135px;
    height: 46px;

    padding: 0 18px;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    border-radius: 999px;

    background: #f3f8ff;
    color: #0021af;

    font-size: 11px;
    font-weight: 700;

    text-decoration: none;
  }

  /* =========================
     INDUSTRIES
  ========================= */

  .kk-industries-dropdown {
    width:
      min(
        720px,
        calc(100vw - 28px)
      );
  }

  .kk-industries-grid {
    display: grid;

    grid-template-columns:
      repeat(
        3,
        minmax(0, 1fr)
      );

    column-gap: 28px;
    row-gap: 17px;
  }

  /* =========================
     PORTFOLIO
  ========================= */

  .kk-portfolio-dropdown {
    width:
      min(
        820px,
        calc(100vw - 28px)
      );
  }

  .kk-portfolio-list {
    display: grid;

    grid-template-columns:
      repeat(
        2,
        minmax(0, 1fr)
      );

    gap: 18px 22px;
  }

  .kk-portfolio-row {
    display: grid;

    grid-template-columns:
      88px
      minmax(0, 1fr);

    gap: 12px;

    align-items: center;

    min-width: 0;
  }

  .kk-portfolio-placeholder {
    width: 88px;
    height: 66px;

    border-radius: 10px;

    border:
      1px solid
      rgba(14, 14, 14, 0.08);

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;
  }

  .kk-portfolio-logo {
    max-width: 78%;
    max-height: 68%;

    object-fit: contain;
  }

  /* =========================
     RESOURCES
  ========================= */

  .kk-resources-dropdown {
    width:
      min(
        840px,
        calc(100vw - 28px)
      );

    padding: 20px 24px;
  }

  .kk-resource-header {
    margin: 0 0 16px;

    font-size: 15px;
    line-height: 1;
    font-weight: 500;
  }

  .kk-resources-list {
    display: grid;
    gap: 16px;
  }

  .kk-resource-row {
    width: 100%;

    display: grid;

    grid-template-columns:
      230px
      minmax(0, 1fr);

    column-gap: 20px;

    align-items: start;
  }

  .kk-resource-image {
    width: 230px;
    height: 112px;

    overflow: hidden;

    border-radius: 12px;

    background: #e9eef6;
  }

  .kk-resource-link {
    width: 100%;

    margin-top: 4px;

    font-size: 14px;
    line-height: 1.4;
    font-weight: 500;
  }
}

        /* =====================================================
           MOBILE (<=767px)
        ===================================================== */
        @media (max-width: 767px) {
          .kk-header-inner {
            width: 100%;
            height: 74px;
            min-height: 74px;
            padding: 0 18px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .kk-nav-left, .kk-nav-right { display: none; }

          .kk-logo-link {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 145px;
            height: 44px;
            flex: 0 0 145px;
            transform: translate(-50%, -50%);
          }

          .kk-logo { width: 145px; height: 44px; max-width: 145px; max-height: 44px; }

          .kk-menu-button {
            display: flex;
            width: 44px;
            height: 44px;
            min-width: 44px;
            min-height: 44px;
            padding: 0;
            margin-left: auto;
            border: 0;
            border-radius: 50%;
            background: #0021af;
            cursor: pointer;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 5px;
            flex-shrink: 0;
          }

          .kk-menu-button span {
            display: block;
            width: 18px;
            height: 1.5px;
            flex: 0 0 1.5px;
            background: #ffffff;
            transition: transform 0.25s ease, opacity 0.25s ease;
          }

          .kk-menu-button.is-open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
          .kk-menu-button.is-open span:nth-child(2) { opacity: 0; }
          .kk-menu-button.is-open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

          .kk-mobile-menu {
            display: block;
            width: 100%;
            max-height: 0;
            overflow: hidden;
            background: #f3f8ff;
            border-top: 1px solid rgba(14, 14, 14, 0.08);
            opacity: 0;
            transition: max-height 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.25s ease;
          }

          .kk-mobile-menu.is-open {
            max-height: calc(100vh - 74px);
            opacity: 1;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
          }

          .kk-mobile-nav {
            width: 100%;
            display: flex;
            flex-direction: column;
            padding: 10px 20px 32px;
          }

          .kk-mobile-dropdown-wrap { width: 100%; min-width: 0; }

          .kk-mobile-top-row {
            width: 100%;
            display: grid;
            grid-template-columns: minmax(0, 1fr) 44px;
            align-items: center;
            border-bottom: 1px solid rgba(14, 14, 14, 0.08);
          }

          .kk-mobile-link {
  width: 100%;
  min-height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: #0e0e0e;
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  text-decoration: none;

  border: 0;
  outline: none;
  box-shadow: none;
  background: transparent;

  text-align: left;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

.kk-mobile-link:focus,
.kk-mobile-link:focus-visible,
.kk-mobile-primary-link:focus,
.kk-mobile-primary-link:focus-visible {
  outline: none !important;
  box-shadow: none !important;
}
     .kk-mobile-primary-link {
  width: 100%;
  min-width: 0;
  padding: 0;
  margin: 0;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  border: 0;
  outline: none;
  box-shadow: none;
  background: transparent;

  color: #0e0e0e;
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  text-align: left;

  cursor: pointer;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
}
 

          .kk-mobile-expand {
            width: 44px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 0;
            background: transparent;
            cursor: pointer;
            flex-shrink: 0;
          }

          .kk-mobile-expand .kk-chevron { transition: transform 0.25s ease; }
          .kk-mobile-expand.is-open .kk-chevron { transform: translateY(1px) scaleX(0.9) rotate(180deg); }

          /*
            Collapse animation: the animated element (.kk-mobile-submenu)
            has exactly ONE child (.kk-mobile-submenu-inner), which is
            what lets grid-template-rows: 0fr -> 1fr actually shrink the
            row to zero height when closed. min-height: 0 on the inner
            wrapper is required so it can shrink below its content size.
          */
          .kk-mobile-submenu {
            display: grid;
            grid-template-rows: 0fr;
            opacity: 0;
            overflow: hidden;
            transition: grid-template-rows 0.35s ease, opacity 0.25s ease;
          }

          .kk-mobile-submenu.is-open { grid-template-rows: 1fr; opacity: 1; }

          .kk-mobile-submenu-inner {
            min-height: 0;
            overflow: hidden;
            display: flex;
            flex-direction: column;
          }

          .kk-mobile-sublink {
            min-height: 45px;
            padding: 0 6px;
            display: flex;
            align-items: center;
            color: #0e0e0e;
            text-decoration: none;
            font-size: 14px;
            line-height: 1.35;
            border-bottom: 1px solid rgba(14, 14, 14, 0.05);
          }

          .kk-mobile-sublink.kk-disabled-link {
            cursor: default;
            pointer-events: none;
          }

          /* Services column groups inside the mobile submenu */
          .kk-mobile-sub-group {
            display: flex;
            flex-direction: column;
          }

          .kk-mobile-sub-group:first-child { margin-top: 6px; }

          .kk-mobile-sub-heading {
            display: block;
            padding: 14px 6px 6px;
            color: #0021af;
            font-size: 13px;
            font-weight: 700;
            line-height: 1.3;
            text-decoration: none;
          }

          .kk-mobile-sub-heading.kk-disabled-link { color: #0021af; }

          /* Portfolio items — small logo tile + label, matches the
             desktop tinted-tile treatment scaled for mobile width. */
          .kk-mobile-portfolio-item {
            width: 100%;
            min-width: 0;
            display: flex;
            align-items: center;
            gap: 14px;
            min-height: 66px;
            padding: 10px 6px;
            border-bottom: 1px solid rgba(14, 14, 14, 0.05);
            color: #0e0e0e;
            text-decoration: none;
          }

          .kk-mobile-portfolio-thumb {
            width: 60px;
            height: 50px;
            flex: 0 0 60px;
            border-radius: 10px;
            border: 1px solid rgba(14, 14, 14, 0.08);
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
          }

          .kk-mobile-portfolio-thumb img {
            max-width: 78%;
            max-height: 68%;
            object-fit: contain;
          }

          .kk-mobile-portfolio-label {
            min-width: 0;
            font-size: 13.5px;
            line-height: 1.4;
            font-weight: 500;
          }

          /* Resource items — image on top (full width, real aspect
             ratio so it never gets squashed), label below. */
          .kk-mobile-resource-item {
            width: 100%;
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding: 14px 6px;
            border-bottom: 1px solid rgba(14, 14, 14, 0.05);
            color: #0e0e0e;
            text-decoration: none;
          }

          .kk-mobile-resource-image {
            width: 100%;
            aspect-ratio: 16 / 9;
            border-radius: 14px;
            overflow: hidden;
            background: #e9eef6;
          }

          .kk-mobile-resource-image img {
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
            object-position: center;
            user-select: none;
            pointer-events: none;
            -webkit-user-drag: none;
          }

          .kk-mobile-resource-label {
            font-size: 15px;
            line-height: 1.45;
            font-weight: 500;
          }

          .kk-mobile-book-link {
            min-height: 48px;
            margin: 12px 0 8px;
            padding: 0 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            border-radius: 999px;
            background: linear-gradient(135deg, #0180fd 0%, #0021af 100%);
            color: #ffffff;
            font-size: 14px;
            font-weight: 700;
            text-decoration: none;
          }

          .kk-mobile-divider {
            width: 100%;
            height: 10px;
            border-bottom: 1px solid rgba(14, 14, 14, 0.08);
            margin-bottom: 4px;
          }

          .kk-mobile-contact {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            width: 100%;
            min-height: 50px;
            margin-top: 18px;
            border-radius: 999px;
            background: linear-gradient(135deg, #0180fd 0%, #0021af 100%);
            color: #ffffff;
            font-size: 15px;
            font-weight: 500;
            text-decoration: none;
          }
        }

        /* SMALL MOBILE */
        @media (max-width: 480px) {
          .kk-header-inner { height: 68px; min-height: 68px; padding: 0 14px; }
          .kk-logo-link { width: 135px; height: 42px; flex-basis: 135px; }
          .kk-logo { width: 135px; height: 42px; max-width: 135px; max-height: 42px; }
          .kk-menu-button { width: 42px; height: 42px; min-width: 42px; min-height: 42px; }
          .kk-mobile-menu.is-open { max-height: calc(100vh - 68px); }
          .kk-mobile-nav { padding: 8px 16px 24px; }
          .kk-mobile-link { min-height: 50px; font-size: 15px; }
          .kk-mobile-resource-label { font-size: 14px; }
        }

        /* TOUCH */
        @media (hover: none) {
          .kk-nav-link:hover { opacity: 1; }
          .kk-contact-button:hover { transform: none; box-shadow: 0 8px 24px rgba(0, 33, 175, 0.14); }
        }

        /* REDUCED MOTION */
        @media (prefers-reduced-motion: reduce) {
          .kk-mobile-menu, .kk-menu-button span, .kk-nav-link, .kk-contact-button, .kk-mobile-submenu, .kk-desktop-dropdown-holder, .kk-mobile-expand .kk-chevron {
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
}