import { motion } from "motion/react";
import { X, MapPin, CheckCircle2, Download, Phone, Calendar, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

interface TimezModalProps {
  onClose: () => void;
}

export default function TimezModal({ onClose }: TimezModalProps) {
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
            {/* Using a premium high-rise for the cover, similar to the brochure */}
            <img 
              src="https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=2070&auto=format&fit=crop" 
              alt="Timez by Danube" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020810] via-[#020810]/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#020810]/80 to-transparent" />
            
            <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-4xl">
              <span className="inline-block px-4 py-1 mb-6 rounded-full bg-gold/20 border border-gold/40 text-gold text-xs font-heading uppercase tracking-widest backdrop-blur-md">
                Dubai Residential Luxury
              </span>
              <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 leading-tight">Timez by Danube</h1>
              <div className="flex flex-wrap items-center gap-4 text-gray/80 text-sm md:text-base font-light">
                <span className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-gold" /> Dubai Silicon Oasis</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold hidden md:block" />
                <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-gold" />1% Payment Plan</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold hidden md:block" />
                <span className="text-gold">Fully Furnished</span>
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
                    Timez by Danube is a premium high-rise residential development offering modern fully furnished luxury apartments with smart convertible layouts. Designed with upscale interiors and over 40 resort-style amenities, it embodies effortless connectivity and timeless luxury.
                  </p>
                  <p className="text-lg text-white/80 font-light leading-relaxed">
                    Ideal for investors, professionals, and rental income seekers, the project provides unique convertible apartments (Studio to 1BHK, 1BHK to 2BHK) and private pools right in your apartment, delivering strong ROI potential in Dubai Silicon Oasis.
                  </p>
                </section>

                {/* Connectivity */}
                <section>
                  <div className="flex items-center gap-3 mb-8">
                    <span className="w-6 h-[1px] bg-gold" />
                    <h2 className="text-2xl font-serif text-white uppercase tracking-widest text-sm">Dubai Connectivity</h2>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { dest: "Central Park / DSO Mall", time: "2 Mins" },
                      { dest: "Proposed Metro Station", time: "3 Mins" },
                      { dest: "Global Village", time: "8 Mins" },
                      { dest: "Dubai Mall / Burj Khalifa", time: "12 Mins" },
                      { dest: "Dubai International Airport", time: "15 Mins" },
                      { dest: "Al Maktoum Int'l Airport", time: "20 Mins" }
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
                    <h2 className="text-2xl font-serif text-white uppercase tracking-widest text-sm">Lifestyle & Amenities (40+)</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl bg-[#05101a] border border-white/10">
                      <h3 className="text-xl font-serif text-white mb-4 text-gold">Aquatic Luxury</h3>
                      <p className="text-white/70 font-light text-sm">Infinity Anticurrent Pool, Jacuzzi, Aquatic Gym, Splash Pad, and Private apartment pools.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#05101a] border border-white/10">
                      <h3 className="text-xl font-serif text-white mb-4 text-gold">Wellness & Leisure</h3>
                      <p className="text-white/70 font-light text-sm">Indoor & Outdoor Gyms, Spa & Therapy, Yoga Deck, Open Air Cinema, and Cabana Seating.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#05101a] border border-white/10">
                      <h3 className="text-xl font-serif text-white mb-4 text-gold">Family & Kids</h3>
                      <p className="text-white/70 font-light text-sm">Kid's Oasiz, Daycare, Kid's Play Area, Trampoline, Open Air BBQ, and Family Seating.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#05101a] border border-white/10">
                      <h3 className="text-xl font-serif text-white mb-4 text-gold">Active Lifestyle</h3>
                      <p className="text-white/70 font-light text-sm">Paddle Court, Cricket Pitch, Basket Ball, Mini Golf, Joggers Arena, and Snooker.</p>
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
                    {/* Private pool balcony */}
                    <img src="https://images.unsplash.com/photo-1596238804369-02c3104e76a6?q=80&w=2070&auto=format&fit=crop" className="rounded-2xl h-48 w-full object-cover border border-white/10" alt="Private Pool Apartment" />
                    {/* Sophisticated lobby/business centre */}
                    <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" className="rounded-2xl h-48 w-full object-cover border border-white/10" alt="Convertible Interior" />
                    {/* Grand amenity area */}
                    <img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop" className="col-span-2 rounded-2xl h-64 w-full object-cover border border-white/10" alt="Resort Style Amenities" />
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
                        <span className="text-white/70 font-light text-sm">2 BHK Type A</span>
                        <span className="text-white font-medium">AED 1.54M</span>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-b border-white/10">
                        <span className="text-white/70 font-light text-sm">2 BHK + Pool</span>
                        <span className="text-white font-medium">AED 1.62M+</span>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-b border-white/10">
                        <span className="text-white/70 font-light text-sm">3 BHK + Pool</span>
                        <span className="text-white font-medium">AED 2.30M+</span>
                      </div>
                      <div className="flex justify-between items-center pb-2">
                        <span className="text-white/70 font-light text-sm">GF Retail</span>
                        <span className="text-white font-medium">AED 3.8M+</span>
                      </div>
                    </div>
                    
                    <div className="p-4 rounded-xl bg-gold/10 border border-gold/20 mb-8">
                      <p className="text-gold text-sm font-medium mb-1">Easy Payment Plan</p>
                      <p className="text-white/80 text-xs font-light">1% Per Month for 71 Months. 0% Interest. Earn high ROI from rental income.</p>
                    </div>

                    <div className="space-y-3">
                      <Button 
                        className="w-full bg-[#25D366] text-[#020810] hover:bg-[#128C7E] font-medium"
                        onClick={() => window.open(`https://wa.me/916280131414?text=Hello%20Gautam%20Thakur%2C%20I%20am%20interested%20in%20Timez%20by%20Danube.%20Please%20share%20more%20details.`, "_blank")}
                      >
                         WhatsApp Inquiry
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full text-white border-white/20 hover:bg-white/10 group"
                        onClick={() => window.open(`https://wa.me/916280131414?text=Hello%20Gautam%20Thakur%2C%20please%20send%20me%20the%20Brochure%20for%20Timez%20by%20Danube.`, "_blank")}
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
                      Schedule a private consultation with Gautam Thakur to discuss this high ROI investment opportunity.
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full border-gold/30 text-gold hover:bg-gold hover:text-[#05101a] text-sm"
                      onClick={() => window.open(`https://wa.me/916280131414?text=Hello%20Gautam%20Thakur%2C%20I%20would%20like%20to%20book%20a%20consultation%20regarding%20Dubai%20investments.`, "_blank")}
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
