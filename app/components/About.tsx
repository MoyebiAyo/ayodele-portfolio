"use client";

import Image from "next/image";
import { MapPin, Briefcase, Code } from "lucide-react";
import { content } from "@/app/data/content";

export default function About() {
  const iconMap: Record<string, any> = {
    MapPin: MapPin,
    Briefcase: Briefcase,
    Code: Code,
  };

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full blur-xl opacity-30 animate-pulse-slow" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <Image
                  src="/profile.png"
                  alt={content.personal.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Bio & Details */}
          <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              {content.personal.bio}
            </p>

            {/* Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              {content.about.highlights.map((highlight, index) => {
                const IconComponent = iconMap[highlight.icon];
                return (
                  <div
                    key={index}
                    className="glass-card p-4 rounded-xl hover-lift text-center"
                  >
                    <div className="flex justify-center mb-2">
                      <div className="p-3 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-sm text-foreground/60 mb-1">
                      {highlight.label}
                    </h3>
                    <p className="font-bold text-foreground">
                      {highlight.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
