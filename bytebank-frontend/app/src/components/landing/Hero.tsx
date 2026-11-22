export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-midnight via-navy-deep to-navy-midnight pt-20 pb-32 sm:pt-32 sm:pb-48">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Gradient orbs (subtle) */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-mint opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-20 w-80 h-80 bg-emerald opacity-5 rounded-full blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="mb-8 inline-block">
            <span className="inline-flex items-center gap-2 rounded-full bg-mint/10 border border-mint/30 px-4 py-1.5 text-sm font-medium text-mint">
              <span className="h-2 w-2 rounded-full bg-mint"></span>
              Financial infrastructure for agents
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            Give AI agents access to money.
          </h1>

          {/* Supporting copy */}
          <p className="text-xl sm:text-2xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Financial infrastructure that enables AI agents to hold funds, make payments, and transact autonomously—with programmable controls.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="px-8 py-4 rounded-lg bg-mint hover:bg-emerald text-navy-midnight font-semibold transition-colors text-lg">
              Explore Bytebank
            </button>
            <button className="px-8 py-4 rounded-lg border-2 border-slate-400 hover:border-white text-white font-semibold transition-colors text-lg">
              For developers
            </button>
          </div>

          {/* Supporting text */}
          <p className="text-sm text-slate-400 font-medium">
            Built for the agent economy. Powered by Stellar.
          </p>
        </div>
      </div>
    </section>
  )
}
