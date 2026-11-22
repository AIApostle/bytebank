import { 
  CheckCircle2, 
  Star, 
  Zap, 
  Shield,
  Users,
  Globe,
  ArrowRight,
  Sparkles
} from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      name: "Development",
      tagline: "Build and test freely",
      price: "Free",
      period: "forever",
      description: "Perfect for prototyping, testing, and development",
      features: [
        { text: "Unlimited agents", included: true },
        { text: "Testnet environment", included: true },
        { text: "Full API access", included: true },
        { text: "Community support", included: true },
        { text: "Basic analytics", included: true },
        { text: "Production access", included: false }
      ],
      cta: "Start building free",
      highlighted: false,
      icon: Zap,
      color: "from-slate-500 to-slate-600"
    },
    {
      name: "Production",
      tagline: "Scale with confidence",
      price: "Pay‑as‑you‑go",
      period: "per transaction",
      description: "For live deployments with real financial activity",
      features: [
        { text: "All Development features", included: true },
        { text: "$0.01 per transaction", included: true },
        { text: "Priority support", included: true },
        { text: "99.99% SLA", included: true },
        { text: "Advanced analytics", included: true },
        { text: "Compliance reporting", included: true }
      ],
      cta: "Get started",
      highlighted: true,
      icon: Star,
      color: "from-amber-500 to-amber-600"
    },
    {
      name: "Enterprise",
      tagline: "Custom solutions",
      price: "Custom",
      period: "volume pricing",
      description: "For high‑volume deployments with specific requirements",
      features: [
        { text: "All Production features", included: true },
        { text: "Volume discounts", included: true },
        { text: "Dedicated support", included: true },
        { text: "Custom infrastructure", included: true },
        { text: "White‑label options", included: true },
        { text: "SOC 2 compliance", included: true }
      ],
      cta: "Contact sales",
      highlighted: false,
      icon: Shield,
      color: "from-indigo-500 to-indigo-600"
    }
  ]

  return (
    <section id="developers" className="relative py-32 sm:py-48 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="absolute inset-0 bg-grid-pattern [background-size:64px_64px]" />
        <div className="absolute inset-0 bg-gradient-radial from-amber-100/10 via-transparent to-transparent opacity-30" />
      </div>

      {/* Floating shapes */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-100/30 to-amber-200/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-indigo-100/30 to-purple-200/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-slate-200/60 shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-semibold text-slate-700">
              Transparent Pricing
            </span>
          </div>
          
          <h2 className="text-title sm:text-display font-bold tracking-tight text-navy-950 mb-6">
            Start free,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-700">
              scale as you grow
            </span>
          </h2>
          
          <p className="text-lead text-slate-600 max-w-3xl mx-auto leading-relaxed">
            No upfront costs, no long‑term commitments. Pay only for the value you create.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-4">
          {plans.map((plan, idx) => {
            const Icon = plan.icon
            return (
              <div
                key={idx}
                className="animate-fade-in-up"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className={`relative h-full transition-all duration-500 ${
                  plan.highlighted 
                    ? 'md:scale-[1.05] md:-translate-y-4' 
                    : 'group'
                }`}>
                  {/* Card Background */}
                  <div className={`absolute inset-0 rounded-2xl border transition-all duration-500 ${
                    plan.highlighted
                      ? 'bg-gradient-to-b from-white via-white to-white/90 border-amber-200/50 shadow-card-xl'
                      : 'bg-white/80 backdrop-blur-sm border-white/70 shadow-card group-hover:shadow-card-lg group-hover:border-white/90'
                  }`} />
                  
                  {/* Highlighted plan glow */}
                  {plan.highlighted && (
                    <>
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/5 to-amber-600/5" />
                      <div className="absolute inset-0 rounded-2xl ring-1 ring-amber-200/30" />
                    </>
                  )}

                  {/* Badge for highlighted plan */}
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-bold shadow-lg">
                        <Star className="w-4 h-4" />
                        <span>Most popular</span>
                      </div>
                    </div>
                  )}

                  {/* Card Content */}
                  <div className="relative p-8 h-full flex flex-col">
                    {/* Plan header */}
                    <div className="mb-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${plan.color} shadow-lg`}>
                          <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-navy-950">{plan.name}</h3>
                          <p className="text-sm text-slate-500">{plan.tagline}</p>
                        </div>
                      </div>
                      
                      <p className="text-slate-600 mb-6">{plan.description}</p>

                      {/* Price */}
                      <div className="mb-6">
                        <div className="flex items-baseline gap-2">
                          <span className="text-5xl font-bold text-navy-950">{plan.price}</span>
                          {plan.period && (
                            <span className="text-slate-500 font-medium">/{plan.period}</span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex-1 mb-8">
                      <ul className="space-y-4">
                        {plan.features.map((feature, fidx) => (
                          <li key={fidx} className="flex items-start gap-3">
                            {feature.included ? (
                              <CheckCircle2 className="w-5 h-5 text-mint-600 flex-shrink-0 mt-0.5" />
                            ) : (
                              <div className="w-5 h-5 flex-shrink-0" />
                            )}
                            <span className={`text-sm ${
                              feature.included 
                                ? 'text-slate-700' 
                                : 'text-slate-400 line-through'
                            }`}>
                              {feature.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <div>
                      <button className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                        plan.highlighted
                          ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white hover:shadow-xl hover:shadow-amber-500/25 hover:scale-[1.02] active:scale-[0.98]'
                          : 'border-2 border-slate-300 hover:border-slate-400 text-slate-700 hover:text-navy-900 bg-white/50 backdrop-blur-sm group-hover:scale-[1.02]'
                      }`}>
                        <div className="flex items-center justify-center gap-2">
                          <span>{plan.cta}</span>
                          <ArrowRight className={`w-5 h-5 ${
                            plan.highlighted ? 'group-hover:translate-x-1' : ''
                          } transition-transform`} />
                        </div>
                      </button>
                    </div>

                    {/* Additional info for highlighted plan */}
                    {plan.highlighted && (
                      <div className="mt-6 pt-6 border-t border-slate-100">
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <Globe className="w-4 h-4" />
                          <span>Global availability • No setup fees</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Comparison Table */}
        <div className="mt-24 animate-fade-in-up">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-navy-950 mb-2">Detailed comparison</h3>
              <p className="text-slate-600">See exactly what's included in each plan</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Users className="w-4 h-4" />
              <span>All plans include unlimited agents</span>
            </div>
          </div>

          <div className="rounded-2xl bg-white/80 backdrop-blur-sm border border-white/70 shadow-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="py-4 px-6 text-left text-sm font-semibold text-slate-700">Feature</th>
                    <th className="py-4 px-6 text-center text-sm font-semibold text-slate-700">Development</th>
                    <th className="py-4 px-6 text-center text-sm font-semibold text-slate-700">Production</th>
                    <th className="py-4 px-6 text-center text-sm font-semibold text-slate-700">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Maximum transactions per day", dev: "Unlimited", prod: "Unlimited", ent: "Unlimited" },
                    { feature: "SLA guarantee", dev: "—", prod: "99.99%", ent: "99.99%" },
                    { feature: "Support response time", dev: "Community", prod: "< 4 hours", ent: "< 1 hour" },
                    { feature: "Multi-region deployment", dev: "—", prod: "✓", ent: "✓" },
                    { feature: "Custom integrations", dev: "—", prod: "Basic", ent: "Full" },
                    { feature: "Security audit reports", dev: "—", prod: "Annual", ent: "Quarterly" },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-slate-50 last:border-0">
                      <td className="py-4 px-6 text-sm text-slate-700 font-medium">{row.feature}</td>
                      <td className="py-4 px-6 text-center text-sm text-slate-600">{row.dev}</td>
                      <td className="py-4 px-6 text-center">
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-mint-700">
                          {row.prod === "✓" ? <CheckCircle2 className="w-4 h-4" /> : row.prod}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-indigo-700">
                          {row.ent === "✓" ? <CheckCircle2 className="w-4 h-4" /> : row.ent}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 animate-fade-in-up">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-navy-950 mb-4">Frequently asked questions</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">Get answers to common questions about our pricing and plans</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "What happens when I exceed transaction limits?",
                answer: "We'll notify you before you hit any limits. Production plans scale automatically, and you can upgrade at any time."
              },
              {
                question: "Can I switch between plans?",
                answer: "Yes, you can upgrade or downgrade at any time. Changes take effect immediately with no downtime."
              },
              {
                question: "Is there a free trial for Production?",
                answer: "Yes! All new accounts get $100 in free transaction credits when they upgrade to Production."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, bank transfers, and crypto payments for Enterprise plans."
              }
            ].map((faq, idx) => (
              <div 
                key={idx} 
                className="rounded-xl border border-slate-200 bg-white/50 backdrop-blur-sm p-6 hover:border-slate-300 transition-colors"
              >
                <h4 className="text-lg font-semibold text-navy-950 mb-3">{faq.question}</h4>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center animate-fade-in-up">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 px-8 py-6 rounded-2xl bg-gradient-to-r from-navy-50 to-white border border-slate-200/80 shadow-card">
            <div className="text-left">
              <h4 className="text-xl font-bold text-navy-950 mb-1">Still have questions?</h4>
              <p className="text-slate-600">Our team is here to help you choose the right plan</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-navy-900 hover:bg-navy-800 text-white font-semibold transition-colors">
                <Users className="w-4 h-4" />
                <span>Talk to sales</span>
              </button>
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-navy-900 font-semibold transition-colors">
                <span>Read docs</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
