"use client"

import { useState, useEffect } from "react"
import type { Forecast } from "@/lib/types"

export function useForecastData(indicator: string, area?: string) {
  const [data, setData] = useState<Forecast[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        await new Promise((resolve) => setTimeout(resolve, 800))

        // Generate mock forecast data
        const today = new Date()
        const mockData: Forecast[] = []

        // Historical data (past 8 weeks)
        for (let i = -56; i <= 0; i += 7) {
          const date = new Date(today)
          date.setDate(date.getDate() + i)

          const baseValue = 100 + Math.sin(i / 10) * 30
          const noise = Math.random() * 20 - 10

          mockData.push({
            ds: date.toISOString().split("T")[0],
            y: Math.max(0, baseValue + noise),
            yhat: baseValue,
            yhat_lower: baseValue - 15,
            yhat_upper: baseValue + 15,
          })
        }

        // Forecast data (next 8 weeks)
        for (let i = 7; i <= 56; i += 7) {
          const date = new Date(today)
          date.setDate(date.getDate() + i)

          const baseValue = 100 + Math.sin(i / 10) * 30 + i * 0.5
          const uncertainty = 10 + i * 0.3

          mockData.push({
            ds: date.toISOString().split("T")[0],
            yhat: baseValue,
            yhat_lower: baseValue - uncertainty,
            yhat_upper: baseValue + uncertainty,
          })
        }

        setData(mockData)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch forecast data")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [indicator, area])

  return { data, loading, error }
}
