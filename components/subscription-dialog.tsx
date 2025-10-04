"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const areas = [
  { value: "kano_municipal", label: "Kano Municipal" },
  { value: "lagos_island", label: "Lagos Island" },
  { value: "kaduna_north", label: "Kaduna North" },
  { value: "port_harcourt", label: "Port Harcourt" },
  { value: "ibadan_north", label: "Ibadan North" },
]

export function SubscriptionDialog() {
  const [open, setOpen] = useState(false)
  const [phone, setPhone] = useState("")
  const [area, setArea] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Mock API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("[v0] Subscription created:", { phone, area })
    setLoading(false)
    setOpen(false)
    setPhone("")
    setArea("")
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#ffb86b] hover:bg-[#ffb86b]/90 text-[#0b1b3f] font-semibold">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Subscribe to SMS Alerts
        </Button>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Subscribe to SMS Alerts</DialogTitle>
            <DialogDescription>
              Receive real-time notifications about disease outbreaks, stockouts, and health alerts in your area.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+234 800 000 0000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <p className="text-xs text-muted-foreground">Include country code</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="area">Area (LGA)</Label>
              <Select value={area} onValueChange={setArea} required>
                <SelectTrigger id="area">
                  <SelectValue placeholder="Select area" />
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
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading} className="bg-[#09a88e] hover:bg-[#09a88e]/90 text-white">
              {loading ? "Subscribing..." : "Subscribe"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
