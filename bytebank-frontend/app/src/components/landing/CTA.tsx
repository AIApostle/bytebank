export default function CTA() {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-slate-950 to-blue-900/20 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-slate-800 bg-slate-950 p-12 sm:p-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Scale Your Agents?
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Start building on testnet today. Move to production when you're ready. It takes less than 5 minutes to get your first agent up and running.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-lg transition-colors">
              Create Free Account
            </button>
            <button className="border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white font-semibold px-8 py-4 rounded-lg transition-colors">
              Schedule Demo
            </button>
          </div>

          <p className="text-sm text-slate-500 mt-8">
            No credit card required. Start on testnet for free.
          </p>
        </div>
      </div>
    </section>
  )
}
