import { motion } from "framer-motion";

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function AboutCard() {
  return (
    <div className="flex flex-col gap-3 h-full">
      <div className="space-y-3 flex-1">
        <motion.p {...fadeUp(0)} className="text-sm text-gray-400 leading-relaxed">
          Hi, I'm <strong className="text-white">Akshay</strong>, a data
          scientist & ML engineer from Mumbai. I build end-to-end ML pipelines,
          predictive models, and data-driven tools.
        </motion.p>
        <motion.p {...fadeUp(0.06)} className="text-sm text-gray-500 leading-relaxed">
          My work spans the full data lifecycle — from messy datasets to
          production APIs. I'm passionate about ML + software engineering.
        </motion.p>
        <motion.p {...fadeUp(0.12)} className="text-sm text-gray-500 leading-relaxed">
          Beyond data: badminton, gaming, and exploring new tech.
        </motion.p>
      </div>
    </div>
  );
}
