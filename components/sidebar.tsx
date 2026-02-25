import {
  Crown,
  Shield,
  ShieldCheck,
  Star,
  Users,
  Activity,
  TrendingUp,
  Clock,
  ChevronRight,
  Wifi,
  MessageSquare,
  Eye,
} from "lucide-react"
import { cn } from "@/lib/utils"

/* ------------------------------------------------------------------ */
/* Staff Members Widget                                                */
/* ------------------------------------------------------------------ */

interface StaffMember {
  name: string
  role: string
  status: "online" | "away" | "offline"
  avatar: string
}

const staffMembers: StaffMember[] = [
  {
    name: "LegendaryAdmin",
    role: "Server Founder",
    status: "online",
    avatar: "LA",
  },
  {
    name: "CommanderRex",
    role: "Lead Admin",
    status: "online",
    avatar: "CR",
  },
  {
    name: "NightWatch",
    role: "Lead Admin",
    status: "away",
    avatar: "NW",
  },
  {
    name: "PhoenixRise",
    role: "Senior Moderator",
    status: "online",
    avatar: "PR",
  },
  {
    name: "StormBreaker",
    role: "Moderator",
    status: "offline",
    avatar: "SB",
  },
  {
    name: "CyberNova",
    role: "Moderator",
    status: "online",
    avatar: "CN",
  },
]

function StaffBadge({ role }: { role: string }) {
  const isFounder = role === "Server Founder"
  const isLeadAdmin = role === "Lead Admin"

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider",
        isFounder && "bg-gold/15 text-gold glow-gold-border",
        isLeadAdmin && "bg-electric/15 text-electric glow-electric-border",
        !isFounder &&
          !isLeadAdmin &&
          "bg-secondary text-muted-foreground border border-border/50"
      )}
    >
      {isFounder && <Crown className="h-2.5 w-2.5" />}
      {isLeadAdmin && <ShieldCheck className="h-2.5 w-2.5" />}
      {!isFounder && !isLeadAdmin && <Shield className="h-2.5 w-2.5" />}
      {role}
    </span>
  )
}

function StaffWidget() {
  return (
    <div className="glass rounded-lg p-4">
      <div className="mb-3 flex items-center gap-2">
        <Shield className="h-4 w-4 text-gold" />
        <h3 className="text-sm font-bold uppercase tracking-wide text-foreground">
          Staff Team
        </h3>
      </div>
      <div className="flex flex-col gap-2.5">
        {staffMembers.map((member) => {
          const isFounder = member.role === "Server Founder"
          const isLeadAdmin = member.role === "Lead Admin"

          return (
            <div
              key={member.name}
              className={cn(
                "flex items-center gap-3 rounded-md p-2 transition-colors hover:bg-secondary/50",
                isFounder && "glow-gold-border bg-gold/5",
                isLeadAdmin && "glow-electric-border bg-electric/5"
              )}
            >
              {/* Avatar */}
              <div className="relative">
                <div
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold",
                    isFounder && "bg-gold/20 text-gold",
                    isLeadAdmin && "bg-electric/20 text-electric",
                    !isFounder &&
                      !isLeadAdmin &&
                      "bg-secondary text-muted-foreground"
                  )}
                >
                  {member.avatar}
                </div>
                <span
                  className={cn(
                    "absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-card",
                    member.status === "online" && "bg-emerald-500",
                    member.status === "away" && "bg-amber-500",
                    member.status === "offline" && "bg-muted-foreground"
                  )}
                />
              </div>

              {/* Info */}
              <div className="min-w-0 flex-1">
                <p
                  className={cn(
                    "truncate text-xs font-semibold",
                    isFounder && "text-gold",
                    isLeadAdmin && "text-electric",
                    !isFounder && !isLeadAdmin && "text-foreground"
                  )}
                >
                  {member.name}
                </p>
                <StaffBadge role={member.role} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Online Users Widget                                                 */
/* ------------------------------------------------------------------ */

const onlineUsers = [
  { name: "LegendaryAdmin", color: "text-gold" },
  { name: "CommanderRex", color: "text-electric" },
  { name: "RPVeteran", color: "text-foreground" },
  { name: "StoryMaster", color: "text-foreground" },
  { name: "NightRider", color: "text-foreground" },
  { name: "PhoenixRise", color: "text-electric" },
  { name: "DarkKnight", color: "text-foreground" },
  { name: "CyberNova", color: "text-foreground" },
  { name: "ShadowFox", color: "text-foreground" },
  { name: "IronWolf", color: "text-foreground" },
  { name: "BlazeFire", color: "text-foreground" },
  { name: "StormChaser", color: "text-foreground" },
]

function OnlineUsersWidget() {
  return (
    <div className="glass rounded-lg p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Wifi className="h-4 w-4 text-emerald-500" />
          <h3 className="text-sm font-bold uppercase tracking-wide text-foreground">
            Online Users
          </h3>
        </div>
        <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-500">
          1,247
        </span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {onlineUsers.map((user) => (
          <a
            key={user.name}
            href="#"
            className={cn(
              "text-[11px] font-medium transition-colors hover:underline",
              user.color
            )}
          >
            {user.name}
          </a>
        ))}
        <span className="text-[11px] text-muted-foreground">
          {"and 1,235 more..."}
        </span>
      </div>

      <div className="mt-3 flex items-center gap-3 border-t border-border/30 pt-3 text-[11px] text-muted-foreground">
        <div className="flex items-center gap-1">
          <Users className="h-3 w-3" />
          <span>Members: 1,142</span>
        </div>
        <div className="flex items-center gap-1">
          <Eye className="h-3 w-3" />
          <span>Guests: 105</span>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Trending Threads Widget                                             */
/* ------------------------------------------------------------------ */

const trendingThreads = [
  {
    title: "Season 4 Patch Notes - Major Update",
    replies: 287,
    views: "12.4k",
    hot: true,
  },
  {
    title: "Best Roleplay Moments of 2026",
    replies: 156,
    views: "8.2k",
    hot: true,
  },
  {
    title: "New Player Guide - Getting Started",
    replies: 98,
    views: "6.1k",
    hot: false,
  },
  {
    title: "Custom Vehicle Pack Showcase",
    replies: 74,
    views: "4.8k",
    hot: false,
  },
  {
    title: "Los Santos PD - Now Recruiting!",
    replies: 62,
    views: "3.5k",
    hot: false,
  },
]

function TrendingWidget() {
  return (
    <div className="glass rounded-lg p-4">
      <div className="mb-3 flex items-center gap-2">
        <TrendingUp className="h-4 w-4 text-gold" />
        <h3 className="text-sm font-bold uppercase tracking-wide text-foreground">
          Trending
        </h3>
      </div>
      <div className="flex flex-col gap-2">
        {trendingThreads.map((thread, i) => (
          <a
            key={thread.title}
            href="#"
            className="group flex items-start gap-2.5 rounded-md p-2 transition-colors hover:bg-secondary/50"
          >
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded text-[10px] font-bold bg-secondary text-muted-foreground">
              {i + 1}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-medium text-foreground transition-colors group-hover:text-gold">
                {thread.title}
              </p>
              <div className="mt-0.5 flex items-center gap-2 text-[10px] text-muted-foreground">
                <span className="flex items-center gap-0.5">
                  <MessageSquare className="h-2.5 w-2.5" />
                  {thread.replies}
                </span>
                <span className="flex items-center gap-0.5">
                  <Eye className="h-2.5 w-2.5" />
                  {thread.views}
                </span>
                {thread.hot && (
                  <span className="text-gold font-semibold uppercase">Hot</span>
                )}
              </div>
            </div>
            <ChevronRight className="mt-0.5 h-3 w-3 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
        ))}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Community Stats Widget                                              */
/* ------------------------------------------------------------------ */

function CommunityStatsWidget() {
  const stats = [
    { label: "Total Members", value: "12,847", icon: Users },
    { label: "Total Threads", value: "3,421", icon: MessageSquare },
    { label: "Total Messages", value: "89,156", icon: Activity },
    { label: "Newest Member", value: "SkyWalker99", icon: Star, isLink: true },
  ]

  return (
    <div className="glass rounded-lg p-4">
      <div className="mb-3 flex items-center gap-2">
        <Activity className="h-4 w-4 text-electric" />
        <h3 className="text-sm font-bold uppercase tracking-wide text-foreground">
          Community Stats
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col gap-1 rounded-md bg-secondary/50 p-3"
          >
            <stat.icon className="h-3.5 w-3.5 text-muted-foreground" />
            <span
              className={cn(
                "text-sm font-bold",
                stat.isLink
                  ? "text-electric hover:underline cursor-pointer"
                  : "text-foreground"
              )}
            >
              {stat.value}
            </span>
            <span className="text-[10px] text-muted-foreground">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Recent Activity Widget                                              */
/* ------------------------------------------------------------------ */

const recentActivity = [
  {
    user: "RPVeteran",
    action: "posted in",
    target: "Character Introductions",
    time: "3 min ago",
  },
  {
    user: "CommanderRex",
    action: "replied to",
    target: "Season 4 Patch Notes",
    time: "12 min ago",
  },
  {
    user: "StoryMaster",
    action: "created thread in",
    target: "Active Storylines",
    time: "18 min ago",
  },
  {
    user: "PhotoGrapher",
    action: "uploaded media in",
    target: "Screenshots & Media",
    time: "25 min ago",
  },
  {
    user: "NewPlayer",
    action: "posted in",
    target: "General Support",
    time: "30 min ago",
  },
]

function RecentActivityWidget() {
  return (
    <div className="glass rounded-lg p-4">
      <div className="mb-3 flex items-center gap-2">
        <Clock className="h-4 w-4 text-gold" />
        <h3 className="text-sm font-bold uppercase tracking-wide text-foreground">
          Recent Activity
        </h3>
      </div>
      <div className="flex flex-col gap-2.5">
        {recentActivity.map((item, i) => (
          <div key={i} className="flex items-start gap-2">
            <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/50" />
            <p className="text-[11px] leading-relaxed text-muted-foreground">
              <a href="#" className="font-semibold text-electric hover:underline">
                {item.user}
              </a>{" "}
              {item.action}{" "}
              <a href="#" className="font-medium text-foreground hover:text-gold">
                {item.target}
              </a>
              <span className="ml-1 text-muted-foreground/60">{item.time}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Combined Sidebar Export                                             */
/* ------------------------------------------------------------------ */

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-4">
      <StaffWidget />
      <OnlineUsersWidget />
      <TrendingWidget />
      <CommunityStatsWidget />
      <RecentActivityWidget />
    </aside>
  )
}
