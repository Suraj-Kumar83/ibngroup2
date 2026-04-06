"use client";

export default function AboutPage() {
  return (
    <div className="bg-blue-100 text-white">
<section className="relative w-full h-[60vh] sm:h-[70vh] flex items-center justify-center overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="/img5.png" // 👉 add this image in public folder
      alt="NPWT Banner"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Dark Overlay */}
<div className="absolute inset-0 bg-black/80" />

  {/* Glow Effect */}
  <div className="absolute w-[400px] h-[400px] bg-cyan-400/10 blur-[120px] rounded-full top-10 left-1/2 -translate-x-1/2" />

  {/* Content */}
  <div className="relative z-10 text-center px-4 max-w-3xl">

    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
      Transforming Wound Care with
      <span className="text-cyan-400"> Advanced NPWT</span>
    </h1>

    <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed mb-6">
      Delivering innovative Negative Pressure Wound Therapy solutions that accelerate healing,
      reduce complications, and improve patient outcomes across modern healthcare environments.
    </p>

    {/* CTA */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="/contact"
        className="px-6 py-3 rounded-full bg-cyan-400 text-black font-semibold shadow-[0_0_20px_rgba(0,209,255,0.6)] hover:scale-105 transition"
      >
        Get in Touch
      </a>

      <a
        href="/product"
        className="px-6 py-3 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black  font-semiboldtransition"
      >
        Explore Products
      </a>
    </div>

  </div>
</section>
 <section className="px-4 sm:px-6 lg:max-w-5xl lg:mx-auto py-10 text-center">
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
    About <span className="text-cyan-400">IBN Group</span>
  </h2>

  <p className="text-slate-800 text-sm sm:text-base md:text-lg leading-relaxed">
    IBN Group, in collaboration with Healomex Biosciences Pvt Ltd, is dedicated to transforming
    wound care through advanced medical technologies. Our focus lies in delivering innovative
    Negative Pressure Wound Therapy (NPWT) solutions that enhance healing outcomes,
    reduce complications, and improve patient comfort across diverse clinical settings.
  </p>
</section>

   <section className="px-4 sm:px-6 lg:max-w-5xl lg:mx-auto py-2">
  <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
    The Challenge We Address
  </h2>

  <p className="text-slate-800 leading-relaxed mb-4">
    Chronic and complex wounds such as diabetic foot ulcers, pressure sores, and post-surgical
    complications remain a significant burden on healthcare systems. Traditional wound care methods
    often result in prolonged healing times, increased infection risks, and repeated hospital visits.
  </p>

  <p className="text-slate-600 leading-relaxed">
    Patients frequently experience discomfort due to frequent dressing changes, while healthcare
    providers face challenges in maintaining consistent wound healing outcomes. These limitations
    highlight the urgent need for more efficient, reliable, and patient-friendly treatment solutions.
  </p>
</section>

      <section className="px-4 sm:px-6 lg:max-w-5xl lg:mx-auto py-4">
  <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
    Our Solution: Advanced NPWT Technology
  </h2>

  <p className="text-slate-800 leading-relaxed mb-4">
    At IBN Group, we provide advanced Negative Pressure Wound Therapy (NPWT) systems designed
    to accelerate wound healing through controlled vacuum pressure. This technology creates an
    optimal healing environment by removing exudate, reducing infection, and promoting tissue regeneration.
  </p>

  <p className="text-slate-600 leading-relaxed">
    Our solutions are clinically proven to support faster recovery, reduce hospital stays, and improve
    overall patient outcomes, making them a preferred choice for hospitals, surgeons, and wound care specialists.
  </p>
</section>



     <section className="px-4 sm:px-6 lg:max-w-5xl lg:mx-auto py-4">
  <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
    Clinical Impact & Outcomes
  </h2>

  <p className="text-slate-800 leading-relaxed mb-4">
    NPWT has demonstrated significant success in treating a wide range of wounds including diabetic ulcers,
    pressure ulcers, traumatic injuries, and post-surgical wounds. By enhancing blood circulation and
    promoting granulation tissue formation, it ensures faster and more reliable healing.
  </p>

  <p className="text-slate-700 leading-relaxed">
    The therapy not only improves clinical outcomes but also enhances patient comfort by reducing the
    frequency of dressing changes and minimizing pain during treatment.
  </p>
</section>



<section className="px-4 sm:px-6 lg:max-w-5xl lg:mx-auto py-10 text-center">
  <h2 className="text-2xl font-semibold text-cyan-400 mb-6">
    Our Mission & Vision
  </h2>

  <p className="text-slate-800 leading-relaxed mb-4">
    Our mission is to make advanced wound care accessible, effective, and patient-centric through
    innovative NPWT solutions.
  </p>

  <p className="text-slate-600 leading-relaxed">
    We envision a future where every patient receives faster healing, reduced complications,
    and improved quality of life through modern medical technologies.
  </p>
</section>

     <section className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto py-10">
  <h2 className="text-2xl font-semibold text-center text-cyan-400 mb-10">
    What Makes Us Different
  </h2>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

    {[
      "End-to-end clinical support for healthcare providers",
      "Hands-on training for doctors and nursing staff",
      "24×7 technical assistance for uninterrupted therapy",
      "On-site support during initial treatment cases",
      "Continuous medical education and case discussions",
      "Reliable service and maintenance support",
    ].map((item, i) => (
      <div key={i} className="bg-white p-6 rounded-xl border border-blue-200 text-slate-800">
        {item}
      </div>
    ))}

  </div>
</section>




      {/* WHY CHOOSE US */}
      <section className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto py-10">
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
            <div key={i} className="bg-white p-6 rounded-xl border border-blue-200 text-center text-slate-800">
              {item}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}