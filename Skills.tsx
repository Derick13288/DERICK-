import React from 'react';
import { CodeIcon, LayersIcon, BarChartIcon, ServerIcon, CpuIcon, ShieldIcon } from 'lucide-react';
export function Skills() {
  const skills = [{
    icon: <CodeIcon className="text-cyan-400" size={24} />,
    name: 'Software Engineering',
    level: 90,
    color: 'from-cyan-500 to-blue-500'
  }, {
    icon: <ShieldIcon className="text-purple-400" size={24} />,
    name: 'Cyber Security',
    level: 88,
    color: 'from-purple-500 to-pink-500'
  }, {
    icon: <LayersIcon className="text-green-400" size={24} />,
    name: 'Full Stack Development',
    level: 85,
    color: 'from-green-500 to-teal-500'
  }, {
    icon: <ServerIcon className="text-yellow-400" size={24} />,
    name: 'Network Security',
    level: 82,
    color: 'from-yellow-500 to-orange-500'
  }];
  return <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              My Skills
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Leveraging cutting-edge technologies to build innovative solutions
            across multiple domains
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-gray-700 p-2 rounded-lg mr-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden mt-2">
                <div className={`h-full bg-gradient-to-r ${skill.color} rounded-full`} style={{
              width: `${skill.level}%`
            }}></div>
              </div>
              <div className="flex justify-between mt-2 text-sm text-gray-400">
                <span>Proficiency</span>
                <span>{skill.level}%</span>
              </div>
            </div>)}
        </div>
        <div className="mt-16 grid md:grid-cols-4 gap-4 text-center">
          {['C', 'Python', 'C#', 'Cybersecurity', 'Network Defense', 'Secure Coding', 'Penetration Testing', 'Risk Assessment'].map((tech, index) => <div key={index} className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg py-3 px-4 hover:border-cyan-500/30 hover:bg-gray-800/50 transition-all duration-300">
              <span className="text-gray-300">{tech}</span>
            </div>)}
        </div>
      </div>
    </section>;
}