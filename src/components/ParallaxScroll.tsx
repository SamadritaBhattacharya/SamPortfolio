"use client"

import type React from "react"

import { useRef } from "react"
import { useScroll, useTransform, motion } from "framer-motion"

interface ParallaxProps {
  children: React.ReactNode
  baseVelocity?: number
  direction?: "up" | "down"
  className?: string
}

export default function ParallaxScroll({
  children,
  //baseVelocity = 5,
  direction = "up",
  className = "",
}: ParallaxProps) {
  //const baseX = direction === "up" ? -baseVelocity : baseVelocity
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, direction === "up" ? -100 : 100])

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}
