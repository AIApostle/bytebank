export default function Features() {
  const features = [
    {
      title: "Agent Accounts",
      description: "Each agent gets its own Stellar account with isolated funds and permissions.",
      icon: "👤"
    },
    {
      title: "Autonomous Payments",
      description: "Agents initiate and authorize transactions without human intervention.",
      icon: "💳"
    },
    {
      title: "Spending Controls",
      description: "Define limits, whitelists, and policies for each agent's financial actions.",
      icon: "🎯"
    },
    {
      title: "Real-Time Settlement",
      description: "Payments settle instantly on Stellar. No delays, no batch processing.",
      icon: "⚡"
    },
    {
      title: "Complete Audit Trail",
      description: "Every transaction is recorded with full transparency and compliance reporting.",
      icon: "📊"
    },
    {
      title: "Developer API",
      description: "Integrate via REST API. Framework-agnostic. Built for scale.",
      icon: "🔌"
    }
  ]

  return (
    <section id="product" className="py-20 sm:py-32 bg-cloud">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-main mb-4">
            Purpose-built for agent finance
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            All the components agents need to participate in the financial economy.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-border bg-white p-8 hover:shadow-lg hover:border-mint/30 transition-all group"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-main mb-2">{feature.title}</h3>
              <p className="text-slate leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
