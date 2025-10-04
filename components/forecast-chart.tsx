"use client"

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import type { Forecast } from "@/lib/types"

interface ForecastChartProps {
  data: Forecast[]
  indicator: string
}

export function ForecastChart({ data, indicator }: ForecastChartProps) {
  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorObserved" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0b1b3f" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#0b1b3f" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorForecast" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ffb86b" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ffb86b" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="colorUncertainty" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#09a88e" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#09a88e" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis
            dataKey="ds"
            className="text-xs"
            tick={{ fill: "hsl(var(--muted-foreground))" }}
            tickFormatter={(value) => {
              const date = new Date(value)
              return `${date.getMonth() + 1}/${date.getDate()}`
            }}
          />
          <YAxis className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "var(--radius)",
            }}
            labelStyle={{ color: "hsl(var(--foreground))" }}
          />
          <Legend />

          {/* Uncertainty band */}
          <Area
            type="monotone"
            dataKey="yhat_upper"
            stroke="none"
            fill="url(#colorUncertainty)"
            name="Upper Bound"
            strokeWidth={0}
          />
          <Area
            type="monotone"
            dataKey="yhat_lower"
            stroke="none"
            fill="url(#colorUncertainty)"
            name="Lower Bound"
            strokeWidth={0}
          />

          {/* Observed data */}
          <Area
            type="monotone"
            dataKey="y"
            stroke="#0b1b3f"
            strokeWidth={2}
            fill="url(#colorObserved)"
            name="Observed"
            connectNulls={false}
          />

          {/* Forecast */}
          <Area
            type="monotone"
            dataKey="yhat"
            stroke="#ffb86b"
            strokeWidth={2}
            fill="url(#colorForecast)"
            name="Forecast"
            strokeDasharray="5 5"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
