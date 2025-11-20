import { useState } from 'react'
import { motion } from 'framer-motion'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      message: form.get('message')
    }
    try {
      const res = await fetch(`${API_BASE}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        e.currentTarget.reset()
      } else {
        setStatus('error')
      }
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative w-full bg-[#0B0F14] py-24 sm:py-28">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl font-bold text-white sm:text-4xl">
          Let’s Build Something Scalable Together 🚀
        </motion.h2>
        <p className="mx-auto mt-3 max-w-xl text-teal-100/80">Tell me about your goals and constraints — I’ll propose a pragmatic, scalable plan.</p>

        <form onSubmit={handleSubmit} className="mx-auto mt-10 rounded-2xl border border-teal-400/20 bg-white/5 p-6 text-left backdrop-blur">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm text-teal-200">Name</label>
              <input name="name" required className="mt-1 w-full rounded-lg border border-teal-400/20 bg-[#11161C] px-3 py-2 text-sm text-teal-100 outline-none ring-0 placeholder:text-teal-300/40" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm text-teal-200">Email</label>
              <input name="email" type="email" required className="mt-1 w-full rounded-lg border border-teal-400/20 bg-[#11161C] px-3 py-2 text-sm text-teal-100 outline-none ring-0 placeholder:text-teal-300/40" placeholder="you@company.com" />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-sm text-teal-200">Message</label>
            <textarea name="message" required rows={5} className="mt-1 w-full rounded-lg border border-teal-400/20 bg-[#11161C] px-3 py-2 text-sm text-teal-100 outline-none ring-0 placeholder:text-teal-300/40" placeholder="What are we building?" />
          </div>
          <button disabled={status==='loading'} className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 px-6 py-3 text-sm font-semibold text-[#0B0F14] shadow-[0_0_30px_rgba(34,211,238,0.25)] transition hover:shadow-[0_0_40px_rgba(34,211,238,0.45)] disabled:opacity-70">
            {status==='loading' ? 'Sending…' : 'Send Message'}
          </button>
          {status==='success' && <div className="mt-3 text-sm text-teal-300">Message sent successfully.</div>}
          {status==='error' && <div className="mt-3 text-sm text-red-300">Something went wrong. Please try again.</div>}
        </form>

        <div className="mt-6 text-sm text-teal-300/80">
          Prefer email? <a className="underline decoration-dotted underline-offset-4 hover:text-teal-200" href="mailto:naveen@example.com">naveen@example.com</a>
        </div>
      </div>
    </section>
  )
}
