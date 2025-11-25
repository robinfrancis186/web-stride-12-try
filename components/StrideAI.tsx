import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles, Mic, Globe, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  action?: {
    label: string;
    path: string;
  };
}

export const StrideAI: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello, I'm Stride AI. I can help you navigate our ecosystem, find assistive products, or learn about our mission. How can I assist you today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simple keyword-based logic for "guiding"
    const lowerInput = inputValue.toLowerCase();
    let responseText = "I'm not sure about that yet, but I'm learning! You can explore our ecosystem to find more.";
    let action = undefined;

    if (lowerInput.includes('product') || lowerInput.includes('buy') || lowerInput.includes('catalog')) {
      responseText = "You can explore our full range of assistive technologies in our Product Catalog.";
      action = { label: "View Products", path: "/products" };
    } else if (lowerInput.includes('about') || lowerInput.includes('mission') || lowerInput.includes('who')) {
      responseText = "STRIDE is dedicated to inclusive innovation. Learn more about our mission and vision.";
      action = { label: "About Us", path: "/about" };
    } else if (lowerInput.includes('contact') || lowerInput.includes('join') || lowerInput.includes('involved')) {
      responseText = "We'd love to have you join us! You can partner, sponsor, or volunteer.";
      action = { label: "Get Involved", path: "/get-involved" };
    } else if (lowerInput.includes('news') || lowerInput.includes('update')) {
      responseText = "Stay updated with the latest breakthroughs and community stories.";
      action = { label: "Latest News", path: "/news" };
    } else if (lowerInput.includes('gallery') || lowerInput.includes('photo')) {
      responseText = "See our innovation in motion in our community gallery.";
      action = { label: "View Gallery", path: "/gallery" };
    } else if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
      responseText = "Hello! I'm here to guide you through the STRIDE ecosystem. What are you looking for?";
    }

    // Simulate AI response delay
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: 'ai',
        timestamp: new Date(),
        action: action
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1200);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleActionClick = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 flex items-center gap-3 px-6 py-3 bg-[#1A1A1A] border border-white/20 rounded-full shadow-2xl transition-all duration-300 group hover:border-white/40 hover:shadow-cyan-500/20 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
          }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Sparkles className="w-5 h-5 text-white" />
        <span className="text-white font-medium tracking-wide">STRIDE AI</span>

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.button>

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[380px] h-[650px] max-h-[85vh] bg-[#0B1120] rounded-[2.5rem] shadow-2xl border border-white/10 overflow-hidden flex flex-col font-sans"
          >
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[60%] bg-blue-600/20 blur-[100px] rounded-full"></div>
              <div className="absolute bottom-[-10%] right-[-10%] w-[80%] h-[40%] bg-cyan-600/10 blur-[80px] rounded-full"></div>
            </div>

            {/* Header */}
            <div className="relative z-10 p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 shadow-lg shadow-cyan-500/20">
                  <img src="/stride-ai-orb.png" alt="AI" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg tracking-tight">Stride AI</h3>
                  <p className="text-cyan-400 text-xs font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                    Online
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors backdrop-blur-sm"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Orb Visualization Area */}
            <div className="relative z-10 flex-shrink-0 h-32 flex items-center justify-center mb-2">
              <div className="w-32 h-32 relative">
                <img src="/stride-ai-orb.png" alt="AI Orb" className="w-full h-full object-contain animate-pulse-slow drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]" />
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto px-4 py-2 space-y-4 scrollbar-hide">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-4 rounded-2xl text-[15px] leading-relaxed backdrop-blur-md ${msg.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-sm shadow-lg shadow-blue-900/20'
                      : 'bg-white/10 text-slate-100 border border-white/10 rounded-bl-sm'
                      }`}
                  >
                    {msg.text}
                  </div>

                  {/* Action Button */}
                  {msg.action && (
                    <motion.button
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      onClick={() => handleActionClick(msg.action!.path)}
                      className="mt-2 flex items-center gap-2 px-4 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-xl text-cyan-400 text-sm font-medium transition-colors group"
                    >
                      {msg.action.label}
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  )}

                  <div className={`text-[10px] mt-1.5 px-1 opacity-50 ${msg.sender === 'user' ? 'text-right text-slate-300' : 'text-left text-slate-400'}`}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/10 border border-white/10 p-4 rounded-2xl rounded-bl-sm flex gap-1.5 items-center h-12">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce delay-100"></span>
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce delay-200"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 relative z-20">
              <div className="relative flex items-center gap-2 bg-white/5 border border-white/10 rounded-[2rem] p-1.5 backdrop-blur-md">
                <button className="p-3 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
                  <Globe size={20} />
                </button>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask Stride AI..."
                  className="flex-1 bg-transparent text-white placeholder-slate-500 focus:outline-none text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-blue-900/30"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
