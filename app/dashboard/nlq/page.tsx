"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import type { NLQResponse } from "@/lib/types"

const suggestedQueries = [
  "Where will malaria cases rise next month?",
  "Which areas have the highest cholera risk?",
  "What drugs are running low in Kano?",
  "Show me typhoid trends in Lagos",
  "When will we see the next disease surge?",
  "Which facilities need urgent restocking?",
]

export default function NLQPage() {
  const [query, setQuery] = useState("")
  const [response, setResponse] = useState<NLQResponse | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    setLoading(true)

    // Mock API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Mock response
    const mockResponse: NLQResponse = {
      answer:
        "Based on current trends and forecast models, malaria cases are predicted to rise significantly in Kano Municipal (87% increase), Kaduna North (72% increase), and Ibadan North (64% increase) over the next 4 weeks. The peak is expected in week 6, with Kano Municipal reaching approximately 145 cases.",
      evidence: [
        {
          type: "forecast",
          content: "Kano Municipal: 87% predicted increase, peak at 145 cases in week 6",
        },
        {
          type: "forecast",
          content: "Kaduna North: 72% predicted increase over next 2 weeks",
        },
        {
          type: "weather",
          content: "Recent rainfall above average, conducive to mosquito breeding",
        },
        {
          type: "historical",
          content: "Seasonal patterns indicate peak period approaching",
        },
      ],
    }

    setResponse(mockResponse)
    setLoading(false)
  }

  const handleSuggestedQuery = (suggested: string) => {
    setQuery(suggested)
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Natural Language Query</h1>
        <p className="text-muted-foreground">Ask questions about your healthcare data in plain language</p>
      </div>

      {/* Query Input */}
      <Card>
        <CardHeader>
          <CardTitle>Ask a Question</CardTitle>
          <CardDescription>Get instant insights from your healthcare data using natural language</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-2">
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g., Where will malaria cases rise next month?"
                className="flex-1"
                disabled={loading}
              />
              <Button
                type="submit"
                disabled={loading || !query.trim()}
                className="bg-[#09a88e] hover:bg-[#09a88e]/90 text-white"
              >
                {loading ? (
                  <>
                    <svg className="w-4 h-4 mr-2 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Analyzing...
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    Ask
                  </>
                )}
              </Button>
            </div>
          </form>

          {/* Suggested Queries */}
          <div className="mt-4">
            <p className="text-sm text-muted-foreground mb-2">Suggested questions:</p>
            <div className="flex flex-wrap gap-2">
              {suggestedQueries.map((suggested, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleSuggestedQuery(suggested)}
                  className="text-xs"
                  disabled={loading}
                >
                  {suggested}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Response */}
      {response && (
        <Card>
          <CardHeader>
            <CardTitle>Answer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-lg bg-muted/50">
              <p className="text-foreground leading-relaxed">{response.answer}</p>
            </div>

            {response.evidence && response.evidence.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3">Supporting Evidence</h3>
                <div className="space-y-2">
                  {response.evidence.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-card border border-border">
                      <Badge variant="outline" className="mt-0.5 text-xs">
                        {item.type}
                      </Badge>
                      <p className="text-sm text-muted-foreground flex-1">{item.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-2 pt-2">
              <Button variant="outline" size="sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                View in Forecasts
              </Button>
              <Button variant="outline" size="sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                View on Map
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Info Card */}
      <Card className="bg-[#09a88e]/5 border-[#09a88e]/20">
        <CardHeader>
          <CardTitle className="text-base">How it works</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>
            The Natural Language Query system uses AI to understand your questions and search through forecasts, alerts,
            and historical data to provide accurate answers.
          </p>
          <p>You can ask about:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Disease trends and predictions</li>
            <li>Drug stockout risks and inventory levels</li>
            <li>Geographic areas with high health risks</li>
            <li>Historical patterns and comparisons</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
