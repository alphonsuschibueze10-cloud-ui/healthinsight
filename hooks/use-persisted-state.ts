"use client"

import { useState, useEffect } from "react"

export function usePersistedState<T>(key: string, initial: T) {
  const [state, setState] = useState<T>(initial)
  const [isHydrated, setIsHydrated] = useState(false)

  // Always use initial value on server and first client render
  useEffect(() => {
    setIsHydrated(true)
    
    try {
      const raw = localStorage.getItem(key)
      if (raw) {
        const parsed = JSON.parse(raw) as T
        setState(parsed)
      }
    } catch {
      // Keep initial value if parsing fails
    }
  }, [key])

  useEffect(() => {
    if (!isHydrated) return
    
    try {
      localStorage.setItem(key, JSON.stringify(state))
    } catch (error) {
      console.error("[v0] Failed to persist state:", error)
    }
  }, [key, state, isHydrated])

  return [state, setState] as const
}
