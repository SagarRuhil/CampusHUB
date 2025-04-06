"use client"

import Link from "next/link"
import { ChevronLeft, Code, FileText, GitBranch, Github, Globe, Star, BookOpen, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CppResourcePage() {
  const colorClasses = {
    bg: "bg-cyan-500/20",
    text: "text-cyan-400",
    ring: "ring-cyan-500/30",
    border: "border-cyan-500/50",
    gradient: "from-cyan-600 to-blue-600",
    hover: "hover:bg-cyan-700",
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920&text=Tech+Grid+Background')] bg-cover bg-center opacity-10 z-0"></div>
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
                    <Code className="h-6 w-6" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
                      C++
                    </h1>
                    <p className="text-zinc-400">Beginner to Advanced</p>
                  </div>
                </div>

                <p className="text-lg text-zinc-300 mb-4 max-w-3xl">
                  A powerful, high-performance language used for systems programming, game development, embedded
                  systems, and performance-critical applications.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                    Object-Oriented
                  </Badge>
                  <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                    Procedural
                  </Badge>
                  <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                    Generic
                  </Badge>
                  <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                    Low-level
                  </Badge>
                  <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                    High-performance
                  </Badge>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-zinc-500">Created by</p>
                    <p className="text-zinc-300">Bjarne Stroustrup, Bell Labs</p>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">First Released</p>
                    <p className="text-zinc-300">1985</p>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">Latest Version</p>
                    <p className="text-zinc-300">C++23</p>
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
                        <span>Game Development</span>
                      </li>
                      <li className="flex items-center gap-2 text-zinc-400">
                        <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                        <span>Systems Programming</span>
                      </li>
                      <li className="flex items-center gap-2 text-zinc-400">
                        <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                        <span>Embedded Systems</span>
                      </li>
                      <li className="flex items-center gap-2 text-zinc-400">
                        <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                        <span>High-Performance Applications</span>
                      </li>
                      <li className="flex items-center gap-2 text-zinc-400">
                        <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                        <span>Real-time Systems</span>
                      </li>
                      <li className="flex items-center gap-2 text-zinc-400">
                        <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                        <span>Desktop Applications</span>
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
                  <h2 className="text-2xl font-semibold text-zinc-100">C++ Learning Roadmap</h2>
                  <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                    Download Roadmap PDF
                  </Button>
                </div>

                <div className="grid gap-6">
                  {/* Introduction Section */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-xl text-zinc-100">Getting Started with C++</CardTitle>
                      <CardDescription className="text-zinc-400">
                        Begin your C++ journey with these fundamental concepts
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-lg border border-zinc-800 p-4">
                        <h3 className="text-lg font-medium text-zinc-100 mb-2">1. C++ Basics</h3>
                        <p className="text-zinc-400 mb-3">Master the core syntax and concepts of C++</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <div className={`h-5 w-5 rounded-full ${colorClasses.bg} flex items-center justify-center mt-0.5`}>
                              <span className="text-xs font-bold">1</span>
                            </div>
                            <div>
                              <p className="text-zinc-300 font-medium">Syntax & Data Types</p>
                              <p className="text-zinc-500 text-sm">Variables, data types, operators, expressions</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className={`h-5 w-5 rounded-full ${colorClasses.bg} flex items-center justify-center mt-0.5`}>
                              <span className="text-xs font-bold">2</span>
                            </div>
                            <div>
                              <p className="text-zinc-300 font-medium">Control Flow</p>
                              <p className="text-zinc-500 text-sm">Conditionals, loops, switch statements</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className={`h-5 w-5 rounded-full ${colorClasses.bg} flex items-center justify-center mt-0.5`}>
                              <span className="text-xs font-bold">3</span>
                            </div>
                            <div>
                              <p className="text-zinc-300 font-medium">Functions</p>
                              <p className="text-zinc-500 text-sm">Function definitions, parameters, return values, recursion</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className={`h-5 w-5 rounded-full ${colorClasses.bg} flex items-center justify-center mt-0.5`}>
                              <span className="text-xs font-bold">4</span>
                            </div>
                            <div>
                              <p className="text-zinc-300 font-medium">Pointers and Memory Management</p>
                              <p className="text-zinc-500 text-sm">Pointers, dynamic memory allocation, smart pointers</p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="rounded-lg border border-zinc-800 p-4">
                        <h3 className="text-lg font-medium text-zinc-100 mb-2">2. C++ Programming Concepts</h3>
                        <p className="text-zinc-400 mb-3">Learn essential programming concepts in C++</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <div className={`h-5 w-5 rounded-full ${colorClasses.bg} flex items-center justify-center mt-0.5`}>
                              <span className="text-xs font-bold">1</span>
                            </div>
                            <div>
                              <p className="text-zinc-300 font-medium">Arrays and Strings</p>
                              <p className="text-zinc-500 text-sm">Working with arrays, C-style strings, std::string</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className={`h-5 w-5 rounded-full ${colorClasses.bg} flex items-center justify-center mt-0.5`}>
                              <span className="text-xs font-bold">2</span>
                            </div>
                            <div>
                              <p className="text-zinc-300 font-medium">File I/O</p>
                              <p className="text-zinc-500 text-sm">Reading and writing files, file streams</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className={`h-5 w-5 rounded-full ${colorClasses.bg} flex items-center justify-center mt-0.5`}>
                              <span className="text-xs font-bold">3</span>
                            </div>
                            <div>
                              <p className="text-zinc-300 font-medium">Exception Handling</p>
                              <p className="text-zinc-500 text-sm">Try/catch blocks, throwing exceptions</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Intermediate Section */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-xl text-zinc-100">Intermediate C++</CardTitle>
                      <CardDescription className="text-zinc-400">
                        Deepen your C++ knowledge with these advanced concepts
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-lg border border-zinc-800 p-4">
                        <h3 className="text-lg font-medium text-zinc-100 mb-2">3. Object-Oriented Programming</h3>
                        <p className="text-zinc-400 mb-3">Master object-oriented programming in C++</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <div className={`h-5 w-5 rounded-full ${colorClasses.bg} flex items-center justify-center mt-0.5`}>
                              <span className="text-xs font-bold">1</span>
                            </div>
                            <div>
                              <p className="text-zinc-300 font-medium">Classes & Objects</p>
                              <p className="text-zinc-500 text-sm">Defining classes, creating objects, member functions, data members</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className={`h-5 w-5 rounded-full ${colorClasses.bg} flex items-center justify-center mt-0.5`}>
                              <span className="text-xs font-bold">2</span>
                            </div>
                            <div>
                              <p className="text-zinc-300 font-medium">Inheritance & Polymorphism</p>
                              <p className="text-zinc-500 text-sm">Base and derived classes, virtual functions, abstract classes</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className={`h-5 w-5 rounded-full ${colorClasses.bg} flex items-center justify-center mt-0.5`}>
                              <span className="text-xs font-bold">3</span>
                            </div>
                            <div>
                              <p className="text-zinc-300 font-medium">Operator Overloading</p>
                              <p className="text-zinc-500 text-sm">Overloading operators for user-defined types</p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="rounded-lg border border-zinc-800 p-4">
                        <h3 className="text-lg font-medium text-zinc-100 mb-2">4. Templates and the STL</h3>
                        <p className="text-zinc-400 mb-3">Learn about generic programming and the Standard Template Library</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <div className={`h-5 w-5 rounded-full ${colorClasses.bg} flex items-center justify-center mt-0.5`}>
                              <span className="text-xs font-bold">1</span>
                            </div>
                            <div>
                              <p className="text-zinc-300 font-medium">Templates</p>
                              <p className="text-zinc-500 text-sm">Function and class templates, template metaprogramming</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className={`h-5 w-5 rounded-full ${colorClasses.bg} flex items-center justify-center mt-0.5`}>
                              <span className="text-xs font-bold">2</span>
                            </div>
                            <div>
                              <p className="text-zinc-300 font-medium">Containers</p>
                              <p className="text-zinc-500 text-sm">Vectors, lists, maps, sets, and other containers</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className={`h-5 w-5 rounded-full ${colorClasses.bg} flex items-center justify-center mt-0.5`}>
                              <span className="text-xs font-bold">3</span>
                            </div>
                            <div>
                              <p className="text-zinc-300 font-medium">Algorithms</p>
                              <p className="text-zinc-500 text-sm">Sorting, searching, transforming data</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Specializations Section */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-xl text-zinc-100">C++ Specializations</CardTitle>
                      <CardDescription className="text-zinc-400">
                        Choose a specialization path to focus your C++ skills
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-lg border border-zinc-800 p-4">
                        <h3 className="text-lg font-medium text-zinc-100 mb-2">5. Game Development</h3>
                        <p className="text-zinc-400 mb-3">Develop games using C++ and popular game engines</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <div className={`h-5 w-5 rounded-full ${colorClasses.bg} flex items-center justify-center mt-0.5`}>
                              <span className="text-xs font-bold">1</span>
                            </div>
                            <div>
                              <p className="text-zinc-300 font-medium">Game Engines</p>
                              <p className="text-zinc-500 text-sm">Unreal Engine, Unity Engine, CryEngine</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className={`h-5 w-5 rounded-full ${colorClasses.bg} flex items-center justify-center mt-0.5`}>
                              <span className="text-xs font-bold">2</span>
                            </div>
                            <div>
                              <p className="text-zinc-300 font-medium">Graphics Programming</p>
                              <p className="text-zinc-500 text-sm">OpenGL, DirectX, shader programming</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className={`h-5 w-5 rounded-full ${colorClasses.bg} flex items-center justify-center mt-0.5`}>
                              <span className="text-xs font-bold">3</span>
                            </div>
                            <div>
                              <p className="text-zinc-300 font-medium">Game Physics</p>
                              <p className="text-zinc-500 text-sm">Collision detection, physics simulation</p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="rounded-lg border border-zinc-800 p-4">
                        <h3 className="text-lg font-medium text-zinc-100 mb-2">6. Systems Programming</h3>
                        <p className="text-zinc-400 mb-3">Build low-level systems and applications</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <div className={`h-5 w-5 rounded-full ${colorClasses.bg} flex items-center justify-center mt-0.5`}>
                              <span className="text-xs font-bold">1</span>
                            </div>
                            <div>
                              <p className="text-zinc-300 font-medium">Operating System Concepts</p>
                              <p className="text-zinc-500 text-sm">Processes, threads, memory management</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className={`h-5 w-5 rounded-full ${colorClasses.bg} flex items-center justify-center mt-0.5`}>
                              <span className="text-xs font-bold">2</span>
                            </div>
                            <div>
                              <p className="text-zinc-300 font-medium">Network Programming</p>
                              <p className="text-zinc-500 text-sm">Sockets, TCP/IP, HTTP</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className={`h-5 w-5 rounded-full ${colorClasses.bg} flex items-center justify-center mt-0.5`}>
                              <span className="text-xs font-bold">3</span>
                            </div>
                            <div>
                              <p className="text-zinc-300 font-medium">Embedded Systems</p>
                              <p className="text-zinc-500 text-sm">Programming for embedded devices, microcontrollers</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Career Roadmap Section */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-xl text-zinc-100">C++ Career Paths</CardTitle>
                      <CardDescription className="text-zinc-400">
                        Explore potential career paths for C++ developers
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-lg border border-zinc-800 p-4">
                        <h3 className="text-lg font-medium text-zinc-100 mb-2">Game Developer</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-zinc-400 mb-3">Create games for PC, consoles, and mobile devices</p>
                            <h4 className="text-zinc-300 font-medium mb-2">Key Skills:</h4>
                            <ul className="space-y-1">
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">C++ Programming</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">Game Engine Knowledge</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">Graphics Programming</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">Game Physics</span>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-zinc-300 font-medium mb-2">Tools & Technologies:</h4>
                            <ul className="space-y-1">
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">Unreal Engine, Unity</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">Visual Studio, Rider</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">Git, Perforce</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">3D modeling software (e.g., Blender, Maya)</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border border-zinc-800 p-4">
                        <h3 className="text-lg font-medium text-zinc-100 mb-2">Systems Programmer</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-zinc-400 mb-3">Develop low-level software components and operating systems</p>
                            <h4 className="text-zinc-300 font-medium mb-2">Key Skills:</h4>
                            <ul className="space-y-1">
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">C++ Programming</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">Operating System Internals</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">Computer Architecture</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">Assembly Language</span>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-zinc-300 font-medium mb-2">Tools & Technologies:</h4>
                            <ul className="space-y-1">
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">GDB, Valgrind</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">Kernel debuggers</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">Build systems (e.g., CMake, Make)</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">Version control (e.g., Git)</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Videos Tab */}
            <TabsContent value="videos" className="mt-6">
              <div className="grid gap-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-zinc-100">Most Popular C++ Videos</h2>
                  <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                    View All Videos
                  </Button>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {/* Video 1 */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden group">
                    
                  </Card>
                </div>
                <div className="mt-8">
                  <h2 className="text-xl font-semibold text-zinc-100 mb-4">Recommended Courses</h2>

                  <div className="grid gap-4 md:grid-cols-2">
                    <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                      <CardHeader className="p-4 pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg font-bold text-zinc-100">Unreal Engine C++ Developer</CardTitle>
                          <Badge className={`${colorClasses.bg} ${colorClasses.text}`}>Udemy</Badge>
                        </div>
                        <CardDescription className="text-zinc-400">
                          Learn C++ and Unreal Engine 5 to build your own games.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-2">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-zinc-300">32+ hours of content</span>
                            <span className="text-zinc-400">500+ lessons</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-zinc-400">
                            <div className={`h-2 w-2 rounded-full ${colorClasses.text}`}></div>
                            <span>Certificate included</span>
                          </div>
                          <div className="flex items-center gap-1 text-yellow-400">
                            <Star className="h-4 w-4 fill-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 opacity-80" />
                            <span className="ml-1 text-sm font-medium">4.7 (95,000+ ratings)</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button
                          className={`w-full bg-gradient-to-r ${colorClasses.gradient} hover:opacity-90 text-white`}
                          onClick={() => window.open("https://www.udemy.com/course/unreal-engine-5-c-developer-learn-c-as-you-create-games/", "_blank", "noopener,noreferrer")}
                        >
                          Enroll Now
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                      <CardHeader className="p-4 pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg font-bold text-zinc-100">C++ Programming</CardTitle>
                          <Badge className="bg-purple-500/20 text-purple-400">Coursera</Badge>
                        </div>
                        <CardDescription className="text-zinc-400">Learn C++ from Microsoft experts. Gain C++ expertise and programming skills</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-2">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-zinc-300">45+ hours of content</span>
                            <span className="text-zinc-400">Hands-on projects and exercises</span>
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
                            <span className="ml-1 text-sm font-medium">4.7 (21,000+ ratings)</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white"
                          onClick={() => window.open("https://www.coursera.org/professional-certificates/c-plus-plus", "_blank", "noopener,noreferrer")}>
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
                  <h2 className="text-2xl font-semibold text-zinc-100">Essential C++ Libraries</h2>
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
                  {/* Boost Library */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-lg ${colorClasses.bg} ${colorClasses.text} ring-1 ${colorClasses.ring}`}
                        >
                          <GitBranch className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-zinc-100">Boost</CardTitle>
                          <CardDescription className="text-zinc-400">General Purpose</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <p className="text-sm text-zinc-400 mb-3">
                        A collection of high-quality, peer-reviewed, portable C++ libraries that extend the
                        functionality of C++.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-zinc-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Github className="h-4 w-4" />
                          <span>Open Source</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4" />
                          <span>Popular Choice</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                        <FileText className="mr-2 h-4 w-4" />
                        Documentation
                      </Button>
                      <Button size="sm" className={`bg-cyan-600 hover:bg-cyan-700 text-white`}>
                        <a href="https://www.boost.org/" target="_blank" rel="noopener noreferrer">
                          Website
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Qt Library */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-lg ${colorClasses.bg} ${colorClasses.text} ring-1 ${colorClasses.ring}`}
                        >
                          <GitBranch className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-zinc-100">Qt</CardTitle>
                          <CardDescription className="text-zinc-400">GUI Framework</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <p className="text-sm text-zinc-400 mb-3">
                        Cross-platform application framework for creating GUI applications with a single codebase.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-zinc-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Github className="h-4 w-4" />
                          <span>Open Source</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4" />
                          <span>Industry Standard</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                        <FileText className="mr-2 h-4 w-4" />
                        Documentation
                      </Button>
                      <Button size="sm" className={`bg-cyan-600 hover:bg-cyan-700 text-white`}>
                        <a href="https://www.qt.io/" target="_blank" rel="noopener noreferrer">
                          Website
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* OpenCV Library */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-lg ${colorClasses.bg} ${colorClasses.text} ring-1 ${colorClasses.ring}`}
                        >
                          <GitBranch className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-zinc-100">OpenCV</CardTitle>
                          <CardDescription className="text-zinc-400">Computer Vision</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <p className="text-sm text-zinc-400 mb-3">
                        Open-source computer vision library with over 2500 optimized algorithms for image and video
                        processing.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-zinc-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Github className="h-4 w-4" />
                          <span>Open Source</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4" />
                          <span>Industry Standard</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                        <FileText className="mr-2 h-4 w-4" />
                        Documentation
                      </Button>
                      <Button size="sm" className={`bg-cyan-600 hover:bg-cyan-700 text-white`}>
                        <a href="https://opencv.org/" target="_blank" rel="noopener noreferrer">
                          Website
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Eigen Library */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-lg ${colorClasses.bg} ${colorClasses.text} ring-1 ${colorClasses.ring}`}
                        >
                          <GitBranch className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-zinc-100">Eigen</CardTitle>
                          <CardDescription className="text-zinc-400">Linear Algebra</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <p className="text-sm text-zinc-400 mb-3">
                        High-performance C++ template library for linear algebra, matrix and vector operations, and
                        numerical solvers.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-zinc-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Github className="h-4 w-4" />
                          <span>Open Source</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4" />
                          <span>Scientific Computing</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                        <FileText className="mr-2 h-4 w-4" />
                        Documentation
                      </Button>
                      <Button size="sm" className={`bg-cyan-600 hover:bg-cyan-700 text-white`}>
                        <a href="http://eigen.tuxfamily.org/" target="_blank" rel="noopener noreferrer">
                          Website
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* SFML Library */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-lg ${colorClasses.bg} ${colorClasses.text} ring-1 ${colorClasses.ring}`}
                        >
                          <GitBranch className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-zinc-100">SFML</CardTitle>
                          <CardDescription className="text-zinc-400">Multimedia Library</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <p className="text-sm text-zinc-400 mb-3">
                        Simple and Fast Multimedia Library for graphics, audio, network, and system I/O, ideal for games
                        and multimedia apps.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-zinc-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Github className="h-4 w-4" />
                          <span>Open Source</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4" />
                          <span>Game Development</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                        <FileText className="mr-2 h-4 w-4" />
                        Documentation
                      </Button>
                      <Button size="sm" className={`bg-cyan-600 hover:bg-cyan-700 text-white`}>
                        <a href="https://www.sfml-dev.org/" target="_blank" rel="noopener noreferrer">
                          Website
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Poco Library */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-lg ${colorClasses.bg} ${colorClasses.text} ring-1 ${colorClasses.ring}`}
                        >
                          <GitBranch className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-zinc-100">Poco</CardTitle>
                          <CardDescription className="text-zinc-400">Network & Utilities</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <p className="text-sm text-zinc-400 mb-3">
                        Powerful cross-platform C++ libraries for building network-centric, portable applications.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-zinc-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Github className="h-4 w-4" />
                          <span>Open Source</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4" />
                          <span>Enterprise Applications</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                        <FileText className="mr-2 h-4 w-4" />
                        Documentation
                      </Button>
                      <Button size="sm" className={`bg-cyan-600 hover:bg-cyan-700 text-white`}>
                        <a href="https://pocoproject.org/" target="_blank" rel="noopener noreferrer">
                          Website
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Frameworks Tab */}
            <TabsContent value="frameworks" className="mt-6">
              <div className="grid gap-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-zinc-100">Popular C++ Frameworks</h2>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                      All Categories
                    </Button>
                    <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                      Compare
                    </Button>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {/* Unreal Engine */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-lg ${colorClasses.bg} ${colorClasses.text} ring-1 ${colorClasses.ring}`}
                        >
                          <Globe className="h-6 w-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <CardTitle className="text-lg font-bold text-zinc-100">Unreal Engine</CardTitle>
                            <Badge className="bg-zinc-800 text-zinc-300">Game Development</Badge>
                          </div>
                          <CardDescription className="text-zinc-400">Professional 3D game engine</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-3">
                      <p className="text-sm text-zinc-400 mb-4">
                        A complete suite of development tools for creating high-quality games and interactive
                        experiences across platforms.
                      </p>

                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Button>
                      <Button size="sm" className={`bg-cyan-600 hover:bg-cyan-700 text-white`}>
                        <a href="https://www.unrealengine.com/en-US/" target="_blank" rel="noopener noreferrer">
                          Explore Framework
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Qt Framework */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-lg ${colorClasses.bg} ${colorClasses.text} ring-1 ${colorClasses.ring}`}
                        >
                          <Globe className="h-6 w-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <CardTitle className="text-lg font-bold text-zinc-100">Qt Framework</CardTitle>
                            <Badge className="bg-zinc-800 text-zinc-300">Desktop Applications</Badge>
                          </div>
                          <CardDescription className="text-zinc-400">Cross-platform GUI framework</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-3">
                      <p className="text-sm text-zinc-400 mb-4">
                        A comprehensive framework for developing cross-platform applications with native look and feel
                        on desktop, mobile, and embedded systems.
                      </p>

                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Button>
                      <Button size="sm" className={`bg-cyan-600 hover:bg-cyan-700 text-white`}>
                        <a href="https://www.qt.io/" target="_blank" rel="noopener noreferrer">
                          Explore Framework
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* JUCE Framework */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-lg ${colorClasses.bg} ${colorClasses.text} ring-1 ${colorClasses.ring}`}
                        >
                          <Globe className="h-6 w-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <CardTitle className="text-lg font-bold text-zinc-100">JUCE</CardTitle>
                            <Badge className="bg-zinc-800 text-zinc-300">Audio Applications</Badge>
                          </div>
                          <CardDescription className="text-zinc-400">Audio application framework</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-3">
                      <p className="text-sm text-zinc-400 mb-4">
                        A framework for developing cross-platform audio applications and plugins with a focus on
                        high-performance audio processing.
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Button>
                      <Button size="sm" className={`bg-cyan-600 hover:bg-cyan-700 text-white`}>
                        <a href="https://juce.com/" target="_blank" rel="noopener noreferrer">
                          Explore Framework
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>

                {/* Poco Framework */}
                <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                  <CardHeader className="p-4 pb-2">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-lg ${colorClasses.bg} ${colorClasses.text} ring-1 ${colorClasses.ring}`}
                    >
                      <Globe className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-lg font-bold text-zinc-100">Poco</CardTitle>
                        <Badge className="bg-zinc-800 text-zinc-300">Network Applications</Badge>
                      </div>
                      <CardDescription className="text-zinc-400">Network and utility framework</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-3">
                    <p className="text-sm text-zinc-400 mb-4">
                      A collection of C++ libraries for building network-centric, portable applications that run on
                      desktop, server, mobile and embedded systems.
                    </p>

                  </CardContent>
                  <CardFooter className="flex justify-between p-4 pt-0">
                    <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                    <Button size="sm" className={`bg-cyan-600 hover:bg-cyan-700 text-white`}>
                      <a href="https://pocoproject.org/" target="_blank" rel="noopener noreferrer">
                        Website
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            {/* Documentation Tab */}
            <TabsContent value="documentation" className="mt-6">
              <div className="grid gap-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-zinc-100">C++ Documentation</h2>
                  <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                    <BookOpen className="mr-2 h-4 w-4" />
                    View All Resources
                  </Button>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
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
                          <CardTitle className="text-lg font-bold text-zinc-100">C++ Reference</CardTitle>
                        </div>
                      </div>
                      <CardDescription className="text-zinc-400">
                        Comprehensive reference for C++ language and standard library
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm text-zinc-400 mb-3">
                        This reference provides detailed information about all aspects of the C++ language and standard
                        library, including syntax, semantics, and usage examples.
                      </p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button
                        className={`w-full bg-gradient-to-r ${colorClasses.gradient} hover:opacity-90 text-white`}
                        onClick={() => window.open("https://en.cppreference.com/w/", "_blank", "noopener,noreferrer")}
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
                          <CardTitle className="text-lg font-bold text-zinc-100">C++ Standard</CardTitle>
                        </div>
                      </div>
                      <CardDescription className="text-zinc-400">
                        Official ISO C++ Standard documentation
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm text-zinc-400 mb-3">
                        The official ISO C++ Standard documentation provides the definitive reference for the C++ language
                        and its features.
                      </p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button
                        className={`w-full bg-gradient-to-r ${colorClasses.gradient} hover:opacity-90 text-white`}
                        onClick={() => window.open("https://isocpp.org/std/the-standard", "_blank", "noopener,noreferrer")}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Open Standard
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>

