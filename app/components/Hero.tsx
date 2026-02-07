"use client";

import { content } from "@/app/data/content";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
    >
      {/* Animated Decorative Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Left 3D Sphere */}
        <div
          className="absolute -top-20 -left-20 w-80 h-80 rounded-full blur-2xl opacity-40 animate-float"
          style={{
            background: "radial-gradient(circle at 30% 30%, #a855f7, #3b82f6)",
            boxShadow:
              "inset -20px -20px 50px rgba(0,0,0,0.2), 20px 20px 60px rgba(59, 130, 246, 0.3)",
          }}
        />

        {/* Top Right 3D Triangle (Pyramid) */}
        <div className="absolute top-20 -right-10 w-48 h-48 animate-float-delay opacity-60">
          <div
            className="w-full h-full"
            style={{
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              background: "linear-gradient(135deg, #f43f5e 0%, #fb923c 100%)",
              filter: "drop-shadow(15px 15px 20px rgba(244, 63, 94, 0.4))",
            }}
          />
        </div>

        {/* Left 3D Cube (Floating) */}
        <div
          className="absolute top-1/3 -left-12 w-32 h-32 rotate-[30deg] animate-float-slow opacity-50"
          style={{
            background: "linear-gradient(135deg, #2dd4bf 0%, #0ea5e9 100%)",
            borderRadius: "16px",
            boxShadow:
              "20px 20px 40px rgba(14, 165, 233, 0.3), inset -5px -5px 15px rgba(0,0,0,0.2), inset 5px 5px 15px rgba(255,255,255,0.4)",
            transform: "perspective(1000px) rotateX(20deg) rotateY(20deg)",
          }}
        />

        {/* Right Glowing Ring */}
        <div className="absolute top-1/4 -right-16 w-56 h-56 animate-pulse-slow opacity-40">
          <div
            className="w-full h-full rounded-full border-[12px]"
            style={{
              borderColor: "transparent",
              borderImage: "linear-gradient(to right, #3b82f6, #2dd4bf) 1",
              background: "none",
              filter: "blur(2px) drop-shadow(0 0 20px #3b82f6)",
              borderRadius: "50%",
              borderStyle: "solid",
            }}
          />
        </div>

        {/* Bottom Left 3D Marbles */}
        <div className="absolute bottom-40 left-20 flex gap-6 animate-float">
          <div
            className="w-6 h-6 rounded-full shadow-xl"
            style={{
              background: "radial-gradient(circle at 30% 30%, #fbbf24, #d97706)",
            }}
          />
          <div
            className="w-8 h-8 rounded-full shadow-xl"
            style={{
              background: "radial-gradient(circle at 30% 30%, #ec4899, #be185d)",
            }}
          />
          <div
            className="w-5 h-5 rounded-full shadow-xl"
            style={{
              background: "radial-gradient(circle at 30% 30%, #22c55e, #15803d)",
            }}
          />
        </div>

        {/* Bottom Right Glass Pattern */}
        <div className="absolute bottom-24 right-12 w-64 h-64 animate-float-delay opacity-30">
          <div
            className="w-full h-full rounded-3xl backdrop-blur-3xl border border-white/20"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%)",
              boxShadow: "20px 20px 50px rgba(0,0,0,0.1)",
            }}
          />
          <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 blur-sm" />
          <div className="absolute bottom-8 right-8 w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 blur-sm" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto text-center animate-fade-in relative z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 leading-tight">
          {content.hero.headline}
        </h1>
        <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-3xl mx-auto">
          {content.personal.tagline}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollToSection("projects")}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-base text-white transition-all transform hover:-translate-y-1 active:translate-y-0.5 active:shadow-inner group"
            style={{
              background: "linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)",
              boxShadow:
                "0 10px 20px rgba(59, 130, 246, 0.3), 0 6px 6px rgba(0, 0, 0, 0.1), inset 0 -4px 0 rgba(0, 0, 0, 0.2)",
              textShadow: "0 1px 2px rgba(0,0,0,0.2)",
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              {content.hero.cta}
              <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
            </span>
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-base border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 transition-all transform hover:-translate-y-1 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-400 dark:hover:text-gray-900"
          >
            {content.hero.ctaSecondary}
          </button>
        </div>
      </div>
    </section>
  );
}
