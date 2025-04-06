"use client"

import Link from "next/link"
import { ChevronLeft, Github, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function JavaResourcePage() {
  const colorClasses = {
    bg: "bg-orange-500/20",
    text: "text-orange-400",
    ring: "ring-orange-500/30",
    border: "border-orange-500/50",
    gradient: "from-orange-600 to-red-600",
    hover: "hover:bg-orange-700",
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920&text=Java+Background')] bg-cover bg-center opacity-10 z-0"></div>
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
            <AvatarFallback className="bg-zinc-800 text-orange-400">JD</AvatarFallback>
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
                      src="/placeholder.svg?height=48&width=48&text=Java&fontsize=14&fontweight=bold&textcolor=ffffff&bgcolor=f89820"
                      alt="Java Logo"
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
                      Java
                    </h1>
                    <p className="text-zinc-400">Beginner to Advanced</p>
                  </div>
                </div>

                <p className="text-lg text-zinc-300 mb-4 max-w-3xl">
                  A class-based, object-oriented programming language designed for portability and cross-platform
                  compatibility, widely used for enterprise applications, Android development, and more.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                    Object-Oriented
                  </Badge>
                  <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                    Cross-Platform
                  </Badge>
                  <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                    Enterprise
                  </Badge>
                  <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                    Android
                  </Badge>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-zinc-500">Created by</p>
                    <p className="text-zinc-300">James Gosling, Sun Microsystems</p>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">First Released</p>
                    <p className="text-zinc-300">1995</p>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">Latest Version</p>
                    <p className="text-zinc-300">Java 21</p>
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
                        <span>Enterprise Applications</span>
                      </li>
                      <li className="flex items-center gap-2 text-zinc-400">
                        <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                        <span>Android Development</span>
                      </li>
                      <li className="flex items-center gap-2 text-zinc-400">
                        <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                        <span>Web Applications</span>
                      </li>
                      <li className="flex items-center gap-2 text-zinc-400">
                        <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                        <span>Big Data & Analytics</span>
                      </li>
                      <li className="flex items-center gap-2 text-zinc-400">
                        <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                        <span>Cloud Applications</span>
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
                  <h2 className="text-2xl font-semibold text-zinc-100">Complete Java Learning Path</h2>
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
                            <h3 className="text-lg font-semibold text-zinc-100">Java Fundamentals</h3>
                            <p className="mt-1 text-sm text-zinc-400">
                              Learn the core concepts of Java programming • Estimated time: 6-8 weeks
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
                                    <span className="text-zinc-400">Control Flow & Methods</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">Object-Oriented Programming</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">Exception Handling</span>
                                  </li>
                                </ul>
                              </div>

                              <div>
                                <h4 className="text-sm font-medium text-zinc-300">Recommended Resources</h4>
                                <ul className="mt-2 space-y-1">
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">Oracle Java Tutorials</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">Head First Java (Book)</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">Effective Java (Book)</span>
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
                            <h3 className="text-lg font-semibold text-zinc-100">Java Advanced Concepts</h3>
                            <p className="mt-1 text-sm text-zinc-400">
                              Master advanced Java concepts • Estimated time: 4-6 weeks
                            </p>

                            <div className="mt-3 grid md:grid-cols-2 gap-4">
                              <div>
                                <h4 className="text-sm font-medium text-zinc-300">Key Topics</h4>
                                <ul className="mt-2 space-y-1">
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">Collections Framework</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">Generics</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">Multithreading & Concurrency</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">File I/O & Serialization</span>
                                  </li>
                                </ul>
                              </div>

                              <div>
                                <h4 className="text-sm font-medium text-zinc-300">Recommended Resources</h4>
                                <ul className="mt-2 space-y-1">
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">Java Concurrency in Practice (Book)</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">Baeldung Tutorials</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">Java Design Patterns</span>
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
                            <h3 className="text-lg font-semibold text-zinc-100">Java Frameworks & Libraries</h3>
                            <p className="mt-1 text-sm text-zinc-400">
                              Learn popular Java frameworks • Estimated time: 6-8 weeks
                            </p>

                            <div className="mt-3 grid md:grid-cols-2 gap-4">
                              <div>
                                <h4 className="text-sm font-medium text-zinc-300">Key Topics</h4>
                                <ul className="mt-2 space-y-1">
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">Spring Framework</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">Hibernate ORM</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">JUnit & Testing</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">Maven/Gradle</span>
                                  </li>
                                </ul>
                              </div>

                              <div>
                                <h4 className="text-sm font-medium text-zinc-300">Recommended Resources</h4>
                                <ul className="mt-2 space-y-1">
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">Spring Documentation</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">Hibernate Documentation</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">Spring Boot in Action (Book)</span>
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
                            <h3 className="text-lg font-semibold text-zinc-400">Java Specializations</h3>
                            <p className="mt-1 text-sm text-zinc-500">
                              Choose a specialization path • Estimated time: 8-12 weeks
                            </p>

                            <div className="mt-3 grid md:grid-cols-2 gap-4">
                              <div>
                                <h4 className="text-sm font-medium text-zinc-500">Key Paths</h4>
                                <ul className="mt-2 space-y-1">
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className="h-1.5 w-1.5 rounded-full text-zinc-600"></div>
                                    <span className="text-zinc-600">Enterprise Java (Jakarta EE)</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className="h-1.5 w-1.5 rounded-full text-zinc-600"></div>
                                    <span className="text-zinc-600">Android Development</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className="h-1.5 w-1.5 rounded-full text-zinc-600"></div>
                                    <span className="text-zinc-600">Microservices Architecture</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className="h-1.5 w-1.5 rounded-full text-zinc-600"></div>
                                    <span className="text-zinc-600">Big Data & Cloud</span>
                                  </li>
                                </ul>
                              </div>

                              <div>
                                <h4 className="text-sm font-medium text-zinc-500">Recommended Resources</h4>
                                <ul className="mt-2 space-y-1">
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className="h-1.5 w-1.5 rounded-full text-zinc-600"></div>
                                    <span className="text-zinc-600">Jakarta EE Documentation</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className="h-1.5 w-1.5 rounded-full text-zinc-600"></div>
                                    <span className="text-zinc-600">Android Developer Documentation</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className="h-1.5 w-1.5 rounded-full text-zinc-600"></div>
                                    <span className="text-zinc-600">Spring Cloud Documentation</span>
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
                  <h2 className="text-2xl font-semibold text-zinc-100">Most Popular Java Videos</h2>
                  <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                    View All Videos
                  </Button>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {/* Video 1 */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm"></Card>
                </div>
                <div className="mt-8">
                  <h2 className="text-xl font-semibold text-zinc-100 mb-4">Recommended Courses</h2>

                  <div className="grid gap-4 md:grid-cols-2">
                    <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                      <CardHeader className="p-4 pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg font-bold text-zinc-100">
                            Java Programming Masterclass
                          </CardTitle>
                          <Badge className={`${colorClasses.bg} ${colorClasses.text}`}>Udemy</Badge>
                        </div>
                        <CardDescription className="text-zinc-400">
                          Learn Java In This Course And Become a Computer Programmer. Obtain valuable Core Java Skills
                          And Java Certification
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-2">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-zinc-300">80+ hours of content</span>
                            <span className="text-zinc-400">300+ coding exercises</span>
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
                            <Star className="h-4 w-4 fill-yellow-400 opacity-80" />
                            <span className="ml-1 text-sm font-medium">4.6 (175,000+ ratings)</span>
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
                          <CardTitle className="text-lg font-bold text-zinc-100">
                            Spring Framework Specialization
                          </CardTitle>
                          <Badge className="bg-purple-500/20 text-purple-400">Coursera</Badge>
                        </div>
                        <CardDescription className="text-zinc-400">
                          By LearnQuest - Master Spring Boot, Spring MVC, and Spring Cloud
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-2">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-zinc-300">40+ hours of content</span>
                            <span className="text-zinc-400">6 real-world projects</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-zinc-400">
                            <div className="flex items-center gap-1">
                              <div className="h-2 w-2 rounded-full bg-purple-400"></div>
                              <span>Professional certificate</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                              <span>Financial aid available</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-yellow-400">
                            <Star className="h-4 w-4 fill-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 opacity-50" />
                            <span className="ml-1 text-sm font-medium">4.5 (3,200+ ratings)</span>
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
          </Tabs>
        </div>
      </main>
    </div>
  )
}

