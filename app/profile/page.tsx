import Link from "next/link"
import { ChevronLeft, Save, User, Mail, Phone, School, Calendar, MapPin, Edit } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920&text=Profile+Background')] bg-cover bg-center opacity-10 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-0"></div>

      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b border-zinc-800 bg-black/80 backdrop-blur-md px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-zinc-300 hover:text-white transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
          <span>Back to Dashboard</span>
        </Link>
        <h1 className="text-xl font-bold ml-4">Profile Settings</h1>
      </header>

      <main className="flex-1 p-4 md:p-6 relative z-1">
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-zinc-800/50 text-zinc-400">
              <TabsTrigger value="personal" className="data-[state=active]:bg-zinc-900 data-[state=active]:text-white">
                Personal Info
              </TabsTrigger>
              <TabsTrigger value="academic" className="data-[state=active]:bg-zinc-900 data-[state=active]:text-white">
                Academic Details
              </TabsTrigger>
              <TabsTrigger
                value="preferences"
                className="data-[state=active]:bg-zinc-900 data-[state=active]:text-white"
              >
                Preferences
              </TabsTrigger>
            </TabsList>

            {/* Personal Info Tab */}
            <TabsContent value="personal" className="mt-6">
              <div className="grid gap-6 md:grid-cols-5">
                <Card className="md:col-span-2 border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-zinc-100">Profile Picture</CardTitle>
                    <CardDescription className="text-zinc-400">Update your profile photo</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center">
                    <Avatar className="h-32 w-32 mb-4 ring-2 ring-blue-500/50">
                      <AvatarImage src="/placeholder.svg?height=128&width=128&text=SR" alt="Sagar Ruhil" />
                      <AvatarFallback className="bg-zinc-800 text-blue-400 text-2xl">SR</AvatarFallback>
                    </Avatar>
                    <Button variant="outline" className="mt-2 border-blue-500/50 text-blue-400 hover:bg-blue-950/30">
                      <Edit className="mr-2 h-4 w-4" />
                      Change Photo
                    </Button>
                  </CardContent>
                </Card>

                <Card className="md:col-span-3 border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-zinc-100">Personal Information</CardTitle>
                    <CardDescription className="text-zinc-400">Update your personal details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
                          <Input
                            id="firstName"
                            defaultValue="Sagar"
                            className="pl-10 bg-zinc-800 border-zinc-700 text-white"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
                          <Input
                            id="lastName"
                            defaultValue="Ruhil"
                            className="pl-10 bg-zinc-800 border-zinc-700 text-white"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
                        <Input
                          id="email"
                          type="email"
                          defaultValue="sagar.ruhil@example.com"
                          className="pl-10 bg-zinc-800 border-zinc-700 text-white"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
                        <Input
                          id="phone"
                          type="tel"
                          defaultValue="+91 9876543210"
                          className="pl-10 bg-zinc-800 border-zinc-700 text-white"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
                        <Textarea
                          id="address"
                          defaultValue="123 Campus Street, University Area, City"
                          className="pl-10 bg-zinc-800 border-zinc-700 text-white min-h-[80px]"
                        />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="ml-auto bg-blue-600 hover:bg-blue-700">
                      <Save className="mr-2 h-4 w-4" />
                      Save Changes
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            {/* Academic Details Tab */}
            <TabsContent value="academic" className="mt-6">
              <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-zinc-100">Academic Information</CardTitle>
                  <CardDescription className="text-zinc-400">
                    Update your academic details and course information
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="department">Department</Label>
                      <div className="relative">
                        <School className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
                        <Input
                          id="department"
                          defaultValue="Computer Science"
                          className="pl-10 bg-zinc-800 border-zinc-700 text-white"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="year">Year of Study</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
                        <Input id="year" defaultValue="1" className="pl-10 bg-zinc-800 border-zinc-700 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="studentId">Student ID</Label>
                      <Input
                        id="studentId"
                        defaultValue="CS2025001"
                        className="bg-zinc-800 border-zinc-700 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="batch">Batch</Label>
                      <Input id="batch" defaultValue="2025-2029" className="bg-zinc-800 border-zinc-700 text-white" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="courses">Current Courses</Label>
                    <Textarea
                      id="courses"
                      defaultValue="CS101: Introduction to Programming
CS102: Data Structures
MATH101: Calculus I
PHY101: Physics for Computer Science"
                      className="bg-zinc-800 border-zinc-700 text-white min-h-[120px]"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="ml-auto bg-blue-600 hover:bg-blue-700">
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Preferences Tab */}
            <TabsContent value="preferences" className="mt-6">
              <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-zinc-100">Account Preferences</CardTitle>
                  <CardDescription className="text-zinc-400">
                    Manage your account settings and preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <select
                      id="language"
                      className="w-full p-2 rounded-md bg-zinc-800 border border-zinc-700 text-white"
                    >
                      <option value="en">English</option>
                      <option value="hi">Hindi</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label>Notification Preferences</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="emailNotif"
                          className="rounded bg-zinc-800 border-zinc-700"
                          defaultChecked
                        />
                        <Label htmlFor="emailNotif">Email Notifications</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="smsNotif"
                          className="rounded bg-zinc-800 border-zinc-700"
                          defaultChecked
                        />
                        <Label htmlFor="smsNotif">SMS Notifications</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="eventReminders"
                          className="rounded bg-zinc-800 border-zinc-700"
                          defaultChecked
                        />
                        <Label htmlFor="eventReminders">Event Reminders</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="deadlineAlerts"
                          className="rounded bg-zinc-800 border-zinc-700"
                          defaultChecked
                        />
                        <Label htmlFor="deadlineAlerts">Deadline Alerts</Label>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Privacy Settings</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="profileVisibility"
                          className="rounded bg-zinc-800 border-zinc-700"
                          defaultChecked
                        />
                        <Label htmlFor="profileVisibility">Make profile visible to other students</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="showCourses"
                          className="rounded bg-zinc-800 border-zinc-700"
                          defaultChecked
                        />
                        <Label htmlFor="showCourses">Show enrolled courses on profile</Label>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="ml-auto bg-blue-600 hover:bg-blue-700">
                    <Save className="mr-2 h-4 w-4" />
                    Save Preferences
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

