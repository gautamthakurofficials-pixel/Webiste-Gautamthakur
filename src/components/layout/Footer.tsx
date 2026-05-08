import { Instagram, Youtube, Linkedin, Facebook, MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "../ui/Button";

const LINKS = {
  Services: ["Residential", "Commercial", "Industrial", "Consulting", "NRI Support"],
  Cities: ["Dubai", "Mohali", "Chandigarh", "Dehradun", "Delhi NCR"],
  Company: ["About Us", "Media & Podcast", "Insights", "Contact", "Careers"],
};

const SOCIAL_LINKS = [
  { icon: MessageCircle, href: "https://wa.me/916280131414?text=Hello%20Gautam%20Thakur%2C%20I%20would%20like%20to%20know%20more%20about%20your%20real%20estate%20services%20and%20investment%20opportunities.", label: "WhatsApp" },
  { icon: Instagram, href: "https://www.instagram.com/officialgautamthakur_", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/@GautamThakurofficials", label: "YouTube" },
  { icon: Facebook, href: "https://www.facebook.com/share/1AsqPaLCE6/", label: "Facebook" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/gautam-thakur-283692347", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-[#05101a] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12 w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          <div className="lg:col-span-4">
            <a href="#" className="flex items-center gap-4 mb-6">
              <div className="flex flex-col">
                <span className="font-serif text-3xl font-bold tracking-wider text-white flex flex-col uppercase">
                  GAUTAM THAKUR
                </span>
                <span className="font-heading text-xs uppercase tracking-[0.2em] text-gold">
                  Real Estate Advisor
                </span>
              </div>
            </a>
            <p className="text-gray/60 font-light mb-8 max-w-sm leading-relaxed">
              Global Luxury Real Estate Advisory helping discerning investors 
              and buyers discover premium opportunities across worldwide markets.
            </p>
            
            <div className="space-y-4 mb-8">
              <a href="tel:+916280131414" target="_top" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 hover:text-gold transition-colors font-light text-sm">
                <Phone className="w-4 h-4 text-gold" />
                +91 6280131414
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gautamthakurofficials@gmail.com&su=Real%20Estate%20Consultation%20Inquiry" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 hover:text-gold transition-colors font-light text-sm">
                <Mail className="w-4 h-4 text-gold" />
                gautamthakurofficials@gmail.com
              </a>
            </div>

            <div className="flex gap-4">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-white hover:bg-gold hover:border-gold transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-serif text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              {LINKS.Services.map((link) => (
                <li key={link}>
                  <a href="#properties" className="text-gray/60 hover:text-gold font-light transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-serif text-lg mb-6">Cities</h4>
            <ul className="space-y-4">
              {LINKS.Cities.map((link) => (
                <li key={link}>
                  <a href="#cities" className="text-gray/60 hover:text-gold font-light transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 rounded-2xl glass p-8 border border-white/5">
            <h4 className="text-white font-serif text-lg mb-6">Global Offices</h4>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-white font-medium text-sm mb-1">International Office (Dubai)</h5>
                  <p className="text-gray/60 text-sm font-light leading-relaxed mb-2">
                    Floor 22, Court Tower, Marasi Drive<br/>Business Bay, Dubai, UAE
                  </p>
                  <a href="https://maps.google.com/?q=Court+Tower,+Business+Bay,+Dubai,+UAE" target="_blank" rel="noopener noreferrer" className="text-gold text-xs font-heading uppercase tracking-widest hover:text-white transition-colors">
                    View on Map
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-white font-medium text-sm mb-1">Main Office (Mohali)</h5>
                  <p className="text-gray/60 text-sm font-light leading-relaxed mb-2">
                    CP 67 Mall, Sector 67, Mohali<br/>Punjab – 160062
                  </p>
                  <a href="https://maps.google.com/?q=CP+67+Mall,+Sector+67,+Mohali,+Punjab+160062" target="_blank" rel="noopener noreferrer" className="text-gold text-xs font-heading uppercase tracking-widest hover:text-white transition-colors">
                    View on Map
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-white font-medium text-sm mb-1">Second Office (Dehradun)</h5>
                  <p className="text-gray/60 text-sm font-light leading-relaxed mb-2">
                    Pacific Golf, Rajpur Road<br/>Dehradun, Uttarakhand – 248009
                  </p>
                  <a href="https://maps.google.com/?q=Pacific+Golf,+Rajpur+Road,+Dehradun,+Uttarakhand+248009" target="_blank" rel="noopener noreferrer" className="text-gold text-xs font-heading uppercase tracking-widest hover:text-white transition-colors">
                    View on Map
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-gray/40">
          <p>© {new Date().getFullYear()} Gautam Thakur. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
