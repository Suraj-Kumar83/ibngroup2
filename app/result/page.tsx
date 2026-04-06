import Image from "next/image";

export default function ResultsPage() {
    const cases = [
        {
            title: "Diabetic Foot Ulcer",
            desc: "Significant healing observed within weeks using NPWT therapy, reducing infection and improving tissue regeneration.",
            before: "/results/before1.png",
            after: "/results/after1.png",
        },
        {
            title: "Pressure Ulcer (Bedsore)",
            desc: "Advanced stage pressure ulcer treated effectively with improved granulation tissue formation.",
            before: "/results/before3.png",
            after: "/results/after3.png",
        },
        {
            title: "Post-Surgical Wound",
            desc: "Enhanced wound closure and reduced complications after surgical intervention using NPWT.",
            before: "/results/before2.png",
            after: "/results/after2.png",
        },
    ];

    return (
        <div className="bg-blue-100 text-white">

            {/* HERO */}
            {/* <section className="py-16 text-center px-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                    Proven <span className="text-cyan-400">Clinical Results</span>
                </h1>

                <p className="text-gray-400 max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
                    Our NPWT therapy has demonstrated significant improvement in chronic and complex wounds,
                    including diabetic ulcers, pressure sores, and post-surgical wounds.
                </p>
            </section> */}

<section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">
    <Image
      src="/img5.png" // 👉 add this image in public folder
      alt="Clinical Results"
      fill
      priority
      className="object-cover"
    />
  </div>

  {/* Dark Overlay */}
 <div className="absolute inset-0 bg-black/80" />

  {/* Cyan Glow */}
  <div className="absolute inset-0 bg-cyan-400/5" />

  {/* Content */}
  <div className="relative z-10 text-center px-4 max-w-3xl">

    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
      Proven <br />
      <span className="text-cyan-400">Clinical Results</span>
    </h1>

    <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed mb-6">
      Our NPWT therapy has demonstrated significant improvement in chronic and complex wounds,
      delivering faster healing, reduced complications, and improved patient outcomes.
    </p>

    {/* CTA */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center">

      <a
        href="/contact"
        className="px-6 py-3 rounded-full bg-cyan-400 text-slate-900 font-semibold shadow-[0_0_20px_rgba(0,209,255,0.6)] hover:scale-105 transition"
      >
        Get in Touch
      </a>

      <a
        href="/product"
        className="px-6 py-3 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition"
      >
        Explore Products
      </a>

    </div>

  </div>
</section>

            {/* RESULTS GRID */}
            <section className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto py-12">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {cases.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white backdrop-blur-md border border-blue-400 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,209,255,0.1)] hover:shadow-[0_0_40px_rgba(0,209,255,0.2)] transition"
                        >

                            {/* IMAGES */}
                            <div className="flex gap-2 p-2">

                                {/* BEFORE */}
                                <div className="relative w-1/2 h-[180px] sm:h-[200px] md:h-[220px] rounded-xl overflow-hidden">
                                    <Image
                                        src={item.before}
                                        alt="Before"
                                        fill
                                        className="object-cover"
                                    />
                                    <span className="absolute bottom-2 left-2 text-xs bg-black/70 px-2 py-1 rounded">
                                        Before
                                    </span>
                                </div>

                                {/* AFTER */}
                                <div className="relative w-1/2 h-[180px] sm:h-[200px] md:h-[220px] rounded-xl overflow-hidden">
                                    <Image
                                        src={item.after}
                                        alt="After"
                                        fill
                                        className="object-cover"
                                    />
                                    <span className="absolute bottom-2 right-2 text-xs bg-cyan-400 text-slate-900 px-2 py-1 rounded">
                                        After
                                    </span>
                                </div>

                            </div>

                            {/* CONTENT */}
                            <div className="p-5 pt-3">
                                <h3 className="text-cyan-400 font-semibold mb-2 text-base sm:text-lg">
                                    {item.title}
                                </h3>

                                <p className="text-slate-900 text-sm mb-3 leading-relaxed">
                                    {item.desc}
                                </p>

                                <p className="text-xs text-slate-800">
                                    Noticeable healing within weeks of treatment.
                                </p>
                            </div>

                        </div>
                    ))}

                </div>
            </section>

            {/* EXTRA SECTION (TRUST BOOST) */}
            <section className="px-4 sm:px-6 lg:max-w-5xl lg:mx-auto py-16 text-center">
                <h2 className="text-2xl font-semibold text-cyan-400 mb-6">
                    Clinical Impact
                </h2>

                <p className="text-slate-800 mb-4">
                    NPWT has proven to significantly reduce healing time, improve infection control,
                    and enhance patient comfort compared to traditional wound care methods.
                </p>

                <p className="text-slate-800">
                    By promoting faster granulation tissue formation and maintaining a controlled healing
                    environment, it ensures better clinical outcomes and reduced hospital stays.
                </p>
            </section>

        </div>
    );
}