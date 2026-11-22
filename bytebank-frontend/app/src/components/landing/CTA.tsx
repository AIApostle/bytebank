export default function CTA() {
  return (
    <section className="py-20 sm:py-32 bg-cloud border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-gradient-to-br from-navy-midnight to-navy-deep border border-mint/20 p-12 sm:p-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to build the agent economy?
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Start building on testnet today. Move to production when you're ready.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 rounded-lg bg-mint hover:bg-emerald text-navy-midnight font-semibold transition-colors text-lg">
              Create account
            </button>
            <button className="px-8 py-4 rounded-lg border-2 border-slate-400 hover:border-white text-white font-semibold transition-colors text-lg">
              Schedule demo
            </button>
          </div>

          <p className="text-sm text-slate-400 mt-8 font-medium">
            No credit card required. Free tier available.
          </p>
        </div>
      </div>
    </section>
  )
}
