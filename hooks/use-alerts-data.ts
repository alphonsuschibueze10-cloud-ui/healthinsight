"use client"

import { useState, useEffect } from "react"
import type { Alert } from "@/lib/types"

export function useAlertsData() {
  const [alerts, setAlerts] = useState<Alert[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        await new Promise((resolve) => setTimeout(resolve, 800))

        const mockAlerts: Alert[] = [
          {
            id: "1",
            type: "outbreak",
            severity: "critical",
            title: "Cholera Outbreak Warning",
            description: "Significant increase in cholera cases detected in the past 7 days",
            area: "Lagos Island",
            indicator: "cholera_cases",
            created_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
            acknowledged: false,
            evidence: [
              "45 new cases reported in the last week (300% increase)",
              "Water quality tests show contamination in 3 major sources",
              "Hospital admissions up 250% compared to previous week",
            ],
            recommended_action:
              "Immediate water source testing and treatment. Deploy ORS supplies to affected facilities. Initiate community awareness campaign.",
          },
          {
            id: "2",
            type: "stockout",
            severity: "high",
            title: "Critical Antimalarial Shortage",
            description: "Artemether-Lumefantrine stock critically low across multiple facilities",
            area: "Kano Municipal",
            indicator: "malaria_cases",
            created_at: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
            acknowledged: false,
            evidence: [
              "23 facilities reporting less than 2 weeks supply",
              "Current stock level at 15% of recommended minimum",
              "Malaria cases trending upward (predicted 87% increase)",
            ],
            recommended_action:
              "Emergency procurement and redistribution from state reserves. Contact alternative suppliers. Consider temporary substitution protocols.",
          },
          {
            id: "3",
            type: "surge",
            severity: "high",
            title: "Malaria Case Surge Predicted",
            description: "Model predicts 72% increase in malaria cases over next 2 weeks",
            area: "Kaduna North",
            created_at: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
            acknowledged: false,
            evidence: [
              "Seasonal patterns indicate peak period approaching",
              "Recent rainfall above average (conducive to mosquito breeding)",
              "Current case trajectory 45% above historical average",
            ],
            recommended_action:
              "Increase antimalarial stock levels. Prepare additional bed capacity. Intensify vector control measures in high-risk areas.",
          },
          {
            id: "4",
            type: "stockout",
            severity: "medium",
            title: "ORS Supply Running Low",
            description: "Oral Rehydration Salts inventory below recommended threshold",
            area: "Port Harcourt",
            created_at: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
            acknowledged: true,
            evidence: [
              "18 facilities at 28% stock level",
              "Cholera season approaching",
              "Last resupply was 6 weeks ago",
            ],
            recommended_action: "Schedule resupply within 2 weeks. Monitor consumption rates closely.",
          },
          {
            id: "5",
            type: "surge",
            severity: "medium",
            title: "Typhoid Cases Increasing",
            description: "Gradual increase in typhoid fever cases observed",
            area: "Ibadan North",
            created_at: new Date(Date.now() - 36 * 60 * 60 * 1000).toISOString(),
            acknowledged: true,
            evidence: ["15% increase over past 3 weeks", "Sanitation issues reported in 2 communities"],
            recommended_action: "Monitor trends. Prepare for potential intervention if trend continues.",
          },
        ]

        setAlerts(mockAlerts)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch alerts")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const acknowledgeAlert = (id: string) => {
    setAlerts((prev) => prev.map((alert) => (alert.id === id ? { ...alert, acknowledged: true } : alert)))
  }

  return { alerts, loading, error, acknowledgeAlert }
}
