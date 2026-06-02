import { motion } from "framer-motion";

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function NowCard() {
  return (
    <motion.div {...fadeUp(0)} className="space-y-3">
      <p className="text-xs text-gray-600">June 2026</p>
      <ul className="text-sm text-gray-500 leading-relaxed space-y-1.5 list-disc list-inside">
        <li>Building Vector Auditor</li>
        <li>Learning math behind ML & DL</li>
        <li>Exploring RAG</li>
      </ul>
    </motion.div>
  );
}
