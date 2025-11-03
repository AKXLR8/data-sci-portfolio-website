const projects = [
  {
    title: "NYC Uber Trip Analysis",
    img: "/uber_2018_logo.png",
    desc: "Built a time-series ensemble model (XGBoost + Random Forest + GBRT) to forecast hourly Uber ride demand (MAPE: 9.52%, R²: 0.966), with API deployment using Flask",
    code: "https://github.com/username/uber-forecast",
    demo: "https://uber-trip-predictor.vercel.app/",
  },
  {
    title: "portfolio-backtesting-engine-SQL ",
    img: "/stocks.png",
    desc: " Portfolio Backtesting Engine (SQL + Streamlit) Built a portfolio analytics system using PostgreSQL to calculate annual returns, volatility, and Sharpe ratio.Visualized results with Streamlit and deployed the dashboard using NeonDB and GitHub.",
    code: "https://akxlr8-portfolio-backtesting-engine-sql-usingstreamlit-qnxtfl.streamlit.app/",
  },
  {
    title: "EV Infrastructure in India - PowerBi Dashboard",
    img: "/-removebg-preview.png",
    desc: "Interactive Power BI report uncovering Infrastructural Condition of India in EV sector.",
    git: "https://github.com/AKXLR8/EV-Infrastructure-in-India-PowerBi-Dashboard",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h3 className="text-3xl font-semibold mb-10">Projects</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(({ title, img, desc, code, demo }) => (
          <article key={title} className="card">
            <img src={img} alt={title} className="rounded-lg mb-4" />
            <h4 className="text-xl font-semibold mb-2">{title}</h4>
            <p className="text-sm leading-relaxed mb-4">{desc}</p>
            <div className="flex gap-4">
              {demo && (
                <a href={demo} target="_blank" rel="noreferrer" className="text-accent underline">
                  Live
                </a>
              )}
              {code && (
                <a href={code} target="_blank" rel="noreferrer" className="text-accent underline">
                  Code
                </a>
              )}

              {git && (
                <a href={git} target="_blank" rel="noreferrer" className="text-accent underline">
                  Code
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
