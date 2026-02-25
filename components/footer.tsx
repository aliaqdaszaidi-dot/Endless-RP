import { Shield, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-gold" />
              <span className="text-sm font-bold text-foreground">
                <span className="text-gold">LEGENDARY</span> RP
              </span>
            </div>
            <p className="max-w-xs text-xs text-muted-foreground">
              The premier immersive roleplay community. Building legends since
              2021.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 text-xs sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold uppercase tracking-wider text-foreground">
                Community
              </h4>
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-gold"
              >
                Forums
              </a>
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-gold"
              >
                Discord
              </a>
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-gold"
              >
                TeamSpeak
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold uppercase tracking-wider text-foreground">
                Resources
              </h4>
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-gold"
              >
                Server Rules
              </a>
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-gold"
              >
                Getting Started
              </a>
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-gold"
              >
                FAQ
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold uppercase tracking-wider text-foreground">
                Legal
              </h4>
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-gold"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-gold"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-gold"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-border/30 pt-6 text-[11px] text-muted-foreground md:flex-row">
          <p>
            {"2021 - 2026 Legendary Roleplay. All rights reserved."}
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart className="h-3 w-3 text-gold" /> by the LRP
            Development Team
          </p>
        </div>
      </div>
    </footer>
  )
}
