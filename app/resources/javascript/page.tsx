"use client"

import Link from "next/link"
import { BookOpen, ChevronLeft, ExternalLink, FileText, GitBranch, Github, Globe, Play, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function JavaScriptResourcePage() {
  const colorClasses = {
    bg: "bg-yellow-500/20",
    text: "text-yellow-400",
    ring: "ring-yellow-500/30",
    border: "border-yellow-500/50",
    gradient: "from-yellow-500 to-amber-600",
    hover: "hover:bg-yellow-700",
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920&text=JavaScript+Background')] bg-cover bg-center opacity-10 z-0"></div>
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
            <AvatarFallback className="bg-zinc-800 text-yellow-400">JD</AvatarFallback>
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
                      src="/placeholder.svg?height=48&width=48&text=JS&fontsize=24&fontweight=bold&textcolor=ffffff&bgcolor=f7df1e"
                      alt="JavaScript Logo"
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
                      JavaScript
                    </h1>
                    <p className="text-zinc-400">Beginner to Advanced</p>
                  </div>
                </div>

                <p className="text-lg text-zinc-300 mb-4 max-w-3xl">
                  A versatile programming language that enables interactive web pages and is an essential part of web
                  applications, used for both client-side and server-side development.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                    Web Development
                  </Badge>
                  <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                    Frontend
                  </Badge>
                  <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                    Backend
                  </Badge>
                  <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                    Cross-platform
                  </Badge>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-zinc-500">Created by</p>
                    <p className="text-zinc-300">Brendan Eich, Netscape</p>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">First Released</p>
                    <p className="text-zinc-300">1995</p>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">Latest Version</p>
                    <p className="text-zinc-300">ES2023</p>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">Typing</p>
                    <p className="text-zinc-300">Dynamic, Weak</p>
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
                        <span>Web Development</span>
                      </li>
                      <li className="flex items-center gap-2 text-zinc-400">
                        <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                        <span>Single Page Applications</span>
                      </li>
                      <li className="flex items-center gap-2 text-zinc-400">
                        <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                        <span>Server-side Applications</span>
                      </li>
                      <li className="flex items-center gap-2 text-zinc-400">
                        <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                        <span>Mobile App Development</span>
                      </li>
                      <li className="flex items-center gap-2 text-zinc-400">
                        <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                        <span>Game Development</span>
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
                  <h2 className="text-2xl font-semibold text-zinc-100">JavaScript Learning Roadmap</h2>
                  <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                    Download Roadmap PDF
                  </Button>
                </div>

                <div className="grid gap-6">
                  {/* Introduction Section */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-xl text-zinc-100">Getting Started with JavaScript</CardTitle>
                      <CardDescription className="text-zinc-400">
                        Begin your JavaScript journey with these fundamental concepts
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-lg border border-zinc-800 p-4">
                        <h3 className="text-lg font-medium text-zinc-100 mb-2">1. JavaScript Basics</h3>
                        <p className="text-zinc-400 mb-3">Master the core syntax and concepts of JavaScript</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <div
                              className={`h-5 w-5 rounded-full ${colorClasses.bg} flex items-center justify-center mt-0.5`}
                            >
                              <span className="text-xs font-bold">1</span>
                            </div>
                            <div>
                              <p className="text-zinc-300 font-medium">Syntax & Data Types</p>
                              <p className="text-zinc-500 text-sm">
                                Variables, primitive types, operators, type conversion
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div
                              className={`h-5 w-5 rounded-full ${colorClasses.bg} flex items-center justify-center mt-0.5`}
                            >
                              <span className="text-xs font-bold">2</span>
                            </div>
                            <div>
                              <p className="text-zinc-300 font-medium">Control Flow</p>
                              <p className="text-zinc-500 text-sm">
                                Conditionals, loops, switch statements, error handling
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div
                              className={`h-5 w-5 rounded-full ${colorClasses.bg} flex items-center justify-center mt-0.5`}
                            >
                              <span className="text-xs font-bold">3</span>
                            </div>
                            <div>
                              <p className="text-zinc-300 font-medium">Functions</p>
                              <p className="text-zinc-500 text-sm">
                                Declarations, expressions, arrow functions, parameters, scope
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="rounded-lg border border-zinc-800 p-4">
                        <h3 className="text-lg font-medium text-zinc-100 mb-2">2. DOM Manipulation</h3>
                        <p className="text-zinc-400 mb-3">Learn to interact with HTML elements using JavaScript</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <div
                              className={`h-5 w-5 rounded-full ${colorClasses.bg} flex items-center justify-center mt-0.5`}
                            >
                              <span className="text-xs font-bold">1</span>
                            </div>
                            <div>
                              <p className="text-zinc-300 font-medium">DOM Selection</p>
                              <p className="text-zinc-500 text-sm">
                                querySelector, getElementById, getElementsByClassName
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div
                              className={`h-5 w-5 rounded-full ${colorClasses.bg} flex items-center justify-center mt-0.5`}
                            >
                              <span className="text-xs font-bold">2</span>
                            </div>
                            <div>
                              <p className="text-zinc-300 font-medium">DOM Manipulation</p>
                              <p className="text-zinc-500 text-sm">Creating, modifying, and removing elements</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div
                              className={`h-5 w-5 rounded-full ${colorClasses.bg} flex items-center justify-center mt-0.5`}
                            >
                              <span className="text-xs font-bold">3</span>
                            </div>
                            <div>
                              <p className="text-zinc-300 font-medium">Events</p>
                              <p className="text-zinc-500 text-sm">Event listeners, event object, event propagation</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Intermediate Section */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-xl text-zinc-100">Intermediate JavaScript</CardTitle>
                      <CardDescription className="text-zinc-400">
                        Deepen your JavaScript knowledge with these advanced concepts
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-lg border border-zinc-800 p-4">
                        <h3 className="text-lg font-medium text-zinc-100 mb-2">3. Advanced JavaScript Concepts</h3>
                        <p className="text-zinc-400 mb-3">Master more complex JavaScript patterns and features</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <div
                              className={`h-5 w-5 rounded-full ${colorClasses.bg} flex items-center justify-center mt-0.5`}
                            >
                              <span className="text-xs font-bold">1</span>
                            </div>
                            <div>
                              <p className="text-zinc-300 font-medium">Closures & Prototypes</p>
                              <p className="text-zinc-500 text-sm">Lexical scope, prototype chain, inheritance</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div
                              className={`h-5 w-5 rounded-full ${colorClasses.bg} flex items-center justify-center mt-0.5`}
                            >
                              <span className="text-xs font-bold">2</span>
                            </div>
                            <div>
                              <p className="text-zinc-300 font-medium">ES6+ Features</p>
                              <p className="text-zinc-500 text-sm">
                                Arrow functions, destructuring, spread/rest, template literals, modules
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div
                              className={`h-5 w-5 rounded-full ${colorClasses.bg} flex items-center justify-center mt-0.5`}
                            >
                              <span className="text-xs font-bold">3</span>
                            </div>
                            <div>
                              <p className="text-zinc-300 font-medium">Asynchronous JavaScript</p>
                              <p className="text-zinc-500 text-sm">Callbacks, promises, async/await, fetch API</p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="rounded-lg border border-zinc-800 p-4">
                        <h3 className="text-lg font-medium text-zinc-100 mb-2">4. Modern JavaScript Development</h3>
                        <p className="text-zinc-400 mb-3">
                          Learn tools and practices for professional JavaScript development
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <div
                              className={`h-5 w-5 rounded-full ${colorClasses.bg} flex items-center justify-center mt-0.5`}
                            >
                              <span className="text-xs font-bold">1</span>
                            </div>
                            <div>
                              <p className="text-zinc-300 font-medium">Build Tools</p>
                              <p className="text-zinc-500 text-sm">npm, webpack, babel, vite</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div
                              className={`h-5 w-5 rounded-full ${colorClasses.bg} flex items-center justify-center mt-0.5`}
                            >
                              <span className="text-xs font-bold">2</span>
                            </div>
                            <div>
                              <p className="text-zinc-300 font-medium">Testing</p>
                              <p className="text-zinc-500 text-sm">Jest, Testing Library, Cypress</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div
                              className={`h-5 w-5 rounded-full ${colorClasses.bg} flex items-center justify-center mt-0.5`}
                            >
                              <span className="text-xs font-bold">3</span>
                            </div>
                            <div>
                              <p className="text-zinc-300 font-medium">TypeScript</p>
                              <p className="text-zinc-500 text-sm">Static typing, interfaces, generics</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Advanced Section */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-xl text-zinc-100">Specializations</CardTitle>
                      <CardDescription className="text-zinc-400">
                        Choose a specialization path to focus your JavaScript skills
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-lg border border-zinc-800 p-4">
                        <h3 className="text-lg font-medium text-zinc-100 mb-2">5. Frontend Development</h3>
                        <p className="text-zinc-400 mb-3">Master modern frontend frameworks and libraries</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <div
                              className={`h-5 w-5 rounded-full ${colorClasses.bg} flex items-center justify-center mt-0.5`}
                            >
                              <span className="text-xs font-bold">1</span>
                            </div>
                            <div>
                              <p className="text-zinc-300 font-medium">React</p>
                              <p className="text-zinc-500 text-sm">Components, hooks, state management, routing</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div
                              className={`h-5 w-5 rounded-full ${colorClasses.bg} flex items-center justify-center mt-0.5`}
                            >
                              <span className="text-xs font-bold">2</span>
                            </div>
                            <div>
                              <p className="text-zinc-300 font-medium">Vue.js</p>
                              <p className="text-zinc-500 text-sm">Vue components, directives, Vuex, Vue Router</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div
                              className={`h-5 w-5 rounded-full ${colorClasses.bg} flex items-center justify-center mt-0.5`}
                            >
                              <span className="text-xs font-bold">3</span>
                            </div>
                            <div>
                              <p className="text-zinc-300 font-medium">Angular</p>
                              <p className="text-zinc-500 text-sm">Components, services, modules, RxJS</p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="rounded-lg border border-zinc-800 p-4">
                        <h3 className="text-lg font-medium text-zinc-100 mb-2">6. Backend Development</h3>
                        <p className="text-zinc-400 mb-3">Learn server-side JavaScript with Node.js</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <div
                              className={`h-5 w-5 rounded-full ${colorClasses.bg} flex items-center justify-center mt-0.5`}
                            >
                              <span className="text-xs font-bold">1</span>
                            </div>
                            <div>
                              <p className="text-zinc-300 font-medium">Node.js Fundamentals</p>
                              <p className="text-zinc-500 text-sm">Modules, file system, streams, events</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div
                              className={`h-5 w-5 rounded-full ${colorClasses.bg} flex items-center justify-center mt-0.5`}
                            >
                              <span className="text-xs font-bold">2</span>
                            </div>
                            <div>
                              <p className="text-zinc-300 font-medium">Express.js</p>
                              <p className="text-zinc-500 text-sm">Routing, middleware, templating, REST APIs</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div
                              className={`h-5 w-5 rounded-full ${colorClasses.bg} flex items-center justify-center mt-0.5`}
                            >
                              <span className="text-xs font-bold">3</span>
                            </div>
                            <div>
                              <p className="text-zinc-300 font-medium">Databases</p>
                              <p className="text-zinc-500 text-sm">MongoDB, PostgreSQL, ORMs (Mongoose, Sequelize)</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Career Roadmap Section */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-xl text-zinc-100">JavaScript Career Paths</CardTitle>
                      <CardDescription className="text-zinc-400">
                        Explore potential career paths for JavaScript developers
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-lg border border-zinc-800 p-4">
                        <h3 className="text-lg font-medium text-zinc-100 mb-2">Frontend Developer</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-zinc-400 mb-3">Build user interfaces and interactive web applications</p>
                            <h4 className="text-zinc-300 font-medium mb-2">Key Skills:</h4>
                            <ul className="space-y-1">
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">HTML, CSS, JavaScript</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">React, Vue, or Angular</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">State Management (Redux, Vuex)</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">CSS Frameworks (Tailwind, Bootstrap)</span>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-zinc-300 font-medium mb-2">Tools & Technologies:</h4>
                            <ul className="space-y-1">
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">VS Code, WebStorm</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">Webpack, Vite, Babel</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">Chrome DevTools</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">Jest, Testing Library, Cypress</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border border-zinc-800 p-4">
                        <h3 className="text-lg font-medium text-zinc-100 mb-2">Full Stack Developer</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-zinc-400 mb-3">Develop both client and server-side applications</p>
                            <h4 className="text-zinc-300 font-medium mb-2">Key Skills:</h4>
                            <ul className="space-y-1">
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">Frontend Technologies</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">Node.js & Express</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">Database Design & Management</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">RESTful APIs & GraphQL</span>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-zinc-300 font-medium mb-2">Tools & Technologies:</h4>
                            <ul className="space-y-1">
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">MongoDB, PostgreSQL, MySQL</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">Docker, Kubernetes</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">Git, GitHub, GitLab</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">AWS, Azure, or GCP</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border border-zinc-800 p-4">
                        <h3 className="text-lg font-medium text-zinc-100 mb-2">DevOps Engineer (JavaScript)</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-zinc-400 mb-3">
                              Automate and optimize deployment of JavaScript applications
                            </p>
                            <h4 className="text-zinc-300 font-medium mb-2">Key Skills:</h4>
                            <ul className="space-y-1">
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">CI/CD Pipelines</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">Infrastructure as Code</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">Containerization & Orchestration</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">Monitoring & Logging</span>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-zinc-300 font-medium mb-2">Tools & Technologies:</h4>
                            <ul className="space-y-1">
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">Jenkins, GitHub Actions, CircleCI</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">Terraform, CloudFormation</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">Docker, Kubernetes</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">ELK Stack, Prometheus, Grafana</span>
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
                  <h2 className="text-2xl font-semibold text-zinc-100">Most Popular JavaScript Videos</h2>
                  <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                    View All Videos
                  </Button>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {/* Video 1 */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden group">
                    <CardHeader className="p-0">
                      <div className="relative aspect-video w-full overflow-hidden">
                        <a href="https://www.youtube.com/watch?v=hdI2bqOjy3c" target="_blank" rel="noopener noreferrer">
                          <img
                            src="/placeholder.svg?height=225&width=400&text=JavaScript+Crash+Course&fontsize=24&fontweight=bold&textcolor=000000&bgcolor=f7df1e"
                            alt="JavaScript Crash Course"
                            className="h-full w-full object-cover transition-transform group-hover:scale-105 duration-300"
                          />
                        </a>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-lg font-bold text-white">JavaScript Crash Course For Beginners</h3>
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
                        <span className="text-xs text-zinc-400">2.5M views</span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                        Save for Later
                      </Button>
                      <Button size="sm" className={`bg-yellow-600 hover:bg-yellow-700 text-white`}>
                        Watch Now
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Video 2 */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden group">
                    <CardHeader className="p-0">
                      <div className="relative aspect-video w-full overflow-hidden">
                        <a href="https://www.youtube.com/watch?v=W6NZfCO5SIk" target="_blank" rel="noopener noreferrer">
                          <img
                            src="/placeholder.svg?height=225&width=400&text=JavaScript+Tutorial&fontsize=24&fontweight=bold&textcolor=000000&bgcolor=f7df1e"
                            alt="JavaScript Tutorial"
                            className="h-full w-full object-cover transition-transform group-hover:scale-105 duration-300"
                          />
                        </a>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-lg font-bold text-white">JavaScript Tutorial for Beginners</h3>
                          <p className="text-sm text-zinc-300">1 hour</p>
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
                            <AvatarImage
                              src="/placeholder.svg?height=32&width=32&text=PM"
                              alt="Programming with Mosh"
                            />
                            <AvatarFallback className={`bg-zinc-800 ${colorClasses.text}`}>PM</AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium text-zinc-300">Programming with Mosh</span>
                        </div>
                        <span className="text-xs text-zinc-400">3.8M views</span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                        Save for Later
                      </Button>
                      <Button size="sm" className={`bg-yellow-600 hover:bg-yellow-700 text-white`}>
                        Watch Now
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Video 3 */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden group">
                    <CardHeader className="p-0">
                      <div className="relative aspect-video w-full overflow-hidden">
                        <a href="https://www.youtube.com/watch?v=PkZNo7MFNFg" target="_blank" rel="noopener noreferrer">
                          <img
                            src="/placeholder.svg?height=225&width=400&text=Learn+JavaScript&fontsize=24&fontweight=bold&textcolor=000000&bgcolor=f7df1e"
                            alt="Learn JavaScript"
                            className="h-full w-full object-cover transition-transform group-hover:scale-105 duration-300"
                          />
                        </a>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-lg font-bold text-white">Learn JavaScript - Full Course for Beginners</h3>
                          <p className="text-sm text-zinc-300">3.5 hours</p>
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
                            <AvatarImage src="/placeholder.svg?height=32&width=32&text=FCC" alt="freeCodeCamp" />
                            <AvatarFallback className={`bg-zinc-800 ${colorClasses.text}`}>FCC</AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium text-zinc-300">freeCodeCamp</span>
                        </div>
                        <span className="text-xs text-zinc-400">8.2M views</span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                        Save for Later
                      </Button>
                      <Button size="sm" className={`bg-yellow-600 hover:bg-yellow-700 text-white`}>
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
                          <CardTitle className="text-lg font-bold text-zinc-100">
                            The Complete JavaScript Course 2023
                          </CardTitle>
                          <Badge className={`${colorClasses.bg} ${colorClasses.text}`}>Udemy</Badge>
                        </div>
                        <CardDescription className="text-zinc-400">
                          From Zero to Expert! The modern JavaScript course for everyone
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-2">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-zinc-300">69 hours of content</span>
                            <span className="text-zinc-400">33 coding challenges</span>
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
                            <span className="ml-1 text-sm font-medium">4.7 (158,000+ ratings)</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button
                          className={`w-full bg-gradient-to-r ${colorClasses.gradient} hover:opacity-90 text-white`}
                          onClick={() =>
                            window.open(
                              "https://www.udemy.com/course/the-complete-javascript-course/",
                              "_blank",
                              "noopener,noreferrer",
                            )
                          }
                        >
                          Enroll Now
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                      <CardHeader className="p-4 pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg font-bold text-zinc-100">
                            JavaScript: Advanced Concepts
                          </CardTitle>
                          <Badge className="bg-purple-500/20 text-purple-400">Coursera</Badge>
                        </div>
                        <CardDescription className="text-zinc-400">By University of Michigan</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-2">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-zinc-300">40+ hours of content</span>
                            <span className="text-zinc-400">5 real-world projects</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-zinc-400">
                            <div className="flex items-center gap-1">
                              <div className="h-2 w-2 rounded-full bg-purple-400"></div>
                              <span>University certificate</span>
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
                            <Star className="h-4 w-4 fill-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 opacity-50" />
                            <span className="ml-1 text-sm font-medium">4.6 (12,500+ ratings)</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button
                          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white"
                          onClick={() =>
                            window.open(
                              "https://www.coursera.org/specializations/javascript-beginner-to-advanced",
                              "_blank",
                              "noopener,noreferrer",
                            )
                          }
                        >
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
                  <h2 className="text-2xl font-semibold text-zinc-100">Essential JavaScript Libraries</h2>
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
                  {/* React Library */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-lg ${colorClasses.bg} ${colorClasses.text} ring-1 ${colorClasses.ring}`}
                        >
                          <GitBranch className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-zinc-100">React</CardTitle>
                          <CardDescription className="text-zinc-400">UI Library</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <p className="text-sm text-zinc-400 mb-3">
                        A JavaScript library for building user interfaces, maintained by Meta and a community of
                        developers.
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
                      <Button size="sm" className={`bg-yellow-600 hover:bg-yellow-700 text-white`}>
                        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                          Website
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Vue.js Library */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-lg ${colorClasses.bg} ${colorClasses.text} ring-1 ${colorClasses.ring}`}
                        >
                          <GitBranch className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-zinc-100">Vue.js</CardTitle>
                          <CardDescription className="text-zinc-400">Progressive Framework</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <p className="text-sm text-zinc-400 mb-3">
                        A progressive framework for building user interfaces, designed to be incrementally adoptable.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-zinc-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Github className="h-4 w-4" />
                          <span>Open Source</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4" />
                          <span>Easy to Learn</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                        <FileText className="mr-2 h-4 w-4" />
                        Documentation
                      </Button>
                      <Button size="sm" className={`bg-yellow-600 hover:bg-yellow-700 text-white`}>
                        <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">
                          Website
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* jQuery Library */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-lg ${colorClasses.bg} ${colorClasses.text} ring-1 ${colorClasses.ring}`}
                        >
                          <GitBranch className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-zinc-100">jQuery</CardTitle>
                          <CardDescription className="text-zinc-400">DOM Manipulation</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <p className="text-sm text-zinc-400 mb-3">
                        A fast, small, and feature-rich JavaScript library that simplifies HTML DOM manipulation, event
                        handling, and animation.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-zinc-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Github className="h-4 w-4" />
                          <span>Open Source</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4" />
                          <span>Widely Used</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                        <FileText className="mr-2 h-4 w-4" />
                        Documentation
                      </Button>
                      <Button size="sm" className={`bg-yellow-600 hover:bg-yellow-700 text-white`}>
                        <a href="https://jquery.com/" target="_blank" rel="noopener noreferrer">
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
                  <h2 className="text-2xl font-semibold text-zinc-100">Popular JavaScript Frameworks</h2>
                  <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                    Compare Frameworks
                  </Button>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {/* Next.js Framework */}
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
                            <CardTitle className="text-lg font-bold text-zinc-100">Next.js</CardTitle>
                            <Badge className="bg-zinc-800 text-zinc-300">React Framework</Badge>
                          </div>
                          <CardDescription className="text-zinc-400">Full-stack React framework</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-3">
                      <p className="text-sm text-zinc-400 mb-3">
                        A React framework with hybrid static & server rendering, TypeScript support, smart bundling,
                        route pre-fetching, and more.
                      </p>
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="features" className="border-zinc-800">
                          <AccordionTrigger className="text-sm font-medium text-zinc-300 hover:text-white py-2">
                            Key Features
                          </AccordionTrigger>
                          <AccordionContent className="text-sm text-zinc-400">
                            <ul className="space-y-2 pl-2">
                              <li className="flex items-center gap-2">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span>Server-side rendering</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span>Static site generation</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span>API routes</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span>File-based routing</span>
                              </li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Button>
                      <Button size="sm" className={`bg-yellow-600 hover:bg-yellow-700 text-white`}>
                        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                          Explore Framework
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Angular Framework */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/20 text-red-400 ring-1 ring-red-500/30">
                          <Globe className="h-6 w-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <CardTitle className="text-lg font-bold text-zinc-100">Angular</CardTitle>
                            <Badge className="bg-zinc-800 text-zinc-300">Enterprise Framework</Badge>
                          </div>
                          <CardDescription className="text-zinc-400">
                            Platform for building web applications
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-3">
                      <p className="text-sm text-zinc-400 mb-3">
                        A platform and framework for building single-page client applications using HTML and TypeScript,
                        developed by Google.
                      </p>
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="features" className="border-zinc-800">
                          <AccordionTrigger className="text-sm font-medium text-zinc-300 hover:text-white py-2">
                            Key Features
                          </AccordionTrigger>
                          <AccordionContent className="text-sm text-zinc-400">
                            <ul className="space-y-2 pl-2">
                              <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full text-red-400"></div>
                                <span>Two-way data binding</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full text-red-400"></div>
                                <span>Dependency injection</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full text-red-400"></div>
                                <span>TypeScript integration</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full text-red-400"></div>
                                <span>Component-based architecture</span>
                              </li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Button>
                      <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                        <a href="https://angular.io/" target="_blank" rel="noopener noreferrer">
                          Explore Framework
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Documentation Tab */}
            <TabsContent value="documentation" className="mt-6">
              <div className="grid gap-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-zinc-100">Official JavaScript Documentation</h2>
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
                          <CardTitle className="text-lg font-bold text-zinc-100">MDN Web Docs</CardTitle>
                        </div>
                      </div>
                      <CardDescription className="text-zinc-400">
                        Comprehensive JavaScript documentation by Mozilla
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm text-zinc-400 mb-3">
                        The MDN Web Docs site provides information about Open Web technologies including HTML, CSS, and
                        JavaScript.
                      </p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button
                        className={`w-full bg-gradient-to-r ${colorClasses.gradient} hover:opacity-90 text-white`}
                        onClick={() =>
                          window.open(
                            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                            "_blank",
                            "noopener,noreferrer",
                          )
                        }
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
                          <CardTitle className="text-lg font-bold text-zinc-100">JavaScript.info</CardTitle>
                        </div>
                      </div>
                      <CardDescription className="text-zinc-400">Modern JavaScript Tutorial</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm text-zinc-400 mb-3">
                        From the basics to advanced topics with simple, but detailed explanations. Main course contains
                        2 parts covering JavaScript as a programming language and working with a browser.
                      </p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button
                        className={`w-full bg-gradient-to-r ${colorClasses.gradient} hover:opacity-90 text-white`}
                        onClick={() => window.open("https://javascript.info/", "_blank", "noopener,noreferrer")}
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
                          <FileText className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-zinc-100">W3Schools JavaScript</CardTitle>
                        </div>
                      </div>
                      <CardDescription className="text-zinc-400">JavaScript Tutorial with Examples</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm text-zinc-400 mb-3">
                        W3Schools offers free tutorials, references and exercises in all web development languages
                        including JavaScript with interactive examples and exercises.
                      </p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button
                        className={`w-full bg-gradient-to-r ${colorClasses.gradient} hover:opacity-90 text-white`}
                        onClick={() => window.open("https://www.w3schools.com/js/", "_blank", "noopener,noreferrer")}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Open Documentation
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

