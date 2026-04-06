"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/app/data/projects";

export default function Projects() {
  return (
    <section id="work" className="py-20 px-6 bg-gray-50/50 dark:bg-gray-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm text-[#FF5C35] font-medium mb-4 uppercase tracking-wider">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Work
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Explore my latest design projects across various categories including church designs, 
            social media campaigns, branding, and more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group block glass-card rounded-2xl overflow-hidden hover-lift"
            >
              {/* Project Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-flex items-center gap-2 text-white font-medium">
                    View Project <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-sm text-[#FF5C35] font-medium mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#FF5C35] transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 text-sm line-clamp-2">
                  {project.problem}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
