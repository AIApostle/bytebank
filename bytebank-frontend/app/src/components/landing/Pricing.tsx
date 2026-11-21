export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-32 bg-slate-900 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Simple Pricing
          </h2>
          <p className="text-lg text-slate-400">
            No hidden fees. Pay only for what you use.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Testnet",
              price: "Free",
              description: "Perfect for development and testing",
              features: [
                "Unlimited agents",
                "Unlimited transactions",
                "Full feature access",
                "Community support"
              ],
              cta: "Start Free",
              highlighted: false
            },
            {
              name: "Production",
              price: "Pay-as-you-go",
              description: "Scale to production with confidence",
              features: [
                "$0.01 per transaction",
                "Unlimited agents",
                "Priority support",
                "SLA guarantee",
                "Custom policies"
              ],
              cta: "Get Started",
              highlighted: true
            },
            {
              name: "Enterprise",
              price: "Custom",
              description: "For high-volume deployments",
              features: [
                "Volume pricing",
                "Dedicated support",
                "Custom infrastructure",
                "Advanced analytics",
                "White-label options"
              ],
              cta: "Contact Sales",
              highlighted: false
            }
          ].map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-lg border p-8 transition-all ${
                plan.highlighted
                  ? 'border-blue-500/50 bg-blue-600/10'
                  : 'border-slate-800 bg-slate-950'
              }`}
            >
              {plan.highlighted && (
                <div className="mb-4 inline-block rounded-full bg-blue-600/20 border border-blue-500/30 px-3 py-1 text-sm font-medium text-blue-400">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-slate-400 text-sm mb-6">{plan.description}</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-center gap-3">
                    <span className="text-blue-400">✓</span>
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.highlighted
                    ? 'bg-blue-600 hover:bg-blue-500 text-white'
                    : 'bg-slate-800 hover:bg-slate-700 text-white'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
