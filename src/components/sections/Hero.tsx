import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Globe, TrendingUp, Users, Building2 } from "lucide-react";
import { Button } from "../ui/Button";

const STATS = [
  { value: "15+", label: "Cities Served", icon: Globe },
  { value: "$500M+", label: "Investment Deals", icon: TrendingUp },
  { value: "1000+", label: "Happy Clients", icon: Users },
  { value: "12+", label: "Years Experience", icon: Building2 },
];

export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-primary">
        <motion.div
           initial={{ scale: 1.1 }}
           animate={{ scale: 1 }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           className="w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop" 
            alt="Dubai Luxury Real Estate"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Dark Luxury Blue Overlay */}
        <div className="absolute inset-0 bg-primary/70 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-primary/80 z-10" />
      </div>

      <div className="container relative z-20 mx-auto px-6 md:px-12 w-full max-w-7xl">
        <div className="max-w-4xl relative">
          
          {/* Glassmorphism background for content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="p-8 md:p-12 rounded-3xl glass border border-white/10 relative overflow-hidden card-glow"
          >
            {/* Animated Light Sweep Effect */}
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-sweep pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-4 tracking-wide font-serif">
                Global Luxury <br />
                <span className="gold-text-gradient italic font-light drop-shadow-[0_0_15px_rgba(244,194,31,0.3)]">
                  Real Estate Advisory
                </span>
              </h1>
              <p className="text-base md:text-lg text-gray/90 max-w-2xl mb-10 font-light leading-relaxed">
                Premium Residential, Commercial & Industrial Investment Opportunities Across Dubai,
                Uttarakhand, Punjab, Gujarat, Goa, NCR & Major Cities.
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <Button 
                  size="lg" 
                  className="group shadow-[0_4px_20px_rgba(244,194,31,0.3)]"
                  onClick={() => document.getElementById("properties")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Explore Properties
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="backdrop-blur-md bg-white/5"
                  onClick={() => window.open('https://wa.me/916280131414?text=Hello%20Gautam%20Thakur%2C%20I%20would%20like%20to%20know%20more%20about%20your%20real%20estate%20services%20and%20investment%20opportunities.', '_blank')}
                >
                  Book Consultation
                </Button>
              </div>
            </motion.div>
          </motion.div>

        </div>

        {/* Floating Stats */}
        <motion.div style={{ opacity }} className="mt-20 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 + i * 0.1 }}
              className="flex items-start gap-4 p-4 rounded-xl glass border border-white/5 hover:border-gold/30 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 text-gold shadow-[0_0_15px_rgba(244,194,31,0.2)]">
                <stat.icon size={20} />
              </div>
              <div>
                <p className="text-2xl lg:text-3xl font-serif text-white mb-1 drop-shadow-md">
                  {stat.value}
                </p>
                <p className="text-[10px] md:text-xs font-heading tracking-widest text-gold/80 uppercase">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Smooth Scrolling Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-heading uppercase tracking-widest text-white/50">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold/50 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gold animate-scroll" />
        </div>
      </motion.div>

    </section>
  );
}
