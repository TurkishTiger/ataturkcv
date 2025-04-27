import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { VisitorCounter } from "@/components/visitor-counter"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>{/* Your existing head content */}</head>
      <body>
        {/* Your existing content */}
        <Suspense>{children}</Suspense>

        {/* Add the visitor counter at the bottom */}
        <footer>
          <VisitorCounter />
        </footer>

        {/* Add Vercel Analytics for better tracking */}
        <Analytics />
      </body>
    </html>
  )
}
