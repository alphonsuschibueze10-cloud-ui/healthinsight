"use client"

import { useState } from "react"
import { ForecastChart } from "@/components/forecast-chart"
import { ForecastTable } from "@/components/forecast-table"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useForecastData } from "@/hooks/use-forecast-data"

const indicators = [
  { value: "malaria_cases", label: "Malaria Cases" },
  { value: "cholera_cases", label: "Cholera Cases" },
  { value: "typhoid_cases", label: "Typhoid Cases" },
  { value: "measles_cases", label: "Measles Cases" },
]

const areas = [
  { value: "kano_municipal", label: "Kano Municipal" },
  { value: "lagos_island", label: "Lagos Island" },
  { value: "kaduna_north", label: "Kaduna North" },
  { value: "port_harcourt", label: "Port Harcourt" },
  { value: "ibadan_north", label: "Ibadan North" },
]

export default function ForecastsPage() {
  const [indicator, setIndicator] = useState("malaria_cases")
  const [area, setArea] = useState("kano_municipal")
  const [showTable, setShowTable] = useState(false)

  const { data, loading, error } = useForecastData(indicator, area)

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Disease Forecasts</h1>
        <p className="text-muted-foreground">View predictions and trends for disease indicators</p>
      </div>

      {/* Controls */}
      <Card>
        <CardHeader>
          <CardTitle>Forecast Parameters</CardTitle>
          <CardDescription>Select indicator and area to view predictions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="indicator">Indicator</Label>
              <Select value={indicator} onValueChange={setIndicator}>
                <SelectTrigger id="indicator">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {indicators.map((ind) => (
                    <SelectItem key={ind.value} value={ind.value}>
                      {ind.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="area">Area (LGA)</Label>
              <Select value={area} onValueChange={setArea}>
                <SelectTrigger id="area">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {areas.map((a) => (
                    <SelectItem key={a.value} value={a.value}>
                      {a.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="horizon">Forecast Horizon</Label>
              <Select defaultValue="56">
                <SelectTrigger id="horizon">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="14">2 Weeks</SelectItem>
                  <SelectItem value="28">4 Weeks</SelectItem>
                  <SelectItem value="56">8 Weeks</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex gap-2 mt-4">
            <Button className="bg-[#09a88e] hover:bg-[#09a88e]/90 text-white">Generate New Forecast</Button>
            <Button variant="outline">Export Data</Button>
          </div>
        </CardContent>
      </Card>

      {/* Chart */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>
                {indicators.find((i) => i.value === indicator)?.label} - {areas.find((a) => a.value === area)?.label}
              </CardTitle>
              <CardDescription>Historical data and 8-week forecast with uncertainty bands</CardDescription>
            </div>
            <Button variant="outline" size="sm" onClick={() => setShowTable(!showTable)}>
              {showTable ? "Show Chart" : "Show Table"}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center h-96">
              <div className="text-muted-foreground">Loading forecast data...</div>
            </div>
          ) : error ? (
            <div className="flex items-center justify-center h-96">
              <div className="text-destructive">Error: {error}</div>
            </div>
          ) : showTable ? (
            <ForecastTable data={data} />
          ) : (
            <ForecastChart data={data} indicator={indicator} />
          )}
        </CardContent>
      </Card>

      {/* Insights */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Predicted Peak</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">Week 6</div>
            <p className="text-xs text-muted-foreground mt-1">Expected: 145 cases</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Trend Direction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">↑ Increasing</div>
            <p className="text-xs text-muted-foreground mt-1">+23% over next 4 weeks</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Confidence Level</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">87%</div>
            <p className="text-xs text-muted-foreground mt-1">Model accuracy score</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
