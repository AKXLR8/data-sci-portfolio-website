import { motion } from "framer-motion";

export default function NotableCard() {
  return (
    <div className="relative h-full w-full bg-primary flex items-center group cursor-default">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(212,163,115,0.25),transparent_60%)]" />
      <div className="relative w-full px-4 sm:px-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <p className="text-xs text-accent uppercase tracking-[0.2em] mb-1">Notable</p>
          <h3 className="text-xl font-medium text-white" style={{ fontFamily: "'Instrument Serif', serif" }}>
            MedMira
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="flex-1 min-w-0"
        >
          <p className="text-sm text-gray-400 leading-relaxed">
            Backend REST API — OCR + NER for prescriptions, WhatsApp reminders
          </p>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {["Python", "Flask", "MongoDB", "Docker", "GCP", "Twilio"].map((t) => (
              <span key={t} className="text-[10px] px-2 py-0.5 rounded-full border border-white/[0.08] text-gray-500">
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="shrink-0 text-left sm:text-right"
        >
          <p className="text-xs text-gray-500">
            <span className="text-accent">Avishkar 2025</span>
          </p>
          <a
            href="https://github.com/AKXLR8/Medmira"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-gray-500 hover:text-accent transition-colors mt-1 inline-flex items-center gap-1"
          >
            GitHub <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M7 7h10v10"/></svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
