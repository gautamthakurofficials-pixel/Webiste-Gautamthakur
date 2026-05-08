import { motion } from "motion/react";
import { X, MapPin, CheckCircle2, Download, Phone, Calendar, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

interface GreenzModalProps {
  onClose: () => void;
}

export default function GreenzModal({ onClose }: GreenzModalProps) {
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
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop" 
              alt="Greenz by Danube" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020810] via-[#020810]/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#020810]/80 to-transparent" />
            
            <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-4xl">
              <span className="inline-block px-4 py-1 mb-6 rounded-full bg-gold/20 border border-gold/40 text-gold text-xs font-heading uppercase tracking-widest backdrop-blur-md">
                Dubai Residential Luxury
              </span>
              <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 leading-tight">Greenz by Danube</h1>
              <div className="flex flex-wrap items-center gap-4 text-gray/80 text-sm md:text-base font-light">
                <span className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-gold" /> Dubai South / Near Silicon Oasis</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold hidden md:block" />
                <span className="flex items-center"><Calendar className="w-4 h-4 mr-2 text-gold" /> Handover Q4 2029</span>
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
                    Greenz by Danube is a premium master-planned villa and townhouse community designed intricately around wellness, greenery, and luxury living. Setting a new paradigm in Dubai's real estate, it integrates nature with high-end modern comforts.
                  </p>
                  <p className="text-lg text-white/80 font-light leading-relaxed">
                    Ideal for investors, families, and long-term value buyers looking for a resort-style lifestyle backed by robust connectivity to major Dubai landmarks. Fully furnished with premium Italian Dolce Vita designs.
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
                      { dest: "Emirates Road", time: "1 Min" },
                      { dest: "Silicon Central Mall", time: "10 Mins" },
                      { dest: "Global Village", time: "15 Mins" },
                      { dest: "DXB Airport", time: "17 Mins" },
                      { dest: "Downtown Dubai / Burj Khalifa", time: "18 Mins" },
                      { dest: "Upcoming Blue Line Metro", time: "Connected" }
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
                    <h2 className="text-2xl font-serif text-white uppercase tracking-widest text-sm">Lifestyle & Amenities</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl bg-[#05101a] border border-white/10">
                      <h3 className="text-xl font-serif text-white mb-4 text-gold">The Greenz Sanctuary</h3>
                      <p className="text-white/70 font-light text-sm">Your private green haven of calm and fresh air with beautiful landscaping.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#05101a] border border-white/10">
                      <h3 className="text-xl font-serif text-white mb-4 text-gold">The Beach Hub</h3>
                      <p className="text-white/70 font-light text-sm">A curated beachside experience within the community to unwind and enjoy.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#05101a] border border-white/10">
                      <h3 className="text-xl font-serif text-white mb-4 text-gold">The Wellness Hub</h3>
                      <p className="text-white/70 font-light text-sm">20,000 sq.ft. of indoor/outdoor gym, double-height panoramic gym, and spa rooms.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#05101a] border border-white/10">
                      <h3 className="text-xl font-serif text-white mb-4 text-gold">The Sports Hub</h3>
                      <p className="text-white/70 font-light text-sm">10 dedicated courts for the ultimate sporting experience, plus a seamless 3.75km jogging loop.</p>
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
                    <img src="https://images.unsplash.com/photo-1620891557008-0112dd1da259?q=80&w=2070&auto=format&fit=crop" className="rounded-2xl h-48 w-full object-cover border border-white/10" alt="Villa Exterior" />
                    <img src="https://images.unsplash.com/photo-1596238804369-02c3104e76a6?q=80&w=2070&auto=format&fit=crop" className="rounded-2xl h-48 w-full object-cover border border-white/10" alt="Pool Area" />
                    <img src="https://images.unsplash.com/photo-1613490908592-5ebce0402a5e?q=80&w=2070&auto=format&fit=crop" className="col-span-2 rounded-2xl h-64 w-full object-cover border border-white/10" alt="Interior Details" />
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
                        <span className="text-white/70 font-light text-sm">3 BHK Townhouse</span>
                        <span className="text-white font-medium">From AED 3.5M</span>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-b border-white/10">
                        <span className="text-white/70 font-light text-sm">4 BHK Townhouse</span>
                        <span className="text-white font-medium">From AED 4.2M</span>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-b border-white/10">
                        <span className="text-white/70 font-light text-sm">5 BHK Semi-Detached</span>
                        <span className="text-white font-medium">From AED 5M</span>
                      </div>
                      <div className="flex justify-between items-center pb-2">
                        <span className="text-white/70 font-light text-sm">5 BHK Twin Villa</span>
                        <span className="text-white font-medium">From AED 6.5M</span>
                      </div>
                    </div>
                    
                    <div className="p-4 rounded-xl bg-gold/10 border border-gold/20 mb-8">
                      <p className="text-gold text-sm font-medium mb-1">Pre-launch EOI Structure</p>
                      <p className="text-white/80 text-xs font-light">Pay 10% & get priority allocation. Guaranteed high ROI.</p>
                    </div>

                    <div className="space-y-3">
                      <Button 
                        className="w-full bg-[#25D366] text-[#020810] hover:bg-[#128C7E] font-medium"
                        onClick={() => window.open(`https://wa.me/916280131414?text=Hello%20Gautam%20Thakur%2C%20I%20am%20interested%20in%20Greenz%20by%20Danube%20in%20Dubai.%20Please%20share%20more%20details.`, "_blank")}
                      >
                         WhatsApp Inquiry
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full text-white border-white/20 hover:bg-white/10 group"
                        onClick={() => window.open(`https://wa.me/916280131414?text=Hello%20Gautam%20Thakur%2C%20please%20send%20me%20the%20Brochure%20for%20Greenz%20by%20Danube.`, "_blank")}
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
