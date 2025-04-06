import Link from "next/link"
import { ArrowLeft, Download, ExternalLink } from "lucide-react"

export default function DevOpsRoadmap() {
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
          <h1 className="text-4xl font-bold mb-4">DevOps Career Roadmap</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive guide to becoming a DevOps engineer, from fundamentals to advanced practices.
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
                    <h3 className="text-xl font-bold mb-2 text-blue-400">
                      Operating Systems & Networking Fundamentals
                    </h3>
                    <p className="text-gray-300 mb-4">
                      Master the core principles of operating systems and networking that form the foundation of DevOps.
                    </p>
                  </div>

                  {/* Stage 2 */}
                  <div className="mb-12 ml-16 relative">
                    <div className="absolute -left-20 mt-1">
                      <div className="bg-blue-600 h-8 w-8 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">2</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-blue-400">Programming & Version Control</h3>
                    <p className="text-gray-300 mb-4">
                      Learn essential programming skills, scripting, and version control systems.
                    </p>
                  </div>

                  {/* Stage 3 */}
                  <div className="mb-12 ml-16 relative">
                    <div className="absolute -left-20 mt-1">
                      <div className="bg-blue-600 h-8 w-8 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">3</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-blue-400">
                      Containerization, CI/CD & Infrastructure as Code
                    </h3>
                    <p className="text-gray-300 mb-4">
                      Master modern DevOps tools and practices for automation and deployment.
                    </p>
                  </div>

                  {/* Stage 4 */}
                  <div className="mb-12 ml-16 relative">
                    <div className="absolute -left-20 mt-1">
                      <div className="bg-blue-600 h-8 w-8 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">4</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-blue-400">
                      Cloud Platforms, Monitoring & Advanced DevOps
                    </h3>
                    <p className="text-gray-300 mb-4">
                      Develop expertise in cloud services, monitoring, and specialized DevOps practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="grid grid-cols-1 gap-8 mb-12">
          {/* Stage 1: Operating Systems & Networking Fundamentals */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">
              Stage 1: Operating Systems & Networking Fundamentals
            </h2>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Linux/Unix Systems</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Linux file system and directory structure</li>
                <li>Command line interface (CLI) proficiency</li>
                <li>Shell scripting (Bash)</li>
                <li>User and permission management</li>
                <li>Process management</li>
                <li>Package management (apt, yum, etc.)</li>
                <li>System monitoring and logging</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Networking</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>TCP/IP fundamentals</li>
                <li>DNS, DHCP, and routing</li>
                <li>Firewalls and security principles</li>
                <li>Load balancing concepts</li>
                <li>HTTP/HTTPS protocols</li>
                <li>Network troubleshooting</li>
                <li>SSH and secure communication</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Essential Tools</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Terminal Utilities</h4>
                  <p className="text-sm text-gray-300">grep, sed, awk, vim, nano</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Network Tools</h4>
                  <p className="text-sm text-gray-300">ping, traceroute, netstat, nmap</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">System Monitoring</h4>
                  <p className="text-sm text-gray-300">top, htop, iotop, iftop</p>
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
                      Linux Administration Bootcamp
                    </a>
                    <p className="text-sm text-gray-400">Comprehensive course covering Linux system administration</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ExternalLink className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="#" className="text-blue-400 hover:underline font-medium">
                      Networking for DevOps Engineers
                    </a>
                    <p className="text-sm text-gray-400">Essential networking concepts for DevOps professionals</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ExternalLink className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="#" className="text-blue-400 hover:underline font-medium">
                      Bash Scripting Fundamentals
                    </a>
                    <p className="text-sm text-gray-400">Master shell scripting for automation</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Stage 2: Programming & Version Control */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Stage 2: Programming & Version Control</h2>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Programming Languages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2 text-blue-300">Scripting Languages</h4>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>Python for automation</li>
                    <li>Bash scripting (advanced)</li>
                    <li>PowerShell (for Windows environments)</li>
                    <li>Ruby basics</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-blue-300">Additional Languages</h4>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>JavaScript/Node.js basics</li>
                    <li>Go fundamentals</li>
                    <li>Understanding compiled vs. interpreted languages</li>
                    <li>Basic data structures and algorithms</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Version Control</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Git fundamentals (commit, push, pull)</li>
                <li>Branching strategies (Git Flow, GitHub Flow)</li>
                <li>Pull requests and code reviews</li>
                <li>Merge conflict resolution</li>
                <li>Git hooks and automation</li>
                <li>GitHub/GitLab/Bitbucket platforms</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Data Formats & APIs</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Data Formats</h4>
                  <p className="text-sm text-gray-300">JSON, YAML, XML, CSV</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">API Concepts</h4>
                  <p className="text-sm text-gray-300">REST, GraphQL, API authentication</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">API Tools</h4>
                  <p className="text-sm text-gray-300">Postman, curl, API documentation</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Database Basics</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>SQL fundamentals</li>
                <li>NoSQL concepts</li>
                <li>Database administration basics</li>
                <li>Data backup and recovery</li>
                <li>Database migration strategies</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Recommended Courses</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Python for DevOps</h4>
                  <p className="text-sm text-gray-300">Automation and scripting with Python</p>
                  <a href="#" className="text-blue-400 text-sm hover:underline mt-2 inline-block">
                    Learn More →
                  </a>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Git & GitHub Masterclass</h4>
                  <p className="text-sm text-gray-300">Advanced version control techniques</p>
                  <a href="#" className="text-blue-400 text-sm hover:underline mt-2 inline-block">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Stage 3: Containerization, CI/CD & Infrastructure as Code */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">
              Stage 3: Containerization, CI/CD & Infrastructure as Code
            </h2>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Containerization</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Docker fundamentals</li>
                <li>Dockerfile creation and best practices</li>
                <li>Container networking and storage</li>
                <li>Docker Compose for multi-container applications</li>
                <li>Container security</li>
                <li>Container registries and distribution</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Container Orchestration</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Kubernetes</h4>
                  <p className="text-sm text-gray-300">Industry-standard container orchestration</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Kubernetes Components</h4>
                  <p className="text-sm text-gray-300">Pods, services, deployments, ingress</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Kubernetes Management</h4>
                  <p className="text-sm text-gray-300">kubectl, Helm, operators</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Managed Kubernetes</h4>
                  <p className="text-sm text-gray-300">EKS, GKE, AKS</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Alternative Orchestrators</h4>
                  <p className="text-sm text-gray-300">Docker Swarm, Nomad</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Service Mesh</h4>
                  <p className="text-sm text-gray-300">Istio, Linkerd, Consul</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">CI/CD</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Continuous Integration principles</li>
                <li>Continuous Delivery/Deployment workflows</li>
                <li>Pipeline design and implementation</li>
                <li>Testing strategies in CI/CD</li>
                <li>Artifact management</li>
                <li>Release strategies (blue/green, canary, etc.)</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">CI/CD Tools</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Jenkins</h4>
                  <p className="text-sm text-gray-300">Pipeline creation, Jenkinsfile, plugins</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">GitHub Actions</h4>
                  <p className="text-sm text-gray-300">Workflow configuration, secrets management</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">GitLab CI</h4>
                  <p className="text-sm text-gray-300">Pipeline configuration, runners</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">CircleCI</h4>
                  <p className="text-sm text-gray-300">Config files, orbs, workflows</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Infrastructure as Code</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2 text-blue-300">Configuration Management</h4>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>Ansible (playbooks, roles, inventory)</li>
                    <li>Puppet basics</li>
                    <li>Chef basics</li>
                    <li>Salt basics</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-blue-300">Infrastructure Provisioning</h4>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>Terraform (providers, modules, state)</li>
                    <li>CloudFormation (AWS)</li>
                    <li>ARM Templates (Azure)</li>
                    <li>Pulumi basics</li>
                  </ul>
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
                      Docker & Kubernetes: The Complete Guide
                    </a>
                    <p className="text-sm text-gray-400">Comprehensive containerization and orchestration course</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ExternalLink className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="#" className="text-blue-400 hover:underline font-medium">
                      CI/CD Pipeline Implementation
                    </a>
                    <p className="text-sm text-gray-400">Building robust automation pipelines</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ExternalLink className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="#" className="text-blue-400 hover:underline font-medium">
                      Terraform Masterclass
                    </a>
                    <p className="text-sm text-gray-400">Infrastructure as code with Terraform</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Stage 4: Cloud Platforms, Monitoring & Advanced DevOps */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">
              Stage 4: Cloud Platforms, Monitoring & Advanced DevOps
            </h2>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Cloud Platforms</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">AWS</h4>
                  <p className="text-sm text-gray-300">EC2, S3, RDS, Lambda, VPC, IAM</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Azure</h4>
                  <p className="text-sm text-gray-300">VMs, Storage, AKS, Functions, VNET</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Google Cloud</h4>
                  <p className="text-sm text-gray-300">Compute Engine, GKE, Cloud Storage</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Multi-Cloud</h4>
                  <p className="text-sm text-gray-300">Strategies, tools, and best practices</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Cloud Architecture</h4>
                  <p className="text-sm text-gray-300">Designing resilient cloud systems</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Serverless</h4>
                  <p className="text-sm text-gray-300">FaaS, event-driven architecture</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Monitoring & Observability</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Metrics, logs, and traces</li>
                <li>Monitoring tools (Prometheus, Grafana)</li>
                <li>Log management (ELK Stack, Loki)</li>
                <li>Distributed tracing (Jaeger, Zipkin)</li>
                <li>Alerting and incident response</li>
                <li>SLIs, SLOs, and SLAs</li>
                <li>Dashboards and visualization</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Security & Compliance</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2 text-blue-300">DevSecOps</h4>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>Security as code</li>
                    <li>SAST and DAST tools</li>
                    <li>Container security scanning</li>
                    <li>Secret management</li>
                    <li>Compliance as code</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-blue-300">Infrastructure Security</h4>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>Network security and firewalls</li>
                    <li>Identity and access management</li>
                    <li>Encryption and key management</li>
                    <li>Security monitoring and auditing</li>
                    <li>Disaster recovery</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Advanced DevOps Practices</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>GitOps workflows</li>
                <li>Chaos engineering</li>
                <li>Site Reliability Engineering (SRE)</li>
                <li>Infrastructure performance tuning</li>
                <li>Cost optimization</li>
                <li>Scaling strategies</li>
                <li>Database DevOps</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Career Paths</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2 text-blue-300">DevOps Roles</h4>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>DevOps Engineer</li>
                    <li>Site Reliability Engineer (SRE)</li>
                    <li>Platform Engineer</li>
                    <li>Cloud Engineer</li>
                    <li>DevSecOps Engineer</li>
                    <li>Infrastructure Engineer</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-blue-300">Leadership & Specialization</h4>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>DevOps Architect</li>
                    <li>Cloud Architect</li>
                    <li>DevOps Manager</li>
                    <li>DevOps Consultant</li>
                    <li>DevOps Evangelist</li>
                    <li>DevOps Trainer</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tools & Software Section */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Essential Tools & Software</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-100">Core DevOps Tools</h3>
              <div className="space-y-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-1">Version Control & CI/CD</h4>
                  <p className="text-sm text-gray-300 mb-2">Tools for code management and automation</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Git</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">GitHub/GitLab</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Jenkins</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">GitHub Actions</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">CircleCI</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">ArgoCD</span>
                  </div>
                </div>

                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-1">Containerization & Orchestration</h4>
                  <p className="text-sm text-gray-300 mb-2">Tools for managing containerized applications</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Docker</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Kubernetes</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Helm</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Docker Compose</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Podman</span>
                  </div>
                </div>

                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-1">Infrastructure as Code</h4>
                  <p className="text-sm text-gray-300 mb-2">Tools for infrastructure automation</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Terraform</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Ansible</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">CloudFormation</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Pulumi</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Chef</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-100">Monitoring & Cloud</h3>
              <div className="space-y-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-1">Monitoring & Observability</h4>
                  <p className="text-sm text-gray-300 mb-2">Tools for system visibility</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Prometheus</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Grafana</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">ELK Stack</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Datadog</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">New Relic</span>
                  </div>
                </div>

                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-1">Cloud Platforms</h4>
                  <p className="text-sm text-gray-300 mb-2">Major cloud service providers</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">AWS</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Azure</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Google Cloud</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">DigitalOcean</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Linode</span>
                  </div>
                </div>

                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-1">Security Tools</h4>
                  <p className="text-sm text-gray-300 mb-2">DevSecOps essentials</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">SonarQube</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Vault</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Trivy</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">OWASP ZAP</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Snyk</span>
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
                      DevOps Engineering Course
                    </a>
                    <p className="text-sm text-gray-400">Comprehensive introduction to DevOps practices</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ExternalLink className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="#" className="text-blue-400 hover:underline font-medium">
                      Kubernetes Certified Administrator
                    </a>
                    <p className="text-sm text-gray-400">Preparation for the CKA certification</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ExternalLink className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="#" className="text-blue-400 hover:underline font-medium">
                      AWS DevOps Professional
                    </a>
                    <p className="text-sm text-gray-400">Cloud-specific DevOps practices</p>
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
                      The Phoenix Project
                    </a>
                    <p className="text-sm text-gray-400">By Gene Kim - Novel about IT, DevOps, and business</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ExternalLink className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="#" className="text-blue-400 hover:underline font-medium">
                      Site Reliability Engineering
                    </a>
                    <p className="text-sm text-gray-400">By Google - How Google runs production systems</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ExternalLink className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="#" className="text-blue-400 hover:underline font-medium">
                      Infrastructure as Code
                    </a>
                    <p className="text-sm text-gray-400">By Kief Morris - Managing servers in the cloud</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-100">Communities & Resources</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ExternalLink className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="#" className="text-blue-400 hover:underline font-medium">
                      DevOps Stack Exchange
                    </a>
                    <p className="text-sm text-gray-400">Q&A community for DevOps professionals</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ExternalLink className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="#" className="text-blue-400 hover:underline font-medium">
                      Kubernetes Documentation
                    </a>
                    <p className="text-sm text-gray-400">Official guides and references</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ExternalLink className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="#" className="text-blue-400 hover:underline font-medium">
                      DevOps Conferences
                    </a>
                    <p className="text-sm text-gray-400">KubeCon, DevOpsDays, and more</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-600 rounded-lg p-8 shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your DevOps Journey?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Download our complete DevOps roadmap PDF and get access to exclusive resources, tutorials, and community
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

