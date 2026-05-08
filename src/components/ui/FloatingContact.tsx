import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, Phone, Mail, X, Headset, Calendar, MapPin } from "lucide-react";
import { cn } from "../../lib/utils";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-[6.5rem] right-6 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, originX: 1, originY: 1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="flex flex-col gap-3 p-4 rounded-[1.5rem] bg-[#05101a]/95 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] min-w-[240px]"
          >
            <div className="px-3 pb-2 mb-2 border-b border-white/10">
              <h4 className="text-white font-serif font-medium text-lg">Contact Support</h4>
              <p className="text-white/50 text-xs font-light">Get in touch with our team</p>
            </div>

            <a
              href="https://wa.me/916280131414?text=Hello%20Gautam%20Thakur%2C%20I%20would%20like%20to%20know%20more%20about%20your%20real%20estate%20services%20and%20investment%20opportunities."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/5 hover:bg-[#25D366]/20 border border-transparent hover:border-[#25D366]/30 text-white px-4 py-3 rounded-xl transition-all duration-300 group"
            >
              <div className="w-8 h-8 rounded-full bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366] transition-colors">
                <MessageCircle size={16} className="text-[#25D366] group-hover:text-white transition-colors" />
              </div>
              <span className="text-sm font-medium group-hover:text-[#25D366] transition-colors">WhatsApp Chat</span>
            </a>
            
            <a
              href="tel:+916280131414"
              target="_top"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/5 hover:bg-gold/20 border border-transparent hover:border-gold/30 text-white px-4 py-3 rounded-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold transition-colors">
                <Phone size={16} className="text-gold group-hover:text-[#05101a] transition-colors" />
              </div>
              <span className="text-sm font-medium group-hover:text-gold transition-colors">Call Now</span>
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=gautamthakurofficials@gmail.com&su=Real%20Estate%20Consultation%20Inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/5 hover:bg-gold/20 border border-transparent hover:border-gold/30 text-white px-4 py-3 rounded-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold transition-colors">
                <Mail size={16} className="text-gold group-hover:text-[#05101a] transition-colors" />
              </div>
              <span className="text-sm font-medium group-hover:text-gold transition-colors">Email Support</span>
            </a>
            
            <a
              href="https://maps.google.com/?q=Court+Tower,+Business+Bay,+Dubai,+UAE"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/5 hover:bg-gold/20 border border-transparent hover:border-gold/30 text-white px-4 py-3 rounded-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold transition-colors">
                <MapPin size={16} className="text-gold group-hover:text-[#05101a] transition-colors" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium group-hover:text-gold transition-colors leading-tight">Dubai Office</span>
                <span className="text-[10px] text-white/50 group-hover:text-white/80 transition-colors">Business Bay, Dubai</span>
              </div>
            </a>

            <a
              href="https://wa.me/916280131414?text=Hello%20Gautam%20Thakur%2C%20I%20would%20like%20to%20know%20more%20about%20your%20real%20estate%20services%20and%20investment%20opportunities."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gold/10 hover:bg-gold border border-gold/30 hover:border-gold text-white hover:text-[#05101a] px-4 py-3 rounded-xl transition-all duration-300 group mt-1"
            >
              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center group-hover:bg-[#05101a]/20 transition-colors">
                <Calendar size={16} className="text-gold group-hover:text-[#05101a] transition-colors" />
              </div>
              <span className="text-sm font-medium">Book Consultation</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex h-16 w-16 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110 relative group border border-white/10",
          isOpen ? "bg-white/10 text-white hover:bg-white/20 backdrop-blur-md" : "bg-[#05101a] text-white hover:border-gold/50 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(244,194,31,0.2)]"
        )}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        aria-label="Contact Support"
      >
        {isOpen ? <X size={28} /> : <Headset size={28} className="text-gold group-hover:scale-110 transition-transform" />}
      </motion.button>
    </div>
  );
}
