"use client"

import Link from "next/link"
import { BookOpen, ChevronLeft, Code, ExternalLink, FileText, GitBranch, Github, Globe, Play, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function HtmlCssResourcePage() {
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
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920&text=HTML+CSS+Background')] bg-cover bg-center opacity-10 z-0"></div>
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
                    <div className="flex items-center justify-center">
                      <img
                        src="/placeholder.svg?height=48&width=48&text=HTML+CSS"
                        alt="HTML & CSS Logo"
                        className="h-8 w-8 object-contain"
                      />
                    </div>
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
                      HTML & CSS
                    </h1>
                    <p className="text-zinc-400">Beginner to Advanced</p>
                  </div>
                </div>

                <p className="text-lg text-zinc-300 mb-4 max-w-3xl">
                  The fundamental building blocks of the web. HTML provides structure while CSS adds style and layout to
                  create beautiful, responsive websites.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                    Web Development
                  </Badge>
                  <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                    Frontend
                  </Badge>
                  <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                    Responsive Design
                  </Badge>
                  <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                    Animations
                  </Badge>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-zinc-500">HTML Version</p>
                    <p className="text-zinc-300">HTML5</p>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">CSS Version</p>
                    <p className="text-zinc-300">CSS3</p>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">Specification</p>
                    <p className="text-zinc-300">W3C</p>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">Browser Support</p>
                    <p className="text-zinc-300">All Modern Browsers</p>
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
                        <span>Websites & Web Applications</span>
                      </li>
                      <li className="flex items-center gap-2 text-zinc-400">
                        <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                        <span>Landing Pages</span>
                      </li>
                      <li className="flex items-center gap-2 text-zinc-400">
                        <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                        <span>E-commerce Platforms</span>
                      </li>
                      <li className="flex items-center gap-2 text-zinc-400">
                        <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                        <span>Blogs & Content Sites</span>
                      </li>
                      <li className="flex items-center gap-2 text-zinc-400">
                        <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                        <span>Portfolios</span>
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
                  <h2 className="text-2xl font-semibold text-zinc-100">Complete HTML & CSS Learning Path</h2>
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
                            <h3 className="text-lg font-semibold text-zinc-100">HTML Fundamentals</h3>
                            <p className="mt-1 text-sm text-zinc-400">
                              Learn the core concepts of HTML • Estimated time: 2-3 weeks
                            </p>

                            <div className="mt-3 grid md:grid-cols-2 gap-4">
                              <div>
                                <h4 className="text-sm font-medium text-zinc-300">Key Topics</h4>
                                <ul className="mt-2 space-y-1">
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">HTML Document Structure</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">Elements & Attributes</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">Text Formatting</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">Links & Images</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">Lists & Tables</span>
                                  </li>
                                </ul>
                              </div>

                              <div>
                                <h4 className="text-sm font-medium text-zinc-300">Recommended Resources</h4>
                                <ul className="mt-2 space-y-1">
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <a
                                      href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-zinc-400 hover:text-zinc-300"
                                    >
                                      MDN Web Docs - HTML
                                    </a>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <a
                                      href="https://www.w3schools.com/html/"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-zinc-400 hover:text-zinc-300"
                                    >
                                      W3Schools HTML Tutorial
                                    </a>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <a
                                      href="http://html5doctor.com/"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-zinc-400 hover:text-zinc-300"
                                    >
                                      HTML5 Doctor
                                    </a>
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
                            <h3 className="text-lg font-semibold text-zinc-100">CSS Basics</h3>
                            <p className="mt-1 text-sm text-zinc-400">
                              Learn the fundamentals of CSS styling • Estimated time: 3-4 weeks
                            </p>

                            <div className="mt-3 grid md:grid-cols-2 gap-4">
                              <div>
                                <h4 className="text-sm font-medium text-zinc-300">Key Topics</h4>
                                <ul className="mt-2 space-y-1">
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">CSS Selectors</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">Box Model</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">Colors & Typography</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">Layouts & Positioning</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">Responsive Design Basics</span>
                                  </li>
                                </ul>
                              </div>

                              <div>
                                <h4 className="text-sm font-medium text-zinc-300">Recommended Resources</h4>
                                <ul className="mt-2 space-y-1">
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <a
                                      href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-zinc-400 hover:text-zinc-300"
                                    >
                                      MDN Web Docs - CSS
                                    </a>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <a
                                      href="https://css-tricks.com/"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-zinc-400 hover:text-zinc-300"
                                    >
                                      CSS-Tricks
                                    </a>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <a
                                      href="https://www.w3schools.com/css/"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-zinc-400 hover:text-zinc-300"
                                    >
                                      W3Schools CSS Tutorial
                                    </a>
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
                            <h3 className="text-lg font-semibold text-zinc-100">Advanced CSS & Layouts</h3>
                            <p className="mt-1 text-sm text-zinc-400">
                              Master modern CSS layout techniques • Estimated time: 4-5 weeks
                            </p>

                            <div className="mt-3 grid md:grid-cols-2 gap-4">
                              <div>
                                <h4 className="text-sm font-medium text-zinc-300">Key Topics</h4>
                                <ul className="mt-2 space-y-1">
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">Flexbox</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">CSS Grid</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">Responsive Design</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">Media Queries</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <span className="text-zinc-400">CSS Variables</span>
                                  </li>
                                </ul>
                              </div>

                              <div>
                                <h4 className="text-sm font-medium text-zinc-300">Recommended Resources</h4>
                                <ul className="mt-2 space-y-1">
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <a
                                      href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-zinc-400 hover:text-zinc-300"
                                    >
                                      CSS-Tricks Flexbox Guide
                                    </a>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <a
                                      href="https://css-tricks.com/snippets/css/complete-guide-grid/"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-zinc-400 hover:text-zinc-300"
                                    >
                                      CSS-Tricks Grid Guide
                                    </a>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                    <a
                                      href="https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-zinc-400 hover:text-zinc-300"
                                    >
                                      MDN Responsive Design
                                    </a>
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
                            <h3 className="text-lg font-semibold text-zinc-400">CSS Animations & Transforms</h3>
                            <p className="mt-1 text-sm text-zinc-500">
                              Create engaging animations and visual effects • Estimated time: 3-4 weeks
                            </p>

                            <div className="mt-3 grid md:grid-cols-2 gap-4">
                              <div>
                                <h4 className="text-sm font-medium text-zinc-500">Key Topics</h4>
                                <ul className="mt-2 space-y-1">
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className="h-1.5 w-1.5 rounded-full text-zinc-600"></div>
                                    <span className="text-zinc-600">CSS Transitions</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className="h-1.5 w-1.5 rounded-full text-zinc-600"></div>
                                    <span className="text-zinc-600">CSS Transforms</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className="h-1.5 w-1.5 rounded-full text-zinc-600"></div>
                                    <span className="text-zinc-600">CSS Animations</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className="h-1.5 w-1.5 rounded-full text-zinc-600"></div>
                                    <span className="text-zinc-600">Keyframes</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className="h-1.5 w-1.5 rounded-full text-zinc-600"></div>
                                    <span className="text-zinc-600">Performance Optimization</span>
                                  </li>
                                </ul>
                              </div>

                              <div>
                                <h4 className="text-sm font-medium text-zinc-500">Recommended Resources</h4>
                                <ul className="mt-2 space-y-1">
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className="h-1.5 w-1.5 rounded-full text-zinc-600"></div>
                                    <a
                                      href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-zinc-600 hover:text-zinc-500"
                                    >
                                      MDN CSS Animations
                                    </a>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className="h-1.5 w-1.5 rounded-full text-zinc-600"></div>
                                    <span className="text-zinc-600">CSS Animation Tricks</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className="h-1.5 w-1.5 rounded-full text-zinc-600"></div>
                                    <a
                                      href="https://animate.style/"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-zinc-600 hover:text-zinc-500"
                                    >
                                      Animate.css
                                    </a>
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

                        {/* Step 5 */}
                        <div className="relative">
                          <div className="absolute -left-[29px] flex h-6 w-6 items-center justify-center rounded-full bg-zinc-700 text-zinc-400">
                            <span className="text-xs font-bold">5</span>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-zinc-400">Modern CSS & Best Practices</h3>
                            <p className="mt-1 text-sm text-zinc-500">
                              Learn advanced CSS techniques and methodologies • Estimated time: 4-6 weeks
                            </p>

                            <div className="mt-3 grid md:grid-cols-2 gap-4">
                              <div>
                                <h4 className="text-sm font-medium text-zinc-500">Key Topics</h4>
                                <ul className="mt-2 space-y-1">
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className="h-1.5 w-1.5 rounded-full text-zinc-600"></div>
                                    <span className="text-zinc-600">CSS Preprocessors (Sass, Less)</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className="h-1.5 w-1.5 rounded-full text-zinc-600"></div>
                                    <span className="text-zinc-600">CSS Methodologies (BEM, SMACSS)</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className="h-1.5 w-1.5 rounded-full text-zinc-600"></div>
                                    <span className="text-zinc-600">CSS-in-JS</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className="h-1.5 w-1.5 rounded-full text-zinc-600"></div>
                                    <span className="text-zinc-600">CSS Custom Properties</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className="h-1.5 w-1.5 rounded-full text-zinc-600"></div>
                                    <span className="text-zinc-600">CSS Frameworks</span>
                                  </li>
                                </ul>
                              </div>

                              <div>
                                <h4 className="text-sm font-medium text-zinc-500">Recommended Resources</h4>
                                <ul className="mt-2 space-y-1">
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className="h-1.5 w-1.5 rounded-full text-zinc-600"></div>
                                    <a
                                      href="https://sass-lang.com/documentation"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-zinc-600 hover:text-zinc-500"
                                    >
                                      Sass Documentation
                                    </a>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className="h-1.5 w-1.5 rounded-full text-zinc-600"></div>
                                    <span className="text-zinc-600">BEM Methodology</span>
                                  </li>
                                  <li className="flex items-center gap-2 text-sm">
                                    <div className="h-1.5 w-1.5 rounded-full text-zinc-600"></div>
                                    <span className="text-zinc-600">CSS Modules</span>
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
                  <h2 className="text-2xl font-semibold text-zinc-100">Most Popular HTML & CSS Videos</h2>
                  <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                    View All Videos
                  </Button>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {/* Video 1 */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden group">
                    <CardHeader className="p-0">
                      <div className="relative aspect-video w-full overflow-hidden">
                        <a href="https://www.youtube.com/watch?v=pQNvj99mD8w" target="_blank" rel="noopener noreferrer">
                          <img
                            src="https://i.ytimg.com/vi/pQNvj99mD8w/mqdefault.jpg"
                            alt="HTML & CSS Crash Course"
                            className="h-full w-full object-cover transition-transform group-hover:scale-105 duration-300"
                          />
                        </a>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-lg font-bold text-white">HTML & CSS Crash Course for Beginners</h3>
                          <p className="text-sm text-zinc-300">4.5 hours</p>
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
                        <span className="text-xs text-zinc-400">3.2M views</span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                        Save for Later
                      </Button>
                      <Button size="sm" className={`bg-orange-600 hover:bg-orange-700 text-white`}>
                        <a href="https://www.youtube.com/watch?v=pQNvj99mD8w" target="_blank" rel="noopener noreferrer">
                          Watch Now
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Video 2 */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden group">
                    <CardHeader className="p-0">
                      <div className="relative aspect-video w-full overflow-hidden">
                        <a href="https://www.youtube.com/watch?v=1Rs2NDtDBsM" target="_blank" rel="noopener noreferrer">
                          <img
                            src="https://i.ytimg.com/vi/1Rs2NDtDBsM/mqdefault.jpg"
                            alt="CSS Flexbox & Grid"
                            className="h-full w-full object-cover transition-transform group-hover:scale-105 duration-300"
                          />
                        </a>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-lg font-bold text-white">CSS Flexbox & Grid Complete Guide</h3>
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
                            <AvatarImage src="/placeholder.svg?height=32&width=32&text=FCC" alt="freeCodeCamp" />
                            <AvatarFallback className={`bg-zinc-800 ${colorClasses.text}`}>FCC</AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium text-zinc-300">freeCodeCamp</span>
                        </div>
                        <span className="text-xs text-zinc-400">2.5M views</span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                        Save for Later
                      </Button>
                      <Button size="sm" className={`bg-orange-600 hover:bg-orange-700 text-white`}>
                        <a href="https://www.youtube.com/watch?v=1Rs2NDtDBsM" target="_blank" rel="noopener noreferrer">
                          Watch Now
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Video 3 */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden group">
                    <CardHeader className="p-0">
                      <div className="relative aspect-video w-full overflow-hidden">
                        <a href="https://www.youtube.com/watch?v=rgki5ukaPIw" target="_blank" rel="noopener noreferrer">
                          <img
                            src="https://i.ytimg.com/vi/rgki5ukaPIw/mqdefault.jpg"
                            alt="Responsive Web Design"
                            className="h-full w-full object-cover transition-transform group-hover:scale-105 duration-300"
                          />
                        </a>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-lg font-bold text-white">Responsive Web Design Masterclass</h3>
                          <p className="text-sm text-zinc-300">5 hours</p>
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
                            <AvatarImage src="/placeholder.svg?height=32&width=32&text=KP" alt="Kevin Powell" />
                            <AvatarFallback className={`bg-zinc-800 ${colorClasses.text}`}>KP</AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium text-zinc-300">Kevin Powell</span>
                        </div>
                        <span className="text-xs text-zinc-400">1.8M views</span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                        Save for Later
                      </Button>
                      <Button size="sm" className={`bg-orange-600 hover:bg-orange-700 text-white`}>
                        <a href="https://www.youtube.com/watch?v=rgki5ukaPIw" target="_blank" rel="noopener noreferrer">
                          Watch Now
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Video 4 */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden group">
                    <CardHeader className="p-0">
                      <div className="relative aspect-video w-full overflow-hidden">
                        <img
                          src="/placeholder.svg?height=225&width=400&text=CSS+Animations&fontsize=24&fontweight=bold&textcolor=ffffff&bgcolor=e65c00"
                          alt="CSS Animations"
                          className="h-full w-full object-cover transition-transform group-hover:scale-105 duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-lg font-bold text-white">CSS Animations & Transitions</h3>
                          <p className="text-sm text-zinc-300">2.5 hours</p>
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
                            <AvatarImage src="/placeholder.svg?height=32&width=32&text=DD" alt="Dev Ed" />
                            <AvatarFallback className={`bg-zinc-800 ${colorClasses.text}`}>DD</AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium text-zinc-300">Dev Ed</span>
                        </div>
                        <span className="text-xs text-zinc-400">1.2M views</span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                        Save for Later
                      </Button>
                      <Button size="sm" className={`bg-orange-600 hover:bg-orange-700 text-white`}>
                        <a href="https://www.youtube.com/watch?v=n4R29ely62M" target="_blank" rel="noopener noreferrer">
                          Watch Now
                        </a>
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
                          <CardTitle className="text-lg font-bold text-zinc-100">HTML & CSS Masterclass</CardTitle>
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
                            <div className={`h-2 w-2 rounded-full ${colorClasses.text}`}></div>
                            <span>Certificate included</span>
                          </div>
                          <div className="flex items-center gap-1 text-yellow-400">
                            <Star className="h-4 w-4 fill-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400" />
                            <span className="ml-1 text-sm font-medium">4.9 (3,250 ratings)</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button
                          className={`w-full bg-gradient-to-r ${colorClasses.gradient} hover:opacity-90 text-white`}
                          onClick={() =>
                            window.open(
                              "https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/",
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
                          <CardTitle className="text-lg font-bold text-zinc-100">CSS Grid & Flexbox Pro</CardTitle>
                          <Badge className="bg-purple-500/20 text-purple-400">Intermediate</Badge>
                        </div>
                        <CardDescription className="text-zinc-400">Master modern CSS layouts</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-2">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-zinc-300">25+ hours of content</span>
                            <span className="text-zinc-400">10 projects</span>
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
                            <span className="ml-1 text-sm font-medium">4.7 (1,820 ratings)</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button
                          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white"
                          onClick={() =>
                            window.open(
                              "https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/",
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
                  <h2 className="text-2xl font-semibold text-zinc-100">Essential CSS Libraries</h2>
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
                  {/* Animate.css Library */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-lg ${colorClasses.bg} ${colorClasses.text} ring-1 ${colorClasses.ring}`}
                        >
                          <GitBranch className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-zinc-100">Animate.css</CardTitle>
                          <CardDescription className="text-zinc-400">Animation Library</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <p className="text-sm text-zinc-400 mb-3">
                        A cross-browser library of CSS animations. Just add a class and you're set.
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
                        <a
                          href="https://animate.style/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <FileText className="mr-2 h-4 w-4" />
                          Documentation
                        </a>
                      </Button>
                      <Button size="sm" className={`bg-orange-600 hover:bg-orange-700 text-white`}>
                        <a
                          href="https://animate.style/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Website
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Normalize.css Library */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-lg ${colorClasses.bg} ${colorClasses.text} ring-1 ${colorClasses.ring}`}
                        >
                          <GitBranch className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-zinc-100">Normalize.css</CardTitle>
                          <CardDescription className="text-zinc-400">CSS Reset</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <p className="text-sm text-zinc-400 mb-3">
                        A modern, HTML5-ready alternative to CSS resets that normalizes styles across browsers.
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
                        <a
                          href="https://necolas.github.io/normalize.css/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <FileText className="mr-2 h-4 w-4" />
                          Documentation
                        </a>
                      </Button>
                      <Button size="sm" className={`bg-orange-600 hover:bg-orange-700 text-white`}>
                        <a
                          href="https://necolas.github.io/normalize.css/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Website
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Font Awesome Library */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-lg ${colorClasses.bg} ${colorClasses.text} ring-1 ${colorClasses.ring}`}
                        >
                          <GitBranch className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-zinc-100">Font Awesome</CardTitle>
                          <CardDescription className="text-zinc-400">Icon Library</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <p className="text-sm text-zinc-400 mb-3">
                        The web's most popular icon set and toolkit, used by millions of designers and developers.
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
                        <a
                          href="https://fontawesome.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <FileText className="mr-2 h-4 w-4" />
                          Documentation
                        </a>
                      </Button>
                      <Button size="sm" className={`bg-orange-600 hover:bg-orange-700 text-white`}>
                        <a
                          href="https://fontawesome.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Website
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* PureCSS Library */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-lg ${colorClasses.bg} ${colorClasses.text} ring-1 ${colorClasses.ring}`}
                        >
                          <GitBranch className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-zinc-100">PureCSS</CardTitle>
                          <CardDescription className="text-zinc-400">CSS Framework</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <p className="text-sm text-zinc-400 mb-3">
                        A set of small, responsive CSS modules that you can use in every web project.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-zinc-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Github className="h-4 w-4" />
                          <span>Open Source</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4" />
                          <span>Lightweight</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                        <a
                          href="https://purecss.io/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <FileText className="mr-2 h-4 w-4" />
                          Documentation
                        </a>
                      </Button>
                      <Button size="sm" className={`bg-orange-600 hover:bg-orange-700 text-white`}>
                        <a
                          href="https://purecss.io/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Website
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Bulma Library */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-lg ${colorClasses.bg} ${colorClasses.text} ring-1 ${colorClasses.ring}`}
                        >
                          <GitBranch className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-zinc-100">Bulma</CardTitle>
                          <CardDescription className="text-zinc-400">CSS Framework</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <p className="text-sm text-zinc-400 mb-3">
                        A free, open source CSS framework based on Flexbox with a focus on responsiveness.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-zinc-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Github className="h-4 w-4" />
                          <span>Open Source</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4" />
                          <span>Modern & Responsive</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                        <a
                          href="https://bulma.io/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <FileText className="mr-2 h-4 w-4" />
                          Documentation
                        </a>
                      </Button>
                      <Button size="sm" className={`bg-orange-600 hover:bg-orange-700 text-white`}>
                        <a
                          href="https://bulma.io/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
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
                  <h2 className="text-2xl font-semibold text-zinc-100">Popular CSS Frameworks</h2>
                  <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                    Compare Frameworks
                  </Button>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {/* Bootstrap Framework */}
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
                            <CardTitle className="text-lg font-bold text-zinc-100">Bootstrap</CardTitle>
                            <Badge className="bg-zinc-800 text-zinc-300">UI Framework</Badge>
                          </div>
                          <CardDescription className="text-zinc-400">Popular responsive framework</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-3">
                      <p className="text-sm text-zinc-400 mb-4">
                        The world's most popular framework for building responsive, mobile-first sites with a vast
                        component library.
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
                                <span>Responsive grid system</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span>Extensive component library</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span>JavaScript plugins</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                <span>Customizable with Sass</span>
                              </li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                        <a
                          href="https://github.com/twbs/bootstrap"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                      <Button size="sm" className={`bg-orange-600 hover:bg-orange-700 text-white`}>
                        <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
                          Explore Framework
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Tailwind CSS Framework */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400 ring-1 ring-cyan-500/30">
                          <Globe className="h-6 w-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <CardTitle className="text-lg font-bold text-zinc-100">Tailwind CSS</CardTitle>
                            <Badge className="bg-zinc-800 text-zinc-300">Utility-First</Badge>
                          </div>
                          <CardDescription className="text-zinc-400">Modern utility-first framework</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-3">
                      <p className="text-sm text-zinc-400 mb-4">
                        A utility-first CSS framework packed with classes that can be composed to build any design,
                        directly in your markup.
                      </p>

                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="features" className="border-zinc-800">
                          <AccordionTrigger className="text-sm font-medium text-zinc-300 hover:text-white py-2">
                            Key Features
                          </AccordionTrigger>
                          <AccordionContent className="text-sm text-zinc-400">
                            <ul className="space-y-2 pl-2">
                              <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full text-cyan-400"></div>
                                <span>Utility-first approach</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full text-cyan-400"></div>
                                <span>Highly customizable</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full text-cyan-400"></div>
                                <span>Responsive design</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full text-cyan-400"></div>
                                <span>Dark mode support</span>
                              </li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                        <a
                          href="https://github.com/tailwindlabs/tailwindcss"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                      <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700 text-white">
                        <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
                          Explore Framework
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Foundation Framework */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400 ring-1 ring-blue-500/30">
                          <Globe className="h-6 w-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <CardTitle className="text-lg font-bold text-zinc-100">Foundation</CardTitle>
                            <Badge className="bg-zinc-800 text-zinc-300">Enterprise-Ready</Badge>
                          </div>
                          <CardDescription className="text-zinc-400">Advanced responsive framework</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-3">
                      <p className="text-sm text-zinc-400 mb-4">
                        A responsive front-end framework that makes it easy to design beautiful responsive websites,
                        apps, and emails.
                      </p>

                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="features" className="border-zinc-800">
                          <AccordionTrigger className="text-sm font-medium text-zinc-300 hover:text-white py-2">
                            Key Features
                          </AccordionTrigger>
                          <AccordionContent className="text-sm text-zinc-400">
                            <ul className="space-y-2 pl-2">
                              <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full text-blue-400"></div>
                                <span>Responsive grid</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full text-blue-400"></div>
                                <span>Semantic markup</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full text-blue-400"></div>
                                <span>Accessibility-focused</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full text-blue-400"></div>
                                <span>Email framework</span>
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
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                        <a href="https://get.foundation/" target="_blank" rel="noopener noreferrer">
                          Explore Framework
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Materialize CSS Framework */}
                  <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/20 text-red-400 ring-1 ring-red-500/30">
                          <Globe className="h-6 w-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <CardTitle className="text-lg font-bold text-zinc-100">Materialize CSS</CardTitle>
                            <Badge className="bg-zinc-800 text-zinc-300">Material Design</Badge>
                          </div>
                          <CardDescription className="text-zinc-400">Material Design framework</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-3">
                      <p className="text-sm text-zinc-400 mb-4">
                        A modern responsive CSS framework based on Material Design by Google.
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
                                <span>Material Design aesthetics</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full text-red-400"></div>
                                <span>Responsive layouts</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full text-red-400"></div>
                                <span>Built-in animations</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full text-red-400"></div>
                                <span>JavaScript components</span>
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
                        <a href="https://materializecss.com/" target="_blank" rel="noopener noreferrer">
                          Explore Framework
                        </a>
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
                            <th className="text-left p-4 text-zinc-300 font-medium">Size</th>
                            <th className="text-left p-4 text-zinc-300 font-medium">Learning Curve</th>
                            <th className="text-left p-4 text-zinc-300 font-medium">Best For</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-zinc-800">
                            <td className="p-4 text-zinc-100">Bootstrap</td>
                            <td className="p-4 text-zinc-400">Component-based</td>
                            <td className="p-4 text-zinc-400">~150KB</td>
                            <td className="p-4 text-zinc-400">Easy</td>
                            <td className="p-4 text-zinc-400">Rapid prototyping</td>
                          </tr>
                          <tr className="border-b border-zinc-800">
                            <td className="p-4 text-zinc-100">Tailwind CSS</td>
                            <td className="p-4 text-zinc-400">Utility-first</td>
                            <td className="p-4 text-zinc-400">~10KB (purged)</td>
                            <td className="p-4 text-zinc-400">Moderate</td>
                            <td className="p-4 text-zinc-400">Custom designs</td>
                          </tr>
                          <tr className="border-b border-zinc-800">
                            <td className="p-4 text-zinc-100">Foundation</td>
                            <td className="p-4 text-zinc-400">Component-based</td>
                            <td className="p-4 text-zinc-400">~120KB</td>
                            <td className="p-4 text-zinc-400">Moderate</td>
                            <td className="p-4 text-zinc-400">Enterprise applications</td>
                          </tr>
                          <tr>
                            <td className="p-4 text-zinc-100">Materialize</td>
                            <td className="p-4 text-zinc-400">Material Design</td>
                            <td className="p-4 text-zinc-400">~160KB</td>
                            <td className="p-4 text-zinc-400">Easy</td>
                            <td className="p-4 text-zinc-400">Google-style interfaces</td>
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
                  <h2 className="text-2xl font-semibold text-zinc-100">HTML & CSS Documentation</h2>
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
                        Comprehensive documentation for web technologies
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm text-zinc-400 mb-3">
                        The MDN Web Docs site provides information about Open Web technologies including HTML, CSS, and
                        JavaScript. It's the most comprehensive and accurate resource for web developers.
                      </p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button
                        className={`w-full bg-gradient-to-r ${colorClasses.gradient} hover:opacity-90 text-white`}
                        onClick={() => window.open("https://developer.mozilla.org/", "_blank", "noopener,noreferrer")}
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
                          <CardTitle className="text-lg font-bold text-zinc-100">W3Schools</CardTitle>
                        </div>
                      </div>
                      <CardDescription className="text-zinc-400">
                        Beginner-friendly tutorials and references
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm text-zinc-400 mb-3">
                        W3Schools offers free tutorials, references, and exercises in all web development technologies,
                        including HTML and CSS, with interactive examples and easy-to-understand explanations.
                      </p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button
                        className={`w-full bg-gradient-to-r ${colorClasses.gradient} hover:opacity-90 text-white`}
                        onClick={() => window.open("https://www.w3schools.com/", "_blank", "noopener,noreferrer")}
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
                          <CardTitle className="text-lg font-bold text-zinc-100">CSS-Tricks</CardTitle>
                        </div>
                      </div>
                      <CardDescription className="text-zinc-400">
                        Articles, tutorials, and guides for CSS
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm text-zinc-400 mb-3">
                        CSS-Tricks is a website dedicated to teaching all things web design and development, with a
                        strong focus on CSS. It features articles, guides, and tutorials for all skill levels.
                      </p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button
                        className={`w-full bg-gradient-to-r ${colorClasses.gradient} hover:opacity-90 text-white`}
                        onClick={() => window.open("https://css-tricks.com/", "_blank", "noopener,noreferrer")}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Open Website
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
                          <CardTitle className="text-lg font-bold text-zinc-100">HTML5 Doctor</CardTitle>
                        </div>
                      </div>
                      <CardDescription className="text-zinc-400">HTML5 elements and semantics guide</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm text-zinc-400 mb-3">
                        HTML5 Doctor helps you implement HTML5 today with practical advice and detailed information
                        about HTML5 elements, attributes, and semantics.
                      </p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button
                        className={`w-full bg-gradient-to-r ${colorClasses.gradient} hover:opacity-90 text-white`}
                        onClick={() => window.open("http://html5doctor.com/", "_blank", "noopener,noreferrer")}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Open Website
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
                          <CardTitle className="text-lg font-bold text-zinc-100">Can I Use</CardTitle>
                        </div>
                      </div>
                      <CardDescription className="text-zinc-400">Browser compatibility tables</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm text-zinc-400 mb-3">
                        "Can I use" provides up-to-date browser support tables for support of front-end web technologies
                        on desktop and mobile web browsers.
                      </p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button
                        className={`w-full bg-gradient-to-r ${colorClasses.gradient} hover:opacity-90 text-white`}
                        onClick={() => window.open("https://caniuse.com/", "_blank", "noopener,noreferrer")}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Open Website
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
                          <CardTitle className="text-lg font-bold text-zinc-100">W3C Standards</CardTitle>
                        </div>
                      </div>
                      <CardDescription className="text-zinc-400">Official web standards documentation</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm text-zinc-400 mb-3">
                        The World Wide Web Consortium (W3C) is the main international standards organization for the
                        World Wide Web. It develops specifications, guidelines, and tools for HTML and CSS.
                      </p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button
                        className={`w-full bg-gradient-to-r ${colorClasses.gradient} hover:opacity-90 text-white`}
                        onClick={() => window.open("https://www.w3.org/standards/", "_blank", "noopener,noreferrer")}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Open Website
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

