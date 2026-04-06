"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
  <header
  className={`fixed top-0 left-0 w-full z-[999] 
  bg-blue-100 border-b border-white/10 ${
    isOpen ? "backdrop-blur-0" : "backdrop-blur-md"
  }`}
>
      {/* NAVBAR */}
      <div className="w-full flex items-center justify-between px-4 sm:px-6 lg:max-w-7xl lg:mx-auto py-3">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="IBN Logo"
            width={85}
            height={85}
            className="w-[45px] sm:w-[55px] lg:w-[90px]"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center cursor-pointer gap-6 lg:gap-8 text-lg text-slate-900 font-bold">
          <Link href="/about">About Us</Link>
          <Link href="/product">Product</Link>
          <Link href="/result">Result</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link href="/contact">
            <button className="px-4 py-2 cursor-pointer rounded-full bg-cyan-400 text-slate-900 font-bold glow">
              Send Feedback
            </button>
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-white/20"
        >
          <Menu className="text-cyan-400" />
        </button>
      </div>

      {/* OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[9998]"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* SIDEBAR */}
 <div
  className={`fixed top-0 right-0 w-[260px] 
  bg-white 
  p-4
  rounded-l-2xl   // optional nice UI
 
  z-[9999] isolate
  transform transition-transform duration-300 ${
    isOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <X className="text-cyan-400" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col items-start px-6 gap-6 text-slate-900 text-lg mt-6">

          <Link href="/about" onClick={() => setIsOpen(false)}>
            About Us
          </Link>

          <Link href="/product" onClick={() => setIsOpen(false)}>
            Product
          </Link>

          <Link href="/result" onClick={() => setIsOpen(false)}>
            Result
          </Link>

          <Link href="/contact" onClick={() => setIsOpen(false)}>
            Contact Us
          </Link>

          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <button className="mt-4 px-5 py-2 rounded-full bg-cyan-400 text-black glow">
              Add Feedback
            </button>
          </Link>

        </div>
      </div>
    </header>
  );
}