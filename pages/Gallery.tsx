import React from 'react';
import { BlurFade } from '../components/ui/blur-fade';
import { ParallaxScroll } from '../components/ui/parallax-scroll';

const images = [
  "gallery/1.webp",
  "gallery/2.webp",
  "gallery/3.webp",
  "gallery/4.webp",
  "gallery/5.webp",
  "gallery/6.webp",
  "gallery/7.webp",
  "gallery/8.webp",
  "gallery/9.webp",
  "gallery/10.webp",
  "gallery/11.webp",
  "gallery/12.webp",
  "gallery/13.webp",
  "gallery/14.webp",
];

export const Gallery: React.FC = () => {
  return (
    <div className="bg-slate-50 text-slate-900">
      <div className="pt-32 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <BlurFade delay={0.1} inView>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6">Our <span className="gradient-text">Gallery</span></h1>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Glimpses into the innovation, collaboration, and impact happening across the STRIDE ecosystem every day.
            </p>
          </BlurFade>
        </div>
      </div>

      <ParallaxScroll images={images} className="h-auto overflow-visible" />
    </div>
  );
};