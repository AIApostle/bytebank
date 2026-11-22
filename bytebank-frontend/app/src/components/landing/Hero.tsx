import { ArrowRight, Zap, Shield, Lock, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-24 pb-32 sm:pt-32 sm:pb-48 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="absolute inset-0 bg-grid-pattern [background-size:64px_64px]" />
        <div className="absolute inset-0 bg-gradient-radial from-mint-100/20 via-transparent to-transparent" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-br from-mint-300/10 to-emerald-400/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-br from-navy-400/5 to-slate-600/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-gradient-to-br from-mint-400/5 to-emerald-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-slate-200/60 rounded-full px-4 py-2 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-mint-500"></span>
            </span>
            <span className="text-sm font-medium text-slate-700">
              The future of AI agent finance is here
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-navy-900 mb-6">
            Financial infrastructure
            <span className="block text-mint-600">for AI agents</span>
          </h1>

          {/* Supporting copy */}
          <p className="text-xl sm:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Give autonomous agents the ability to hold funds, make payments, and transact programmatically—with deterministic spending controls and complete audit trails.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-mint-500 to-emerald-600 text-white text-lg font-semibold transition-all hover:shadow-xl hover:shadow-mint-500/25 hover:scale-[1.02] active:scale-[0.98]">
              <span>Start building for free</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-slate-300 hover:border-slate-400 text-slate-700 hover:text-navy-900 text-lg font-semibold transition-colors bg-white/50 backdrop-blur-sm">
              <span>Explore API docs</span>
              <Zap className="w-4 h-4" />
            </button>
          </div>

          {/* Visual Elements */}
          <div className="relative max-w-4xl mx-auto mt-24 px-4">
            <div className="relative rounded-2xl border border-slate-200/80 bg-white/60 backdrop-blur-xl p-8 shadow-xl overflow-hidden">
              {/* Grid inside */}
              <div className="absolute inset-0 bg-grid-pattern [background-size:40px_40px] opacity-5" />

              {/* Visual representation of agent accounts */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="relative rounded-xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow animate-slide-up">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-mint-50 border border-mint-100">
                      <Shield className="w-5 h-5 text-mint-600" />
                    </div>
                    <h3 className="font-semibold text-navy-900">Agent Identity</h3>
                  </div>
                  <p className="text-sm text-slate-600">Cryptographic identity verification for each agent</p>
                </div>

                <div className="relative rounded-xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: '100ms' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-mint-50 border border-mint-100">
                      <Lock className="w-5 h-5 text-mint-600" />
                    </div>
                    <h3 className="font-semibold text-navy-900">Smart Controls</h3>
                  </div>
                  <p className="text-sm text-slate-600">Programmable spending policies and limits</p>
                </div>

                <div className="relative rounded-xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: '200ms' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-mint-50 border border-mint-100">
                      <Sparkles className="w-5 h-5 text-mint-600" />
                    </div>
                    <h3 className="font-semibold text-navy-900">Instant Settlement</h3>
                  </div>
                  <p className="text-sm text-slate-600">Real-time transactions on Stellar network</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-navy-900">$0</div>
              <div className="text-sm text-slate-600 font-medium mt-2">Setup cost</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="text-4xl font-bold text-navy-900">5 min</div>
              <div className="text-sm text-slate-600 font-medium mt-2">First agent live</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="text-4xl font-bold text-navy-900">24/7</div>
              <div className="text-sm text-slate-600 font-medium mt-2">Automated settlement</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="text-4xl font-bold text-navy-900">100%</div>
              <div className="text-sm text-slate-600 font-medium mt-2">Deterministic controls</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
