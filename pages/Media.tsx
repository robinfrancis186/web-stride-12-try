import React from 'react';
import { BlurFade } from '../components/ui/blur-fade';
import { ParallaxScroll } from '../components/ui/parallax-scroll';

const images = [
    "news/1.webp",
    "news/2.webp",
    "news/3.webp",
    "news/4.webp",
    "news/5.webp",
    "news/6.webp",
    "news/7.webp",
    "news/8.webp",
    "news/9.webp",
    "news/10.webp",
    "news/11.webp",
    "news/12.webp",
    "news/13.webp",
    "news/14.webp",
    "news/15.webp",
    "news/16.webp",
    "news/17.webp",
    "news/18.webp",
    "news/19.webp",
    "news/20.webp",
    "news/21.webp",
    "news/22.webp",
    "news/23.webp",
    "news/24.webp",
    "news/25.webp",
    "news/26.webp",
    "news/27.webp",
    "news/28.webp",
    "news/29.webp",
    "news/30.webp",
    "news/31.webp",
    "news/32.webp",
    "news/33.webp",
    "news/34.webp",
    "news/35.webp",
    "news/36.webp",
    "news/37.webp",
    "news/38.webp",
    "news/39.webp",
    "news/40.webp",
    "news/41.webp",
    "news/42.webp",
    "news/43.webp",
    "news/44.webp",
    "news/45.webp",
  ];

export const Media: React.FC = () => {
  return (
    <div className="bg-slate-50 text-slate-900">
      <div className="pt-32 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <BlurFade delay={0.1} inView>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6">STRIDE in the <span className="gradient-text">Media</span></h1>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Discover how STRIDE is making headlines and transforming lives through inclusive innovation across Kerala and beyond.
            </p>
          </BlurFade>
        </div>
      </div>

      <ParallaxScroll images={images} className="h-auto overflow-visible" />
    </div>
  );
};
