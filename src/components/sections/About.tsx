import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { Section, SectionHeader } from "../ui/Section";

const HIGHLIGHTS = [
  "Real Estate Advisor",
  "Investment Consultant",
  "Podcast Host",
  "Luxury Property Consultant",
];

export default function About() {
  return (
    <Section id="about">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Image / Visual */}
        <div className="relative group mx-auto max-w-md lg:max-w-none">
          {/* Subtle gold accent glow & Soft luxury lighting effect */}
          <div className="absolute -inset-1 bg-gradient-to-tr from-gold/30 to-blue-500/10 rounded-[2.5rem] blur-xl opacity-60 group-hover:opacity-100 transition duration-700" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] rounded-[2rem] p-2 bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            {/* Soft gold glow border & Premium glassmorphism frame */}
            <div className="absolute inset-0 border border-gold/30 rounded-[2rem] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#020810] to-transparent rounded-[2rem] -z-10" />

            <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-[#05101a] flex items-center justify-center">
              <img
                src="/about-profile.jpg"
                alt="Gautam Thakur"
                className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </motion.div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 border-t border-r border-gold/40 rounded-tr-3xl transition-transform duration-700 group-hover:translate-x-2 group-hover:-translate-y-2 pointer-events-none" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b border-l border-gold/40 rounded-bl-3xl transition-transform duration-700 group-hover:-translate-x-2 group-hover:translate-y-2 pointer-events-none" />
        </div>

        {/* Content */}
        <div>
          <SectionHeader title="Gautam Thakur" subtitle="The Vision" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-gray/80 font-light leading-relaxed text-lg"
          >
            <p>
              As a premier luxury real estate advisor, I specialize in curating
              exceptional property portfolios for Ultra High Net Worth Individuals
              (UHNWIs), NRIs, and corporate investors across global markets.
            </p>
            <p>
              My vision is to bridge the gap between discerning buyers and the
              world's most exclusive real estate, providing unparalleled market
              intelligence, discreet service, and strategic investment guidance.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {HIGHLIGHTS.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-gold w-5 h-5 shrink-0" />
                  <span className="font-heading text-sm uppercase tracking-wider text-white">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-10">
              <div className="h-[1px] w-32 bg-gradient-to-r from-gold/60 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
