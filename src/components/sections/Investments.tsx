import { motion } from "motion/react";
import { ArrowUpRight, TrendingUp, ShieldCheck } from "lucide-react";
import { Section, SectionHeader } from "../ui/Section";
import { cn } from "../../lib/utils";

const OPPORTUNITIES = [
  {
    title: "Dubai Real Estate",
    roi: "8-12%",
    focus: "Tax-Free High Yields",
    desc: "Capitalize on the world's fastest-growing luxury market with premium off-plan and ready properties.",
  },
  {
    title: "Goa Luxury Investments",
    roi: "10-15%",
    focus: "Holiday Homes & Rentals",
    desc: "Secure high-value vacation rentals and luxury villas in India's premier coastal destination.",
  },
  {
    title: "NCR Commercial Projects",
    roi: "9-14%",
    focus: "Grade-A Office Spaces",
    desc: "Invest in structured commercial real estate with long-term corporate leases in Gurgaon and Noida.",
  },
  {
    title: "Uttarakhand Holiday Homes",
    roi: "7-10%",
    focus: "Boutique Hospitality",
    desc: "Pre-leased assets and luxury cottages amidst the Himalayas offering serene retreats and steady returns.",
  },
];

export default function Investments() {
  return (
    <Section id="investments" className="bg-primary-900 border-t border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      <SectionHeader title="Investment Opportunities" subtitle="Wealth Creation" centered />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {OPPORTUNITIES.map((opp, i) => (
          <motion.div
            key={opp.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={cn(
              "p-8 rounded-2xl glass border-t-4 border-t-transparent hover:border-t-gold transition-all duration-300 group",
              "flex flex-col h-full bg-gradient-to-b from-white/[0.08] to-transparent hover:bg-white/[0.12]"
            )}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xl font-serif text-white max-w-[150px]">{opp.title}</h3>
              <ArrowUpRight className="text-gold/50 group-hover:text-gold transition-colors" />
            </div>

            <div className="bg-black/30 rounded-lg p-4 mb-6 border border-white/5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-heading uppercase tracking-wider text-gray/60">Expected ROI</span>
                <span className="text-gold font-bold">{opp.roi}</span>
              </div>
              <div className="flex items-center text-sm text-gray/80">
                <TrendingUp className="w-4 h-4 mr-2" />
                {opp.focus}
              </div>
            </div>

            <p className="text-gray/70 text-sm font-light flex-grow mb-6">
              {opp.desc}
            </p>

            <div className="mt-auto">
              <a href="#contact" className="text-sm font-heading text-white group-hover:text-gold transition-colors flex items-center">
                Explore Strategy <ArrowUpRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-16 text-center max-w-2xl mx-auto block"
      >
        <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-6 py-3 rounded-full border border-gold/20 mb-6">
          <ShieldCheck className="w-5 h-5" />
          <span className="font-heading text-sm font-medium tracking-wide">100% Secure & Verified Assets</span>
        </div>
        <p className="text-gray/70 font-light text-center">
          Our investment portfolios are meticulously vetted for legal compliance, developer reputation, and market viability.
        </p>
      </motion.div>
    </Section>
  );
}
