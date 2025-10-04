import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import type { Forecast } from "@/lib/types"

interface ForecastTableProps {
  data: Forecast[]
}

export function ForecastTable({ data }: ForecastTableProps) {
  return (
    <div className="rounded-lg border border-border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Observed</TableHead>
            <TableHead className="text-right">Forecast</TableHead>
            <TableHead className="text-right">Lower Bound</TableHead>
            <TableHead className="text-right">Upper Bound</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">
                {new Date(row.ds).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
              </TableCell>
              <TableCell className="text-right">{row.y !== undefined ? row.y.toFixed(0) : "-"}</TableCell>
              <TableCell className="text-right font-medium">{row.yhat.toFixed(0)}</TableCell>
              <TableCell className="text-right text-muted-foreground">{row.yhat_lower.toFixed(0)}</TableCell>
              <TableCell className="text-right text-muted-foreground">{row.yhat_upper.toFixed(0)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
