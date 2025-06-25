import React, { useEffect, useRef, useState } from 'react'

export const ProgressBar = ({ label, value }) => {
  const [progress, setProgress] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    let observer
    let animationFrame
    if (ref.current) {
      observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            let start = 0
            const duration = 800 // ms
            const startTime = performance.now()
            const animate = (now) => {
              const elapsed = now - startTime
              const next = Math.min(Math.round((elapsed / duration) * value), value)
              setProgress(next)
              if (next < value) {
                animationFrame = requestAnimationFrame(animate)
              }
            }
            animationFrame = requestAnimationFrame(animate)
            observer.disconnect()
          }
        },
        { threshold: 0.6 }
      )
      observer.observe(ref.current)
    }
    return () => {
      if (observer) observer.disconnect()
      if (animationFrame) cancelAnimationFrame(animationFrame)
    }
  }, [value])

  return (
    <div className='flex gap-2 justify-center items-center' ref={ref}>
      <p className='w-1/3 poppins-light'>{label}</p>
      <progress className='w-2/3 transition-all duration-700' value={progress} min={0} max={100}></progress>
      <span className="text-white text-sm ml-2">{progress}%</span>
    </div>
  )
}