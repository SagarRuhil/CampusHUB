"use client"

import Link from "next/link"
import { BookOpen, ChevronLeft, Code, ExternalLink, FileText, Github, Globe, Play, Star, GitBranch } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function GoResourcePage() {
  const colorClasses = {
    bg: "bg-blue-500/20",
    text: "text-blue-400",
    ring: "ring-blue-500/30",
    border: "border-blue-500/50",
    gradient: "from-blue-600 to-cyan-600",
    hover: "hover:bg-blue-700",
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920&text=Go+Background')] bg-cover bg-center opacity-10 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-0"></div>

      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b border-zinc-800 bg-black/80 backdrop-blur-md px-4 md:px-6">
        <Link
          href="/resources"
          className="flex items-center gap-2 font-semibold text-zinc-300 hover:text-white transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
          <span>Back to Resources</span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            className={`${colorClasses.border} ${colorClasses.text} hover:bg-zinc-800`}
          >
            <Github className="mr-2 h-4 w-4" />
            View on GitHub
          </Button>
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=32&width=32&text=JD" alt="User" />
            <AvatarFallback className="bg-zinc-800 text-blue-400">JD</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <main className="flex-1 p-4 md:p-6 relative z-1">
        <div className="grid gap-8">
          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm p-6 md:p-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-transparent to-transparent via-zinc-800/20 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>

            <div className="flex flex-col md:flex-row gap-6 md:items-center">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-lg ${colorClasses.bg} ${colorClasses.text} ring-1 ${colorClasses.ring}`}
                  >
                    <img
                      src="/placeholder.svg?height=48&width=48&text=Go"
                      alt="Go Logo"
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
                      Go (Golang)
                    </h1>
                    <p className="text-zinc-400">Beginner to Advanced</p>
                  </div>
                </div>

                <p className="text-lg text-zinc-300 mb-4 max-w-3xl">
                  A statically typed, compiled programming language designed at Google for simplicity, efficiency, and
                  built-in concurrency.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                    Concurrency
                  </Badge>
                  <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                    Cloud Native
                  </Badge>
                  <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                    Microservices
                  </Badge>
                  <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                    DevOps
                  </Badge>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-zinc-500">Created by</p>
                    <p className="text-zinc-300">Google</p>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">First Released</p>
                    <p className="text-zinc-300">2009</p>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">Latest Version</p>
                    <p className="text-zinc-300">Go 1.22</p>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">Typing</p>
                    <p className="text-zinc-300">Static, Strong</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button className={`bg-gradient-to-r ${colorClasses.gradient} hover:opacity-90 text-white`}>
                    Start Learning Path
                  </Button>
                </div>
              </div>

              <div className="md:w-1/3 lg:w-1/4">
                <Card className="border-zinc-800 bg-zinc-900/80 backdrop-blur-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-zinc-300">Popular Use Cases</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-zinc-400">
                        <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                        <span>Cloud Services</span>
                      </li>
                      <li className="flex items-center gap-2 text-zinc-400">
                        <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                        <span>Microservices</span>
                      </li>
                      <li className="flex items-center gap-2 text-zinc-400">
                        <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                        <span>DevOps Tools</span>
                      </li>
                      <li className="flex items-center gap-2 text-zinc-400">
                        <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                        <span>Web Services</span>
                      </li>
                      <li className="flex items-center gap-2 text-zinc-400">
                        <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                        <span>CLI Applications</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Tabs for different sections */}
          <Tabs defaultValue="roadmap" className="w-full">
            <TabsList className="grid w-full grid-cols-5 md:w-[750px] bg-zinc-800/50 text-zinc-400">
              <TabsTrigger value="roadmap" className="data-[state=active]:bg-zinc-900 data-[state=active]:text-white">
                Learning Roadmap
              </TabsTrigger>
              <TabsTrigger value="videos" className="data-[state=active]:bg-zinc-900 data-[state=active]:text-white">
                Popular Videos
              </TabsTrigger>
              <TabsTrigger value="libraries" className="data-[state=active]:bg-zinc-900 data-[state=active]:text-white">
                Libraries
              </TabsTrigger>
              <TabsTrigger
                value="frameworks"
                className="data-[state=active]:bg-zinc-900 data-[state=active]:text-white"
              >
                Frameworks
              </TabsTrigger>
              <TabsTrigger
                value="documentation"
                className="data-[state=active]:bg-zinc-900 data-[state=active]:text-white"
              >
                Documentation
              </TabsTrigger>
            </TabsList>

            {/* Roadmap Tab */}
            <TabsContent value="roadmap" className="mt-6">
              <div className="grid gap-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-zinc-100">Complete Go Learning Path</h2>
                  <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                    Download Roadmap PDF
                  </Button>
                </div>

                <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="relative border-l border-zinc-700 pl-6 pb-1">
                      <div className="space-y-8">
                        {/* Step 1 */}
                        <div className="relative">
                          <div
                            className={`absolute -left-[29px] flex h-6 w-6 items-center justify-center rounded-full ${colorClasses.bg.replace("/20", "")} text-white`}
                          >
                            <span className="text-xs font-bold">1</span>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-zinc-100">Go Fundamentals</h3>
                            <p className="mt-1 text-sm text-zinc-400">
                              Learn the core concepts of Go programming • Estimated time: 4-6 weeks
                            </p>

                            <div className="mt-3 grid md:grid-cols-2 gap-4">
                              <div>
                                <h4 className="text-sm font-medium text-zinc-300">Key Topics</h4>
                                <ul className="mt-2 space-y-1">
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">Syntax & Data Types</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">Functions & Methods</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">Error Handling</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">Structs & Interfaces</span>
                                  </li>
                                </ul>
                              </div>

                              <div>
                                <h4 className="text-sm font-medium text-zinc-300">Recommended Resources</h4>
                                <ul className="mt-2 space-y-1">
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">A Tour of Go (Official)</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">Go by Example</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">The Go Programming Language (Book)</span>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="mt-3">
                              <Button variant="link" className={`h-auto p-0 ${colorClasses.text} hover:text-white`}>
                                View Detailed Resources <ChevronLeft className="ml-1 h-3 w-3 rotate-180" />
                              </Button>
                            </div>
                          </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative">
                          <div
                            className={`absolute -left-[29px] flex h-6 w-6 items-center justify-center rounded-full ${colorClasses.bg.replace("/20", "")} text-white`}
                          >
                            <span className="text-xs font-bold">2</span>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-zinc-100">Concurrency in Go</h3>
                            <p className="mt-1 text-sm text-zinc-400">
                              Master Go's powerful concurrency model • Estimated time: 3-4 weeks
                            </p>

                            <div className="mt-3 grid md:grid-cols-2 gap-4">
                              <div>
                                <h4 className="text-sm font-medium text-zinc-300">Key Topics</h4>
                                <ul className="mt-2 space-y-1">
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">Goroutines</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">Channels</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">Select Statement</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">Sync Package</span>
                                  </li>
                                </ul>
                              </div>

                              <div>
                                <h4 className="text-sm font-medium text-zinc-300">Recommended Resources</h4>
                                <ul className="mt-2 space-y-1">
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">Concurrency in Go (Book)</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">Go Concurrency Patterns (Talk)</span>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="mt-3">
                              <Button variant="link" className={`h-auto p-0 ${colorClasses.text} hover:text-white`}>
                                View Detailed Resources <ChevronLeft className="ml-1 h-3 w-3 rotate-180" />
                              </Button>
                            </div>
                          </div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative">
                          <div
                            className={`absolute -left-[29px] flex h-6 w-6 items-center justify-center rounded-full ${colorClasses.bg.replace("/20", "")} text-white`}
                          >
                            <span className="text-xs font-bold">3</span>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-zinc-100">Web Development with Go</h3>
                            <p className="mt-1 text-sm text-zinc-400">
                              Build web applications and APIs with Go • Estimated time: 4-6 weeks
                            </p>

                            <div className="mt-3 grid md:grid-cols-2 gap-4">
                              <div>
                                <h4 className="text-sm font-medium text-zinc-300">Key Topics</h4>
                                <ul className="mt-2 space-y-1">
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">HTTP Package</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">RESTful APIs</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">Middleware</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">Database Integration</span>
                                  </li>
                                </ul>
                              </div>

                              <div>
                                <h4 className="text-sm font-medium text-zinc-300">Recommended Resources</h4>
                                <ul className="mt-2 space-y-1">
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">Building Web Applications with Go</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">Go Web Examples</span>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="mt-3">
                              <Button variant="link" className={`h-auto p-0 ${colorClasses.text} hover:text-white`}>
                                View Detailed Resources <ChevronLeft className="ml-1 h-3 w-3 rotate-180" />
                              </Button>
                            </div>
                          </div>
                        </div>

                        {/* Step 4 */}
                        <div className="relative">
                          <div className="absolute -left-[29px] flex h-6 w-6 items-center justify-center rounded-full bg-zinc-700 text-zinc-400">
                            <span className="text-xs font-bold">4</span>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-zinc-400">Cloud Native Go</h3>
                            <p className="mt-1 text-sm text-zinc-500">
                              Build microservices and cloud-native applications • Estimated time: 6-8 weeks
                            </p>

                            <div className="mt-3 grid md:grid-cols-2 gap-4">
                              <div>
                                <h4 className="text-sm font-medium text-zinc-500">Key Topics</h4>
                                <ul className="mt-2 space-y-1">
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className="h-1.5 w-1.5 rounded-full text-zinc-600"></div>
                                    <span className="text-zinc-600">Microservices Architecture</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className="h-1.5 w-1.5 rounded-full text-zinc-600"></div>
                                    <span className="text-zinc-600">Docker & Kubernetes</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className="h-1.5 w-1.5 rounded-full text-zinc-600"></div>
                                    <span className="text-zinc-600">gRPC</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className="h-1.5 w-1.5 rounded-full text-zinc-600"></div>
                                    <span className="text-zinc-600">Service Mesh</span>
                                  </li>
                                </ul>
                              </div>

                              <div>
                                <h4 className="text-sm font-medium text-zinc-500">Recommended Resources</h4>
                                <ul className="mt-2 space-y-1">
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className="h-1.5 w-1.5 rounded-full text-zinc-600"></div>
                                    <span className="text-zinc-600">Cloud Native Go (Book)</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className="h-1.5 w-1.5 rounded-full text-zinc-600"></div>
                                    <span className="text-zinc-600">Go Microservices (Course)</span>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="mt-3">
                              <Button variant="link" className="h-auto p-0 text-zinc-500 hover:text-zinc-400">
                                View Detailed Resources <ChevronLeft className="ml-1 h-3 w-3 rotate-180" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0">
                    <Button className={`w-full bg-gradient-to-r ${colorClasses.gradient} hover:opacity-90 text-white`}>
                      Start This Learning Path
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            {/* Videos Tab */}
            <TabsContent value="videos" className="mt-6">
              <div className="grid gap-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-zinc-100">Most Popular Go Videos</h2>
                  <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                    View All Videos
                  </Button>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {/* Video 1 */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden group">
                    <CardHeader className="p-0">
                      <div className="relative aspect-video w-full overflow-hidden">
                        <img
                          src="/placeholder.svg?height=225&width=400&text=Go+Crash+Course&fontsize=24&fontweight=bold&textcolor=ffffff&bgcolor=00add8"
                          alt="Go Crash Course"
                          className="h-full w-full object-cover transition-transform group-hover:scale-105 duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-lg font-bold text-white">Go Crash Course</h3>
                          <p className="text-sm text-zinc-300">1.5 hours</p>
                        </div>
                        <Button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full w-16 h-16 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="h-8 w-8" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder.svg?height=32&width=32&text=TM" alt="Traversy Media" />
                            <AvatarFallback className={`bg-zinc-800 ${colorClasses.text}`}>TM</AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium text-zinc-300">Traversy Media</span>
                        </div>
                        <span className="text-xs text-zinc-400">1.5M views</span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                        Save for Later
                      </Button>
                      <Button size="sm" className={`bg-blue-600 hover:bg-blue-700 text-white`}>
                        Watch Now
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Video 2 */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden group">
                    <CardHeader className="p-0">
                      <div className="relative aspect-video w-full overflow-hidden">
                        <img
                          src="/placeholder.svg?height=225&width=400&text=Mastering+Go+Concurrency&fontsize=24&fontweight=bold&textcolor=ffffff&bgcolor=00add8"
                          alt="Go Concurrency"
                          className="h-full w-full object-cover transition-transform group-hover:scale-105 duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-lg font-bold text-white">Mastering Go Concurrency</h3>
                          <p className="text-sm text-zinc-300">2 hours</p>
                        </div>
                        <Button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full w-16 h-16 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="h-8 w-8" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder.svg?height=32&width=32&text=JD" alt="Jon Doe" />
                            <AvatarFallback className={`bg-zinc-800 ${colorClasses.text}`}>JD</AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium text-zinc-300">Jon Doe</span>
                        </div>
                        <span className="text-xs text-zinc-400">950K views</span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                        Save for Later
                      </Button>
                      <Button size="sm" className={`bg-blue-600 hover:bg-blue-700 text-white`}>
                        Watch Now
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Video 3 */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden group">
                    <CardHeader className="p-0">
                      <div className="relative aspect-video w-full overflow-hidden">
                        <img
                          src="/placeholder.svg?height=225&width=400&text=Building+Microservices+with+Go&fontsize=20&fontweight=bold&textcolor=ffffff&bgcolor=00add8"
                          alt="Go Microservices"
                          className="h-full w-full object-cover transition-transform group-hover:scale-105 duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-lg font-bold text-white">Building Microservices with Go</h3>
                          <p className="text-sm text-zinc-300">3 hours</p>
                        </div>
                        <Button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full w-16 h-16 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="h-8 w-8" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder.svg?height=32&width=32&text=NS" alt="Nana Senpai" />
                            <AvatarFallback className={`bg-zinc-800 ${colorClasses.text}`}>NS</AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium text-zinc-300">Nana Senpai</span>
                        </div>
                        <span className="text-xs text-zinc-400">780K views</span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                        Save for Later
                      </Button>
                      <Button size="sm" className={`bg-blue-600 hover:bg-blue-700 text-white`}>
                        Watch Now
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Video 4 */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden group">
                    <CardHeader className="p-0">
                      <div className="relative aspect-video w-full overflow-hidden">
                        <img
                          src="/placeholder.svg?height=225&width=400&text=Web+Development+with+Go&fontsize=24&fontweight=bold&textcolor=ffffff&bgcolor=00add8"
                          alt="Go Web Development"
                          className="h-full w-full object-cover transition-transform group-hover:scale-105 duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-lg font-bold text-white">Web Development with Go</h3>
                          <p className="text-sm text-zinc-300">4 hours</p>
                        </div>
                        <Button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full w-16 h-16 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="h-8 w-8" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder.svg?height=32&width=32&text=TS" alt="Todd Smith" />
                            <AvatarFallback className={`bg-zinc-800 ${colorClasses.text}`}>TS</AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium text-zinc-300">Todd Smith</span>
                        </div>
                        <span className="text-xs text-zinc-400">650K views</span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                        Save for Later
                      </Button>
                      <Button size="sm" className={`bg-blue-600 hover:bg-blue-700 text-white`}>
                        Watch Now
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                <div className="mt-8">
                  <h2 className="text-xl font-semibold text-zinc-100 mb-4">Recommended Courses</h2>

                  <div className="grid gap-4 md:grid-cols-2">
                    <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                      <CardHeader className="p-4 pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg font-bold text-zinc-100">Go Masterclass</CardTitle>
                          <Badge className={`${colorClasses.bg} ${colorClasses.text}`}>Bestseller</Badge>
                        </div>
                        <CardDescription className="text-zinc-400">
                          Complete guide from beginner to advanced
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-2">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-zinc-300">40+ hours of content</span>
                            <span className="text-zinc-400">120+ lessons</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-zinc-400">
                            <div className="flex items-center gap-1">
                              <div className={`h-2 w-2 rounded-full ${colorClasses.text}`}></div>
                              <span>Certificate included</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="h-2 w-2 rounded-full bg-green-400"></div>
                              <span>Lifetime access</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-yellow-400">
                            <Star className="h-4 w-4 fill-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400" />
                            <span className="ml-1 text-sm font-medium">4.9 (2,850 ratings)</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button
                          className={`w-full bg-gradient-to-r ${colorClasses.gradient} hover:opacity-90 text-white`}
                        >
                          Enroll Now
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                      <CardHeader className="p-4 pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg font-bold text-zinc-100">Cloud Native Go</CardTitle>
                          <Badge className="bg-purple-500/20 text-purple-400">Intermediate</Badge>
                        </div>
                        <CardDescription className="text-zinc-400">Build scalable microservices</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-2">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-zinc-300">35+ hours of content</span>
                            <span className="text-zinc-400">4 projects</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-zinc-400">
                            <div className="flex items-center gap-1">
                              <div className="h-2 w-2 rounded-full bg-purple-400"></div>
                              <span>Project files included</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                              <span>Community support</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-yellow-400">
                            <Star className="h-4 w-4 fill-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 opacity-50" />
                            <span className="ml-1 text-sm font-medium">4.7 (1,620 ratings)</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white">
                          Enroll Now
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Libraries Tab */}
            <TabsContent value="libraries" className="mt-6">
              <div className="grid gap-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-zinc-100">Essential Go Libraries</h2>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                      Most Popular
                    </Button>
                    <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                      Newest
                    </Button>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {/* Gin Library */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-lg ${colorClasses.bg} ${colorClasses.text} ring-1 ${colorClasses.ring}`}
                        >
                          <Globe className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-zinc-100">Gin</CardTitle>
                          <CardDescription className="text-zinc-400">Web Framework</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <p className="text-sm text-zinc-400 mb-3">
                        A HTTP web framework with a focus on performance and productivity.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-zinc-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Github className="h-4 w-4" />
                          <span>Open Source</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4" />
                          <span>High Performance</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                        <FileText className="mr-2 h-4 w-4" />
                        Documentation
                      </Button>
                      <Button size="sm" className={`bg-blue-600 hover:bg-blue-700 text-white`}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Website
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* GORM Library */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-lg ${colorClasses.bg} ${colorClasses.text} ring-1 ${colorClasses.ring}`}
                        >
                          <Code className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-zinc-100">GORM</CardTitle>
                          <CardDescription className="text-zinc-400">ORM Library</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <p className="text-sm text-zinc-400 mb-3">
                        The fantastic ORM library for Go, aims to be developer friendly.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-zinc-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Github className="h-4 w-4" />
                          <span>Open Source</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4" />
                          <span>Most Downloaded</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                        <FileText className="mr-2 h-4 w-4" />
                        Documentation
                      </Button>
                      <Button size="sm" className={`bg-blue-600 hover:bg-blue-700 text-white`}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Website
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Cobra Library */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-lg ${colorClasses.bg} ${colorClasses.text} ring-1 ${colorClasses.ring}`}
                        >
                          <Code className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-zinc-100">Cobra</CardTitle>
                          <CardDescription className="text-zinc-400">CLI Framework</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <p className="text-sm text-zinc-400 mb-3">
                        A library for creating powerful modern CLI applications.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-zinc-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Github className="h-4 w-4" />
                          <span>Open Source</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4" />
                          <span>High Performance</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                        <FileText className="mr-2 h-4 w-4" />
                        Documentation
                      </Button>
                      <Button size="sm" className={`bg-blue-600 hover:bg-blue-700 text-white`}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Website
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                <div className="mt-4">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1" className="border-zinc-800">
                      <AccordionTrigger className="text-zinc-300 hover:text-white">
                        View More Libraries
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 pt-4">
                          {/* Gorilla Mux Library */}
                          <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                            <CardHeader className="p-4 pb-2">
                              <div className="flex items-center gap-3">
                                <div
                                  className={`flex h-10 w-10 items-center justify-center rounded-lg ${colorClasses.bg} ${colorClasses.text} ring-1 ${colorClasses.ring}`}
                                >
                                  <Code className="h-5 w-5" />
                                </div>
                                <div>
                                  <CardTitle className="text-lg font-bold text-zinc-100">Gorilla Mux</CardTitle>
                                  <CardDescription className="text-zinc-400">HTTP Router</CardDescription>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent className="p-4 pt-2">
                              <p className="text-sm text-zinc-400 mb-3">
                                A powerful HTTP router and URL matcher for building Go web servers.
                              </p>
                            </CardContent>
                            <CardFooter className="flex justify-between p-4 pt-0">
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                              >
                                Documentation
                              </Button>
                            </CardFooter>
                          </Card>

                          {/* Testify Library */}
                          <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                            <CardHeader className="p-4 pb-2">
                              <div className="flex items-center gap-3">
                                <div
                                  className={`flex h-10 w-10 items-center justify-center rounded-lg ${colorClasses.bg} ${colorClasses.text} ring-1 ${colorClasses.ring}`}
                                >
                                  <Code className="h-5 w-5" />
                                </div>
                                <div>
                                  <CardTitle className="text-lg font-bold text-zinc-100">Testify</CardTitle>
                                  <CardDescription className="text-zinc-400">Testing Toolkit</CardDescription>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent className="p-4 pt-2">
                              <p className="text-sm text-zinc-400 mb-3">
                                A toolkit with common assertions and mocks that plays nicely with the standard library.
                              </p>
                            </CardContent>
                            <CardFooter className="flex justify-between p-4 pt-0">
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                              >
                                Documentation
                              </Button>
                            </CardFooter>
                          </Card>

                          {/* Viper Library */}
                          <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                            <CardHeader className="p-4 pb-2">
                              <div className="flex items-center gap-3">
                                <div
                                  className={`flex h-10 w-10 items-center justify-center rounded-lg ${colorClasses.bg} ${colorClasses.text} ring-1 ${colorClasses.ring}`}
                                >
                                  <Code className="h-5 w-5" />
                                </div>
                                <div>
                                  <CardTitle className="text-lg font-bold text-zinc-100">Viper</CardTitle>
                                  <CardDescription className="text-zinc-400">Configuration Solution</CardDescription>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent className="p-4 pt-2">
                              <p className="text-sm text-zinc-400 mb-3">
                                A complete configuration solution for Go applications including 12-Factor apps.
                              </p>
                            </CardContent>
                            <CardFooter className="flex justify-between p-4 pt-0">
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                              >
                                Documentation
                              </Button>
                            </CardFooter>
                          </Card>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </TabsContent>

            {/* Frameworks Tab */}
            <TabsContent value="frameworks" className="mt-6">
              <div className="grid gap-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-zinc-100">Popular Go Frameworks</h2>
                  <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                    Compare Frameworks
                  </Button>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {/* Gin Framework */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-lg ${colorClasses.bg} ${colorClasses.text} ring-1 ${colorClasses.ring}`}
                        >
                          <Globe className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-zinc-100">Gin</CardTitle>
                          <CardDescription className="text-zinc-400">Web Framework</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <p className="text-sm text-zinc-400 mb-4">
                        Gin is a HTTP web framework written in Go. It features a martini-like API with performance that
                        is up to 40 times faster thanks to httprouter.
                      </p>

                      <div className="space-y-3">
                        <div>
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-zinc-400">Performance</span>
                            <span className="text-zinc-300">Excellent</span>
                          </div>
                          <Progress value={95} className="h-1.5 bg-zinc-700">
                            <div className={`h-full bg-gradient-to-r ${colorClasses.gradient} rounded-full`} />
                          </Progress>
                        </div>

                        <div>
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-zinc-400">Learning Curve</span>
                            <span className="text-zinc-300">Easy</span>
                          </div>
                          <Progress value={85} className="h-1.5 bg-zinc-700">
                            <div className={`h-full bg-gradient-to-r ${colorClasses.gradient} rounded-full`} />
                          </Progress>
                        </div>

                        <div>
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-zinc-400">Community</span>
                            <span className="text-zinc-300">Strong</span>
                          </div>
                          <Progress value={90} className="h-1.5 bg-zinc-700">
                            <div className={`h-full bg-gradient-to-r ${colorClasses.gradient} rounded-full`} />
                          </Progress>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                        <FileText className="mr-2 h-4 w-4" />
                        Documentation
                      </Button>
                      <Button size="sm" className={`bg-blue-600 hover:bg-blue-700 text-white`}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Echo Framework */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20 text-green-400 ring-1 ring-green-500/30">
                          <Globe className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-zinc-100">Echo</CardTitle>
                          <CardDescription className="text-zinc-400">Web Framework</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <p className="text-sm text-zinc-400 mb-4">
                        Echo is a high performance, extensible, minimalist web framework for Go.
                      </p>

                      <div className="space-y-3">
                        <div>
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-zinc-400">Performance</span>
                            <span className="text-zinc-300">Excellent</span>
                          </div>
                          <Progress value={95} className="h-1.5 bg-zinc-700">
                            <div className="h-full bg-gradient-to-r from-green-600 to-emerald-600 rounded-full" />
                          </Progress>
                        </div>

                        <div>
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-zinc-400">Learning Curve</span>
                            <span className="text-zinc-300">Easy</span>
                          </div>
                          <Progress value={80} className="h-1.5 bg-zinc-700">
                            <div className="h-full bg-gradient-to-r from-green-600 to-emerald-600 rounded-full" />
                          </Progress>
                        </div>

                        <div>
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-zinc-400">Community</span>
                            <span className="text-zinc-300">Strong</span>
                          </div>
                          <Progress value={85} className="h-1.5 bg-zinc-700">
                            <div className="h-full bg-gradient-to-r from-green-600 to-emerald-600 rounded-full" />
                          </Progress>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                        <FileText className="mr-2 h-4 w-4" />
                        Documentation
                      </Button>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Fiber Framework */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20 text-purple-400 ring-1 ring-purple-500/30">
                          <Globe className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-zinc-100">Fiber</CardTitle>
                          <CardDescription className="text-zinc-400">Web Framework</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <p className="text-sm text-zinc-400 mb-4">
                        Fiber is an Express-inspired web framework built on top of Fasthttp, the fastest HTTP engine for
                        Go.
                      </p>

                      <div className="space-y-3">
                        <div>
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-zinc-400">Performance</span>
                            <span className="text-zinc-300">Excellent</span>
                          </div>
                          <Progress value={98} className="h-1.5 bg-zinc-700">
                            <div className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full" />
                          </Progress>
                        </div>

                        <div>
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-zinc-400">Learning Curve</span>
                            <span className="text-zinc-300">Easy</span>
                          </div>
                          <Progress value={85} className="h-1.5 bg-zinc-700">
                            <div className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full" />
                          </Progress>
                        </div>

                        <div>
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-zinc-400">Community</span>
                            <span className="text-zinc-300">Growing Rapidly</span>
                          </div>
                          <Progress value={80} className="h-1.5 bg-zinc-700">
                            <div className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full" />
                          </Progress>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                        <FileText className="mr-2 h-4 w-4" />
                        Documentation
                      </Button>
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Buffalo Framework */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-500/20 text-yellow-400 ring-1 ring-yellow-500/30">
                          <Globe className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-zinc-100">Buffalo</CardTitle>
                          <CardDescription className="text-zinc-400">Full-Stack Web Framework</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <p className="text-sm text-zinc-400 mb-4">
                        Buffalo is a Go web development eco-system that helps you to build new web applications quickly.
                      </p>

                      <div className="space-y-3">
                        <div>
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-zinc-400">Performance</span>
                            <span className="text-zinc-300">Good</span>
                          </div>
                          <Progress value={80} className="h-1.5 bg-zinc-700">
                            <div className="h-full bg-gradient-to-r from-yellow-600 to-amber-600 rounded-full" />
                          </Progress>
                        </div>

                        <div>
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-zinc-400">Learning Curve</span>
                            <span className="text-zinc-300">Moderate</span>
                          </div>
                          <Progress value={70} className="h-1.5 bg-zinc-700">
                            <div className="h-full bg-gradient-to-r from-yellow-600 to-amber-600 rounded-full" />
                          </Progress>
                        </div>

                        <div>
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-zinc-400">Community</span>
                            <span className="text-zinc-300">Moderate</span>
                          </div>
                          <Progress value={65} className="h-1.5 bg-zinc-700">
                            <div className="h-full bg-gradient-to-r from-yellow-600 to-amber-600 rounded-full" />
                          </Progress>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                        <FileText className="mr-2 h-4 w-4" />
                        Documentation
                      </Button>
                      <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700 text-white">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                <div className="mt-8">
                  <h2 className="text-xl font-semibold text-zinc-100 mb-4">Framework Comparison</h2>

                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-zinc-800">
                            <th className="text-left p-4 text-zinc-300 font-medium">Framework</th>
                            <th className="text-left p-4 text-zinc-300 font-medium">Type</th>
                            <th className="text-left p-4 text-zinc-300 font-medium">Performance</th>
                            <th className="text-left p-4 text-zinc-300 font-medium">Learning Curve</th>
                            <th className="text-left p-4 text-zinc-300 font-medium">Best For</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-zinc-800">
                            <td className="p-4 text-zinc-100">Gin</td>
                            <td className="p-4 text-zinc-400">Web Framework</td>
                            <td className="p-4 text-zinc-400">Excellent</td>
                            <td className="p-4 text-zinc-400">Easy</td>
                            <td className="p-4 text-zinc-400">APIs and microservices</td>
                          </tr>
                          <tr className="border-b border-zinc-800">
                            <td className="p-4 text-zinc-100">Echo</td>
                            <td className="p-4 text-zinc-400">Web Framework</td>
                            <td className="p-4 text-zinc-400">Excellent</td>
                            <td className="p-4 text-zinc-400">Easy</td>
                            <td className="p-4 text-zinc-400">Minimalist applications</td>
                          </tr>
                          <tr className="border-b border-zinc-800">
                            <td className="p-4 text-zinc-100">Fiber</td>
                            <td className="p-4 text-zinc-400">Web Framework</td>
                            <td className="p-4 text-zinc-400">Excellent</td>
                            <td className="p-4 text-zinc-400">Easy</td>
                            <td className="p-4 text-zinc-400">Express.js developers</td>
                          </tr>
                          <tr>
                            <td className="p-4 text-zinc-100">Buffalo</td>
                            <td className="p-4 text-zinc-400">Full-Stack</td>
                            <td className="p-4 text-zinc-400">Good</td>
                            <td className="p-4 text-zinc-400">Moderate</td>
                            <td className="p-4 text-zinc-400">Full-stack applications</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Documentation Tab */}
            <TabsContent value="documentation" className="mt-6">
              <div className="grid gap-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-zinc-100">Official Go Documentation</h2>
                  <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                    <BookOpen className="mr-2 h-4 w-4" />
                    View All Resources
                  </Button>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {/* Doc 1 */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden group">
                    <CardHeader className="p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-lg ${colorClasses.bg} ${colorClasses.text} ring-1 ${colorClasses.ring}`}
                        >
                          <BookOpen className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-zinc-100">A Tour of Go</CardTitle>
                        </div>
                      </div>
                      <CardDescription className="text-zinc-400">
                        Interactive introduction to Go - learn the basics
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm text-zinc-400 mb-3">
                        This tour covers the most important features of the Go programming language through a series of
                        interactive examples you can modify and run directly in your browser.
                      </p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button
                        className={`w-full bg-gradient-to-r ${colorClasses.gradient} hover:opacity-90 text-white`}
                        onClick={() => window.open("https://go.dev/tour/", "_blank", "noopener,noreferrer")}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Open Documentation
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Doc 2 */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden group">
                    <CardHeader className="p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-lg ${colorClasses.bg} ${colorClasses.text} ring-1 ${colorClasses.ring}`}
                        >
                          <FileText className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-zinc-100">Go Reference Documentation</CardTitle>
                        </div>
                      </div>
                      <CardDescription className="text-zinc-400">
                        Official Go language documentation and references
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm text-zinc-400 mb-3">
                        The official Go documentation provides comprehensive information about the language, standard
                        library, and tools.
                      </p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button
                        className={`w-full bg-gradient-to-r ${colorClasses.gradient} hover:opacity-90 text-white`}
                        onClick={() => window.open("https://go.dev/doc/", "_blank", "noopener,noreferrer")}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Open Documentation
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Doc 3 */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden group">
                    <CardHeader className="p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-lg ${colorClasses.bg} ${colorClasses.text} ring-1 ${colorClasses.ring}`}
                        >
                          <Code className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-zinc-100">Go by Example</CardTitle>
                        </div>
                      </div>
                      <CardDescription className="text-zinc-400">
                        Annotated example programs with explanations
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm text-zinc-400 mb-3">
                        Go by Example is a hands-on introduction to Go using annotated example programs. It covers the
                        basics and provides practical examples of Go's features.
                      </p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button
                        className={`w-full bg-gradient-to-r ${colorClasses.gradient} hover:opacity-90 text-white`}
                        onClick={() => window.open("https://gobyexample.com/", "_blank", "noopener,noreferrer")}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Open Documentation
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Doc 4 */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden group">
                    <CardHeader className="p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-lg ${colorClasses.bg} ${colorClasses.text} ring-1 ${colorClasses.ring}`}
                        >
                          <Globe className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-zinc-100">W3Schools Go Tutorial</CardTitle>
                        </div>
                      </div>
                      <CardDescription className="text-zinc-400">
                        Beginner-friendly Go programming tutorial
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm text-zinc-400 mb-3">
                        W3Schools provides a comprehensive tutorial for learning Go programming, with examples and
                        exercises to help you master the language.
                      </p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button
                        className={`w-full bg-gradient-to-r ${colorClasses.gradient} hover:opacity-90 text-white`}
                        onClick={() => window.open("https://www.w3schools.com/go/", "_blank", "noopener,noreferrer")}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Open Tutorial
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Doc 5 */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden group">
                    <CardHeader className="p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-lg ${colorClasses.bg} ${colorClasses.text} ring-1 ${colorClasses.ring}`}
                        >
                          <GitBranch className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-zinc-100">
                            Making a RESTful JSON API in Go
                          </CardTitle>
                        </div>
                      </div>
                      <CardDescription className="text-zinc-400">
                        Tutorial on building REST APIs with Go
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm text-zinc-400 mb-3">
                        This tutorial guides you through the process of creating a RESTful JSON API using Go, covering
                        routing, middleware, and best practices.
                      </p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button
                        className={`w-full bg-gradient-to-r ${colorClasses.gradient} hover:opacity-90 text-white`}
                        onClick={() =>
                          window.open(
                            "https://thenewstack.io/make-a-restful-json-api-go/",
                            "_blank",
                            "noopener,noreferrer",
                          )
                        }
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Read Tutorial
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Doc 6 */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden group">
                    <CardHeader className="p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-lg ${colorClasses.bg} ${colorClasses.text} ring-1 ${colorClasses.ring}`}
                        >
                          <FileText className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-zinc-100">
                            Go, the Programming Language of the Cloud
                          </CardTitle>
                        </div>
                      </div>
                      <CardDescription className="text-zinc-400">
                        Article on Go's role in cloud computing
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm text-zinc-400 mb-3">
                        This article explores why Go has become the programming language of choice for cloud
                        infrastructure and microservices.
                      </p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button
                        className={`w-full bg-gradient-to-r ${colorClasses.gradient} hover:opacity-90 text-white`}
                        onClick={() =>
                          window.open(
                            "https://thenewstack.io/go-the-programming-language-of-the-cloud/",
                            "_blank",
                            "noopener,noreferrer",
                          )
                        }
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Read Article
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

