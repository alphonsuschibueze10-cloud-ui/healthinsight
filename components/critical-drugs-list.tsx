import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface CriticalDrug {
  name: string
  stock_level: number
  facilities_affected: number
}

interface CriticalDrugsListProps {
  drugs: CriticalDrug[]
}

export function CriticalDrugsList({ drugs }: CriticalDrugsListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Critical Drug Stockouts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {drugs.length === 0 ? (
            <p className="text-sm text-muted-foreground">No critical stockouts detected</p>
          ) : (
            drugs.map((drug, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex-1">
                  <p className="font-medium text-foreground">{drug.name}</p>
                  <p className="text-sm text-muted-foreground">{drug.facilities_affected} facilities affected</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div
                      className={`text-sm font-semibold ${
                        drug.stock_level < 20
                          ? "text-red-600 dark:text-red-400"
                          : drug.stock_level < 40
                            ? "text-orange-600 dark:text-orange-400"
                            : "text-yellow-600 dark:text-yellow-400"
                      }`}
                    >
                      {drug.stock_level}%
                    </div>
                    <div className="text-xs text-muted-foreground">Stock</div>
                  </div>
                  <Button variant="ghost" size="sm">
                    Details
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
