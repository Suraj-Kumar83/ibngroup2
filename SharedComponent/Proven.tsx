import Image from "next/image";
import Link from "next/link";
export default function Results() {
  const results = [
    {
      before: "/results/before1.png",
      after: "/results/after1.png",
    },
    {
      before: "/results/before2.png",
      after: "/results/after2.png",
    },
    {
      before: "/results/before3.png",
      after: "/results/after3.png",
    },
  ];

  return (
    <section className="relative w-full py-20 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-blue-100" />

      {/* Glow */}
      <div className="absolute w-[300px] h-[300px] bg-cyan-400/10 blur-[120px] rounded-full top-0 left-1/2 -translate-x-1/2" />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:max-w-6xl lg:mx-auto text-center">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
          Proven <span className="text-cyan-400">Clinical Results</span>
        </h2>

        {/* Description */}
        <p className="text-slate-800 max-w-2xl mx-auto mb-12 text-sm sm:text-base md:text-lg">
          Our NPWT therapy has demonstrated significant improvement in chronic and complex wounds,
          including diabetic ulcers, bedsores, and surgical wounds.
        </p>

        {/* RESULTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {results.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,209,255,0.1)]"
            >

              {/* Images */}
              <div className="grid grid-cols-2">

                {/* BEFORE */}
                <div className="relative h-[180px] sm:h-[200px]">
                  <Image
                    src={item.before}
                    alt="Before Treatment"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 text-xs bg-cyan-400 px-2 py-1 rounded">
                    Before
                  </div>
                </div>
                {/* AFTER */}
                <div className="relative h-[180px] sm:h-[200px]">
                  <Image
                    src={item.after}
                    alt="After Treatment"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 right-2 text-xs bg-cyan-400 text-slate-900 px-2 py-1 rounded">
                    After
                  </div>
                </div>

              </div>

              {/* Caption */}
              <div className="p-4">
                <p className="text-slate-800 text-sm">
                  Noticeable healing within weeks of treatment.
                </p>
              </div>

            </div>
          ))}

        </div>
        {/* CTA */}
        <div className="mt-12">
          <Link href="/result">
            <button className="px-6 py-3 cursor-pointer rounded-full bg-cyan-400 text-slate-900 font-semibold shadow-[0_0_20px_rgba(0,209,255,0.6)] hover:scale-105 transition">
              View Detailed Results
            </button>
          </Link>
        </div>
      </div>


    </section>
  );
}