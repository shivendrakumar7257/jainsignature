export interface Service {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  image?: string;
  isFeaturedImage?: boolean;
  category: 'Residential' | 'Custom Fitouts' | 'Commercial & Office' | 'Bespoke Details';
  deliverables: string[];
}

export interface Project {
  id: string;
  name: string;
  location: string;
  category: 'Residential' | 'Luxury' | 'Commercial' | 'Office' | 'Renovation';
  year: string;
  image: string;
  gallery: string[];
  overview: string;
  concept: string;
  materials: string[];
  area: string;
  clientType: string;
}

export interface Article {
  id: string;
  title: string;
  category: 'INTERIOR DESIGN' | 'MATERIALS' | 'DESIGN TRENDS' | 'ARCHITECTURE' | 'LIFESTYLE';
  date: string;
  readTime: string;
  author: string;
  image: string;
  excerpt: string;
  content: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  role: string;
  location: string;
  projectType: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "gourav-jain",
    name: "Gourav Jain",
    role: "Interior Design Assistant",
    image: "/team-1.jpg"
  },
  {
    id: "ajay-jain",
    name: "Ajay Jain",
    role: "Lead Architect",
    image: "/team-2.jpg"
  },
  {
    id: "harshita-chasta",
    name: "Harshita Chasta",
    role: "Senior Interior Designer",
    image: "/team-3.jpg"
  }
];

export const BRAND_INFO = {
  name: "JAIN SIGNATURE",
  tagline: "Signature Spaces. Timeless Living.",
  alternateHeadline: "Where Luxury Becomes Personal.",
  subtitle: "Bespoke interiors crafted with architectural precision, timeless aesthetics and an uncompromising attention to detail.",
  introHeadline: "Designed for the way you live.",
  introText: "At Jain Signature, we believe exceptional interiors are not simply designed — they are thoughtfully composed. From the first sketch to the final detail, we create spaces that reflect individuality, functionality and timeless luxury.",
  phone: "+91 9643431551",
  rawPhone: "919643431551",
  whatsapp: "919643431551",
  whatsappLink: "https://api.whatsapp.com/send/?phone=919643431551&text&type=phone_number&app_absent=0",
  email: "info@jainstudio.co.in",
  inquiryEmail: "info@jainstudio.co.in",
  address: "L-08, GNB Mall Raj Nagar Extn, Ghaziabad 201017 (UP)",
  mapLink: "https://maps.app.goo.gl/tnPgX2LfF1T8Q9LGA",
  hours: "Monday – Saturday: 10:00 AM – 7:00 PM (By Appointment Only)",
  instagram: "@jainsignaturestudio",
  instagramLink: "https://www.instagram.com/jainsignaturestudio?igsh=Y2prN2VwejhjNW5s",
  facebookLink: "https://www.facebook.com/people/Jain-Signature-Studio-LLP/61586381695060/?rdid=CnYhpifvQIhlfMY1&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AoK1swyGt%2F",
  logoUrl: "/logo.svg",
  stats: [
    { value: "10+", label: "Years of Experience" },
    { value: "150+", label: "Completed Projects" },
    { value: "50+", label: "Discreet High-Net-Worth Clients" },
    { value: "12", label: "Design & Architectural Awards" }
  ]
};

export const SERVICES_DATA: Service[] = [
  {
    id: "full-home-interiors",
    number: "01",
    title: "Full Home Interiors",
    shortDesc: "Complete residential interiors designed around your lifestyle, personality and aspirations.",
    fullDesc: "Our end-to-end full home interior solution integrates spatial masterplanning, bespoke carpentry, architectural lighting, material curation, and turnkey execution. We transform bare shells into living masterpieces tailored to your everyday rituals.",
    iconName: "Home",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    isFeaturedImage: true,
    category: "Residential",
    deliverables: [
      "Turnkey Spatial Planning & Architectural Blueprints",
      "Custom Italian Marble & Wood Floor Curation",
      "Bespoke Fixed Joinery & Integrated Storage",
      "Comprehensive Smart Ambient Lighting Layout",
      "Complete On-Site White-Glove Project Supervision"
    ]
  },
  {
    id: "luxury-interior-design",
    number: "02",
    title: "Luxury Interior Design",
    shortDesc: "Refined interiors combining sophisticated materials, timeless aesthetics and functional planning.",
    fullDesc: "Curated for discerning clients seeking rare textures, international furniture editions, and architectural harmony. We merge traditional artisanal craftsmanship with ultra-modern luxury standards.",
    iconName: "Sparkles",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    isFeaturedImage: true,
    category: "Residential",
    deliverables: [
      "Bespoke Moodboards & High-Definition 3D Visualizations",
      "Rare Stone & Custom Vein-Matched Marble Sourcing",
      "Designer Italian Furniture Selection & Import Logistics",
      "Architectural Metalwork & PVD Gold Accents",
      "Acoustic & Environmental Lighting Engineering"
    ]
  },
  {
    id: "modular-kitchen",
    number: "03",
    title: "Modular Kitchen",
    shortDesc: "Tailored kitchens combining intelligent storage, premium materials and contemporary design.",
    fullDesc: "Culinary spaces where ergonomic precision meets architectural elegance. Featuring soft-closing Blum hardware, Quartz counter surfaces, concealed appliance bays, and island breakfast bars.",
    iconName: "Utensils",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85",
    isFeaturedImage: true,
    category: "Custom Fitouts",
    deliverables: [
      "Ergonomic Golden Triangle Layout Optimization",
      "Anti-Fingerprint Matte Acrylic & Veneer Shutter Options",
      "Integrated High-End Built-in Appliance Fitments",
      "Quartz, Porcelain & Granite Seamless Countertops",
      "Automated Servo-Drive Drawer Systems"
    ]
  },
  {
    id: "modular-wardrobe",
    number: "04",
    title: "Modular Wardrobe",
    shortDesc: "Custom wardrobe solutions designed for elegance, organization and everyday functionality.",
    fullDesc: "Walk-in closets and glass-fronted sliding systems with built-in valet trays, soft sensor lighting, genuine leather inserts, and humidity-controlled watch & jewelry safes.",
    iconName: "Layers",
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1200&q=85",
    isFeaturedImage: true,
    category: "Custom Fitouts",
    deliverables: [
      "Fluted & Tinted Glass Aluminum Frame Doors",
      "Custom Leatherette Drawer Organizers & Lockers",
      "Integrated Sensor LED Strip Lighting",
      "Custom Shoe Rotators & Coat Pull-Down Systems",
      "Dehumidified Micro-Climate Wardrobe Modules"
    ]
  },
  {
    id: "bedroom-interiors",
    number: "05",
    title: "Bedroom Interiors",
    shortDesc: "Private sanctuary spaces designed for ultimate comfort, calm and personal character.",
    fullDesc: "Sanctuaries crafted with padded acoustic headboards, ambient dimmable lighting scenes, concealed storage wall units, and tactile linen drapery for rest and rejuvenation.",
    iconName: "Bed",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85",
    isFeaturedImage: true,
    category: "Residential",
    deliverables: [
      "Custom Upholstered Acoustic Bed Backs",
      "Concealed Master Dressing & En-Suite Flow",
      "Sound-Insulating Wall Paneling & Drapery",
      "Integrated Bedside Touch Controls & Charging",
      "Bespoke Vanity & Reading Nook Creations"
    ]
  },
  {
    id: "living-room-interiors",
    number: "06",
    title: "Living Room Interiors",
    shortDesc: "Statement living spaces that balance luxury, comfort and architectural harmony.",
    fullDesc: "The centerpiece of your home. We design expansive living lounges with custom media consoles, fireplace features, sculptural seating arrangements, and gallery lighting for fine art.",
    iconName: "Sofa",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
    isFeaturedImage: true,
    category: "Residential",
    deliverables: [
      "Spatial Layout for Large-Scale Entertaining",
      "Bespoke Marble & Brass Media Wall Consoles",
      "Custom Sectional Sofas & Handknotted Rug Sourcing",
      "Art Curation & Directional Gallery Spotlights",
      "Acoustic Ceiling & Wall Panel Integration"
    ]
  },
  {
    id: "bathroom-design",
    number: "07",
    title: "Bathroom Design",
    shortDesc: "Elegant bathroom interiors with premium finishes and thoughtful spa-like detailing.",
    fullDesc: "Transforming wet areas into private wellness retreats featuring book-matched marble cladding, rain shower systems, floating vanity units, and integrated anti-fog backlit mirrors.",
    iconName: "Bath",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85",
    isFeaturedImage: true,
    category: "Bespoke Details",
    deliverables: [
      "Book-matched Slab Marble & Terrazzo Cladding",
      "Concealed Thermostatic Shower Valves & Body Jets",
      "Custom Floating Teak & Quartz Vanities",
      "Anti-Fog LED Frameless Backlit Mirrors",
      "Underfloor Heating & Waterproof Niche Lighting"
    ]
  },
  {
    id: "false-ceiling",
    number: "08",
    title: "False Ceiling",
    shortDesc: "Architectural ceiling solutions that enhance lighting, proportions and atmosphere.",
    fullDesc: "Cove lighting, perimeter shadow gaps, warm wooden rafters, and magnetic track lights engineered to subtly sculpt spatial heights and hide central HVAC ducting seamlessly.",
    iconName: "Grid",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85",
    isFeaturedImage: true,
    category: "Bespoke Details",
    deliverables: [
      "Architectural Shadow-Gap Perimeter Detailing",
      "Concealed HVAC & Diffuser Slot Integration",
      "Warm LED Cove Lighting & Magnetic Track Systems",
      "Veneer Rafters & Acoustic Gypsum Treatments",
      "Custom Chandelier Anchor Points & Controls"
    ]
  },
  {
    id: "wallpaper-wall-decor",
    number: "09",
    title: "Wallpaper & Wall Décor",
    shortDesc: "Curated wall treatments that add personality, depth and visual sophistication.",
    fullDesc: "Hand-painted silk wallpapers, micro-cement textures, fluted wooden louvers, and bronze mirror paneling that give walls depth, tactile intrigue, and distinct identity.",
    iconName: "Palette",
    image: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=85",
    isFeaturedImage: true,
    category: "Bespoke Details",
    deliverables: [
      "Imported Textile, Silk & Embossed Wallpapers",
      "Micro-Cement & Italian Venetian Plaster Finishes",
      "Bespoke Wood Fluting & Metallic Louver Panels",
      "Tinted Bronze & Smoke Mirror Architectural Accents",
      "Custom Art Niche Framings & Display Shelving"
    ]
  },
  {
    id: "office-interiors",
    number: "10",
    title: "Office Interiors",
    shortDesc: "Premium workspaces designed for productivity, identity and modern executive business.",
    fullDesc: "Executive suites, boardrooms, and boutique corporate headquarters engineered to exude leadership, inspire high performance, and embed corporate brand legacy into spatial design.",
    iconName: "Briefcase",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
    isFeaturedImage: true,
    category: "Commercial & Office",
    deliverables: [
      "Executive Suite Master Planning & Furniture",
      "Soundproofed Boardrooms with Integrated Telepresence",
      "Ergonomic Task Seating & Motorized Sit-Stand Desks",
      "Brand Heritage Wall & Trophy Display Joinery",
      "Acoustic Ceiling & Wall Panel Systems"
    ]
  },
  {
    id: "commercial-interiors",
    number: "11",
    title: "Commercial Interiors",
    shortDesc: "Distinctive commercial environments designed to elevate your brand experience.",
    fullDesc: "High-end retail boutiques, fine dining restaurants, luxury jewelry showrooms, and private club lounges designed to captivate visitors and deliver unforgettable brand encounters.",
    iconName: "Building2",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85",
    isFeaturedImage: true,
    category: "Commercial & Office",
    deliverables: [
      "High-Traffic Commercial Spatial Layout Strategy",
      "Bespoke Reception Consoles & Feature Entries",
      "Custom Retail Display Vitrines & Warm Spotlights",
      "Durable Luxury Finishes for Commercial Longevity",
      "Compliance, Safety & HVAC Duct Integration"
    ]
  },
  {
    id: "furniture-furnishing",
    number: "12",
    title: "Furniture & Furnishing",
    shortDesc: "Custom furniture, lighting and soft furnishings selected to complete the character of every space.",
    fullDesc: "Custom sofas, dining tables crafted from single-slab solid wood, hand-knotted silk rugs, velvet drapery, and curated accent lighting fixtures sourced from Europe and artisanal master workshops.",
    iconName: "Lamp",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=85",
    isFeaturedImage: true,
    category: "Bespoke Details",
    deliverables: [
      "Bespoke Single-Slab Solid Wood Dining Tables",
      "Hand-Knotted Pure Silk & Wool Custom Rugs",
      "Tailored Motorized Linen & Velvet Window Treatments",
      "Curated Italian & Scandinavian Accent Chairs",
      "Sculptural Brass & Handblown Glass Lighting"
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "raj-nagar-luxury-residence",
    name: "Raj Nagar Signature Villa",
    location: "Raj Nagar Extension, Ghaziabad",
    category: "Luxury",
    year: "2025",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85"
    ],
    overview: "A sprawling 5,500 sq.ft duplex in Ghaziabad, designed into a serene sanctuary of warm neutrals, Statuario marble floors, and custom fluted oak wall paneling.",
    concept: "Architectural minimalism meets tactile luxury — balance of floor-to-ceiling glass, muted champagne metallic trim, and hand-embroidered silk wall accents.",
    materials: ["Italian Statuario Marble", "Smoked European Oak", "Brushed Champagne Brass", "Pure Silk Drapery"],
    area: "5,500 sq. ft.",
    clientType: "Private Estate"
  },
  {
    id: "aura-manor-villa",
    name: "Aura Manor Estate",
    location: "NCR Region",
    category: "Residential",
    year: "2025",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1400&q=85"
    ],
    overview: "A modern luxury villa designed for relaxed entertaining. Incorporates indoor-outdoor living courts, teak ceilings, and stone wall cladding.",
    concept: "Organic modernism. Blending natural slate textures, infinity pool reflections, and bespoke low-slung seating.",
    materials: ["Burma Teak Wood", "Natural Grey Slate Stone", "Micro-Cement Plaster"],
    area: "7,200 sq. ft.",
    clientType: "Family Residence"
  },
  {
    id: "skyline-pavilion",
    name: "Skyline Penthouse",
    location: "Ghaziabad, UP",
    category: "Residential",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85"
    ],
    overview: "An ultra-sleek high-rise apartment crafted with monochromatic depth, concealed storage walls, and smart motorized glass dividers.",
    concept: "Sophisticated minimalism. Utilizing warm ambient backlighting and textured stone finishes.",
    materials: ["Armani Grey Marble", "Black Anodized Aluminum", "Fluted Glass Panels"],
    area: "4,200 sq. ft.",
    clientType: "Private Residence"
  },
  {
    id: "gnb-mall-boutique",
    name: "Signature Boutique Studio",
    location: "GNB Mall, Raj Nagar Extn",
    category: "Commercial",
    year: "2025",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=85"
    ],
    overview: "Our flagship interior studio showcase located at GNB Mall, featuring bespoke joinery, travertine display pedestals, and concealed lighting niches.",
    concept: "Sculptural drama — focused on soft curves, neutral tactile plaster, and museum-grade color rendering indices.",
    materials: ["Navona Travertine", "Venetian Micro-Plaster", "Muted Gold Trim"],
    area: "2,800 sq. ft.",
    clientType: "Commercial Showcase"
  }
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Consultation",
    desc: "Understanding your lifestyle, architectural requirements, spatial aspirations, and vision through an intimate design dialogue."
  },
  {
    number: "02",
    title: "Concept",
    desc: "Developing the overarching design direction, moodboards, material palettes, spatial flow diagrams, and preliminary 3D concepts."
  },
  {
    number: "03",
    title: "Design Development",
    desc: "Photorealistic rendering, millimeter-precise architectural drawings, custom furniture design, and material sample approvals."
  },
  {
    number: "04",
    title: "Execution",
    desc: "Coordinating master craftsmen, turnkey structural modifications, on-site quality audits, and seamless project management."
  },
  {
    number: "05",
    title: "Final Reveal",
    desc: "White-glove styling, soft furnishing placement, deep cleaning, and handing over a finished space that feels distinctly and unmistakably yours."
  }
];

export const CORE_PRINCIPLES = [
  {
    number: "01",
    title: "Bespoke Design",
    desc: "Every single detail is designed specifically around the client's unique lifestyle, aesthetic identity, and functional habits."
  },
  {
    number: "02",
    title: "Material Excellence",
    desc: "We source only premium grade natural stones, rare hardwoods, fine metals, and durable textiles with enduring character."
  },
  {
    number: "03",
    title: "Attention to Detail",
    desc: "Every shadow gap line, custom joinery seam, concealed lighting temperature, and hardware weight is calculated with precision."
  },
  {
    number: "04",
    title: "Timeless Aesthetics",
    desc: "We avoid short-lived trends in favor of refined proportions, editorial elegance, and designs that age gracefully across generations."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote: "Jain Signature transformed our Ghaziabad duplex into an architectural masterpiece. Their dedication to material perfection and millimeter precision made the entire process effortless and truly enjoyable.",
    clientName: "Vikramaditya & Ananya Sharma",
    role: "Villa Owner",
    location: "Raj Nagar Extension, Ghaziabad",
    projectType: "Full Home Interior"
  },
  {
    id: "2",
    quote: "The team’s ability to blend contemporary luxury with functional ergonomics in our estate is unparalleled. Every guest who walks in is awestruck by the subtle warmth and lighting design.",
    clientName: "Rajesh K. Agarwal",
    role: "Managing Director",
    location: "Ghaziabad",
    projectType: "Luxury Villa"
  },
  {
    id: "3",
    quote: "For our commercial space in GNB Mall, Jain Signature created an environment that communicates prestige and calm. The craftsmanship and bespoke joinery are world-class.",
    clientName: "Siddharth Verma",
    role: "Business Owner",
    location: "GNB Mall, Raj Nagar Extn",
    projectType: "Boutique Commercial Studio"
  }
];

export const ARTICLES_DATA: Article[] = [
  {
    id: "how-timeless-interiors-are-designed",
    title: "How Timeless Interiors Are Designed Beyond Fleeting Trends",
    category: "INTERIOR DESIGN",
    date: "September 14, 2026",
    readTime: "5 min read",
    author: "Jain Signature Editorial",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
    excerpt: "Exploring the fundamental rules of spatial proportions, natural light, and authentic materials that ensure a home remains elegant for decades.",
    content: [
      "Trends come and go with seasonal cycles, but true luxury in interior architecture lies in permanence. A timeless interior does not shout for attention; it commands respect through calm balance, high-grade natural materials, and flawless spatial proportions.",
      "When designing a residence, we focus heavily on the skeletal architecture — how natural light travels from dawn to dusk, how shadow gaps accentuate ceiling transitions, and how natural stone surfaces develop a rich patina over time.",
      "By avoiding trendy synthetic finishes and adhering to monochromatic or warm earth-tone palettes, spaces maintain an ethereal quietness that feels relevant 20 years later."
    ]
  },
  {
    id: "art-of-choosing-materials",
    title: "The Art of Choosing Materials: Marble, Brass & Smoked Oak",
    category: "MATERIALS",
    date: "August 28, 2026",
    readTime: "6 min read",
    author: "Senior Material Curator",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85",
    excerpt: "A deep dive into vein-matching Italian Statuario marble, selecting aged brass accents, and harmonizing smoked European oak in luxury residences.",
    content: [
      "Materials carry emotional resonance. The cold, smooth tactile touch of book-matched Statuario marble paired against the organic warmth of wire-brushed European oak creates a harmonious sensory contrast.",
      "In this guide, we break down how to evaluate marble slab porosity, why PVD-coated brushed brass outperforms standard lacquered finishes, and how fluted wood paneling dampens sound in open-plan living rooms."
    ]
  },
  {
    id: "creating-luxury-without-excess",
    title: "Creating Luxury Without Excess: The Power of Spatial Proportions",
    category: "DESIGN TRENDS",
    date: "August 10, 2026",
    readTime: "4 min read",
    author: "Jain Signature Studio",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85",
    excerpt: "True luxury is quiet. Discover how generous whitespace, concealed storage, and restrained geometry elevate high-end living spaces.",
    content: [
      "Excessive ornamentation often masks poor spatial planning. Modern architectural luxury prioritizes negative space — allowing architectural forms, statement furniture, and curated artwork room to breathe.",
      "By concealing technical HVAC diffusers, electrical switches, and heavy storage behind seamless veneered wall panels, the eye experiences unbroken visual continuity."
    ]
  }
];

export const GALLERY_IMAGES = [
  { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=85", title: "Italian Marble Living Room" },
  { url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=85", title: "Minimalist Master Suite" },
  { url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=85", title: "Custom Quartz Island Kitchen" },
  { url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=85", title: "Fluted Wood Lounge Wall" },
  { url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=85", title: "Penthouse Terrace Garden" },
  { url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=85", title: "Bespoke Travertine Vanity" }
];
