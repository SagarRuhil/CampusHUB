import Link from "next/link"
import { Bell, BookOpen, Calendar, ChevronRight, GraduationCap, LayoutDashboard, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920&text=Space+Background')] bg-cover bg-center opacity-20 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-0"></div>

      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b border-zinc-800 bg-black/80 backdrop-blur-md px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-sm opacity-70"></div>
            <GraduationCap className="h-8 w-8 relative z-10 text-white" />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            CampusHub
          </span>
        </Link>
        <nav className="hidden flex-1 md:flex">
          <ul className="flex flex-1 items-center gap-4 sm:gap-6">
            <li>
              <Link href="/events" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                Events
              </Link>
            </li>
            <li>
              <Link href="/societies" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                Societies
              </Link>
            </li>
            <li>
              <Link href="/placements" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                Placements
              </Link>
            </li>
            <li>
              <Link href="/resources" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                Resources
              </Link>
            </li>
          </ul>
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="outline" size="icon" className="relative border-zinc-800 bg-black/50 hover:bg-black/70">
            <Bell className="h-5 w-5 text-blue-400" />
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-[10px] text-white">
              3
            </span>
          </Button>
          <Link href="/profile">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32&text=SR" alt="User" />
              <AvatarFallback className="bg-zinc-800 text-blue-400">SR</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </header>
      <div className="flex flex-1 relative z-1">
        <aside className="hidden w-64 border-r border-zinc-800 bg-black/50 backdrop-blur-sm md:block">
          <div className="flex h-full flex-col gap-2 p-4">
            <div className="flex items-center gap-2 px-2 py-1.5">
              <Avatar className="h-8 w-8 ring-1 ring-blue-500/50">
                <AvatarImage src="/placeholder.svg?height=32&width=32&text=SR" alt="User" />
                <AvatarFallback className="bg-zinc-800 text-blue-400">SR</AvatarFallback>
              </Avatar>
              <div className="grid gap-0.5">
                <div className="font-medium">Sagar Ruhil</div>
                <div className="text-xs text-zinc-400">Computer Science, Year 1</div>
              </div>
            </div>
            <nav className="grid gap-1 px-2 pt-2">
              <Link href="#" className="flex items-center gap-3 rounded-lg bg-zinc-800/50 px-3 py-2 text-white">
                <LayoutDashboard className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-medium">Dashboard</span>
              </Link>
              <Link
                href="/events"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-400 hover:bg-zinc-800/50 hover:text-white transition-colors"
              >
                <Calendar className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-medium">Events</span>
              </Link>
              <Link
                href="/societies"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-400 hover:bg-zinc-800/50 hover:text-white transition-colors"
              >
                <Users className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-medium">Societies</span>
              </Link>
              <Link
                href="/placements"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-400 hover:bg-zinc-800/50 hover:text-white transition-colors"
              >
                <GraduationCap className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-medium">Placements</span>
              </Link>
              <Link
                href="/resources"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-400 hover:bg-zinc-800/50 hover:text-white transition-colors"
              >
                <BookOpen className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-medium">Resources</span>
              </Link>
            </nav>
          </div>
        </aside>
        <main className="flex-1 p-4 md:p-6">
          <div className="grid gap-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Welcome back, Sagar!
              </h1>
              <p className="text-zinc-400">Here's what's happening on campus today.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-zinc-300">Upcoming Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-400">12</div>
                  <p className="text-xs text-zinc-400">+2 from last week</p>
                </CardContent>
                <CardFooter>
                  <Link href="/events" className="text-xs text-blue-400 hover:text-blue-300 transition-colors">
                    View all events
                  </Link>
                </CardFooter>
              </Card>
              <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-zinc-300">Society Applications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-400">3</div>
                  <p className="text-xs text-zinc-400">Pending responses</p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/societies/applications"
                    className="text-xs text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    View applications
                  </Link>
                </CardFooter>
              </Card>
              <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-zinc-300">Job Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-cyan-400">24</div>
                  <p className="text-xs text-zinc-400">+8 new this week</p>
                </CardContent>
                <CardFooter>
                  <Link href="/placements" className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors">
                    Browse opportunities
                  </Link>
                </CardFooter>
              </Card>
              <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-zinc-300">Campus Points</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-400">750</div>
                  <p className="text-xs text-zinc-400">Rank #12 in your department</p>
                </CardContent>
                <CardFooter>
                  <Link href="/rewards" className="text-xs text-green-400 hover:text-green-300 transition-colors">
                    View leaderboard
                  </Link>
                </CardFooter>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="lg:col-span-4 border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-zinc-100">Upcoming Events</CardTitle>
                  <CardDescription className="text-zinc-400">
                    Don't miss out on these exciting campus events
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <div className="relative flex h-16 w-16 shrink-0 overflow-hidden rounded-md">
                      <img
                        src="/placeholder.svg?height=64&width=64&text=TechFest"
                        alt="TechFest"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="grid gap-1">
                      <div className="font-semibold text-zinc-100">TechFest 2025</div>
                      <div className="flex items-center gap-2 text-sm text-zinc-400">
                        <span>Mar 25, 2025 • 10:00 AM</span>
                        <Badge variant="outline" className="ml-2 border-blue-500/50 text-blue-400">
                          Registration Open
                        </Badge>
                      </div>
                    </div>
                    <div className="ml-auto">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-blue-500/50 text-blue-400 hover:bg-blue-950/30"
                      >
                        Register
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="relative flex h-16 w-16 shrink-0 overflow-hidden rounded-md">
                      <img
                        src="/placeholder.svg?height=64&width=64&text=Career"
                        alt="Career Fair"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="grid gap-1">
                      <div className="font-semibold text-zinc-100">Career Fair</div>
                      <div className="flex items-center gap-2 text-sm text-zinc-400">
                        <span>Apr 2, 2025 • 9:00 AM</span>
                        <Badge variant="outline" className="ml-2 border-amber-500/50 text-amber-400">
                          Coming Soon
                        </Badge>
                      </div>
                    </div>
                    <div className="ml-auto">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-amber-500/50 text-amber-400 hover:bg-amber-950/30"
                        disabled
                      >
                        Remind Me
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="relative flex h-16 w-16 shrink-0 overflow-hidden rounded-md">
                      <img
                        src="/placeholder.svg?height=64&width=64&text=Culture"
                        alt="Cultural Night"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="grid gap-1">
                      <div className="font-semibold text-zinc-100">Cultural Night</div>
                      <div className="flex items-center gap-2 text-sm text-zinc-400">
                        <span>Apr 15, 2025 • 6:00 PM</span>
                        <Badge className="ml-2 bg-purple-500/20 text-purple-400">Registered</Badge>
                      </div>
                    </div>
                    <div className="ml-auto">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-purple-500/50 text-purple-400 hover:bg-purple-950/30"
                      >
                        View Ticket
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="gap-1 text-zinc-400 hover:text-white">
                    <span>View all events</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              <Card className="lg:col-span-3 border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-zinc-100">Announcements</CardTitle>
                  <CardDescription className="text-zinc-400">Latest updates from the administration</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="grid gap-2">
                    <div className="font-semibold text-zinc-100">Mid-Semester Exam Schedule Released</div>
                    <p className="text-sm text-zinc-400">
                      The examination schedule for mid-semester assessments has been published. Check your department
                      portal for details.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                      <span>Mar 18, 2025</span>
                      <span>•</span>
                      <span>Academic Office</span>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <div className="font-semibold text-zinc-100">Library Hours Extended During Finals</div>
                    <p className="text-sm text-zinc-400">
                      The main library will remain open until midnight during the final examination period from April 20
                      to May 5.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                      <span>Mar 15, 2025</span>
                      <span>•</span>
                      <span>Library Services</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="gap-1 text-zinc-400 hover:text-white">
                    <span>View all announcements</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-zinc-100">Placement Opportunities</CardTitle>
                  <CardDescription className="text-zinc-400">Latest job and internship openings</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="grid gap-2">
                    <div className="font-semibold text-zinc-100">Software Engineer Intern</div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium text-cyan-400">TechCorp</span>
                      <span className="text-zinc-400">• Remote</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                      <span>Posted 2 days ago</span>
                      <span>•</span>
                      <span>Deadline: Apr 10</span>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <div className="font-semibold text-zinc-100">Marketing Associate</div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium text-cyan-400">BrandX</span>
                      <span className="text-zinc-400">• On-site</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                      <span>Posted 5 days ago</span>
                      <span>•</span>
                      <span>Deadline: Apr 15</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="gap-1 text-zinc-400 hover:text-white">
                    <span>View all opportunities</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-zinc-100">Society Spotlight</CardTitle>
                  <CardDescription className="text-zinc-400">Active clubs and organizations</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-10 w-10 ring-1 ring-blue-500/50">
                      <AvatarImage src="/placeholder.svg?height=40&width=40&text=RC" alt="Robotics Club" />
                      <AvatarFallback className="bg-zinc-800 text-blue-400">RC</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                      <div className="font-semibold text-zinc-100">Robotics Club</div>
                      <div className="text-xs text-zinc-400">Recruiting new members</div>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="ml-auto border-blue-500/50 text-blue-400 hover:bg-blue-950/30"
                    >
                      Apply
                    </Button>
                  </div>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-10 w-10 ring-1 ring-purple-500/50">
                      <AvatarImage src="/placeholder.svg?height=40&width=40&text=DS" alt="Drama Society" />
                      <AvatarFallback className="bg-zinc-800 text-purple-400">DS</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                      <div className="font-semibold text-zinc-100">Drama Society</div>
                      <div className="text-xs text-zinc-400">Auditions for spring play</div>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="ml-auto border-purple-500/50 text-purple-400 hover:bg-purple-950/30"
                    >
                      Details
                    </Button>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="gap-1 text-zinc-400 hover:text-white">
                    <span>Explore all societies</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-zinc-100">Resource Center</CardTitle>
                  <CardDescription className="text-zinc-400">Study materials and academic resources</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="grid gap-2">
                    <div className="font-semibold text-zinc-100">Data Structures & Algorithms</div>
                    <p className="text-sm text-zinc-400">Complete lecture notes and practice problems for CS301.</p>
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                      <span>Uploaded by Prof. Johnson</span>
                      <span>•</span>
                      <span>Mar 10</span>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <div className="font-semibold text-zinc-100">Research Methodology Guide</div>
                    <p className="text-sm text-zinc-400">Comprehensive guide for final year research projects.</p>
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                      <span>Uploaded by Research Office</span>
                      <span>•</span>
                      <span>Feb 28</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="gap-1 text-zinc-400 hover:text-white">
                    <span>Browse all resources</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

