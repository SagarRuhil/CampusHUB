"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, BookOpen, Code, Database, LineChart, PieChart, Trophy } from "lucide-react"
import Link from "next/link"

// Declare variables that were previously undeclared
const completedSteps = 3
const totalSteps = 7
const progressPercentage = (completedSteps / totalSteps) * 100

export default function DataAnalysisRoadmap() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Data Analysis Roadmap</h1>

      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-semibold">Your Progress</h2>
          <span className="text-sm text-muted-foreground">
            {completedSteps}/{totalSteps} steps completed
          </span>
        </div>
        <Progress value={progressPercentage} className="h-2" />
      </div>

      <Tabs defaultValue="beginner">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="beginner">Beginner</TabsTrigger>
          <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        <TabsContent value="beginner">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-green-500 border-2">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2 mb-3">
                    <Database className="h-5 w-5 text-green-500" />
                    <h3 className="font-semibold">Fundamentals of Data</h3>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full bg-green-100 text-green-800 border-green-300"
                  >
                    Completed
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn the basics of data types, structures, and collection methods.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <BookOpen className="h-4 w-4" />
                    <span>8 lessons</span>
                  </div>
                  <Link href="#">
                    <Button variant="ghost" size="sm" className="gap-1">
                      Review <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-500 border-2">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2 mb-3">
                    <LineChart className="h-5 w-5 text-green-500" />
                    <h3 className="font-semibold">Excel & Spreadsheets</h3>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full bg-green-100 text-green-800 border-green-300"
                  >
                    Completed
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Master spreadsheet tools for data organization and basic analysis.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <BookOpen className="h-4 w-4" />
                    <span>12 lessons</span>
                  </div>
                  <Link href="#">
                    <Button variant="ghost" size="sm" className="gap-1">
                      Review <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-500 border-2">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2 mb-3">
                    <PieChart className="h-5 w-5 text-green-500" />
                    <h3 className="font-semibold">Basic Statistics</h3>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full bg-green-100 text-green-800 border-green-300"
                  >
                    Completed
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Understand descriptive statistics, probability, and distributions.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <BookOpen className="h-4 w-4" />
                    <span>10 lessons</span>
                  </div>
                  <Link href="#">
                    <Button variant="ghost" size="sm" className="gap-1">
                      Review <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2 mb-3">
                    <Code className="h-5 w-5" />
                    <h3 className="font-semibold">Introduction to SQL</h3>
                  </div>
                  <Button variant="outline" size="sm" className="rounded-full">
                    In Progress
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn to query databases and extract valuable information.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <BookOpen className="h-4 w-4" />
                    <span>14 lessons</span>
                  </div>
                  <Link href="#">
                    <Button variant="ghost" size="sm" className="gap-1">
                      Continue <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="intermediate">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2 mb-3">
                    <Code className="h-5 w-5" />
                    <h3 className="font-semibold">Python for Data Analysis</h3>
                  </div>
                  <Button variant="outline" size="sm" className="rounded-full">
                    Not Started
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn Python libraries like Pandas and NumPy for data manipulation.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <BookOpen className="h-4 w-4" />
                    <span>16 lessons</span>
                  </div>
                  <Link href="#">
                    <Button variant="ghost" size="sm" className="gap-1">
                      Start <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2 mb-3">
                    <LineChart className="h-5 w-5" />
                    <h3 className="font-semibold">Data Visualization</h3>
                  </div>
                  <Button variant="outline" size="sm" className="rounded-full">
                    Not Started
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Master tools like Matplotlib, Seaborn, and Tableau for effective visualizations.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <BookOpen className="h-4 w-4" />
                    <span>12 lessons</span>
                  </div>
                  <Link href="#">
                    <Button variant="ghost" size="sm" className="gap-1">
                      Start <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="advanced">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2 mb-3">
                    <Trophy className="h-5 w-5" />
                    <h3 className="font-semibold">Advanced Statistical Analysis</h3>
                  </div>
                  <Button variant="outline" size="sm" className="rounded-full">
                    Not Started
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Dive into hypothesis testing, regression analysis, and experimental design.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <BookOpen className="h-4 w-4" />
                    <span>15 lessons</span>
                  </div>
                  <Link href="#">
                    <Button variant="ghost" size="sm" className="gap-1">
                      Start <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Recommended Resources</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Data Analysis with Python</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Comprehensive course covering Python libraries for data analysis.
              </p>
              <Link href="#">
                <Button className="w-full">Access Course</Button>
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">SQL Masterclass</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Learn advanced SQL techniques for data extraction and analysis.
              </p>
              <Link href="#">
                <Button className="w-full">Access Course</Button>
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Data Visualization Techniques</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Create compelling visualizations that tell a story with your data.
              </p>
              <Link href="#">
                <Button className="w-full">Access Course</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

