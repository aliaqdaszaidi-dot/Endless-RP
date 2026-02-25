import { Shield, Users, Zap, Star } from "lucide-react"

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden border-b border-border/50">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--gold)/0.08)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--electric)/0.06)_0%,transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5">
            <Star className="h-3.5 w-3.5 text-gold" />
            <span className="text-xs font-semibold uppercase tracking-wider text-gold">
              Season 4 Now Live
            </span>
          </div>

          {/* Title */}
          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            <span className="text-gold text-glow-gold">Legendary</span>{" "}
            Roleplay
          </h2>
          <p className="mt-4 max-w-xl text-pretty text-base text-muted-foreground md:text-lg">
            The premier immersive roleplay community. Shape your story, build
            your legacy, and join thousands of players in an ever-evolving world.
          </p>

          {/* Action buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-gold-glow transition-all hover:bg-gold/90 hover:shadow-lg"
            >
              <Zap className="h-4 w-4" />
              Connect to Server
            </a>
            <a
              href="#forums"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              <Users className="h-4 w-4" />
              Browse Forums
            </a>
          </div>

          {/* Quick stats row */}
          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { icon: Users, value: "12,847", label: "Members" },
              { icon: Shield, value: "3,421", label: "Threads" },
              { icon: Zap, value: "89,156", label: "Messages" },
              { icon: Star, value: "1,247", label: "Online Now" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <stat.icon className="h-4 w-4 text-gold/60" />
                <span className="text-xl font-bold text-foreground md:text-2xl">
                  {stat.value}
                </span>
                <span className="text-xs text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
