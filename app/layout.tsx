import type { Metadata } from "next"
import "./globals.css"

/* eslint-disable @next/next/no-page-custom-font */

export const metadata: Metadata = {
  title: "Hans On Books | Bookkeeping & QuickBooks Online Services",
  description: "Hans On Books provides professional bookkeeping, QuickBooks Online support, financial reporting, and accounting solutions for growing businesses.",
  icons: { icon: "/assets/images/logo/favicon.ico/Icon Only - No Background.png" },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><head><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /><link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" /><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" /></head><body>{children}</body></html>
}
