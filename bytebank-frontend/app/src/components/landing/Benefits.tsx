export default function Benefits() {
  return (
    <section className="py-20 sm:py-32 bg-slate-950 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Two column layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
              Why Agents Need Their Own Wallets
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/20 border border-blue-500/30">
                    <span className="text-blue-400 font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">True Autonomy</h3>
                  <p className="text-slate-400">Agents operate independently without human approval for every transaction.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/20 border border-blue-500/30">
                    <span className="text-blue-400 font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Financial Accountability</h3>
                  <p className="text-slate-400">Every transaction is attributed to a specific agent with full audit trail.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/20 border border-blue-500/30">
                    <span className="text-blue-400 font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Deterministic Controls</h3>
                  <p className="text-slate-400">Spending limits enforced at the smart contract level, not by the AI model.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/20 border border-blue-500/30">
                    <span className="text-blue-400 font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Enterprise Ready</h3>
                  <p className="text-slate-400">Compliance-friendly architecture with full reporting and settlement transparency.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/20 border border-blue-500/30">
                    <span className="text-blue-400 font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Multi-Agent Scaling</h3>
                  <p className="text-slate-400">Manage hundreds of agents with isolated wallets and individual policies.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="bg-gradient-to-br from-blue-600/10 to-slate-900 rounded-lg border border-slate-800 p-8 flex items-center justify-center h-96">
            <div className="text-center">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-2">Scale Your Agents</h3>
              <p className="text-slate-400">Each agent gets its own financial identity.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
