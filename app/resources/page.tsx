import Link from "next/link"
import {
  ChevronLeft,
  Code,
  Filter,
  Search,
  Upload,
  Star,
  BookmarkPlus,
  Globe,
  Database,
  GitBranch,
  Layers,
  FileText,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ResourcesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920&text=Tech+Grid+Background')] bg-cover bg-center opacity-10 z-0"></div>
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
            <Upload className="mr-2 h-4 w-4" />
            Contribute Resource
          </Button>
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=32&width=32&text=JD" alt="User" />
            <AvatarFallback className="bg-zinc-800 text-blue-400">JD</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <main className="flex-1 p-4 md:p-6 relative z-1">
        <div className="grid gap-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Resource Center
            </h1>
            <p className="text-zinc-400">Explore learning materials, tutorials, and development roadmaps</p>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500" />
              <Input
                type="search"
                placeholder="Search resources, languages, frameworks..."
                className="w-full bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 pl-8 md:w-[400px] lg:w-[500px]"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                <BookmarkPlus className="mr-2 h-4 w-4" />
                Saved
              </Button>
            </div>
          </div>

          <Tabs defaultValue="programming" className="w-full">
            <TabsList className="grid w-full grid-cols-4 md:w-[600px] bg-zinc-800/50 text-zinc-400">
              <TabsTrigger
                value="programming"
                className="data-[state=active]:bg-zinc-900 data-[state=active]:text-white"
              >
                Programming
              </TabsTrigger>
              <TabsTrigger value="roadmaps" className="data-[state=active]:bg-zinc-900 data-[state=active]:text-white">
                Career Roadmaps
              </TabsTrigger>
              <TabsTrigger value="courses" className="data-[state=active]:bg-zinc-900 data-[state=active]:text-white">
                Courses
              </TabsTrigger>
              <TabsTrigger
                value="my-learning"
                className="data-[state=active]:bg-zinc-900 data-[state=active]:text-white"
              >
                My Learning
              </TabsTrigger>
            </TabsList>

            {/* Programming Languages Tab */}
            <TabsContent value="programming" className="mt-6">
              <div className="grid gap-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-zinc-100">Popular Programming Languages</h2>
                  <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300">
                    View All <ChevronLeft className="ml-1 h-4 w-4 rotate-180" />
                  </Button>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {/* JavaScript Card */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden group">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-500/20 text-yellow-400 ring-1 ring-yellow-500/30">
                          <Code className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-zinc-100">JavaScript</CardTitle>
                          <CardDescription className="text-zinc-400">Web Development</CardDescription>
                        </div>
                        <div className="ml-auto flex items-center gap-1 text-yellow-400">
                          <Star className="h-4 w-4 fill-yellow-400" />
                          <span className="text-sm font-medium">4.8</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <p className="text-sm text-zinc-400 mb-3">
                        The language of the web. Build interactive websites, server-side applications, and modern web
                        apps.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                          ES6+
                        </Badge>
                        <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                          Async/Await
                        </Badge>
                        <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                          DOM
                        </Badge>
                        <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                          APIs
                        </Badge>
                      </div>
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="libraries" className="border-zinc-800">
                          <AccordionTrigger className="text-sm font-medium text-zinc-300 hover:text-white py-2">
                            Popular Libraries & Tools
                          </AccordionTrigger>
                          <AccordionContent className="text-sm text-zinc-400">
                            <ul className="space-y-2 pl-2">
                              <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-blue-400"></div>
                                <span>React - UI library for building interfaces</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                                <span>Node.js - JavaScript runtime</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-purple-400"></div>
                                <span>Express - Web framework for Node.js</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-yellow-400"></div>
                                <span>TypeScript - Typed superset of JavaScript</span>
                              </li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                        <BookmarkPlus className="mr-2 h-4 w-4" />
                        Save
                      </Button>
                      <Link href="/resources/javascript">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                          Explore Resources
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  {/* Python Card */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden group">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400 ring-1 ring-blue-500/30">
                          <Code className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-zinc-100">Python</CardTitle>
                          <CardDescription className="text-zinc-400">General Purpose</CardDescription>
                        </div>
                        <div className="ml-auto flex items-center gap-1 text-yellow-400">
                          <Star className="h-4 w-4 fill-yellow-400" />
                          <span className="text-sm font-medium">4.9</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <p className="text-sm text-zinc-400 mb-3">
                        Versatile language for web development, data science, AI, machine learning, and automation.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                          Data Science
                        </Badge>
                        <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                          AI/ML
                        </Badge>
                        <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                          Web
                        </Badge>
                        <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                          Automation
                        </Badge>
                      </div>
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="libraries" className="border-zinc-800">
                          <AccordionTrigger className="text-sm font-medium text-zinc-300 hover:text-white py-2">
                            Popular Libraries & Tools
                          </AccordionTrigger>
                          <AccordionContent className="text-sm text-zinc-400">
                            <ul className="space-y-2 pl-2">
                              <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-blue-400"></div>
                                <span>NumPy - Scientific computing</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                                <span>Pandas - Data analysis</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-purple-400"></div>
                                <span>TensorFlow - Machine learning</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-yellow-400"></div>
                                <span>Django - Web framework</span>
                              </li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                        <BookmarkPlus className="mr-2 h-4 w-4" />
                        Save
                      </Button>
                      <Link href="/resources/python">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                          Explore Resources
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  {/* Java Card */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden group">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/20 text-orange-400 ring-1 ring-orange-500/30">
                          <Code className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-zinc-100">Java</CardTitle>
                          <CardDescription className="text-zinc-400">Enterprise & Android</CardDescription>
                        </div>
                        <div className="ml-auto flex items-center gap-1 text-yellow-400">
                          <Star className="h-4 w-4 fill-yellow-400" />
                          <span className="text-sm font-medium">4.7</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <p className="text-sm text-zinc-400 mb-3">
                        Build enterprise applications, Android apps, and large-scale systems with this robust language.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                          OOP
                        </Badge>
                        <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                          Enterprise
                        </Badge>
                        <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                          Android
                        </Badge>
                        <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                          JVM
                        </Badge>
                      </div>
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="libraries" className="border-zinc-800">
                          <AccordionTrigger className="text-sm font-medium text-zinc-300 hover:text-white py-2">
                            Popular Libraries & Tools
                          </AccordionTrigger>
                          <AccordionContent className="text-sm text-zinc-400">
                            <ul className="space-y-2 pl-2">
                              <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-blue-400"></div>
                                <span>Spring - Enterprise framework</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                                <span>Hibernate - ORM framework</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-purple-400"></div>
                                <span>Android SDK - Mobile development</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-yellow-400"></div>
                                <span>JUnit - Testing framework</span>
                              </li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                        <BookmarkPlus className="mr-2 h-4 w-4" />
                        Save
                      </Button>
                      <Link href="/resources/java">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                          Explore Resources
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  {/* C++ Card */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden group">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400 ring-1 ring-cyan-500/30">
                          <Code className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-zinc-100">C++</CardTitle>
                          <CardDescription className="text-zinc-400">Systems & Game Development</CardDescription>
                        </div>
                        <div className="ml-auto flex items-center gap-1 text-yellow-400">
                          <Star className="h-4 w-4 fill-yellow-400" />
                          <span className="text-sm font-medium">4.6</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <p className="text-sm text-zinc-400 mb-3">
                        Powerful language for high-performance applications, game engines, embedded systems, and more.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                          OOP
                        </Badge>
                        <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                          Performance
                        </Badge>
                        <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                          Game Dev
                        </Badge>
                        <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                          Systems
                        </Badge>
                      </div>
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="libraries" className="border-zinc-800">
                          <AccordionTrigger className="text-sm font-medium text-zinc-300 hover:text-white py-2">
                            Popular Libraries & Tools
                          </AccordionTrigger>
                          <AccordionContent className="text-sm text-zinc-400">
                            <ul className="space-y-2 pl-2">
                              <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-blue-400"></div>
                                <span>Boost - Collection of libraries</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                                <span>Qt - GUI framework</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-purple-400"></div>
                                <span>Unreal Engine - Game development</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-yellow-400"></div>
                                <span>OpenCV - Computer vision</span>
                              </li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                        <BookmarkPlus className="mr-2 h-4 w-4" />
                        Save
                      </Button>
                      <Link href="/resources/cpp">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                          Explore Resources
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  {/* Go Card */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden group">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500/20 text-teal-400 ring-1 ring-teal-500/30">
                          <Code className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-zinc-100">Go</CardTitle>
                          <CardDescription className="text-zinc-400">Cloud & Microservices</CardDescription>
                        </div>
                        <div className="ml-auto flex items-center gap-1 text-yellow-400">
                          <Star className="h-4 w-4 fill-yellow-400" />
                          <span className="text-sm font-medium">4.7</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <p className="text-sm text-zinc-400 mb-3">
                        Modern language designed for simplicity, efficiency, and concurrency. Ideal for cloud services
                        and microservices.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                          Concurrency
                        </Badge>
                        <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                          Cloud
                        </Badge>
                        <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                          Microservices
                        </Badge>
                        <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                          Performance
                        </Badge>
                      </div>
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="libraries" className="border-zinc-800">
                          <AccordionTrigger className="text-sm font-medium text-zinc-300 hover:text-white py-2">
                            Popular Libraries & Tools
                          </AccordionTrigger>
                          <AccordionContent className="text-sm text-zinc-400">
                            <ul className="space-y-2 pl-2">
                              <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-blue-400"></div>
                                <span>Gin - Web framework</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                                <span>gRPC - Remote procedure call</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-purple-400"></div>
                                <span>Docker - Containerization</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-yellow-400"></div>
                                <span>Kubernetes - Container orchestration</span>
                              </li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                        <BookmarkPlus className="mr-2 h-4 w-4" />
                        Save
                      </Button>
                      <Link href="/resources/go">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                          Explore Resources
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  {/* Rust Card */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden group">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/20 text-red-400 ring-1 ring-red-500/30">
                          <Code className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-zinc-100">Rust</CardTitle>
                          <CardDescription className="text-zinc-400">Systems & WebAssembly</CardDescription>
                        </div>
                        <div className="ml-auto flex items-center gap-1 text-yellow-400">
                          <Star className="h-4 w-4 fill-yellow-400" />
                          <span className="text-sm font-medium">4.8</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <p className="text-sm text-zinc-400 mb-3">
                        Modern systems programming language focused on safety, speed, and concurrency without a garbage
                        collector.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                          Memory Safety
                        </Badge>
                        <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                          Systems
                        </Badge>
                        <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                          WebAssembly
                        </Badge>
                        <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                          Concurrency
                        </Badge>
                      </div>
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="libraries" className="border-zinc-800">
                          <AccordionTrigger className="text-sm font-medium text-zinc-300 hover:text-white py-2">
                            Popular Libraries & Tools
                          </AccordionTrigger>
                          <AccordionContent className="text-sm text-zinc-400">
                            <ul className="space-y-2 pl-2">
                              <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-blue-400"></div>
                                <span>Tokio - Async runtime</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                                <span>Actix - Web framework</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-purple-400"></div>
                                <span>Serde - Serialization framework</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-yellow-400"></div>
                                <span>Rocket - Web framework</span>
                              </li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                        <BookmarkPlus className="mr-2 h-4 w-4" />
                        Save
                      </Button>
                      <Link href="/resources/rust">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                          Explore Resources
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  {/* HTML/CSS Card */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden group">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-500/20 text-pink-400 ring-1 ring-pink-500/30">
                          <Code className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-zinc-100">HTML & CSS</CardTitle>
                          <CardDescription className="text-zinc-400">Web Fundamentals</CardDescription>
                        </div>
                        <div className="ml-auto flex items-center gap-1 text-yellow-400">
                          <Star className="h-4 w-4 fill-yellow-400" />
                          <span className="text-sm font-medium">4.9</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <p className="text-sm text-zinc-400 mb-3">
                        The building blocks of the web. HTML for structure and CSS for styling and layout of websites.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                          Responsive
                        </Badge>
                        <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                          Flexbox
                        </Badge>
                        <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                          Grid
                        </Badge>
                        <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                          Animations
                        </Badge>
                      </div>
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="libraries" className="border-zinc-800">
                          <AccordionTrigger className="text-sm font-medium text-zinc-300 hover:text-white py-2">
                            Popular Libraries & Tools
                          </AccordionTrigger>
                          <AccordionContent className="text-sm text-zinc-400">
                            <ul className="space-y-2 pl-2">
                              <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-blue-400"></div>
                                <span>Tailwind CSS - Utility-first CSS</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                                <span>Bootstrap - CSS framework</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-purple-400"></div>
                                <span>Sass - CSS preprocessor</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-yellow-400"></div>
                                <span>CSS Modules - Component-scoped CSS</span>
                              </li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                        <BookmarkPlus className="mr-2 h-4 w-4" />
                        Save
                      </Button>
                      <Link href="/resources/html-css">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                          Explore Resources
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Career Roadmaps Tab */}
            <TabsContent value="roadmaps" className="mt-6">
              <div className="grid gap-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-zinc-100">Specialized Career Roadmaps</h2>
                  <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300">
                    View All <ChevronLeft className="ml-1 h-4 w-4 rotate-180" />
                  </Button>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {/* Web Development Roadmap */}
                  <Link href="/roadmaps/web-development" className="block">
                    <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden group h-full transition-all hover:border-blue-500/50 hover:shadow-md hover:shadow-blue-500/10">
                      <CardHeader className="p-4 pb-2">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400 ring-1 ring-blue-500/30">
                            <Globe className="h-5 w-5" />
                          </div>
                          <div>
                            <CardTitle className="text-lg font-bold text-zinc-100">Web Development</CardTitle>
                            <CardDescription className="text-zinc-400">Frontend to Full-Stack</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-2">
                        <p className="text-sm text-zinc-400 mb-3">
                          Complete path to becoming a professional web developer, from HTML/CSS basics to advanced
                          full-stack applications.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            HTML/CSS
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            JavaScript
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            React
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            Node.js
                          </Badge>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button
                          size="sm"
                          className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                        >
                          View Roadmap
                        </Button>
                      </CardFooter>
                    </Card>
                  </Link>

                  {/* Data Science Roadmap */}
                  <Link href="/roadmaps/data-science" className="block">
                    <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden group h-full transition-all hover:border-purple-500/50 hover:shadow-md hover:shadow-purple-500/10">
                      <CardHeader className="p-4 pb-2">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/20 text-purple-400 ring-1 ring-purple-500/30">
                            <Database className="h-5 w-5" />
                          </div>
                          <div>
                            <CardTitle className="text-lg font-bold text-zinc-100">Data Science</CardTitle>
                            <CardDescription className="text-zinc-400">Analytics to Machine Learning</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-2">
                        <p className="text-sm text-zinc-400 mb-3">
                          Comprehensive guide to becoming a data scientist, covering statistics, data analysis,
                          visualization, and machine learning.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            Python
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            Statistics
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            ML
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            Big Data
                          </Badge>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button
                          size="sm"
                          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                        >
                          View Roadmap
                        </Button>
                      </CardFooter>
                    </Card>
                  </Link>

                  {/* AI/ML Roadmap */}
                  <Link href="/roadmaps/ai-ml" className="block">
                    <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden group h-full transition-all hover:border-green-500/50 hover:shadow-md hover:shadow-green-500/10">
                      <CardHeader className="p-4 pb-2">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/20 text-green-400 ring-1 ring-green-500/30">
                            <GitBranch className="h-5 w-5" />
                          </div>
                          <div>
                            <CardTitle className="text-lg font-bold text-zinc-100">AI & Machine Learning</CardTitle>
                            <CardDescription className="text-zinc-400">From Basics to Deep Learning</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-2">
                        <p className="text-sm text-zinc-400 mb-3">
                          Detailed path to mastering artificial intelligence and machine learning, from fundamentals to
                          advanced neural networks.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            Python
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            TensorFlow
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            Neural Networks
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            Deep Learning
                          </Badge>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button
                          size="sm"
                          className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700"
                        >
                          View Roadmap
                        </Button>
                      </CardFooter>
                    </Card>
                  </Link>

                  {/* UI Design Roadmap */}
                  <Link href="/roadmaps/ui-design" className="block">
                    <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden group h-full transition-all hover:border-pink-500/50 hover:shadow-md hover:shadow-pink-500/10">
                      <CardHeader className="p-4 pb-2">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-500/20 text-pink-400 ring-1 ring-pink-500/30">
                            <Layers className="h-5 w-5" />
                          </div>
                          <div>
                            <CardTitle className="text-lg font-bold text-zinc-100">UI Design</CardTitle>
                            <CardDescription className="text-zinc-400">From Wireframes to Prototypes</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-2">
                        <p className="text-sm text-zinc-400 mb-3">
                          Complete guide to becoming a UI designer, covering design principles, tools, prototyping, and
                          user testing.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            Figma
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            Design Systems
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            Prototyping
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            UX
                          </Badge>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button
                          size="sm"
                          className="w-full bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700"
                        >
                          View Roadmap
                        </Button>
                      </CardFooter>
                    </Card>
                  </Link>

                  {/* Graphic Design Roadmap */}
                  <Link href="/roadmaps/graphic-design" className="block">
                    <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden group h-full transition-all hover:border-orange-500/50 hover:shadow-md hover:shadow-orange-500/10">
                      <CardHeader className="p-4 pb-2">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/20 text-orange-400 ring-1 ring-orange-500/30">
                            <FileText className="h-5 w-5" />
                          </div>
                          <div>
                            <CardTitle className="text-lg font-bold text-zinc-100">Graphic Design</CardTitle>
                            <CardDescription className="text-zinc-400">Visual Communication</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-2">
                        <p className="text-sm text-zinc-400 mb-3">
                          Comprehensive path to becoming a graphic designer, covering design principles, typography,
                          color theory, and tools.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            Photoshop
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            Illustrator
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            Typography
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            Branding
                          </Badge>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button
                          size="sm"
                          className="w-full bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700"
                        >
                          View Roadmap
                        </Button>
                      </CardFooter>
                    </Card>
                  </Link>

                  {/* DevOps Roadmap */}
                  <Link href="/roadmaps/devops" className="block">
                    <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden group h-full transition-all hover:border-cyan-500/50 hover:shadow-md hover:shadow-cyan-500/10">
                      <CardHeader className="p-4 pb-2">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400 ring-1 ring-cyan-500/30">
                            <Code className="h-5 w-5" />
                          </div>
                          <div>
                            <CardTitle className="text-lg font-bold text-zinc-100">DevOps</CardTitle>
                            <CardDescription className="text-zinc-400">CI/CD & Infrastructure</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-2">
                        <p className="text-sm text-zinc-400 mb-3">
                          Complete guide to DevOps practices, covering CI/CD pipelines, containerization, cloud
                          infrastructure, and monitoring.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            Docker
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            Kubernetes
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            CI/CD
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            Cloud
                          </Badge>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button
                          size="sm"
                          className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
                        >
                          View Roadmap
                        </Button>
                      </CardFooter>
                    </Card>
                  </Link>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="courses">
              <div className="py-10 text-center">
                <h3 className="text-lg font-medium text-zinc-300">Browse video courses and tutorials</h3>
                <p className="text-zinc-400 mt-2">Click on a programming language to see related courses</p>
              </div>
            </TabsContent>

            <TabsContent value="my-learning">
              <div className="py-10 text-center">
                <h3 className="text-lg font-medium text-zinc-300">Track your learning progress</h3>
                <p className="text-zinc-400 mt-2">Click on a programming language to continue your learning journey</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

