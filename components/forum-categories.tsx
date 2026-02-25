"use client"

import { useState } from "react"
import {
  MessageSquare,
  Pin,
  Lock,
  Flame,
  ChevronDown,
  ChevronRight,
  Megaphone,
  Gamepad2,
  Briefcase,
  Code,
  HelpCircle,
  Palette,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface SubForum {
  name: string
  threads: number
  posts: number
  lastPost: {
    title: string
    author: string
    role?: string
    time: string
  }
}

interface ForumCategory {
  name: string
  icon: React.ElementType
  iconColor: string
  subForums: SubForum[]
}

const categories: ForumCategory[] = [
  {
    name: "Announcements & News",
    icon: Megaphone,
    iconColor: "text-gold",
    subForums: [
      {
        name: "Server Announcements",
        threads: 142,
        posts: 3284,
        lastPost: {
          title: "Season 4 Patch Notes - Major Update",
          author: "LegendaryAdmin",
          role: "Server Founder",
          time: "12 min ago",
        },
      },
      {
        name: "Community Events",
        threads: 87,
        posts: 1456,
        lastPost: {
          title: "Weekly Car Meet - Saturday 8PM EST",
          author: "EventCoordinator",
          role: "Lead Admin",
          time: "2 hours ago",
        },
      },
      {
        name: "Development Updates",
        threads: 64,
        posts: 892,
        lastPost: {
          title: "Custom MDT System Preview",
          author: "DevTeam",
          time: "5 hours ago",
        },
      },
    ],
  },
  {
    name: "Roleplay Central",
    icon: Gamepad2,
    iconColor: "text-electric",
    subForums: [
      {
        name: "Character Introductions",
        threads: 1247,
        posts: 14832,
        lastPost: {
          title: "Vincent Moretti - The Untold Story",
          author: "RPVeteran",
          time: "3 min ago",
        },
      },
      {
        name: "Active Storylines",
        threads: 456,
        posts: 8921,
        lastPost: {
          title: "The South Side Alliance - Chapter 12",
          author: "StoryMaster",
          time: "18 min ago",
        },
      },
      {
        name: "Faction Recruitment",
        threads: 234,
        posts: 4567,
        lastPost: {
          title: "Los Santos PD - Now Recruiting!",
          author: "ChiefJohnson",
          role: "Lead Admin",
          time: "1 hour ago",
        },
      },
      {
        name: "Roleplay Guides & Tips",
        threads: 178,
        posts: 2341,
        lastPost: {
          title: "Advanced CrimRP Guide for New Players",
          author: "RPMentor",
          time: "4 hours ago",
        },
      },
    ],
  },
  {
    name: "Business & Employment",
    icon: Briefcase,
    iconColor: "text-gold",
    subForums: [
      {
        name: "Business Listings",
        threads: 312,
        posts: 2145,
        lastPost: {
          title: "Premium Deluxe Motorsport - Grand Opening",
          author: "BusinessOwner",
          time: "45 min ago",
        },
      },
      {
        name: "Job Postings",
        threads: 189,
        posts: 1678,
        lastPost: {
          title: "Mechanic Wanted - Downtown Customs",
          author: "GarageBoss",
          time: "2 hours ago",
        },
      },
    ],
  },
  {
    name: "Technical & Development",
    icon: Code,
    iconColor: "text-electric",
    subForums: [
      {
        name: "Server Scripts & Resources",
        threads: 567,
        posts: 4321,
        lastPost: {
          title: "Custom HUD Framework v2.0",
          author: "ScriptDev",
          time: "30 min ago",
        },
      },
      {
        name: "Bug Reports",
        threads: 234,
        posts: 1890,
        lastPost: {
          title: "Vehicle despawn issue near airport",
          author: "QATester",
          time: "15 min ago",
        },
      },
    ],
  },
  {
    name: "Creative Corner",
    icon: Palette,
    iconColor: "text-gold",
    subForums: [
      {
        name: "Screenshots & Media",
        threads: 892,
        posts: 12456,
        lastPost: {
          title: "Cinematic Screenshots - Night City Life",
          author: "PhotoGrapher",
          time: "8 min ago",
        },
      },
      {
        name: "Fan Art & Graphics",
        threads: 345,
        posts: 2890,
        lastPost: {
          title: "Custom Server Wallpapers Pack",
          author: "ArtistRP",
          time: "1 hour ago",
        },
      },
    ],
  },
  {
    name: "Support & Help",
    icon: HelpCircle,
    iconColor: "text-electric",
    subForums: [
      {
        name: "General Support",
        threads: 456,
        posts: 3456,
        lastPost: {
          title: "How to connect to the server",
          author: "NewPlayer",
          time: "5 min ago",
        },
      },
      {
        name: "Ban Appeals",
        threads: 123,
        posts: 789,
        lastPost: {
          title: "Appeal #4521 - Under Review",
          author: "Moderator",
          time: "20 min ago",
        },
      },
    ],
  },
]

function RoleBadge({ role }: { role: string }) {
  const isFounder = role === "Server Founder"
  return (
    <span
      className={cn(
        "inline-flex items-center rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider",
        isFounder
          ? "bg-gold/15 text-gold glow-gold-border"
          : "bg-electric/15 text-electric glow-electric-border"
      )}
    >
      {role}
    </span>
  )
}

function ForumCategorySection({ category }: { category: ForumCategory }) {
  const [collapsed, setCollapsed] = useState(false)
  const Icon = category.icon

  return (
    <div className="overflow-hidden rounded-lg border border-border/50 bg-card/50">
      {/* Category header */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="flex w-full items-center gap-3 bg-secondary/50 px-4 py-3 transition-colors hover:bg-secondary/80"
      >
        <div
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-md",
            category.iconColor === "text-gold"
              ? "bg-gold/10"
              : "bg-electric/10"
          )}
        >
          <Icon className={cn("h-4 w-4", category.iconColor)} />
        </div>
        <h3 className="flex-1 text-left text-sm font-bold uppercase tracking-wide text-foreground">
          {category.name}
        </h3>
        {collapsed ? (
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        ) : (
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        )}
      </button>

      {/* Sub-forums */}
      {!collapsed && (
        <div className="divide-y divide-border/30">
          {category.subForums.map((forum) => (
            <div
              key={forum.name}
              className="flex flex-col gap-3 px-4 py-3 transition-colors hover:bg-secondary/20 md:flex-row md:items-center"
            >
              {/* Forum info */}
              <div className="flex min-w-0 flex-1 items-start gap-3">
                <MessageSquare className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                <div className="min-w-0 flex-1">
                  <a
                    href="#"
                    className="text-sm font-semibold text-foreground transition-colors hover:text-gold"
                  >
                    {forum.name}
                  </a>
                </div>
              </div>

              {/* Stats */}
              <div className="flex shrink-0 items-center gap-6 pl-7 text-xs text-muted-foreground md:pl-0">
                <div className="flex flex-col items-center">
                  <span className="font-mono font-semibold text-foreground">
                    {forum.threads.toLocaleString()}
                  </span>
                  <span>Threads</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-mono font-semibold text-foreground">
                    {forum.posts.toLocaleString()}
                  </span>
                  <span>Posts</span>
                </div>
              </div>

              {/* Latest post */}
              <div className="min-w-0 shrink-0 pl-7 md:w-56 md:pl-0">
                <a
                  href="#"
                  className="block truncate text-xs font-medium text-foreground transition-colors hover:text-gold"
                >
                  {forum.lastPost.title}
                </a>
                <div className="mt-0.5 flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] text-electric">
                    {forum.lastPost.author}
                  </span>
                  {forum.lastPost.role && (
                    <RoleBadge role={forum.lastPost.role} />
                  )}
                  <span className="text-[11px] text-muted-foreground">
                    {forum.lastPost.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export function ForumCategories() {
  return (
    <section id="forums" className="flex flex-col gap-4">
      {/* Section header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-5 w-1 rounded-full bg-gold" />
          <h2 className="text-lg font-bold text-foreground">Forum Categories</h2>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <button className="flex items-center gap-1 transition-colors hover:text-foreground">
            <Pin className="h-3 w-3" />
            <span className="hidden sm:inline">Pinned</span>
          </button>
          <button className="flex items-center gap-1 transition-colors hover:text-foreground">
            <Flame className="h-3 w-3" />
            <span className="hidden sm:inline">Trending</span>
          </button>
          <button className="flex items-center gap-1 transition-colors hover:text-foreground">
            <Lock className="h-3 w-3" />
            <span className="hidden sm:inline">Locked</span>
          </button>
        </div>
      </div>

      {/* Categories list */}
      {categories.map((cat) => (
        <ForumCategorySection key={cat.name} category={cat} />
      ))}
    </section>
  )
}
