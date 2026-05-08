import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Building2, Landmark, Factory, Diamond, Globe, Briefcase, Mic, PhoneCall, ArrowRight, X, CheckCircle2, ChevronDown, MapPin, TrendingUp, Users, ArrowUpRight } from "lucide-react";
import { Section, SectionHeader } from "../ui/Section";
import { Button } from "../ui/Button";
import { cn } from "../../lib/utils";

const SERVICES = [
  { 
    icon: Building2, 
    title: "Residential Advisory", 
    desc: "Premium homes and luxury apartments in prime global locations.",
    details: {
      explanation: "Our Residential Advisory service is tailored for high-net-worth individuals and families seeking premium living spaces. We provide end-to-end guidance from property identification to final acquisition, ensuring every home meets your exact lifestyle and luxury standards.",
      process: ["Initial lifestyle & requirement consultation", "Curated property shortlisting", "Exclusive site visits & virtual tours", "Negotiation & legal due diligence", "Post-acquisition lifestyle onboarding"],
      benefits: ["Access to off-market luxury properties", "Hassle-free documentation", "Favorable negotiation terms", "Strategic location selection"],
      insights: "The luxury residential market is seeing a 24% year-on-year growth in prime locations, with a strong shift towards branded residences and smart homes.",
      advantages: "Work with dedicated luxury specialists who understand the nuances of premium living and have direct access to top-tier developers globally.",
      faqs: [
        { q: "Do you handle NRI residential purchases?", a: "Yes, we provide specialized end-to-end services for NRIs including legal and financial structuring." },
        { q: "What types of properties do you cover?", a: "We focus exclusively on upper-premium segments: luxury villas, penthouses, and branded residences." }
      ],
      related: ["Dubai Luxury Villas", "Gurgaon Penthouses", "Goa Premium Second Homes"]
    }
  },
  { 
    icon: Landmark, 
    title: "Commercial Advisory", 
    desc: "Strategic spaces for business expansion and high-yield returns.",
    details: {
      explanation: "We empower businesses and investors with strategic commercial real estate acquisitions. Whether you are looking for Grade A office spaces, retail hubs, or corporate headquarters, our data-driven approach ensures maximum visibility and ROI.",
      process: ["Business objective alignment", "Market availability and footfall analysis", "Yield projection and financial modeling", "Lease/Acquisition negotiation", "Workspace transition support"],
      benefits: ["High-yield retail spaces", "Corporate headquarters structuring", "Pre-leased asset acquisition", "Strategic business locations"],
      insights: "Premium commercial spaces in commercial hubs are generating consistent rental yields of 6-9%, heavily driven by multinational corporate expansions.",
      advantages: "Leverage our extensive corporate network and deep market analytics to secure commercial spaces before they hit the open market.",
      faqs: [
        { q: "Do you provide ROI projections for commercial spaces?", a: "Yes, we provide comprehensive financial modeling and yield projections for all commercial acquisitions." },
        { q: "Can you help with pre-leased properties?", a: "Absolutely. We have a robust portfolio of pre-leased commercial assets offering immediate returns." }
      ],
      related: ["GIFT City Offices", "Chandigarh IT Park", "Delhi NCR Retail Hubs"]
    }
  },
  { 
    icon: Factory, 
    title: "Industrial Consultancy", 
    desc: "Logistics and industrial assets for forward-thinking investors.",
    details: {
      explanation: "A specialized advisory wing focusing on warehousing, logistics parks, and industrial land. We help supply-chain heavy businesses and industrial investors find the right geographical nodes to optimize operations and secure long-term capital appreciation.",
      process: ["Supply chain geographical analysis", "Industrial zoning & compliance check", "Land acquisition & clearance", "Build-to-suit capability mapping", "Logistics optimization strategy"],
      benefits: ["Optimized supply chain locations", "High appreciation industrial land", "Compliance and zoning security", "Access to emerging logistics corridors"],
      insights: "With the e-commerce boom, Grade A warehousing and industrial parks are seeing unprecedented demand, outpacing traditional real estate sectors in capital appreciation.",
      advantages: "Our team navigates complex industrial regulations, zoning laws, and environmental clearances, ensuring secure and scalable industrial investments.",
      faqs: [
        { q: "Do you handle land conversion for industrial use?", a: "We provide comprehensive advisory and connect you with leading legal experts for seamless zoning and land conversion processes." },
        { q: "What is the minimum scale you consult for?", a: "We specialize in mid-to-large scale industrial acquisitions, typically starting from 1 acre upwards depending on the region." }
      ],
      related: ["Gujarat Industrial Corridors", "Punjab Manufacturing Hubs", "Delhi NCR Logistics Parks"]
    }
  },
  { 
    icon: Diamond, 
    title: "Luxury Investment Planning", 
    desc: "Curated portfolio of trophy assets and bespoke properties.",
    details: {
      explanation: "Designed exclusively for UHNIs, this service focuses on the acquisition of trophy assets—properties of immense prestige, rarity, and undeniable value. We curate investment strategies that preserve wealth and establish legacy.",
      process: ["Wealth preservation strategy session", "Global trophy asset scanning", "Discreet off-market negotiations", "Tax and legal structuring advisory", "Post-acquisition asset management"],
      benefits: ["Generational wealth protection", "Exclusive legacy assets", "Discreet and confidential transactions", "Global market diversification"],
      insights: "Trophy assets remain highly resilient against market volatility, often appreciating regardless of broader economic downturns due to their inherent scarcity.",
      advantages: "Absolute discretion, access to highly restricted off-market properties, and a deep understanding of international luxury standards.",
      faqs: [
        { q: "How confidential is the process?", a: "We operate with strict NDAs and ensure complete anonymity during the exploration and negotiation phases if required." },
        { q: "Do you offer international luxury assets?", a: "Yes, our network spans key global luxury centers including Dubai, London, and prime Indian locations." }
      ],
      related: ["Dubai Palm Jebel Ali", "Goa Ultra-Luxury Villas", "South Delhi Estates"]
    }
  },
  { 
    icon: Globe, 
    title: "NRI Investment Support", 
    desc: "End-to-end management for international investors in Indian markets.",
    details: {
      explanation: "Navigating the Indian real estate market from abroad can be complex. Our dedicated NRI support desk provides a trusted, transparent, and legally sound pathway for non-resident investments in high-growth Indian sectors.",
      process: ["Virtual portfolio consultation", "FEMA & RBI compliance structuring", "Remote property tours & drone footage", "Power of Attorney & legal management", "Property handover & rental management"],
      benefits: ["Zero-travel investment capability", "100% legal & regulatory compliance", "Transparent fund repatriation guidance", "Dedicated relationship manager"],
      insights: "NRI investments in luxury real estate have surged by 35%, driven by the weakening rupee and high capital appreciation in tier-1 and tier-2 Indian cities.",
      advantages: "Act locally from anywhere globally. We become your eyes, ears, and legal guardians on the ground, ensuring complete peace of mind.",
      faqs: [
        { q: "Do I need to travel to India to register the property?", a: "No, most transactions can be securely finalized remotely via PoA and high-security digital documentation." },
        { q: "Can you manage the property after purchase?", a: "Yes, we offer complete property management including tenant sourcing and maintenance." }
      ],
      related: ["Chandigarh Premium Plots", "Mohali Luxury Apartments", "Gurgaon Commercial"]
    }
  },
  { 
    icon: Briefcase, 
    title: "Property Portfolio Management", 
    desc: "Comprehensive strategy for asset appreciation and yield optimization.",
    details: {
      explanation: "For clients with multiple real estate holdings, we provide strategic portfolio management. We analyze your current assets, identify underperforming properties, and restructure your portfolio for maximum yield, liquidity, and growth.",
      process: ["Comprehensive asset audit", "Yield vs. Appreciation analysis", "Divestment & reinvestment strategy", "Tax optimization planning", "Quarterly portfolio performance reporting"],
      benefits: ["Maximized total portfolio ROI", "Strategic risk diversification", "Identification of dead assets", "Consolidated performance tracking"],
      insights: "Active portfolio management can increase overall real estate yield by 2-4% annually simply by reallocating capital from stagnant mature markets to emerging high-growth corridors.",
      advantages: "Move from a passive property collector to an active real estate investor with data-backed strategies to compound your wealth.",
      faqs: [
        { q: "How often do you review the portfolio?", a: "We provide comprehensive quarterly reviews and immediate alerts for significant market shifts." },
        { q: "Can you help liquidate underperforming assets?", a: "Yes, strategic divestment is a core part of optimizing your portfolio." }
      ],
      related: ["Dubai Investment Zones", "Emerging Tier-2 Indian Markets"]
    }
  },
  { 
    icon: Mic, 
    title: "Podcast & Media", 
    desc: "Deep market insights and interviews with industry leaders.",
    details: {
      explanation: "The Gautam Thakur Podcast is a premier destination for real estate intelligence. We host industry leaders, analyze market trends, and break down complex investment strategies into actionable insights for our audience.",
      process: ["Weekly market recap episodes", "In-depth developer interviews", "Macro-economic real estate analysis", "Listener Q&A and consultation highlights"],
      benefits: ["Stay ahead of market trends", "Learn directly from industry giants", "Understand complex investment metrics", "Discover new geographical hotspots"],
      insights: "Media-educated investors make 40% faster and more accurate investment decisions compared to traditional buyers relying solely on broker advice.",
      advantages: "Gain institutional-grade knowledge completely free. Our media arm empowers you with the knowledge to make informed, confident decisions.",
      faqs: [
        { q: "Where can I listen to the podcast?", a: "Episodes are available on Spotify, Apple Podcasts, YouTube, and directly on our website." },
        { q: "Can I request a topic for the podcast?", a: "Absolutely. We highly value audience input and frequently cover topics requested by our investor community." }
      ],
      related: ["Market Research Reports", "Video Masterclasses"]
    }
  },
  { 
    icon: PhoneCall, 
    title: "Real Estate Consultation", 
    desc: "1-on-1 strategic advisory sessions tailored to your goals.",
    details: {
      explanation: "Book a personalized consultation session to discuss your specific real estate goals, challenges, and investment appetite. This is a direct, tailored advisory session focused solely on your individual narrative.",
      process: ["Pre-consultation profiling questionnaire", "1-on-1 deep dive strategy call", "Risk appetite and goal alignment", "Actionable step-by-step roadmap delivery", "Follow-up execution planning"],
      benefits: ["Clarity on investment direction", "Unbiased, strategy-first advice", "Customized financial modeling", "Direct access to Gautam Thakur's expertise"],
      insights: "A single tailored consultation can prevent costly investment mistakes and redirect capital into avenues with significantly higher, secure yields.",
      advantages: "No pushy sales, no generic advice. This is pure strategic consulting designed to map out your most profitable path forward.",
      faqs: [
        { q: "How long is a consultation session?", a: "Initial strategy sessions typically run for 45 to 60 minutes." },
        { q: "Is the consultation fee adjustable against future investments?", a: "Yes, consultation fees are often adjusted if you choose to acquire property through our advisory." }
      ],
      related: ["Portfolio Management", "NRI Investment Support"]
    }
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof SERVICES[0] | null>(null);

  // Close modal on escape key
  if (selectedService) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

  return (
    <Section id="services" className="bg-[#05101a] relative">
      <SectionHeader title="Our Expertise" subtitle="Comprehensive Services" centered />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {SERVICES.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative h-full"
            onClick={() => setSelectedService(service)}
          >
            <div className={cn(
              "h-full p-8 rounded-2xl glass border border-white/5 hover:border-gold/30 hover:bg-white/[0.02] card-glow overflow-hidden relative transition-all duration-500",
              "cursor-pointer flex flex-col"
            )}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-bl-full -mr-16 -mt-16 transition-transform duration-700 ease-out group-hover:scale-[2.5]" />
              
              <service.icon className="w-10 h-10 text-gold mb-6 relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:text-white" />
              
              <h3 className="text-xl font-serif text-white mb-3 relative z-10 transition-colors duration-300 group-hover:text-gold">
                {service.title}
              </h3>
              
              <p className="text-gray/70 font-light text-sm mb-8 relative z-10 transition-colors duration-300 group-hover:text-white/90">
                {service.desc}
              </p>
              
              <div className="flex items-center text-gold text-sm font-heading font-medium tracking-wider uppercase relative z-10 transition-colors duration-300 group-hover:text-white mt-auto pt-4 border-t border-white/10 group-hover:border-gold/30">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-[#020810] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 blur-[120px] rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

              {/* Header */}
              <div className="sticky top-0 z-20 flex items-center justify-between p-6 md:p-8 bg-[#020810]/80 backdrop-blur-md border-b border-white/5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20">
                    <selectedService.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-serif text-white">{selectedService.title}</h2>
                    <p className="text-sm font-heading tracking-widest uppercase text-gold mt-1">Premium Advisory</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/50 hover:text-white transition-colors border border-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 hide-scrollbar relative z-10">
                <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
                  
                  {/* Left Column (Main Content) */}
                  <div className="lg:col-span-2 space-y-10">
                    
                    <section>
                      <h3 className="text-xl font-serif text-white mb-4">Service Overview</h3>
                      <p className="text-gray/80 font-light leading-relaxed text-lg">
                        {selectedService.details.explanation}
                      </p>
                    </section>

                    <section>
                      <h3 className="text-xl font-serif text-white mb-6">Our Consultation Process</h3>
                      <div className="space-y-4">
                        {selectedService.details.process.map((step, idx) => (
                          <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                            <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20 shrink-0 text-gold font-heading font-bold text-xs">
                              {idx + 1}
                            </div>
                            <p className="text-white/90 font-light pt-1">{step}</p>
                          </div>
                        ))}
                      </div>
                    </section>

                    <section>
                      <h3 className="text-xl font-serif text-white mb-6">Frequently Asked Questions</h3>
                      <div className="space-y-4">
                        {selectedService.details.faqs.map((faq, idx) => (
                          <div key={idx} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                            <h4 className="text-white font-medium mb-2 flex items-start gap-2">
                              <ChevronDown className="w-5 h-5 text-gold shrink-0" />
                              {faq.q}
                            </h4>
                            <p className="text-gray/70 font-light text-sm pl-7">{faq.a}</p>
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>

                  {/* Right Column (Sidebar) */}
                  <div className="space-y-8">
                    
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-gold/10 to-transparent border border-gold/20">
                      <TrendingUp className="w-6 h-6 text-gold mb-3" />
                      <h4 className="text-white font-serif text-lg mb-2">Market Insights</h4>
                      <p className="text-sm font-light text-gold/80 italic leading-relaxed">
                        "{selectedService.details.insights}"
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                      <h4 className="text-white font-serif text-lg mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-gold" /> Key Benefits
                      </h4>
                      <ul className="space-y-3">
                        {selectedService.details.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-gray/80 font-light">
                            <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                      <h4 className="text-white font-serif text-lg mb-4 flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-gold" /> Related Hotspots
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.details.related.map((item, idx) => (
                          <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/70">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-blue-900/20 border border-blue-500/20">
                      <Users className="w-6 h-6 text-blue-400 mb-3" />
                      <h4 className="text-white font-serif text-lg mb-2">Client Advantage</h4>
                      <p className="text-sm font-light text-blue-200/70 mb-6">
                        {selectedService.details.advantages}
                      </p>
                    </div>

                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="sticky bottom-0 z-20 p-6 md:p-8 bg-[#020810]/80 backdrop-blur-md border-t border-white/5 flex flex-col sm:flex-row items-center justify-end gap-4">
                <a href="https://wa.me/916280131414?text=Hello%20Gautam%20Thakur%2C%20I%20would%20like%20to%20know%20more%20about%20your%20real%20estate%20services%20and%20investment%20opportunities." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full bg-[#25D366]/10 text-[#25D366] border-[#25D366]/30 hover:bg-[#25D366] hover:text-black">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    WhatsApp Consult
                  </Button>
                </a>
                <a href="#contact" onClick={() => setSelectedService(null)} className="w-full sm:w-auto">
                  <Button className="w-full bg-gold text-[#05101a] hover:bg-white group">
                    Book Session
                    <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
}

