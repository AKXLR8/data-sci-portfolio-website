import { motion } from "framer-motion";

const projects = [
  {
    title: "Vector Auditor",
    year: "2026",
    desc: "Drop in PDFs/DOCXs, ask anything, and get grounded answers with inline page citations. Vector Auditor combines miniLM embeddings, a cross-encoder reranker, and Mercury-2 LLM with guardrails, PII detection, and multi-user auth — all behind a FastAPI backend on HF Spaces..",
    image: "/vector-auditor.png",
    url: "https://vector-auditor-frontend.vercel.app/",
    tags: ["RAG", "LLM", "Python", "LangChain"],
  },
  {
    title: "NYC Uber Trip Analysis",
    year: "2025",
    desc: "Ensemble model forecasting Uber demand — MAPE 9.52%, R² 0.966.",
    image: "/uber_2018_logo.png",
    url: "https://uber-trip-predictor.vercel.app/",
    tags: ["XGBoost", "Time Series"],
  },
  {
    title: "Portfolio Backtesting Engine",
    year: "2025",
    desc: "PostgreSQL analytics for returns, volatility, and Sharpe ratio.",
    image: "/stocks.png",
    url: "https://akxlr8-portfolio-backtesting-engine-sql-usingstreamlit-qnxtfl.streamlit.app/",
    tags: ["PostgreSQL", "Finance"],
  },
  {
    title: "Financial Signal Pipeline",
    year: "2024",
    desc: "MLOps pipeline processing OHLCV data with trading signals.",
    image: "/finance.png",
    url: "https://mlops-batch-pipeline-with-multiple-signal-strategies-czicnpty3.streamlit.app/",
    tags: ["MLOps", "Python"],
  },
  {
    title: "EV Infrastructure Dashboard",
    year: "2024",
    desc: "Power BI dashboard analyzing EV infrastructure across India.",
    image: "/-removebg-preview.png",
    url: "https://github.com/AKXLR8/EV-Infrastructure-in-India-PowerBi-Dashboard",
    tags: ["Power BI", "Data Viz"],
  },
];

export default function ProjectsCard() {
  return (
    <div className="relative h-full w-full">
      <img
        src="/projects%20bg.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4A373]/80 via-[#D4A373]/30 to-[#D4A373]/80" />

      <div className="relative h-full w-full flex flex-col p-3 sm:p-5">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-1 h-px bg-[#0B1926]/10" />
          <h3 className="text-sm text-[#0B1926]/50 uppercase tracking-[0.15em] shrink-0">Projects</h3>
          <div className="flex-1 h-px bg-[#0B1926]/10" />
        </div>
        <div className="flex gap-4 overflow-x-auto overflow-y-auto flex-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory" style={{ overscrollBehavior: "contain" }}>
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group flex flex-col rounded-lg border border-white/[0.08] bg-primary p-5 hover:border-accent/25 hover:bg-[#0F2135] active:bg-[#0F2135] active:border-accent/30 transition-all duration-300 overflow-y-auto min-w-[240px] sm:min-w-[260px] snap-start"
            >
              {p.image && (
                <div className="relative h-28 -mx-5 -mt-5 mb-4">
                  <img src={p.image} alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1926]/80 to-transparent" />
                </div>
              )}
              <div className="flex items-start justify-between gap-2 mb-2">
                <h4 className="text-sm font-medium text-white">{p.title}</h4>
                <span className="text-xs text-gray-500 shrink-0">{p.year}</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-3 line-clamp-3">{p.desc}</p>
              {p.tags && (
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-0.5 rounded-full border border-white/[0.08] text-gray-500">{t}</span>
                  ))}
                </div>
              )}
              <div className="mt-auto pt-3 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-sm text-accent group-hover:text-accent2 transition-colors inline-flex items-center gap-1">
                  View <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M7 7h10v10"/></svg>
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
