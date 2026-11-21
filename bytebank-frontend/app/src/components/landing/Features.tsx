export default function Features() {
  const features = [
    {
      title: "Agent Wallets",
      description: "Create isolated Stellar accounts for each agent. Full custody and control.",
      icon: "💼"
    },
    {
      title: "Programmable Payments",
      description: "Agents initiate payments subject to spending policies and transaction limits.",
      icon: "💳"
    },
    {
      title: "Spending Controls",
      description: "Set per-transaction limits, daily ceilings, and asset whitelists for each agent.",
      icon: "🎯"
    },
    {
      title: "Real-Time Settlement",
      description: "Payments settle on Stellar instantly. No waiting for batch processing.",
      icon: "⚡"
    },
    {
      title: "Audit Trail",
      description: "Complete transaction history with on-chain verification and compliance exports.",
      icon: "📊"
    },
    {
      title: "API-First",
      description: "Integrate via REST API. Framework agnostic. Testnet and production ready.",
      icon: "🔌"
    }
  ]

  return (
    <section id="features" className="py-20 sm:py-32 bg-slate-950 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Core Capabilities
          </h2>
          <p className="text-lg text-slate-400">
            Everything agents need to participate in the financial economy.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group rounded-lg border border-slate-800 bg-slate-900/50 hover:bg-slate-900 hover:border-slate-700 p-8 transition-all"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
