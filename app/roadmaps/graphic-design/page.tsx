import Link from "next/link"
import { ArrowLeft, Download, ExternalLink } from "lucide-react"

export default function GraphicDesignRoadmap() {
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
          <h1 className="text-4xl font-bold mb-4">Graphic Design Career Roadmap</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive guide to becoming a professional graphic designer, from fundamentals to advanced techniques.
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
                    <h3 className="text-xl font-bold mb-2 text-blue-400">Fundamentals & Visual Principles</h3>
                    <p className="text-gray-300 mb-4">
                      Master the core principles of design that form the foundation of all graphic design work.
                    </p>
                  </div>

                  {/* Stage 2 */}
                  <div className="mb-12 ml-16 relative">
                    <div className="absolute -left-20 mt-1">
                      <div className="bg-blue-600 h-8 w-8 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">2</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-blue-400">Technical Skills & Software</h3>
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
                    <h3 className="text-xl font-bold mb-2 text-blue-400">Specialization & Portfolio Building</h3>
                    <p className="text-gray-300 mb-4">
                      Develop expertise in specific design areas and build a compelling portfolio.
                    </p>
                  </div>

                  {/* Stage 4 */}
                  <div className="mb-12 ml-16 relative">
                    <div className="absolute -left-20 mt-1">
                      <div className="bg-blue-600 h-8 w-8 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">4</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-blue-400">Professional Practice & Career Growth</h3>
                    <p className="text-gray-300 mb-4">
                      Establish yourself in the industry and continue developing your skills and career.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="grid grid-cols-1 gap-8 mb-12">
          {/* Stage 1: Fundamentals */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Stage 1: Fundamentals & Visual Principles</h2>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Core Concepts</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Color theory and psychology</li>
                <li>Typography and font selection</li>
                <li>Composition and layout principles</li>
                <li>Visual hierarchy and information organization</li>
                <li>Design elements (line, shape, texture, space)</li>
                <li>Design principles (balance, contrast, rhythm, unity)</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Essential Software</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Adobe Photoshop</h4>
                  <p className="text-sm text-gray-300">Image editing and manipulation</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Adobe Illustrator</h4>
                  <p className="text-sm text-gray-300">Vector graphics and illustration</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Adobe InDesign</h4>
                  <p className="text-sm text-gray-300">Layout and publication design</p>
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
                      Graphic Design Fundamentals: Core Principles
                    </a>
                    <p className="text-sm text-gray-400">Comprehensive course covering all design basics</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ExternalLink className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="#" className="text-blue-400 hover:underline font-medium">
                      Color Theory for Designers
                    </a>
                    <p className="text-sm text-gray-400">In-depth guide to using color effectively</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ExternalLink className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="#" className="text-blue-400 hover:underline font-medium">
                      Typography Fundamentals
                    </a>
                    <p className="text-sm text-gray-400">Master the art of type selection and usage</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Stage 2: Technical Skills */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Stage 2: Technical Skills & Software</h2>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Software Mastery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2 text-blue-300">Adobe Creative Suite</h4>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>Advanced Photoshop techniques</li>
                    <li>Illustrator pen tool mastery</li>
                    <li>InDesign master pages and styles</li>
                    <li>Adobe XD for UI/UX design</li>
                    <li>After Effects for motion graphics</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-blue-300">Alternative Software</h4>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>Affinity Designer & Photo</li>
                    <li>Sketch for UI design</li>
                    <li>Figma for collaborative design</li>
                    <li>Procreate for digital illustration</li>
                    <li>Blender for 3D design elements</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Technical Skills Development</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Digital illustration techniques</li>
                <li>Photo editing and manipulation</li>
                <li>Vector artwork creation</li>
                <li>Layout design for print and digital</li>
                <li>Typography implementation</li>
                <li>Color management across media</li>
                <li>File preparation for various outputs</li>
                <li>Basic animation and motion graphics</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Recommended Courses</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Adobe Certified Professional</h4>
                  <p className="text-sm text-gray-300">Industry-recognized certification in Adobe software</p>
                  <a href="#" className="text-blue-400 text-sm hover:underline mt-2 inline-block">
                    Learn More →
                  </a>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Digital Illustration Masterclass</h4>
                  <p className="text-sm text-gray-300">Advanced techniques for digital art creation</p>
                  <a href="#" className="text-blue-400 text-sm hover:underline mt-2 inline-block">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Stage 3: Specialization */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Stage 3: Specialization & Portfolio Building</h2>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Specialization Areas</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Brand Identity Design</h4>
                  <p className="text-sm text-gray-300">Logo design, brand guidelines, visual identity systems</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">UI/UX Design</h4>
                  <p className="text-sm text-gray-300">Web interfaces, mobile apps, user experience design</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Packaging Design</h4>
                  <p className="text-sm text-gray-300">Product packaging, structural design, retail displays</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Editorial Design</h4>
                  <p className="text-sm text-gray-300">Books, magazines, publications, layout design</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Motion Graphics</h4>
                  <p className="text-sm text-gray-300">Animated graphics, video intros, kinetic typography</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Illustration</h4>
                  <p className="text-sm text-gray-300">Digital art, character design, concept art</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Portfolio Development</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Creating case studies that showcase your process</li>
                <li>Developing a cohesive personal brand</li>
                <li>Building a professional website</li>
                <li>Curating projects that demonstrate range and expertise</li>
                <li>Documenting your design thinking and problem-solving</li>
                <li>Creating mockups and presentations of your work</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Real-World Experience</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Internships</h4>
                  <p className="text-sm text-gray-300">Gain practical experience at design studios or agencies</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Freelance Projects</h4>
                  <p className="text-sm text-gray-300">Build client management skills with real projects</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Design Competitions</h4>
                  <p className="text-sm text-gray-300">Challenge yourself and gain recognition</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Pro Bono Work</h4>
                  <p className="text-sm text-gray-300">Help nonprofits while building your portfolio</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stage 4: Professional Practice */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Stage 4: Professional Practice & Career Growth</h2>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Career Paths</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2 text-blue-300">Agency/Studio Roles</h4>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>Junior Designer</li>
                    <li>Mid-level Designer</li>
                    <li>Senior Designer</li>
                    <li>Art Director</li>
                    <li>Creative Director</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-blue-300">In-House Design</h4>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>Brand Designer</li>
                    <li>Marketing Designer</li>
                    <li>Product Designer</li>
                    <li>Design Manager</li>
                    <li>Design Lead</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Freelance & Entrepreneurship</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Building a client base</li>
                <li>Setting rates and managing contracts</li>
                <li>Client communication and project management</li>
                <li>Marketing your services</li>
                <li>Creating passive income through design assets</li>
                <li>Starting your own design studio</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Continuous Learning</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Advanced Courses</h4>
                  <p className="text-sm text-gray-300">Specialized training in emerging design areas</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Design Conferences</h4>
                  <p className="text-sm text-gray-300">Network and learn from industry leaders</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Mentorship</h4>
                  <p className="text-sm text-gray-300">Learn from experienced designers</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Industry Trends & Future Skills</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>3D design and visualization</li>
                <li>Augmented reality (AR) design</li>
                <li>Motion design and animation</li>
                <li>Design systems and component libraries</li>
                <li>Accessibility and inclusive design</li>
                <li>Sustainable design practices</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Essential Software & Tools</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-100">Design Software</h3>
              <div className="space-y-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-1">Adobe Creative Cloud</h4>
                  <p className="text-sm text-gray-300 mb-2">Industry standard suite of design applications</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Photoshop</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Illustrator</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">InDesign</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">XD</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">After Effects</span>
                  </div>
                </div>

                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-1">Affinity Suite</h4>
                  <p className="text-sm text-gray-300 mb-2">Professional creative software with one-time purchase</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Affinity Designer</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Affinity Photo</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Affinity Publisher</span>
                  </div>
                </div>

                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-1">UI/UX Design</h4>
                  <p className="text-sm text-gray-300 mb-2">Specialized tools for interface and experience design</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Figma</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Sketch</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">InVision</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Axure RP</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-100">Additional Tools</h3>
              <div className="space-y-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-1">Digital Illustration</h4>
                  <p className="text-sm text-gray-300 mb-2">Tools for digital art and illustration</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Procreate (iPad)</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Clip Studio Paint</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Corel Painter</span>
                  </div>
                </div>

                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-1">3D & Motion</h4>
                  <p className="text-sm text-gray-300 mb-2">Tools for 3D design and animation</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Blender</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Cinema 4D</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Houdini</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Lottie</span>
                  </div>
                </div>

                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-1">Productivity & Collaboration</h4>
                  <p className="text-sm text-gray-300 mb-2">Tools for project management and teamwork</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Notion</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Trello</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Slack</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Miro</span>
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
                      Graphic Design Masterclass
                    </a>
                    <p className="text-sm text-gray-400">Comprehensive course covering all aspects of graphic design</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ExternalLink className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="#" className="text-blue-400 hover:underline font-medium">
                      Logo Design: From Concept to Presentation
                    </a>
                    <p className="text-sm text-gray-400">Specialized course on brand identity design</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ExternalLink className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="#" className="text-blue-400 hover:underline font-medium">
                      Typography: The Foundation of Design
                    </a>
                    <p className="text-sm text-gray-400">Deep dive into typographic principles and practices</p>
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
                      Thinking with Type
                    </a>
                    <p className="text-sm text-gray-400">By Ellen Lupton - Essential typography guide</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ExternalLink className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="#" className="text-blue-400 hover:underline font-medium">
                      Logo Modernism
                    </a>
                    <p className="text-sm text-gray-400">By Jens Müller - Showcase of iconic logo design</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ExternalLink className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="#" className="text-blue-400 hover:underline font-medium">
                      Grid Systems in Graphic Design
                    </a>
                    <p className="text-sm text-gray-400">By Josef Müller-Brockmann - Layout fundamentals</p>
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
                      Behance
                    </a>
                    <p className="text-sm text-gray-400">Platform for discovering and showcasing creative work</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ExternalLink className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="#" className="text-blue-400 hover:underline font-medium">
                      Dribbble
                    </a>
                    <p className="text-sm text-gray-400">Community of designers sharing their work</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ExternalLink className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="#" className="text-blue-400 hover:underline font-medium">
                      AIGA
                    </a>
                    <p className="text-sm text-gray-400">Professional association for design</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-600 rounded-lg p-8 shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Graphic Design Journey?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Download our complete graphic design roadmap PDF and get access to exclusive resources, tutorials, and
            community support.
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

