import Link from "next/link";

import Image from "next/image";
export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 mt-0 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-blue-100" />

      {/* Glow */}
      <div className="absolute w-[300px] h-[300px] bg-cyan-400/10 blur-[120px] rounded-full bottom-0 left-1/2 -translate-x-1/2" />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:max-w-7xl lg:mx-auto py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-slate-900">

        {/* Brand */}
        <div className="text-center sm:text-left">
         
<Link href="/" className="inline-block mb-3">
  <Image
    src="/logo.svg" // 👉 your logo file
    alt="IBN Group Logo"
    width={120}
    height={40}
    className="object-contain hover:opacity-80 transition"
  />
</Link>
          <p className="text-sm mb-4">
            Healing Powered by Precision
          </p>

          <div className="space-y-2 text-sm">
            <p>📍 Shamli, UP</p>
            <p>📞 +91 9389857045</p>
            <p>📧 parvajmalik@ibngroup.in</p>
          </div>
        </div>

        {/* Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-slate-900 font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-cyan-400 cursor-pointer transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/product" className="hover:text-cyan-400 cursor-pointer transition">
                Products
              </Link>
            </li>
            <li>
              <Link href="/result" className="hover:text-cyan-400 cursor-pointer transition">
                Results
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-cyan-400 cursor-pointer   transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Extra / CTA */}
        <div className="text-center sm:text-left">
          <h3 className="text-slate-900 font-semibold mb-4">
            Get in Touch
          </h3>

          <p className="text-sm mb-4">
            Reach out to us for advanced wound care solutions and support.
          </p>

          <Link href="/contact">
            <button className="px-5 py-2 rounded-full bg-cyan-400 text-slate-900 font-medium shadow-[0_0_15px_rgba(0,209,255,0.6)] hover:scale-105 transition">
              Contact Us
            </button>
          </Link>
        </div>

      </div>

      {/* Bottom */}
      <div className="relative z-10 text-center text-slate-800 text-xs pb-6 px-4">
        © {new Date().getFullYear()} IBN Group. All rights reserved.
      </div>

    </footer>
  );
}