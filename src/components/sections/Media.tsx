import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Section, SectionHeader } from "../ui/Section";
import { Search, Calendar, Clock, ArrowRight, X, Play, Headphones, Headset, Bookmark, ExternalLink, Share2, Facebook, Linkedin, Twitter, MessageCircle, MapPin } from "lucide-react";
import { Button } from "../ui/Button";

const SpotifyIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.36-.66.48-1.02.24-2.82-1.74-6.36-2.1-10.56-1.14-.42.12-.84-.12-.96-.54-.12-.42.12-.84.54-.96 4.56-1.08 8.52-.66 11.64 1.32.42.18.48.66.36 1.08zm1.44-3.3c-.3.48-.84.6-1.32.3-3.24-1.98-8.16-2.58-11.94-1.44-.54.18-1.08-.12-1.26-.66-.18-.54.12-1.08.66-1.26 4.32-1.26 9.72-.6 13.56 1.74.48.3.6.84.3 1.32zm.12-3.42C15.48 8.04 8.94 7.8 5.22 8.94c-.66.18-1.38-.18-1.56-.84-.18-.66.18-1.38.84-1.56 4.32-1.32 11.58-1.08 17.04 2.1.66.36.84 1.14.48 1.8-.36.66-1.14.84-1.8.48z" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const AmazonMusicIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.012 0C5.38 0 0 5.382 0 12c0 6.62 5.38 12 12.012 12C18.647 24 24 18.62 24 12c0-6.618-5.353-12-11.988-12zm7.683 17.478c-.292.355-.66.526-1.107.51-1.373-.042-2.735-.145-4.08-.3-1.4-.162-2.784-.403-4.137-.714-1.332-.303-2.613-.715-3.834-1.228-.624-.26-.845-.588-.673-.995.127-.308.388-.415.705-.286 1.488.6 3.02 1.077 4.593 1.417 1.547.336 3.123.57 4.707.697 1.157.094 2.316.142 3.475.122.383-.006.602.164.697.476.046.155.02.308-.06.45-.11.196-.285.342-.486.43zm-7.617-3.916c-.053.483-.497.808-.988.75-.494-.055-.844-.486-.79-1.002.05-.515.535-.885 1.054-.827.49.056.882.527.724 1.08zm2.665.297c-.05.474-.467.842-.962.8-.522-.055-.89-.508-.838-.992.055-.54.542-.906 1.042-.857.48.04.864.512.758 1.05z" />
  </svg>
);

const CATEGORIES = [
  "All",
  "YouTube Videos",
  "Podcasts",
  "Market Insights",
  "Educational Content",
];

type MediaType = 'article' | 'youtube' | 'spotify' | 'amazon';

interface MediaItem {
  id: string;
  title: string;
  category: string;
  readTime?: string;
  duration?: string;
  date: string;
  image: string;
  desc: string;
  content: string;
  featured: boolean;
  type: MediaType;
  externalUrl?: string;
}

const MEDIA_CONTENT: MediaItem[] = [
  {
    id: "yt-1",
    title: "Why HNIs are aggressively investing in Mohali Aerocity",
    category: "YouTube Videos",
    duration: "14:20",
    date: "May 6, 2026",
    type: "youtube",
    externalUrl: "https://www.youtube.com/@GautamThakurofficials",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    desc: "A complete breakdown of the Tricity commercial boom, analyzing Grade-A properties and evaluating the massive infrastructural shifts redefining the region.",
    content: "",
    featured: false,
  },
  {
    id: "sp-1",
    title: "Dubai Real Estate Market Dynamics & Predictions",
    category: "Podcasts",
    duration: "45 Min",
    date: "May 1, 2026",
    type: "spotify",
    externalUrl: "https://open.spotify.com/show/16jcvXPGY17mE0YdBJIjAA",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
    desc: "Join Gautam Thakur as he breaks down the latest shifts in the global real estate market, offering strategic advice for HNIs and institutional investors.",
    content: "",
    featured: false,
  },
  {
    id: "am-1",
    title: "Navigating Commercial Real Estate vs Residential",
    category: "Podcasts",
    duration: "32 Min",
    date: "April 28, 2026",
    type: "amazon",
    externalUrl: "https://music.amazon.com/podcasts/132dbbe8-9049-4dcc-8d99-7970b0f7a5d3/gautam-thakur",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
    desc: "The ultimate showdown: Why commercial real estate is currently outpacing luxury residential margins in key North Indian corridors.",
    content: "",
    featured: false,
  },
  {
    id: "dubai-market",
    title: "Dubai Real Estate Market: Premium Growth Analysis",
    category: "Market Insights",
    readTime: "8 Min Read",
    date: "May 2, 2026",
    type: "article",
    image: "https://images.unsplash.com/photo-1582647509711-c8aa8a8bda71?q=80&w=2070&auto=format&fit=crop",
    desc: "An in-depth look at property valuations, transaction volumes, and key luxury areas demonstrating highest capital appreciation.",
    content: "The Dubai real estate market continues its unprecedented bull run through 2026, solidifying its position as the world's premier luxury investment safe haven. With a massive influx of HNIs and an expanding Golden Visa program, the demand for ultra-luxury villas and branded residences is outpacing supply.\n\n### Price Trends & ROI Analysis\nProperty prices have seen a staggering 18.5% YoY growth, particularly in prime areas like Palm Jebel Ali, Downtown Dubai, and Dubai South. Rental yields consistently hover between 6.5% to 8% in high-demand zones, while capital appreciation in emerging hotspots like Dubai South has exceeded 25% over the past 24 months.\n\n### Infrastructure Catalyst\nThe continuous expansion of Al Maktoum International Airport and the Metro Blue Line are acting as massive catalysts for property revaluations in the city's southern corridors. Pre-launch off-plan properties from tier-1 developers remain the most lucrative entry point, offering flexible payment plans and strong post-handover appreciation.\n\n### Future Predictions & Recommendations\nWe project a sustained, though stabilized, growth phase towards 2030, driven by the D33 Economic Agenda and massive urban masterplan rollouts. Investors should focus on master-planned communities by Emaar and Nakheel, prioritizing water or golf-course facing assets.",
    featured: true,
  },
  {
    id: "yt-2",
    title: "Chandigarh Real Estate: Independent Floors or Villas?",
    category: "YouTube Videos",
    duration: "18:05",
    date: "April 20, 2026",
    type: "youtube",
    externalUrl: "https://www.youtube.com/@GautamThakurofficials",
    image: "/chandigarh-cover.jpg?v=2",
    desc: "A deep dive into the Chandigarh luxury real estate market, comparing independent floors in core sectors vs massive villas in the periphery.",
    content: "",
    featured: false,
  },
  {
    id: "sp-2",
    title: "The Rise of FRACTIONAL OWNERSHIP in Goa",
    category: "Podcasts",
    duration: "40 Min",
    date: "April 15, 2026",
    type: "spotify",
    externalUrl: "https://open.spotify.com/show/16jcvXPGY17mE0YdBJIjAA",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2000&auto=format&fit=crop",
    desc: "Fractional ownership is changing how HNIs buy ₹20Cr+ villas in North Goa. Is it a fad or the future of luxury real estate?",
    content: "",
    featured: false,
  },
  {
    id: "dehradun-luxury",
    title: "The Shift to the Hills: Dehradun Luxury Living",
    category: "Market Insights",
    readTime: "6 Min Read",
    date: "April 10, 2026",
    type: "article",
    image: "/dehradun-cover.jpg?v=2",
    desc: "Analyzing the rising demand for luxury villas and farmhouses in Dehradun among HNIs seeking wellness and nature.",
    content: "The concept of a 'second home' has evolved from a post-retirement dream to a present-day necessity for many affluent families in Delhi NCR and Mumbai.\n\n### Beyond the Retiree Tag\nDehradun is shedding its image as a quiet retiree town. Today, we see a surge in demand for smart, sustainable luxury villas equipped with modern amenities, set against the backdrop of the Garhwal Himalayas.\n\n### The Infrastructure Push\nImproved road connectivity, particularly the Delhi-Dehradun expressway, has drastically reduced travel time. This enhanced accessibility has directly translated into increased real estate valuations in areas like Rajpur Road and Sahastradhara.\n\n### Investment Viability\nOwning a luxury villa in Dehradun isn't just a lifestyle choice; it's a sound investment. The burgeoning wellness tourism sector offers lucrative rental income opportunities when the property is not in use.",
    featured: false,
  },
  {
    id: "ncr-opportunities",
    title: "Delhi NCR Real Estate Trends & Opportunities",
    category: "Market Insights",
    readTime: "8 Min Read",
    date: "April 5, 2026",
    type: "article",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=2070&auto=format&fit=crop",
    desc: "A macro view of the entire National Capital Region, focusing on Noida Sector 150, Aerocity, and core Delhi revitalization.",
    content: "The Delhi NCR market is experiencing a massive structural shift. Core South and Central Delhi are seeing redevelopment of older properties, while the periphery absorbs the heavy demand for modern commercial and luxury residential spaces.\n\n### Noida & Aerocity Growth\nNoida Sector 150 and Aerocity have seen the sharpest price increments. Aerocity's expansion into Phase 2 makes it the prime commercial hotspot, while Noida Sector 150 is the premier destination for sports-themed luxury residential.\n\n### Infrastructure Push\nThe Regional Rapid Transit System (RRTS) and the upcoming Jewar Airport are the primary engines driving future valuations across the NCR. The NCR will become increasingly decentralized, with massive, self-sustained micro-cities developing around major transport nodes.\n\n### Investor Recommendation\nFor long-term capital gains, invest heavily near the upcoming Jewar Airport infrastructure. For immediate yield, target pre-leased assets in Aerocity and South Delhi.",
    featured: false,
  },
  {
    id: "am-2",
    title: "Mastering Commercial Real Estate Yields",
    category: "Podcasts",
    duration: "52 Min",
    date: "March 15, 2026",
    type: "amazon",
    externalUrl: "https://music.amazon.com/podcasts/132dbbe8-9049-4dcc-8d99-7970b0f7a5d3/gautam-thakur",
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=2008&auto=format&fit=crop",
    desc: "Essential strategies to understand before venturing into the high-yield world of commercial real estate. Cap rate, NOI, and more explained.",
    content: "",
    featured: false,
  },
  {
    id: "edu-1",
    title: "How to Invest in Dubai Real Estate",
    category: "Educational Content",
    readTime: "12 Min Read",
    date: "July 12, 2026",
    type: "article",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
    desc: "A complete step-by-step masterclass on buying luxury properties in Dubai. Understand golden visas, RERA regulations, and identifying high-ROI master communities.",
    content: "Dubai's real estate market offers unparalleled opportunities for high net-worth individuals (HNIs). This guide covers everything you need to know, from initial research to final handover.\n\n### Why Dubai?\nWith zero capital gains tax, a rapidly expanding population, and globally competitive rental yields (averaging 6-8%), Dubai remains a top destination for secure wealth parking and growth.\n\n### The Golden Visa Advantage\nInvesting AED 2M or more qualifies you for a 10-year Golden Visa. This provides long-term stability and benefits for you and your immediate family.\n\n### Buying Process (Off-Plan vs Secondary)\nOff-plan investments offer staggered payment plans and high capital appreciation upon handover, whereas secondary market properties provide immediate rental income. Navigating escrow accounts, DLD fees (4%), and RERA compliance is critical.\n\n### Top Areas for Investment\nDetermine if your focus is capital appreciation (emerging communities like Dubai South) or stable rental yield (Downtown Dubai, Marina, Palm Jumeriah).",
    featured: false,
  },
  {
    id: "edu-2",
    title: "ROI & Rental Yield Explained",
    category: "Educational Content",
    readTime: "9 Min Read",
    date: "July 5, 2026",
    type: "article",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop",
    desc: "Understand the math behind profitable real estate. Learn how to calculate net rental yields, cash-on-cash returns, and capitalization rates.",
    content: "Differentiating a good property from a great investment requires a deep understanding of financial metrics. Do not rely on 'gross yield' numbers often touted by brokers.\n\n### Gross Yield vs Net Yield\nGross yield is simply Annual Rent / Property Value. However, Net Yield is what matters. You must subtract service charges, management fees, maintenance provisions, and vacancy periods.\n\n### Cash-on-Cash Return\nIf you are using leverage (mortgage), Cash-on-Cash return measures the cash income earned on the cash invested in the property. It is often a strictly better metric for leveraged buyers than pure cap rate.\n\n### Capitalization Rate (Cap Rate)\nUsed primarily for commercial properties, the Cap Rate assesses a property's yield over one year assuming it is purchased with cash. It helps compare the relative value of different real estate investments.",
    featured: false,
  },
  {
    id: "edu-3",
    title: "NRI Property Investment Guide",
    category: "Educational Content",
    readTime: "15 Min Read",
    date: "June 28, 2026",
    type: "article",
    image: "https://images.unsplash.com/photo-1582647509711-c8aa8a8bda71?q=80&w=2070&auto=format&fit=crop",
    desc: "The ultimate guide for Non-Resident Indians (NRIs) looking to inject capital securely into the high-growth Indian real estate market.",
    content: "The Indian real estate sector is formalizing rapidly, providing a secure environment for NRI investments. However, repatriation, taxation, and power of attorney require careful navigation.\n\n### FEMA Regulations & Repatriation\nNRIs can freely purchase residential or commercial properties in India but cannot buy agricultural land or farmhouses. Funds must be remitted inward through banking channels or NRE/FCNR(B)/NRO accounts. Repatriation of sale proceeds is generally restricted to USD 1 Million per financial year under the Liberalised Remittance Scheme.\n\n### Tax Implications\nRental income is taxable in India. When selling, Long Term Capital Gains (LTCG) tax applies if the property is held for more than 24 months. Utilizing provisions under Section 54/54F can significantly reduce or eliminate capital gains tax.\n\n### Strategic Investment Choices\nWe recommend commercial assets like Shop-Cum-Offices (SCOs) in Tier-2 booming cities like Mohali and IT Parks in Noida, offering significantly higher transparency and ROI compared to scattered residential plots.",
    featured: false,
  },
  {
    id: "edu-4",
    title: "Commercial Real Estate Strategies",
    category: "Educational Content",
    readTime: "11 Min Read",
    date: "June 20, 2026",
    type: "article",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
    desc: "Shift your portfolio from residential stability to commercial high-growth. Learn how to identify Grade-A pre-leased assets.",
    content: "Commercial real estate (CRE) is the ultimate wealth generator for seasoned investors. While residential real estate typically yields 2-4% in India, CRE can command 7-10% rental yields with longer lock-in periods and capital appreciation.\n\n### The Allure of Pre-Leased Properties\nPre-leased assets offer immediate income from day one with established corporate tenants. This removes the risk of vacancy and provides a bankable asset for future financing.\n\n### Types of Commercial Assests\n- **Grade-A Office Spaces**: Driven by IT/ITES sectors and GCCs.\n- **High-Street Retail**: High visibility, high footfall areas. Premium brand tenants.\n- **Shop-Cum-Offices (SCOs)**: Ground plus multiple floors where the owner owns the land as well. Currently the most lucrative asset class in North India (especially Gurgaon and Mohali).\n\n### Key Metrics to Analyze\nEvaluate tenant creditworthiness, lease terms (lock-in period, escalation clauses), and the fundamental supply/demand dynamics of the micro-market.",
    featured: false,
  },
  {
    id: "edu-5",
    title: "Luxury Property Buying Guide",
    category: "Educational Content",
    readTime: "10 Min Read",
    date: "June 10, 2026",
    type: "article",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
    desc: "Navigating the ultra-luxury residential market. What exactly defines a 'luxury' property and how to negotiate premium assets.",
    content: "The term 'luxury' is overused. True luxury in real estate is defined by exclusivity, architectural integrity, and irreplicable locations. Whether you are buying a 20Cr villa in Goa or a penthouse in Dubai, discernment is key.\n\n### Location vs. Specifications\nWhile high-end finishes (Italian marble, home automation) can be replicated, a golf-course view, a private beach, or an iconic skyline view cannot. Always prioritize the unchangeable aspects of a property.\n\n### The Premium Density Factor\nAn ultra-luxury project should have low density (fewer units per acre). A project with 1000 apartments cannot maintain long-term exclusivity, regardless of the price point.\n\n### Due Diligence in Luxury\nVerify the developer's track record for delivering top-tier amenities. Ensure the property has clear titles, especially when dealing with standalone villas or heritage properties.",
    featured: false,
  }
];


export default function Media() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<typeof MEDIA_CONTENT[0] | null>(null);

  // Filter logic
  const filteredMedia = MEDIA_CONTENT.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredContent = MEDIA_CONTENT.find(a => a.featured) || MEDIA_CONTENT[0];
  const gridContent = filteredMedia.filter(a => 
    (activeCategory !== 'All' || a.id !== featuredContent.id) &&
    (activeCategory !== 'Educational Content' || a.id !== "edu-1")
  );

  if (selectedArticle) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

  return (
    <Section id="media" className="relative bg-[#020810] overflow-hidden border-t border-white/5 pb-20">
      {/* Background aesthetic */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 blur-[150px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1DB954]/5 blur-[150px] -translate-x-1/4 pointer-events-none" />

      <SectionHeader 
        title={activeCategory === "Educational Content" ? "Real Estate Educational Insights" : "Media & Insights"} 
        subtitle={activeCategory === "Educational Content" ? "Learn Modern Real Estate Investment, Luxury Property Strategies & Market Intelligence with Gautam Thakur." : "Podcasts, Market Reports, Real Estate Blogs & Investment Analysis by Gautam Thakur."}
        centered
      />

      <div className="max-w-7xl mx-auto mt-12 relative z-10 px-4 xl:px-0">
        
        {/* Search & Filter Bar */}
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-center mb-12">
          {/* Category Scroll */}
          <div className="w-full lg:w-2/3 overflow-x-auto pb-4 customized-scrollbar flex gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-none px-5 py-2.5 rounded-full border text-sm transition-all duration-300 font-medium ${
                  activeCategory === cat 
                    ? "bg-gold text-[#020810] border-gold shadow-[0_0_15px_rgba(244,194,31,0.3)]" 
                    : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="w-full lg:w-1/3 relative">
            <input 
              type="text" 
              placeholder="Search insights..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#05101a] border border-white/10 rounded-full py-3.5 px-6 pl-12 text-white placeholder-white/40 focus:outline-none focus:border-gold/50 transition-colors shadow-inner"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 w-5 h-5" />
          </div>
        </div>

        {/* Dynamic Content based on Category */}
        {(activeCategory === "All" || activeCategory === "Podcasts") && searchQuery === "" && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-[1px] bg-gold" />
              <h3 className="text-2xl font-serif text-white uppercase tracking-widest text-sm">Featured Media</h3>
              <span className="w-8 h-[1px] bg-gold" />
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Podcast Player */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-[2rem] bg-[#05101a] border border-white/5 hover:border-[#1DB954]/30 transition-colors duration-500 shadow-2xl relative overflow-hidden group flex flex-col justify-between cursor-pointer"
                onClick={() => window.open('https://open.spotify.com/show/16jcvXPGY17mE0YdBJIjAA', '_blank')}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1DB954]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="flex flex-col gap-6 relative z-10 w-full mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#1DB954]/10 flex items-center justify-center shrink-0">
                      <SpotifyIcon className="w-6 h-6 text-[#1DB954]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-serif text-white">Spotify Podcast</h4>
                      <p className="text-xs text-[#1DB954]">Listen on Spotify</p>
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif text-white leading-tight group-hover:text-[#1DB954] transition-colors">
                    Dubai Real Estate Market Dynamics & Predictions
                  </h3>
                  <p className="text-gray/80 text-sm font-light leading-relaxed line-clamp-3">
                    Join Gautam Thakur as he breaks down the latest shifts in the global real estate market, offering strategic advice for HNIs and institutional investors.
                  </p>
                </div>
                
                <div className="w-full rounded-xl overflow-hidden shadow-lg border border-white/10 shrink-0 pointer-events-none">
                  <iframe 
                    style={{ borderRadius: "12px" }} 
                    src="https://open.spotify.com/embed/show/16jcvXPGY17mE0YdBJIjAA?utm_source=generator&theme=0" 
                    width="100%" 
                    height="152" 
                    frameBorder="0" 
                    allowFullScreen={false} 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy"
                    title="Spotify Podcast"
                    className="w-full bg-[#1DB954]/5"
                  />
                </div>
              </motion.div>

              {/* YouTube Video Player */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-8 rounded-[2rem] bg-[#05101a] border border-white/5 hover:border-[#FF0000]/30 transition-colors duration-500 shadow-2xl relative overflow-hidden group flex flex-col justify-between"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF0000]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="flex flex-col gap-6 relative z-10 w-full mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#FF0000]/10 flex items-center justify-center shrink-0">
                      <YoutubeIcon className="w-6 h-6 text-[#FF0000]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-serif text-white">YouTube Video</h4>
                      <p className="text-xs text-[#FF0000]">Watch on YouTube</p>
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif text-white leading-tight group-hover:text-[#FF0000] transition-colors">
                    Why HNIs are aggressively investing in Mohali Aerocity
                  </h3>
                  <p className="text-gray/80 text-sm font-light leading-relaxed line-clamp-3">
                    A complete breakdown of the Tricity commercial boom, analyzing Grade-A properties and evaluating the massive infrastructural shifts redefining the region.
                  </p>
                </div>
                
                <div className="w-full rounded-xl overflow-hidden shadow-lg border border-white/10 shrink-0 aspect-[16/10] relative group/btn cursor-pointer mt-auto" onClick={() => window.open('https://www.youtube.com/@GautamThakurofficials', '_blank')}>
                  <div className="absolute inset-0 bg-[#020810]/40 group-hover/btn:bg-transparent transition-colors duration-500 z-10" />
                  <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover group-hover/btn:scale-105 transition-transform duration-700" alt="YouTube Thumbnail" />
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-16 h-16 rounded-full bg-[#FF0000]/80 backdrop-blur-md flex items-center justify-center group-hover/btn:scale-110 transition-transform shadow-[0_0_30px_rgba(255,0,0,0.5)]">
                       <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Amazon Music Podcast */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-8 rounded-[2rem] bg-[#05101a] border border-white/5 hover:border-[#00A8E1]/30 transition-colors duration-500 shadow-2xl relative overflow-hidden group flex flex-col justify-between cursor-pointer"
                onClick={() => window.open('https://music.amazon.com/podcasts/132dbbe8-9049-4dcc-8d99-7970b0f7a5d3/gautam-thakur', '_blank')}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00A8E1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="flex flex-col gap-6 relative z-10 w-full mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#00A8E1]/10 flex items-center justify-center shrink-0">
                      <AmazonMusicIcon className="w-6 h-6 text-[#00A8E1]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-serif text-white">Amazon Podcast</h4>
                      <p className="text-xs text-[#00A8E1]">Listen on Amazon Music</p>
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif text-white leading-tight group-hover:text-[#00A8E1] transition-colors">
                    Mastering Commercial Real Estate Yields
                  </h3>
                  <p className="text-gray/80 text-sm font-light leading-relaxed line-clamp-3">
                    Essential strategies to understand before venturing into the high-yield world of commercial real estate. Cap rate, NOI, and more explained.
                  </p>
                </div>
                
                <div className="w-full rounded-xl overflow-hidden shadow-lg border border-[#00A8E1]/20 shrink-0 mt-auto bg-[#00A8E1]/5 p-6 flex flex-col items-center justify-center relative group-hover:bg-[#00A8E1]/10 transition-colors">
                    <AmazonMusicIcon className="w-12 h-12 text-[#00A8E1] mb-3 opacity-80" />
                    <span className="text-[#00A8E1] font-medium text-sm text-center">Play on Amazon Music</span>
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                       <div className="w-12 h-12 rounded-full bg-[#00A8E1] text-white flex items-center justify-center shadow-[0_0_20px_rgba(0,168,225,0.4)]">
                          <Play className="w-5 h-5 ml-1" fill="currentColor" />
                       </div>
                    </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}

        {/* Featured Article Banner */}
        {activeCategory === "All" && searchQuery === "" && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-[1px] bg-gold" />
              <h3 className="text-2xl font-serif text-white">Latest Insight</h3>
              <span className="w-8 h-[1px] bg-gold" />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative rounded-[2rem] overflow-hidden cursor-pointer border border-white/5 hover:border-gold/30 transition-colors duration-500 shadow-2xl"
              onClick={() => setSelectedArticle(featuredContent)}
            >
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#020810] via-[#020810]/90 to-transparent z-10" />
              <img 
                src={featuredContent.image} 
                alt={featuredContent.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" 
              />
              
              <div className="relative z-20 flex flex-col justify-end p-8 md:p-16 h-full min-h-[400px] md:min-h-[500px] max-w-3xl">
                <div className="flex gap-4 items-center mb-6">
                  <span className="px-3 py-1 border border-gold/30 bg-gold/10 backdrop-blur-md rounded-full text-xs font-semibold text-gold uppercase tracking-wider">
                    Featured Article
                  </span>
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs text-white/80">
                    {featuredContent.category}
                  </span>
                </div>
                <h3 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight group-hover:text-gold transition-colors duration-300">
                  {featuredContent.title}
                </h3>
                <p className="text-gray/80 text-lg mb-8 line-clamp-2 md:line-clamp-3">
                  {featuredContent.desc}
                </p>
                <div className="flex flex-wrap items-center gap-6 text-sm text-white/60 mb-8">
                  <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {featuredContent.date}</div>
                  <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> {featuredContent.readTime}</div>
                </div>
                <div>
                  <Button variant="outline" className="group-hover:bg-gold group-hover:text-[#020810] group-hover:border-gold border-white/20 text-white">
                    Read Full Article <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Special Educational Content Banner */}
        {activeCategory === "Educational Content" && searchQuery === "" && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-[1px] bg-gold" />
              <h3 className="text-2xl font-serif text-white uppercase tracking-widest text-sm">Recommended Masterclass</h3>
              <span className="w-8 h-[1px] bg-gold" />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative rounded-[2rem] overflow-hidden cursor-pointer border border-gold/20 hover:border-gold/50 transition-colors duration-500 shadow-[0_20px_50px_rgba(244,194,31,0.1)] mb-8"
              onClick={() => setSelectedArticle(MEDIA_CONTENT.find(a => a.id === "edu-1") || null)}
            >
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#020810] via-[#020810]/95 to-transparent z-10" />
              <div className="absolute right-0 top-0 w-1/2 h-full bg-gold/5 blur-[80px] z-10 pointer-events-none" />
              
              <img 
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop" 
                alt="Dubai Masterclass" 
                className="absolute right-0 top-0 w-full md:w-2/3 h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out opacity-60" 
              />
              
              <div className="relative z-20 flex flex-col justify-center p-8 md:p-16 h-full min-h-[400px] max-w-3xl">
                <div className="flex gap-4 items-center mb-6">
                  <span className="px-3 py-1 border border-gold/30 bg-gold/10 backdrop-blur-md rounded-full text-xs font-semibold text-gold uppercase tracking-wider">
                    Must Read
                  </span>
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs text-white/80 flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5" /> 12 Min Read
                  </span>
                </div>
                <h3 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight group-hover:text-gold transition-colors duration-300">
                  How to Invest in Dubai Real Estate: The Ultimate Guide
                </h3>
                <p className="text-gray/80 text-lg mb-8 line-clamp-2 md:line-clamp-3 font-light">
                  A complete step-by-step masterclass on buying luxury properties in Dubai. Understand golden visas, RERA regulations, and identifying high-ROI master communities.
                </p>
                <div>
                  <Button variant="outline" className="group-hover:bg-gold group-hover:text-[#020810] group-hover:border-gold border-white/20 text-white shadow-lg">
                    Start Learning <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* AI Callout for Educational Paths */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#05101a] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <div className="flex items-center gap-6">
                 <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center shrink-0 border border-gold/20">
                    <MessageCircle className="w-8 h-8 text-gold" />
                 </div>
                 <div>
                    <h4 className="text-xl font-serif text-white mb-2">Not sure where to start?</h4>
                    <p className="text-gray/80 text-sm font-light">
                      Ask our virtual assistant to curate a personalized investment learning path based on your capital and goals.
                    </p>
                 </div>
              </div>
              <Button 
                variant="outline" 
                className="w-full md:w-auto shrink-0 bg-gold/5 hover:bg-gold/10 text-gold border-gold/30 hover:border-gold"
                onClick={() => {
                  const chatButton = document.querySelector('button[aria-label="Open AI Assistant"]');
                  if (chatButton) {
                    (chatButton as HTMLButtonElement).click();
                    setTimeout(() => {
                      const input = document.querySelector('input[placeholder="Ask about investment strategies, properties..."]');
                      if (input) {
                        const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")?.set;
                        nativeInputValueSetter?.call(input, "Can you suggest a learning path for commercial real estate investment?");
                        const event = new Event('input', { bubbles: true });
                        input.dispatchEvent(event);
                      }
                    }, 100);
                  }
                }}
              >
                Ask The Assistant <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>
        )}

        {/* Media Grid */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <span className="w-8 h-[1px] bg-gold" />
             <h3 className="text-2xl font-serif text-white uppercase tracking-widest text-sm">
                {activeCategory === "All" ? "All Media & Articles" : 
                 activeCategory === "Educational Content" ? "Learning Modules & Investment Guides" : `${activeCategory}`}
             </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gridContent.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-[#05101a] border border-white/5 rounded-[1.5rem] overflow-hidden hover:border-gold/30 hover:shadow-[0_15px_40px_rgba(244,194,31,0.15)] transition-all duration-500 flex flex-col cursor-pointer"
              onClick={() => {
                if (article.type === 'article') {
                  setSelectedArticle(article);
                } else if (article.externalUrl) {
                  window.open(article.externalUrl, '_blank');
                }
              }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <div className="absolute inset-0 bg-[#020810]/40 group-hover:bg-transparent transition-colors duration-700 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05101a] to-transparent z-10 opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" 
                />
                
                {/* Overlay Icons for Media Types */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {article.type === 'youtube' && (
                    <div className="w-16 h-16 rounded-full bg-[#FF0000]/90 backdrop-blur-md shadow-[0_0_30px_rgba(255,0,0,0.5)] flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500 delay-100">
                      <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                    </div>
                  )}
                  {article.type === 'spotify' && (
                    <div className="w-16 h-16 rounded-full bg-[#1DB954]/90 backdrop-blur-md shadow-[0_0_30px_rgba(29,185,84,0.5)] flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500 delay-100">
                      <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                    </div>
                  )}
                  {article.type === 'amazon' && (
                    <div className="w-16 h-16 rounded-full bg-[#00A8E1]/90 backdrop-blur-md shadow-[0_0_30px_rgba(0,168,225,0.5)] flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500 delay-100">
                      <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                    </div>
                  )}
                </div>

                <div className="absolute top-4 left-4 z-20 flex gap-2">
                  <div className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-heading tracking-wider text-gold uppercase border border-gold/20 shadow-lg flex items-center gap-2">
                    {article.type === 'youtube' && <YoutubeIcon className="w-3.5 h-3.5 text-[#FF0000]" />}
                    {article.type === 'spotify' && <SpotifyIcon className="w-3.5 h-3.5 text-[#1DB954]" />}
                    {article.type === 'amazon' && <AmazonMusicIcon className="w-3.5 h-3.5 text-[#00A8E1]" />}
                    {article.type === 'article' && <Bookmark className="w-3.5 h-3.5" />}
                    {article.category}
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow relative z-30">
                <div className="flex items-center gap-4 text-xs text-white/50 mb-4 font-heading tracking-widest uppercase">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-gold" /> {article.date}</span>
                  {article.duration && (
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-gold" /> {article.duration}</span>
                  )}
                  {article.readTime && (
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-gold" /> {article.readTime}</span>
                  )}
                </div>
                <h4 className="text-xl md:text-2xl font-serif text-white mb-4 group-hover:text-gold transition-colors line-clamp-2 leading-tight">
                  {article.title}
                </h4>
                <p className="text-white/60 text-sm line-clamp-3 mb-6 flex-grow font-light leading-relaxed">
                  {article.desc}
                </p>
                <div className="text-gold text-sm font-heading font-medium tracking-wider uppercase flex items-center gap-2 group-hover:translate-x-2 transition-transform w-fit">
                  {article.type === 'youtube' && 'Watch on YouTube'}
                  {article.type === 'spotify' && 'Listen on Spotify'}
                  {article.type === 'amazon' && 'Listen on Amazon Music'}
                  {article.type === 'article' && 'Read Article'}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredMedia.length === 0 && (
          <div className="text-center py-20 text-white/50 bg-[#05101a] rounded-[2rem] border border-white/5 mt-8">
            <Bookmark className="w-10 h-10 mx-auto mb-4 opacity-30" />
            No content found matching your criteria. Try adjusting the search.
          </div>
        )}

      </div>

      {/* Article Read Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex justify-center items-end md:items-center bg-black/80 backdrop-blur-sm p-0 md:p-6"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="bg-[#020810] w-full max-w-5xl max-h-[90vh] md:max-h-[85vh] h-full md:h-auto rounded-t-[2rem] md:rounded-[2rem] overflow-hidden flex flex-col border-t md:border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center p-4 md:p-6 border-b border-white/10 bg-gradient-to-b from-[#05101a] to-transparent shrink-0 absolute top-0 inset-x-0 z-30">
                <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-3 shadow-lg">
                  <span className="text-gold font-heading tracking-widest uppercase text-xs font-semibold">
                    {selectedArticle.category}
                  </span>
                </div>
                <button 
                  onClick={() => setSelectedArticle(null)}
                  className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md hover:bg-black flex items-center justify-center text-white/70 hover:text-white transition-colors border border-white/10 shadow-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content - Scrollable */}
              <div className="flex-1 overflow-y-auto overflow-x-hidden customized-scrollbar relative">
                {/* Hero Image */}
                <div className="relative w-full h-[40vh] md:h-[50vh] min-h-[300px]">
                  <img 
                    src={selectedArticle.image} 
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020810] via-[#020810]/40 to-transparent opacity-90" />
                </div>

                <div className="px-6 md:px-12 -mt-24 relative z-10 max-w-4xl mx-auto pb-20">
                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="bg-gold text-[#020810] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                      Featured Report
                    </span>
                    <span className="text-white/80 text-sm flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                      <Calendar className="w-4 h-4 text-gold" /> {selectedArticle.date}
                    </span>
                    <span className="text-white/80 text-sm flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                      <Clock className="w-4 h-4 text-gold" /> {selectedArticle.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-8 leading-tight text-shadow-xl">
                    {selectedArticle.title}
                  </h2>

                  {/* Divider */}
                  <div className="w-full h-[1px] bg-white/10 mb-10" />

                  {/* Content (Prose) */}
                  <div className="prose prose-invert prose-gold max-w-none prose-p:text-white/80 prose-p:leading-relaxed prose-p:text-lg prose-headings:font-serif prose-headings:text-white prose-a:text-gold hover:prose-a:text-gold/80 prose-strong:text-white prose-headings:border-b prose-headings:border-white/5 prose-headings:pb-2">
                    {selectedArticle.content.split('\n\n').map((paragraph, idx) => {
                      if (paragraph.startsWith('### ')) {
                        return <h3 key={idx} className="text-3xl mt-12 mb-6 text-gold/90 font-medium">{paragraph.replace('### ', '')}</h3>
                      }
                      return <p key={idx} className="mb-6 font-light">{paragraph}</p>
                    })}
                  </div>

                  {/* Market Call To Action */}
                  <div className="mt-16 p-8 md:p-10 rounded-[2rem] bg-gradient-to-br from-[#05101a] to-[#020810] border border-gold/20 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-[80px]" />
                    
                    <h3 className="text-2xl font-serif text-white mb-4">Discuss your investment strategy with Gautam Thakur.</h3>
                    <p className="text-white/60 mb-6 max-w-2xl font-light">
                      Gain exclusive access to off-market properties, high-yield commercial assets, and personalized portfolio consulting.
                    </p>

                    <div className="flex items-start gap-3 mb-8 bg-white/5 border border-white/10 p-4 rounded-xl max-w-2xl backdrop-blur-sm">
                      <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gold text-xs font-heading tracking-widest uppercase mb-1">International Office</p>
                        <p className="text-white/80 text-sm font-light leading-relaxed">
                           Floor 22, Court Tower, Marasi Drive, Business Bay, Dubai, UAE
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="flex items-center gap-2 justify-center bg-[#25D366] text-black hover:bg-[#128C7E] border-none group" onClick={() => window.open('https://wa.me/916280131414?text=Hello%20Gautam%20Thakur%2C%20I%20would%20like%20to%20know%20more%20about%20your%20real%20estate%20services%20and%20investment%20opportunities.', '_blank')}>
                        <MessageCircle className="w-5 h-5 text-black" /> 
                        <span className="font-semibold">WhatsApp Inquiry</span>
                      </Button>
                      <Button variant="outline" onClick={() => {
                        window.open('https://wa.me/916280131414?text=Hello%20Gautam%20Thakur%2C%20I%20would%20like%20to%20know%20more%20about%20your%20real%20estate%20services%20and%20investment%20opportunities.', '_blank');
                      }} className="justify-center border-white/20 text-white hover:bg-white/10">
                        Book Consultation
                      </Button>
                    </div>
                  </div>

                  {/* Share & Actions */}
                  <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
                      <span className="text-white/40 text-sm font-heading tracking-widest uppercase whitespace-nowrap">Share Article:</span>
                      <div className="flex gap-2">
                        <button onClick={() => window.open('https://www.linkedin.com/in/gautam-thakur-283692347', '_blank')} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold/10 hover:border-gold/50 text-white/70 hover:text-gold transition-colors shrink-0">
                          <Linkedin className="w-4 h-4" />
                        </button>
                        <button onClick={() => window.open('https://x.com/gautamthaku09', '_blank')} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold/10 hover:border-gold/50 text-white/70 hover:text-gold transition-colors shrink-0">
                          <Twitter className="w-4 h-4" />
                        </button>
                        <button onClick={() => window.open('https://www.facebook.com/share/1AsqPaLCE6/', '_blank')} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold/10 hover:border-gold/50 text-white/70 hover:text-gold transition-colors shrink-0">
                          <Facebook className="w-4 h-4" />
                        </button>
                        <button onClick={() => {
                          navigator.clipboard.writeText(window.location.href);
                          alert('Link copied to clipboard!');
                        }} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold/10 hover:border-gold/50 text-white/70 hover:text-gold transition-colors cursor-pointer shrink-0">
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
