"use client"

import { useState, useEffect } from "react"
import type { SummaryStats } from "@/lib/types"

// Mock data hook - replace with actual API calls
export function useDashboardData() {
  const [data, setData] = useState<SummaryStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Simulate API call
    const fetchData = async () => {
      try {
        setLoading(true)
        // Mock delay
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Mock data
        const mockData: SummaryStats = {
          active_alerts: 7,
          high_risk_lgas: [
            { name: "Kano Municipal", indicator: "malaria_cases", risk_score: 87 },
            { name: "Lagos Island", indicator: "cholera_cases", risk_score: 76 },
            { name: "Kaduna North", indicator: "malaria_cases", risk_score: 72 },
            { name: "Port Harcourt", indicator: "typhoid_cases", risk_score: 68 },
            { name: "Ibadan North", indicator: "malaria_cases", risk_score: 64 },
          ],
          critical_drugs: [
            { name: "Artemether-Lumefantrine", stock_level: 15, facilities_affected: 23 },
            { name: "ORS (Oral Rehydration Salts)", stock_level: 28, facilities_affected: 18 },
            { name: "Amoxicillin", stock_level: 35, facilities_affected: 12 },
          ],
        }

        setData(mockData)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch dashboard data")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { data, loading, error }
}
