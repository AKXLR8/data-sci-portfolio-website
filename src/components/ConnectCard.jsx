import { motion } from "framer-motion";

const socials = [
  { label: "GitHub", href: "https://github.com/AKXLR8" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/akshay-maniyampara-b2a058366/" },
  { label: "Email", href: "mailto:akshaymaniyampara40@gmail.com" },
];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function ConnectCard() {
  return (
    <div className="relative h-full w-full">
      <img
        src="/projects%20bg.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4A373]/80 via-[#D4A373]/30 to-[#D4A373]/80" />

      <div className="relative h-full w-full flex flex-col p-4 sm:p-5">
        <h3 className="text-sm text-[#0B1926]/50 uppercase tracking-[0.15em] mb-3">Connect</h3>
        <div className="space-y-3">
          {socials.map((s, i) => (
            <motion.div key={s.label} {...fadeUp(i * 0.06)}>
              <a href={s.href} target="_blank" rel="noreferrer" className="text-sm text-[#0B1926]/70 hover:text-[#0B1926] transition-colors">
                {s.label}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
