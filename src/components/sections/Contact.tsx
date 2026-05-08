import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, MessageCircle, Copy, Check, Navigation, Calendar } from "lucide-react";
import { Section, SectionHeader } from "../ui/Section";
import { Button } from "../ui/Button";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("Floor 22, Court Tower, Marasi Drive, Business Bay, Dubai, UAE");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="contact" className="bg-primary-900 border-t border-white/5 relative">
      <div className="grid lg:grid-cols-2 gap-16 mb-16">
        <div>
          <SectionHeader title="Let's Build Your Next Investment Opportunity" subtitle="Contact & Consultation" />
          
          <p className="text-gray/80 text-lg font-light mb-12 max-w-md leading-relaxed">
            Connect with our advisory team to discuss bespoke real estate strategies, 
            market opportunities, and portfolio diversification.
          </p>

          <div className="space-y-6">
            <a href="tel:+916280131414" target="_top" rel="noopener noreferrer" className="flex items-center gap-4 glass p-4 rounded-2xl border border-white/5 group hover:border-gold/30 transition-colors cursor-pointer card-glow">
              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                <Phone className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-xs text-gray/60 font-heading uppercase tracking-wider mb-1">Direct Line</p>
                <p className="text-lg text-white font-medium group-hover:text-gold transition-colors">+91 6280131414</p>
              </div>
            </a>

            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gautamthakurofficials@gmail.com&su=Real%20Estate%20Consultation%20Inquiry" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 glass p-4 rounded-2xl border border-white/5 group hover:border-gold/30 transition-colors cursor-pointer card-glow">
              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                <Mail className="w-5 h-5 text-gold" />
              </div>
              <div className="overflow-hidden">
                <p className="text-xs text-gray/60 font-heading uppercase tracking-wider mb-1">Email</p>
                <p className="text-sm md:text-lg text-white font-medium group-hover:text-gold transition-colors truncate">gautamthakurofficials@gmail.com</p>
              </div>
            </a>

            <a href="https://wa.me/916280131414?text=Hello%20Gautam%20Thakur%2C%20I%20would%20like%20to%20know%20more%20about%20your%20real%20estate%20services%20and%20investment%20opportunities." target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 glass p-4 rounded-2xl border border-white/5 group hover:border-green-500/30 transition-colors cursor-pointer card-glow">
              <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0 group-hover:bg-green-500/20 transition-colors">
                <MessageCircle className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <p className="text-xs text-gray/60 font-heading uppercase tracking-wider mb-1">WhatsApp</p>
                <p className="text-lg text-white font-medium group-hover:text-green-500 transition-colors">Message Us</p>
              </div>
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-12 rounded-3xl"
        >
          <h3 className="text-2xl font-serif text-white mb-8">Schedule a Consultation</h3>
          
          <form 
            className="space-y-6" 
            onSubmit={(e) => {
              e.preventDefault();
              window.open('https://wa.me/916280131414?text=Hello%20Gautam%20Thakur%2C%20I%20would%20like%20to%20know%20more%20about%20your%20real%20estate%20services%20and%20investment%20opportunities.', '_blank');
              (e.target as HTMLFormElement).reset();
            }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-heading tracking-wide uppercase text-gray/70">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-gold transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-heading tracking-wide uppercase text-gray/70">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-gold transition-colors"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-heading tracking-wide uppercase text-gray/70">Email Address</label>
              <input 
                type="email" 
                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-gold transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-heading tracking-wide uppercase text-gray/70">Area of Interest</label>
              <select className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors appearance-none">
                <option value="dubai">Dubai Real Estate</option>
                <option value="chandigarh">Chandigarh / Mohali</option>
                <option value="dehradun">Dehradun / Uttarakhand</option>
                <option value="commercial">Commercial Space</option>
                <option value="other">Other Inquiry</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-heading tracking-wide uppercase text-gray/70">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-gold transition-colors resize-none"
                placeholder="How can we help you?"
              />
            </div>

            <Button className="w-full group hover:shadow-[0_4px_20px_rgba(244,194,31,0.3)]" size="lg">
              Send Inquiry
              <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </form>
        </motion.div>
      </div>

      {/* Global Offices with Maps */}
      <div className="grid md:grid-cols-2 gap-8 mt-4 pt-16 border-t border-white/5">
        {/* Main Office */}
        <div className="group relative rounded-3xl overflow-hidden glass border border-white/5 hover:border-gold/30 transition-colors card-glow aspect-[4/3] md:aspect-[21/9]">
          <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" alt="Chandigarh Office" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale mix-blend-luminosity opacity-40 group-hover:opacity-60 group-hover:grayscale-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05101a] via-[#05101a]/80 to-transparent" />
          
          <div className="absolute bottom-0 w-full p-6 md:p-8 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
            <div>
              <p className="text-gold text-xs font-heading tracking-widest uppercase mb-2">Main Office</p>
              <h4 className="text-xl md:text-2xl font-serif text-white mb-2 group-hover:text-gold transition-colors">Mohali, Punjab</h4>
              <p className="text-gray/80 font-light flex items-start gap-2 text-sm leading-relaxed min-h-[40px]">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                CP 67 Mall, Sector 67, Mohali<br/>Punjab – 160062
              </p>
            </div>
            <a href="https://maps.google.com/?q=CP+67+Mall,+Sector+67,+Mohali,+Punjab+160062" target="_blank" rel="noopener noreferrer" className="shrink-0 w-full md:w-auto">
              <Button variant="outline" size="sm" className="w-full bg-black/30 backdrop-blur-md">
                View on Map
              </Button>
            </a>
          </div>
        </div>

        {/* Second Office */}
        <div className="group relative rounded-3xl overflow-hidden glass border border-white/5 hover:border-gold/30 transition-colors card-glow aspect-[4/3] md:aspect-[21/9]">
          <img src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2000&auto=format&fit=crop" alt="Dehradun Office" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale mix-blend-luminosity opacity-40 group-hover:opacity-60 group-hover:grayscale-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05101a] via-[#05101a]/80 to-transparent" />
          
          <div className="absolute bottom-0 w-full p-6 md:p-8 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
            <div>
              <p className="text-gold text-xs font-heading tracking-widest uppercase mb-2">Second Office</p>
              <h4 className="text-xl md:text-2xl font-serif text-white mb-2 group-hover:text-gold transition-colors">Dehradun, Uttarakhand</h4>
              <p className="text-gray/80 font-light flex items-start gap-2 text-sm leading-relaxed min-h-[40px]">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                Pacific Golf, Rajpur Road<br/>Dehradun, Uttarakhand – 248009
              </p>
            </div>
            <a href="https://maps.google.com/?q=Pacific+Golf,+Rajpur+Road,+Dehradun,+Uttarakhand+248009" target="_blank" rel="noopener noreferrer" className="shrink-0 w-full md:w-auto">
              <Button variant="outline" size="sm" className="w-full bg-black/30 backdrop-blur-md">
                View on Map
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Premium Dubai Office Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 group relative rounded-[2rem] overflow-hidden bg-[#020810] border border-gold/30 hover:border-gold/60 transition-all duration-500 shadow-[0_20px_50px_rgba(244,194,31,0.15)] flex flex-col md:flex-row min-h-[360px]"
      >
        {/* Abstract luxury background glow */}
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
        
        {/* Left Side: Image */}
        <div className="w-full md:w-[45%] relative border-b md:border-b-0 md:border-r border-white/10 shrink-0">
          <img 
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop" 
            alt="Dubai Office Skyline" 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#020810] via-[#020810]/60 to-transparent" />
          
          <div className="absolute top-6 left-6 flex items-center justify-center w-12 h-12 rounded-full bg-black/40 backdrop-blur-xl border border-gold/30 shadow-[0_0_20px_rgba(244,194,31,0.2)]">
            <MapPin className="w-5 h-5 text-gold" />
          </div>
          
          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 pr-6">
            <span className="inline-block px-3 py-1 mb-3 rounded-full bg-gold/10 border border-gold/30 backdrop-blur-md text-gold text-xs font-heading uppercase tracking-widest">
              International HQ
            </span>
            <h3 className="text-3xl md:text-4xl font-serif text-white leading-tight">Business Bay,<br/>Dubai.</h3>
          </div>
        </div>
        
        {/* Right Side: Details & Actions */}
        <div className="w-full md:w-[55%] p-6 md:p-10 flex flex-col justify-center relative z-10 glass bg-[#05101a]/40">
          <div className="mb-6">
            <p className="text-white/60 font-medium text-sm lg:text-base uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-gold/50" /> Premium Corporate Office
            </p>
            <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed mb-1">Floor 22, Court Tower</p>
            <p className="text-white/70 text-base md:text-lg font-light leading-relaxed mb-1">Marasi Drive, Business Bay</p>
            <p className="text-white/70 text-base md:text-lg font-light leading-relaxed">Dubai, United Arab Emirates</p>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 mt-auto">
            <a 
              href="https://maps.google.com/?q=Court+Tower,+Business+Bay,+Dubai,+UAE" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gold text-[#020810] font-medium hover:bg-white transition-colors flex-1 min-w-[140px] justify-center text-sm shadow-[0_0_20px_rgba(244,194,31,0.3)]"
            >
              <Navigation className="w-4 h-4" fill="currentColor" /> Directions
            </a>
            
            <button 
              onClick={handleCopy}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-colors flex-1 min-w-[140px] justify-center text-sm"
            >
              {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              {copied ? "Copied" : "Copy Address"}
            </button>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a 
              href="tel:+97100000000"  // User hasn't provided a Dubai phone number, assuming main line or leaving placeholder #
              target="_top"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-gold/30 hover:text-gold text-white/80 transition-colors flex-1 min-w-[140px] justify-center text-sm"
              onClick={(e) => { e.preventDefault(); window.open('https://wa.me/916280131414', '_blank'); }} // Linking to WA as no specific Dubai # provided
            >
              <Phone className="w-4 h-4 text-gold" /> Call Office
            </a>
            
            <a 
              href="https://wa.me/916280131414?text=Hello%20Gautam%20Thakur%2C%20I%20would%20like%20to%20book%20a%20consultation%20at%20the%20Dubai%20office." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-gold/30 hover:text-gold text-white/80 transition-colors flex-1 min-w-[140px] justify-center text-sm group/btn"
            >
              <Calendar className="w-4 h-4 text-gold group-hover/btn:scale-110 transition-transform" /> Consultation
            </a>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
