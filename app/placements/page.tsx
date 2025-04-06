import Link from "next/link"
import { Briefcase, ChevronLeft, Filter, Search, Upload, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function PlacementsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <ChevronLeft className="h-5 w-5" />
          <span>Back to Dashboard</span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="outline" size="sm">
            <Upload className="mr-2 h-4 w-4" />
            Update Resume
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
            <h1 className="text-2xl font-semibold tracking-tight">Placements & Career Services</h1>
            <p className="text-muted-foreground">Find job opportunities and internships</p>
          </div>

          {/* Featured Video Section */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Career Insights</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="relative group cursor-pointer rounded-lg overflow-hidden">
                <div className="aspect-video w-full">
                  <img
                    src="/images/video-thumbnail2.jpg"
                    alt="Interview Tips from Industry Experts"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-all">
                    <div className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all">
                      <Play className="h-7 w-7 text-white fill-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                    <h3 className="text-lg font-bold text-white">Interview Tips from Industry Experts</h3>
                    <p className="text-white/80 text-sm mt-1">
                      Learn how to ace your technical interviews with advice from hiring managers.
                    </p>
                    <p className="text-xs text-white/70 mt-2">18:45 • 4.2K views • 1 week ago</p>
                  </div>
                </div>
              </div>

              <div className="relative group cursor-pointer rounded-lg overflow-hidden">
                <div className="aspect-video w-full">
                  <img
                    src="/images/video-thumbnail3.jpg"
                    alt="Resume Building Workshop"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-all">
                    <div className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all">
                      <Play className="h-7 w-7 text-white fill-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                    <h3 className="text-lg font-bold text-white">Resume Building Workshop</h3>
                    <p className="text-white/80 text-sm mt-1">
                      Learn how to craft a standout resume that gets you noticed by recruiters.
                    </p>
                    <p className="text-xs text-white/70 mt-2">22:17 • 3.8K views • 2 weeks ago</p>
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
                placeholder="Search jobs and internships..."
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
              <TabsTrigger value="internships">Internships</TabsTrigger>
              <TabsTrigger value="full-time">Full-time</TabsTrigger>
              <TabsTrigger value="applications">My Applications</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="p-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/images/techcorp.jpg" alt="TechCorp" />
                        <AvatarFallback>TC</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">Software Engineer Intern</h3>
                        <p className="text-sm text-muted-foreground">TechCorp</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="grid gap-2 p-4 pt-0">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Remote</Badge>
                      <Badge variant="outline">3 months</Badge>
                      <Badge variant="outline">Paid</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Join our engineering team to develop cutting-edge software solutions. Work on real projects with
                      experienced mentors.
                    </p>
                    <div className="mt-2">
                      <h4 className="text-sm font-medium">Requirements:</h4>
                      <ul className="ml-5 mt-1 list-disc text-sm text-muted-foreground">
                        <li>Proficiency in JavaScript, React, and Node.js</li>
                        <li>Understanding of data structures and algorithms</li>
                        <li>Strong problem-solving skills</li>
                      </ul>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                      <span>Posted 2 days ago</span>
                      <span>•</span>
                      <span>Deadline: Apr 10, 2025</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-4 pt-0">
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                    <Button size="sm">Apply Now</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="p-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/images/brandx.jpg" alt="BrandX" />
                        <AvatarFallback>BX</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">Marketing Associate</h3>
                        <p className="text-sm text-muted-foreground">BrandX</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="grid gap-2 p-4 pt-0">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">On-site</Badge>
                      <Badge variant="outline">Full-time</Badge>
                      <Badge variant="outline">Entry Level</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Join our marketing team to help develop and execute marketing campaigns for our clients across
                      various industries.
                    </p>
                    <div className="mt-2">
                      <h4 className="text-sm font-medium">Requirements:</h4>
                      <ul className="ml-5 mt-1 list-disc text-sm text-muted-foreground">
                        <li>Bachelor's degree in Marketing or related field</li>
                        <li>Strong communication and analytical skills</li>
                        <li>Experience with social media platforms</li>
                      </ul>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                      <span>Posted 5 days ago</span>
                      <span>•</span>
                      <span>Deadline: Apr 15, 2025</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-4 pt-0">
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                    <Button size="sm">Apply Now</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="p-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/images/finserve.jpg" alt="FinServe" />
                        <AvatarFallback>FS</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">Data Analyst</h3>
                        <p className="text-sm text-muted-foreground">FinServe</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="grid gap-2 p-4 pt-0">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Hybrid</Badge>
                      <Badge variant="outline">Full-time</Badge>
                      <Badge variant="outline">Entry Level</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Analyze financial data, create reports, and provide insights to help drive business decisions.
                    </p>
                    <div className="mt-2">
                      <h4 className="text-sm font-medium">Requirements:</h4>
                      <ul className="ml-5 mt-1 list-disc text-sm text-muted-foreground">
                        <li>Bachelor's degree in Statistics, Mathematics, or related field</li>
                        <li>Proficiency in SQL, Excel, and data visualization tools</li>
                        <li>Strong analytical and problem-solving skills</li>
                      </ul>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                      <span>Posted 1 week ago</span>
                      <span>•</span>
                      <span>Deadline: Apr 20, 2025</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-4 pt-0">
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                    <Button size="sm">Apply Now</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="p-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/images/greendesign.jpg" alt="GreenDesign" />
                        <AvatarFallback>GD</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">UI/UX Design Intern</h3>
                        <p className="text-sm text-muted-foreground">GreenDesign</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="grid gap-2 p-4 pt-0">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Remote</Badge>
                      <Badge variant="outline">6 months</Badge>
                      <Badge variant="outline">Paid</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Work with our design team to create user-centered designs for web and mobile applications.
                    </p>
                    <div className="mt-2">
                      <h4 className="text-sm font-medium">Requirements:</h4>
                      <ul className="ml-5 mt-1 list-disc text-sm text-muted-foreground">
                        <li>Knowledge of design principles and user experience</li>
                        <li>Proficiency in Figma, Adobe XD, or similar tools</li>
                        <li>Strong portfolio showcasing design projects</li>
                      </ul>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                      <span>Posted 3 days ago</span>
                      <span>•</span>
                      <span>Deadline: Apr 12, 2025</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-4 pt-0">
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                    <Button size="sm">Apply Now</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="p-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/images/medisolutions.jpg" alt="MediSolutions" />
                        <AvatarFallback>MS</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">Research Assistant</h3>
                        <p className="text-sm text-muted-foreground">MediSolutions</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="grid gap-2 p-4 pt-0">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">On-site</Badge>
                      <Badge variant="outline">Part-time</Badge>
                      <Badge variant="outline">Paid</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Assist in conducting research, collecting and analyzing data, and preparing reports in the field
                      of healthcare.
                    </p>
                    <div className="mt-2">
                      <h4 className="text-sm font-medium">Requirements:</h4>
                      <ul className="ml-5 mt-1 list-disc text-sm text-muted-foreground">
                        <li>Currently pursuing a degree in Life Sciences or related field</li>
                        <li>Knowledge of research methodologies</li>
                        <li>Attention to detail and strong analytical skills</li>
                      </ul>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                      <span>Posted 1 week ago</span>
                      <span>•</span>
                      <span>Deadline: Apr 18, 2025</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-4 pt-0">
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                    <Button size="sm">Apply Now</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="p-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/images/educonnect.jpg" alt="EduConnect" />
                        <AvatarFallback>EC</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">Content Developer</h3>
                        <p className="text-sm text-muted-foreground">EduConnect</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="grid gap-2 p-4 pt-0">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Remote</Badge>
                      <Badge variant="outline">Full-time</Badge>
                      <Badge variant="outline">Entry Level</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Create engaging educational content for our online learning platform, including course materials,
                      quizzes, and interactive exercises.
                    </p>
                    <div className="mt-2">
                      <h4 className="text-sm font-medium">Requirements:</h4>
                      <ul className="ml-5 mt-1 list-disc text-sm text-muted-foreground">
                        <li>Bachelor's degree in Education, English, or related field</li>
                        <li>Strong writing and editing skills</li>
                        <li>Experience with educational content development</li>
                      </ul>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                      <span>Posted 4 days ago</span>
                      <span>•</span>
                      <span>Deadline: Apr 25, 2025</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-4 pt-0">
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                    <Button size="sm">Apply Now</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="internships">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="p-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/images/techcorp.jpg" alt="TechCorp" />
                        <AvatarFallback>TC</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">Software Engineer Intern</h3>
                        <p className="text-sm text-muted-foreground">TechCorp</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="grid gap-2 p-4 pt-0">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Remote</Badge>
                      <Badge variant="outline">3 months</Badge>
                      <Badge variant="outline">Paid</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Join our engineering team to develop cutting-edge software solutions. Work on real projects with
                      experienced mentors.
                    </p>
                    <div className="mt-2">
                      <h4 className="text-sm font-medium">Requirements:</h4>
                      <ul className="ml-5 mt-1 list-disc text-sm text-muted-foreground">
                        <li>Proficiency in JavaScript, React, and Node.js</li>
                        <li>Understanding of data structures and algorithms</li>
                        <li>Strong problem-solving skills</li>
                      </ul>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                      <span>Posted 2 days ago</span>
                      <span>•</span>
                      <span>Deadline: Apr 10, 2025</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-4 pt-0">
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                    <Button size="sm">Apply Now</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="p-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/images/greendesign.jpg" alt="GreenDesign" />
                        <AvatarFallback>GD</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">UI/UX Design Intern</h3>
                        <p className="text-sm text-muted-foreground">GreenDesign</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="grid gap-2 p-4 pt-0">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Remote</Badge>
                      <Badge variant="outline">6 months</Badge>
                      <Badge variant="outline">Paid</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Work with our design team to create user-centered designs for web and mobile applications.
                    </p>
                    <div className="mt-2">
                      <h4 className="text-sm font-medium">Requirements:</h4>
                      <ul className="ml-5 mt-1 list-disc text-sm text-muted-foreground">
                        <li>Knowledge of design principles and user experience</li>
                        <li>Proficiency in Figma, Adobe XD, or similar tools</li>
                        <li>Strong portfolio showcasing design projects</li>
                      </ul>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                      <span>Posted 3 days ago</span>
                      <span>•</span>
                      <span>Deadline: Apr 12, 2025</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-4 pt-0">
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                    <Button size="sm">Apply Now</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="full-time">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="p-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/images/brandx.jpg" alt="BrandX" />
                        <AvatarFallback>BX</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">Marketing Associate</h3>
                        <p className="text-sm text-muted-foreground">BrandX</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="grid gap-2 p-4 pt-0">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">On-site</Badge>
                      <Badge variant="outline">Full-time</Badge>
                      <Badge variant="outline">Entry Level</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Join our marketing team to help develop and execute marketing campaigns for our clients across
                      various industries.
                    </p>
                    <div className="mt-2">
                      <h4 className="text-sm font-medium">Requirements:</h4>
                      <ul className="ml-5 mt-1 list-disc text-sm text-muted-foreground">
                        <li>Bachelor's degree in Marketing or related field</li>
                        <li>Strong communication and analytical skills</li>
                        <li>Experience with social media platforms</li>
                      </ul>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                      <span>Posted 5 days ago</span>
                      <span>•</span>
                      <span>Deadline: Apr 15, 2025</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-4 pt-0">
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                    <Button size="sm">Apply Now</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="p-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/images/finserve.jpg" alt="FinServe" />
                        <AvatarFallback>FS</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">Data Analyst</h3>
                        <p className="text-sm text-muted-foreground">FinServe</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="grid gap-2 p-4 pt-0">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Hybrid</Badge>
                      <Badge variant="outline">Full-time</Badge>
                      <Badge variant="outline">Entry Level</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Analyze financial data, create reports, and provide insights to help drive business decisions.
                    </p>
                    <div className="mt-2">
                      <h4 className="text-sm font-medium">Requirements:</h4>
                      <ul className="ml-5 mt-1 list-disc text-sm text-muted-foreground">
                        <li>Bachelor's degree in Statistics, Mathematics, or related field</li>
                        <li>Proficiency in SQL, Excel, and data visualization tools</li>
                        <li>Strong analytical and problem-solving skills</li>
                      </ul>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                      <span>Posted 1 week ago</span>
                      <span>•</span>
                      <span>Deadline: Apr 20, 2025</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-4 pt-0">
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                    <Button size="sm">Apply Now</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="p-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/images/educonnect.jpg" alt="EduConnect" />
                        <AvatarFallback>EC</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">Content Developer</h3>
                        <p className="text-sm text-muted-foreground">EduConnect</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="grid gap-2 p-4 pt-0">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Remote</Badge>
                      <Badge variant="outline">Full-time</Badge>
                      <Badge variant="outline">Entry Level</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Create engaging educational content for our online learning platform, including course materials,
                      quizzes, and interactive exercises.
                    </p>
                    <div className="mt-2">
                      <h4 className="text-sm font-medium">Requirements:</h4>
                      <ul className="ml-5 mt-1 list-disc text-sm text-muted-foreground">
                        <li>Bachelor's degree in Education, English, or related field</li>
                        <li>Strong writing and editing skills</li>
                        <li>Experience with educational content development</li>
                      </ul>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                      <span>Posted 4 days ago</span>
                      <span>•</span>
                      <span>Deadline: Apr 25, 2025</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-4 pt-0">
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                    <Button size="sm">Apply Now</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="applications">
              <div className="text-center py-10">
                <h3 className="text-lg font-medium">You haven't applied to any positions yet</h3>
                <p className="text-muted-foreground mt-2">Your applications will appear here</p>
                <Button className="mt-4">
                  <Briefcase className="mr-2 h-4 w-4" />
                  Browse Opportunities
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

