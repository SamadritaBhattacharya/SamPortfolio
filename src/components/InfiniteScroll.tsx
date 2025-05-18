"use client"

import { useRef, useEffect } from "react"
import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion"

interface InfiniteScrollProps {
  items: { name: string; color: string }[]
  direction?: "left" | "right"
  speed?: number
}

export default function InfiniteScroll({ items, direction = "left", speed = 20 }: InfiniteScrollProps) {
  const baseX = useMotionValue(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const setWidth = () => {
      if (containerRef.current && itemsRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        const itemsWidth = itemsRef.current.offsetWidth

        // If items width is less than container, duplicate items
        if (itemsWidth < containerWidth * 2) {
          const newItems = [...items, ...items]
          itemsRef.current.innerHTML = newItems
            .map(
              (item) =>
                `<div class="inline-block px-4 py-2 m-2 rounded-full border ${item.color} text-white whitespace-nowrap">${item.name}</div>`,
            )
            .join("")
        }
      }
    }

    setWidth()
    window.addEventListener("resize", setWidth)
    return () => window.removeEventListener("resize", setWidth)
  }, [items])

  useAnimationFrame(() => {
    if (!containerRef.current || !itemsRef.current) return

    //const containerWidth = containerRef.current.offsetWidth
    const itemsWidth = itemsRef.current.offsetWidth

    // Calculate the movement based on direction and speed
    const moveBy = direction === "left" ? -speed : speed

    let newX = baseX.get() + moveBy

    // Reset position when items have moved completely out of view
    if (direction === "left" && newX < -itemsWidth) {
      newX = 0
    } else if (direction === "right" && newX > 0) {
      newX = -itemsWidth
    }

    baseX.set(newX)
  })

  const x = useTransform(baseX, (value) => `${value}px`)

  return (
    <div ref={containerRef} className="overflow-hidden my-4">
      <motion.div ref={itemsRef} style={{ x }} className="inline-flex">
        {items.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className={`inline-block px-4 py-2 m-2 rounded-full border ${item.color} text-white whitespace-nowrap`}
          >
            {item.name}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
