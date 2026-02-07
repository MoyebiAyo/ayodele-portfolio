"use client";

import { skills } from "@/app/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl hover-lift text-center group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.level}%`,
                      animation: 'slideIn 1s ease-out forwards'
                    }}
                  />
                </div>
                
                {/* Percentage */}
                <p className="text-sm text-foreground/60 mt-2 font-medium">
                  {skill.level}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
