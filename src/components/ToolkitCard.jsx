import { motion } from "framer-motion";

const tools = [
  { name: "Python", color: "#3776AB" },
  { name: "TensorFlow", color: "#FF6F00" },
  { name: "PyTorch", color: "#EE4C2C" },
  { name: "Scikit-learn", color: "#F7931E" },
  { name: "XGBoost", color: "#7FCC5B" },
  { name: "Pandas", color: "#150458" },
  { name: "NumPy", color: "#013243" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "Docker", color: "#2496ED" },
  { name: "AWS", color: "#FF9900" },
  { name: "Flask", color: "#000000" },
  { name: "FastAPI", color: "#009688" },
  { name: "Kafka", color: "#231F20" },
  { name: "Spark", color: "#E25A1C" },
  { name: "Airflow", color: "#017CEE" },
  { name: "Tableau", color: "#E97627" },
];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function ToolkitCard() {
  return (
    <div className="h-full w-full flex flex-col p-4 sm:p-5 bg-[#c1a37f]">
      <h3 className="text-sm text-[#0B1926]/50 uppercase tracking-[0.15em] mb-3">Toolkit</h3>
      <motion.div {...fadeUp(0)} className="flex flex-wrap gap-1.5">
        {tools.map((t) => (
          <span
            key={t.name}
            className="text-xs px-2 py-0.5 rounded border font-medium"
            style={{ borderColor: `${t.color}33`, color: "#0B1926", backgroundColor: `${t.color}0D` }}
          >
            {t.name}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
