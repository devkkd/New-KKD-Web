"use client";

import { useState } from "react";
import ResumeModal from "@/components/ResumeModal";
const POSITIONS = [
  {
    id: 1,
    title: "Videographer",
    type: "Full-time, Jaipur, India",
  },
  {
    id: 2,
    title: "Video Editor",
    type: "Full-time, Jaipur, India",
  },
  {
    id: 3,
    title: "Business Development Executive / Intern",
    type: "Full-time / Internship, Jaipur, India",
  },
];

const POSITION_CONTENT = {
  1: {
    about:
      "We're looking for a creative Videographer who can turn ideas, brands, people, and everyday moments into engaging visual stories. You'll work closely with our creative, marketing, and business teams to produce high-quality video content for brands, campaigns, social media, websites, and digital platforms.",

    whatYouDo:
      "Plan and shoot high-quality videos for social media, marketing campaigns, websites, client projects, and brand content. Handle camera setups, framing, lighting, audio, and on-location shoots. Collaborate with creative and marketing teams to understand concepts, prepare shot lists, and bring ideas to life. You'll also help maintain visual consistency across different projects.",

    whatWeLook:
      "1+ year of experience in videography, content production, or a similar role. Strong understanding of cameras, lenses, lighting, framing, and composition. Experience creating content for Instagram, YouTube, websites, and digital campaigns. A good visual sense, attention to detail, and the ability to work in fast-moving creative environments. Knowledge of basic video editing is a plus.",
  },

  2: {
    about:
      "We're looking for a creative Video Editor who knows how to turn raw footage into sharp, engaging, and story-driven content. You'll work with our creative, marketing, and production teams to create videos for social media, campaigns, brands, websites, and client projects.",

    whatYouDo:
      "Edit short-form and long-form video content for Instagram, YouTube, advertisements, websites, and brand campaigns. Select the best footage, create clean cuts, add transitions, music, sound design, subtitles, motion graphics, and basic visual effects where needed. Work with the creative and videography teams to understand the intended mood, story, and audience. Ensure every final video is polished, engaging, and aligned with the brand.",

    whatWeLook:
      "1+ year of experience in video editing, content creation, or a similar role. Strong command of Premiere Pro, DaVinci Resolve, Final Cut Pro, or similar editing software. Good understanding of pacing, storytelling, music, transitions, typography, and visual composition. Experience editing social media content such as Reels, Shorts, and promotional videos. Strong attention to detail, creativity, and the ability to work within deadlines.",
  },

  3: {
    about:
      "We're looking for a Business Development Executive / Intern who is energetic, confident, and genuinely interested in building relationships and growing business. You'll work closely with our leadership, sales, and marketing teams to identify opportunities, connect with potential clients, and help turn conversations into meaningful business relationships.",

    whatYouDo:
      "Research and identify potential clients, businesses, and new growth opportunities. Reach out to prospects through calls, emails, LinkedIn, social media, and other relevant channels. Understand client requirements, introduce our services, schedule meetings, maintain follow-ups, and support the sales pipeline. Work closely with internal teams to understand our services and communicate them clearly to prospects. For the internship role, you'll also receive hands-on exposure to lead generation, sales, client communication, and business development.",

    whatWeLook:
      "Strong communication and interpersonal skills with confidence in speaking to new people. Good understanding of basic sales, lead generation, and business development concepts. Ability to research prospects, write professional messages, and maintain consistent follow-ups. A proactive attitude, willingness to learn, and strong ownership of tasks. Freshers and students with strong communication skills are welcome to apply for the internship role. Prior experience in sales, business development, or client acquisition is a plus.",
  },
};

export default function CareersSection() {
  const [hoveredApply, setHoveredApply] = useState(null);
  const [hoveredResume, setHoveredResume] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("");

  return (
    <main className="careers-page">

      {/* =====================================================
          HERO
          IMAGE 1
      ===================================================== */}

      <section className="careers-hero">
        <div className="careers-hero-inner">

          {/* LEFT */}

          <div className="careers-hero-left">
            <div className="careers-hero-heading">
              <span>Step Outside</span>
              <span className="careers-hero-arrow">
                ▲
              </span>
            </div>

            <div className="careers-hero-left-subtitle">
              Join the Journey
            </div>
          </div>

          {/* CENTER IMAGE */}

          <div className="careers-hero-image-wrap">
            <img
              src="/career/1.png"
              alt="Career at Kontent Kraft Digital"
              className="careers-hero-image"
              width="600"
              height="500"
              draggable="false"
            />
          </div>

          {/* RIGHT */}

          <div className="careers-hero-right">
            <div className="careers-hero-heading">
              The Ordinary
            </div>

            <div className="careers-hero-right-copy">
              Let&apos;s Build Something Bigger, Together
            </div>

            <div className="careers-hero-hours">
              Weekly Hours 38/40
            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          FULL WIDTH COLLAGE
          IMAGE 2 - 8

          IMPORTANT:
          This section is OUTSIDE the padded container.
      ===================================================== */}

      <section className="careers-collage-section">
        <div className="careers-collage">

          {/* IMAGE 2 */}

          <div className="collage-item collage-large">
            <img
              src="/career/2.png"
              alt=""
              draggable="false"
            />
          </div>

          {/* IMAGE 3 + 4 */}

          <div className="collage-item collage-stack">

            <div className="collage-stack-item">
              <img
                src="/career/3.png"
                alt=""
                draggable="false"
              />
            </div>

            <div className="collage-stack-item">
              <img
                src="/career/4.png"
                alt=""
                draggable="false"
              />
            </div>

          </div>

          {/* IMAGE 5 */}

          <div className="collage-item collage-large">
            <img
              src="/career/5.png"
              alt=""
              draggable="false"
            />
          </div>

          {/* IMAGE 6 + 7 */}

          <div className="collage-item collage-stack">

            <div className="collage-stack-item">
              <img
                src="/career/6.png"
                alt=""
                draggable="false"
              />
            </div>

            <div className="collage-stack-item">
              <img
                src="/career/7.png"
                alt=""
                draggable="false"
              />
            </div>

          </div>

          {/* IMAGE 8 */}

          <div className="collage-item collage-large">
            <img
              src="/career/8.png"
              alt=""
              draggable="false"
            />
          </div>

        </div>
      </section>


      {/* =====================================================
          PADDED CONTENT
      ===================================================== */}

      <section className="careers-content">
        <div className="careers-container">

          {/* =================================================
              INTRO
          ================================================= */}

          <section className="careers-intro">

            <h2>
              Build Things That Matter, With People Who Care
            </h2>

            <p>
              At <strong>Kontent Kraft Digital</strong>,
              we&apos;re a team of designers, developers,
              strategists, and creators who genuinely like
              the work we do and the people we do it with.
            </p>

            <p>
              If you want to build real products for real
              businesses, and grow while you do it,
              we&apos;d love to hear from you.
            </p>

          </section>


          {/* =================================================
              OPEN POSITIONS
          ================================================= */}

          <section className="careers-positions">

            <div className="careers-section-heading">
              Open Positions
            </div>

            {POSITIONS.map((position) => (
              <article
                className="career-position"
                key={position.id}
              >

                {/* LEFT */}

                <div className="career-position-title">
                  <h3>
                    {position.title}
                  </h3>

                  <p>
                    {position.type}
                  </p>
                </div>


                {/* MIDDLE */}
<div className="career-position-details">

  <div>
    <h4>
      About the Role
    </h4>

    <p>
      {POSITION_CONTENT[position.id].about}
    </p>
  </div>

  <div>
    <h4>
      What You'll Do
    </h4>

    <p>
      {POSITION_CONTENT[position.id].whatYouDo}
    </p>
  </div>

  <div>
    <h4>
      What We're Looking For
    </h4>

    <p>
      {POSITION_CONTENT[position.id].whatWeLook}
    </p>
  </div>

</div>


                {/* RIGHT */}

                <div className="career-position-action">
                 <button
  type="button"
  className={`career-apply-button ${
    hoveredApply === position.id
      ? "is-hovered"
      : ""
  }`}
  onClick={() => {
    setSelectedPosition(position.title);
    setResumeOpen(true);
  }}
  onMouseEnter={() =>
    setHoveredApply(position.id)
  }
  onMouseLeave={() =>
    setHoveredApply(null)
  }
>
  <span>
    Apply Now
  </span>

  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M5 1.2L8.7 8.2H1.3L5 1.2Z"
      fill="currentColor"
    />
  </svg>
</button>
                </div>

              </article>
            ))}

          </section>


          {/* =================================================
              CTA
          ================================================= */}

          <section className="careers-cta">

            <div className="careers-cta-inner">

              <h2>
                Don&apos;t See the Right Fit?
              </h2>

              <p>
                We&apos;re always open to meeting talented
                people.
                <br />
                Send us your resume anyway, and we&apos;ll
                reach out if something opens up that fits.
              </p>

             <button
  type="button"
  className={`careers-resume-button ${
    hoveredResume
      ? "is-hovered"
      : ""
  }`}
  onClick={() =>
    setResumeOpen(true)
  }
  onMouseEnter={() =>
    setHoveredResume(true)
  }
  onMouseLeave={() =>
    setHoveredResume(false)
  }
>
  <span>
    Send Your Resume
  </span>

  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M5 1.2L8.7 8.2H1.3L5 1.2Z"
      fill="currentColor"
    />
  </svg>
</button>

            </div>

          </section>


          {/* =================================================
              LIFE
          ================================================= */}

          <section className="careers-life">

            <div className="careers-life-heading">

              <h2>
                Life @ Kontent Kraft Digital
              </h2>

              <p>
                Good work happens when good people enjoy
                building it together.
                <br />
                Here, that&apos;s not a perk. It&apos;s how we
                work.
              </p>

            </div>

          </section>

        </div>
      </section>


      {/* =====================================================
          FINAL FULL WIDTH IMAGE
          IMAGE 9
      ===================================================== */}

      <section className="careers-full-image">
        <img
          src="/career/9.png"
          alt="Life at Kontent Kraft Digital"
          width="2000"
          height="900"
          draggable="false"
        />
      </section>

<ResumeModal
  open={resumeOpen}
  onClose={() =>
    setResumeOpen(false)
  }
  selectedPosition={selectedPosition}
/>
      {/* =====================================================
          CSS
      ===================================================== */}

      <style>{`

        /* =====================================================
           PAGE
        ===================================================== */

        .careers-page {
          width: 100%;
          max-width: 100%;

          min-height: 100vh;

          margin: 0;
          padding: 0;

          background: #F3F8FF;

          color: #0E0E0E;

          font-family:
            "Britti Sans Trial",
            Arial,
            Helvetica,
            sans-serif;

          overflow-x: hidden;

          box-sizing: border-box;
        }

        .careers-page *,
        .careers-page *::before,
        .careers-page *::after {
          box-sizing: border-box;
        }


        /* =====================================================
           HERO
        ===================================================== */

        .careers-hero {
          width: 100%;

          background: #F3F8FF;

          padding:
            42px 0 0;

          overflow: hidden;
        }

        .careers-hero-inner {
          width: 100%;

          max-width: 1400px;

          min-height: 290px;

          margin: 0 auto;

          padding:
            0 62px;

          display: grid;

          grid-template-columns:
            minmax(0, 1fr)
            360px
            minmax(0, 1fr);

          align-items: center;

          column-gap: 30px;

          box-sizing: border-box;
        }


        /* =====================================================
           HERO LEFT
        ===================================================== */

        .careers-hero-left {
          width: 100%;

          display: flex;

          flex-direction: column;

          align-items: flex-end;

          justify-content: center;

          text-align: right;

          padding-bottom: 20px;
        }

        .careers-hero-heading {
          display: flex;

          align-items: center;

          justify-content: flex-start;

          gap: 6px;

          font-size: 28px;

          line-height: 1.05;

          font-weight: 700;

          letter-spacing:
            -0.04em;

          color: #0E0E0E;
        }

        .careers-hero-arrow {
          font-size: 14px;

          line-height: 1;
        }

        .careers-hero-left-subtitle {
          width: 100%;

          margin-top: 20px;

          font-size: 16px;

          line-height: 1.2;

          font-weight: 600;

          color: #0E0E0E;
        }


        /* =====================================================
           HERO IMAGE
        ===================================================== */

        .careers-hero-image-wrap {
          width: 100%;

          height: 290px;

          display: flex;

          align-items: center;

          justify-content: center;

          overflow: visible;
        }

        .careers-hero-image {
          display: block;

          width: 100%;

          height: 290px;

          max-width: 360px;

          max-height: 290px;

          object-fit: contain;

          object-position: center;

          user-select: none;

          pointer-events: none;

          -webkit-user-drag: none;
        }


        /* =====================================================
           HERO RIGHT
        ===================================================== */

        .careers-hero-right {
          width: 100%;

          align-self: center;

          text-align: left;

          padding-bottom: 8px;
        }

        .careers-hero-right-copy {
          width: 100%;

          margin-top: 16px;

          font-size: 13px;

          line-height: 1.4;

          font-weight: 400;

          color: #0E0E0E;
        }

        .careers-hero-hours {
          margin-top: 14px;

          font-size: 14px;

          line-height: 1.25;

          font-weight: 700;

          color: #0E0E0E;
        }


        /* =====================================================
           FULL WIDTH COLLAGE
           
           NO 62px PADDING
           NO CONTAINER
        ===================================================== */

        .careers-collage-section {
          width: 100%;

          max-width: 100%;

          margin: 0;

          padding:
            18px 0 0;

          overflow: hidden;

          line-height: 0;

          background: #F3F8FF;
        }

        .careers-collage {
          width: 100%;

          height: 424px;

          margin: 0;

          padding: 0;

          display: grid;

          grid-template-columns:
            1.15fr
            0.72fr
            0.95fr
            0.72fr
            1.15fr;

          gap: 7px;

          align-items: stretch;

          overflow: hidden;
        }

        .collage-item {
          min-width: 0;

          height: 424px;

          overflow: hidden;

          border-radius: 7px;

          background: #E9EEF6;

          line-height: 0;
        }

        .collage-item img {
          width: 100%;

          height: 100%;

          display: block;

          object-fit: cover;

          object-position: center;

          user-select: none;

          pointer-events: none;

          -webkit-user-drag: none;
        }

        .collage-stack {
          display: flex;

          flex-direction: column;

          gap: 7px;
        }

        .collage-stack-item {
          width: 100%;

          min-height: 0;

          height:
            calc(
              50% - 3.5px
            );

          overflow: hidden;

          border-radius: 7px;

          background: #E9EEF6;

          line-height: 0;
        }

        .collage-stack-item img {
          width: 100%;

          height: 100%;

          display: block;

          object-fit: cover;

          object-position: center;
        }


        /* =====================================================
           PADDED CONTENT
        ===================================================== */

        .careers-content {
          width: 100%;

          padding:
            28px 62px 0;

          box-sizing: border-box;
        }

        .careers-container {
          width: 100%;

          max-width: 1400px;

          margin: 0 auto;
        }


        /* =====================================================
           INTRO
        ===================================================== */

        .careers-intro {
          width: 100%;

          max-width: 850px;

          margin:
            28px auto 0;

          text-align: center;
        }

        .careers-intro h2 {
          margin: 0;

          font-size: 22px;

          line-height: 1.25;

          font-weight: 700;

          letter-spacing:
            -0.035em;

          color: #0E0E0E;
        }

        .careers-intro p {
          margin:
            24px auto 0;

          max-width: 700px;

          font-size: 16px;

          line-height: 1.7;

          font-weight: 400;

          color: #0E0E0E;
        }

        .careers-intro p + p {
          margin-top:
            16px;
        }

        .careers-intro strong {
          font-weight: 700;
        }


        /* =====================================================
           POSITIONS
        ===================================================== */

        .careers-positions {
          width: 100%;

          margin-top:
            42px;
        }

        .careers-section-heading {
          width: 100%;

          margin:
            0 0 20px;

          padding:
            0 0 16px;

          border-bottom:
            1px solid
            #D5DDE8;

          font-size: 20px;

          line-height: 1.2;

          font-weight: 700;

          color: #0E0E0E;
        }


        /* =====================================================
           POSITION
        ===================================================== */

        .career-position {
          width: 100%;

          display: grid;

          grid-template-columns:
            0.72fr
            2fr
            0.34fr;

          column-gap:
            36px;

          align-items:
            start;

          padding:
            0 0 25px;

          margin:
            0 0 25px;

          border-bottom:
            1px solid
            #D5DDE8;
        }

        .career-position:last-child {
          margin-bottom:
            0;
        }


        /* =====================================================
           POSITION TITLE
        ===================================================== */

        .career-position-title {
          min-width: 0;
        }

        .career-position-title h3 {
          margin: 0;

          font-size: 16px;

          line-height: 1.2;

          font-weight: 700;

          color: #0E0E0E;
        }

        .career-position-title p {
          margin:
            7px 0 0;

          font-size: 12px;

          line-height: 1.35;

          font-weight: 400;

          color: #0E0E0E;
        }


        /* =====================================================
           DETAILS
        ===================================================== */

        .career-position-details {
          width: 100%;

          min-width: 0;

          display: flex;

          flex-direction: column;

          gap: 13px;
        }

        .career-position-details h4 {
          margin:
            0 0 4px;

          font-size: 14px;

          line-height: 1.2;

          font-weight: 700;

          color: #0E0E0E;
        }

        .career-position-details p {
          margin: 0;

          font-size: 12px;

          line-height: 1.5;

          font-weight: 400;

          color: #0E0E0E;
        }


        /* =====================================================
           APPLY
        ===================================================== */

        .career-position-action {
          display: flex;

          align-items: flex-start;

          justify-content: flex-end;

          padding-top:
            1px;
        }

        .career-apply-button {
  width: 120px;
  height: 40px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 6px;

  margin: 0;
  padding: 0;

  border: 0;
  outline: none;
  appearance: none;
  -webkit-appearance: none;

  border-radius: 999px;

  background:
    linear-gradient(
      135deg,
      #0180FD 0%,
      #0021AF 100%
    );

  color: #FFFFFF;

  font-family: inherit;

  font-size: 13px;
  line-height: 1;

  font-weight: 600;

  text-decoration: none;

  white-space: nowrap;

  cursor: pointer;

  box-shadow: none;

  box-sizing: border-box;

  -webkit-tap-highlight-color: transparent;
}

        .career-apply-button:hover,
        .career-apply-button.is-hovered {
          transform:
            translateY(-2px);

          box-shadow:
            0 8px 18px
            rgba(
              0,
              33,
              175,
              0.18
            );
        }


        /* =====================================================
           CTA
        ===================================================== */

        .careers-cta {
          width:
            100%;

          margin-top:
            30px;
        }

        .careers-cta-inner {
          width:
            100%;

          min-height:
            228px;

          padding:
            32px 24px;

          display:
            flex;

          flex-direction:
            column;

          align-items:
            center;

          justify-content:
            center;

          text-align:
            center;

          border-radius:
            14px;

         background:
  linear-gradient(
    180deg,
    #0180FD 0%,
    #0021AF 100%
  );

          color:
            #FFFFFF;
        }

        .careers-cta-inner h2 {
          margin:
            0;

          font-size:
            22px;

          line-height:
            1.2;

          font-weight:
            700;

          letter-spacing:
            -0.035em;

          color:
            #FFFFFF;
        }

        .careers-cta-inner p {
          margin:
            13px 0 0;

          font-size:
            13px;

          line-height:
            1.55;

          font-weight:
            400;

          color:
            rgba(
              255,
              255,
              255,
              0.94
            );
        }

        .careers-resume-button {
          width:
            150px;

          height:
            37px;

          margin-top:
            16px;

          display:
            inline-flex;

          align-items:
            center;

          justify-content:
            center;

          gap:
            4px;

          border-radius:
            999px;

          background:
            #FFFFFF;

          color:
            #0021AF;

          font-family:
            inherit;

          font-size:
            12px;

          line-height:
            1;

          font-weight:
            400;

          text-decoration:
            none;

          white-space:
            nowrap;

          transition:
            transform
            0.25s ease,
            box-shadow
            0.25s ease;
        }

        .careers-resume-button:hover,
        .careers-resume-button.is-hovered {
          transform:
            translateY(-2px);

          box-shadow:
            0 8px 18px
            rgba(
              0,
              0,
              0,
              0.17
            );
        }

.careers-resume-button {
  border: none;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
}
        /* =====================================================
           LIFE
        ===================================================== */

        .careers-life {
          width:
            100%;

          padding:
            44px 0
            24px;
        }

        .careers-life-heading {
          width:
            100%;

          display:
            grid;

          grid-template-columns:
            1fr
            1fr;

          align-items:
            center;

          column-gap:
            50px;
        }

        .careers-life-heading h2 {
          margin:
            0;

          font-size:
            18px;

          line-height:
            1.2;

          font-weight:
            700;

          color:
            #0E0E0E;
        }

        .careers-life-heading p {
          margin:
            0;

          max-width:
            430px;

          justify-self:
            end;

          font-size:
            13px;

          line-height:
            1.55;

          font-weight:
            400;

          color:
            #0E0E0E;
        }


        /* =====================================================
           FINAL FULL WIDTH IMAGE
        ===================================================== */

        .careers-full-image {
          width:
            100%;

          max-width:
            100%;

          margin:
            0;

            padding: 0 0 70px;

          overflow:
            hidden;

          line-height:
            0;

          background:
            #F3F8FF;
        }

        .careers-full-image img {
          display:
            block;

          width:
            100%;

          max-width:
            none;

          height:
            auto;

          margin:
            0;

          padding:
            0;

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
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1100px) {

          .careers-hero-inner {
            padding:
              0 40px;

            grid-template-columns:
              minmax(0, 1fr)
              300px
              minmax(0, 1fr);

            column-gap:
              22px;
          }

          .careers-content {
            padding:
              18px 40px
              0;
          }

          .careers-collage {
            height:
              160px;
          }

          .collage-item {
            height:
              160px;
          }

          .career-position {
            column-gap:
              26px;
          }
        }


        /* =====================================================
           MOBILE
        ===================================================== */

     /* =====================================================
   MOBILE
   767px and below
===================================================== */

@media (max-width: 767px) {

  /* ===================================================
     HERO
  =================================================== */

  .careers-hero {
    width: 100%;
    padding: 18px 20px 0;
    overflow: hidden;
  }

  .careers-hero-inner {
    width: 100%;
    max-width: none;

    min-height: auto;

    margin: 0;
    padding: 0;

    display: grid;

    grid-template-columns: 1fr;

    grid-template-rows:
      auto
      190px
      auto;

    row-gap: 4px;

    align-items: center;
  }

  .careers-hero-left {
    width: 100%;

    padding: 0;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    text-align: center;

    order: 1;
  }

  .careers-hero-heading {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 7px;

    font-size: 24px;
    line-height: 1.1;
    font-weight: 700;

    letter-spacing: -0.035em;
  }

  .careers-hero-arrow {
    font-size: 12px;
    line-height: 1;
  }

  .careers-hero-left-subtitle {
    width: 100%;

    margin-top: 9px;

    font-size: 13px;
    line-height: 1.3;
    font-weight: 600;

    text-align: center;
  }

  /* ===================================================
     HERO IMAGE
  =================================================== */

  .careers-hero-image-wrap {
    width: 100%;
    height: 190px;

    display: flex;
    align-items: center;
    justify-content: center;

    order: 2;

    overflow: visible;
  }

  .careers-hero-image {
    display: block;

    width: 100%;
    height: 190px;

    max-width: 330px;
    max-height: 190px;

    object-fit: contain;
    object-position: center;

    user-select: none;
    pointer-events: none;
    -webkit-user-drag: none;
  }

  /* ===================================================
     HERO RIGHT
  =================================================== */

  .careers-hero-right {
    width: 100%;

    padding: 0;

    align-self: center;

    text-align: center;

    order: 3;
  }

  .careers-hero-right .careers-hero-heading {
    justify-content: center;
  }

  .careers-hero-right-copy {
    width: 100%;

    max-width: 360px;

    margin: 9px auto 0;

    font-size: 13px;
    line-height: 1.45;

    font-weight: 400;

    text-align: center;
  }

  .careers-hero-hours {
    margin-top: 8px;

    font-size: 12px;
    line-height: 1.3;

    font-weight: 700;

    text-align: center;
  }

  /* ===================================================
     FULL WIDTH COLLAGE
  =================================================== */

  .careers-collage-section {
    width: 100%;
    max-width: 100%;

    margin: 0;
    padding: 22px 0 0;

    overflow: hidden;
  }

  .careers-collage {
    width: 100%;

    height: 175px;

    display: grid;

    grid-template-columns:
      1.15fr
      0.72fr
      0.95fr
      0.72fr
      1.15fr;

    gap: 4px;

    overflow: hidden;

    line-height: 0;
  }

  .collage-item {
    min-width: 0;

    height: 175px;

    overflow: hidden;

    border-radius: 5px;

    background: #E9EEF6;
  }

  .collage-item img {
    width: 100%;
    height: 100%;

    display: block;

    object-fit: cover;
    object-position: center;

    user-select: none;
    pointer-events: none;

    -webkit-user-drag: none;
  }

  .collage-stack {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .collage-stack-item {
    width: 100%;
    min-height: 0;

    height: calc(50% - 2px);

    overflow: hidden;

    border-radius: 5px;

    background: #E9EEF6;

    line-height: 0;
  }

  .collage-stack-item img {
    width: 100%;
    height: 100%;

    display: block;

    object-fit: cover;
    object-position: center;
  }

  /* ===================================================
     CONTENT
  =================================================== */

  .careers-content {
    width: 100%;

    padding:
      34px 20px 0;
  }

  .careers-container {
    width: 100%;
    max-width: none;
    margin: 0 auto;
  }

  /* ===================================================
     INTRO
  =================================================== */

  .careers-intro {
    width: 100%;
    max-width: 100%;

    margin:
      28px auto 0;

    text-align: center;
  }

  .careers-intro h2 {
    margin: 0;

    font-size: 22px;
    line-height: 1.25;

    font-weight: 700;

    letter-spacing: -0.025em;
  }

  .careers-intro p {
    width: 100%;
    max-width: 620px;

    margin:
      20px auto 0;

    font-size: 15px;
    line-height: 1.7;

    font-weight: 400;

    color: #0E0E0E;

    text-align: center;
  }

  .careers-intro p + p {
    margin-top: 14px;
  }

  .careers-intro strong {
    font-weight: 700;
  }

  /* ===================================================
     OPEN POSITIONS
  =================================================== */

  .careers-positions {
    width: 100%;

    margin-top: 42px;
  }

  .careers-section-heading {
    width: 100%;

    margin:
      0 0 20px;

    padding:
      0 0 14px;

    border-bottom:
      1px solid #D5DDE8;

    font-size: 18px;
    line-height: 1.2;

    font-weight: 700;
  }

  /* ===================================================
     POSITION CARD
  =================================================== */

  .career-position {
    width: 100%;

    display: flex;
    flex-direction: column;

    gap: 18px;

    padding:
      0 0 28px;

    margin:
      0 0 28px;

    border-bottom:
      1px solid #D5DDE8;
  }

  .career-position:last-child {
    margin-bottom: 0;
  }

  /* ===================================================
     POSITION TITLE
  =================================================== */

  .career-position-title {
    width: 100%;
    min-width: 0;
  }

  .career-position-title h3 {
    margin: 0;

    font-size: 20px;
    line-height: 1.25;

    font-weight: 700;

    color: #0E0E0E;
  }

  .career-position-title p {
    margin:
      7px 0 0;

    font-size: 13px;
    line-height: 1.4;

    font-weight: 400;

    color: #0E0E0E;
  }

  /* ===================================================
     POSITION DETAILS
  =================================================== */

  .career-position-details {
    width: 100%;
    min-width: 0;

    display: flex;
    flex-direction: column;

    gap: 19px;
  }

  .career-position-details h4 {
    margin:
      0 0 7px;

    font-size: 15px;
    line-height: 1.25;

    font-weight: 700;

    color: #0E0E0E;
  }

  .career-position-details p {
    margin: 0;

    font-size: 13px;
    line-height: 1.65;

    font-weight: 400;

    color: #0E0E0E;
  }

  /* ===================================================
     APPLY BUTTON
  =================================================== */

  .career-position-action {
    width: 100%;

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    padding-top: 0;
  }

  .career-apply-button {
    width: 120px;
    height: 40px;

    display: inline-flex;

    align-items: center;
    justify-content: center;

    gap: 6px;

    border-radius: 999px;

    background:
      linear-gradient(
        135deg,
        #0180FD 0%,
        #0021AF 100%
      );

    color: #FFFFFF;

    font-family: inherit;

    font-size: 13px;
    line-height: 1;

    font-weight: 600;

    text-decoration: none;

    white-space: nowrap;
  }

  .career-apply-button svg {
    width: 10px;
    height: 10px;

    display: block;

    flex-shrink: 0;
  }

  /* ===================================================
     CTA
  =================================================== */

  .careers-cta {
    width: 100%;

    margin-top: 12px;
  }

  .careers-cta-inner {
    width: 100%;

    min-height: 230px;

    padding:
      32px 22px;

    display: flex;

    flex-direction: column;

    align-items: center;
    justify-content: center;

    text-align: center;

    border-radius: 14px;

    background:
      linear-gradient(
        180deg,
        #0180FD 0%,
        #0021AF 100%
      );

    color: #FFFFFF;
  }

  .careers-cta-inner h2 {
    margin: 0;

    font-size: 22px;
    line-height: 1.25;

    font-weight: 700;

    letter-spacing: -0.025em;

    color: #FFFFFF;
  }

  .careers-cta-inner p {
    width: 100%;
    max-width: 430px;

    margin:
      14px 0 0;

    font-size: 14px;
    line-height: 1.6;

    font-weight: 400;

    color:
      rgba(255, 255, 255, 0.95);
  }

  .careers-resume-button {
    width: 155px;
    height: 40px;

    margin-top: 18px;

    display: inline-flex;

    align-items: center;
    justify-content: center;

    gap: 6px;

    border-radius: 999px;

    background: #FFFFFF;
    color: #0021AF;

    font-family: inherit;

    font-size: 13px;
    line-height: 1;

    font-weight: 600;

    text-decoration: none;

    white-space: nowrap;
  }

  .careers-resume-button svg {
    width: 10px;
    height: 10px;

    display: block;
    flex-shrink: 0;
  }

  /* ===================================================
     LIFE
  =================================================== */

  .careers-life {
    width: 100%;

    padding:
      44px 0 28px;
  }

  .careers-life-heading {
    width: 100%;

    display: grid;

    grid-template-columns: 1fr;

    row-gap: 14px;
  }

  .careers-life-heading h2 {
    margin: 0;

    font-size: 20px;
    line-height: 1.25;

    font-weight: 700;

    color: #0E0E0E;
  }

  .careers-life-heading p {
    width: 100%;

    max-width: 500px;

    margin: 0;

    justify-self: start;

    font-size: 14px;
    line-height: 1.65;

    font-weight: 400;

    color: #0E0E0E;
  }

  /* ===================================================
     FINAL IMAGE
  =================================================== */

  .careers-full-image {
    width: 100%;
    max-width: 100%;

    margin: 0;

    padding:
      0 0 50px;

    overflow: hidden;

    line-height: 0;

    background: #F3F8FF;
  }

  .careers-full-image img {
    display: block;

    width: 100%;
    max-width: none;

    height: auto;

    margin: 0;
    padding: 0;

    object-fit: cover;
    object-position: center;

    user-select: none;
    pointer-events: none;

    -webkit-user-drag: none;
  }
}


/* =====================================================
   SMALL MOBILE
   420px and below
===================================================== */

@media (max-width: 420px) {

  /* ===================================================
     HERO
  =================================================== */

  .careers-hero {
    padding:
      14px 16px 0;
  }

  .careers-hero-inner {
    grid-template-rows:
      auto
      170px
      auto;

    row-gap: 3px;
  }

  .careers-hero-heading {
    font-size: 22px;
  }

  .careers-hero-arrow {
    font-size: 11px;
  }

  .careers-hero-left-subtitle {
    margin-top: 8px;

    font-size: 12px;
  }

  .careers-hero-image-wrap,
  .careers-hero-image {
    height: 170px;
  }

  .careers-hero-image {
    max-width: 290px;
    max-height: 170px;
  }

  .careers-hero-right-copy {
    max-width: 330px;

    margin-top: 8px;

    font-size: 12px;
    line-height: 1.45;
  }

  .careers-hero-hours {
    margin-top: 7px;

    font-size: 11px;
  }

  /* ===================================================
     COLLAGE
  =================================================== */

  .careers-collage-section {
    padding:
      18px 0 0;
  }

  .careers-collage {
    height: 150px;

    gap: 3px;
  }

  .collage-item {
    height: 150px;

    border-radius: 4px;
  }

  .collage-stack {
    gap: 3px;
  }

  .collage-stack-item {
    height:
      calc(50% - 1.5px);

    border-radius: 4px;
  }

  /* ===================================================
     CONTENT
  =================================================== */

  .careers-content {
    padding:
      28px 16px 0;
  }

  /* ===================================================
     INTRO
  =================================================== */

  .careers-intro {
    margin-top: 24px;
  }

  .careers-intro h2 {
    font-size: 20px;
    line-height: 1.3;
  }

  .careers-intro p {
    margin-top: 17px;

    font-size: 13px;
    line-height: 1.7;
  }

  .careers-intro p + p {
    margin-top: 13px;
  }

  /* ===================================================
     POSITIONS
  =================================================== */

  .careers-positions {
    margin-top: 36px;
  }

  .careers-section-heading {
    margin-bottom: 17px;
    padding-bottom: 12px;

    font-size: 17px;
  }

  .career-position {
    gap: 16px;

    padding-bottom: 25px;
    margin-bottom: 25px;
  }

  .career-position-title h3 {
    font-size: 18px;
  }

  .career-position-title p {
    margin-top: 6px;

    font-size: 12px;
  }

  .career-position-details {
    gap: 17px;
  }

  .career-position-details h4 {
    margin-bottom: 6px;

    font-size: 14px;
  }

  .career-position-details p {
    font-size: 12px;
    line-height: 1.65;
  }

 .career-apply-button {
  width: 112px;
  height: 38px;

  margin: 0;
  padding: 0;

  border: 0;
  outline: none;
  appearance: none;
  -webkit-appearance: none;

  font-size: 12px;

  box-sizing: border-box;
}
  /* ===================================================
     CTA
  =================================================== */

  .careers-cta {
    margin-top: 8px;
  }

  .careers-cta-inner {
    min-height: 215px;

    padding:
      28px 18px;
  }

  .careers-cta-inner h2 {
    font-size: 20px;
  }

  .careers-cta-inner p {
    max-width: 350px;

    font-size: 12px;
    line-height: 1.65;
  }

  .careers-resume-button {
    width: 145px;
    height: 38px;

    margin-top: 16px;

    font-size: 12px;
  }

  /* ===================================================
     LIFE
  =================================================== */

  .careers-life {
    padding:
      38px 0 24px;
  }

  .careers-life-heading {
    row-gap: 12px;
  }

  .careers-life-heading h2 {
    font-size: 18px;
  }

  .careers-life-heading p {
    font-size: 12px;
    line-height: 1.65;
  }

  /* ===================================================
     FINAL IMAGE
  =================================================== */

  .careers-full-image {
    padding-bottom: 40px;
  }
}
        /* =====================================================
           TOUCH
        ===================================================== */

        @media (hover: none) {
          .career-apply-button:hover,
          .career-apply-button.is-hovered,
          .careers-resume-button:hover,
          .careers-resume-button.is-hovered {
            transform:
              none;

            box-shadow:
              none;
          }
        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (
          prefers-reduced-motion: reduce
        ) {
          .career-apply-button,
          .careers-resume-button {
            transition:
              none;
          }
        }

      `}</style>
    </main>
  );
}