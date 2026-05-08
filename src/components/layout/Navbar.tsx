import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/Button";

const NAV_LINKS = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Properties", href: "#properties" },
  { name: "Cities", href: "#cities" },
  { name: "Media", href: "#media" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-primary/90 backdrop-blur-md border-white/10 py-4 shadow-lg"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 w-full max-w-7xl flex items-center justify-between">
        <a href="#" className="flex items-center gap-4">
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-wider text-white">
              GAUTAM THAKUR
            </span>
            <span className="font-heading text-[10px] uppercase tracking-[0.2em] text-gold">
              Real Estate Advisor
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link text-sm font-heading font-medium text-gray hover:text-gold transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 px-2 py-1">{link.name}</span>
              <div className="absolute inset-0 bg-white/5 rounded blur-md opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10" />
            </a>
          ))}
          <Button size="sm" onClick={() => window.open('https://wa.me/916280131414?text=Hello%20Gautam%20Thakur%2C%20I%20would%20like%20to%20know%20more%20about%20your%20real%20estate%20services%20and%20investment%20opportunities.', '_blank')}>
            Book Consultation
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white hover:text-gold transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-50 bg-primary/95 backdrop-blur-xl flex flex-col pt-20 px-6"
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <nav className="flex flex-col gap-6 mt-12">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif text-white hover:text-gold transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + NAV_LINKS.length * 0.05 }}
                className="mt-8"
              >
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.open('https://wa.me/916280131414?text=Hello%20Gautam%20Thakur%2C%20I%20would%20like%20to%20know%20more%20about%20your%20real%20estate%20services%20and%20investment%20opportunities.', '_blank');
                  }}
                >
                  Book Consultation
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
