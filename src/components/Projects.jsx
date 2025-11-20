import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, BookText } from 'lucide-react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function Projects() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch(`${API_BASE}/api/projects`).then(r => r.json()).then(setProjects).catch(() => setProjects([]))
  }, [])

  return (
    <section id="projects" className="relative w-full bg-[#11161C] py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center text-3xl font-bold text-white sm:text-4xl">
          Projects
        </motion.h2>
        <div className="mx-auto mt-3 h-1 w-24 bg-gradient-to-r from-teal-400 to-cyan-500" />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.article key={idx} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }} className="group overflow-hidden rounded-2xl border border-teal-400/20 bg-white/5 backdrop-blur">
              <div className="aspect-video w-full bg-[#0B0F14]" style={{backgroundImage: p.thumbnail ? `url(${p.thumbnail})` : undefined, backgroundSize: 'cover', backgroundPosition: 'center'}} />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-teal-100/80">{p.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {(p.tech || []).map((t) => (
                    <span key={t} className="rounded-full border border-teal-400/20 bg-[#0B0F14] px-2.5 py-1 text-xs text-teal-100/90">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  {p.live_url && (
                    <a href={p.live_url} target="_blank" className="inline-flex items-center gap-1 rounded-full border border-teal-400/30 bg-white/5 px-3 py-1.5 text-xs font-semibold text-teal-100 hover:border-teal-300/60">
                      <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                    </a>
                  )}
                  {p.github_url && (
                    <a href={p.github_url} target="_blank" className="inline-flex items-center gap-1 rounded-full border border-teal-400/30 bg-white/5 px-3 py-1.5 text-xs font-semibold text-teal-100 hover:border-teal-300/60">
                      <Github className="h-3.5 w-3.5" /> GitHub
                    </a>
                  )}
                  {p.case_study_url && (
                    <a href={p.case_study_url} target="_blank" className="inline-flex items-center gap-1 rounded-full border border-teal-400/30 bg-white/5 px-3 py-1.5 text-xs font-semibold text-teal-100 hover:border-teal-300/60">
                      <BookText className="h-3.5 w-3.5" /> Case Study
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
