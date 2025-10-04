"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Alert } from "@/lib/types"
import { cn } from "@/lib/utils"

interface AlertCardProps {
  alert: Alert
  onAcknowledge?: (id: string) => void
}

export function AlertCard({ alert, onAcknowledge }: AlertCardProps) {
  const [expanded, setExpanded] = useState(false)

  const severityColors = {
    low: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
    medium: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20",
    high: "bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20",
    critical: "bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20",
  }

  const typeIcons = {
    stockout: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
        />
      </svg>
    ),
    surge: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    outbreak: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    ),
  }

  return (
    <Card className={cn("transition-all", alert.acknowledged && "opacity-60")}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <div className={cn("p-2 rounded-lg", severityColors[alert.severity])}>{typeIcons[alert.type]}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-foreground">{alert.title}</h3>
                <Badge variant="outline" className={cn("text-xs", severityColors[alert.severity])}>
                  {alert.severity}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{alert.description}</p>
              <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                <span>{alert.area}</span>
                <span>•</span>
                <span>{new Date(alert.created_at).toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          <Button variant="ghost" size="sm" onClick={() => setExpanded(!expanded)}>
            <svg
              className={cn("w-4 h-4 transition-transform", expanded && "rotate-180")}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Button>
        </div>
      </CardHeader>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <CardContent className="pt-0 space-y-4">
              {alert.evidence && alert.evidence.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Supporting Evidence</h4>
                  <ul className="space-y-1">
                    {alert.evidence.map((item, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-[#09a88e] mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {alert.recommended_action && (
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Recommended Action</h4>
                  <p className="text-sm text-muted-foreground">{alert.recommended_action}</p>
                </div>
              )}

              <div className="flex gap-2 pt-2">
                {!alert.acknowledged && onAcknowledge && (
                  <Button
                    size="sm"
                    onClick={() => onAcknowledge(alert.id)}
                    className="bg-[#09a88e] hover:bg-[#09a88e]/90 text-white"
                  >
                    Acknowledge
                  </Button>
                )}
                <Button size="sm" variant="outline">
                  View Details
                </Button>
              </div>
            </CardContent>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  )
}
