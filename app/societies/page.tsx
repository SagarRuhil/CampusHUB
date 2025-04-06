import Link from "next/link"
import { ChevronLeft, Filter, Plus, Search, Users, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

export default function SocietiesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <ChevronLeft className="h-5 w-5" />
          <span>Back to Dashboard</span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="outline" size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Create Society
          </Button>
          <Avatar>
            <AvatarImage src="/images/avatar.jpg" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="grid gap-6">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Societies & Clubs</h1>
            <p className="text-muted-foreground">Discover and join campus societies and clubs</p>
          </div>

          {/* Society Spotlight Video Section */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Society Spotlight</h2>
            <div className="relative group cursor-pointer rounded-lg overflow-hidden">
              <div className="aspect-video w-full">
                <img
                  src="/images/video-thumbnail1.jpg"
                  alt="Society Spotlight: Robotics Club"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-all">
                  <div className="h-20 w-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all">
                    <Play className="h-8 w-8 text-white fill-white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className="text-2xl font-bold text-white">Society Spotlight: Robotics Club</h3>
                  <p className="text-white/80 mt-2">
                    Learn about our award-winning Robotics Club and their recent achievements in the National Robotics
                    Championship.
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <Avatar className="h-8 w-8 border-2 border-white">
                      <AvatarImage src="/images/robotics.jpg" alt="Robotics Club" />
                      <AvatarFallback>RC</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium text-white">Robotics Club</p>
                      <p className="text-xs text-white/70">15:24 • 2.4K views • 3 days ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search societies..."
                className="w-full bg-background pl-8 md:w-[300px] lg:w-[400px]"
              />
            </div>
            <Button variant="outline" size="sm" className="ml-auto">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 md:w-[400px]">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="technical">Technical</TabsTrigger>
              <TabsTrigger value="cultural">Cultural</TabsTrigger>
              <TabsTrigger value="my-societies">My Societies</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="p-0">
                    <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                      <img src="/images/robotics.jpg" alt="Robotics Club" className="h-full w-full object-cover" />
                    </div>
                  </CardHeader>
                  <CardContent className="grid gap-2 p-4">
                    <div className="flex items-center justify-between">
                      <Badge>Technical</Badge>
                      <span className="text-sm font-medium text-green-600">Recruiting</span>
                    </div>
                    <h3 className="text-xl font-bold">Robotics Club</h3>
                    <p className="text-sm text-muted-foreground">
                      Building and programming robots for competitions and research projects.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>42 members</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="/images/prof-smith.jpg" alt="President" />
                        <AvatarFallback>RC</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">Led by Prof. Smith</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-4 pt-0">
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                    <Button size="sm">Apply</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="p-0">
                    <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                      <img src="/images/drama.jpg" alt="Drama Society" className="h-full w-full object-cover" />
                    </div>
                  </CardHeader>
                  <CardContent className="grid gap-2 p-4">
                    <div className="flex items-center justify-between">
                      <Badge>Cultural</Badge>
                      <span className="text-sm font-medium text-green-600">Recruiting</span>
                    </div>
                    <h3 className="text-xl font-bold">Drama Society</h3>
                    <p className="text-sm text-muted-foreground">
                      Producing plays, musicals, and theatrical performances throughout the year.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>38 members</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="/images/sarah-johnson.jpg" alt="President" />
                        <AvatarFallback>DS</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">Led by Sarah Johnson</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-4 pt-0">
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                    <Button size="sm">Apply</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="p-0">
                    <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                      <img src="/images/coding.jpg" alt="Coding Club" className="h-full w-full object-cover" />
                    </div>
                  </CardHeader>
                  <CardContent className="grid gap-2 p-4">
                    <div className="flex items-center justify-between">
                      <Badge>Technical</Badge>
                      <span className="text-sm font-medium text-green-600">Recruiting</span>
                    </div>
                    <h3 className="text-xl font-bold">Coding Club</h3>
                    <p className="text-sm text-muted-foreground">
                      Developing software projects, participating in hackathons, and learning new technologies.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>65 members</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="/images/michael-chen.jpg" alt="President" />
                        <AvatarFallback>CC</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">Led by Michael Chen</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-4 pt-0">
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                    <Button size="sm">Apply</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="p-0">
                    <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                      <img
                        src="/images/photography.jpg"
                        alt="Photography Club"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="grid gap-2 p-4">
                    <div className="flex items-center justify-between">
                      <Badge>Cultural</Badge>
                      <span className="text-sm font-medium text-green-600">Recruiting</span>
                    </div>
                    <h3 className="text-xl font-bold">Photography Club</h3>
                    <p className="text-sm text-muted-foreground">
                      Capturing campus life, organizing photo walks, and hosting exhibitions.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>29 members</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="/images/priya-sharma.jpg" alt="President" />
                        <AvatarFallback>PC</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">Led by Priya Sharma</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-4 pt-0">
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                    <Button size="sm">Apply</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="p-0">
                    <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                      <img src="/images/debate.jpg" alt="Debate Club" className="h-full w-full object-cover" />
                    </div>
                  </CardHeader>
                  <CardContent className="grid gap-2 p-4">
                    <div className="flex items-center justify-between">
                      <Badge>Literary</Badge>
                      <span className="text-sm font-medium text-green-600">Recruiting</span>
                    </div>
                    <h3 className="text-xl font-bold">Debate Club</h3>
                    <p className="text-sm text-muted-foreground">
                      Participating in debate competitions and organizing discussion forums on current issues.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>32 members</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="/images/alex-thompson.jpg" alt="President" />
                        <AvatarFallback>DC</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">Led by Alex Thompson</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-4 pt-0">
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                    <Button size="sm">Apply</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="p-0">
                    <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                      <img src="/images/sports.jpg" alt="Sports Club" className="h-full w-full object-cover" />
                    </div>
                  </CardHeader>
                  <CardContent className="grid gap-2 p-4">
                    <div className="flex items-center justify-between">
                      <Badge>Sports</Badge>
                      <span className="text-sm font-medium text-green-600">Recruiting</span>
                    </div>
                    <h3 className="text-xl font-bold">Sports Club</h3>
                    <p className="text-sm text-muted-foreground">
                      Organizing sports tournaments, fitness challenges, and representing the university in
                      competitions.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>78 members</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="/images/coach-williams.jpg" alt="President" />
                        <AvatarFallback>SC</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">Led by Coach Williams</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-4 pt-0">
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                    <Button size="sm">Apply</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="technical">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="p-0">
                    <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                      <img src="/images/robotics.jpg" alt="Robotics Club" className="h-full w-full object-cover" />
                    </div>
                  </CardHeader>
                  <CardContent className="grid gap-2 p-4">
                    <div className="flex items-center justify-between">
                      <Badge>Technical</Badge>
                      <span className="text-sm font-medium text-green-600">Recruiting</span>
                    </div>
                    <h3 className="text-xl font-bold">Robotics Club</h3>
                    <p className="text-sm text-muted-foreground">
                      Building and programming robots for competitions and research projects.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>42 members</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="/images/prof-smith.jpg" alt="President" />
                        <AvatarFallback>RC</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">Led by Prof. Smith</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-4 pt-0">
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                    <Button size="sm">Apply</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="p-0">
                    <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                      <img src="/images/coding.jpg" alt="Coding Club" className="h-full w-full object-cover" />
                    </div>
                  </CardHeader>
                  <CardContent className="grid gap-2 p-4">
                    <div className="flex items-center justify-between">
                      <Badge>Technical</Badge>
                      <span className="text-sm font-medium text-green-600">Recruiting</span>
                    </div>
                    <h3 className="text-xl font-bold">Coding Club</h3>
                    <p className="text-sm text-muted-foreground">
                      Developing software projects, participating in hackathons, and learning new technologies.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>65 members</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="/images/michael-chen.jpg" alt="President" />
                        <AvatarFallback>CC</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">Led by Michael Chen</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-4 pt-0">
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                    <Button size="sm">Apply</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="cultural">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="p-0">
                    <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                      <img src="/images/drama.jpg" alt="Drama Society" className="h-full w-full object-cover" />
                    </div>
                  </CardHeader>
                  <CardContent className="grid gap-2 p-4">
                    <div className="flex items-center justify-between">
                      <Badge>Cultural</Badge>
                      <span className="text-sm font-medium text-green-600">Recruiting</span>
                    </div>
                    <h3 className="text-xl font-bold">Drama Society</h3>
                    <p className="text-sm text-muted-foreground">
                      Producing plays, musicals, and theatrical performances throughout the year.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>38 members</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="/images/sarah-johnson.jpg" alt="President" />
                        <AvatarFallback>DS</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">Led by Sarah Johnson</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-4 pt-0">
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                    <Button size="sm">Apply</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="p-0">
                    <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                      <img
                        src="/images/photography.jpg"
                        alt="Photography Club"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="grid gap-2 p-4">
                    <div className="flex items-center justify-between">
                      <Badge>Cultural</Badge>
                      <span className="text-sm font-medium text-green-600">Recruiting</span>
                    </div>
                    <h3 className="text-xl font-bold">Photography Club</h3>
                    <p className="text-sm text-muted-foreground">
                      Capturing campus life, organizing photo walks, and hosting exhibitions.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>29 members</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="/images/priya-sharma.jpg" alt="President" />
                        <AvatarFallback>PC</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">Led by Priya Sharma</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-4 pt-0">
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                    <Button size="sm">Apply</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="my-societies">
              <div className="text-center py-10">
                <h3 className="text-lg font-medium">You haven't joined any societies yet</h3>
                <p className="text-muted-foreground mt-2">Societies you join will appear here</p>
                <Button className="mt-4">
                  <Users className="mr-2 h-4 w-4" />
                  Browse Societies
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

