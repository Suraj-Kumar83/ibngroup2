
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-blue-100 text-white">
<section className="relative w-full h-[60vh] sm:h-[70vh] flex items-center justify-center overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">
    <Image
      src="/img5.png" // 👉 add this image
      alt="NPWT Banner"
      fill
      className="object-cover"
      priority
    />
  </div>

  {/* Dark Gradient Overlay */}
<div className="absolute inset-0 bg-black/80" />

  {/* Cyan Glow */}
  <div className="absolute inset-0 bg-cyan-400/5" />

  {/* Content */}
  <div className="relative z-10 text-center px-4 max-w-3xl">

    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
      Understanding <br />
      <span className="text-cyan-400">NPWT Technology</span>
    </h1>

    <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed mb-6">
      Advanced wound care technology designed to accelerate healing,
      reduce infection, and improve patient outcomes through controlled
      negative pressure therapy.
    </p>

    {/* CTA */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center">

      <Link
        href="/contact"
        className="px-6 py-3 rounded-full bg-cyan-400 text-slate-900 font-semibold shadow-[0_0_20px_rgba(0,209,255,0.6)] hover:scale-105 transition"
      >
        Contact Us
      </Link>

      <Link
        href="/product"
        className="px-6 py-3 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
      >
        Explore Products
      </Link>

    </div>

  </div>
</section>
      {/* HERO */}
      {/* <section className="py-10 text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
          About <span className="text-cyan-400">NPWT Technology</span>
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Advanced wound care solutions designed to accelerate healing,
          improve outcomes, and enhance patient comfort.
        </p>
      </section> */}

      {/* WHAT IS NPWT */}
      <section className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto py-3">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
            What is NPWT?
          </h2>
          <p className="text-slate-800 leading-relaxed">
            Negative Pressure Wound Therapy (NPWT) is an advanced wound care technique
            that uses controlled negative pressure (vacuum) to promote faster and more
            effective healing. It is widely used in clinical settings to manage both
            acute and chronic wounds by creating an optimal healing environment.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
   {/* HOW NPWT WORKS */}
<section className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto py-12">

  <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-cyan-400 text-center">
    How NPWT Heals Wounds
  </h2>

  <p className="text-slate-800 text-center max-w-3xl mx-auto mb-10 text-sm sm:text-base">
    Negative Pressure Wound Therapy works through multiple clinically proven mechanisms
    that accelerate healing, reduce infection, and improve patient outcomes.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

    {[
      {
        title: "Effective Exudate & Infection Control",
        points: [
          "Continuously removes pus, bacteria, and necrotic material",
          "Maintains a clean wound environment",
          "Reduces infection risk significantly",
        ],
      },
      {
        title: "Edema Reduction & Improved Perfusion",
        points: [
          "Decreases local swelling by removing excess fluid",
          "Enhances blood flow and oxygen delivery",
          "Improves nutrient supply to tissues",
        ],
      },
      {
        title: "Accelerated Granulation Tissue Formation",
        points: [
          "Stimulates rapid development of healthy tissue",
          "Supports healing from the base upward",
        ],
      },
      {
        title: "Faster Wound Closure",
        points: [
          "Reduces healing time compared to traditional dressings",
          "Leads to shorter hospital stays",
          "Improves overall clinical outcomes",
        ],
      },
      {
        title: "Optimal Moist Healing Environment",
        points: [
          "Provides a sealed and controlled environment",
          "Minimises dressing changes",
          "Enhances patient comfort",
        ],
      },
    ].map((item, i) => (
      <div
        key={i}
        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 text-left hover:shadow-[0_0_25px_rgba(0,209,255,0.2)] transition"
      >
        {/* Title */}
        <h3 className="text-cyan-400 font-semibold mb-3">
          {i + 1}. {item.title}
        </h3>

        {/* Points */}
        <ul className="space-y-2 text-slate-800 text-sm">
          {item.points.map((point, index) => (
            <li key={index} className="flex gap-2">
              <span className="text-cyan-400">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    ))}

  </div>

</section>

      {/* INDICATIONS *

{/* INDICATIONS */}
{/* INDICATIONS */}
<section className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto py-12">
  <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-cyan-400 text-center">
    Clinical Indications
  </h2>

  <p className="text-slate-800 text-center max-w-3xl mx-auto mb-10 text-sm sm:text-base">
    Negative Pressure Wound Therapy (NPWT) is indicated in a wide range of acute and chronic wound
    conditions where enhanced healing, infection control, and wound bed preparation are required.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

    {[
      {
        title: "Diabetic Foot Ulcers",
        points: [
          "Highly prevalent in diabetic populations",
          "Promotes faster healing and reduces amputation risk",
          "Effective in Wagner Grade 2–3 ulcers",
        ],
      },
      {
        title: "Post-Surgical Wounds",
        points: [
          "Suitable after abdominal, orthopaedic, or cesarean surgeries",
          "Helps in wound dehiscence cases",
        ],
      },
      {
        title: "Pressure Ulcers",
        points: [
          "Common in elderly or bedridden patients",
          "Effective in Stage 3 and Stage 4 ulcers",
        ],
      },
      {
        title: "Traumatic Injuries",
        points: [
          "Includes road accidents, crush injuries, fractures",
          "Reduces wound closure time",
        ],
      },
      {
        title: "Burn Wounds",
        points: [
          "Effective for second-degree burns",
          "Supports tissue regeneration",
        ],
      },
      {
        title: "Venous Leg Ulcers",
        points: [
          "Chronic wounds due to poor circulation",
          "Improves granulation and reduces size",
        ],
      },
      {
        title: "Infected Wounds",
        points: [
          "Handles high infection and exudate",
          "Useful after debridement",
        ],
      },
      {
        title: "Skin Grafts & Flaps",
        points: [
          "Improves graft adherence",
          "Prevents fluid buildup",
        ],
      },
    ].map((item, i) => (
      <div
        key={i}
        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 text-left hover:shadow-[0_0_25px_rgba(0,209,255,0.2)] transition"
      >
        {/* Title */}
        <h3 className="text-cyan-400 font-semibold mb-3">
          {item.title}
        </h3>

        {/* Points */}
        <ul className="space-y-2 text-slate-800 text-sm">
          {item.points.map((point, index) => (
            <li key={index} className="flex gap-2">
              <span className="text-cyan-400">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    ))}

  </div>
</section>

      {/* SYSTEM COMPONENTS */}
      <section className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto py-12">
        <h2 className="text-2xl font-semibold mb-6 text-cyan-400">
          NPWT System Components
        </h2>

        <ul className="space-y-3 text-slate-800">
          <li>• Electrically Powered Vacuum Pump Unit</li>
          <li>• High-Capacity Collection Canister (1000 ml)</li>
          <li>• Medical-Grade Foam Dressing</li>
          <li>• Tubing & Port Interface</li>
        </ul>
      </section>

      {/* WORKFLOW */}
{/* WORKFLOW */}
<section className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto py-12">

  <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-cyan-400 text-center">
    Clinical Workflow: How NPWT is Applied
  </h2>

  <p className="text-slate-800 text-center max-w-3xl mx-auto mb-10 text-sm sm:text-base">
    NPWT follows a structured step-by-step clinical process to ensure effective wound healing,
    proper infection control, and optimal patient outcomes.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

    {[
      {
        title: "Wound Assessment",
        desc: "Evaluate wound size, depth, and exudate level to determine suitability for NPWT.",
      },
      {
        title: "Wound Preparation",
        desc: "Clean the wound thoroughly and perform debridement if required.",
      },
      {
        title: "Foam Placement",
        desc: "Cut sterile foam according to wound dimensions and place it gently into the wound bed.",
      },
      {
        title: "Sealing",
        desc: "Apply a transparent adhesive film to create an airtight environment.",
      },
      {
        title: "Connection",
        desc: "Attach the tubing from the dressing to the NPWT device.",
      },
      {
        title: "Pressure Settings",
        desc: "Set appropriate negative pressure (typically 80–125 mmHg) in continuous or intermittent mode.",
      },
      {
        title: "Monitoring",
        desc: "Regularly assess the system and wound condition; typically reviewed every 48–72 hours.",
      },
      {
        title: "Dressing Change",
        desc: "Replace the foam dressing every 4–5 days until adequate healing is achieved.",
      },
    ].map((step, i) => (
      <div
        key={i}
        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 text-left hover:shadow-[0_0_25px_rgba(0,209,255,0.2)] transition"
      >
        {/* Step Number */}
        <div className="text-cyan-400 font-bold mb-2">
          Step {i + 1}
        </div>

        {/* Title */}
        <h3 className="font-semibold mb-2">
          {step.title}
        </h3>

        {/* Description */}
        <p className="text-slate-800 text-sm">
          {step.desc}
        </p>
      </div>
    ))}

  </div>

</section>

      {/* TABLE SECTION (SCROLLABLE MOBILE) */}
     <section className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto py-5">
  <h2 className="text-2xl font-semibold mb-6 text-cyan-400">
    Pressure Parameters by Wound Type
  </h2>

  <div className="overflow-x-auto">
    <table className="min-w-full text-sm border border-white/10 rounded-xl overflow-hidden">
      <thead className="bg-white text-left">
        <tr>
          <th className="p-3 text-slate-800">Wound Type</th>
          <th className="p-3 text-slate-800">Recommended Pressure</th>
          <th className="p-3 text-slate-800">Mode</th>
          <th className="p-3 text-slate-800">Dressing Interval</th>
        </tr>
      </thead>
      <tbody className="text-slate-800">

        {[
          ["General acute wounds", "125 mmHg", "Continuous", "48–72 hours"],
          ["Diabetic foot ulcers", "75–100 mmHg", "Continuous / Intermittent", "48–72 hours"],
          ["Infected wounds", "125 mmHg", "Continuous", "24–48 hours"],
          ["Skin graft bolster", "75–80 mmHg", "Continuous", "3–5 days"],
          ["Pressure ulcers (Stage III–IV)", "100–125 mmHg", "Intermittent", "48–72 hours"],
          ["Partial burns", "75–80 mmHg", "Continuous", "48–72 hours"],
          ["Post-surgery wounds", "100–125 mmHg", "Continuous", "48–72 hours"],
        ].map((row, i) => (
          <tr key={i} className="border-t border-white/10">
            {row.map((cell, j) => (
              <td key={j} className="p-3 whitespace-nowrap">
                {cell}
              </td>
            ))}
          </tr>
        ))}

      </tbody>
    </table>
  </div>
</section>
      {/* COST COMPARISON */}
     <section className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto py-2">
  <h2 className="text-2xl font-semibold mb-6 text-cyan-400">
    Cost Comparison per Treatment Episode
  </h2>

  <div className="overflow-x-auto">
    <table className="min-w-full text-sm border border-white/10 rounded-xl overflow-hidden">
      <thead className="bg-white text-left">
        <tr>
          <th className="p-3 text-slate-800">Cost Component</th>
          <th className="p-3 text-slate-800">Standard Care (4 weeks)</th>
          <th className="p-3 text-slate-800">NPWT (2 weeks)</th>
        </tr>
      </thead>
      <tbody className="text-slate-800">

        {[
          ["Dressing materials", "₹4,200 – 8,400", "₹15,000 – 25,000"],
          ["Nursing labour", "₹37,800", "₹1,400"],
          ["Antimicrobial therapy", "₹5,000 – 15,000", "₹2,000 – 5,000"],
          ["Hospital stay", "₹30,000 – 75,000", "Nil"],
          ["Surgery (if needed)", "₹50,000 – 1,50,000", "₹7,500 – 22,500"],
          ["TOTAL COST", "₹1,27,000 – 2,86,200", "₹30,900 – 63,900"],
        ].map((row, i) => (
          <tr key={i} className="border-t border-white/10">
            {row.map((cell, j) => (
              <td
                key={j}
                className={`p-3 whitespace-nowrap ${
                  i === row.length - 1 ? "font-semibold text-cyan-400" : ""
                }`}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}

      </tbody>
    </table>
  </div>

  {/* Note */}
  <p className="text-slate-800 mt-4 text-sm text-center">
    Approximate daily cost for NPWT:{" "}
    <span className="text-cyan-400 font-semibold">
      ₹2000–₹2500/day
    </span>
  </p>
</section>
      {/* WHY CHOOSE US */}
      <section className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto py-16">
        <h2 className="text-2xl font-semibold mb-8 text-center text-cyan-400">
          Why Choose Us
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {[
            "Dressing Assistance",
            "Hands-on Training",
            "On-Site Support",
            "24×7 Technical Support",
            "CME & Case Discussions",
            "Patient Education",
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-blue-200 text-slate-800 text-center">
              {item}
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}