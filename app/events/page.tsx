import Link from "next/link"
import { Calendar, ChevronLeft, Filter, MapPin, Search, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

export default function EventsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <div className="absolute inset-0 bg-[url('/images/techfest2025.jpg')] bg-cover bg-center opacity-20 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-0"></div>

      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b border-zinc-800 bg-black/80 backdrop-blur-md px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-zinc-300 hover:text-white transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
          <span>Back to Dashboard</span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="outline" size="sm" className="border-blue-500/50 text-blue-400 hover:bg-blue-950/30">
            <Calendar className="mr-2 h-4 w-4" />
            Create Event
          </Button>
          <Avatar>
            <AvatarImage src="/images/avatar.jpg" alt="User" />
            <AvatarFallback className="bg-zinc-800 text-blue-400">JD</AvatarFallback>
          </Avatar>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6 relative z-1">
        <div className="grid gap-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Events
            </h1>
            <p className="text-zinc-400">Discover and manage campus events</p>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500" />
              <Input
                type="search"
                placeholder="Search events..."
                className="w-full bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 pl-8 md:w-[300px] lg:w-[400px]"
              />
            </div>
            <Button variant="outline" size="sm" className="ml-auto border-zinc-700 text-zinc-300 hover:bg-zinc-800">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>

          {/* Featured Video Section */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4 text-zinc-100">Featured Event Videos</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="relative group cursor-pointer">
                <div className="aspect-video w-full overflow-hidden rounded-lg">
                  <img
                    src="/images/video-thumbnail1.jpg"
                    alt="Campus Tour Video"
                    className="h-full w-full object-cover transition-transform group-hover:scale-105 duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-all">
                    <div className="h-14 w-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all">
                      <Play className="h-6 w-6 text-white fill-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="font-medium text-white">Campus Tour 2025</h3>
                    <p className="text-xs text-zinc-300">15:24 • 2.4K views</p>
                  </div>
                </div>
              </div>

              <div className="relative group cursor-pointer">
                <div className="aspect-video w-full overflow-hidden rounded-lg">
                  <img
                    src="/images/video-thumbnail2.jpg"
                    alt="TechFest Highlights"
                    className="h-full w-full object-cover transition-transform group-hover:scale-105 duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-all">
                    <div className="h-14 w-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all">
                      <Play className="h-6 w-6 text-white fill-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="font-medium text-white">TechFest 2024 Highlights</h3>
                    <p className="text-xs text-zinc-300">8:45 • 5.7K views</p>
                  </div>
                </div>
              </div>

              <div className="relative group cursor-pointer">
                <div className="aspect-video w-full overflow-hidden rounded-lg">
                  <img
                    src="/images/video-thumbnail3.jpg"
                    alt="Cultural Night Performance"
                    className="h-full w-full object-cover transition-transform group-hover:scale-105 duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-all">
                    <div className="h-14 w-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all">
                      <Play className="h-6 w-6 text-white fill-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="font-medium text-white">Cultural Night 2024</h3>
                    <p className="text-xs text-zinc-300">12:37 • 3.9K views</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full grid-cols-4 md:w-[400px] bg-zinc-800/50 text-zinc-400">
              <TabsTrigger value="upcoming" className="data-[state=active]:bg-zinc-900 data-[state=active]:text-white">
                Upcoming
              </TabsTrigger>
              <TabsTrigger
                value="registered"
                className="data-[state=active]:bg-zinc-900 data-[state=active]:text-white"
              >
                Registered
              </TabsTrigger>
              <TabsTrigger value="past" className="data-[state=active]:bg-zinc-900 data-[state=active]:text-white">
                Past
              </TabsTrigger>
              <TabsTrigger value="my-events" className="data-[state=active]:bg-zinc-900 data-[state=active]:text-white">
                My Events
              </TabsTrigger>
            </TabsList>
            <TabsContent value="upcoming" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src="/images/techfest2025.jpg"
                        alt="TechFest 2025"
                        className="h-full w-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="grid gap-2 p-4">
                    <div className="flex items-center justify-between">
                      <Badge className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30">Tech</Badge>
                      <span className="text-sm font-medium text-green-400">Registration Open</span>
                    </div>
                    <h3 className="text-xl font-bold text-zinc-100">TechFest 2025</h3>
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                      <Calendar className="h-4 w-4 text-blue-400" />
                      <span>Mar 25, 2025 • 10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                      <MapPin className="h-4 w-4 text-blue-400" />
                      <span>Main Auditorium</span>
                    </div>
                    <Separator className="my-2 bg-zinc-800" />
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6 ring-1 ring-blue-500/30">
                        <AvatarImage src="/images/cs-dept.jpg" alt="CS Department" />
                        <AvatarFallback className="bg-zinc-800 text-blue-400">CS</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-zinc-400">Organized by CS Department</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-4 pt-0">
                    <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                      Learn More
                    </Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                      Register
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src="/images/careerfair.jpg"
                        alt="Career Fair"
                        className="h-full w-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="grid gap-2 p-4">
                    <div className="flex items-center justify-between">
                      <Badge className="bg-amber-500/20 text-amber-400 hover:bg-amber-500/30">Career</Badge>
                      <span className="text-sm font-medium text-amber-400">Coming Soon</span>
                    </div>
                    <h3 className="text-xl font-bold text-zinc-100">Career Fair</h3>
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                      <Calendar className="h-4 w-4 text-amber-400" />
                      <span>Apr 2, 2025 • 9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                      <MapPin className="h-4 w-4 text-amber-400" />
                      <span>University Convention Center</span>
                    </div>
                    <Separator className="my-2 bg-zinc-800" />
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6 ring-1 ring-amber-500/30">
                        <AvatarImage src="/images/placement-office.jpg" alt="Placement Office" />
                        <AvatarFallback className="bg-zinc-800 text-amber-400">PO</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-zinc-400">Organized by Placement Office</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-4 pt-0">
                    <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                      Learn More
                    </Button>
                    <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white" disabled>
                      Remind Me
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src="/images/culturalnight.jpg"
                        alt="Cultural Night"
                        className="h-full w-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="grid gap-2 p-4">
                    <div className="flex items-center justify-between">
                      <Badge className="bg-purple-500/20 text-purple-400 hover:bg-purple-500/30">Cultural</Badge>
                      <span className="text-sm font-medium text-purple-400">Registered</span>
                    </div>
                    <h3 className="text-xl font-bold text-zinc-100">Cultural Night</h3>
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                      <Calendar className="h-4 w-4 text-purple-400" />
                      <span>Apr 15, 2025 • 6:00 PM - 10:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                      <MapPin className="h-4 w-4 text-purple-400" />
                      <span>Open Air Theater</span>
                    </div>
                    <Separator className="my-2 bg-zinc-800" />
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6 ring-1 ring-purple-500/30">
                        <AvatarImage src="/images/cultural-committee.jpg" alt="Cultural Committee" />
                        <AvatarFallback className="bg-zinc-800 text-purple-400">CC</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-zinc-400">Organized by Cultural Committee</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-4 pt-0">
                    <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                      Learn More
                    </Button>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                      View Ticket
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src="/images/hackathon.jpg"
                        alt="Hackathon"
                        className="h-full w-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="grid gap-2 p-4">
                    <div className="flex items-center justify-between">
                      <Badge className="bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30">Tech</Badge>
                      <span className="text-sm font-medium text-green-400">Registration Open</span>
                    </div>
                    <h3 className="text-xl font-bold text-zinc-100">24-Hour Hackathon</h3>
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                      <Calendar className="h-4 w-4 text-cyan-400" />
                      <span>Apr 20-21, 2025 • Starts at 10:00 AM</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                      <MapPin className="h-4 w-4 text-cyan-400" />
                      <span>Innovation Lab</span>
                    </div>
                    <Separator className="my-2 bg-zinc-800" />
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6 ring-1 ring-cyan-500/30">
                        <AvatarImage src="/images/tech-club.jpg" alt="Tech Club" />
                        <AvatarFallback className="bg-zinc-800 text-cyan-400">TC</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-zinc-400">Organized by Tech Club</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-4 pt-0">
                    <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                      Learn More
                    </Button>
                    <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700 text-white">
                      Register
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src="/images/workshop.jpg"
                        alt="Workshop Series"
                        className="h-full w-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="grid gap-2 p-4">
                    <div className="flex items-center justify-between">
                      <Badge className="bg-green-500/20 text-green-400 hover:bg-green-500/30">Workshop</Badge>
                      <span className="text-sm font-medium text-green-400">Registration Open</span>
                    </div>
                    <h3 className="text-xl font-bold text-zinc-100">AI Workshop Series</h3>
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                      <Calendar className="h-4 w-4 text-green-400" />
                      <span>Apr 5-7, 2025 • 2:00 PM - 5:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                      <MapPin className="h-4 w-4 text-green-400" />
                      <span>Computer Science Building</span>
                    </div>
                    <Separator className="my-2 bg-zinc-800" />
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6 ring-1 ring-green-500/30">
                        <AvatarImage src="/images/ai-research.jpg" alt="AI Research Group" />
                        <AvatarFallback className="bg-zinc-800 text-green-400">AI</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-zinc-400">Organized by AI Research Group</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-4 pt-0">
                    <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                      Learn More
                    </Button>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                      Register
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src="/images/alumni.jpg"
                        alt="Alumni Meet"
                        className="h-full w-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="grid gap-2 p-4">
                    <div className="flex items-center justify-between">
                      <Badge className="bg-pink-500/20 text-pink-400 hover:bg-pink-500/30">Networking</Badge>
                      <span className="text-sm font-medium text-green-400">Registration Open</span>
                    </div>
                    <h3 className="text-xl font-bold text-zinc-100">Annual Alumni Meet</h3>
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                      <Calendar className="h-4 w-4 text-pink-400" />
                      <span>May 10, 2025 • 11:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                      <MapPin className="h-4 w-4 text-pink-400" />
                      <span>University Campus</span>
                    </div>
                    <Separator className="my-2 bg-zinc-800" />
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6 ring-1 ring-pink-500/30">
                        <AvatarImage src="/images/alumni-assoc.jpg" alt="Alumni Association" />
                        <AvatarFallback className="bg-zinc-800 text-pink-400">AA</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-zinc-400">Organized by Alumni Association</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-4 pt-0">
                    <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                      Learn More
                    </Button>
                    <Button size="sm" className="bg-pink-600 hover:bg-pink-700 text-white">
                      Register
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="registered" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src="/images/culturalnight.jpg"
                        alt="Cultural Night"
                        className="h-full w-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="grid gap-2 p-4">
                    <div className="flex items-center justify-between">
                      <Badge className="bg-purple-500/20 text-purple-400 hover:bg-purple-500/30">Cultural</Badge>
                      <span className="text-sm font-medium text-purple-400">Registered</span>
                    </div>
                    <h3 className="text-xl font-bold text-zinc-100">Cultural Night</h3>
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                      <Calendar className="h-4 w-4 text-purple-400" />
                      <span>Apr 15, 2025 • 6:00 PM - 10:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                      <MapPin className="h-4 w-4 text-purple-400" />
                      <span>Open Air Theater</span>
                    </div>
                    <Separator className="my-2 bg-zinc-800" />
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6 ring-1 ring-purple-500/30">
                        <AvatarImage src="/images/cultural-committee.jpg" alt="Cultural Committee" />
                        <AvatarFallback className="bg-zinc-800 text-purple-400">CC</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-zinc-400">Organized by Cultural Committee</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-4 pt-0">
                    <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                      Cancel Registration
                    </Button>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                      View Ticket
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="past">
              <div className="text-center py-10">
                <h3 className="text-lg font-medium text-zinc-300">No past events to display</h3>
                <p className="text-zinc-400 mt-2">Past events you've attended will appear here</p>
              </div>
            </TabsContent>
            <TabsContent value="my-events">
              <div className="text-center py-10">
                <h3 className="text-lg font-medium text-zinc-300">You haven't created any events yet</h3>
                <p className="text-zinc-400 mt-2">Events you create will appear here</p>
                <Button className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Calendar className="mr-2 h-4 w-4" />
                  Create Event
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

