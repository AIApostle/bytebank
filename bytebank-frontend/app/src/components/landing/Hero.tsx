export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-20 pb-32 sm:pt-32 sm:pb-48">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(59, 130, 246, 0.05) 25%, rgba(59, 130, 246, 0.05) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, 0.05) 75%, rgba(59, 130, 246, 0.05) 76%, transparent 77%, transparent),
                             linear-gradient(90deg, transparent 24%, rgba(59, 130, 246, 0.05) 25%, rgba(59, 130, 246, 0.05) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, 0.05) 75%, rgba(59, 130, 246, 0.05) 76%, transparent 77%, transparent)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="mb-8 inline-block">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 text-sm font-medium text-blue-400">
              <span className="h-2 w-2 rounded-full bg-blue-400"></span>
              The Future of Agent Finance
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            Financial Infrastructure for AI Agents
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Give autonomous agents the ability to hold accounts, transact payments, and manage finances on Stellar with deterministic spending controls.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-lg transition-colors">
              Start Building
            </button>
            <button className="border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white font-semibold px-8 py-4 rounded-lg transition-colors">
              View Docs
            </button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-white">$0</div>
              <div className="text-slate-400 text-sm mt-2">Setup Cost</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">5 min</div>
              <div className="text-slate-400 text-sm mt-2">Time to First Agent</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-slate-400 text-sm mt-2">Automated Settlement</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
