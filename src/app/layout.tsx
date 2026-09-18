import type { Metadata } from "next"
import "./globals.css"
import { ModalProvider } from "@/components/ModalProvider"
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider"

export const metadata: Metadata = {
  title: "Outerstep — You bring the product. We bring the buyers.",
  description:
    "We find companies already importing what you make, run the outreach, and hand you the ones who reply asking to buy.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full max-w-full overflow-x-clip bg-[#edf2f2] text-[#0a3a40] antialiased">
        <ModalProvider>
          <SmoothScrollProvider />
          {children}
        </ModalProvider>
      </body>
    </html>
  )
}

