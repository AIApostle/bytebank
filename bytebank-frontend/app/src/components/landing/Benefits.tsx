export default function Benefits() {
  return (
    <section className="py-20 sm:py-32 bg-cloud border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Two column layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-main mb-8">
              Why agents need financial infrastructure
            </h2>

            <div className="space-y-6">
              {[
                {
                  title: "True Autonomy",
                  desc: "Agents operate independently without human approval for every transaction."
                },
                {
                  title: "Financial Accountability",
                  desc: "Every transaction is attributed to a specific agent with full audit trail."
                },
                {
                  title: "Deterministic Controls",
                  desc: "Spending limits enforced at the smart contract level, not by the AI model."
                },
                {
                  title: "Enterprise Ready",
                  desc: "Compliance-friendly architecture with full reporting and settlement transparency."
                },
                {
                  title: "Multi-Agent Scaling",
                  desc: "Manage hundreds of agents with isolated accounts and individual policies."
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-mint/20 border border-mint/50">
                      <svg className="w-4 h-4 text-mint" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-main mb-1">{item.title}</h3>
                    <p className="text-slate">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="bg-gradient-to-br from-mint/10 to-emerald/10 rounded-lg border border-mint/20 p-12 flex items-center justify-center h-96">
            <div className="text-center">
              <div className="text-6xl mb-4">🤖💰</div>
              <h3 className="text-2xl font-bold text-main mb-2">Agents with agency</h3>
              <p className="text-slate">Financial infrastructure for autonomous systems.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
