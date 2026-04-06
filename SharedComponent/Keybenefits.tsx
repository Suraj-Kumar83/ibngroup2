import {
  Zap,
  ShieldCheck,
  Activity,
  Repeat,
  Smile,
} from "lucide-react";

export default function KeyBenefits() {
  const benefits = [
    {
      title: "Faster Healing",
      desc: "Accelerates wound closure and recovery time.",
      icon: <Zap size={28} />,
    },
    {
      title: "Reduced Infection Risk",
      desc: "Removes bacteria and maintains a clean wound environment.",
      icon: <ShieldCheck size={28} />,
    },
    {
      title: "Improved Blood Circulation",
      desc: "Enhances oxygen and nutrient delivery to tissues.",
      icon: <Activity size={28} />,
    },
    {
      title: "Fewer Dressing Changes",
      desc: "Reduces workload and improves patient comfort.",
      icon: <Repeat size={28} />,
    },
    {
      title: "Better Patient Comfort",
      desc: "Minimizes pain with fewer interventions.",
      icon: <Smile size={28} />,
    },
  ];

  return (
    <section className="relative w-full py-10 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-blue-100" />

      {/* Glow */}
      <div className="absolute w-[300px] h-[300px] bg-cyan-400/10 blur-[120px] rounded-full bottom-0 right-1/2 translate-x-1/2" />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:max-w-6xl lg:mx-auto text-center">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-12">
          Key <span className="text-cyan-400">Benefits</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 text-left hover:shadow-[0_0_25px_rgba(0,209,255,0.2)] transition group"
            >
              {/* Icon */}
              <div className="mb-4 text-cyan-400 group-hover:scale-110 transition">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-slate-800 text-sm">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}