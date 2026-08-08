import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Hans On Books | Bookkeeping with clarity",
  description: "Reliable bookkeeping, reporting, and financial systems for growing businesses.",
  icons: { icon: "/assets/images/logo/favicon.ico/Icon Only - No Background.png" },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
