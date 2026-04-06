import Link from "next/link";
import Image from "next/image";

export default function WhatIsNPWT() {
  return (
    <section className="relative w-full py-10 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-blue-100" />

      {/* Glow */}
      <div className="absolute w-[300px] h-[300px] bg-cyan-400/10 blur-[120px] rounded-full top-10 left-1/2 -translate-x-1/2" />

      {/* Container */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:max-w-6xl lg:mx-auto">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-12">
          What is <span className="text-cyan-400">NPWT?</span>
        </h2>

        {/* CARD */}
        <div className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,209,255,0.1)]">

          <div className="flex flex-col md:flex-row">

            {/* LEFT IMAGE */}
            <div className="md:w-1/2 w-full h-[220px] sm:h-[300px] md:h-auto relative">
              <Image
                src="/img2.png" // 👉 add your image in public folder
                alt="NPWT Therapy"
                fill
                className="object-cover"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="md:w-1/2 w-full p-6 sm:p-8 md:p-10 flex flex-col justify-center">

              <p className="text-slate-900 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
                Negative Pressure Wound Therapy (NPWT) is an advanced wound care technique that uses controlled vacuum pressure to promote faster and more effective healing.
              </p>

              <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed mb-8">
                It creates an optimal healing environment, making it highly effective for both acute and chronic wounds.
              </p>

              {/* CTA */}
              <Link href="/about">
                <button className="w-fit px-6 py-3 rounded-full bg-cyan-400 text-slate-900 font-semibold shadow-[0_0_20px_rgba(0,209,255,0.6)] hover:scale-105 transition">
                  Learn More About NPWT
                </button>
              </Link>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}