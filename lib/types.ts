export interface Forecast {
  ds: string // date string
  y?: number // observed value
  yhat: number // predicted value
  yhat_lower: number
  yhat_upper: number
}

export interface Alert {
  id: string
  type: "stockout" | "surge" | "outbreak"
  severity: "low" | "medium" | "high" | "critical"
  title: string
  description: string
  area: string
  indicator?: string
  created_at: string
  acknowledged: boolean
  evidence?: string[]
  recommended_action?: string
}

export interface Subscription {
  id: string
  phone: string
  area: string
  active: boolean
}

export interface NLQResponse {
  answer: string
  evidence: Array<{
    type: string
    content: string
  }>
  raw?: unknown
}

export interface SummaryStats {
  active_alerts: number
  high_risk_lgas: Array<{
    name: string
    indicator: string
    risk_score: number
  }>
  critical_drugs: Array<{
    name: string
    stock_level: number
    facilities_affected: number
  }>
}
