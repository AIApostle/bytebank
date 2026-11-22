import { 
  UserCog, 
  Zap, 
  Target, 
  Shield, 
  FileText, 
  Code2, 
  Sparkles,
  ArrowRight
} from 'lucide-react'

export default function Features() {
  const features = [
    {
      title: "Agent Identity & Accounts",
      description: "Each AI agent gets a unique cryptographic identity with isolated Stellar accounts, managed wallets, and verifiable credentials.",
      icon: UserCog,
      color: "from-indigo-500 to-indigo-600",
      delay: "0ms"
    },
    {
      title: "Autonomous Payment Execution",
      description: "Agents initiate, authorize, and execute transactions independently with programmable logic and multi-signature controls.",
      icon: Zap,
      color: "from-amber-500 to-amber-600",
      delay: "100ms"
    },
    {
      title: "Smart Spending Controls",
      description: "Define granular policies—transaction limits, whitelisted recipients, time-based constraints—enforced at the protocol level.",
      icon: Target,
      color: "from-mint-500 to-emerald-600",
      delay: "200ms"
    },
    {
      title: "Real-Time Settlement Network",
      description: "Payments settle instantly on Stellar's global ledger. No batch processing, no intermediaries, 24/7 availability.",
      icon: Sparkles,
      color: "from-purple-500 to-purple-600",
      delay: "300ms"
    },
    {
      title: "Compliance & Audit Trail",
      description: "Complete transparency with immutable transaction records, regulatory reporting, and compliance-ready audit logs.",
      icon: FileText,
      color: "from-slate-600 to-slate-700",
      delay: "400ms"
    },
    {
      title: "Developer-First API",
      description: "RESTful API with WebSocket support, comprehensive SDKs, and framework-agnostic integration patterns.",
      icon: Code2,
      color: "from-navy-600 to-navy-700",
      delay: "500ms"
    }
  ]

  return (
    <section id="product" className="relative py-32 sm:py-48 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/80 to-white">
        <div className="absolute inset-0 bg-grid-pattern [background-size:64px_64px]" />
        <div className="absolute inset-0 bg-gradient-radial from-mint-100/10 via-transparent to-transparent opacity-50" />
      </div>

      {/* Floating shapes */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-br from-indigo-100/30 to-indigo-200/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-mint-100/30 to-emerald-200/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-slate-200/60 shadow-sm">
            <div className="flex items-center gap-1">
              <div className="h-1.5 w-1.5 rounded-full bg-mint-500 animate-pulse" />
              <div className="h-1.5 w-1.5 rounded-full bg-mint-500 animate-pulse" style={{ animationDelay: '150ms' }} />
              <div className="h-1.5 w-1.5 rounded-full bg-mint-500 animate-pulse" style={{ animationDelay: '300ms' }} />
            </div>
            <span className="text-sm font-semibold text-slate-700">
              Financial Infrastructure
            </span>
          </div>
          
          <h2 className="text-title sm:text-display font-bold tracking-tight text-navy-950 mb-6">
            Purpose-built for the
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-mint-600 to-emerald-700">
              agent economy
            </span>
          </h2>
          
          <p className="text-lead text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Complete financial tooling that enables AI agents to participate in global markets—with full autonomy, compliance, and deterministic control.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: feature.delay }}
              >
                {/* Card Background */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/80 via-white/60 to-white/40 backdrop-blur-xl border border-white/70 shadow-card transition-all duration-500 group-hover:shadow-card-lg group-hover:border-white/90" />
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-mint-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Card Content */}
                <div className="relative p-8">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-white to-white/80 rounded-xl blur-sm" />
                      <div className={`relative flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                      </div>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-navy-950 mb-3 group-hover:text-navy-900 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Interactive element */}
                  <div className="flex items-center gap-2 text-sm font-medium text-mint-700 group-hover:text-mint-800 transition-colors">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Hover effect lines */}
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-mint-500 to-emerald-600 group-hover:w-3/4 group-hover:left-1/8 transition-all duration-500" />
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center animate-fade-in-up">
          <p className="text-lead text-slate-600 mb-8 max-w-2xl mx-auto">
            Everything you need to build, deploy, and scale AI agent financial systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-navy-900 to-navy-800 text-white font-semibold transition-all hover:shadow-xl hover:shadow-navy-900/30 hover:scale-[1.02] active:scale-[0.98]">
              <span>View API documentation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-slate-300 hover:border-slate-400 text-slate-700 hover:text-navy-900 font-semibold transition-colors bg-white/50 backdrop-blur-sm">
              <Shield className="w-5 h-5" />
              <span>Security overview</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
