import Image from "next/image";
import Link from "next/link";

export default function Products() {
  const products = [
    {
      title: "Basic NPWT System",
      desc: "A standard device with real-time pressure monitoring for consistent and effective wound healing.",
    },
    {
      title: "Mini Portable NPWT",
      desc: "A compact, portable system with battery support and flexible operation modes for easy use.",
    },
    {
      title: "Irrigation NPWT System",
      desc: "An advanced system combining negative pressure with irrigation for complex wound management.",
    },
  ];

  return (
    <section className="relative w-full py-20 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-blue-100" />

      {/* Glow */}
      <div className="absolute w-[300px] h-[300px] bg-cyan-400/10 blur-[120px] rounded-full top-0 left-1/2 -translate-x-1/2" />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:max-w-6xl lg:mx-auto">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-12">
          Our <span className="text-cyan-400">Systems & Products</span>
        </h2>

        {/* MAIN LAYOUT */}
        <div className="flex flex-col lg:flex-row items-center gap-10">

          {/* LEFT CONTENT */}
          <div className="lg:w-1/2 w-full space-y-6">

            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 hover:shadow-[0_0_25px_rgba(0,209,255,0.2)] transition"
              >
                <h3 className="text-lg font-semibold mb-2 text-cyan-400">
                  {product.title}
                </h3>

                <p className="text-slate-800 text-sm">
                  {product.desc}
                </p>
              </div>
            ))}

            {/* CTA */}
            <Link href="/product">
              <button className="mt-4 px-6 py-3 rounded-full bg-cyan-400 text-slate-900 font-semibold shadow-[0_0_20px_rgba(0,209,255,0.6)] hover:scale-105 transition">
                Explore More About Products
              </button>
            </Link>

          </div>

          {/* RIGHT IMAGE */}
         <div className="lg:w-1/2 w-full flex flex-col items-center">

  {/* IMAGE CONTAINER */}
  <div className="relative w-full max-w-[420px] h-[260px] sm:h-[320px] md:h-[380px] rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,209,255,0.2)]">

    <Image
      src="/img3.png"
      alt="NPWT Systems"
      fill
      className="object-contain p-4"  // 👈 IMPORTANT CHANGE
      priority
    />

    {/* Optional overlay (lighter now) */}
    <div className="absolute inset-0 bg-black/10" />

  </div>

  {/* HEADING BELOW IMAGE */}
  <h2 className="mt-6 text-lg sm:text-xl md:text-2xl font-semibold text-cyan-400 text-center">
    Basic NPWT System
  </h2>

</div>
        </div>

      </div>
    </section>
  );
}