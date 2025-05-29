import React from 'react';
import { ChevronDownIcon } from 'lucide-react';
export function Hero() {
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover opacity-10"></div>
      {/* Animated grid lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      <div className="container mx-auto px-4 md:px-6 z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
          <span className="block font-berlin bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
            DERICK .O
          </span>
          <span className="block mt-2 text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
            SOFTWARE ENGINEER & SECURITY SPECIALIST
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
          BBIT Student at Technical University of Mombasa | Specializing in
          Software Engineering & Cyber Security
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
          <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
            View My Work
          </a>
          <a href="#contact" className="px-8 py-3 bg-gray-800 border border-cyan-500/30 rounded-full text-white font-medium hover:bg-gray-700 transition-all duration-300">
            Contact Me
          </a>
        </div>
      </div>
      <a href="#about" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white animate-bounce">
        <ChevronDownIcon size={32} />
      </a>
      {/* Futuristic floating elements */}
      <div className="hidden md:block absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="hidden md:block absolute -bottom-40 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
    </section>;
}