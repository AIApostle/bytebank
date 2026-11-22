import { 
  Rocket, 
  Shield, 
  Zap, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  Clock,
  Users,
  Globe
} from 'lucide-react'

export default function CTA() {
  const trustSignals = [
    { icon: Shield, text: "Bank‑grade security", color: "text-emerald-500" },
    { icon: Zap, text: "24/7 availability", color: "text-amber-500" },
    { icon: Users, text: "300+ developers", color: "text-indigo-500" },
    { icon: Globe, text: "Global infrastructure", color: "text-purple-500" }
  ]

  return (
    <section className="relative py-32 sm:py-48 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950">
        <div className="absolute inset-0 bg-grid-pattern [background-size:64px_64px] opacity-10" />
        <div className="absolute inset-0 bg-gradient-radial from-mint-500/10 via-transparent to-transparent" />
      </div>

      {/* Animated gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-mint-500/5 to-transparent animate-gradient-slow" />
      
      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-mint-500/15 to-emerald-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-indigo-500/15 to-purple-500/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-1/3 right-1/3 w-40 h-40 bg-gradient-to-br from-amber-500/10 to-amber-600/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main CTA Card */}
        <div className="relative animate-scale-in">
          {/* Card background with glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-navy-800 via-navy-900 to-navy-800 border border-navy-700/50 shadow-2xl" />
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-mint-500/10 via-emerald-500/5 to-mint-500/10 blur-xl" />
          <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/5" />

          {/* Inner card with noise texture */}
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-noise [background-size:200px_200px] opacity-5" />
            
            <div className="relative p-12 sm:p-16 lg:p-20">
              {/* Header with urgency indicator */}
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
                    <Rocket className="w-4 h-4 text-mint-400" />
                    <span className="text-sm font-medium text-slate-300">
                      Limited‑time offer
                    </span>
                  </div>
                  
                  <h2 className="text-title sm:text-display font-bold tracking-tight text-white mb-6">
                    Start building the
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-mint-400 to-emerald-500">
                      future of agent finance
                    </span>
                  </h2>
                  
                  <p className="text-lead text-slate-300 max-w-2xl leading-relaxed">
                    Join 300+ developers who are already building autonomous financial systems. 
                    Get $100 in free transaction credits when you upgrade to Production.
                  </p>
                </div>

                {/* Urgency timer */}
                <div className="flex-shrink-0">
                  <div className="relative p-6 rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 border border-navy-700/50">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold">
                        <Clock className="w-3 h-3" />
                        <span>Limited offer</span>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-2">$100 credit</div>
                      <p className="text-sm text-slate-400">Free with Production plan</p>
                      <div className="mt-4">
                        <div className="h-2 w-32 bg-navy-700 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-mint-500 to-emerald-600 animate-[shimmer_2s_infinite]" style={{ width: '65%' }} />
                        </div>
                        <p className="text-xs text-slate-500 mt-2">Credits remaining: 65%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <button className="group relative inline-flex items-center gap-4 px-10 py-5 rounded-xl bg-gradient-to-r from-mint-500 to-emerald-600 text-white font-bold text-lg transition-all hover:shadow-xl hover:shadow-mint-500/30 hover:scale-[1.02] active:scale-[0.98]">
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-mint-500 to-emerald-600 blur-md opacity-50 group-hover:opacity-70 transition-opacity" />
                  
                  <div className="relative flex items-center gap-3">
                    <Rocket className="w-6 h-6" />
                    <span>Start building free</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>

                <button className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-xl border-2 border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-semibold text-lg transition-colors bg-white/5 backdrop-blur-sm">
                  <Sparkles className="w-5 h-5" />
                  <span>Schedule expert demo</span>
                </button>
              </div>

              {/* Trust Signals */}
              <div className="mb-12">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
                  <span className="text-sm text-slate-500 font-medium px-4">Trusted by industry leaders</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {trustSignals.map((signal, idx) => {
                    const Icon = signal.icon
                    return (
                      <div 
                        key={idx}
                        className="animate-fade-in-up"
                        style={{ animationDelay: `${idx * 100}ms` }}
                      >
                        <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors">
                          <Icon className={`w-6 h-6 ${signal.color}`} />
                          <span className="text-sm text-slate-300 font-medium text-center">{signal.text}</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Guarantee Section */}
              <div className="rounded-2xl bg-gradient-to-r from-white/5 via-white/10 to-white/5 border border-white/10 p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="text-center md:text-left">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white">No‑risk guarantee</h3>
                    </div>
                    <p className="text-slate-300">
                      Start free on testnet. Only pay when you go to production. 
                      Cancel anytime with no penalties.
                    </p>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-1">$0</div>
                      <div className="text-sm text-slate-400">Setup cost</div>
                    </div>
                    <div className="h-12 w-px bg-gradient-to-b from-transparent via-slate-700 to-transparent" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-1">5 min</div>
                      <div className="text-sm text-slate-400">First agent live</div>
                    </div>
                    <div className="h-12 w-px bg-gradient-to-b from-transparent via-slate-700 to-transparent" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-1">100%</div>
                      <div className="text-sm text-slate-400">Uptime SLA</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom note */}
              <div className="mt-12 text-center">
                <p className="text-sm text-slate-500 font-medium">
                  No credit card required • Free tier includes unlimited agents • 
                  <span className="text-mint-400 ml-2">SOC 2 compliant</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-16 text-center animate-fade-in-up">
          <p className="text-slate-400">
            Questions? Email us at{' '}
            <a href="mailto:support@bytebank.com" className="text-mint-400 hover:text-mint-300 font-medium transition-colors">
              support@bytebank.com
            </a>{' '}
            or join our{' '}
            <a href="https://discord.gg/bytebank" className="text-mint-400 hover:text-mint-300 font-medium transition-colors">
              Discord community
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
