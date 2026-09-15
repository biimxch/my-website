"use client";


const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/about" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "YouTube", href: "https://youtube.com" },
];

const legalLinks = [
  { label: "Terms of Service", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Imprint", href: "#" },
];

export default function Footer() {
  return (
    <>
      <style>{`
        .footer-root {
          background: #fff;
          padding: 8rem 0 0;
          position: relative;
          z-index: 10;
        }

        .footer-inner {
          background: #fff;
          color: #000;
          position: relative;
        }

        /* ── Slide-up wrapper for all animated children ── */
        .footer-content {
          opacity: 1;
        }

        /* ── Top row ── */
        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 48px;
          width: min(1200px, 100%);
          margin: 0 auto;
          padding: 0 32px 48px;
          flex-wrap: wrap;
        }

        /* Left: logo + tagline + copyright */
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-width: 260px;
        }

        .footer-logo {
          font-family: 'Montserrat', sans-serif;
          display: block;
          color: #000;
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .footer-logo:hover { opacity: 0.75; }

        .footer-tagline {
          font-size: 16px;
          line-height: 1.65;
          color: #555;
          font-weight: 300;
        }

        .footer-copy {
          font-size: 14px;
          color: #666;
          margin-top: 4px;
        }

        .footer-copy strong {
          color: #000;
          font-weight: 600;
        }

        /* Right: link columns */
        .footer-links {
          display: flex;
          gap: 64px;
        }

        .footer-col {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-col-heading {
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #000;
          margin-bottom: 4px;
          font-weight: 600;
        }

        .footer-col a {
          position: relative;
          display: inline-flex;
          width: fit-content;
          font-size: 16px;
          color: #222;
          text-decoration: none;
          cursor: pointer;
          transition: color 0.2s, transform 0.2s;
          font-weight: 400;
        }
        .footer-col a::after {
          content: "";
          position: absolute;
          right: 0;
          bottom: -3px;
          left: 0;
          height: 2px;
          background: #000;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.25s ease;
        }
        .footer-col a:hover,
        .footer-col a:focus-visible {
          color: #000;
          transform: translateX(3px);
        }
        .footer-col a:hover::after,
        .footer-col a:focus-visible::after {
          transform: scaleX(1);
          transform-origin: left;
        }
        .footer-col a:active {
          transform: translateX(3px) scale(0.98);
        }

        /* ── Big name watermark ── */
        .footer-watermark-wrap {
          overflow: hidden;
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 1s cubic-bezier(0.22, 1, 0.36, 1) 0.2s,
                      transform 1s cubic-bezier(0.22, 1, 0.36, 1) 0.2s;
        }

        .footer-visible .footer-watermark-wrap {
          opacity: 1;
          transform: translateY(0);
        }

        .footer-watermark {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(72px, 10vw, 148px);
          font-weight: 300;
          letter-spacing: -0.02em;
          color: #000;
          white-space: nowrap;
          line-height: 1;
          padding: 0 40px 22px;
          user-select: none;
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .footer-root {
            padding-top: 6rem;
          }

          .footer-top {
            flex-direction: column;
            width: 100%;
            padding: 0 32px 40px;
          }

          .footer-links {
            gap: 36px;
            flex-wrap: wrap;
          }

          .footer-watermark {
            font-size: clamp(48px, 14vw, 80px);
            padding: 0 20px 12px;
          }
        }
      `}</style>

      <footer className="footer-root">
        <div className="footer-inner">
          <div className="footer-content">
            <div className="footer-top">
            {/* ── Left: brand ── */}
            <div className="footer-brand">
              <h2 className="font-['Montserrat'] text-[clamp(4rem,10vw,8rem)] font-medium leading-[0.8] tracking-[-0.06em] text-black">
                <a href="/" className="footer-logo">ChA.</a>
              </h2>
            </div>

            {/* ── Right: link columns ── */}
            <div className="footer-links">
              {/* Quick Links */}
              <div className="footer-col">
                <p className="footer-col-heading">Quick Links</p>
                {quickLinks.map((item) => (
                  <a key={item.label} href={item.href}>{item.label}</a>
                ))}
              </div>

              {/* Socials */}
              <div className="footer-col">
                <p className="footer-col-heading">Socials</p>
                {socialLinks.map((item) => (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                ))}
              </div>

              {/* Legal */}
              <div className="footer-col">
                <p className="footer-col-heading">Legal</p>
                {legalLinks.map((item) => (
                  <a key={item.label} href={item.href}>{item.label}</a>
                ))}
              </div>
            </div>
            </div>
          </div>

          {/* ── Big watermark name ── */}
          {/* <div className="footer-watermark-wrap">
            <p className="footer-watermark">Chompunuch A.</p>
          </div> */}
        </div>
      </footer>
    </>
  );
}