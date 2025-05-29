import React from 'react';
import { UserIcon, BriefcaseIcon, GraduationCapIcon } from 'lucide-react';
export function About() {
  return <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              About Me
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg p-1">
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Eng. Derick Ochieng" className="w-full h-auto" />
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/30 transition-colors duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-gray-700 p-2 rounded-lg mr-4">
                  <UserIcon className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Who I Am</h3>
              </div>
              <p className="text-gray-300">
                I'm Eng. Derick Christian Ochieng, a passionate BBIT student at
                Technical University of Mombasa. I combine my technical
                expertise in programming with business knowledge to create
                innovative solutions for modern challenges.
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/30 transition-colors duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-gray-700 p-2 rounded-lg mr-4">
                  <BriefcaseIcon className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold">My Focus</h3>
              </div>
              <p className="text-gray-300">
                Passionate about Software Engineering and Cyber Security, I
                combine cutting-edge development practices with robust security
                principles. My expertise spans full-stack development, secure
                coding practices, and implementing cybersecurity measures. I'm
                committed to building not just functional, but secure and
                resilient software solutions.
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/30 transition-colors duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-gray-700 p-2 rounded-lg mr-4">
                  <GraduationCapIcon className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold">My Education</h3>
              </div>
              <p className="text-gray-300">
                Currently pursuing a Bachelor of Business Information Technology
                (BBIT) at the prestigious Technical University of Mombasa. This
                comprehensive program combines advanced IT concepts with
                business principles, preparing me for the dynamic world of
                technology-driven business solutions. Key areas of study include
                software development, business analytics, and information
                systems management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}