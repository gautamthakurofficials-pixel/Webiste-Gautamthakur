import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "../ui/Section";

const CITIES = [
  { name: "Dubai", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop" },
  { name: "Goa", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1974&auto=format&fit=crop" },
  { name: "Delhi NCR", image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=2070&auto=format&fit=crop" },
  { name: "Dehradun", image: "/dehradun-cover.jpg?v=2" },
  { name: "Ahmedabad", image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=2008&auto=format&fit=crop" },
  { name: "Chandigarh", image: "/chandigarh-cover.jpg?v=2" },
];

export default function Cities() {
  return (
    <Section id="cities" className="bg-primary pt-0">
      <SectionHeader title="Global Reach" subtitle="Operating Locations" centered />
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {CITIES.map((city, i) => (
          <motion.div
            key={city.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <a
              href="#contact"
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer bg-[#05101a] border border-white/5 hover:border-gold/30 hover:shadow-[0_20px_40px_rgba(244,194,31,0.15)] transition-all duration-500 block"
            >
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out z-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020810] via-[#020810]/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700 z-0 pointer-events-none" />
              <div className="absolute inset-0 bg-[#020810]/20 group-hover:bg-transparent transition-colors duration-700 z-0 pointer-events-none" />
              
              <div className="absolute inset-0 border border-transparent group-hover:border-gold/40 rounded-2xl pointer-events-none transition-colors duration-500 z-10" />

              <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                <h3 className="text-xl md:text-2xl font-serif text-white transform group-hover:-translate-y-4 group-hover:text-gold transition-all duration-300 drop-shadow-md">{city.name}</h3>
                
                <div className="overflow-hidden mt-2 absolute bottom-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  <span className="flex items-center text-sm font-heading font-medium tracking-wider uppercase text-white/90 hover:text-white transition-colors">
                    Explore City <ArrowRight className="w-4 h-4 ml-2 text-gold" />
                  </span>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
