import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Maximize2, ArrowRight, X, Phone, FileText, CheckCircle2 } from "lucide-react";
import { Section, SectionHeader } from "../ui/Section";
import { Button } from "../ui/Button";
import GreenzModal from "./GreenzModal";
import TimezModal from "./TimezModal";

import EpicentreModal from "./EpicentreModal";

const CATEGORIES = ["Residential", "Commercial", "Industrial"];

const CITIES = [
  {
    id: "dubai",
    name: "Dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
    insight: "Zero tax on capital gains. 0% income tax. Average rental yields of 6-8%. High ROI and golden visa opportunities for investors.",
    highlight: "Global Business Hub & Luxury Real Estate Capital"
  },
  {
    id: "goa",
    name: "Goa",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1974&auto=format&fit=crop",
    insight: "Booming second-home market with high short-term rental yields via luxury tourism. Consistent capital appreciation driven by HNIs.",
    highlight: "Premium Coastal Lifestyle & Hybrid Work Destinations"
  },
  {
    id: "delhi-ncr",
    name: "Delhi NCR",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=2070&auto=format&fit=crop",
    insight: "Robust infrastructure growth. Emerging commercial hubs like Cyber City and Golf Course Ext Rd offering 8-10% lease yields.",
    highlight: "India's Prime Commercial & Ultra-Luxury Residential Market"
  },
  {
    id: "dehradun",
    name: "Dehradun",
    image: "/dehradun-cover.jpg?v=2",
    insight: "Emerging eco-luxury paradigm. High demand for holiday homes, organic living retreats, and wellness real estate. High ROI in homestay rentals.",
    highlight: "Nature Luxury Retreats & High-Yield Asset Diversification"
  },
  {
    id: "chandigarh",
    name: "Chandigarh",
    image: "/chandigarh-cover.jpg?v=2",
    insight: "Planned urban premium city. High capital growth in Mohali Aerocity. Exceptional retail and commercial asset opportunities.",
    highlight: "Tricity's Organized Urban Premium Growth Engine"
  },
  {
    id: "ahmedabad",
    name: "Ahmedabad",
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=2008&auto=format&fit=crop",
    insight: "Dholera SIR and GIFT City are redefining corporate real estate and industrial warehousing. Massive foreign direct investment influx.",
    highlight: "Modern Business Growth & Infrastructure Evolution"
  }
];

const PROPERTIES = [
  // DUBAI
  {
    id: 1,
    title: "Skyline Penthouse",
    location: "Downtown Dubai",
    category: "Residential",
    city: "dubai",
    price: "AED 12,000,000",
    sqft: "5,400",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    description: "An ultra-luxurious penthouse located in the heart of Downtown Dubai, offering panoramic views of the Burj Khalifa and the Dubai Fountains. Features private elevator access, floor-to-ceiling windows, and Italian marble finishes.",
    features: ["4 Bedrooms", "5 Bathrooms", "Private Pool", "Smart Home System", "Maid's Room"],
    roi: "7.5% Estimated Yield",
    type: "Off-Plan (Handover Q4 2026)",
    gallery: ["https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop", "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop", "https://images.unsplash.com/photo-1620891557008-0112dd1da259?q=80&w=2070&auto=format&fit=crop"]
  },
  {
    id: 7,
    title: "Greenz by Danube Properties",
    location: "Dubai South / Near Silicon Oasis, Dubai",
    category: "Residential",
    city: "dubai",
    price: "From AED 3.5M",
    sqft: "1,300 - 3,950",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    description: "Developed by Danube Properties. Greenz is a premium master-planned villa and townhouse community in Dubai designed around wellness, greenery, and luxury living.",
    features: ["Fully Furnished Villas & Townhomes", "The Greenz Sanctuary", "Double-Height Gym", "Handover Q4 2029"],
    roi: "High Investment Potential",
    type: "Off-Plan Fully Furnished",
    gallery: ["https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop", "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop", "https://images.unsplash.com/photo-1620891557008-0112dd1da259?q=80&w=2070&auto=format&fit=crop"]
  },
  {
    id: 8,
    title: "Timez by Danube Properties",
    location: "Dubai Silicon Oasis, Dubai",
    category: "Residential",
    city: "dubai",
    price: "From AED 1.54M",
    sqft: "832 - 2,434",
    image: "https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=2070&auto=format&fit=crop",
    description: "Timez by Danube is a premium high-rise residential development offering modern fully furnished luxury apartments with smart convertible layouts, upscale interiors, resort-style amenities and strong ROI potential.",
    features: ["Convertible Layouts (Studio to 1BHK)", "Private Pool In Apartment", "1% Per Month Payment Plan", "40+ Resort Amenities"],
    roi: "High Rental Yields",
    type: "Off-Plan Fully Furnished",
    gallery: ["https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop", "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop", "https://images.unsplash.com/photo-1620891557008-0112dd1da259?q=80&w=2070&auto=format&fit=crop"]
  },
  {
    id: 9,
    title: "Business Bay Corporate Tower",
    location: "Business Bay, Dubai",
    category: "Commercial",
    city: "dubai",
    price: "AED 85,000,000",
    sqft: "25,000",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    description: "Premium shell and core commercial floors in a Grade-A tower located in Business Bay. Panoramic canal views and seamless connectivity to Sheikh Zayed Road.",
    features: ["Grade-A Offices", "High-Speed Elevators", "LEED Certified", "Ample Parking", "Canal Views"],
    roi: "8% Rental Yield",
    type: "Ready for Fitout",
    gallery: ["https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop", "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1932&auto=format&fit=crop", "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=2000&auto=format&fit=crop"]
  },
  {
    id: 10,
    title: "Dubai South Logistics Hub",
    location: "Dubai South",
    category: "Industrial",
    city: "dubai",
    price: "AED 120,000,000",
    sqft: "150,000",
    image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c1590f?q=80&w=2070&auto=format&fit=crop",
    description: "State-of-the-art warehousing facility perfectly positioned near Al Maktoum International Airport and Jebel Ali Port. Ideal for global logistics operations.",
    features: ["Cold Storage Specs", "High Clearance", "Multi-Dock Levelers", "Logistics Corridor", "Freezone Benefits"],
    roi: "Steady Corporate Yields",
    type: "Premium Warehouse",
    gallery: ["https://images.unsplash.com/photo-1586528116311-ad8ed7c1590f?q=80&w=2070&auto=format&fit=crop", "https://images.unsplash.com/photo-1502444330042-d1a1ddf971b1?q=80&w=2070&auto=format&fit=crop", "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"]
  },

  // GOA
  {
    id: 11,
    title: "Assagao Heritage Villa",
    location: "Assagao, Goa",
    category: "Residential",
    city: "goa",
    price: "₹ 28 Cr",
    sqft: "6,500",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    description: "An authentic Portuguese-style heritage villa restored with modern luxury amenities. Located in the affluent Beverly Hills of Goa, perfect for high-end homestays.",
    features: ["5 Bedrooms", "Heritage Architecture", "Private Pool", "Lush Gardens", "Concierge Service"],
    roi: "10-12% Homestay Yield",
    type: "Ready to Move",
    gallery: ["https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop", "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop", "https://images.unsplash.com/photo-1620891557008-0112dd1da259?q=80&w=2070&auto=format&fit=crop"]
  },
  {
    id: 12,
    title: "Vagator Premium Beach Club",
    location: "Vagator, Goa",
    category: "Commercial",
    city: "goa",
    price: "₹ 45 Cr",
    sqft: "18,000",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    description: "Rare commercial beachfront property with pre-approved licenses for an ultra-luxury beach club and boutique resort.",
    features: ["Beachfront Access", "F&B Licenses", "Boutique Layout", "High Footfall", "Premium Zoning"],
    roi: "High Revenue Potential",
    type: "Commercial Land/Asset",
    gallery: ["https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop", "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1932&auto=format&fit=crop", "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=2000&auto=format&fit=crop"]
  },
  {
    id: 13,
    title: "Verna Tech & Assembly Park",
    location: "Verna Industrial Estate, Goa",
    category: "Industrial",
    city: "goa",
    price: "₹ 35 Cr",
    sqft: "60,000",
    image: "https://images.unsplash.com/photo-1504917595217-d4f391568856?q=80&w=2070&auto=format&fit=crop",
    description: "Modern industrial facility in Goa's premier industrial estate, suitable for pharmaceutical or light electronics manufacturing.",
    features: ["Clean Room Specs", "3-Phase Power", "Effluent Treatment", "Highway Connectivity", "Gated Estate"],
    roi: "Stable Industrial Demand",
    type: "Industrial Facility",
    gallery: ["https://images.unsplash.com/photo-1586528116311-ad8ed7c1590f?q=80&w=2070&auto=format&fit=crop", "https://images.unsplash.com/photo-1502444330042-d1a1ddf971b1?q=80&w=2070&auto=format&fit=crop", "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"]
  },

  // DELHI NCR
  {
    id: 14,
    title: "Gurugram Super Luxury Condos",
    location: "DLF Phase 5, Gurugram",
    category: "Residential",
    city: "delhi-ncr",
    price: "₹ 32 Cr",
    sqft: "7,800",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
    description: "Palatial 4BHK apartments on Golf Course Road featuring panoramic views of the golf course, private lobbies, and unmatched luxury amenities.",
    features: ["Golf Course Views", "Private Lobby", "Clubhouse", "Concierge", "High Security"],
    roi: "Strong Capital Appreciation",
    type: "Under Construction",
    gallery: ["https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop", "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop", "https://images.unsplash.com/photo-1620891557008-0112dd1da259?q=80&w=2070&auto=format&fit=crop"]
  },
  {
    id: 22,
    title: "Epicentre of MG Road",
    location: "MG Road, Gurugram",
    category: "Commercial",
    city: "delhi-ncr",
    price: "From ₹ 45 Lacs",
    sqft: "Boutique Units",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    description: "Premium boutique commercial destination featuring pre-leased office spaces, high-footfall retail units, and experiential F&B zones. Guaranteed 12% assured rentals till possession.",
    features: ["Limited 60 Units", "Pre-Leased Commercial", "12% Assured Rentals", "Freehold Shops", "High Footfall"],
    roi: "12% Assured Rentals",
    type: "Boutique Commercial",
    gallery: ["https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop", "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1932&auto=format&fit=crop", "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=2000&auto=format&fit=crop"]
  },
  {
    id: 15,
    title: "Manesar Heavy Industrial Hub",
    location: "IMT Manesar, Gurugram",
    category: "Industrial",
    city: "delhi-ncr",
    price: "₹ 60 Cr",
    sqft: "180,000",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    description: "Massive industrial plot with ready infrastructure for heavy automotive manufacturing and ancillary support within Haryana's prime auto hub.",
    features: ["Heavy Duty Load", "Wide Access Roads", "Dedicated Substation", "Auto Hub Zone", "Labor Quarters"],
    roi: "High Lease Potential",
    type: "Industrial Land",
    gallery: ["https://images.unsplash.com/photo-1586528116311-ad8ed7c1590f?q=80&w=2070&auto=format&fit=crop", "https://images.unsplash.com/photo-1502444330042-d1a1ddf971b1?q=80&w=2070&auto=format&fit=crop", "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"]
  },

  // DEHRADUN
  {
    id: 4,
    title: "Mussoorie Valley Retreat",
    location: "Dehradun, Uttarakhand",
    category: "Residential",
    city: "dehradun",
    price: "₹ 15 Cr",
    sqft: "4,200",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    description: "A sprawling eco-luxury estate nestled in the foothills overlooking Dehradun. Designed as the perfect second home or high-yield holiday rental.",
    features: ["4 Bedrooms", "Forest Facing", "Heated Pool", "Outhouse", "Dedicated Parking"],
    roi: "12% via Homestay Setup",
    type: "Second Home / Holiday Villa",
    gallery: ["https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop", "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop", "https://images.unsplash.com/photo-1620891557008-0112dd1da259?q=80&w=2070&auto=format&fit=crop"]
  },
  {
    id: 16,
    title: "Rajpur Road Boutique Retail",
    location: "Rajpur Road, Dehradun",
    category: "Commercial",
    city: "dehradun",
    price: "₹ 18 Cr",
    sqft: "6,500",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=2000&auto=format&fit=crop",
    description: "Premium high-street retail property located on the primary commercial thoroughfare of Dehradun. High visibility with premium brand lease.",
    features: ["High Footfall", "Glass Facade", "Dedicated Parking", "Premium Locality", "Pre-Leased"],
    roi: "7% Commercial Yield",
    type: "Pre-Leased Commercial",
    gallery: ["https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop", "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1932&auto=format&fit=crop", "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=2000&auto=format&fit=crop"]
  },
  {
    id: 17,
    title: "Selaqui Pharma & Tech Park",
    location: "Selaqui, Dehradun",
    category: "Industrial",
    city: "dehradun",
    price: "₹ 22 Cr",
    sqft: "45,000",
    image: "https://images.unsplash.com/photo-1502444330042-d1a1ddf971b1?q=80&w=2070&auto=format&fit=crop",
    description: "Industrial estate plot located in Selaqui, specifically zoned for pharmaceuticals, biotech, and clean tech industries with excellent connectivity.",
    features: ["Pharmaceutical Zoning", "Clean Environment", "Tax Benefits", "Water Connectivity", "Highway Access"],
    roi: "Strategic Industrial Asset",
    type: "Industrial Land",
    gallery: ["https://images.unsplash.com/photo-1586528116311-ad8ed7c1590f?q=80&w=2070&auto=format&fit=crop", "https://images.unsplash.com/photo-1502444330042-d1a1ddf971b1?q=80&w=2070&auto=format&fit=crop", "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"]
  },

  // CHANDIGARH
  {
    id: 18,
    title: "Sector 9 Heritage Mansion",
    location: "Sector 9, Chandigarh",
    category: "Residential",
    city: "chandigarh",
    price: "₹ 45 Cr",
    sqft: "9,000",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    description: "A prestigious ultra-luxury modern mansion located in Chandigarh's most exclusive sector. Features sprawling lawns and Le Corbusier-inspired architecture.",
    features: ["1 Kanal Plot", "Smart Home", "Basement Cinema", "Luxury Fittings", "VIP Locality"],
    roi: "High Heritage Value",
    type: "Ready to Move",
    gallery: ["https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop", "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop", "https://images.unsplash.com/photo-1620891557008-0112dd1da259?q=80&w=2070&auto=format&fit=crop"]
  },
  {
    id: 5,
    title: "Aerocity Retail Hub",
    location: "Mohali, Punjab",
    category: "Commercial",
    city: "chandigarh",
    price: "₹ 25 Cr",
    sqft: "8,500",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=2000&auto=format&fit=crop",
    description: "Massive Shop-Cum-Office (SCO) format in the rapidly developing Aerocity corridor of Mohali. Direct facade on the PR-7 Airport Road.",
    features: ["G+4 Structure allowed", "High Street Format", "Basement Parking", "Airport Proximity", "Freehold Property"],
    roi: "15% Capital Appreciation pa",
    type: "SCO Plot",
    gallery: ["https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop", "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1932&auto=format&fit=crop", "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=2000&auto=format&fit=crop"]
  },
  {
    id: 19,
    title: "Mohali IT & Logistics Hub",
    location: "IT City, Mohali",
    category: "Industrial",
    city: "chandigarh",
    price: "₹ 55 Cr",
    sqft: "100,000",
    image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c1590f?q=80&w=2070&auto=format&fit=crop",
    description: "Prime industrial and IT land close to the international airport. Perfect for data centers, BPOs, or light assembly units.",
    features: ["IT Zoning", "Airport Proximity", "High-Speed Fiber", "Modern Infrastructure", "Grade-A Capability"],
    roi: "Rapid Asset Appreciation",
    type: "IT/Industrial Land",
    gallery: ["https://images.unsplash.com/photo-1586528116311-ad8ed7c1590f?q=80&w=2070&auto=format&fit=crop", "https://images.unsplash.com/photo-1502444330042-d1a1ddf971b1?q=80&w=2070&auto=format&fit=crop", "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"]
  },

  // AHMEDABAD
  {
    id: 20,
    title: "SG Highway Luxury Sky-villas",
    location: "SG Highway, Ahmedabad",
    category: "Residential",
    city: "ahmedabad",
    price: "₹ 12 Cr",
    sqft: "5,200",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    description: "Exclusive double-height sky-villas on SG Highway. Offering private plunge pools, massive decks, and world-class community amenities.",
    features: ["5 Bedrooms", "Double Height Living", "Private Deck Pool", "Clubhouse", "Premium Location"],
    roi: "Consistent Appreciation",
    type: "Under Construction",
    gallery: ["https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop", "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop", "https://images.unsplash.com/photo-1620891557008-0112dd1da259?q=80&w=2070&auto=format&fit=crop"]
  },
  {
    id: 21,
    title: "GIFT City Financial Tower",
    location: "GIFT City, Gandhinagar",
    category: "Commercial",
    city: "ahmedabad",
    price: "₹ 110 Cr",
    sqft: "35,000",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    description: "Premium office spaces in India's first operational smart city and international financial services center. Unmatched tax benefits for occupants.",
    features: ["SEZ Benefits", "District Cooling", "Smart City Tech", "International Standard", "Direct Metro Access"],
    roi: "10% Commercial Yield",
    type: "Premium Office Space",
    gallery: ["https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop", "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1932&auto=format&fit=crop", "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=2000&auto=format&fit=crop"]
  },
  {
    id: 6,
    title: "Dholera Mega Warehouse",
    location: "Dholera SIR, Gujarat",
    category: "Industrial",
    city: "ahmedabad",
    price: "₹ 45 Cr",
    sqft: "125,000",
    image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c1590f?q=80&w=2070&auto=format&fit=crop",
    description: "Strategic industrial warehousing land located inside the Dholera Special Investment Region. Directly connected to the upcoming dedicated freight corridor, ideal for e-commerce or manufacturing assembly lines.",
    features: ["Heavy Duty Flooring", "Dock Levelers", "Fire Sprinkler System", "32ft Clear Height", "Wide Truck Access"],
    roi: "High Rental Demand",
    type: "Industrial Land/Asset",
    gallery: ["https://images.unsplash.com/photo-1586528116311-ad8ed7c1590f?q=80&w=2070&auto=format&fit=crop", "https://images.unsplash.com/photo-1502444330042-d1a1ddf971b1?q=80&w=2070&auto=format&fit=crop", "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"]
  }
];

export default function Properties() {
  const [activeCategory, setActiveCategory] = useState("Residential");
  const [activeCity, setActiveCity] = useState("dubai");
  const [selectedProperty, setSelectedProperty] = useState<typeof PROPERTIES[0] | null>(null);

  const activeCityObj = CITIES.find(c => c.id === activeCity) || CITIES[0];

  const filteredProperties = PROPERTIES.filter(
    (prop) => prop.category === activeCategory && prop.city === activeCity
  );

  return (
    <Section id="properties">
      <div className="flex flex-col mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <SectionHeader title="Featured Properties" subtitle="Exclusive Listings" />
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-heading transition-all ${
                  activeCategory === cat
                    ? "bg-gold text-primary font-semibold shadow-[0_0_20px_rgba(244,194,31,0.2)]"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* City Filters */}
        <div className="flex flex-wrap gap-2 md:gap-3 py-4 border-t border-white/5">
          {CITIES.map((city) => (
            <button
              key={city.id}
              onClick={() => setActiveCity(city.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-heading uppercase tracking-wider transition-all ${
                activeCity === city.id
                  ? "border border-gold text-gold bg-gold/10"
                  : "border border-white/10 text-white/50 hover:border-white/30 hover:text-white"
              }`}
            >
              {city.name}
            </button>
          ))}
        </div>
      </div>

      {/* City Hero Section */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory + activeCity}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-[350px] md:h-[450px] rounded-3xl overflow-hidden mb-12 group"
        >
          <img 
            src={activeCityObj.image} 
            alt={activeCityObj.name}
            className="absolute inset-0 w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020810] via-[#020810]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020810]/80 to-transparent" />
          
          <div className="relative z-10 p-8 md:p-16 h-full flex flex-col justify-end max-w-4xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-3 py-1 mb-4 rounded border border-gold/30 bg-gold/10 text-gold text-xs font-heading font-medium tracking-widest uppercase w-fit backdrop-blur-sm"
            >
              {activeCategory} in {activeCityObj.name}
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl font-serif text-white mb-4 leading-tight"
            >
              {activeCityObj.highlight}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white/80 font-light text-sm md:text-base leading-relaxed max-w-2xl"
            >
              <strong className="text-white font-medium">Market Insight: </strong>{activeCityObj.insight}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProperties.map((prop) => (
            <motion.div
              key={prop.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group relative rounded-2xl overflow-hidden glass card-glow flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-heading tracking-wider text-white uppercase border border-white/10 shadow-lg">
                    {prop.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-70 group-hover:opacity-90 transition-all duration-500" />
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/40 rounded-2xl pointer-events-none transition-colors duration-500 z-10" />

              <div className="p-6 flex flex-col flex-grow bg-primary/95 group-hover:bg-primary transition-colors duration-500 relative z-20 -mt-10 rounded-t-2xl">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-serif text-white mb-2 transform group-hover:text-gold transition-colors duration-300">{prop.title}</h3>
                    <div className="flex items-center text-gray/80 text-sm">
                      <MapPin className="w-4 h-4 mr-1 text-gold" />
                      {prop.location}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center py-4 border-y border-white/10 mb-4">
                  <p className="text-gold font-serif text-xl font-medium">{prop.price}</p>
                  <div className="flex items-center text-gray/80 text-sm">
                    <Maximize2 className="w-3.5 h-3.5 mr-1.5" />
                    {prop.sqft} sqft
                  </div>
                </div>

                <div className={`grid grid-cols-2 md:grid-cols-3 gap-2 mt-auto pt-2`}>
                  <Button 
                    className="w-full text-xs h-10 px-2"
                    onClick={() => setSelectedProperty(prop)}
                  >
                    View Details
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full text-xs h-10 px-2 text-white border-white/20 hover:bg-white/10 hidden md:flex"
                    onClick={() => window.open(`https://wa.me/916280131414?text=Hello%20Gautam%20Thakur%2C%20please%20send%20me%20the%20Brochure%20for%20${encodeURIComponent(prop.title)}.`, "_blank")}
                  >
                    <FileText className="w-3 h-3 mr-1" />
                    Brochure
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full text-xs h-10 px-2 border-green-500 text-green-500 hover:bg-green-500/10 hover:text-green-400"
                    onClick={() => window.open(`https://wa.me/916280131414?text=Hello%20Gautam%20Thakur%2C%20I%20would%20like%20to%20know%20more%20about%20${encodeURIComponent(prop.title)}.`, "_blank")}
                  >
                    WhatsApp
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="text-center mt-16">
        <Button 
          variant="outline" 
          size="lg" 
          className="group"
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          View All Properties
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform text-gold" />
        </Button>
      </div>

      {/* Property Details Modal */}
      <AnimatePresence>
        {selectedProperty && selectedProperty.id === 7 ? (
          <GreenzModal onClose={() => setSelectedProperty(null)} />
        ) : selectedProperty && selectedProperty.id === 8 ? (
          <TimezModal onClose={() => setSelectedProperty(null)} />
        ) : selectedProperty && selectedProperty.id === 22 ? (
          <EpicentreModal onClose={() => setSelectedProperty(null)} />
        ) : selectedProperty && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 lg:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProperty(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-[#05101a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row z-10"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProperty(null)}
                className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-white border border-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image Side */}
              <div className="w-full md:w-1/2 h-64 md:h-auto relative shrink-0">
                <img 
                  src={selectedProperty.image} 
                  alt={selectedProperty.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-[#05101a] to-transparent md:hidden" />
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 flex flex-col h-full overflow-y-auto p-6 md:p-8 lg:p-10">
                <div className="mb-2">
                  <span className="px-3 py-1 bg-gold/10 text-gold rounded-full text-xs font-heading tracking-wider uppercase border border-gold/20">
                    {selectedProperty.category}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-2">{selectedProperty.title}</h2>
                <div className="flex items-center text-gray/80 text-sm md:text-base mb-6">
                  <MapPin className="w-4 h-4 mr-1 text-gold" />
                  {selectedProperty.location}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <p className="text-xs text-white/50 font-heading uppercase tracking-widest mb-1">Price</p>
                    <p className="text-xl font-serif text-gold">{selectedProperty.price}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <p className="text-xs text-white/50 font-heading uppercase tracking-widest mb-1">Area</p>
                    <p className="text-xl font-serif text-white flex items-center"><Maximize2 className="w-4 h-4 mr-2 opacity-50"/> {selectedProperty.sqft} sqft</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-serif text-white mb-3 flex items-center border-b border-white/10 pb-2">Description</h3>
                  <p className="text-gray/80 font-light text-sm md:text-base leading-relaxed">
                    {selectedProperty.description}
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-serif text-white mb-4 flex items-center border-b border-white/10 pb-2">Key Features</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProperty.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray/80 font-light">
                        <CheckCircle2 className="w-4 h-4 mr-2 text-gold/80" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedProperty.gallery && selectedProperty.gallery.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-lg font-serif text-white mb-4 flex items-center border-b border-white/10 pb-2">Project Gallery</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {selectedProperty.gallery.map((imgUrl, idx) => (
                        <div key={idx} className="relative aspect-square overflow-hidden rounded-xl border border-white/10">
                          <img 
                            src={imgUrl} 
                            alt={`Gallery image ${idx + 1}`}
                            className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4 mb-10">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-gold/10 to-transparent border border-gold/20">
                    <p className="text-xs text-white/50 font-heading uppercase tracking-widest mb-1">Expected ROI</p>
                    <p className="text-sm text-white">{selectedProperty.roi}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20">
                    <p className="text-xs text-white/50 font-heading uppercase tracking-widest mb-1">Property Status</p>
                    <p className="text-sm text-white">{selectedProperty.type}</p>
                  </div>
                </div>

                <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="flex-1"
                    onClick={() => {
                      setSelectedProperty(null);
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Enquire Now
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => window.open(`https://wa.me/916280131414?text=Hello%20Gautam%20Thakur%2C%20I%20would%20like%20to%20know%20more%20about%20your%20real%20estate%20services%20and%20investment%20opportunities.`, "_blank")}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Request Floorplan
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
}
