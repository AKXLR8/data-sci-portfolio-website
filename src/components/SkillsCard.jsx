import { SiPython, SiTensorflow, SiPytorch, SiPandas, SiPostgresql, SiDocker, SiAmazon } from "react-icons/si";

const iconColors = {
  Python: "#3776AB",
  TensorFlow: "#FF6F00",
  PyTorch: "#EE4C2C",
  Pandas: "#150458",
  PostgreSQL: "#4169E1",
  Docker: "#2496ED",
  AWS: "#FF9900",
};

const icons = [
  { Icon: SiPython, name: "Python" },
  { Icon: SiTensorflow, name: "TensorFlow" },
  { Icon: SiPytorch, name: "PyTorch" },
  { Icon: SiPandas, name: "Pandas" },
  { Icon: SiPostgresql, name: "PostgreSQL" },
  { Icon: SiDocker, name: "Docker" },
  { Icon: SiAmazon, name: "AWS" },
];

export default function SkillsCard() {
  return (
    <div className="flex items-center h-full overflow-hidden">
      <div className="flex gap-3 animate-scroll-left min-w-max">
        {[...Array(3)].flatMap(() => icons).map(({ Icon, name }, i) => (
          <div key={i} className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.03] border border-white/[0.07]">
            <Icon className="text-base" style={{ color: iconColors[name] }} />
            <span className="text-sm text-gray-500">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
