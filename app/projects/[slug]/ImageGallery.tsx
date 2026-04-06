"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageGalleryProps {
  images: string[];
  title: string;
  imageDescriptions: Record<string, string>;
}

export default function ImageGallery({ images, title, imageDescriptions }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      {/* Hero Image */}
      <div 
        className="relative aspect-video rounded-2xl overflow-hidden mb-12 group cursor-pointer"
        onClick={() => setSelectedImage(images[0])}
      >
        <Image
          src={images[0]}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority
        />
        <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
          Click to expand
        </div>
      </div>

      {/* Visual Gallery */}
      {images.length > 1 && (
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Project Visuals</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.slice(1).map((image, index) => {
              const fileName = image.split('/').pop() || '';
              const description = imageDescriptions[fileName];

              return (
                <div key={index} className="group space-y-4">
                  <div 
                    className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl cursor-pointer"
                    onClick={() => setSelectedImage(image)}
                  >
                    <Image
                      src={image}
                      alt={`${title} visual ${index + 2}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                      Click to expand
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border-l-4 border-[#FF5C35]">
                    <p className="text-sm italic text-foreground/80 leading-relaxed">
                      {description || `Detail view of the ${title} project.`}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 cursor-zoom-out animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full max-w-5xl max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Full project visual"
              fill
              className="object-contain"
            />
            <button 
              className="absolute top-0 -right-12 text-white/70 hover:text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
