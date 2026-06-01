export default function Home() {
  const faqs = [
    {
      q: "Who is this for?",
      a: "Patients with chronic conditions and caregivers who want to make the most of every doctor visit."
    },
    {
      q: "What does it help me do?",
      a: "Organize your symptoms, questions, and medical history into a clear, printable summary before each appointment."
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. Cancel your subscription at any time with no questions asked."
    }
  ]

  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-16">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-4">
          Health Tools
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Prepare better for<br />doctor appointments
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Stop forgetting what to say. Organize your symptoms, questions, and medical history into a structured summary your doctor will appreciate.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Get Started — $7/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No commitment.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-3 gap-4 mb-16 text-center">
        {[
          { icon: "📋", label: "Symptom Tracker" },
          { icon: "❓", label: "Question Lists" },
          { icon: "🖨️", label: "Printable Summary" }
        ].map(({ icon, label }) => (
          <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-2xl mb-2">{icon}</div>
            <div className="text-sm text-[#8b949e]">{label}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-xl p-8 text-center max-w-sm mx-auto">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$7</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited appointment prep docs",
              "Symptom tracker with severity ratings",
              "Custom question lists",
              "Medical history form",
              "Printable & shareable summaries",
              "Secure, private storage"
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-center"
          >
            Start Preparing Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs mt-16">
        © {new Date().getFullYear()} Doctor Appointment Prep Assistant. All rights reserved.
      </footer>
    </main>
  )
}
