import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface HighRiskLGA {
  name: string
  indicator: string
  risk_score: number
}

interface HighRiskLGAListProps {
  lgas: HighRiskLGA[]
}

export function HighRiskLGAList({ lgas }: HighRiskLGAListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">High-Risk Areas (Next 2 Weeks)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {lgas.length === 0 ? (
            <p className="text-sm text-muted-foreground">No high-risk areas identified</p>
          ) : (
            lgas.map((lga, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex-1">
                  <p className="font-medium text-foreground">{lga.name}</p>
                  <p className="text-sm text-muted-foreground capitalize">{lga.indicator.replace("_", " ")}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div
                      className={`text-sm font-semibold ${
                        lga.risk_score >= 80
                          ? "text-red-600 dark:text-red-400"
                          : lga.risk_score >= 60
                            ? "text-orange-600 dark:text-orange-400"
                            : "text-yellow-600 dark:text-yellow-400"
                      }`}
                    >
                      {lga.risk_score}%
                    </div>
                    <div className="text-xs text-muted-foreground">Risk</div>
                  </div>
                  <Button asChild variant="ghost" size="sm">
                    <Link href={`/dashboard/forecasts?indicator=${lga.indicator}&area=${lga.name}`}>View</Link>
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  )
}
