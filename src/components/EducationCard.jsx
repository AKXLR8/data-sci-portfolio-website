import { motion } from "framer-motion";

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

const items = [
  {
    degree: "MS Data Science & MS Tech Systems (AIML, Space Science)",
    institution: "Symbiosis / RUDN University · Dual Degree",
  },
  {
    degree: "BSc Data Science",
    institution: "SIES College, Mumbai",
    period: "2023—2026",
  },
];

export default function EducationCard() {
  return (
    <div className="relative h-full w-full">
      <img
        src="/projects%20bg.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4A373]/80 via-[#D4A373]/30 to-[#D4A373]/80" />

      <div className="relative h-full w-full flex flex-col p-4 sm:p-5 overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <h3 className="text-sm text-[#0B1926]/50 uppercase tracking-[0.15em] mb-3">Education</h3>
        <div className="space-y-4">
          {items.map((item, i) => (
            <motion.div key={item.degree} {...fadeUp(i * 0.06)}>
              <p className="text-sm font-medium text-[#0B1926]">{item.degree}</p>
              <p className="text-sm text-[#0B1926]/60 mt-0.5">{item.institution}</p>
              {item.period && (
                <p className="text-xs text-[#0B1926]/40 mt-0.5">{item.period}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
