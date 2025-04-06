import Link from "next/link"
import { ArrowLeft, Download, ExternalLink } from "lucide-react"

export default function AiMlRoadmap() {
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
          <h1 className="text-4xl font-bold mb-4">AI & Machine Learning Career Roadmap</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive guide to becoming an AI and Machine Learning professional, from fundamentals to advanced
            specializations.
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
                    <h3 className="text-xl font-bold mb-2 text-blue-400">Mathematics & Programming Foundations</h3>
                    <p className="text-gray-300 mb-4">
                      Build the essential mathematical and programming skills required for AI and ML.
                    </p>
                  </div>

                  {/* Stage 2 */}
                  <div className="mb-12 ml-16 relative">
                    <div className="absolute -left-20 mt-1">
                      <div className="bg-blue-600 h-8 w-8 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">2</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-blue-400">Machine Learning Fundamentals</h3>
                    <p className="text-gray-300 mb-4">
                      Master core ML algorithms, techniques, and practical implementation.
                    </p>
                  </div>

                  {/* Stage 3 */}
                  <div className="mb-12 ml-16 relative">
                    <div className="absolute -left-20 mt-1">
                      <div className="bg-blue-600 h-8 w-8 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">3</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-blue-400">Deep Learning & Neural Networks</h3>
                    <p className="text-gray-300 mb-4">
                      Explore advanced neural network architectures and deep learning techniques.
                    </p>
                  </div>

                  {/* Stage 4 */}
                  <div className="mb-12 ml-16 relative">
                    <div className="absolute -left-20 mt-1">
                      <div className="bg-blue-600 h-8 w-8 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">4</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-blue-400">Specialization & Applied AI</h3>
                    <p className="text-gray-300 mb-4">
                      Develop expertise in specific AI domains and build production-ready systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="grid grid-cols-1 gap-8 mb-12">
          {/* Stage 1: Mathematics & Programming Foundations */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Stage 1: Mathematics & Programming Foundations</h2>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Mathematics</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Linear Algebra (vectors, matrices, eigenvalues/vectors)</li>
                <li>Calculus (derivatives, gradients, chain rule)</li>
                <li>Probability & Statistics (distributions, hypothesis testing)</li>
                <li>Optimization Theory (gradient descent, convex optimization)</li>
                <li>Information Theory (entropy, information gain)</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Programming Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Python</h4>
                  <p className="text-sm text-gray-300">Primary language for AI/ML development</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Data Structures & Algorithms</h4>
                  <p className="text-sm text-gray-300">Efficient code implementation</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Version Control (Git)</h4>
                  <p className="text-sm text-gray-300">Code management and collaboration</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Data Processing</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Data cleaning and preprocessing</li>
                <li>Exploratory data analysis (EDA)</li>
                <li>Data visualization (Matplotlib, Seaborn, Plotly)</li>
                <li>SQL and database fundamentals</li>
                <li>NumPy and Pandas for data manipulation</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Learning Resources</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ExternalLink className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="#" className="text-blue-400 hover:underline font-medium">
                      Mathematics for Machine Learning
                    </a>
                    <p className="text-sm text-gray-400">Comprehensive course covering essential math concepts</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ExternalLink className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="#" className="text-blue-400 hover:underline font-medium">
                      Python for Data Science and Machine Learning
                    </a>
                    <p className="text-sm text-gray-400">Practical Python programming for ML applications</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ExternalLink className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="#" className="text-blue-400 hover:underline font-medium">
                      Data Science Toolkit: NumPy, Pandas & Visualization
                    </a>
                    <p className="text-sm text-gray-400">Master essential data processing libraries</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Stage 2: Machine Learning Fundamentals */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Stage 2: Machine Learning Fundamentals</h2>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Core ML Concepts</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Supervised vs. Unsupervised Learning</li>
                <li>Training, Validation, and Test Sets</li>
                <li>Bias-Variance Tradeoff</li>
                <li>Overfitting and Regularization</li>
                <li>Feature Engineering and Selection</li>
                <li>Model Evaluation Metrics</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">ML Algorithms</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2 text-blue-300">Supervised Learning</h4>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>Linear & Logistic Regression</li>
                    <li>Decision Trees & Random Forests</li>
                    <li>Support Vector Machines (SVM)</li>
                    <li>K-Nearest Neighbors (KNN)</li>
                    <li>Naive Bayes</li>
                    <li>Ensemble Methods</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-blue-300">Unsupervised Learning</h4>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>K-Means Clustering</li>
                    <li>Hierarchical Clustering</li>
                    <li>Principal Component Analysis (PCA)</li>
                    <li>Dimensionality Reduction</li>
                    <li>Anomaly Detection</li>
                    <li>Association Rule Learning</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">ML Libraries & Tools</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Scikit-learn</h4>
                  <p className="text-sm text-gray-300">Comprehensive ML library for classical algorithms</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">XGBoost & LightGBM</h4>
                  <p className="text-sm text-gray-300">Gradient boosting frameworks</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">MLflow</h4>
                  <p className="text-sm text-gray-300">ML lifecycle management platform</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Practical Skills</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Data preprocessing pipelines</li>
                <li>Cross-validation techniques</li>
                <li>Hyperparameter tuning</li>
                <li>Model selection strategies</li>
                <li>Handling imbalanced datasets</li>
                <li>ML experiment tracking</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Recommended Courses</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Machine Learning Specialization</h4>
                  <p className="text-sm text-gray-300">Comprehensive course covering ML fundamentals</p>
                  <a href="#" className="text-blue-400 text-sm hover:underline mt-2 inline-block">
                    Learn More →
                  </a>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Hands-On Machine Learning</h4>
                  <p className="text-sm text-gray-300">Practical implementation of ML algorithms</p>
                  <a href="#" className="text-blue-400 text-sm hover:underline mt-2 inline-block">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Stage 3: Deep Learning & Neural Networks */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Stage 3: Deep Learning & Neural Networks</h2>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Neural Network Fundamentals</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Perceptrons and Multi-layer Networks</li>
                <li>Activation Functions</li>
                <li>Backpropagation</li>
                <li>Gradient Descent Optimization</li>
                <li>Regularization Techniques (Dropout, Batch Norm)</li>
                <li>Loss Functions</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Deep Learning Architectures</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Convolutional Neural Networks (CNNs)</h4>
                  <p className="text-sm text-gray-300">Image processing and computer vision</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Recurrent Neural Networks (RNNs)</h4>
                  <p className="text-sm text-gray-300">Sequential data and time series</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Transformers</h4>
                  <p className="text-sm text-gray-300">State-of-the-art NLP and beyond</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Generative Adversarial Networks (GANs)</h4>
                  <p className="text-sm text-gray-300">Generative modeling and synthesis</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Autoencoders</h4>
                  <p className="text-sm text-gray-300">Dimensionality reduction and generation</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Graph Neural Networks</h4>
                  <p className="text-sm text-gray-300">Learning on graph-structured data</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Deep Learning Frameworks</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">PyTorch</h4>
                  <p className="text-sm text-gray-300">Dynamic computational graphs, research-friendly</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">TensorFlow & Keras</h4>
                  <p className="text-sm text-gray-300">Production-ready, extensive ecosystem</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Hugging Face Transformers</h4>
                  <p className="text-sm text-gray-300">State-of-the-art NLP models</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">JAX & Flax</h4>
                  <p className="text-sm text-gray-300">High-performance numerical computing</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Hardware & Infrastructure</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>GPU/TPU acceleration</li>
                <li>Distributed training</li>
                <li>Cloud platforms (AWS, GCP, Azure)</li>
                <li>Model optimization and quantization</li>
                <li>Training at scale</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Learning Resources</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ExternalLink className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="#" className="text-blue-400 hover:underline font-medium">
                      Deep Learning Specialization
                    </a>
                    <p className="text-sm text-gray-400">Comprehensive course on neural networks and deep learning</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ExternalLink className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="#" className="text-blue-400 hover:underline font-medium">
                      PyTorch for Deep Learning
                    </a>
                    <p className="text-sm text-gray-400">Hands-on implementation with PyTorch</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ExternalLink className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="#" className="text-blue-400 hover:underline font-medium">
                      Natural Language Processing with Transformers
                    </a>
                    <p className="text-sm text-gray-400">Advanced NLP techniques and applications</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Stage 4: Specialization & Applied AI */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Stage 4: Specialization & Applied AI</h2>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Specialization Areas</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Computer Vision</h4>
                  <p className="text-sm text-gray-300">Image classification, object detection, segmentation</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Natural Language Processing</h4>
                  <p className="text-sm text-gray-300">Text analysis, language models, chatbots</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Reinforcement Learning</h4>
                  <p className="text-sm text-gray-300">Agent-based learning, game AI, robotics</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Generative AI</h4>
                  <p className="text-sm text-gray-300">Text-to-image, diffusion models, synthetic data</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Time Series Analysis</h4>
                  <p className="text-sm text-gray-300">Forecasting, anomaly detection, financial modeling</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Recommender Systems</h4>
                  <p className="text-sm text-gray-300">Personalization, collaborative filtering</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">MLOps & Production</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Model deployment and serving</li>
                <li>CI/CD for machine learning</li>
                <li>Monitoring and maintenance</li>
                <li>A/B testing and experimentation</li>
                <li>Model versioning and registry</li>
                <li>Containerization (Docker) and orchestration (Kubernetes)</li>
                <li>Feature stores and data pipelines</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Responsible AI</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Ethics in AI development</li>
                <li>Bias detection and mitigation</li>
                <li>Model explainability and interpretability</li>
                <li>Privacy-preserving machine learning</li>
                <li>Fairness and accountability</li>
                <li>AI governance and compliance</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Career Paths</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2 text-blue-300">Technical Roles</h4>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>Machine Learning Engineer</li>
                    <li>Data Scientist</li>
                    <li>AI Research Scientist</li>
                    <li>Computer Vision Engineer</li>
                    <li>NLP Engineer</li>
                    <li>MLOps Engineer</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-blue-300">Applied & Leadership</h4>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>AI Product Manager</li>
                    <li>AI Consultant</li>
                    <li>AI Ethics Specialist</li>
                    <li>Chief AI Officer</li>
                    <li>AI Research Lead</li>
                    <li>AI Entrepreneur</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-100">Industry Applications</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Healthcare</h4>
                  <p className="text-sm text-gray-300">Medical imaging, drug discovery, diagnostics</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Finance</h4>
                  <p className="text-sm text-gray-300">Algorithmic trading, fraud detection, risk assessment</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Retail</h4>
                  <p className="text-sm text-gray-300">
                    Demand forecasting, recommendation engines, inventory management
                  </p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Manufacturing</h4>
                  <p className="text-sm text-gray-300">Predictive maintenance, quality control, process optimization</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Transportation</h4>
                  <p className="text-sm text-gray-300">Autonomous vehicles, route optimization, logistics</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Entertainment</h4>
                  <p className="text-sm text-gray-300">Content recommendation, game AI, creative tools</p>
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
              <h3 className="text-xl font-bold mb-3 text-gray-100">Development Tools</h3>
              <div className="space-y-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-1">Programming Languages</h4>
                  <p className="text-sm text-gray-300 mb-2">Core languages for AI/ML development</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Python</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">R</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Julia</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">C++</span>
                  </div>
                </div>

                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-1">Development Environments</h4>
                  <p className="text-sm text-gray-300 mb-2">Tools for writing and executing code</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Jupyter Notebooks</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">VS Code</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">PyCharm</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Google Colab</span>
                  </div>
                </div>

                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-1">Version Control & Collaboration</h4>
                  <p className="text-sm text-gray-300 mb-2">Tools for code management and teamwork</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Git</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">GitHub</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">DVC (Data Version Control)</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Weights & Biases</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-100">ML Frameworks & Libraries</h3>
              <div className="space-y-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-1">Core ML Libraries</h4>
                  <p className="text-sm text-gray-300 mb-2">Fundamental tools for machine learning</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Scikit-learn</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">XGBoost</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">LightGBM</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">CatBoost</span>
                  </div>
                </div>

                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-1">Deep Learning Frameworks</h4>
                  <p className="text-sm text-gray-300 mb-2">Tools for building neural networks</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">PyTorch</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">TensorFlow</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Keras</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">JAX</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Hugging Face</span>
                  </div>
                </div>

                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-1">MLOps Tools</h4>
                  <p className="text-sm text-gray-300 mb-2">Tools for deploying and managing ML systems</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">MLflow</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Kubeflow</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">TensorFlow Serving</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">BentoML</span>
                    <span className="bg-gray-600 text-xs px-2 py-1 rounded">Docker</span>
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
                      Machine Learning Specialization
                    </a>
                    <p className="text-sm text-gray-400">Comprehensive introduction to ML fundamentals</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ExternalLink className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="#" className="text-blue-400 hover:underline font-medium">
                      Deep Learning Specialization
                    </a>
                    <p className="text-sm text-gray-400">In-depth exploration of neural networks</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ExternalLink className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="#" className="text-blue-400 hover:underline font-medium">
                      Practical Deep Learning for Coders
                    </a>
                    <p className="text-sm text-gray-400">Hands-on approach to deep learning</p>
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
                      Hands-On Machine Learning
                    </a>
                    <p className="text-sm text-gray-400">
                      By Aurélien Géron - Practical guide to ML with Scikit-Learn and TensorFlow
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ExternalLink className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="#" className="text-blue-400 hover:underline font-medium">
                      Deep Learning
                    </a>
                    <p className="text-sm text-gray-400">
                      By Goodfellow, Bengio, and Courville - Comprehensive deep learning textbook
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ExternalLink className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="#" className="text-blue-400 hover:underline font-medium">
                      Pattern Recognition and Machine Learning
                    </a>
                    <p className="text-sm text-gray-400">By Christopher Bishop - Classic ML textbook</p>
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
                      Kaggle
                    </a>
                    <p className="text-sm text-gray-400">Competitions, datasets, and community learning</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ExternalLink className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="#" className="text-blue-400 hover:underline font-medium">
                      Papers With Code
                    </a>
                    <p className="text-sm text-gray-400">Latest research papers with implementations</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ExternalLink className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="#" className="text-blue-400 hover:underline font-medium">
                      AI Research Labs
                    </a>
                    <p className="text-sm text-gray-400">OpenAI, DeepMind, FAIR - research publications</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-600 rounded-lg p-8 shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your AI & Machine Learning Journey?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Download our complete AI & ML roadmap PDF and get access to exclusive resources, tutorials, and community
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

