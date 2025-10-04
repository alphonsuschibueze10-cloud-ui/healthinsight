"use client"

import { AlertCard } from "@/components/alert-card"
import { SubscriptionDialog } from "@/components/subscription-dialog"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAlertsData } from "@/hooks/use-alerts-data"

export default function AlertsPage() {
  const { alerts, loading, error, acknowledgeAlert } = useAlertsData()

  const activeAlerts = alerts.filter((a) => !a.acknowledged)
  const acknowledgedAlerts = alerts.filter((a) => a.acknowledged)

  if (loading) {
    return (
      <div className="p-6">
        <div className="flex items-center justify-center h-64">
          <div className="text-muted-foreground">Loading alerts...</div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="flex items-center justify-center h-64">
          <div className="text-destructive">Error: {error}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Alerts</h1>
          <p className="text-muted-foreground">Manage stockout, surge, and outbreak alerts</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Evaluate Now
          </Button>
          <SubscriptionDialog />
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="p-4 rounded-lg border border-border bg-card">
          <div className="text-2xl font-bold text-foreground">{activeAlerts.length}</div>
          <div className="text-sm text-muted-foreground">Active Alerts</div>
        </div>
        <div className="p-4 rounded-lg border border-border bg-card">
          <div className="text-2xl font-bold text-red-600 dark:text-red-400">
            {activeAlerts.filter((a) => a.severity === "critical").length}
          </div>
          <div className="text-sm text-muted-foreground">Critical</div>
        </div>
        <div className="p-4 rounded-lg border border-border bg-card">
          <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
            {activeAlerts.filter((a) => a.severity === "high").length}
          </div>
          <div className="text-sm text-muted-foreground">High Priority</div>
        </div>
        <div className="p-4 rounded-lg border border-border bg-card">
          <div className="text-2xl font-bold text-foreground">{acknowledgedAlerts.length}</div>
          <div className="text-sm text-muted-foreground">Acknowledged</div>
        </div>
      </div>

      {/* Alerts List */}
      <Tabs defaultValue="active" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active">Active ({activeAlerts.length})</TabsTrigger>
          <TabsTrigger value="acknowledged">Acknowledged ({acknowledgedAlerts.length})</TabsTrigger>
          <TabsTrigger value="all">All ({alerts.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          {activeAlerts.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">No active alerts</div>
          ) : (
            activeAlerts.map((alert) => <AlertCard key={alert.id} alert={alert} onAcknowledge={acknowledgeAlert} />)
          )}
        </TabsContent>

        <TabsContent value="acknowledged" className="space-y-4">
          {acknowledgedAlerts.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">No acknowledged alerts</div>
          ) : (
            acknowledgedAlerts.map((alert) => <AlertCard key={alert.id} alert={alert} />)
          )}
        </TabsContent>

        <TabsContent value="all" className="space-y-4">
          {alerts.map((alert) => (
            <AlertCard key={alert.id} alert={alert} onAcknowledge={acknowledgeAlert} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
