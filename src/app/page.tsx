import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header/Navigation - kept the same */}
      <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-2 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex justify-between items-center">
          </div>
        </div>
        <nav className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Your name</h1>
            <div className="space-x-6">
              <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">About</a>
              <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Skills</a>
              <a href="#certifications" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Certifications</a>
              <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Projects</a>
              <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section - kept the same but added smooth transitions */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-all duration-500">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <Image
            src="/Linked.png"
            alt="Profile Picture"
            width={150}
            height={150}
            className="rounded-full mx-auto mb-8 hover:scale-105 transition-transform duration-300 shadow-lg"
            priority
          />
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">
          I&apos;m <span className="text-blue-600 dark:text-blue-400">Your name</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Microsoft MVP  || Cloud and Systems Engineer  ||  Azure AI
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-105">
            Get In Touch
          </button>
        </div>
      </section>

      {/* Improved About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center relative">
            About Me
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600 dark:bg-blue-400 rounded mt-2"></div>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">My Story</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                My passion for technology began in childhood, evolving into a relentless drive to explore cutting-edge innovations and actively contribute to the tech community.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">What Drives Me 🚀</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <span className="text-2xl">💡</span>
                    <span className="text-gray-600 dark:text-gray-300">Passionate about exploring and adopting cutting-edge technologies</span>
                  </li>
                  <li className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <span className="text-2xl">🤝</span>
                    <span className="text-gray-600 dark:text-gray-300">Committed to community contribution and knowledge sharing</span>
                  </li>
                  <li className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <span className="text-2xl">📚</span>
                    <span className="text-gray-600 dark:text-gray-300">Believer in continuous learning and personal growth</span>
                  </li>
                  <li className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <span className="text-2xl">🔭</span>
                    <span className="text-gray-600 dark:text-gray-300">Always excited to discover and experiment with new tech solutions</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">Professional Journey 🚀</h3>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300 font-semibold">
                    Currently working as a [job role] at [company name]
                  </p>
                  <ul className="list-none space-y-3">
                    {[
                      "Design and implement cloud infrastructure solutions",
                      "Cloud security and cost optimization",
                      "Cloud deployment automation and migration",
                      "Optimize system performance and reliability",
                      "Work with cutting-edge AI technologies",                    
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        <span className="text-blue-600 dark:text-blue-400">→</span>
                        <span className="text-gray-600 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">Quick Facts</h3>
                <ul className="space-y-4">
                  {[
                    { emoji: "🎓", text: "Education: Master's Degree in Electrical and Computer Science" },
                    { emoji: "💼", text: "Current Role: Cloud and Systems Engineer" },
                    { emoji: "🌍", text: "Location: Currently in France but I am opened to relocate" },
                    { emoji: "🎯", text: "Focus: Cloud, Systems and Azure AI" }
                  ].map((fact, index) => (
                    <li key={index} className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      <span className="text-2xl">{fact.emoji}</span>
                      <span className="text-gray-600 dark:text-gray-300">{fact.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
  <section id="skills" className="min-h-screen flex items-center justify-center py-20 bg-white dark:bg-gray-900">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold mb-12 text-center relative">
      Skills & Expertise
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600 dark:bg-blue-400 rounded mt-2"></div>
    </h2>

    {/* Technical Skills */}
    <div className="mb-16">
      <h3 className="text-2xl font-bold mb-8 text-blue-600 dark:text-blue-400">Technical Skills</h3>
      
      {/* Cloud Platforms & Technologies */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <h4 className="font-bold mb-4">Cloud Platforms</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-blue-600">→</span>
              AWS (EC2, S3, Lambda, IAM)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600">→</span>
              Azure (VM, Storage, Functions)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600">→</span>
              Google Cloud Platform
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <h4 className="font-bold mb-4">Infrastructure as Code</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-blue-600">→</span>
              Terraform
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600">→</span>
              AWS CloudFormation
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600">→</span>
              Azure ARM Templates
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <h4 className="font-bold mb-4">Containerization</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-blue-600">→</span>
              Docker
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600">→</span>
              Kubernetes
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600">→</span>
              Container Registry Management
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <h4 className="font-bold mb-4">Operating Systems</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-blue-600">→</span>
              Linux (RHEL, Ubuntu, CentOS)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600">→</span>
              Windows Server
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600">→</span>
              Scripting (Bash, Python)
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <h4 className="font-bold mb-4">Monitoring & Security</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-blue-600">→</span>
              Prometheus & Grafana
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600">→</span>
              Wazuh
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600">→</span>
              Security Best Practices
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <h4 className="font-bold mb-4">DevOps & CI/CD</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-blue-600">→</span>
              Jenkins
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600">→</span>
              GitHub Actions
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600">→</span>
              Azure DevOps
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Soft Skills */}
    <div>
      <h3 className="text-2xl font-bold mb-8 text-blue-600 dark:text-blue-400">Soft Skills</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <h4 className="font-bold mb-4">Clear Communication</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-blue-600">→</span>
              Technical Documentation
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600">→</span>
              Stakeholder Management
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600">→</span>
              Knowledge Sharing
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <h4 className="font-bold mb-4">Problem Solving</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-blue-600">→</span>
              Analytical Thinking
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600">→</span>
              Root Cause Analysis
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600">→</span>
              Critical Reasoning
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <h4 className="font-bold mb-4">Leadership</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-blue-600">→</span>
              Team Coordination
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600">→</span>
              Mentoring
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600">→</span>
              Project Management
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Tools & Technologies */}
    <div className="mt-16">
      <h3 className="text-2xl font-bold mb-8 text-blue-600 dark:text-blue-400">Tools & Technologies</h3>
      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h4 className="font-bold mb-4">Monitoring</h4>
            <ul className="space-y-2">
              <li>Nagios</li>
              <li>Prometheus</li>
              <li>Grafana</li>
              <li>Wazuh</li>
              <li>Zabbix</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Version Control</h4>
            <ul className="space-y-2">
              <li>Git</li>
              <li>GitHub</li>
              <li>Bitbucket</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Cloud Tools</h4>
            <ul className="space-y-2">
              <li>AWS CLI</li>
              <li>Azure CLI</li>
              <li>Google Cloud SDK</li>
              <li>Cloud Formation</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Automation</h4>
            <ul className="space-y-2">
              <li>Ansible</li>
              <li>Bicep</li>
              <li>Terraform</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Certifications Section */}
<section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
  <div className="max-w-6xl mx-auto px-4">
    <div className="mb-16 text-center">
      <h2 className="text-4xl font-bold mb-4">Certifications & Awards</h2>
      <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded"></div>
      <p className="mt-4 text-gray-600 dark:text-gray-300">Professional certifications and recognition</p>
    </div>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Microsoft MVP - Updated with hover effects and badge styling */}
      <div className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <div className="p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
          <div className="bg-white dark:bg-gray-900 p-5">
            <div className="flex justify-between items-start">
              <div className="relative w-16 h-16 mb-4 group-hover:scale-110 transition-transform">
                <Image
                  src="/mvp-logo.png"
                  alt="Microsoft MVP"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-md">
                Microsoft
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Microsoft MVP in Cloud & Data Center Management
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-3">
              Most Valuable Professional recognition for exceptional technical community leadership and expertise sharing.
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                <span className="text-emerald-500 dark:text-emerald-400 text-sm font-medium">Active</span>
              </div>
              <a 
                href="https://mvp.microsoft.com/en-US/MVP/profile/e3f10e00-6b8a-4581-8bac-7b11b7a122f1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 group-hover:translate-x-1 transition-all"
              >
                Verify 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
  
      {/* Azure Solutions Architect - Updated with hover effects and badge styling */}
      <div className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <div className="p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
          <div className="bg-white dark:bg-gray-900 p-5">
            <div className="flex justify-between items-start">
              <div className="relative w-16 h-16 mb-4 group-hover:scale-110 transition-transform">
                <Image
                  src="/azure-expert10.png"
                  alt="Microsoft MVP"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-md">
              Microsoft
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
             Azure Solutions Architect Expert
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-3">
              
            Expert-level certification for designing and implementing comprehensive Azure solutions.
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                <span className="text-emerald-500 dark:text-emerald-400 text-sm font-medium">Active</span>
              </div>
              <a 
                href="https://learn.microsoft.com/api/credentials/share/en-us/curious4tech/15787E1E56A8EBBB?sharingId=studentamb_363945" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 group-hover:translate-x-1 transition-all"
              >
                Verify 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

                  
      {/* Aure Certified AI Engineer - Updated with hover effects and badge styling */}

      <div className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <div className="p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
          <div className="bg-white dark:bg-gray-900 p-5">
            <div className="flex justify-between items-start">
              <div className="relative w-16 h-16 mb-4 group-hover:scale-110 transition-transform">
                <Image
                  src="/ai-expert.png"
                  alt="Microsoft MVP"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-md">
              Microsoft
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
             Azure AI Engineer
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-3">
              
            Specialized in Designing and Implementing an Azure AI solution using Azure AI services, Azure AI Search, and Azure Open AI.
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                <span className="text-emerald-500 dark:text-emerald-400 text-sm font-medium">Active</span>
              </div>
              <a 
                href="https://learn.microsoft.com/api/credentials/share/en-us/curious4tech/ACBA351DB3E4F730?sharingId=studentamb_363945" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 group-hover:translate-x-1 transition-all"
              >
                Verify 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>


      <div className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <div className="p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
          <div className="bg-white dark:bg-gray-900 p-5">
            <div className="flex justify-between items-start">
              <div className="relative w-16 h-16 mb-4 group-hover:scale-110 transition-transform">
                <Image
                  src="/azure-admin.png"
                  alt="Microsoft MVP"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-md">
              Microsoft 
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
             Azure Administrator Associate
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-3">
              
            Expert in implementing, monitoring, and maintaining Microsoft Azure solutions.
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                <span className="text-emerald-500 dark:text-emerald-400 text-sm font-medium">Active</span>
              </div>
              <a 
                href="https://learn.microsoft.com/api/credentials/share/en-us/curious4tech/338C240C7645D262?sharingId=studentamb_363945" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 group-hover:translate-x-1 transition-all"
              >
                Verify 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* GCP Associate Cloud Engineer  - Updated with hover effects and badge styling */}

      <div className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <div className="p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
          <div className="bg-white dark:bg-gray-900 p-5">
            <div className="flex justify-between items-start">
              <div className="relative w-16 h-16 mb-4 group-hover:scale-110 transition-transform">
                <Image
                  src="/gcp-engineer.png"
                  alt="Microsoft MVP"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-md">
                Google
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            GCP Associate Cloud Engineer
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-3">
              
            Proficient in deploying applications and managing solutions on Google Cloud Platform.
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                <span className="text-emerald-500 dark:text-emerald-400 text-sm font-medium">Active</span>
              </div>
              <a 
                href="https://learn.microsoft.com/api/credentials/share/en-us/curious4tech/ACBA351DB3E4F730?sharingId=studentamb_363945" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 group-hover:translate-x-1 transition-all"
              >
                Verify 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

  {/* Microsoft Applied Skills - Updated with hover effects and badge styling */}

  <div className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <div className="p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
          <div className="bg-white dark:bg-gray-900 p-5">
            <div className="flex justify-between items-start">
              <div className="relative w-16 h-16 mb-4 group-hover:scale-110 transition-transform">
                <Image
                  src="/adds-applied.png"
                  alt="Microsoft MVP"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-md">
              Microsoft
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            Microsoft Applied Skills
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-3">
              
            Practical expertise in managing Active Directory Domain Services (AD DS).
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                <span className="text-emerald-500 dark:text-emerald-400 text-sm font-medium">Active</span>
              </div>
              <a 
                href="https://learn.microsoft.com/api/credentials/share/en-us/curious4tech/1FE384F42664FD35?sharingId=studentamb_363945" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 group-hover:translate-x-1 transition-all"
              >
                Verify 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>
      {/* Projects Section */}
<section id="projects" className="py-20 bg-white dark:bg-gray-900">
  <div className="max-w-6xl mx-auto px-4">
    <div className="mb-16 text-center">
      <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
      <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded"></div>
      <p className="mt-4 text-gray-600 dark:text-gray-300">Some of my notable works and contributions</p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Azure AI Project */}
      <div className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <div className="relative">
          <Image
            src="/windows22.png"
            alt="Windows Server 2022 Administration Guide"
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-0 right-0 p-2">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
              Windows Server
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-bold text-xl mb-2">Windows Server 2022 Administration Guide</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
          A comprehensive guide for Windows Server 2022 administration, covering essential topics from installation to advanced configuration, security hardening, and best practices for enterprise environments.
        
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">Windows Server</span>
                  <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">Active Directory</span>
                  <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">PowerShell</span>
                  <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">Group Policy</span>
                  <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">DHCP</span>
                  <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">DNS</span>
                  <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">Hyper-V</span>
                  <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">Security</span>
          </div>
          <div className="flex justify-between items-center">
            <a 
              href="https://github.com/Curious4Tech/Windows-Server-2022-Administration-Full-Guide"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              View on GitHub
              <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Cloud Infrastructure Project */}
      <div className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <div className="relative">
          <Image
            src="/azure-functions-cleanup.png"
            alt="Cloud Infrastructure Project"
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-0 right-0 p-2">
            <span className="bg-cyan-100 text-cyan-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-cyan-900 dark:text-cyan-300">
              Cloud
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-bold text-xl mb-2">Azure Functions - Storage and Database Cleanup</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
          Automated cleanup solution using Azure Functions to manage storage costs and database performance. Handles scheduled removal of archived blobs and cleanup of legacy database records.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">Azure Functions</span>
                <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">Python</span>
                <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">Azure SQL</span>
                <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">Blob Storage</span>
                <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">Azure Function App</span>
                <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">CRON Jobs</span>
          </div>
          <div className="flex justify-between items-center">
            <a 
              href="https://github.com/Curious4Tech/storage-database-cleanup-function"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              View on GitHub
              <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* DevOps Automation Project */}
      <div className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <div className="relative">
          <Image
            src="/devops-automation.png"
            alt="DevOps Automation Project"
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-0 right-0 p-2">
            <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
              DevOps
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-bold text-xl mb-2">Azure App Service & GitHub Actions CI/CD Guide</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
          Comprehensive step-by-step guide for implementing CI/CD pipelines using GitHub Actions to deploy web applications to Azure App Service. Learn automated testing, deployment strategies, and best practices.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">GitHub Actions</span>
            <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">Docker</span>
            <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">Terraform</span>
            <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">Python</span>
            <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">Azure App Service</span>
          </div>
          <div className="flex justify-between items-center">
            <a 
              href="https://github.com/yourusername/devops-automation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              View on Medium
              <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Add more project cards with the same structure... */}
    </div>
  </div>
</section>
      {/* Contact Section */}
<section id="contact" className="min-h-screen flex items-center justify-center py-20 bg-gray-50 dark:bg-gray-800">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200 relative">
      Get In Touch
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600 dark:bg-blue-400 rounded mt-2"></div>
    </h2>
    <p className="text-gray-600 dark:text-gray-300 mb-12 text-lg max-w-2xl mx-auto">
      I&apos;m always open to new opportunities and collaborations.
    </p>
    <div className="flex flex-wrap justify-center gap-8">
      <a 
        href="mailto:azizou.gnankpe-pro@protonmail.com" 
        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-gray-600 transition-all group"
      >
        <svg className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
        <span className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">Email</span>
      </a>
      
      <a 
        href="https://github.com/Curious4tech" 
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-gray-600 transition-all group"
      >
        <svg className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
        <span className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">GitHub</span>
      </a>
      
      <a 
        href="https://www.linkedin.com/in/azizou-gnankpe/" 
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-gray-600 transition-all group"
      >
        <svg className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
        <span className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">LinkedIn</span>
      </a>
      
      <a 
        href="https://medium.com/@Curious4tech" 
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-gray-600 transition-all group"
      >
        <svg className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
        </svg>
        <span className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">Medium</span>
      </a>
    </div>
  </div>
</section>
      {/* Footer with improved spacing and styling */}
<footer className="mt-auto py-8 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex flex-col items-center justify-center space-y-2">
      <p className="text-gray-600 dark:text-gray-300 font-medium">
        © {new Date().getFullYear()} Your Full name
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        All rights reserved.
      </p>
    </div>
  </div>
</footer>
    </div>
  );
}
