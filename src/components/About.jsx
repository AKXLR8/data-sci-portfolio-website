export default function About() {
  return (
    <section id="about" className="section">
      <h3 className="text-3xl font-semibold mb-6">About Me</h3>
      <div className="grid md:grid-cols-2 gap-8">
        <p className="leading-relaxed">
          Passionate about turning raw data into actionable intelligence.
          Experienced in end-to-end ML pipelines, from data ingestion to seamless
          deployment of predictive services. I love Kaggle competitions,
          visualizing insights, and mentoring aspiring data scientists.
        </p>
        <ul className="space-y-3">
          <li>🎓 B.Sc. Data Science (2026)</li>
          <li>🏆 Google Business Intelligence Certificate</li>
          <li>🛠  Python | SQL | TensorFlow | Power BI</li>
          <li>🌐 Freelance ML solutions for startups</li>
        </ul>
      </div>
    </section>
  );
}
