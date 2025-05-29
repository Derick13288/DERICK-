import React from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
export function Projects() {
  const projects = [{
    title: 'Secure Authentication System',
    description: 'Developed a robust authentication system implementing OAuth2.0, JWT tokens, and multi-factor authentication to ensure secure user access.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['Security', 'Authentication', 'OAuth2.0']
  }, {
    title: 'Network Monitoring Tool',
    description: 'Created a comprehensive network monitoring system with real-time threat detection and automated incident response capabilities.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2034&q=80',
    tags: ['Network Security', 'Monitoring', 'Python']
  }, {
    title: 'E-Commerce Platform',
    description: 'Built a secure e-commerce platform with encrypted payment processing, secure data handling, and PCI DSS compliance implementation.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['E-commerce', 'Security', 'Full Stack']
  }, {
    title: 'Vulnerability Scanner',
    description: 'Developed an automated vulnerability assessment tool that identifies security weaknesses in web applications and provides remediation guidance.',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80',
    tags: ['Security', 'Automation', 'Risk Assessment']
  }];
  return <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              My Projects
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Innovative solutions designed to solve real-world problems
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => <div key={index} className="group bg-gray-900 border border-gray-700 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300">
              <div className="relative h-60 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => <span key={idx} className="text-xs bg-gray-800 text-cyan-400 px-3 py-1 rounded-full border border-gray-700">
                      {tag}
                    </span>)}
                </div>
                <div className="flex space-x-3">
                  <a href="#" className="flex items-center text-sm text-gray-300 hover:text-cyan-400 transition-colors">
                    <ExternalLinkIcon size={16} className="mr-1" /> View Project
                  </a>
                  <a href="#" className="flex items-center text-sm text-gray-300 hover:text-cyan-400 transition-colors">
                    <GithubIcon size={16} className="mr-1" /> Source Code
                  </a>
                </div>
              </div>
            </div>)}
        </div>
        <div className="text-center mt-12">
          <a href="#" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
            View All Projects
          </a>
        </div>
      </div>
    </section>;
}