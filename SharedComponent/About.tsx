import Link from "next/link";
import Image from "next/image";

export default function About() {
    return (
        <section className="relative w-full py-10 overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 bg-blue-100" />

            {/* Glow */}
            <div className="absolute w-[300px] h-[300px] bg-cyan-400/10 blur-[100px] rounded-full top-0 left-1/2 -translate-x-1/2" />

            {/* Content */}
            <div className="relative z-10 w-full px-4 sm:px-6 lg:max-w-6xl lg:mx-auto">

                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-12">
                    About <span className="text-cyan-400">IBN Group</span>
                </h2>

                {/* CARD */}
                <div className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,209,255,0.1)]">

                    <div className="flex flex-col md:flex-row items-center">

                        {/* LEFT CONTENT */}
                        <div className="md:w-1/2 w-full p-6 sm:p-8 md:p-10 text-center md:text-left">

                            <p className="text-slate-900 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
                                We are <span className="text-cyan-400 font-medium">IBN</span>, a partner organization of Healomex Biosciences Pvt Ltd.
                                We specialize in providing advanced Negative Pressure Wound Therapy (NPWT) solutions designed to improve patient outcomes.
                            </p>

                            <p className="text-slate-800 text-sm sm:text-base md:text-lg leading-relaxed mb-8">
                                Our systems meet high standards of quality and safety, ensuring reliable and effective wound care across hospitals and clinical environments.
                            </p>

                            {/* CTA */}
                            <Link href="/about">
                                <button className="px-6 py-3 cursor-pointer rounded-full bg-cyan-400 text-black font-semibold shadow-[0_0_20px_rgba(0,209,255,0.6)] hover:scale-105 transition">
                                    Learn More About Us
                                </button>
                            </Link>

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="md:w-1/2 w-full h-[250px] sm:h-[300px] md:h-[400px] relative">
                            <Image
                                src="/img1.png"
                                alt="About IBN"
                                fill
                                className="object-cover rounded-xl"
                                priority
                            />
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}