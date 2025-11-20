import { motion } from 'framer-motion'

export default function Testimonials() {
  const items = [
    {
      quote: 'Naveen optimized our Shopify store — 40% faster load times!',
      author: 'Ecommerce Founder',
    },
    {
      quote: 'Automated deployment pipeline reduced downtime to zero.',
      author: 'CTO, SaaS Startup',
    },
    {
      quote: 'Reliable, scalable, and fast. Exactly what we needed.',
      author: 'Ops Lead',
    },
  ]

  return (
    <section id="testimonials" className="relative w-full bg-[#0B0F14] py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center text-3xl font-bold text-white sm:text-4xl">
          Testimonials
        </motion.h2>
        <div className="mx-auto mt-3 h-1 w-28 bg-gradient-to-r from-teal-400 to-cyan-500" />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((t, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }} className="rounded-2xl border border-teal-400/20 bg-white/5 p-6 text-teal-100 backdrop-blur">
              <p className="text-sm">“{t.quote}”</p>
              <div className="mt-4 text-xs text-teal-300">— {t.author}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
