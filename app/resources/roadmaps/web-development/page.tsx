import Link from "next/link"
import { ArrowLeft, Code, Database, Globe, Layout, Server, Zap } from "lucide-react"

export default function WebDevelopmentRoadmap() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/resources"
            className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Resources
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Web Development Roadmap</h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            A comprehensive guide to becoming a proficient web developer, from fundamentals to advanced concepts.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Introduction to Web Development</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Web development is the work involved in developing websites and web applications for the internet or an
            intranet. It encompasses everything from a simple static page to complex web applications, e-commerce sites,
            and social network services.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            This roadmap will guide you through the journey of becoming a web developer, covering both frontend and
            backend development, as well as the tools and technologies you'll need to master along the way.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-700 dark:text-blue-300 flex items-center">
                <Globe className="mr-2 h-5 w-5" /> Frontend Development
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Creating the user interface and experience</p>
            </div>
            <div className="bg-green-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold text-green-700 dark:text-green-300 flex items-center">
                <Server className="mr-2 h-5 w-5" /> Backend Development
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Building server-side logic and databases</p>
            </div>
            <div className="bg-purple-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-700 dark:text-purple-300 flex items-center">
                <Zap className="mr-2 h-5 w-5" /> Full Stack Development
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Mastering both frontend and backend</p>
            </div>
          </div>
        </div>

        {/* Roadmap Timeline */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">The Learning Path</h2>

          {/* Phase 1 */}
          <div className="mb-12 relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-200 dark:bg-blue-900 ml-4 md:ml-6"></div>
            <div className="relative pl-12 md:pl-16">
              <div className="absolute left-0 top-0 w-8 h-8 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Fundamentals</h3>
              <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">HTML & CSS Basics</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Start with the building blocks of the web. Learn how to structure content with HTML and style it with
                  CSS.
                </p>
                <div className="mb-4">
                  <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Key Technologies:</h5>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                    <li>HTML5 - Semantic elements, forms, validation</li>
                    <li>CSS3 - Selectors, box model, flexbox, grid</li>
                    <li>Responsive design principles</li>
                    <li>CSS preprocessors (SASS/SCSS)</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Recommended Software:</h5>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                    <li>Visual Studio Code - Feature-rich code editor</li>
                    <li>Chrome DevTools - For debugging and testing</li>
                    <li>CodePen - For practicing and sharing code snippets</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Learning Resources:</h5>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                    <li>MDN Web Docs - Comprehensive documentation</li>
                    <li>freeCodeCamp - Interactive HTML/CSS curriculum</li>
                    <li>CSS-Tricks - Tutorials and techniques</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="mb-12 relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-200 dark:bg-blue-900 ml-4 md:ml-6"></div>
            <div className="relative pl-12 md:pl-16">
              <div className="absolute left-0 top-0 w-8 h-8 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">JavaScript & Programming Basics</h3>
              <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Interactive Web Development</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Learn JavaScript to add interactivity to your websites and understand programming fundamentals.
                </p>
                <div className="mb-4">
                  <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Key Technologies:</h5>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                    <li>JavaScript (ES6+) - Variables, functions, objects</li>
                    <li>DOM manipulation and events</li>
                    <li>Asynchronous JavaScript (Promises, async/await)</li>
                    <li>JSON and API interactions</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Recommended Software:</h5>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                    <li>Node.js - JavaScript runtime</li>
                    <li>npm - Package manager</li>
                    <li>ESLint - Code quality tool</li>
                    <li>Prettier - Code formatter</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Learning Resources:</h5>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                    <li>JavaScript.info - Modern JavaScript tutorial</li>
                    <li>Eloquent JavaScript - Free online book</li>
                    <li>JavaScript30 - 30-day coding challenge</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="mb-12 relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-200 dark:bg-blue-900 ml-4 md:ml-6"></div>
            <div className="relative pl-12 md:pl-16">
              <div className="absolute left-0 top-0 w-8 h-8 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Frontend Frameworks & Libraries</h3>
              <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Modern Frontend Development</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Learn popular frameworks and libraries to build complex, interactive user interfaces efficiently.
                </p>
                <div className="mb-4">
                  <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Key Technologies:</h5>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                    <li>React.js - Components, hooks, state management</li>
                    <li>Vue.js - Progressive framework</li>
                    <li>Angular - Full-featured framework</li>
                    <li>State management (Redux, Vuex, Context API)</li>
                    <li>CSS frameworks (Tailwind CSS, Bootstrap)</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Recommended Software:</h5>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                    <li>Create React App - React project boilerplate</li>
                    <li>Vue CLI - Vue.js development tool</li>
                    <li>Angular CLI - Angular development tool</li>
                    <li>Storybook - UI component development environment</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Learning Resources:</h5>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                    <li>React Documentation - Official guides</li>
                    <li>Vue.js Documentation - Official guides</li>
                    <li>Angular Documentation - Official guides</li>
                    <li>Frontend Masters - In-depth courses</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 4 */}
          <div className="mb-12 relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-200 dark:bg-blue-900 ml-4 md:ml-6"></div>
            <div className="relative pl-12 md:pl-16">
              <div className="absolute left-0 top-0 w-8 h-8 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Backend Development</h3>
              <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Server-Side Programming</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Learn to build server-side applications, APIs, and work with databases.
                </p>
                <div className="mb-4">
                  <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Key Technologies:</h5>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                    <li>Node.js & Express.js - JavaScript backend</li>
                    <li>Python & Django/Flask - Python backend</li>
                    <li>Ruby on Rails - Ruby backend</li>
                    <li>PHP & Laravel - PHP backend</li>
                    <li>Databases: SQL (MySQL, PostgreSQL) & NoSQL (MongoDB)</li>
                    <li>RESTful API design</li>
                    <li>GraphQL</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Recommended Software:</h5>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                    <li>MongoDB Compass - Database management tool</li>
                    <li>Postman - API testing tool</li>
                    <li>MySQL Workbench - SQL database tool</li>
                    <li>Docker - Containerization platform</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Learning Resources:</h5>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                    <li>Node.js Documentation - Official guides</li>
                    <li>Django Documentation - Official guides</li>
                    <li>The Odin Project - Full-stack curriculum</li>
                    <li>MongoDB University - Free database courses</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 5 */}
          <div className="relative">
            <div className="relative pl-12 md:pl-16">
              <div className="absolute left-0 top-0 w-8 h-8 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                5
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Advanced Topics & Specialization</h3>
              <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Mastering Web Development</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Deepen your knowledge and specialize in areas that interest you most.
                </p>
                <div className="mb-4">
                  <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Key Technologies & Concepts:</h5>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                    <li>Progressive Web Apps (PWAs)</li>
                    <li>Web security & authentication</li>
                    <li>Testing (Unit, Integration, E2E)</li>
                    <li>CI/CD pipelines</li>
                    <li>Serverless architecture</li>
                    <li>Microservices</li>
                    <li>Web performance optimization</li>
                    <li>WebSockets & real-time applications</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Recommended Software:</h5>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                    <li>Jest - JavaScript testing framework</li>
                    <li>Cypress - End-to-end testing</li>
                    <li>GitHub Actions - CI/CD platform</li>
                    <li>AWS/Azure/GCP - Cloud platforms</li>
                    <li>Lighthouse - Performance analysis tool</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Learning Resources:</h5>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                    <li>web.dev - Google's web development resource</li>
                    <li>AWS Documentation - Cloud computing guides</li>
                    <li>Testing JavaScript - Kent C. Dodds' course</li>
                    <li>GitHub Learning Lab - Interactive tutorials</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Career Paths */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Career Paths in Web Development</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg">
              <div className="flex items-center mb-4">
                <Layout className="h-8 w-8 text-blue-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Frontend Developer</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Specializes in creating user interfaces and experiences, focusing on what users see and interact with.
              </p>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Skills:</h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-3 space-y-1">
                <li>HTML, CSS, JavaScript</li>
                <li>Frontend frameworks (React, Vue, Angular)</li>
                <li>Responsive design</li>
                <li>UI/UX principles</li>
                <li>Performance optimization</li>
              </ul>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Average Salary Range:</h4>
              <p className="text-gray-600 dark:text-gray-400">$70,000 - $120,000 per year</p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg">
              <div className="flex items-center mb-4">
                <Server className="h-8 w-8 text-green-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Backend Developer</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Focuses on server-side logic, databases, and application architecture.
              </p>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Skills:</h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-3 space-y-1">
                <li>Server-side languages (Node.js, Python, Ruby, PHP)</li>
                <li>Database management</li>
                <li>API development</li>
                <li>Authentication & security</li>
                <li>Server architecture</li>
              </ul>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Average Salary Range:</h4>
              <p className="text-gray-600 dark:text-gray-400">$80,000 - $130,000 per year</p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg">
              <div className="flex items-center mb-4">
                <Code className="h-8 w-8 text-purple-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Full Stack Developer</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Works on both frontend and backend aspects of web applications.
              </p>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Skills:</h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-3 space-y-1">
                <li>Frontend & backend technologies</li>
                <li>Database design & management</li>
                <li>System architecture</li>
                <li>DevOps basics</li>
                <li>End-to-end application development</li>
              </ul>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Average Salary Range:</h4>
              <p className="text-gray-600 dark:text-gray-400">$90,000 - $150,000 per year</p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg">
              <div className="flex items-center mb-4">
                <Database className="h-8 w-8 text-yellow-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">DevOps Engineer</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Focuses on deployment, infrastructure, and operational aspects of web applications.
              </p>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Skills:</h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-3 space-y-1">
                <li>CI/CD pipelines</li>
                <li>Cloud platforms (AWS, Azure, GCP)</li>
                <li>Containerization (Docker, Kubernetes)</li>
                <li>Infrastructure as Code</li>
                <li>Monitoring & logging</li>
              </ul>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Average Salary Range:</h4>
              <p className="text-gray-600 dark:text-gray-400">$100,000 - $160,000 per year</p>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Additional Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Learning Platforms</h3>
              <ul className="space-y-3">
                <li className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <a
                    href="https://www.freecodecamp.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                  >
                    freeCodeCamp
                  </a>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    Free coding curriculum with certifications
                  </p>
                </li>
                <li className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <a
                    href="https://www.udemy.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                  >
                    Udemy
                  </a>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    Affordable courses on specific technologies
                  </p>
                </li>
                <li className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <a
                    href="https://www.pluralsight.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                  >
                    Pluralsight
                  </a>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">In-depth technology courses</p>
                </li>
                <li className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <a
                    href="https://www.theodinproject.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                  >
                    The Odin Project
                  </a>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Free full-stack curriculum</p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Communities & Forums</h3>
              <ul className="space-y-3">
                <li className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <a
                    href="https://stackoverflow.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                  >
                    Stack Overflow
                  </a>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Q&A platform for developers</p>
                </li>
                <li className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <a
                    href="https://dev.to/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                  >
                    DEV Community
                  </a>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Community of software developers</p>
                </li>
                <li className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <a
                    href="https://www.reddit.com/r/webdev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                  >
                    r/webdev
                  </a>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Reddit community for web developers</p>
                </li>
                <li className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <a
                    href="https://discord.com/invite/KVUmVXA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                  >
                    The Coding Den (Discord)
                  </a>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    Active Discord community for programmers
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

