export default function Pricing() {
  return (
    <section id="developers" className="py-20 sm:py-32 bg-white border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-main mb-4">
            Simple pricing
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Start free on testnet. Scale to production. Pay only for what you use.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Development",
              price: "Free",
              description: "Perfect for building and testing",
              features: [
                "Unlimited agents",
                "Testnet only",
                "Full feature access",
                "Community support"
              ],
              cta: "Start for free",
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
                "SLA guarantee"
              ],
              cta: "Get started",
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
                "White-label options"
              ],
              cta: "Contact sales",
              highlighted: false
            }
          ].map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-lg border p-8 transition-all ${
                plan.highlighted
                  ? 'border-mint/30 bg-mint/5 ring-1 ring-mint/10'
                  : 'border-border bg-cloud hover:border-mint/20'
              }`}
            >
              {plan.highlighted && (
                <div className="mb-4 inline-block rounded-full bg-mint text-navy-midnight px-3 py-1 text-xs font-bold uppercase">
                  Most popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-main mb-2">{plan.name}</h3>
              <p className="text-slate text-sm mb-6">{plan.description}</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-main">{plan.price}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-center gap-3">
                    <span className="text-mint font-bold">✓</span>
                    <span className="text-slate text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.highlighted
                    ? 'bg-mint hover:bg-emerald text-navy-midnight'
                    : 'bg-cloud border-2 border-border hover:border-mint text-main'
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
