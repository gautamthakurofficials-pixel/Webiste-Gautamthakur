import { motion } from "motion/react";
import { Section, SectionHeader } from "../ui/Section";
import { Instagram, Linkedin, Youtube, Facebook, Music, MessageCircle, Globe, Podcast, ArrowUpRight, PlayCircle } from "lucide-react";
import { Button } from "../ui/Button";

const SOCIAL_LINKS = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/officialgautamthakur_", color: "hover:text-[#E1306C]" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/gautam-thakur-283692347", color: "hover:text-[#0077B5]" },
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@GautamThakurofficials", color: "hover:text-[#FF0000]" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/share/1AsqPaLCE6/", color: "hover:text-[#1877F2]" },
  { icon: Music, label: "Spotify", href: "https://open.spotify.com/show/16jcvXPGY17mE0YdBJIjAA", color: "hover:text-[#1DB954]" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/916280131414?text=Hello%20Gautam%20Thakur%2C%20I%20would%20like%20to%20know%20more%20about%20your%20real%20estate%20services%20and%20investment%20opportunities.", color: "hover:text-[#25D366]" },
  { icon: Globe, label: "Website", href: "#", color: "hover:text-gold" },
  { icon: Podcast, label: "Amazon Music", href: "https://music.amazon.com/podcasts/132dbbe8-9049-4dcc-8d99-7970b0f7a5d3/gautam-thakur", color: "hover:text-[#9146FF]" },
];

const IG_POSTS = [
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=600&auto=format&fit=crop",
];

export default function Connect() {
  return (
    <Section id="connect" className="relative overflow-hidden bg-[#020810] border-t border-white/5 pb-20">
      {/* Background aesthetics */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05101a] to-[#020810]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <SectionHeader 
        title="Digital Presence" 
        subtitle="Connect with Gautam Thakur across all platforms for exclusive insights and updates." 
        centered
      />

      <div className="relative z-10 max-w-7xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 xl:px-0">
        
        {/* Instagram Preview Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="col-span-1 lg:col-span-2 rounded-[2rem] bg-[#05101a] border border-white/5 hover:border-[#E1306C]/30 transition-colors duration-500 overflow-hidden relative group cursor-pointer"
          onClick={() => window.open('https://www.instagram.com/officialgautamthakur_', '_blank')}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#E1306C]/5 to-transparent pointer-events-none" />
          <div className="p-8 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#FD1D1D] to-[#833AB4] p-[2px]">
                  <div className="w-full h-full bg-[#05101a] rounded-full flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-white group-hover:text-[#E1306C] transition-colors">@officialgautamthakur_</h3>
                  <p className="text-white/60 text-sm font-light">Follow on Instagram</p>
                </div>
              </div>
              <ArrowUpRight className="w-6 h-6 text-white/30 group-hover:text-[#E1306C] transition-colors" />
            </div>

            {/* Mock Feed */}
            <div className="grid grid-cols-3 gap-3">
              {IG_POSTS.map((img, i) => (
                <div key={i} className="aspect-square rounded-xl overflow-hidden relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img src={img} alt="Instagram post preview" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* LinkedIn Professional Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="col-span-1 border border-white/5 rounded-[2rem] bg-[#05101a] hover:border-[#0077B5]/30 transition-colors duration-500 overflow-hidden relative group cursor-pointer"
          onClick={() => window.open('https://www.linkedin.com/in/gautam-thakur-283692347', '_blank')}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#0077B5]/5 to-transparent pointer-events-none" />
          <div className="p-8 h-full flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0077B5]/10 flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-[#0077B5]" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-[#0077B5] transition-colors" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-[#0077B5] transition-colors">Professional Network</h3>
              <p className="text-white/60 font-light leading-relaxed text-sm mb-6">
                Connect with me on LinkedIn for B2B insights, professional market networking, and commercial real estate updates.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-white/10 overflow-hidden shrink-0">
                <img src="/qr-code.jpg" className="w-full h-full object-cover blur-sm opacity-50" alt="profile" />
              </div>
              <div className="flex-1">
                <div className="h-2 w-24 bg-white/10 rounded-full mb-2"></div>
                <div className="h-2 w-16 bg-white/10 rounded-full"></div>
              </div>
              <div className="px-4 py-1.5 rounded-full bg-[#0077B5] text-white text-xs font-medium">Connect</div>
            </div>
          </div>
        </motion.div>

        {/* Amazon Podcast Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="col-span-1 lg:col-span-2 border border-white/5 rounded-[2rem] bg-[#05101a] hover:border-[#1ce7e9]/30 transition-colors duration-500 overflow-hidden relative group cursor-pointer"
          onClick={() => window.open('https://music.amazon.com/podcasts/132dbbe8-9049-4dcc-8d99-7970b0f7a5d3/gautam-thakur', '_blank')}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1ce7e9]/5 to-transparent pointer-events-none" />
          <div className="p-8 h-full flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6 w-full md:w-auto">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1ce7e9] to-[#04a0e2] flex items-center justify-center shrink-0">
                <Podcast className="w-8 h-8 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-serif text-white group-hover:text-[#1ce7e9] transition-colors mb-1">Gautam Thakur Podcast</h3>
                <p className="text-white/60 text-sm font-light">Now available on Amazon Music</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
              <div className="flex items-center gap-1 hidden sm:flex">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-1 bg-[#1ce7e9]/50 rounded-full animate-pulse" style={{ height: `${Math.max(8, Math.random() * 24)}px`, animationDelay: `${i * 0.1}s` }}></div>
                ))}
              </div>
              <Button className="bg-[#1ce7e9] hover:bg-[#04a0e2] text-black border-none shrink-0" size="md">
                <PlayCircle className="w-5 h-5 mr-2" /> Listen Now
              </Button>
            </div>
          </div>
        </motion.div>

        {/* QR Code Container */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.3 }}
           className="col-span-1 rounded-[2rem] border border-gold/30 bg-gold/5 backdrop-blur-xl shadow-[0_20px_50px_rgba(244,194,31,0.05)] p-8 flex flex-col items-center justify-center text-center group"
        >
          <div className="relative w-36 h-36 bg-white rounded-2xl p-2 shadow-inner transform group-hover:scale-105 transition duration-500 mb-6">
            <img 
              src="/qr-code.jpg" 
              alt="Gautam Thakur QR Code" 
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
          <h4 className="text-gold font-serif text-xl mb-2">Scan & Connect</h4>
          <p className="text-white/60 font-light text-sm max-w-[200px]">Save contact details & view all active platforms.</p>
        </motion.div>
      </div>

      {/* Social Icons Row */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex flex-wrap justify-center gap-4 mt-16 max-w-3xl mx-auto px-4"
      >
        {SOCIAL_LINKS.map((link, idx) => {
          const Icon = link.icon;
          return (
            <a 
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 transition-all duration-300 hover:bg-white/10 hover:scale-110 hover:border-gold/30 hover:shadow-lg ${link.color}`}
              aria-label={link.label}
            >
              <Icon className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          );
        })}
      </motion.div>
    </Section>
  );
}
