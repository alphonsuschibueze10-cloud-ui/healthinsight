import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div
        className="relative flex-1 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('https://media.istockphoto.com/id/592647720/photo/vigilantly-monitoring-his-patients-vitals.jpg?s=612x612&w=0&k=20&c=cKQ6XPw8X98Z-9XQDR0DqnpTdvFsiHiXzYptGbKdD40=')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1b3f]/80 to-[#0b1b3f]/60" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">HealthSight</h1>
          <p className="text-xl md:text-2xl mb-4 text-balance text-white/90">
            Predictive Intelligence for Primary Healthcare
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-pretty text-white/80">
            Forecast disease outbreaks, predict drug stockouts, and receive intelligent alerts to strengthen healthcare
            delivery across communities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#ffb86b] hover:bg-[#ffb86b]/90 text-[#0b1b3f] font-semibold">
              <Link href="/login">Get Started</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 bg-transparent"
            >
              <Link href="/dashboard">View Dashboard</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-background py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Empowering Healthcare Decisions</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#09a88e]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#09a88e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Disease Forecasting</h3>
              <p className="text-muted-foreground text-pretty">
                Predict malaria, cholera, and other disease trends up to 8 weeks ahead with AI-powered models.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#ffb86b]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#ffb86b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Smart Alerts</h3>
              <p className="text-muted-foreground text-pretty">
                Receive timely notifications about stockout risks, disease surges, and outbreak warnings via SMS.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#0b1b3f]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#0b1b3f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Natural Language Queries</h3>
              <p className="text-muted-foreground text-pretty">
                Ask questions in plain language and get instant insights from your healthcare data.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0b1b3f] text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/70">HealthSight - Predictive PHC Intelligence Platform</p>
        </div>
      </footer>
    </div>
  )
}
