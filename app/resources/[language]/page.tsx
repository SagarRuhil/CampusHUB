import Link from "next/link"
import {
  ArrowLeft,
  BookOpen,
  ChevronLeft,
  Code,
  ExternalLink,
  FileText,
  GitBranch,
  Github,
  Globe,
  Play,
  Star,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Language data
const languageData = {
  javascript: {
    name: "JavaScript",
    description: "The language of the web. Build interactive websites, server-side applications, and modern web apps.",
    icon: "Code",
    color: "yellow",
    level: "Beginner to Advanced",
    creator: "Brendan Eich, Netscape",
    releaseYear: "1995",
    latestVersion: "ES2022",
    paradigms: ["Object-Oriented", "Functional", "Event-Driven"],
    typingDiscipline: "Dynamic, Weak",
    useCases: [
      "Web Development (Frontend & Backend)",
      "Mobile App Development",
      "Game Development",
      "Desktop Applications",
      "Server-side Programming",
    ],
    libraries: [
      { name: "React", description: "A JavaScript library for building user interfaces", category: "UI" },
      { name: "Vue.js", description: "Progressive JavaScript framework for building UIs", category: "UI" },
      { name: "Angular", description: "Platform and framework for building client applications", category: "UI" },
      { name: "jQuery", description: "Fast, small, feature-rich JavaScript library", category: "DOM" },
      { name: "D3.js", description: "JavaScript library for data visualizations", category: "Data Visualization" },
      { name: "Three.js", description: "JavaScript 3D library", category: "Graphics" },
      { name: "Express", description: "Fast, unopinionated web framework for Node.js", category: "Backend" },
      {
        name: "Socket.io",
        description: "Enables real-time, bidirectional event-based communication",
        category: "Networking",
      },
    ],
    frameworks: [
      { name: "Next.js", description: "React framework for production", category: "Full Stack" },
      { name: "Nuxt.js", description: "Vue.js framework for building web applications", category: "Full Stack" },
      { name: "Gatsby", description: "React-based framework for building websites and apps", category: "Static Site" },
      { name: "Electron", description: "Build cross-platform desktop apps with web technologies", category: "Desktop" },
      { name: "React Native", description: "Build native mobile apps using React", category: "Mobile" },
      {
        name: "NestJS",
        description: "Progressive Node.js framework for building server-side applications",
        category: "Backend",
      },
    ],
    videos: [
      {
        title: "JavaScript Crash Course For Beginners",
        author: "Traversy Media",
        duration: "1 hour 40 minutes",
        views: "5.2M views",
        thumbnail: "JavaScript+Crash+Course",
        authorAvatar: "TM",
      },
      {
        title: "JavaScript Full Course - Learn JavaScript in 12 Hours",
        author: "Clever Programmer",
        duration: "12 hours",
        views: "3.8M views",
        thumbnail: "JavaScript+Full+Course",
        authorAvatar: "CP",
      },
      {
        title: "JavaScript DOM Manipulation - Full Course for Beginners",
        author: "freeCodeCamp",
        duration: "7 hours 30 minutes",
        views: "1.2M views",
        thumbnail: "JavaScript+DOM",
        authorAvatar: "FCC",
      },
    ],
    roadmapSteps: [
      {
        title: "JavaScript Fundamentals",
        description: "Learn the core concepts of JavaScript",
        topics: [
          "Variables & Data Types",
          "Operators",
          "Control Flow",
          "Functions",
          "Objects & Arrays",
          "Scope & Closures",
        ],
        resources: ["MDN Web Docs", "JavaScript.info", "Eloquent JavaScript (Book)"],
        duration: "4-6 weeks",
      },
      {
        title: "DOM Manipulation",
        description: "Learn to interact with HTML elements using JavaScript",
        topics: ["Selecting Elements", "Modifying Content", "Event Handling", "Form Validation", "DOM Traversal"],
        resources: ["MDN DOM Documentation", "JavaScript DOM Course (Traversy Media)"],
        duration: "2-3 weeks",
      },
      {
        title: "Asynchronous JavaScript",
        description: "Master asynchronous programming concepts",
        topics: ["Callbacks", "Promises", "Async/Await", "Fetch API", "Error Handling"],
        resources: ["JavaScript.info Async", "Asynchronous JavaScript (Net Ninja)"],
        duration: "3-4 weeks",
      },
      {
        title: "Modern JavaScript Features",
        description: "Learn ES6+ features and modern syntax",
        topics: [
          "Arrow Functions",
          "Destructuring",
          "Spread/Rest Operators",
          "Modules",
          "Template Literals",
          "Classes",
        ],
        resources: ["ES6 for Everyone (Wes Bos)", "MDN JavaScript Guide"],
        duration: "2-3 weeks",
      },
      {
        title: "Frontend Frameworks",
        description: "Learn a popular JavaScript framework",
        topics: ["React", "Vue", "Angular", "State Management", "Routing", "Component Architecture"],
        resources: ["React Documentation", "Vue.js Guide", "Angular Tutorial"],
        duration: "6-8 weeks",
      },
      {
        title: "Backend JavaScript",
        description: "Learn server-side JavaScript with Node.js",
        topics: ["Node.js Basics", "Express.js", "RESTful APIs", "Authentication", "Database Integration"],
        resources: ["Node.js Documentation", "Express.js Guide", "Node.js Crash Course"],
        duration: "4-6 weeks",
      },
    ],
  },
  python: {
    name: "Python",
    description: "Versatile language for web development, data science, AI, machine learning, and automation.",
    icon: "Code",
    color: "blue",
    level: "Beginner to Advanced",
    creator: "Guido van Rossum",
    releaseYear: "1991",
    latestVersion: "Python 3.11",
    paradigms: ["Object-Oriented", "Imperative", "Functional", "Procedural"],
    typingDiscipline: "Dynamic, Strong",
    useCases: [
      "Data Science & Analytics",
      "Machine Learning & AI",
      "Web Development",
      "Automation & Scripting",
      "Scientific Computing",
      "Game Development",
    ],
    libraries: [
      { name: "NumPy", description: "Fundamental package for scientific computing", category: "Scientific Computing" },
      { name: "Pandas", description: "Data analysis and manipulation tool", category: "Data Analysis" },
      {
        name: "Matplotlib",
        description: "Comprehensive library for creating static, animated, and interactive visualizations",
        category: "Data Visualization",
      },
      { name: "Scikit-learn", description: "Machine learning library", category: "Machine Learning" },
      {
        name: "TensorFlow",
        description: "End-to-end open source platform for machine learning",
        category: "Machine Learning",
      },
      { name: "PyTorch", description: "Open source machine learning framework", category: "Machine Learning" },
      { name: "Requests", description: "HTTP library for Python", category: "Networking" },
      { name: "Beautiful Soup", description: "Library for web scraping", category: "Web Scraping" },
    ],
    frameworks: [
      { name: "Django", description: "High-level Python web framework", category: "Web" },
      { name: "Flask", description: "Micro web framework for Python", category: "Web" },
      { name: "FastAPI", description: "Modern, fast web framework for building APIs", category: "Web" },
      { name: "Pyramid", description: "Open source Python web framework", category: "Web" },
      {
        name: "Kivy",
        description: "Open source Python library for rapid development of applications",
        category: "Mobile/Desktop",
      },
      { name: "PySpark", description: "Python API for Apache Spark", category: "Big Data" },
    ],
    videos: [
      {
        title: "Python Tutorial - Python Full Course for Beginners",
        author: "Programming with Mosh",
        duration: "6 hours",
        views: "23M views",
        thumbnail: "Python+Full+Course",
        authorAvatar: "PM",
      },
      {
        title: "Python for Data Science - Course for Beginners",
        author: "freeCodeCamp",
        duration: "4 hours 30 minutes",
        views: "3.1M views",
        thumbnail: "Python+Data+Science",
        authorAvatar: "FCC",
      },
      {
        title: "Python Django Tutorial for Beginners",
        author: "Corey Schafer",
        duration: "8 hours",
        views: "2.5M views",
        thumbnail: "Python+Django",
        authorAvatar: "CS",
      },
    ],
    roadmapSteps: [
      {
        title: "Python Basics",
        description: "Learn the fundamentals of Python programming",
        topics: ["Syntax", "Variables & Data Types", "Control Flow", "Functions", "Modules", "Error Handling"],
        resources: ["Python.org Documentation", "Automate the Boring Stuff with Python (Book)"],
        duration: "4-6 weeks",
      },
      {
        title: "Object-Oriented Programming",
        description: "Master object-oriented programming concepts in Python",
        topics: ["Classes & Objects", "Inheritance", "Encapsulation", "Polymorphism", "Magic Methods"],
        resources: ["Python OOP Tutorial (Corey Schafer)", "Python OOP Documentation"],
        duration: "3-4 weeks",
      },
      {
        title: "Data Structures & Algorithms",
        description: "Learn essential data structures and algorithms in Python",
        topics: [
          "Lists, Tuples, Sets, Dictionaries",
          "Stacks & Queues",
          "Sorting Algorithms",
          "Searching Algorithms",
          "Big O Notation",
        ],
        resources: ["Problem Solving with Algorithms and Data Structures using Python (Book)"],
        duration: "4-6 weeks",
      },
      {
        title: "Data Science & Analysis",
        description: "Learn to analyze and visualize data with Python",
        topics: ["NumPy", "Pandas", "Matplotlib", "Data Cleaning", "Statistical Analysis"],
        resources: ["Python for Data Analysis (Book)", "Data Science Course (freeCodeCamp)"],
        duration: "6-8 weeks",
      },
      {
        title: "Machine Learning",
        description: "Introduction to machine learning with Python",
        topics: [
          "Scikit-learn",
          "Supervised Learning",
          "Unsupervised Learning",
          "Model Evaluation",
          "Feature Engineering",
        ],
        resources: ["Hands-On Machine Learning with Scikit-Learn (Book)", "Machine Learning Course (Andrew Ng)"],
        duration: "8-12 weeks",
      },
      {
        title: "Web Development",
        description: "Build web applications with Python",
        topics: ["Django", "Flask", "RESTful APIs", "Database Integration", "Authentication", "Deployment"],
        resources: ["Django Documentation", "Flask Documentation", "Django for Beginners (Book)"],
        duration: "6-8 weeks",
      },
    ],
  },
  java: {
    name: "Java",
    description: "Build enterprise applications, Android apps, and large-scale systems with this robust language.",
    icon: "Code",
    color: "orange",
    level: "Beginner to Advanced",
    creator: "James Gosling, Sun Microsystems",
    releaseYear: "1995",
    latestVersion: "Java 21",
    paradigms: ["Object-Oriented", "Class-based", "Concurrent"],
    typingDiscipline: "Static, Strong",
    useCases: [
      "Enterprise Applications",
      "Android App Development",
      "Web Applications",
      "Big Data Processing",
      "Scientific Applications",
      "Financial Services",
    ],
    libraries: [
      { name: "Apache Commons", description: "Reusable Java components", category: "Utility" },
      { name: "Guava", description: "Google Core Libraries for Java", category: "Utility" },
      { name: "Jackson", description: "JSON library for Java", category: "Data Processing" },
      { name: "JUnit", description: "Unit testing framework", category: "Testing" },
      { name: "Log4j", description: "Logging library for Java", category: "Logging" },
      { name: "JavaFX", description: "Set of graphics and media packages", category: "UI" },
      { name: "JDBC", description: "Java Database Connectivity", category: "Database" },
      { name: "Mockito", description: "Mocking framework for unit tests", category: "Testing" },
    ],
    frameworks: [
      {
        name: "Spring",
        description: "Application framework and inversion of control container",
        category: "Enterprise",
      },
      { name: "Hibernate", description: "Object-relational mapping framework", category: "Database" },
      { name: "Apache Struts", description: "Web application framework", category: "Web" },
      {
        name: "JavaServer Faces",
        description: "Component-based UI framework for Java web applications",
        category: "Web",
      },
      { name: "Android SDK", description: "Software development kit for Android applications", category: "Mobile" },
      {
        name: "Apache Hadoop",
        description: "Framework for distributed storage and processing of big data",
        category: "Big Data",
      },
    ],
    videos: [
      {
        title: "Java Tutorial for Beginners",
        author: "Programming with Mosh",
        duration: "12 hours",
        views: "7.8M views",
        thumbnail: "Java+Tutorial",
        authorAvatar: "PM",
      },
      {
        title: "Java Full Course for Beginners",
        author: "freeCodeCamp",
        duration: "9 hours 30 minutes",
        views: "4.2M views",
        thumbnail: "Java+Full+Course",
        authorAvatar: "FCC",
      },
      {
        title: "Spring Boot Tutorial for Beginners",
        author: "Java Brains",
        duration: "6 hours",
        views: "1.8M views",
        thumbnail: "Spring+Boot",
        authorAvatar: "JB",
      },
    ],
    roadmapSteps: [
      {
        title: "Java Fundamentals",
        description: "Learn the core concepts of Java programming",
        topics: ["Syntax", "Data Types", "Control Flow", "Methods", "Classes & Objects", "Exception Handling"],
        resources: ["Oracle Java Tutorials", "Head First Java (Book)"],
        duration: "6-8 weeks",
      },
      {
        title: "Object-Oriented Programming",
        description: "Master object-oriented programming concepts in Java",
        topics: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction", "Interfaces", "Packages"],
        resources: ["Java OOP Tutorial (Telusko)", "Effective Java (Book)"],
        duration: "4-6 weeks",
      },
      {
        title: "Java Collections Framework",
        description: "Learn to work with Java collections",
        topics: ["Lists", "Sets", "Maps", "Queues", "Iterators", "Comparators"],
        resources: ["Java Collections Framework Documentation", "Java Collections Tutorial (Baeldung)"],
        duration: "3-4 weeks",
      },
      {
        title: "Java Advanced Features",
        description: "Explore advanced Java concepts",
        topics: ["Generics", "Multithreading", "Lambda Expressions", "Stream API", "I/O Operations", "Reflection"],
        resources: ["Java Concurrency in Practice (Book)", "Modern Java in Action (Book)"],
        duration: "6-8 weeks",
      },
      {
        title: "Java Enterprise Development",
        description: "Learn enterprise Java development",
        topics: ["Spring Framework", "Hibernate", "RESTful Web Services", "Microservices", "Security", "Testing"],
        resources: ["Spring Documentation", "Spring Boot in Action (Book)"],
        duration: "8-12 weeks",
      },
      {
        title: "Android Development",
        description: "Build mobile applications with Java",
        topics: [
          "Android SDK",
          "Activities & Fragments",
          "UI Design",
          "Data Storage",
          "APIs Integration",
          "Publishing",
        ],
        resources: ["Android Developer Documentation", "Android Programming: The Big Nerd Ranch Guide (Book)"],
        duration: "8-12 weeks",
      },
    ],
  },
}

export default function LanguageResourcePage({ params }: { params: { language: string } }) {
  const language = params.language.toLowerCase()

  // Check if the language exists in our data
  if (!languageData[language as keyof typeof languageData]) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-400 mb-4">Resource Not Found</h1>
          <p className="text-zinc-400 mb-6">The programming language you're looking for is not available.</p>
          <Link href="/resources">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Resources
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const data = languageData[language as keyof typeof languageData]
  const colorMap = {
    yellow: {
      bg: "bg-yellow-500/20",
      text: "text-yellow-400",
      ring: "ring-yellow-500/30",
      border: "border-yellow-500/50",
      gradient: "from-yellow-600 to-amber-600",
      hover: "hover:bg-yellow-700",
    },
    blue: {
      bg: "bg-blue-500/20",
      text: "text-blue-400",
      ring: "ring-blue-500/30",
      border: "border-blue-500/50",
      gradient: "from-blue-600 to-cyan-600",
      hover: "hover:bg-blue-700",
    },
    orange: {
      bg: "bg-orange-500/20",
      text: "text-orange-400",
      ring: "ring-orange-500/30",
      border: "border-orange-500/50",
      gradient: "from-orange-600 to-red-600",
      hover: "hover:bg-orange-700",
    },
  }

  const colorClasses = colorMap[data.color as keyof typeof colorMap]

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
                      {data.name}
                    </h1>
                    <p className="text-zinc-400">{data.level}</p>
                  </div>
                </div>

                <p className="text-lg text-zinc-300 mb-4 max-w-3xl">{data.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {data.paradigms.map((paradigm, index) => (
                    <Badge key={index} variant="outline" className="border-zinc-700 text-zinc-300">
                      {paradigm}
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-zinc-500">Created by</p>
                    <p className="text-zinc-300">{data.creator}</p>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">First Released</p>
                    <p className="text-zinc-300">{data.releaseYear}</p>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">Latest Version</p>
                    <p className="text-zinc-300">{data.latestVersion}</p>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">Typing</p>
                    <p className="text-zinc-300">{data.typingDiscipline}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button className={`bg-gradient-to-r ${colorClasses.gradient} hover:opacity-90 text-white`}>
                    Start Learning Path
                  </Button>
                  <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Official Documentation
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
                      {data.useCases.map((useCase, index) => (
                        <li key={index} className="flex items-center gap-2 text-zinc-400">
                          <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                          <span>{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Tabs for different sections */}
          <Tabs defaultValue="roadmap" className="w-full">
            <TabsList className="grid w-full grid-cols-4 md:w-[600px] bg-zinc-800/50 text-zinc-400">
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
            </TabsList>

            {/* Roadmap Tab */}
            <TabsContent value="roadmap" className="mt-6">
              <div className="grid gap-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-zinc-100">Complete {data.name} Learning Path</h2>
                  <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                    Download Roadmap PDF
                  </Button>
                </div>

                <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="relative border-l border-zinc-700 pl-6 pb-1">
                      <div className="space-y-8">
                        {data.roadmapSteps.map((step, index) => (
                          <div key={index} className="relative">
                            <div
                              className={`absolute -left-[29px] flex h-6 w-6 items-center justify-center rounded-full ${index < 2 ? colorClasses.bg.replace("/20", "") : "bg-zinc-700"} ${index < 2 ? "text-white" : "text-zinc-400"}`}
                            >
                              <span className="text-xs font-bold">{index + 1}</span>
                            </div>
                            <div>
                              <h3 className={`text-lg font-semibold ${index < 2 ? "text-zinc-100" : "text-zinc-400"}`}>
                                {step.title}
                              </h3>
                              <p className={`mt-1 text-sm ${index < 2 ? "text-zinc-400" : "text-zinc-500"}`}>
                                {step.description} • Estimated time: {step.duration}
                              </p>

                              <div className="mt-3 grid md:grid-cols-2 gap-4">
                                <div>
                                  <h4
                                    className={`text-sm font-medium ${index < 2 ? "text-zinc-300" : "text-zinc-500"}`}
                                  >
                                    Key Topics
                                  </h4>
                                  <ul className="mt-2 space-y-1">
                                    {step.topics.map((topic, topicIndex) => (
                                      <li key={topicIndex} className="flex items-center gap-2 text-sm">
                                        <div
                                          className={`h-1.5 w-1.5 rounded-full ${index < 2 ? colorClasses.text : "text-zinc-600"}`}
                                        ></div>
                                        <span className={index < 2 ? "text-zinc-400" : "text-zinc-600"}>{topic}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div>
                                  <h4
                                    className={`text-sm font-medium ${index < 2 ? "text-zinc-300" : "text-zinc-500"}`}
                                  >
                                    Recommended Resources
                                  </h4>
                                  <ul className="mt-2 space-y-1">
                                    {step.resources.map((resource, resourceIndex) => (
                                      <li key={resourceIndex} className="flex items-center gap-2 text-sm">
                                        <div
                                          className={`h-1.5 w-1.5 rounded-full ${index < 2 ? colorClasses.text : "text-zinc-600"}`}
                                        ></div>
                                        <span className={index < 2 ? "text-zinc-400" : "text-zinc-600"}>
                                          {resource}
                                        </span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>

                              <div className="mt-3">
                                <Button
                                  variant="link"
                                  className={`h-auto p-0 ${index < 2 ? colorClasses.text : "text-zinc-500"} ${index < 2 ? "hover:text-white" : "hover:text-zinc-400"}`}
                                >
                                  View Detailed Resources <ChevronLeft className="ml-1 h-3 w-3 rotate-180" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
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
                  <h2 className="text-2xl font-semibold text-zinc-100">Most Popular {data.name} Videos</h2>
                  <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                    View All Videos
                  </Button>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {data.videos.map((video, index) => (
                    <Card key={index} className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden group">
                      <CardHeader className="p-0">
                        <div className="relative aspect-video w-full overflow-hidden">
                          <img
                            src={`/placeholder.svg?height=225&width=400&text=${video.thumbnail}`}
                            alt={video.title}
                            className="h-full w-full object-cover transition-transform group-hover:scale-105 duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-lg font-bold text-white">{video.title}</h3>
                            <p className="text-sm text-zinc-300">{video.duration}</p>
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
                                src={`/placeholder.svg?height=32&width=32&text=${video.authorAvatar}`}
                                alt={video.author}
                              />
                              <AvatarFallback className={`bg-zinc-800 ${colorClasses.text}`}>
                                {video.authorAvatar}
                              </AvatarFallback>
                            </Avatar>
                            <span className="text-sm font-medium text-zinc-300">{video.author}</span>
                          </div>
                          <span className="text-xs text-zinc-400">{video.views}</span>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between p-4 pt-0">
                        <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                          Save for Later
                        </Button>
                        <Button size="sm" className={`bg-${data.color}-600 ${colorClasses.hover} text-white`}>
                          Watch Now
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                <div className="mt-8">
                  <h2 className="text-xl font-semibold text-zinc-100 mb-4">Recommended Courses</h2>

                  <div className="grid gap-4 md:grid-cols-2">
                    <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                      <CardHeader className="p-4 pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg font-bold text-zinc-100">{data.name} Masterclass</CardTitle>
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
                            <span className="ml-1 text-sm font-medium">4.9 (2,450 ratings)</span>
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
                            Advanced {data.name} Projects
                          </CardTitle>
                          <Badge className="bg-purple-500/20 text-purple-400">Intermediate</Badge>
                        </div>
                        <CardDescription className="text-zinc-400">Build real-world applications</CardDescription>
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
                  <h2 className="text-2xl font-semibold text-zinc-100">Essential {data.name} Libraries</h2>
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
                  {data.libraries.map((library, index) => (
                    <Card key={index} className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                      <CardHeader className="p-4 pb-2">
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex h-10 w-10 items-center justify-center rounded-lg ${colorClasses.bg} ${colorClasses.text} ring-1 ${colorClasses.ring}`}
                          >
                            <GitBranch className="h-5 w-5" />
                          </div>
                          <div>
                            <CardTitle className="text-lg font-bold text-zinc-100">{library.name}</CardTitle>
                            <CardDescription className="text-zinc-400">{library.category}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-2">
                        <p className="text-sm text-zinc-400 mb-3">{library.description}</p>
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
                        <Button size="sm" className={`bg-${data.color}-600 ${colorClasses.hover} text-white`}>
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Website
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Frameworks Tab */}
            <TabsContent value="frameworks" className="mt-6">
              <div className="grid gap-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-zinc-100">Popular {data.name} Frameworks</h2>
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
                  {data.frameworks.map((framework, index) => (
                    <Card key={index} className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                      <CardHeader className="p-4 pb-2">
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex h-12 w-12 items-center justify-center rounded-lg ${colorClasses.bg} ${colorClasses.text} ring-1 ${colorClasses.ring}`}
                          >
                            <Globe className="h-6 w-6" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <CardTitle className="text-lg font-bold text-zinc-100">{framework.name}</CardTitle>
                              <Badge className="bg-zinc-800 text-zinc-300">{framework.category}</Badge>
                            </div>
                            <CardDescription className="text-zinc-400">{framework.description}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-3">
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="features" className="border-zinc-800">
                            <AccordionTrigger className="text-sm font-medium text-zinc-300 hover:text-white py-2">
                              Key Features
                            </AccordionTrigger>
                            <AccordionContent className="text-sm text-zinc-400">
                              <ul className="space-y-2 pl-2">
                                <li className="flex items-center gap-2">
                                  <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                  <span>Feature-rich ecosystem</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                  <span>Active community support</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                  <span>Extensive documentation</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                  <span>Regular updates and maintenance</span>
                                </li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="learning" className="border-zinc-800">
                            <AccordionTrigger className="text-sm font-medium text-zinc-300 hover:text-white py-2">
                              Learning Resources
                            </AccordionTrigger>
                            <AccordionContent className="text-sm text-zinc-400">
                              <ul className="space-y-2 pl-2">
                                <li className="flex items-center gap-2">
                                  <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                  <span>Official documentation</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                  <span>Video tutorials</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                  <span>Community forums</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <div className={`h-1.5 w-1.5 rounded-full ${colorClasses.text}`}></div>
                                  <span>Books and courses</span>
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
                        <Button size="sm" className={`bg-${data.color}-600 ${colorClasses.hover} text-white`}>
                          Explore Framework
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

