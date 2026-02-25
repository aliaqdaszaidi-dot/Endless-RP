"use client"

import { useState } from "react"
import {
  Menu,
  X,
  Bell,
  MessageSquare,
  Search,
  ChevronDown,
  Shield,
  User,
  LogIn,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", href: "#", active: true },
  {
    label: "Forums",
    href: "#forums",
    children: [
      { label: "General Discussion", href: "#" },
      { label: "Roleplay Scenarios", href: "#" },
      { label: "Character Workshop", href: "#" },
      { label: "Server Suggestions", href: "#" },
    ],
  },
  { label: "Members", href: "#members" },
  { label: "Leaderboard", href: "#" },
  { label: "Store", href: "#" },
  { label: "Support", href: "#" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-border/50 bg-background/95 px-4 py-2 text-xs backdrop-blur-md">
        <div className="flex items-center gap-4">
          <span className="text-muted-foreground">
            {"Welcome to Legendary Roleplay"}
          </span>
          <span className="hidden items-center gap-1 text-gold sm:flex">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-muted-foreground">
              {"1,247 Players Online"}
            </span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground">
            <LogIn className="h-3.5 w-3.5" />
            <span>Login</span>
          </button>
          <span className="text-border">|</span>
          <button className="flex items-center gap-1 text-gold transition-colors hover:text-gold/80">
            <User className="h-3.5 w-3.5" />
            <span>Register</span>
          </button>
        </div>
      </div>

      {/* Main nav */}
      <nav className="glass-strong">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 glow-gold-border">
              <Shield className="h-5 w-5 text-gold" />
            </div>
            <div>
              <h1 className="text-lg font-bold leading-none tracking-tight text-foreground">
                <span className="text-gold text-glow-gold">LEGENDARY</span>{" "}
                <span className="text-foreground">RP</span>
              </h1>
              <p className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                Community Forum
              </p>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() =>
                  link.children ? setOpenDropdown(link.label) : undefined
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    link.active
                      ? "bg-gold/10 text-gold"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  )}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown className="h-3.5 w-3.5 opacity-50" />
                  )}
                </a>
                {link.children && openDropdown === link.label && (
                  <div className="absolute left-0 top-full z-50 mt-1 min-w-48 animate-slide-up rounded-lg border border-border/50 glass-strong p-1 shadow-glass">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            <button className="hidden rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground sm:flex">
              <Search className="h-4.5 w-4.5" />
            </button>
            <button className="relative hidden rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground sm:flex">
              <Bell className="h-4.5 w-4.5" />
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-gold animate-glow-pulse" />
            </button>
            <button className="hidden rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground sm:flex">
              <MessageSquare className="h-4.5 w-4.5" />
            </button>

            {/* Mobile toggle */}
            <button
              className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-border/50 px-4 pb-4 lg:hidden">
            <div className="flex flex-col gap-1 pt-2">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <a
                    href={link.href}
                    className={cn(
                      "block rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      link.active
                        ? "bg-gold/10 text-gold"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </a>
                  {link.children && (
                    <div className="ml-4 flex flex-col gap-1">
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
