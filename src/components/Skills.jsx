const skills = [
  { name: "Python", level: 95 },
  { name: "SQL", level: 90 },
  { name: "TensorFlow / PyTorch", level: 80 },
  { name: "Power BI", level: 85 },
  { name: "AWS / GCP", level: 60 },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h3 className="text-3xl font-semibold mb-10">Skills</h3>
      <div className="space-y-6">
        {skills.map(({ name, level }) => (
          <div key={name} className="w-full">
            <div className="flex justify-between mb-1">
              <span>{name}</span>
              <span>{level}%</span>
            </div>
            <div className="w-full h-2 bg-gray-700 rounded">
              <div
                className="h-full bg-accent rounded"
                style={{ width: `${level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
