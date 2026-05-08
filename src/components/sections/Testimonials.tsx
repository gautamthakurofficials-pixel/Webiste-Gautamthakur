import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Section, SectionHeader } from "../ui/Section";
import { cn } from "../../lib/utils";

const TESTIMONIALS = [
  {
    quote: "Gautam Thakur provided excellent guidance during our commercial investment journey. His market understanding and professional approach made the entire process smooth and trustworthy.",
    author: "Rajiv Malhotra",
    location: "Dubai Investor",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop",
    rating: 5
  },
  {
    quote: "One of the most professional real estate advisors I’ve worked with. Gautam understands luxury investments and premium client servicing at an international level.",
    author: "Aman Arora",
    location: "Chandigarh",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&auto=format&fit=crop",
    rating: 5
  },
  {
    quote: "We invested in Uttarakhand through Gautam and the experience was outstanding. From consultation to final deal execution, everything was handled professionally.",
    author: "Neha Sharma",
    location: "Dehradun",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&auto=format&fit=crop",
    rating: 5
  },
  {
    quote: "Gautam’s investment insights and market knowledge helped us identify the right commercial opportunity. Highly recommended for serious investors.",
    author: "Karan Mehta",
    location: "Gurgaon",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=256&auto=format&fit=crop",
    rating: 5
  },
  {
    quote: "The level of branding, professionalism and consultation quality is truly impressive. Gautam brings a modern and luxury approach to real estate advisory.",
    author: "Simran Kaur",
    location: "Mohali",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&auto=format&fit=crop",
    rating: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((current) => (current + 1) % TESTIMONIALS.length);
  const prev = () => setCurrentIndex((current) => (current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Section id="testimonials" className="bg-[#05101a] border-t border-white/5 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <SectionHeader 
        title="Client Testimonials" 
        subtitle="Success Stories" 
        centered 
      />

      <div className="max-w-5xl mx-auto mt-12 relative z-10 px-4 md:px-0">
        
        <div className="relative h-auto md:h-[350px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full flex flex-col items-center justify-center"
            >
              <div className="glass p-8 md:p-12 rounded-3xl border border-white/10 relative w-full max-w-4xl hover:border-gold/30 hover:shadow-[0_0_40px_rgba(244,194,31,0.15)] transition-all duration-500 card-glow">
                <Quote className="absolute top-8 left-8 w-12 h-12 text-gold/10" />
                
                <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left relative z-10">
                  <div className="shrink-0 flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gold/30 p-1 mb-4 shadow-lg">
                      <img 
                        src={TESTIMONIALS[currentIndex].image} 
                        alt={TESTIMONIALS[currentIndex].author} 
                        className="w-full h-full rounded-full object-cover grayscale"
                      />
                    </div>
                    <div className="flex gap-1 mb-2">
                      {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                      ))}
                    </div>
                    <p className="text-gold font-heading font-medium tracking-wide uppercase text-sm">
                      {TESTIMONIALS[currentIndex].author}
                    </p>
                    <p className="text-xs text-gray/60 font-light mt-1">
                      {TESTIMONIALS[currentIndex].location}
                    </p>
                  </div>

                  <div className="flex-1">
                    <p className="text-lg md:text-2xl font-serif text-white/90 leading-relaxed italic border-l-0 md:border-l border-white/10 md:pl-8">
                      "{TESTIMONIALS[currentIndex].quote}"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button 
            onClick={prev}
            className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-gold hover:shadow-[0_0_15px_rgba(244,194,31,0.3)] transition-all group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </button>
          
          <div className="flex gap-3">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-500",
                  i === currentIndex ? "w-8 bg-gold shadow-[0_0_10px_rgba(244,194,31,0.5)]" : "w-2 bg-white/20 hover:bg-white/40"
                )}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={next}
            className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-gold hover:shadow-[0_0_15px_rgba(244,194,31,0.3)] transition-all group"
          >
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </Section>
  );
}
