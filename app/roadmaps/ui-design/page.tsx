import Link from "next/link"
import { ArrowLeft, Download, ExternalLink } from "lucide-react"

export default function UiDesignRoadmap() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/resources" className="inline-flex items-center text-blue-400 hover:text-blue-300">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Resources
          </Link>
        </div>

        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">UI Design Career Roadmap</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive guide to becoming a professional UI designer, from fundamentals to advanced techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-12">
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Roadmap Overview</h2>
            <div className="relative overflow-x-auto">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <a
                  href="#"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center mb-4 md:mb-0"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Full Roadmap PDF
                </a>
                <p className="text-gray-400">Last Updated: April 2025</p>
              </div>

              <div className="relative mt-8">
                <div className="absolute left-8 h-full w-1 bg-blue-600"></div>

                <div className="relative z-10">
                  {/* Stage 1 */}
                  <div className="mb-12 ml-16 relative">
                    <div className="absolute -left-20 mt-1">
                      <div className="bg-blue-600 h-8 w-8 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">1</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-blue-400">Design Fundamentals</h3>
                    <p className="text-gray-300 mb-4">
                      Master the core principles of visual design that form the foundation of UI design.
                    </p>
                  </div>

                  {/* Stage 2 */}
                  <div className="mb-12 ml-16 relative">
                    <div className="absolute -left-20 mt-1">
                      <div className="bg-blue-600 h-8 w-8 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">2</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-blue-400">UI Design Tools & Skills</h3>
                    <p className="text-gray-300 mb-4">
                      Learn industry-standard design software and develop technical proficiency.
                    </p>
                  </div>

                  {/* Stage 3 */}
                  <div className="mb-12 ml-16 relative">
                    <div className="absolute -left-20 mt-1">
                      <div className="bg-blue-600 h-8 w-8 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">3</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-blue-400">Advanced UI & Interaction Design</h3>
                    <p className="text-gray-300 mb-4">
                      Develop expertise in creating complex interfaces and interactive experiences.
                    </p>
                  </div>

                  {/* Stage 4 */}
                  <div className="mb-12 ml-16 relative">
                    <div className="absolute -left-20 mt-1">
                      <div className="bg-blue-600 h-8 w-8 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">4</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-blue-400">Professional Practice & Specialization</h3>
                    <p className="text-gray-300 mb-4">
                      Establish yourself in the industry and develop specialized expertise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="grid grid-cols-1 gap-8 mb-12">
          {/* Stage 1: Design Fundamentals */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Stage 1: Design Fundamentals</h2>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Visual Design Principles</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Color theory and psychology</li>
                <li>Typography and font selection</li>
                <li>Layout and composition</li>
                <li>Visual hierarchy and information architecture</li>
                <li>Design elements (line, shape, texture, space)</li>
                <li>Design principles (balance, contrast, rhythm, unity)</li>
                <li>Gestalt principles</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">UI Design Basics</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Interface elements and components</li>
                <li>Navigation patterns</li>
                <li>Form design</li>
                <li>Responsive design principles</li>
                <li>Mobile-first approach</li>
                <li>Design systems introduction</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Essential Tools</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Figma</h4>
                  <p className="text-sm text-gray-300">Collaborative interface design tool</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Adobe XD</h4>
                  <p className="text-sm text-gray-300">UI/UX design and prototyping tool</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Sketch</h4>
                  <p className="text-sm text-gray-300">Vector-based UI design tool (Mac only)</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Learning Resources</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ExternalLink className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="#" className="text-blue-400 hover:underline font-medium">
                      UI Design Fundamentals
                    </a>
                    <p className="text-sm text-gray-400">Comprehensive course covering all design basics</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ExternalLink className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="#" className="text-blue-400 hover:underline font-medium">
                      Color Theory for UI Designers
                    </a>
                    <p className="text-sm text-gray-400">In-depth guide to using color effectively in interfaces</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ExternalLink className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="#" className="text-blue-400 hover:underline font-medium">
                      Typography in UI Design
                    </a>
                    <p className="text-sm text-gray-400">Master the art of type selection and usage for interfaces</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Stage 2: UI Design Tools & Skills */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Stage 2: UI Design Tools & Skills</h2>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Design Software Mastery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2 text-blue-300">Figma Advanced Skills</h4>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>Component creation and variants</li>
                    <li>Auto layout and constraints</li>
                    <li>Design system management</li>
                    <li>Prototyping and interactions</li>
                    <li>Collaboration and handoff</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-blue-300">Additional Tools</h4>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>Prototyping tools (Principle, ProtoPie)</li>
                    <li>Animation tools (After Effects, Lottie)</li>
                    <li>Image editing (Photoshop)</li>
                    <li>Vector graphics (Illustrator)</li>
                    <li>Design handoff tools (Zeplin, Avocode)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">UI Component Design</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Buttons and CTAs</li>
                <li>Form elements and inputs</li>
                <li>Navigation components</li>
                <li>Cards and containers</li>
                <li>Modals and dialogs</li>
                <li>Data visualization elements</li>
                <li>Tables and lists</li>
                <li>Status indicators and notifications</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Design Systems</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Component libraries</li>
                <li>Style guides and documentation</li>
                <li>Design tokens and variables</li>
                <li>Pattern libraries</li>
                <li>Atomic design methodology</li>
                <li>Maintaining and scaling design systems</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Responsive Design</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Multi-device Design</h4>
                  <p className="text-sm text-gray-300">
                    Creating interfaces that work across desktop, tablet, and mobile
                  </p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Adaptive Layouts</h4>
                  <p className="text-sm text-gray-300">Designing for different screen sizes and orientations</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Breakpoints</h4>
                  <p className="text-sm text-gray-300">Understanding and implementing responsive breakpoints</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Touch Targets</h4>
                  <p className="text-sm text-gray-300">Designing for touch interfaces and accessibility</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Recommended Courses</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Figma Master Course</h4>
                  <p className="text-sm text-gray-300">Advanced techniques for Figma power users</p>
                  <a href="#" className="text-blue-400 text-sm hover:underline mt-2 inline-block">
                    Learn More →
                  </a>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Design Systems Workshop</h4>
                  <p className="text-sm text-gray-300">Creating and maintaining scalable design systems</p>
                  <a href="#" className="text-blue-400 text-sm hover:underline mt-2 inline-block">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Stage 3: Advanced UI & Interaction Design */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Stage 3: Advanced UI & Interaction Design</h2>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Interaction Design</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Microinteractions and feedback</li>
                <li>Animation principles</li>
                <li>State changes and transitions</li>
                <li>Gesture-based interactions</li>
                <li>Interactive prototyping</li>
                <li>User flows and journey mapping</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Advanced UI Concepts</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Data-Heavy Interfaces</h4>
                  <p className="text-sm text-gray-300">Dashboards, analytics, and complex data visualization</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Design for Emerging Platforms</h4>
                  <p className="text-sm text-gray-300">AR/VR, wearables, voice interfaces</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Dark Patterns & Ethical Design</h4>
                  <p className="text-sm text-gray-300">Ethical considerations in UI design</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Accessibility in UI</h4>
                  <p className="text-sm text-gray-300">Designing for all users and abilities</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Design for Performance</h4>
                  <p className="text-sm text-gray-300">Optimizing UI for speed and efficiency</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Internationalization</h4>
                  <p className="text-sm text-gray-300">Designing for global audiences</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Visual Design Mastery</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Advanced color theory and palettes</li>
                <li>Typography systems and hierarchies</li>
                <li>Visual storytelling and branding</li>
                <li>Iconography and illustration integration</li>
                <li>Photography and imagery in UI</li>
                <li>Advanced layout techniques</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Collaboration with Development</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Design-to-Development Handoff</h4>
                  <p className="text-sm text-gray-300">Effective communication with developers</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Technical Constraints</h4>
                  <p className="text-sm text-gray-300">Understanding development limitations</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Design QA</h4>
                  <p className="text-sm text-gray-300">Ensuring design implementation accuracy</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">CSS Knowledge</h4>
                  <p className="text-sm text-gray-300">Understanding basic front-end capabilities</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Portfolio Development</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Creating case studies that showcase your process</li>
                <li>Documenting design decisions and rationale</li>
                <li>Building a professional portfolio website</li>
                <li>Presenting UI work effectively</li>
                <li>Creating interactive prototypes for demonstration</li>
              </ul>
            </div>
          </div>

          {/* Stage 4: Professional Practice & Specialization */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Stage 4: Professional Practice & Specialization</h2>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Career Paths</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2 text-blue-300">UI Design Roles</h4>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>Junior UI Designer</li>
                    <li>Mid-level UI Designer</li>
                    <li>Senior UI Designer</li>
                    <li>UI Team Lead</li>
                    <li>Design Director</li>
                    <li>Creative Director</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-blue-300">Specialized Roles</h4>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>Design Systems Designer</li>
                    <li>Product Designer</li>
                    <li>Mobile UI Designer</li>
                    <li>Web UI Designer</li>
                    <li>UI Animation Specialist</li>
                    <li>UI/UX Designer</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Specialization Areas</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Mobile App Design</h4>
                  <p className="text-sm text-gray-300">iOS, Android, and cross-platform interfaces</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Web Application Design</h4>
                  <p className="text-sm text-gray-300">Complex web interfaces and SaaS products</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Design Systems</h4>
                  <p className="text-sm text-gray-300">Creating and maintaining scalable systems</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">E-commerce Design</h4>
                  <p className="text-sm text-gray-300">Shopping experiences and conversion optimization</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Enterprise UX/UI</h4>
                  <p className="text-sm text-gray-300">Complex data-heavy business applications</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Emerging Technologies</h4>
                  <p className="text-sm text-gray-300">AR/VR, voice interfaces, wearables</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Professional Development</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Design leadership skills</li>
                <li>Project management for designers</li>
                <li>Client communication and presentation</li>
                <li>Design critique and feedback</li>
                <li>Mentoring junior designers</li>
                <li>Design thinking facilitation</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Industry Trends & Future Skills</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>AI-assisted design tools</li>
                <li>Design for AI interfaces</li>
                <li>No-code and low-code design</li>
                <li>Design for privacy and security</li>
                <li>Sustainable and ethical design</li>
                <li>Inclusive design practices</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tools & Software Section */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Essential Tools & Software</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-100">Design Tools</h3>
              <div className="space-y-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-1">UI Design Software</h4>
                  <p className="text-sm text-gray-300 mb-2">Primary tools for interface design</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Figma</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Adobe XD</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Sketch</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">InVision Studio</span>
                  </div>
                </div>

                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-1">Prototyping Tools</h4>
                  <p className="text-sm text-gray-300 mb-2">Creating interactive mockups</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">ProtoPie</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Principle</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Framer</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Axure RP</span>
                  </div>
                </div>

                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-1">Graphics & Asset Creation</h4>
                  <p className="text-sm text-gray-300 mb-2">Creating visual elements for interfaces</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Adobe Photoshop</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Adobe Illustrator</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Affinity Designer</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Procreate</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-100">Collaboration & Workflow</h3>
              <div className="space-y-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-1">Design Handoff</h4>
                  <p className="text-sm text-gray-300 mb-2">Tools for developer collaboration</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Zeplin</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Avocode</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">InVision Inspect</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Figma Dev Mode</span>
                  </div>
                </div>

                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-1">Collaboration Tools</h4>
                  <p className="text-sm text-gray-300 mb-2">Team communication and project management</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Slack</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Notion</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Miro</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Abstract</span>
                  </div>
                </div>

                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-1">Design Resources</h4>
                  <p className="text-sm text-gray-300 mb-2">Assets and components libraries</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">UI8</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Iconscout</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Unsplash</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Material Design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Resources */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Recommended Learning Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-100">Online Courses</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ExternalLink className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="#" className="text-blue-400 hover:underline font-medium">
                      UI Design Bootcamp
                    </a>
                    <p className="text-sm text-gray-400">Comprehensive course covering all aspects of UI design</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ExternalLink className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="#" className="text-blue-400 hover:underline font-medium">
                      Figma Master Class
                    </a>
                    <p className="text-sm text-gray-400">Advanced techniques for Figma power users</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ExternalLink className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="#" className="text-blue-400 hover:underline font-medium">
                      Interaction Design Fundamentals
                    </a>
                    <p className="text-sm text-gray-400">Creating engaging interactive experiences</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-100">Books</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ExternalLink className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="#" className="text-blue-400 hover:underline font-medium">
                      Refactoring UI
                    </a>
                    <p className="text-sm text-gray-400">By Adam Wathan & Steve Schoger - Practical UI design tips</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ExternalLink className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="#" className="text-blue-400 hover:underline font-medium">
                      Don't Make Me Think
                    </a>
                    <p className="text-sm text-gray-400">By Steve Krug - Web usability principles</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ExternalLink className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="#" className="text-blue-400 hover:underline font-medium">
                      Design Systems Handbook
                    </a>
                    <p className="text-sm text-gray-400">By Marco Suarez, et al. - Creating scalable design systems</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-100">Communities & Inspiration</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ExternalLink className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="#" className="text-blue-400 hover:underline font-medium">
                      Dribbble
                    </a>
                    <p className="text-sm text-gray-400">Platform for discovering and showcasing UI design</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ExternalLink className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="#" className="text-blue-400 hover:underline font-medium">
                      Behance
                    </a>
                    <p className="text-sm text-gray-400">Creative work showcase and discovery platform</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ExternalLink className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="#" className="text-blue-400 hover:underline font-medium">
                      UI Design Daily
                    </a>
                    <p className="text-sm text-gray-400">Daily UI design inspiration and resources</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-600 rounded-lg p-8 shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your UI Design Journey?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Download our complete UI design roadmap PDF and get access to exclusive resources, tutorials, and community
            support.
          </p>
          <a
            href="#"
            className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg inline-flex items-center"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Complete Roadmap
          </a>
        </div>
      </div>
    </div>
  )
}

