import { motion } from "motion/react";
import { X, MapPin, CheckCircle2, Download, Phone, Calendar, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

interface EpicentreModalProps {
  onClose: () => void;
}

export default function EpicentreModal({ onClose }: EpicentreModalProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 lg:p-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/95 backdrop-blur-xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        className="relative w-full h-full md:max-h-[90vh] md:rounded-3xl bg-[#020810] border border-gold/20 overflow-hidden shadow-2xl flex flex-col z-10"
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-black/50 backdrop-blur-xl flex items-center justify-center text-white/70 hover:text-white border border-white/10 hover:border-gold/50 transition-all group"
        >
          <X className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>

        <div className="flex-1 overflow-y-auto w-full">
          {/* Hero Section */}
          <div className="relative h-[60vh] min-h-[400px] w-full shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
              alt="Epicentre of MG Road" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020810] via-[#020810]/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#020810]/80 to-transparent" />
            
            <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-4xl">
              <span className="inline-block px-4 py-1 mb-6 rounded-full bg-gold/20 border border-gold/40 text-gold text-xs font-heading uppercase tracking-widest backdrop-blur-md">
                Gurugram Commercial Luxury
              </span>
              <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 leading-tight">Epicentre of MG Road</h1>
              <div className="flex flex-wrap items-center gap-4 text-gray/80 text-sm md:text-base font-light">
                <span className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-gold" /> MG Road, Gurugram</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold hidden md:block" />
                <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-gold" /> Guaranteed Assured Rentals</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold hidden md:block" />
                <span className="text-gold">Freehold Property</span>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
              
              <div className="lg:col-span-2 space-y-16">
                {/* Overview */}
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-6 h-[1px] bg-gold" />
                    <h2 className="text-2xl font-serif text-white uppercase tracking-widest text-sm">Project Overview</h2>
                  </div>
                  <p className="text-lg text-white/80 font-light leading-relaxed mb-6">
                    "Small Investment, Big Returns!" The Epicentre of MG Road is a premium boutique commercial destination meticulously crafted for discerning investors seeking timeless value. Offering pre-leased office spaces, high-footfall retail units, and experiential F&B zones.
                  </p>
                  <p className="text-lg text-white/80 font-light leading-relaxed">
                    Designed for tomorrow's leaders, this development boasts guaranteed lease opportunities and an assured 12% rental yield till possession. Located at the epicenter of growth in a densely populated area of over 5 lakh residents.
                  </p>
                </section>

                {/* Connectivity */}
                <section>
                  <div className="flex items-center gap-3 mb-8">
                    <span className="w-6 h-[1px] bg-gold" />
                    <h2 className="text-2xl font-serif text-white uppercase tracking-widest text-sm">Where Location Meets Opportunity</h2>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { dest: "MG Road Metro Station", time: "4 Min" },
                      { dest: "DLF Cyber City", time: "6 Min" },
                      { dest: "The Leela Hotel / Medanta", time: "7 Min" },
                      { dest: "Golf Course Road", time: "10 Min" },
                      { dest: "IGI Airport / Yashobhoomi", time: "20 Min" },
                      { dest: "Dhaula Kuan", time: "30 Min" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center p-4 rounded-xl bg-white/5 border border-white/5">
                        <span className="text-white/80 font-light text-sm">{item.dest}</span>
                        <span className="text-gold font-medium text-sm">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Lifestyle & Amenities */}
                <section>
                  <div className="flex items-center gap-3 mb-8">
                    <span className="w-6 h-[1px] bg-gold" />
                    <h2 className="text-2xl font-serif text-white uppercase tracking-widest text-sm">Curated For Every Business Need</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl bg-[#05101a] border border-white/10">
                      <h3 className="text-xl font-serif text-white mb-4 text-gold">Retail Spaces</h3>
                      <p className="text-white/70 font-light text-sm mb-4">Premium visibility, ground-level footfall. Built to attract, designed to earn.</p>
                      <ul className="text-white/60 text-xs space-y-2">
                        <li>• Prime visibility at key point</li>
                        <li>• Dense office & residential footfall</li>
                        <li>• Distinctive brand signage visibility</li>
                      </ul>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#05101a] border border-white/10">
                      <h3 className="text-xl font-serif text-white mb-4 text-gold">F&B Spaces</h3>
                      <p className="text-white/70 font-light text-sm mb-4">Designed for experiential dining and cafés. The taste of steady returns.</p>
                      <ul className="text-white/60 text-xs space-y-2">
                        <li>• High-footfall commercial hub</li>
                        <li>• Perfect for Cafés, QSRs, Desserts</li>
                        <li>• Main road visibility & exposure</li>
                      </ul>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#05101a] border border-white/10 md:col-span-2">
                      <h3 className="text-xl font-serif text-white mb-4 text-gold">Pre-Leased Office Spaces</h3>
                      <p className="text-white/70 font-light text-sm mb-4">Smart investment. Steady income. Own a pre-leased office that delivers assured rental returns from Day One.</p>
                      <div className="grid grid-cols-2 gap-4 text-white/60 text-xs mt-4">
                        <ul className="space-y-2">
                          <li>• Pre-leased to reputed brands</li>
                          <li>• Low maintenance, high return</li>
                          <li>• Premium flex-format spaces</li>
                        </ul>
                        <ul className="space-y-2">
                          <li>• Lock-in rental income</li>
                          <li>• Located in Gurugram's core</li>
                          <li>• Limited inventory, high demand</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
                
                {/* Investment Highlights */}
                <section>
                  <div className="flex items-center gap-3 mb-8">
                    <span className="w-6 h-[1px] bg-gold" />
                    <h2 className="text-2xl font-serif text-white uppercase tracking-widest text-sm">Why Invest With Us?</h2>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white/80">
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                      <div className="text-xl font-medium text-gold mb-2">12%</div>
                      <div className="text-xs">Assured Rentals Till Possession</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                      <div className="text-xl font-medium text-gold mb-2">60</div>
                      <div className="text-xs">Limited Boutique Units Only</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                      <div className="text-xl font-medium text-gold mb-2">5L+</div>
                      <div className="text-xs">Nearby Resident Catchment</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                      <div className="text-xl font-medium text-gold mb-2">100%</div>
                      <div className="text-xs">Freehold Property Asset</div>
                    </div>
                  </div>
                </section>

                {/* Gallery */}
                <section>
                  <div className="flex items-center gap-3 mb-8">
                    <span className="w-6 h-[1px] bg-gold" />
                    <h2 className="text-2xl font-serif text-white uppercase tracking-widest text-sm">Project Gallery</h2>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <img src="https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=2000&auto=format&fit=crop" className="rounded-2xl h-48 w-full object-cover border border-white/10" alt="Retail Frontage" />
                    <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" className="rounded-2xl h-48 w-full object-cover border border-white/10" alt="Co-Working Spaces" />
                    <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1932&auto=format&fit=crop" className="col-span-2 rounded-2xl h-64 w-full object-cover border border-white/10" alt="F&B Experiential Area" />
                  </div>
                </section>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  
                  {/* Pricing Card */}
                  <div className="p-8 rounded-3xl bg-[#05101a] border border-gold/30 shadow-[0_0_40px_rgba(244,194,31,0.1)] relative overflow-hidden">
                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-gold/10 rounded-full blur-[30px] pointer-events-none" />
                    <h3 className="text-xl font-serif text-white mb-6">Investment Options</h3>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between items-center pb-4 border-b border-white/10">
                        <span className="text-white/70 font-light text-sm">Ground Floor (GF)</span>
                        <span className="text-white font-medium">₹ 1 Cr*</span>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-b border-white/10">
                        <span className="text-white/70 font-light text-sm">First Floor (FF)</span>
                        <span className="text-white font-medium">₹ 70 Lacs*</span>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-b border-white/10">
                        <span className="text-white/70 font-light text-sm">Second Floor (SF)</span>
                        <span className="text-white font-medium">₹ 45 Lacs*</span>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-b border-white/10">
                        <span className="text-white/70 font-light text-sm">Third Floor (TF)</span>
                        <span className="text-white font-medium">₹ 45 Lacs*</span>
                      </div>
                      <div className="flex justify-between items-center pb-2">
                        <span className="text-white/70 font-light text-sm">4th - 6th Floor (Office)</span>
                        <span className="text-white font-medium">₹ 65 Lacs*</span>
                      </div>
                    </div>
                    
                    <div className="p-4 rounded-xl bg-gold/10 border border-gold/20 mb-8">
                      <p className="text-gold text-sm font-medium mb-1">Pre-Lease Advantage</p>
                      <p className="text-white/80 text-xs font-light">Get 12% assured rentals till possession. Ideal for high & stable ROI.</p>
                    </div>

                    <div className="space-y-3">
                      <Button 
                        className="w-full bg-[#25D366] text-[#020810] hover:bg-[#128C7E] font-medium"
                        onClick={() => window.open(`https://wa.me/916280131414?text=Hello%20Gautam%20Thakur%2C%20I%20am%20interested%20in%20Epicentre%20of%20MG%20Road%20Gurugram.%20Please%20share%20more%20details.`, "_blank")}
                      >
                         WhatsApp Inquiry
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full text-white border-white/20 hover:bg-white/10 group"
                        onClick={() => window.open(`https://wa.me/916280131414?text=Hello%20Gautam%20Thakur%2C%20please%20send%20me%20the%20Brochure%20for%20Epicentre%20of%20MG%20Road.`, "_blank")}
                      >
                         <Download className="w-4 h-4 mr-2 text-gold group-hover:-translate-y-0.5 transition-transform" />
                         Download Brochure
                      </Button>
                    </div>
                  </div>

                  {/* Consultation Card */}
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <h4 className="text-white font-medium mb-2 opacity-90">Expert Real Estate Advisory</h4>
                    <p className="text-white/60 text-sm font-light leading-relaxed mb-6">
                      Schedule a private consultation with Gautam Thakur to discuss this investment opportunity.
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full border-gold/30 text-gold hover:bg-gold hover:text-[#05101a] text-sm"
                      onClick={() => window.open(`https://wa.me/916280131414?text=Hello%20Gautam%20Thakur%2C%20I%20would%20like%20to%20book%20a%20consultation%20regarding%20Gurugram%20Commercial%20investments.`, "_blank")}
                    >
                       Book Consultation <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>

                </div>
              </div>
              
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
