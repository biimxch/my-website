import FadeIn from "@/components/ui/FadeIn";
import { personal } from "@/lib/data";

export default function Hero() {
  return (
    <section 
    id="contact"
    className="pt-40 pb-24 max-w-5xl mx-auto px-6">
      <FadeIn delay={0}>
        <div className="flex items-center gap-2 mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <p className="text-xs uppercase tracking-widest text-gray-400">
            Available for opportunities
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h1 className="text-8xl font-medium tracking-tight text-gray-900 leading-none mb-6">
          Chompunuch
          <br />
          <span className="text-gray-400">Auttnam</span>
        </h1>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="flex items-start gap-8 mt-10 pt-4 ">
          <p className="text-2xl font-medium text-gray-900 ">
            UX/UI Designer & Frontend Developer — bridging design and code.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 pt-10 border-t border-[#e2e0da]">
          
          {/* Column 1: Direct Info */}
          <div>
            <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-6">
              Direct Info
            </p>
            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${personal.email}`}
                className="group flex items-center gap-3 text-gray-400 hover:text-gray-900 transition-all duration-300 hover:-translate-y-1 w-fit"
              >
                {/* Minimal Icon (ไม่มีวงกลมแล้ว) */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                {/* ข้อความอีเมล */}
                <span className="text-base font-medium text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                  {personal.email}
                </span>
              </a>

              <a
                href={`tel:${personal.phone}`}
                className="group flex items-center gap-3 text-gray-400 hover:text-gray-900 transition-all duration-300 hover:-translate-y-1 w-fit"
              >
                {/* Minimal Icon */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {/* ข้อความเบอร์โทร */}
                <span className="text-base font-medium text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                  {personal.phone}
                </span>
              </a>
            </div>
          </div>

          {/* Column 2: Links & Docs */}
          <div>
            <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-6">
              Social Links
            </p>
            <div className="flex items-center gap-6">
              
              {/* GitHub Icon */}
              {personal.github && (
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-900 transition-transform duration-300 hover:-translate-y-1"
                  aria-label="GitHub"
                >
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                </a>
              )}

              {/* Facebook Icon */}
              {/* 💡 อย่าลืมไปเพิ่ม facebook: "https://facebook.com/..." ในไฟล์ lib/data.ts ด้วยนะครับ */}
              {personal.facebook && (
                <a
                  href={personal.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-900 transition-transform duration-300 hover:-translate-y-1"
                  aria-label="Facebook"
                >
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
              )}

              {/* LinkedIn Icon */}
              {personal.linkedin && (
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-900 transition-transform duration-300 hover:-translate-y-1"
                  aria-label="LinkedIn"
                >
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              )}

              </div>
            </div>

        </div>
      </FadeIn>
    </section>
  );
}