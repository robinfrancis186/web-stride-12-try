import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { X, ShoppingCart, ArrowRight, Check } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  // price: string;
  image: string;
  category: string;
  tag?: string;
  description?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Palm Pen Holder',
    // price: '₹2,500',
    category: 'Accessibility',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    // tag: 'Best Seller',
    description: 'Ultrasonic obstacle detection with haptic feedback.'
  },
  {
    id: 2,
    name: 'Button Aid',
    // price: '₹1,200',
    category: 'Accessibility',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    description: 'Magnetic ball bearing mechanism for silent time telling.'
  },
  {
    id: 3,
    name: 'Adaptive Pencil Grip',
    // price: '₹4,500',
    category: 'Accessibility',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
    // tag: 'Pro',
    description: 'Refreshable braille display with Bluetooth connectivity.'
  },
  {
    id: 4,
    name: 'Toothbrush Holder',
    // price: '₹3,200',
    category: 'Accessibility',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
    description: 'Instant OCR text-to-speech for documents and books.'
  },
  {
    id: 5,
    name: 'Utensil Holder',
    // price: '₹8,000',
    category: 'Accessibility',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80',
    // tag: 'New',
    description: 'Portable, carbon-fiber folding ramp for wheelchairs.'
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
            <h1 className="text-5xl font-black text-slate-900 mb-4">Innovation <span className="text-cyan-500">Catalog</span></h1>
            <p className="text-slate-600 text-lg">Affordable, high-quality assistive devices made for the community.</p>
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
              <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                {product.tag && (
                  <span className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10">
                    {product.tag}
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
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
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProduct(null)}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
              />
              <motion.div
                layoutId={`product-${selectedProduct.id}`}
                className="bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl relative z-10 flex flex-col md:flex-row max-h-[90vh] md:max-h-auto overflow-y-auto"
              >
                <button
                  onClick={(e) => { e.stopPropagation(); setSelectedProduct(null); }}
                  className="absolute top-4 right-4 z-20 bg-white/50 backdrop-blur-md text-slate-900 p-2 rounded-full hover:bg-white transition"
                >
                  <X size={20} />
                </button>

                <div className="md:w-1/2 bg-slate-100 h-64 md:h-auto">
                  <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
                </div>

                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <span className="text-cyan-600 font-bold uppercase tracking-widest text-sm mb-2">{selectedProduct.category}</span>
                  <h2 className="text-4xl font-black text-slate-900 mb-2">{selectedProduct.name}</h2>

                  <p className="text-slate-600 mb-8 leading-relaxed">
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