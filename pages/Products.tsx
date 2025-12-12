import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { X, ShoppingCart, ArrowRight, Check, Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  // price: string;
  image: string;
  category: string;
  tag?: string;
  description?: string;
  video?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Palm Pen Holder',
    // price: '₹2,500',
    category: 'Accessibility',
    image: 'IMG_1904.webp',
    // tag: 'Best Seller',
    description: 'A lightweight, adaptive writing aid designed for users with limited finger dexterity. The Palm Pen Holder secures the writing instrument to the hand, enabling smooth writing through natural arm movement rather than grip strength.',
    video: '/1.mkv'
  },
  {
    id: 2,
    name: 'Button Aid',
    // price: '₹1,200',
    category: 'Accessibility',
    image: 'IMG_2269.webp',
      description: 'A compact, easy-to-use dressing aid designed to help users fasten buttons without requiring fine finger control. The Button Aid features an ergonomic handle and a precision hook that guides buttons through buttonholes with minimal effort, promoting independence in daily dressing routines.',
    video: '/2.mkv'
  },
  {
    id: 3,
    name: 'Adaptive Pencil Grip',
    // price: '₹4,500',
    category: 'Accessibility',
    image: 'IMG_1903.webp',
    // tag: 'Pro',
    description: 'A versatile, ergonomic writing support designed to improve finger positioning, reduce fatigue, and enhance control for learners with fine-motor challenges. The Adaptive Pencil Grip fits seamlessly over standard pencils and pens, guiding the hand into a comfortable, stable posture that promotes confident writing.',
    video: '/3.mkv'
  },
  {
    id: 4,
    name: 'Toothbrush Holder',
    // price: '₹3,200',
    category: 'Accessibility',
    image: 'IMG_1899.webp',
    description: 'A stable, easy-grip adaptive tool designed for individuals with limited hand strength or dexterity. The Adaptive Toothbrush Holder secures a standard toothbrush within an adjustable grip, allowing users to maintain proper positioning and perform brushing movements with confidence. Lightweight, washable, and comfortable, it supports greater independence in daily hygiene routines.',
    video: '/4.mkv'
  },
  {
    id: 5,
    name: 'Utensil Holder',
    // price: '₹8,000',
    category: 'Accessibility',
    image: 'IMG_1908.webp',
    // tag: 'New',
    description: 'A universal, adjustable grip designed to help users with limited hand strength or dexterity hold spoons, forks, toothbrushes, or similar tools with confidence and stability. The Utensil Holder wraps securely around the hand, reducing the need for fine motor control and enabling greater independence during meals, self-care tasks, and classroom activities. Lightweight, washable, and adaptable to various utensil sizes, it supports users across a wide range of needs.',
    video: '/5.mkv'
  },
  // {
  //   id: 6,
  //   name: 'Sensory Kit',
  //   // price: '₹1,500',
  //   category: 'Learning',
  //   image: 'https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?auto=format&fit=crop&w=800&q=80',
  //   description: 'Educational tactile tools for children with developmental needs.'
  // },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

export const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const [addedToCart, setAddedToCart] = useState<number[]>([]);
  
  // Video player state
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (selectedProduct?.video && videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  }, [selectedProduct]);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = pos * videoRef.current.duration;
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  const handleAddToCart = (id: number) => {
    setAddedToCart([...addedToCart, id]);
    setTimeout(() => {
      setSelectedProduct(null); // Close modal after adding
    }, 800);
  };

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-16 flex justify-between items-end">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-5xl font-black text-slate-900 mb-4">Stride <span className="text-cyan-500">Innovation Catalogue</span></h1>
            <p className="text-slate-600 text-lg">Affordable, high-quality assistive devices designed with the community through participatory design and rigorous testing.</p>
          </motion.div>
          {/* <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm"
          >
            <ShoppingCart size={20} className="text-slate-700" />
            <span className="font-bold text-slate-900">{addedToCart.length} items</span>
          </motion.div> */}
        </div>

        {/* Focus Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              layoutId={`product-${product.id}`}
              onClick={() => setSelectedProduct(product)}
              onMouseEnter={() => setHovered(product.id)}
              onMouseLeave={() => setHovered(null)}
              className={`group relative rounded-3xl overflow-hidden bg-white shadow-sm border border-slate-200 cursor-pointer transition-all duration-300 ${hovered !== null && hovered !== product.id ? 'opacity-40 scale-95 blur-[1px]' : 'opacity-100 scale-100 hover:shadow-2xl hover:border-cyan-200'
                }`}
            >
              <div className="aspect-4/3 overflow-hidden bg-slate-100 relative">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                {product.tag && (
                  <span className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10">
                    {product.tag}
                  </span>
                )}
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-medium flex items-center gap-2">View Details <ArrowRight size={16} /></span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs font-bold text-cyan-600 uppercase tracking-widest mb-1">{product.category}</div>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-slate-900">{product.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Product Detail Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProduct(null)}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
              />
              <motion.div
                layoutId={`product-${selectedProduct.id}`}
                className="bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl relative z-10 flex flex-col md:flex-row h-[90vh] md:h-auto"
              >
                <button
                  onClick={(e) => { e.stopPropagation(); setSelectedProduct(null); }}
                  className="absolute top-4 right-4 z-20 bg-white/50 backdrop-blur-md text-slate-900 p-2 rounded-full hover:bg-white transition"
                >
                  <X size={20} />
                </button>

                {/* Video container - full width on mobile, half width on desktop */}
                <div className="w-full md:w-1/2 bg-slate-900 h-2/3 md:h-auto relative group overflow-hidden md:rounded-l-3xl rounded-t-3xl md:rounded-tr-none md:rounded-br-none" onMouseMove={handleMouseMove}>
                  {selectedProduct.video ? (
                    <div className="relative w-full h-full">
                      <video
                        ref={videoRef}
                        autoPlay
                        loop
                        playsInline
                        onTimeUpdate={handleTimeUpdate}
                        onClick={togglePlayPause}
                        className="w-full h-full object-cover cursor-pointer block"
                      >
                        {/* Prefer VP9/WebM if present, else H.264 MP4 fallback. */}
                        {selectedProduct.video && (
                          (() => {
                            const base = selectedProduct.video.replace(/\.[^/.]+$/, '');
                            const webm = `${base}.webm`;
                            const mp4 = `${base}.mp4`;
                            return (
                              <>
                                <source src={webm} type={'video/webm; codecs="vp9"'} />
                                <source src={mp4} type={'video/mp4'} />
                                {/* Fallback to original path if browser ignores sources */}
                                <source src={selectedProduct.video} />
                              </>
                            );
                          })()
                        )}
                        Your browser does not support the video tag.
                      </video>
                      
                      {/* Custom Video Controls */}
                      {(showControls || !isPlaying) && (
                        <div className="absolute inset-0 pointer-events-none">
                          <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent"></div>
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
                            <button
                              onClick={togglePlayPause}
                              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-4 rounded-full transition-all duration-200 hover:scale-110"
                            >
                              {isPlaying ? <Pause size={32} /> : <Play size={32} className="ml-1" />}
                            </button>
                          </div>
                        
                          <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-auto">
                          {/* Progress Bar */}
                          <div 
                            onClick={handleProgressClick}
                            className="w-full h-1.5 bg-white/30 rounded-full cursor-pointer mb-3 group/progress hover:h-2 transition-all"
                          >
                            <div 
                              className="h-full bg-cyan-500 rounded-full relative transition-all"
                              style={{ width: `${progress}%` }}
                            >
                              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover/progress:opacity-100 transition-opacity"></div>
                            </div>
                          </div>
                          
                          {/* Control Buttons */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <button
                                onClick={togglePlayPause}
                                className="text-white hover:text-cyan-400 transition-colors"
                              >
                                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                              </button>
                              <button
                                onClick={toggleMute}
                                className="text-white hover:text-cyan-400 transition-colors"
                              >
                                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                              </button>
                            </div>
                            <button
                              onClick={toggleFullscreen}
                              className="text-white hover:text-cyan-400 transition-colors"
                            >
                              <Maximize size={20} />
                            </button>
                          </div>
                        </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
                  )}
                </div>

                {/* Text content - fixed at bottom on mobile, side by side on desktop */}
                <div className="w-full md:w-1/2 p-4 md:p-12 flex flex-col justify-end md:justify-center h-1/3 md:h-auto overflow-hidden">
                  <span className="text-cyan-600 font-bold uppercase tracking-widest text-xs md:text-sm mb-1">{selectedProduct.category}</span>
                  <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-1 md:mb-2">{selectedProduct.name}</h2>

                  <p className="text-slate-600 text-sm md:text-base leading-relaxed line-clamp-4 md:line-clamp-none">
                    {selectedProduct.description || `Precision engineered for durability and ease of use. This ${selectedProduct.name.toLowerCase()} represents the cutting edge of affordable assistive technology.`}
                  </p>

                  {/* <button
                    onClick={() => handleAddToCart(selectedProduct.id)}
                    disabled={addedToCart.includes(selectedProduct.id)}
                    className={`w-full py-4 font-bold rounded-xl transition shadow-lg flex items-center justify-center gap-2 ${addedToCart.includes(selectedProduct.id)
                      ? 'bg-green-500 text-white cursor-default'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                      }`}
                  >
                    {addedToCart.includes(selectedProduct.id) ? (
                      <><Check size={18} /> Added to Cart</>
                    ) : (
                      <><ShoppingCart size={18} /> Add to Cart</>
                    )}
                  </button> */}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};