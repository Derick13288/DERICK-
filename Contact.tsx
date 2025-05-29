import React from 'react';
import { MailIcon, PhoneIcon, MapPinIcon, LinkedinIcon, TwitterIcon, GithubIcon } from 'lucide-react';
export function Contact() {
  return <section id="contact" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Get In Touch
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Interested in working together? Feel free to reach out!
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/30 transition-colors duration-300">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-gray-700 p-2 rounded-lg mr-4">
                    <MailIcon className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a href="mailto:derickochieng154@gmail.com" className="text-white hover:text-cyan-400 transition-colors">
                      derickochieng154@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-gray-700 p-2 rounded-lg mr-4">
                    <PhoneIcon className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <a href="tel:+254706561661" className="text-white hover:text-cyan-400 transition-colors">
                      +254 706 561 661
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-gray-700 p-2 rounded-lg mr-4">
                    <PhoneIcon className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">WhatsApp</p>
                    <a href="https://wa.me/254112435064" className="text-white hover:text-cyan-400 transition-colors">
                      +254 112 435 064
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-gray-300 mb-3">Connect with me</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-700 p-2 rounded-lg text-cyan-400 hover:bg-gray-600 transition-colors">
                    <LinkedinIcon size={20} />
                  </a>
                  <a href="#" className="bg-gray-700 p-2 rounded-lg text-cyan-400 hover:bg-gray-600 transition-colors">
                    <TwitterIcon size={20} />
                  </a>
                  <a href="#" className="bg-gray-700 p-2 rounded-lg text-cyan-400 hover:bg-gray-600 transition-colors">
                    <GithubIcon size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/30 transition-colors duration-300">
            <h3 className="text-xl font-semibold mb-4 text-white">
              Send Me a Message
            </h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="text-sm text-gray-400 block mb-2">
                  Your Name
                </label>
                <input type="text" id="name" className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="text-sm text-gray-400 block mb-2">
                  Your Email
                </label>
                <input type="email" id="email" className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent" placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="subject" className="text-sm text-gray-400 block mb-2">
                  Subject
                </label>
                <input type="text" id="subject" className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent" placeholder="Project Inquiry" />
              </div>
              <div>
                <label htmlFor="message" className="text-sm text-gray-400 block mb-2">
                  Message
                </label>
                <textarea id="message" rows={4} className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent" placeholder="Your message here..."></textarea>
              </div>
              <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <footer className="mt-20 border-t border-gray-700 pt-8">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Eng. Derick Ochieng. All rights
            reserved.
          </p>
        </div>
      </footer>
    </section>;
}