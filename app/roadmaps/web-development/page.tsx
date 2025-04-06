"use client"
import Link from "next/link"
import {
  ChevronLeft,
  Code,
  Globe,
  Server,
  Database,
  Layers,
  GitBranch,
  BookOpen,
  ExternalLink,
  Download,
  CheckCircle2,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function WebDevelopmentRoadmapPage() {
  // Function to handle roadmap download
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement("a")
    link.href = "/web-development-roadmap.pdf" // Path to your PDF file
    link.download = "web-development-roadmap.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920&text=Web+Development+Background')] bg-cover bg-center opacity-10 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-0"></div>

      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b border-zinc-800 bg-black/80 backdrop-blur-md px-4 md:px-6">
        <Link
          href="/resources"
          className="flex items-center gap-2 font-semibold text-zinc-300 hover:text-white transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
          <span>Back to Resources</span>
        </Link>
      </header>

      <main className="flex-1 p-4 md:p-6 relative z-1">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-2">
              Web Development Roadmap
            </h1>
            <p className="text-zinc-400 max-w-3xl">
              A comprehensive guide to becoming a professional web developer, from fundamentals to advanced full-stack
              applications. Follow this roadmap to build the skills needed for a successful career in web development.
            </p>
          </div>

          <div className="grid gap-8 mb-10">
            <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-zinc-100">Your Web Development Journey</CardTitle>
                <CardDescription className="text-zinc-400">
                  This roadmap outlines the progression from beginner to professional web developer
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative mt-6 overflow-hidden">
                  <div className="absolute top-0 bottom-0 left-[19px] w-1 bg-blue-900/50"></div>
                  <ol className="relative space-y-8">
                    {[
                      {
                        title: "Fundamentals",
                        description: "HTML, CSS, and JavaScript basics",
                        icon: <Code className="h-5 w-5" />,
                        color: "bg-blue-500",
                      },
                      {
                        title: "Frontend Development",
                        description: "Modern JavaScript frameworks and UI libraries",
                        icon: <Layers className="h-5 w-5" />,
                        color: "bg-purple-500",
                      },
                      {
                        title: "Backend Development",
                        description: "Server-side programming and APIs",
                        icon: <Server className="h-5 w-5" />,
                        color: "bg-green-500",
                      },
                      {
                        title: "Database Management",
                        description: "SQL, NoSQL, and data modeling",
                        icon: <Database className="h-5 w-5" />,
                        color: "bg-yellow-500",
                      },
                      {
                        title: "DevOps & Deployment",
                        description: "CI/CD, cloud services, and containerization",
                        icon: <GitBranch className="h-5 w-5" />,
                        color: "bg-red-500",
                      },
                      {
                        title: "Professional Development",
                        description: "Portfolio building, specialization, and career advancement",
                        icon: <Globe className="h-5 w-5" />,
                        color: "bg-cyan-500",
                      },
                    ].map((step, index) => (
                      <li key={index} className="relative pl-10">
                        <div
                          className={`absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full ${step.color} text-white shadow-md`}
                        >
                          {step.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                        <p className="text-zinc-400">{step.description}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="fundamentals" className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 bg-zinc-800/50 text-zinc-400">
              <TabsTrigger
                value="fundamentals"
                className="data-[state=active]:bg-zinc-900 data-[state=active]:text-white"
              >
                Fundamentals
              </TabsTrigger>
              <TabsTrigger value="frontend" className="data-[state=active]:bg-zinc-900 data-[state=active]:text-white">
                Frontend
              </TabsTrigger>
              <TabsTrigger value="backend" className="data-[state=active]:bg-zinc-900 data-[state=active]:text-white">
                Backend
              </TabsTrigger>
              <TabsTrigger value="database" className="data-[state=active]:bg-zinc-900 data-[state=active]:text-white">
                Database
              </TabsTrigger>
              <TabsTrigger value="devops" className="data-[state=active]:bg-zinc-900 data-[state=active]:text-white">
                DevOps
              </TabsTrigger>
              <TabsTrigger
                value="professional"
                className="data-[state=active]:bg-zinc-900 data-[state=active]:text-white"
              >
                Professional
              </TabsTrigger>
            </TabsList>

            {/* Fundamentals Tab */}
            <TabsContent value="fundamentals" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <Code className="h-4 w-4 text-blue-400" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-zinc-100">HTML & CSS Fundamentals</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-zinc-400 mb-4">
                      Master the building blocks of the web. Learn to structure content with HTML and style it with CSS.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-zinc-200 mb-2">Key Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            HTML5
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            CSS3
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            Responsive Design
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            Flexbox
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            CSS Grid
                          </Badge>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-zinc-200 mb-2">Software & Tools</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            VS Code
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            Chrome DevTools
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            CodePen
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            GitHub
                          </Badge>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-zinc-200 mb-2">Learning Checklist</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2 text-sm text-zinc-400">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>HTML document structure, tags, and semantic elements</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-zinc-400">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>CSS selectors, properties, and the box model</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-zinc-400">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Responsive layouts with media queries</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-zinc-400">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Flexbox and CSS Grid for modern layouts</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-zinc-400">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>CSS animations and transitions</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-zinc-800 bg-zinc-900/30 px-6 py-3">
                    <Link
                      href="/resources/html-css"
                      className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1"
                    >
                      <BookOpen className="h-4 w-4" />
                      <span>Explore HTML & CSS resources</span>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
                        <Code className="h-4 w-4 text-yellow-400" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-zinc-100">JavaScript Basics</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-zinc-400 mb-4">
                      Learn the programming language of the web. Master JavaScript fundamentals to add interactivity to
                      websites.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-zinc-200 mb-2">Key Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            JavaScript (ES6+)
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            DOM Manipulation
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            Event Handling
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            Fetch API
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            JSON
                          </Badge>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-zinc-200 mb-2">Software & Tools</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            VS Code
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            Chrome DevTools
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            ESLint
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            npm
                          </Badge>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-zinc-200 mb-2">Learning Checklist</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2 text-sm text-zinc-400">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>JavaScript syntax, variables, and data types</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-zinc-400">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Functions, objects, and arrays</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-zinc-400">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>DOM manipulation and event handling</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-zinc-400">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Asynchronous JavaScript (Promises, async/await)</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-zinc-400">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Fetching data from APIs</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-zinc-800 bg-zinc-900/30 px-6 py-3">
                    <Link
                      href="/resources/javascript"
                      className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1"
                    >
                      <BookOpen className="h-4 w-4" />
                      <span>Explore JavaScript resources</span>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden md:col-span-2">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-zinc-100">Recommended Learning Resources</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium text-zinc-200">Free Resources</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2 text-sm text-zinc-400">
                            <ExternalLink className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                            <a
                              href="https://www.freecodecamp.org/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-blue-400"
                            >
                              freeCodeCamp - Interactive Web Development Curriculum
                            </a>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-zinc-400">
                            <ExternalLink className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                            <a
                              href="https://developer.mozilla.org/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-blue-400"
                            >
                              MDN Web Docs - Comprehensive Web Documentation
                            </a>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-zinc-400">
                            <ExternalLink className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                            <a
                              href="https://www.w3schools.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-blue-400"
                            >
                              W3Schools - Web Development Tutorials
                            </a>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-zinc-400">
                            <ExternalLink className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                            <a
                              href="https://javascript.info/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-blue-400"
                            >
                              JavaScript.info - Modern JavaScript Tutorial
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium text-zinc-200">Recommended Books</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2 text-sm text-zinc-400">
                            <BookOpen className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                            <a
                              href="https://www.amazon.com/HTML-CSS-Design-Build-Websites/dp/1118008189"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-blue-400"
                            >
                              HTML and CSS: Design and Build Websites by Jon Duckett
                            </a>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-zinc-400">
                            <BookOpen className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                            <a
                              href="https://eloquentjavascript.net/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-blue-400"
                            >
                              Eloquent JavaScript by Marijn Haverbeke
                            </a>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-zinc-400">
                            <BookOpen className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                            <a
                              href="https://www.amazon.com/CSS-Secrets-Solutions-Everyday-Problems/dp/1449372635"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-blue-400"
                            >
                              CSS Secrets by Lea Verou
                            </a>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-zinc-400">
                            <BookOpen className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                            <a
                              href="https://github.com/getify/You-Dont-Know-JS"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-blue-400"
                            >
                              You Don't Know JS by Kyle Simpson
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Frontend Tab */}
            <TabsContent value="frontend" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <Layers className="h-4 w-4 text-blue-400" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-zinc-100">Modern JavaScript Frameworks</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-zinc-400 mb-4">
                      Learn popular JavaScript frameworks to build dynamic, interactive user interfaces efficiently.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-zinc-200 mb-2">Key Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            React
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            Vue.js
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            Angular
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            Svelte
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            Next.js
                          </Badge>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-zinc-200 mb-2">Software & Tools</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            VS Code
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            React DevTools
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            Webpack
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            Vite
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            npm/yarn
                          </Badge>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-zinc-200 mb-2">Learning Checklist</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2 text-sm text-zinc-400">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Component-based architecture</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-zinc-400">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>State management (Redux, Vuex, Context API)</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-zinc-400">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Routing and navigation</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-zinc-400">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>API integration and data fetching</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-zinc-400">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Server-side rendering and static site generation</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-zinc-800 bg-zinc-900/30 px-6 py-3">
                    <a
                      href="https://react.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Explore React Documentation</span>
                    </a>
                  </CardFooter>
                </Card>

                <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <Layers className="h-4 w-4 text-purple-400" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-zinc-100">CSS Frameworks & Design Systems</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-zinc-400 mb-4">
                      Leverage CSS frameworks and design systems to create beautiful, consistent user interfaces.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-zinc-200 mb-2">Key Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            Tailwind CSS
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            Bootstrap
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            Material UI
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            Styled Components
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            CSS Modules
                          </Badge>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-zinc-200 mb-2">Software & Tools</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            Figma
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            Storybook
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            PostCSS
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            SASS/SCSS
                          </Badge>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-zinc-200 mb-2">Learning Checklist</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2 text-sm text-zinc-400">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Utility-first CSS with Tailwind</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-zinc-400">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Component libraries and design systems</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-zinc-400">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>CSS-in-JS solutions</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-zinc-400">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Responsive and adaptive design</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-zinc-400">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Theming and dark mode implementation</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-zinc-800 bg-zinc-900/30 px-6 py-3">
                    <a
                      href="https://tailwindcss.com/docs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Explore Tailwind CSS Documentation</span>
                    </a>
                  </CardFooter>
                </Card>

                <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden md:col-span-2">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-zinc-100">Frontend Development Tools & Practices</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium text-zinc-200">Essential Tools</h4>
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="build-tools" className="border-zinc-800">
                            <AccordionTrigger className="text-sm font-medium text-zinc-300 hover:text-white py-2">
                              Build Tools & Module Bundlers
                            </AccordionTrigger>
                            <AccordionContent className="text-sm text-zinc-400">
                              <ul className="space-y-2 pl-2">
                                <li className="flex items-center gap-2">
                                  <div className="h-1.5 w-1.5 rounded-full bg-blue-400"></div>
                                  <span>Webpack - Module bundler for JavaScript applications</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                                  <span>Vite - Next-generation frontend build tool</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <div className="h-1.5 w-1.5 rounded-full bg-purple-400"></div>
                                  <span>Babel - JavaScript compiler for modern syntax</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <div className="h-1.5 w-1.5 rounded-full bg-yellow-400"></div>
                                  <span>ESBuild - Extremely fast JavaScript bundler</span>
                                </li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="testing" className="border-zinc-800">
                            <AccordionTrigger className="text-sm font-medium text-zinc-300 hover:text-white py-2">
                              Testing Tools
                            </AccordionTrigger>
                            <AccordionContent className="text-sm text-zinc-400">
                              <ul className="space-y-2 pl-2">
                                <li className="flex items-center gap-2">
                                  <div className="h-1.5 w-1.5 rounded-full bg-blue-400"></div>
                                  <span>Jest - JavaScript testing framework</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                                  <span>React Testing Library - DOM testing utilities</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <div className="h-1.5 w-1.5 rounded-full bg-purple-400"></div>
                                  <span>Cypress - End-to-end testing framework</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <div className="h-1.5 w-1.5 rounded-full bg-yellow-400"></div>
                                  <span>Playwright - Cross-browser testing automation</span>
                                </li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium text-zinc-200">Best Practices</h4>
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="performance" className="border-zinc-800">
                            <AccordionTrigger className="text-sm font-medium text-zinc-300 hover:text-white py-2">
                              Performance Optimization
                            </AccordionTrigger>
                            <AccordionContent className="text-sm text-zinc-400">
                              <ul className="space-y-2 pl-2">
                                <li className="flex items-center gap-2">
                                  <div className="h-1.5 w-1.5 rounded-full bg-blue-400"></div>
                                  <span>Code splitting and lazy loading</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                                  <span>Image optimization and WebP format</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <div className="h-1.5 w-1.5 rounded-full bg-purple-400"></div>
                                  <span>Caching strategies and service workers</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <div className="h-1.5 w-1.5 rounded-full bg-yellow-400"></div>
                                  <span>Core Web Vitals optimization</span>
                                </li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="accessibility" className="border-zinc-800">
                            <AccordionTrigger className="text-sm font-medium text-zinc-300 hover:text-white py-2">
                              Accessibility (A11y)
                            </AccordionTrigger>
                            <AccordionContent className="text-sm text-zinc-400">
                              <ul className="space-y-2 pl-2">
                                <li className="flex items-center gap-2">
                                  <div className="h-1.5 w-1.5 rounded-full bg-blue-400"></div>
                                  <span>ARIA roles and attributes</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                                  <span>Keyboard navigation and focus management</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <div className="h-1.5 w-1.5 rounded-full bg-purple-400"></div>
                                  <span>Color contrast and text readability</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <div className="h-1.5 w-1.5 rounded-full bg-yellow-400"></div>
                                  <span>Screen reader compatibility</span>
                                </li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Other tabs would follow the same pattern */}
            {/* Backend, Database, DevOps, and Professional tabs */}
          </Tabs>

          <div className="mt-8 flex justify-center">
            <Button
              variant="outline"
              size="lg"
              className="border-blue-500/50 text-blue-400 hover:bg-blue-950/30"
              onClick={handleDownload}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Complete Web Development Roadmap PDF
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

