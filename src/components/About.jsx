import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#0B0F14] py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div className="justify-self-center">
            <div className="relative h-56 w-56 overflow-hidden rounded-3xl border border-teal-400/20 bg-gradient-to-br from-cyan-500/10 to-teal-500/5 p-1 backdrop-blur">
              <div className="h-full w-full rounded-2xl bg-[url('https://avatars.githubusercontent.com/u/9919?s=200&v=4')] bg-cover bg-center" />
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">About</h2>
            <div className="mt-3 h-1 w-16 bg-gradient-to-r from-teal-400 to-cyan-500" />
            <p className="mt-6 text-teal-100/80">
              Helping startups scale with automation and performance-driven design. I build reliable infrastructure, ship fast web apps, and optimize eCommerce storefronts end-to-end.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Card title="DevOps" items={["AWS", "Docker", "Bash", "Nginx"]} />
              <Card title="Web" items={["PHP", "Next.js", "Supabase"]} />
              <Card title="eCommerce" items={["Shopify", "Liquid", "API Integrations"]} />
              <Metric />
            </div>

            <a href="#projects" className="mt-8 inline-block rounded-full border border-teal-400/30 bg-white/5 px-5 py-2.5 text-sm font-semibold text-teal-100 backdrop-blur-md hover:border-teal-300/60">See My Projects ↓</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Card({ title, items }) {
  return (
    <div className="rounded-2xl border border-teal-400/20 bg-white/5 p-5 text-teal-100 backdrop-blur">
      <div className="text-sm font-semibold text-white">{title}</div>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((it) => (
          <span key={it} className="rounded-full border border-teal-400/20 bg-[#11161C] px-3 py-1 text-xs text-teal-100/90">{it}</span>
        ))}
      </div>
    </div>
  )
}

function Metric() {
  return (
    <div className="rounded-2xl border border-teal-400/20 bg-gradient-to-br from-cyan-500/10 to-teal-500/5 p-5 text-teal-100 backdrop-blur">
      <div className="text-xs uppercase tracking-wide text-teal-200/80">Micro-metric</div>
      <div className="mt-1 text-2xl font-extrabold text-white">Reduced bandwidth by 60%</div>
      <div className="text-xs text-teal-300/80">with RemoveQ</div>
    </div>
  )
}
