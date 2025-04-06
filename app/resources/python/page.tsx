"use client"

import Link from "next/link"
import { BookOpen, ChevronLeft, ExternalLink, FileText, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PythonResourcePage() {
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
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920&text=Python+Background')] bg-cover bg-center opacity-10 z-0"></div>
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
                      src="/placeholder.svg?height=48&width=48&text=Py&fontsize=24&fontweight=bold&textcolor=ffffff&bgcolor=3776ab"
                      alt="Python Logo"
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
                      Python
                    </h1>
                    <p className="text-zinc-400">Beginner to Advanced</p>
                  </div>
                </div>

                <p className="text-lg text-zinc-300 mb-4 max-w-3xl">
                  A versatile, high-level programming language known for its readability and simplicity, widely used in
                  data science, web development, automation, and artificial intelligence.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                    Data Science
                  </Badge>
                  <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                    Web Development
                  </Badge>
                  <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                    Machine Learning
                  </Badge>
                  <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                    Automation
                  </Badge>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-zinc-500">Created by</p>
                    <p className="text-zinc-300">Guido van Rossum</p>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">First Released</p>
                    <p className="text-zinc-300">1991</p>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">Latest Version</p>
                    <p className="text-zinc-300">Python 3.12</p>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">Typing</p>
                    <p className="text-zinc-300">Dynamic, Strong</p>
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
                        <span>Data Analysis & Visualization</span>
                      </li>
                      <li className="flex items-center gap-2 text-zinc-400">
                        <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                        <span>Machine Learning & AI</span>
                      </li>
                      <li className="flex items-center gap-2 text-zinc-400">
                        <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                        <span>Web Development</span>
                      </li>
                      <li className="flex items-center gap-2 text-zinc-400">
                        <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                        <span>Automation & Scripting</span>
                      </li>
                      <li className="flex items-center gap-2 text-zinc-400">
                        <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                        <span>Scientific Computing</span>
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
                  <h2 className="text-2xl font-semibold text-zinc-100">Python Learning Roadmap</h2>
                  <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                    Download Roadmap PDF
                  </Button>
                </div>

                <div className="grid gap-6">
                  {/* Introduction Section */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-xl text-zinc-100">Getting Started with Python</CardTitle>
                      <CardDescription className="text-zinc-400">
                        Begin your Python journey with these fundamental concepts
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-lg border border-zinc-800 p-4">
                        <h3 className="text-lg font-medium text-zinc-100 mb-2">1. Python Basics</h3>
                        <p className="text-zinc-400 mb-3">Master the core syntax and concepts of Python</p>
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
                                Variables, numbers, strings, lists, dictionaries, tuples, sets
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
                                Conditionals, loops, comprehensions, exception handling
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
                                Function definitions, arguments, return values, lambda functions
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="rounded-lg border border-zinc-800 p-4">
                        <h3 className="text-lg font-medium text-zinc-100 mb-2">2. Python Programming Concepts</h3>
                        <p className="text-zinc-400 mb-3">Learn essential programming concepts in Python</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <div
                              className={`h-5 w-5 rounded-full ${colorClasses.bg} flex items-center justify-center mt-0.5`}
                            >
                              <span className="text-xs font-bold">1</span>
                            </div>
                            <div>
                              <p className="text-zinc-300 font-medium">File I/O</p>
                              <p className="text-zinc-500 text-sm">
                                Reading and writing files, working with CSV, JSON, and other formats
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
                              <p className="text-zinc-300 font-medium">Modules & Packages</p>
                              <p className="text-zinc-500 text-sm">
                                Importing modules, creating packages, virtual environments
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
                              <p className="text-zinc-300 font-medium">Error Handling</p>
                              <p className="text-zinc-500 text-sm">
                                Try/except blocks, raising exceptions, custom exceptions
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Intermediate Section */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-xl text-zinc-100">Intermediate Python</CardTitle>
                      <CardDescription className="text-zinc-400">
                        Deepen your Python knowledge with these advanced concepts
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-lg border border-zinc-800 p-4">
                        <h3 className="text-lg font-medium text-zinc-100 mb-2">3. Object-Oriented Programming</h3>
                        <p className="text-zinc-400 mb-3">Master object-oriented programming in Python</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <div
                              className={`h-5 w-5 rounded-full ${colorClasses.bg} flex items-center justify-center mt-0.5`}
                            >
                              <span className="text-xs font-bold">1</span>
                            </div>
                            <div>
                              <p className="text-zinc-300 font-medium">Classes & Objects</p>
                              <p className="text-zinc-500 text-sm">
                                Creating classes, instantiating objects, methods, attributes
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
                              <p className="text-zinc-300 font-medium">Inheritance & Polymorphism</p>
                              <p className="text-zinc-500 text-sm">
                                Class inheritance, method overriding, abstract classes
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
                              <p className="text-zinc-300 font-medium">Special Methods</p>
                              <p className="text-zinc-500 text-sm">
                                Magic methods, operator overloading, context managers
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="rounded-lg border border-zinc-800 p-4">
                        <h3 className="text-lg font-medium text-zinc-100 mb-2">4. Advanced Python Features</h3>
                        <p className="text-zinc-400 mb-3">Learn advanced Python features and techniques</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <div
                              className={`h-5 w-5 rounded-full ${colorClasses.bg} flex items-center justify-center mt-0.5`}
                            >
                              <span className="text-xs font-bold">1</span>
                            </div>
                            <div>
                              <p className="text-zinc-300 font-medium">Generators & Iterators</p>
                              <p className="text-zinc-500 text-sm">Creating generators, iterators, yield statement</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div
                              className={`h-5 w-5 rounded-full ${colorClasses.bg} flex items-center justify-center mt-0.5`}
                            >
                              <span className="text-xs font-bold">2</span>
                            </div>
                            <div>
                              <p className="text-zinc-300 font-medium">Decorators</p>
                              <p className="text-zinc-500 text-sm">Creating and using decorators, function wrappers</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div
                              className={`h-5 w-5 rounded-full ${colorClasses.bg} flex items-center justify-center mt-0.5`}
                            >
                              <span className="text-xs font-bold">3</span>
                            </div>
                            <div>
                              <p className="text-zinc-300 font-medium">Context Managers</p>
                              <p className="text-zinc-500 text-sm">Using with statement, creating context managers</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Specializations Section */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-xl text-zinc-100">Python Specializations</CardTitle>
                      <CardDescription className="text-zinc-400">
                        Choose a specialization path to focus your Python skills
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-lg border border-zinc-800 p-4">
                        <h3 className="text-lg font-medium text-zinc-100 mb-2">5. Data Science & Analysis</h3>
                        <p className="text-zinc-400 mb-3">Master data analysis and visualization with Python</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <div
                              className={`h-5 w-5 rounded-full ${colorClasses.bg} flex items-center justify-center mt-0.5`}
                            >
                              <span className="text-xs font-bold">1</span>
                            </div>
                            <div>
                              <p className="text-zinc-300 font-medium">NumPy & Pandas</p>
                              <p className="text-zinc-500 text-sm">Data manipulation, analysis, and cleaning</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div
                              className={`h-5 w-5 rounded-full ${colorClasses.bg} flex items-center justify-center mt-0.5`}
                            >
                              <span className="text-xs font-bold">2</span>
                            </div>
                            <div>
                              <p className="text-zinc-300 font-medium">Data Visualization</p>
                              <p className="text-zinc-500 text-sm">
                                Matplotlib, Seaborn, Plotly for creating visualizations
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
                              <p className="text-zinc-300 font-medium">Jupyter Notebooks</p>
                              <p className="text-zinc-500 text-sm">Interactive computing and data analysis</p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="rounded-lg border border-zinc-800 p-4">
                        <h3 className="text-lg font-medium text-zinc-100 mb-2">6. Web Development</h3>
                        <p className="text-zinc-400 mb-3">Build web applications with Python</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <div
                              className={`h-5 w-5 rounded-full ${colorClasses.bg} flex items-center justify-center mt-0.5`}
                            >
                              <span className="text-xs font-bold">1</span>
                            </div>
                            <div>
                              <p className="text-zinc-300 font-medium">Web Frameworks</p>
                              <p className="text-zinc-500 text-sm">
                                Django, Flask, FastAPI for building web applications
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
                              <p className="text-zinc-300 font-medium">RESTful APIs</p>
                              <p className="text-zinc-500 text-sm">Building and consuming APIs, authentication</p>
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
                              <p className="text-zinc-500 text-sm">SQL, ORM (SQLAlchemy, Django ORM), NoSQL</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Career Roadmap Section */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-xl text-zinc-100">Python Career Paths</CardTitle>
                      <CardDescription className="text-zinc-400">
                        Explore potential career paths for Python developers
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-lg border border-zinc-800 p-4">
                        <h3 className="text-lg font-medium text-zinc-100 mb-2">Data Scientist</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-zinc-400 mb-3">
                              Analyze and interpret complex data to help organizations make better decisions
                            </p>
                            <h4 className="text-zinc-300 font-medium mb-2">Key Skills:</h4>
                            <ul className="space-y-1">
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">Statistical Analysis</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">Machine Learning</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">Data Visualization</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">SQL & Database Knowledge</span>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-zinc-300 font-medium mb-2">Tools & Technologies:</h4>
                            <ul className="space-y-1">
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">Pandas, NumPy, SciPy</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">Scikit-learn, TensorFlow, PyTorch</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">Jupyter Notebooks</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">Tableau, Power BI</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">Cloud platforms like AWS, Azure, GCP</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border border-zinc-800 p-4">
                        <h3 className="text-lg font-medium text-zinc-100 mb-2">Backend Developer</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-zinc-400 mb-3">Build server-side applications and APIs with Python</p>
                            <h4 className="text-zinc-300 font-medium mb-2">Key Skills:</h4>
                            <ul className="space-y-1">
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">Web Frameworks (Django, Flask)</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">RESTful API Design</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">Database Design & ORM</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">Authentication & Security</span>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-zinc-300 font-medium mb-2">Tools & Technologies:</h4>
                            <ul className="space-y-1">
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">Django, Flask, FastAPI</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">PostgreSQL, MySQL, MongoDB</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">Docker, Kubernetes</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">AWS, GCP, Azure</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">Git, Postman</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border border-zinc-800 p-4">
                        <h3 className="text-lg font-medium text-zinc-100 mb-2">Automation Engineer</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-zinc-400 mb-3">
                              Create scripts and tools to automate repetitive tasks and processes
                            </p>
                            <h4 className="text-zinc-300 font-medium mb-2">Key Skills:</h4>
                            <ul className="space-y-1">
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">Scripting & Automation</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">System Administration</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">CI/CD Pipelines</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">Testing & Monitoring</span>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-zinc-300 font-medium mb-2">Tools & Technologies:</h4>
                            <ul className="space-y-1">
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">Selenium, Pytest</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">Jenkins, GitHub Actions</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">Ansible, Puppet, Chef</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">Linux/Unix Systems</span>
                              </li>
                              <li className="flex items-center gap-2 text-sm">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span className="text-zinc-400">Bash/Shell Scripting</span>
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

            {/* Documentation Tab */}
            <TabsContent value="documentation" className="mt-6">
              <div className="grid gap-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-zinc-100">Official Python Documentation</h2>
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
                          <CardTitle className="text-lg font-bold text-zinc-100">Python Documentation</CardTitle>
                        </div>
                      </div>
                      <CardDescription className="text-zinc-400">Official Python documentation</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm text-zinc-400 mb-3">
                        The official Python documentation provides a comprehensive guide to the Python language and
                        standard library.
                      </p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button
                        className={`w-full bg-gradient-to-r ${colorClasses.gradient} hover:opacity-90 text-white`}
                        onClick={() => window.open("https://docs.python.org/3/", "_blank", "noopener,noreferrer")}
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
                          <CardTitle className="text-lg font-bold text-zinc-100">Python Package Index</CardTitle>
                        </div>
                      </div>
                      <CardDescription className="text-zinc-400">
                        Repository of software for the Python programming language
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm text-zinc-400 mb-3">
                        The Python Package Index (PyPI) is a repository of software for the Python programming language,
                        where you can find and install packages.
                      </p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button
                        className={`w-full bg-gradient-to-r ${colorClasses.gradient} hover:opacity-90 text-white`}
                        onClick={() => window.open("https://pypi.org/", "_blank", "noopener,noreferrer")}
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
                          <CardTitle className="text-lg font-bold text-zinc-100">Real Python</CardTitle>
                        </div>
                      </div>
                      <CardDescription className="text-zinc-400">
                        Python tutorials for developers of all skill levels
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm text-zinc-400 mb-3">
                        Real Python offers in-depth tutorials, articles, and courses to help Python developers take
                        their coding skills to the next level.
                      </p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button
                        className={`w-full bg-gradient-to-r ${colorClasses.gradient} hover:opacity-90 text-white`}
                        onClick={() => window.open("https://realpython.com/", "_blank", "noopener,noreferrer")}
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

