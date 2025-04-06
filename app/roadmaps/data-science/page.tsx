"use client"
import Link from "next/link"
import {
  ChevronLeft,
  Database,
  BarChart,
  LineChart,
  BrainCircuit,
  FileSpreadsheet,
  Server,
  GitBranch,
  BookOpen,
  ExternalLink,
  CheckCircle2,
  Download,
} from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function DataScienceRoadmapPage() {
  // Function to handle roadmap download
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement("a")
    link.href = "/data-science-roadmap.pdf" // Path to your PDF file
    link.download = "data-science-roadmap.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920&text=Data+Science+Background')] bg-cover bg-center opacity-10 z-0"></div>
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
            <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-2">
              Data Science Roadmap
            </h1>
            <p className="text-zinc-400 max-w-3xl">
              A comprehensive guide to becoming a data scientist, from foundational skills to advanced machine learning
              techniques. Follow this roadmap to build the expertise needed for a successful career in data science.
            </p>
          </div>

          <div className="grid gap-8 mb-10">
            <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-zinc-100">Your Data Science Journey</CardTitle>
                <CardDescription className="text-zinc-400">
                  This roadmap outlines the progression from beginner to professional data scientist
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative mt-6 overflow-hidden">
                  <div className="absolute top-0 bottom-0 left-[19px] w-1 bg-purple-900/50"></div>
                  <ol className="relative space-y-8">
                    {[
                      {
                        title: "Foundations",
                        description: "Mathematics, statistics, and programming basics",
                        icon: <Database className="h-5 w-5" />,
                        color: "bg-purple-500",
                      },
                      {
                        title: "Data Analysis & Visualization",
                        description: "Exploratory data analysis and visualization techniques",
                        icon: <BarChart className="h-5 w-5" />,
                        color: "bg-blue-500",
                      },
                      {
                        title: "Machine Learning",
                        description: "Supervised and unsupervised learning algorithms",
                        icon: <BrainCircuit className="h-5 w-5" />,
                        color: "bg-green-500",
                      },
                      {
                        title: "Deep Learning",
                        description: "Neural networks and deep learning architectures",
                        icon: <LineChart className="h-5 w-5" />,
                        color: "bg-pink-500",
                      },
                      {
                        title: "Big Data & Cloud Computing",
                        description: "Distributed computing and cloud platforms",
                        icon: <Server className="h-5 w-5" />,
                        color: "bg-orange-500",
                      },
                      {
                        title: "Professional Development",
                        description: "Portfolio building, specialization, and career advancement",
                        icon: <GitBranch className="h-5 w-5" />,
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

          <Tabs defaultValue="foundations" className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 bg-zinc-800/50 text-zinc-400">
              <TabsTrigger
                value="foundations"
                className="data-[state=active]:bg-zinc-900 data-[state=active]:text-white"
              >
                Foundations
              </TabsTrigger>
              <TabsTrigger value="analysis" className="data-[state=active]:bg-zinc-900 data-[state=active]:text-white">
                Analysis
              </TabsTrigger>
              <TabsTrigger
                value="machine-learning"
                className="data-[state=active]:bg-zinc-900 data-[state=active]:text-white"
              >
                ML
              </TabsTrigger>
              <TabsTrigger
                value="deep-learning"
                className="data-[state=active]:bg-zinc-900 data-[state=active]:text-white"
              >
                Deep Learning
              </TabsTrigger>
              <TabsTrigger value="big-data" className="data-[state=active]:bg-zinc-900 data-[state=active]:text-white">
                Big Data
              </TabsTrigger>
              <TabsTrigger
                value="professional"
                className="data-[state=active]:bg-zinc-900 data-[state=active]:text-white"
              >
                Professional
              </TabsTrigger>
            </TabsList>

            {/* Foundations Tab */}
            <TabsContent value="foundations" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <Database className="h-4 w-4 text-purple-400" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-zinc-100">Mathematics & Statistics</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-zinc-400 mb-4">
                      Master the mathematical and statistical foundations essential for data science and machine
                      learning.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-zinc-200 mb-2">Key Topics</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            Linear Algebra
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            Calculus
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            Probability
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            Statistics
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            Hypothesis Testing
                          </Badge>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-zinc-200 mb-2">Software & Tools</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            NumPy
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            SciPy
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            MATLAB
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            R
                          </Badge>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-zinc-200 mb-2">Learning Checklist</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2 text-sm text-zinc-400">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Vectors, matrices, and matrix operations</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-zinc-400">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Derivatives, gradients, and optimization</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-zinc-400">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Probability distributions and random variables</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-zinc-400">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Descriptive and inferential statistics</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-zinc-400">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Statistical significance and hypothesis testing</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-zinc-800 bg-zinc-900/30 px-6 py-3">
                    <a
                      href="https://www.khanacademy.org/math/statistics-probability"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Khan Academy Statistics & Probability</span>
                    </a>
                  </CardFooter>
                </Card>

                <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <FileSpreadsheet className="h-4 w-4 text-blue-400" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-zinc-100">Programming for Data Science</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-zinc-400 mb-4">
                      Learn programming languages and tools essential for data manipulation, analysis, and modeling.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-zinc-200 mb-2">Key Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            Python
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            R
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            SQL
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            Jupyter Notebooks
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            Git
                          </Badge>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-zinc-200 mb-2">Software & Tools</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            Anaconda
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            VS Code
                          </Badge>
                          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                            RStudio
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
                            <span>Python fundamentals and data structures</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-zinc-400">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Data manipulation with Pandas</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-zinc-400">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>SQL for database querying</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-zinc-400">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Version control with Git</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-zinc-400">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Jupyter Notebooks for interactive computing</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-zinc-800 bg-zinc-900/30 px-6 py-3">
                    <a
                      href="https://www.python.org/doc/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Python Documentation</span>
                    </a>
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
                              href="https://www.kaggle.com/learn"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-blue-400"
                            >
                              Kaggle Learn - Free courses on data science and machine learning
                            </a>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-zinc-400">
                            <ExternalLink className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                            <a
                              href="https://www.datacamp.com/community/tutorials"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-blue-400"
                            >
                              DataCamp Community Tutorials
                            </a>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-zinc-400">
                            <ExternalLink className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                            <a
                              href="https://www.coursera.org/specializations/statistics"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-blue-400"
                            >
                              Statistics with R Specialization (Coursera)
                            </a>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-zinc-400">
                            <ExternalLink className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                            <a
                              href="https://ocw.mit.edu/courses/mathematics/18-650-statistics-for-applications-fall-2016/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-blue-400"
                            >
                              MIT OpenCourseWare - Statistics for Applications
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
                              href="https://www.amazon.com/Python-Data-Analysis-Wrangling-IPython/dp/1491957662"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-blue-400"
                            >
                              Python for Data Analysis by Wes McKinney
                            </a>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-zinc-400">
                            <BookOpen className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                            <a
                              href="https://www.statlearning.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-blue-400"
                            >
                              An Introduction to Statistical Learning by James, Witten, Hastie, and Tibshirani
                            </a>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-zinc-400">
                            <BookOpen className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                            <a
                              href="https://greenteapress.com/wp/think-stats-2e/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-blue-400"
                            >
                              Think Stats: Exploratory Data Analysis in Python by Allen B. Downey
                            </a>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-zinc-400">
                            <BookOpen className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                            <a
                              href="https://www.amazon.com/Practical-Statistics-Data-Scientists-Essential/dp/1491952962"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-blue-400"
                            >
                              Practical Statistics for Data Scientists by Peter Bruce and Andrew Bruce
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Other tabs would follow the same pattern */}
            {/* Analysis, Machine Learning, Deep Learning, Big Data, and Professional tabs */}
          </Tabs>

          <div className="mt-8 flex justify-center">
            <Button
              variant="outline"
              size="lg"
              className="border-purple-500/50 text-purple-400 hover:bg-purple-950/30"
              onClick={handleDownload}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Complete Data Science Roadmap PDF
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

