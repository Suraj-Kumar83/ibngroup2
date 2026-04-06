import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[60vh] flex items-center justify-center text-center overflow-hidden">

      {/* 🌌 Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0f2a38,#07141c_90%)]" />

      {/* 🟦 Grid Overlay */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* 🔵 Glow Effect */}
      <div className="absolute w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] bg-cyan-400/20 blur-[120px] rounded-full top-10 left-1/2 -translate-x-1/2" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-bold leading-tight mb-6">
          Advanced Wound Healing <br />
          <span className="text-cyan-400">with NPWT Technology</span>
        </h1>

        {/* Subtext */}
        <p className="text-white text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8">
          Accelerating recovery through precise negative pressure. We are IBN,
          redefining wound care for hospitals, doctors, and patients.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

          {/* Primary */}
          <Link href="/contact">
            <button className="px-6 py-3 cursor-pointer rounded-full bg-cyan-400 text-black font-semibold shadow-[0_0_20px_rgba(0,209,255,0.6)] hover:scale-105 transition">
              Contact Us
            </button>
          </Link>

          {/* Secondary */}
          <Link href="/about">
            <button className="px-6 py-3 cursor-pointer rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition">
                Know More About Us
            </button>
          </Link>

        </div>
      </div>
    </section>
  );
}