"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      setSuccess("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setSuccess("Something went wrong!");
    }
  };

  return (
    <div className="bg-blue-100 text-white min-h-screen">

      {/* HERO */}
      <section className="py-16 text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Contact <span className="text-cyan-400">Us</span>
        </h1>

        <p className="text-slate-800 max-w-2xl mx-auto">
          Get in touch with us for advanced wound care solutions, product inquiries,
          or clinical support. Our team is here to assist you.
        </p>
      </section>

      {/* MAIN SECTION */}
      <section className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto py-12 grid md:grid-cols-2 gap-10">

        {/* LEFT INFO */}
        <div className="space-y-6">

          <div>
            <h2 className="text-xl font-semibold text-cyan-400 mb-2">
              IBN Group
            </h2>
            <p className="text-slate-700">
              Healing Powered by Precision
            </p>
          </div>

          <div className="space-y-3 text-slate-800 text-sm">
            <p>📍 Shamli, Uttar Pradesh</p>
            <p>📞 +91 9389857045</p>
            <p>📧 parvajmalik@ibngroup.in</p>
          </div>

          <p className="text-slate-800 text-sm">
            Whether you're a healthcare professional, hospital, or patient,
            we are committed to providing reliable NPWT solutions and continuous support.
          </p>

        </div>

        {/* RIGHT FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white backdrop-blur-md border border-blue-200 rounded-2xl p-6 space-y-5"
        >

          <input
            type="text"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full p-3 rounded-lg bg-black/30 border border-white/10 outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="w-full p-3 rounded-lg bg-black/30 border border-white/10 outline-none"
          />

          <textarea
            placeholder="Your Message"
            required
            rows={5}
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            className="w-full p-3 rounded-lg bg-black/30 border border-white/10 outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-full bg-cyan-400 text-slate-900 font-semibold shadow-[0_0_20px_rgba(0,209,255,0.6)] hover:scale-105 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-center text-sm text-cyan-400">
              {success}
            </p>
          )}

        </form>

      </section>

    </div>
  );
}