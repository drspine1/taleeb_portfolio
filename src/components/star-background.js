"use client"
import { useEffect, useState } from "react"

export const StarBackground = () => {
  const [stars, setStars] = useState([])
  const [meteors, setMeteors] = useState([])

  useEffect(() => {
    generateStars()
    generateMeteors()
    setInterval(generateMeteors, 10000) // Generate meteors every 10 seconds 

    const handleReize = () => {
      generateStars()
    }
    window.addEventListener("resize", handleReize)
    return () => window.removeEventListener("resize", handleReize)

  }, [])

  const generateStars = () => {
    const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000)
    const newStars = []
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 1,
        twinkleDuration: Math.random() * 5 + 1,
        opacity: Math.random() * 0.2 + 0.1,
      })
    }
    setStars(newStars)
  }

  const generateMeteors = () => {
    const numberOfMeteors = 5
    const newMeteors = []
    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 3 + 2,
        fallDuration: Math.random() * 3 + 1,
        opacity: Math.random() * 0.4 + 0.3,
      })
    }
    setMeteors(newMeteors)
    setTimeout(() => setMeteors([]), 5000) // Clear meteors after animation
  }

  return (
    <section className="fixed inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-shooting"
          style={{
            position: "absolute",
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            borderRadius: "50%",
            backgroundColor: "white",
            animationDuration: `${star.twinkleDuration}s`,
            opacity: star.opacity,
          }}
        />
      ))}

        {meteors .map((meteors) => (
        <div
          key={meteors.id}
          className="star animate-shooting"
          style={{
            position: "absolute",
            top: `${meteors.top}%`,
            left: `${meteors.left}%`,
            width: `${meteors.size}px`,
            height: `${meteors.size}px`,
            animationDuration: `${meteors.twinkleDuration}s`,
            opacity: meteors.opacity,
          }}
        />
      ))}
    </section>
  )
}
