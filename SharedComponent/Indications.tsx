import {
  Footprints,
  Bed,
  Scissors,
  AlertTriangle,
  Flame,
  Activity,
  ShieldAlert,
  Layers,
} from "lucide-react";

export default function Indications() {
  const items = [
    {
      title: "Diabetic Foot Ulcers",
      icon: <Footprints size={26} />,
    },
    {
      title: "Pressure Ulcers (Bedsores)",
      icon: <Bed size={26} />,
    },
    {
      title: "Surgical Wounds",
      icon: <Scissors size={26} />,
    },
    {
      title: "Traumatic Injuries",
      icon: <AlertTriangle size={26} />,
    },
    {
      title: "Burn Wounds",
      icon: <Flame size={26} />,
    },
    {
      title: "Venous Leg Ulcers",
      icon: <Activity size={26} />,
    },
    {
      title: "Infected Wounds",
      icon: <ShieldAlert size={26} />,
    },
    {
      title: "Skin Grafts & Flaps",
      icon: <Layers size={26} />,
    },
  ];

  return (
    <section className="relative w-full py-10 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-blue-100" />

      {/* Glow */}
      <div className="absolute w-[300px] h-[300px] bg-cyan-400/10 blur-[120px] rounded-full bottom-0 left-1/2 -translate-x-1/2" />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:max-w-6xl lg:mx-auto text-center">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-12">
          Indications & <span className="text-cyan-400">Applications</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 flex flex-col items-center justify-center text-center hover:shadow-[0_0_25px_rgba(0,209,255,0.2)] transition group"
            >
              {/* Icon */}
              <div className="text-slate-900 mb-3 group-hover:scale-110 transition">
                {item.icon}
              </div>

              {/* Title */}
              <p className="text-sm sm:text-base text-slate-800">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}