import Link from "next/link"
import { Bluetooth, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Zap className="h-6 w-6 text-blue-600" />
          <span className="font-bold text-xl">EV Motor AR</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link href="/" className="text-sm font-medium">
            Home
          </Link>
          <Link href="/diagnose" className="text-sm font-medium">
            Diagnose
          </Link>
          <Link href="/repair-guide" className="text-sm font-medium">
            Repair Guide
          </Link>
          <Link href="/dashboard" className="text-sm font-medium">
            Dashboard
          </Link>
          <Link href="/about" className="text-sm font-medium">
            About
          </Link>
          <Button variant="outline" size="sm" className="hidden md:flex items-center gap-1">
            <Bluetooth className="h-4 w-4" />
            Connect to EV
          </Button>
          <ModeToggle />
          <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
        </nav>
      </div>
    </header>
  )
}
