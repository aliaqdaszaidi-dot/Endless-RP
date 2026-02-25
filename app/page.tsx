import { Navbar } from "@/components/navbar"
import { HeroBanner } from "@/components/hero-banner"
import { ForumCategories } from "@/components/forum-categories"
import { Sidebar } from "@/components/sidebar"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <HeroBanner />

      {/* Main content area */}
      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 px-4 py-8 lg:flex-row">
        {/* Forum categories - main column */}
        <div className="min-w-0 flex-1">
          <ForumCategories />
        </div>

        {/* Sidebar - right column */}
        <div className="w-full shrink-0 lg:w-80">
          <Sidebar />
        </div>
      </main>

      <Footer />
    </div>
  )
}
