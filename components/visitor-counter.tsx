"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Function to get visitor count from localStorage or initialize it
    const getVisitorCount = () => {
      // Check if we're in the browser
      if (typeof window !== "undefined") {
        // Get the current count from localStorage
        const storedCount = localStorage.getItem("visitorCount")

        if (storedCount) {
          return Number.parseInt(storedCount, 10)
        } else {
          // Initialize with 1 for the first visitor
          return 1
        }
      }
      return 0
    }

    // Function to increment and save the count
    const incrementVisitorCount = () => {
      const currentCount = getVisitorCount()
      const newCount = currentCount + 1

      // Save to localStorage
      localStorage.setItem("visitorCount", newCount.toString())
      setCount(newCount)
      setLoading(false)
    }

    // Check if this is a new session
    const lastVisit = sessionStorage.getItem("lastVisit")
    const now = new Date().toDateString()

    if (lastVisit !== now) {
      // This is a new session, increment the counter
      sessionStorage.setItem("lastVisit", now)
      incrementVisitorCount()
    } else {
      // Just display the current count without incrementing
      setCount(getVisitorCount())
      setLoading(false)
    }
  }, [])

  return (
    <div className="flex justify-center items-center py-4">
      <Card className="px-6 py-3 bg-slate-100 shadow-sm">
        <div className="text-center">
          <p className="text-sm text-gray-600">Ziyaretçi Sayısı:</p>
          <p className="text-xl font-bold">{loading ? "..." : count}</p>
        </div>
      </Card>
    </div>
  )
}
