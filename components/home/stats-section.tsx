"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: 10, suffix: "+", label: "Projets realises" },
  { value: 500, suffix: "+", label: "Etudiants formes" },
  { value: 3, suffix: " ans", label: "D'experience" },
  { value: 20, suffix: "+", label: "Formations disponibles" },
]

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [started, target, duration])

  return { count, ref }
}

export function StatsSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({ stat }: { stat: (typeof stats)[0] }) {
  const { count, ref } = useCountUp(stat.value)
  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <span className="font-mono text-4xl font-bold text-[#1A3C6E] md:text-5xl">
        {count}
        {stat.suffix}
      </span>
      <span className="mt-2 text-sm text-[#666666]">{stat.label}</span>
    </div>
  )
}
