"use client"
import '../styles/globals.css';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from "next-themes";
import Footer from '@/components/Footer';
import { AnalyticsWrapper } from '@/components/analytics';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className="dark:bg-stone-900">
        <ThemeProvider enableSystem={true} attribute="class">
        <Navbar />
        {children}
        <AnalyticsWrapper />
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
