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
  videoUrl?: string;
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
  name: "Jain Signature Studio LLP",
  tagline: "Signature Spaces. Timeless Living.",
  alternateHeadline: "Where Luxury Becomes Personal.",
  subtitle: "Bespoke interiors crafted with architectural precision, timeless aesthetics and an uncompromising attention to detail.",
  introHeadline: "Designed for the way you live.",
  introText: "At Jain Signature Studio LLP, we believe exceptional interiors are not simply designed — they are thoughtfully composed. From the first sketch to the final detail, we create spaces that reflect individuality, functionality and timeless luxury.",
  phone: "+91 9643431551",
  rawPhone: "919643431551",
  whatsapp: "919643431551",
  whatsappLink: "https://api.whatsapp.com/send/?phone=919643431551&text&type=phone_number&app_absent=0",
  email: "info@jainstudio.co.in",
  inquiryEmail: "info@jainstudio.co.in",
  address: "LG-08, GNB mall, Raj Nagar Extension Rd, Raj Nagar Extension, Ghaziabad, Uttar Pradesh 201003",
  mapLink: "https://maps.app.goo.gl/tnPgX2LfF1T8Q9LGA",
  hours: "Monday – Saturday: 10:00 AM – 7:00 PM (By Appointment Only)",
  instagram: "@jainsignaturestudiollp",
  instagramLink: "https://www.instagram.com/jainsignaturestudiollp/",
  facebookLink: "https://www.facebook.com/people/Jain-Signature-Studio-LLP/61586381695060/?rdid=CnYhpifvQIhlfMY1&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AoK1swyGt%2F",
  logoUrl: "/logo.svg",
  serviceAreas: [
    "Ghaziabad (Raj Nagar Extn, Vasundhara, Indirapuram, Vaishali)",
    "Noida (Sector 150, Sector 128, Sector 44, Expressway)",
    "Greater Noida (Jaypee Greens, Tech Zone, Knowledge Park)",
    "Delhi NCR (South Delhi, Vasant Vihar, Golf Course Road)"
  ],
  stats: [
    { value: "10+", label: "Years of Experience" },
    { value: "250+", label: "Completed Projects" },
    { value: "150+", label: "Discreet High-Net-Worth Clients" },
    { value: "12", label: "Design & Architectural Awards" }
  ]
};

export interface ServiceLocation {
  id: string;
  city: string;
  seoHeading: string;
  subhead: string;
  description: string;
  keyNeighborhoods: string[];
  featuredProjectTypes: string[];
  badge: string;
  image: string;
}

export const SERVICE_LOCATIONS: ServiceLocation[] = [
  {
    id: "ghaziabad",
    city: "Ghaziabad",
    seoHeading: "Award-Winning Interior Designer in Ghaziabad",
    subhead: "Flagship Studio & Turnkey Residential Execution",
    description: "Headquartered at GNB Mall, Raj Nagar Extension, Jain Signature Studio LLP is an award-winning interior designer in Ghaziabad. We craft bespoke luxury residences, penthouses, and executive villas across Ghaziabad's premier enclaves.",
    keyNeighborhoods: ["Raj Nagar Extension", "Vasundhara", "Indirapuram", "Vaishali", "Kavi Nagar"],
    featuredProjectTypes: ["Luxury Villa Interiors", "Duplex Penthouses", "Custom Modular Kitchens", "Turnkey Renovations"],
    badge: "Studio Location",
    image: "/projects/living-room-luxury.jpg"
  },
  {
    id: "noida",
    city: "Noida",
    seoHeading: "Luxury Interior Designer in Noida",
    subhead: "Ultra-Premium High-Rise & Expressway Living",
    description: "As a leading luxury interior designer in Noida, our studio creates timeless modern spaces along the Noida Expressway and prime sectors. We balance architectural precision with opulent Italian finishes and smart living integration.",
    keyNeighborhoods: ["Sector 150", "Sector 128", "Sector 44", "Sector 75", "Sector 104"],
    featuredProjectTypes: ["High-Rise Luxury Apartments", "Ocean-View Style Lounges", "Spa Sanctuary Bathrooms", "Italian Marble Fitouts"],
    badge: "Prime Coverage",
    image: "/projects/grand-foyer-backlit-mirror.jpg"
  },
  {
    id: "delhi-ncr",
    city: "Delhi NCR",
    seoHeading: "Best Interior Design Company in Delhi NCR",
    subhead: "Region-Wide Turnkey Architectural Mastery",
    description: "Renowned as the best interior design company in Delhi NCR, Jain Signature Studio LLP brings comprehensive turnkey masterplanning to sprawling farmhouses, heritage bungalows, and ultra-modern executive spaces across South Delhi and the National Capital Region.",
    keyNeighborhoods: ["South Delhi", "Vasant Vihar", "Golf Course Road", "Sainik Farms", "Chhatarpur"],
    featuredProjectTypes: ["Farmhouse Masterplanning", "Commercial Headquarters", "Bespoke Joinery", "Smart Home Engineering"],
    badge: "Capital Coverage",
    image: "/projects/dining-room-mirror-wall.jpg"
  },
  {
    id: "greater-noida",
    city: "Greater Noida",
    seoHeading: "Residential and Commercial Interior Designers in Greater Noida",
    subhead: "Golf Estate Villas & Corporate Headquarters",
    description: "Recognized among top residential and commercial interior designers in Greater Noida, we specialize in high-end golf course villas, tech park corporate fitouts, and expansive commercial retail destinations.",
    keyNeighborhoods: ["Jaypee Greens", "Tech Zone", "Knowledge Park", "Delta & Alpha Sectors", "Surajpur"],
    featuredProjectTypes: ["Golf Villa Estates", "Corporate Offices", "Bespoke Furniture", "Turnkey Commercial Retail"],
    badge: "Expanded Footprint",
    image: "/projects/kitchen-champagne-l-shape.jpg"
  }
];

export interface ClientSolution {
  id: string;
  number: string;
  category: string;
  concern: string;
  title: string;
  solution: string;
  keyPoints: string[];
  iconName: string;
}

export const CLIENT_SOLUTIONS: ClientSolution[] = [
  {
    id: "timelines",
    number: "01",
    category: "Project Timelines",
    concern: "Will my project face endless delays and shifting move-in dates?",
    title: "Guaranteed Milestone Schedules & Timely Handover",
    solution: "We establish a binding, milestone-mapped project schedule prior to site commencement. With daily site tracking and dedicated project managers, we deliver on time without compromising on detail.",
    keyPoints: [
      "Binding completion schedule with defined phase deadlines",
      "Weekly milestone updates & live photo progress logs",
      "Dedicated procurement team ensuring zero material lag"
    ],
    iconName: "Clock"
  },
  {
    id: "budget-transparency",
    number: "02",
    category: "Budget Transparency",
    concern: "Will there be unexpected price spikes or hidden extra charges?",
    title: "100% Transparent Itemized Quotations & No Hidden Costs",
    solution: "We provide comprehensive BOQs (Bill of Quantities) with complete specifications, material brands, and unit pricing before execution starts. Scope or design changes are only processed with prior written approval.",
    keyPoints: [
      "Itemized BOQ detailing exact quantities, brands & rates",
      "Fixed pricing structure with zero surprise surcharges",
      "Clear advance notice & approval for any client-requested additions"
    ],
    iconName: "ShieldCheck"
  },
  {
    id: "quality-assurance",
    number: "03",
    category: "Quality Assurance",
    concern: "How can I be sure about material authenticity and long-term durability?",
    title: "Rigorous Material Audits & 100+ Quality Inspection Checks",
    solution: "From vein-matched Italian marble to boiling-water-proof (BWP) marine ply and anti-fingerprint laminates, every batch is verified. Our multi-tier quality inspection ensures structural integrity and flawless fit-and-finish.",
    keyPoints: [
      "Certified premium materials sourced directly from verified brands",
      "Multi-tier quality inspections before final installation",
      "Precision German joinery fittings & acoustic dampening"
    ],
    iconName: "Award"
  },
  {
    id: "communication",
    number: "04",
    category: "Communication",
    concern: "Will I have to constantly follow up with multiple contractors?",
    title: "Single Point of Contact & Transparent Communication",
    solution: "You get a dedicated Senior Interior Architect as your single point of contact. Say goodbye to coordinating with plumbers, carpenters, and electricians — we manage everything seamlessly.",
    keyPoints: [
      "One dedicated Senior Architect managing all trades & vendors",
      "Weekly structured WhatsApp & email updates with site media",
      "Transparent direct access to studio leadership"
    ],
    iconName: "UserCheck"
  },
  {
    id: "aftercare-support",
    number: "05",
    category: "Aftercare & Support",
    concern: "What happens if issues arise after handover and final payment?",
    title: "Comprehensive Post-Completion Warranty & Concierge Care",
    solution: "Our relationship extends well beyond handover. We back our craftsmanship with structured warranty coverage, rapid-response maintenance support, and complimentary post-handover health checks.",
    keyPoints: [
      "Comprehensive warranty coverage on structural joinery & fitouts",
      "Dedicated concierge support for quick maintenance response",
      "Complimentary 6-month post-handover wellness inspection"
    ],
    iconName: "HeartHandshake"
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: "full-home-interiors",
    number: "01",
    title: "Full Home Interiors",
    shortDesc: "Complete residential interiors designed around your lifestyle, personality and aspirations.",
    fullDesc: "Our end-to-end full home interior solution integrates spatial masterplanning, bespoke carpentry, architectural lighting, material curation, and turnkey execution. We transform bare shells into living masterpieces tailored to your everyday rituals.",
    iconName: "Home",
    image: "/projects/grand-foyer-backlit-mirror.jpg",
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
    image: "/projects/dining-room-mirror-wall.jpg",
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
    image: "/projects/kitchen-champagne-l-shape.jpg",
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
    image: "/projects/bedroom-wardrobe-study.jpg",
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
    image: "/projects/master-bedroom-floral.jpg",
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
    image: "/projects/living-room-luxury.jpg",
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
    id: "mandir-pooja-room",
    number: "07",
    title: "Mandir & Pooja Room Design",
    shortDesc: "Sacred spiritual sanctums combining backlit architectural arches, handcrafted woodwork and divine motifs.",
    fullDesc: "Creating sacred pooja sanctums tailored to your family's spiritual rituals. Featuring illuminated 3D lotus arches, hand-carved teakwood columns, golden Sanskrit Gayatri Mantra backdrops, floating marble drawer pedestals, and hanging brass temple bells.",
    iconName: "Sparkles",
    image: "/projects/mandir-lotus-illuminated.jpg",
    isFeaturedImage: true,
    category: "Bespoke Details",
    deliverables: [
      "Backlit 3D Lotus & Gayatri Mantra Acrylic Reliefs",
      "Hand-Carved Burma Teakwood Pillars & Shikhars",
      "Floating Marble Decks with Ambient LED Underglow",
      "Solid Suspended Brass Temple Bells & Jali Work",
      "Concealed Sacred Storage & Smoke Ventilation Flow"
    ]
  },
  {
    id: "false-ceiling",
    number: "08",
    title: "False Ceiling & Lighting",
    shortDesc: "Architectural ceiling solutions that enhance lighting, proportions and atmosphere.",
    fullDesc: "Cove lighting, perimeter shadow gaps, warm wooden rafters, and magnetic track lights engineered to subtly sculpt spatial heights and hide central HVAC ducting seamlessly.",
    iconName: "Grid",
    image: "/projects/bedroom-wardrobe-study.jpg",
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
    image: "/projects/fluted-hallway-doorway.jpg",
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
    id: "foyer-entrance-design",
    number: "10",
    title: "Foyer & Entrance Architecture",
    shortDesc: "Theatrical entryways featuring designer safety grill doors, circular halo mirrors and custom shoe consoles.",
    fullDesc: "The entrance sets the tone for your home. We craft memorable arrival experiences with geometric safety doors, illuminated circular halo mirrors, cascading wooden slat feature walls, and floating shoe consoles.",
    iconName: "Home",
    image: "/projects/foyer-safety-grill-door.jpg",
    isFeaturedImage: true,
    category: "Custom Fitouts",
    deliverables: [
      "Designer Geometric Laser-Cut Security Doors",
      "Backlit Halo Mirrors & Split-Stone Feature Cladding",
      "Vertical Fluted Paneling with Cross-Beam Sconces",
      "Custom Shoe Storage & Integrated Seating Ledges",
      "Recessed Perimeter Floor Wash Runner Lighting"
    ]
  },
  {
    id: "commercial-interiors",
    number: "11",
    title: "Commercial & Studio Fitouts",
    shortDesc: "Distinctive commercial environments designed to elevate your brand experience.",
    fullDesc: "High-end retail boutiques, fine dining restaurants, luxury jewelry showrooms, and private club lounges designed to captivate visitors and deliver unforgettable brand encounters.",
    iconName: "Building2",
    image: "/projects/kitchen-matte-grey.jpg",
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
    image: "/projects/dining-room-mirror-wall.jpg",
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
    id: "ivory-gallery-kitchen",
    name: "Ivory Gallery Kitchen (slightly blurry)",
    location: "Raj Nagar Extension, Ghaziabad",
    category: "Residential",
    year: "2025",
    image: "/projects/ivory-gallery-kitchen.jpg",
    gallery: [
      "/projects/ivory-gallery-kitchen.jpg",
      "/projects/signature-marble-kitchen.jpg",
      "/projects/aurora-line-kitchen.jpg"
    ],
    overview: "A timeless country-classical gallery kitchen crafted with hand-profiled ivory raised-panel cabinetry, classic brass bin-pull hardware, floral ceramic tile backsplashes, and durable jet-black granite work surfaces.",
    concept: "Classic Country Elegance — blending traditional ivory paneled joinery with artisanal ceramic tile patterns and high-performance granite countertops.",
    materials: [
      "Hand-Profiled Ivory Shaker Doors",
      "Artisanal Moroccan Pattern Ceramic Tiles",
      "Jet Black Granite Countertops",
      "Solid Brass Hardware",
      "Natural Grain Oak Flooring"
    ],
    area: "220 sq. ft.",
    clientType: "Residential Villa Kitchen"
  },
  {
    id: "aurora-line-modular-kitchen",
    name: "Aurora Line Modular Kitchen",
    location: "Sector 150, Noida Expressway",
    category: "Luxury",
    year: "2026",
    image: "/projects/aurora-line-kitchen.jpg",
    gallery: [
      "/projects/aurora-line-kitchen.jpg",
      "/projects/signature-marble-kitchen.jpg",
      "/projects/nova-marble-kitchen.jpg"
    ],
    overview: "An ultra-sleek, handleless contemporary kitchen defined by continuous under-counter and under-cabinet warm LED illumination. Features seamless Statuario marble backsplashes, slate grey anti-fingerprint cabinetry, and integrated soft-close Blum hardware.",
    concept: "Linear Radiance — pairing continuous architectural LED light channels with honed white marble slabs and minimalist slate cabinetry.",
    materials: [
      "Continuous Warm LED Linear Channels",
      "Seamless Statuario Marble Slabs",
      "Anti-Fingerprint Slate Acrylic",
      "Concealed J-Pull Handles",
      "German Blumotion Drawers"
    ],
    area: "320 sq. ft.",
    clientType: "Modern Penthouse"
  },
  {
    id: "the-aura-marble-washroom",
    name: "The Aura Marble Washroom",
    location: "Raj Nagar Extension, Ghaziabad",
    category: "Luxury",
    year: "2025",
    image: "/projects/aura-marble-washroom.jpg",
    gallery: [
      "/projects/aura-marble-washroom.jpg",
      "/projects/the-calmness-suite.jpg",
      "/projects/contemporary-glow-panel.jpg"
    ],
    overview: "A dramatic private spa sanctuary completely wrapped in floor-to-ceiling book-matched Statuario marble slabs with bold charcoal and gold veining. Features a custom floating marble-wrapped vanity, wall-hung concealed cistern commode, and warm recessed ambient cove lighting.",
    concept: "Monolithic Serenity — creating seamless architectural continuity using book-matched marble veining across walls, vanity fronts, and overhead joinery.",
    materials: [
      "Book-Matched Statuario Marble",
      "Fluted Marble Vanity Fronts",
      "Concealed Wall-Hung Geberit Cistern",
      "Matte Black Designer Sanitaryware",
      "Recessed Anti-Fog Lighting"
    ],
    area: "110 sq. ft.",
    clientType: "Private Master Suite"
  },
  {
    id: "the-horizon-slide-closet",
    name: "The Horizon Slide Closet",
    location: "Indirapuram, Ghaziabad",
    category: "Residential",
    year: "2025",
    image: "/projects/horizon-slide-closet.jpg",
    gallery: [
      "/projects/horizon-slide-closet.jpg",
      "/projects/the-calmness-suite.jpg",
      "/projects/zen-heart-bedroom.jpg"
    ],
    overview: "A custom floor-to-ceiling sliding wardrobe featuring a dual-tone horizontal split in cloud white and slate blue. Fitted with full-height recessed black edge profiles, overhead storage lofts, and integrated interior sensor lighting.",
    concept: "Horizontal Colorblocking — utilizing crisp two-tone geometry to visually expand bedroom ceiling heights while maximizing concealed vertical storage.",
    materials: [
      "Two-Tone Slate Blue & Cloud White Acrylic",
      "Full-Height Anodized Black Aluminum Profiles",
      "Heavy-Duty Soft-Close Sliding Track System",
      "Internal Sensor-Activated LED Strips",
      "BWP Marine-Grade Ply Carcass"
    ],
    area: "140 sq. ft. Storage",
    clientType: "Residential Apartment"
  },
  {
    id: "contemporary-glow-panel-design",
    name: "Contemporary Glow Panel Design",
    location: "Jaypee Greens, Greater Noida",
    category: "Luxury",
    year: "2026",
    image: "/projects/contemporary-glow-panel.jpg",
    gallery: [
      "/projects/contemporary-glow-panel.jpg",
      "/projects/golden-glow-panel.jpg",
      "/projects/ambient-elegance-corner.jpg"
    ],
    overview: "A statement architectural media wall integrating an expansive organic swirling granite slab, deep Prussian blue vertical fluted acoustic slats, an open display curio, and a minimalist floating media ledge with gold accent legs.",
    concept: "Organic Geometry — juxtaposing wild natural stone veining against precision vertical CNC fluting and floating horizontal planes.",
    materials: [
      "Exotic Swirling Natural Stone Slab",
      "Prussian Blue CNC Fluted MDF Paneling",
      "High-Gloss White Lacquered Storage",
      "Brushed Brass Pedestal Accents",
      "Concealed Perimeter Backlighting"
    ],
    area: "450 sq. ft. Living Salon",
    clientType: "Luxury Villa Living Room"
  },
  {
    id: "the-zen-heart-bedroom",
    name: "The Zen Heart Bedroom (slightly blurry)",
    location: "Vasundhara, Ghaziabad",
    category: "Residential",
    year: "2025",
    image: "/projects/zen-heart-bedroom.jpg",
    gallery: [
      "/projects/zen-heart-bedroom.jpg",
      "/projects/horizon-slide-closet.jpg",
      "/projects/the-calmness-suite.jpg"
    ],
    overview: "A tranquil master sanctuary anchored by a custom vertical-fluted beige upholstered headboard with rich saddle leather trims. Framed by classic wall mouldings, botanical floral mural art, and sculptural gold torch sconces for soothing evening warmth.",
    concept: "Botanical Serenity — harmonizing neoclassic boiserie wall mouldings, warm fabric fluting, and ambient gold illumination for restful sleep.",
    materials: [
      "Fluted Velvet & Vegan Leather Headboard",
      "Hand-Painted Floral Botanical Mural",
      "PU Lacquered Boiserie Mouldings",
      "Sculptural Gold Torch Wall Sconces",
      "Warm 3000K Architectural Coving"
    ],
    area: "280 sq. ft.",
    clientType: "Master Bedroom Suite"
  },
  {
    id: "golden-glow-feature-panel",
    name: "Golden Glow Feature Panel",
    location: "Raj Nagar Extension, Ghaziabad",
    category: "Luxury",
    year: "2026",
    image: "/projects/golden-glow-panel.jpg",
    gallery: [
      "/projects/golden-glow-panel.jpg",
      "/projects/ambient-elegance-corner.jpg",
      "/projects/contemporary-glow-panel.jpg"
    ],
    overview: "An illuminated living room showcase combining a tall reeded glass display cabinet with warm interior LED shelves, a white fluted wall backdrop, a backlit marble TV board, and a floating dual-drawer console.",
    concept: "Luminescent Vitrine — celebrating warm amber backlighting through textured fluted glass alongside crisp architectural wall slats.",
    materials: [
      "Reeded Fluted Glass Door Vitrine",
      "3000K Amber LED Internal Shelf Lighting",
      "Off-White CNC Vertical Fluted Paneling",
      "Backlit Marble Veneer TV Backer",
      "Solid Teakwood Transition Portal"
    ],
    area: "350 sq. ft. Entertainment Room",
    clientType: "Modern Villa Residence"
  },
  {
    id: "the-signature-marble-kitchen",
    name: "The Signature Marble Kitchen",
    location: "GNB Mall Studio Showcase / Ghaziabad",
    category: "Luxury",
    year: "2025",
    image: "/projects/signature-marble-kitchen.jpg",
    gallery: [
      "/projects/signature-marble-kitchen.jpg",
      "/projects/aurora-line-kitchen.jpg",
      "/projects/nova-marble-kitchen.jpg"
    ],
    overview: "A showcase luxury open kitchen accessed through an architectural teakwood portal. Features a trio of matte black & timber cone pendant lamps over the island breakfast counter, seamless Statuario marble cladding, and low-profile grey cabinetry with warm under-counter lighting.",
    concept: "Architectural Portal — transitioning from living spaces into a light-flooded culinary pavilion using natural wood frames and sculptural pendant illumination.",
    materials: [
      "Natural Teakwood Portal Arch",
      "Matte Black & Timber Cone Pendants",
      "Seamless Statuario Marble Countertops",
      "Integrated Kickboard Ambient LEDs",
      "Matte Grey Soft-Close Modular Joinery"
    ],
    area: "310 sq. ft.",
    clientType: "Bespoke Open Kitchen"
  },
  {
    id: "the-nova-marble-kitchen",
    name: "The Nova Marble Kitchen",
    location: "Noida Sector 128",
    category: "Residential",
    year: "2025",
    image: "/projects/nova-marble-kitchen.jpg",
    gallery: [
      "/projects/nova-marble-kitchen.jpg",
      "/projects/signature-marble-kitchen.jpg",
      "/projects/ivory-gallery-kitchen.jpg"
    ],
    overview: "A transitional U-shaped modular kitchen featuring cornflower blue shaker cabinetry, an elaborate white coffered ceiling with recessed spotlights, traditional wicker vegetable pullout baskets, and an angled black glass chimney.",
    concept: "Transitional Harmony — pairing classic paneled blue cabinetry with coffered ceiling architecture and modern ergonomic pullouts.",
    materials: [
      "Cornflower Blue Matte Lacquered Shaker Doors",
      "Architectural Coffered Tray Ceiling",
      "Handwoven Natural Wicker Pullout Baskets",
      "Seamless White Quartz Countertops",
      "Spanish Mosaic Splash Tiles"
    ],
    area: "260 sq. ft.",
    clientType: "Family Residence Kitchen"
  },
  {
    id: "aurum-curve-designer-door",
    name: "Aurum Curve Designer Door",
    location: "Raj Nagar Extension, Ghaziabad",
    category: "Luxury",
    year: "2026",
    image: "/projects/aurum-curve-door.jpg",
    gallery: [
      "/projects/aurum-curve-door.jpg",
      "/projects/ambient-elegance-corner.jpg",
      "/projects/golden-glow-panel.jpg"
    ],
    overview: "A bespoke main entrance portal crafted in natural quarter-cut oak veneer with a carved concentric arch profile and an integrated laser-cut arched metal security grill. Paired with an elongated matte black handle and a warm backlit circular nameplate.",
    concept: "The Arched Threshold — combining contemporary security requirements with curved classical arch geometry and subtle halo illumination.",
    materials: [
      "Quarter-Cut Natural Oak Veneer",
      "Laser-Cut Arched Steel Security Grill",
      "Full-Length Matte Black Pull Handle",
      "Backlit Brass & Acrylic Circular Sign",
      "Heavy-Duty Concealed Pivot Hinges"
    ],
    area: "8 ft. x 3.5 ft. Entrance",
    clientType: "Private Villa Entrance"
  },
  {
    id: "ambient-elegance-corner",
    name: "Ambient Elegance Corner",
    location: "Raj Nagar Extension, Ghaziabad",
    category: "Luxury",
    year: "2025",
    image: "/projects/ambient-elegance-corner.jpg",
    gallery: [
      "/projects/ambient-elegance-corner.jpg",
      "/projects/golden-glow-panel.jpg",
      "/projects/contemporary-glow-panel.jpg"
    ],
    overview: "A multi-dimensional living salon composition featuring a multi-tier crystal chandelier, illuminated ceiling coving, white vertical wall fluting, a backlit marble TV board with floating drawers, a glass vitrine, and a panelled solid teakwood door.",
    concept: "Layered Illumination — orchestrating crystal ceiling fixtures, warm LED coving, and backlit stone panels to create an ambient evening lounge.",
    materials: [
      "Multi-Tier K9 Crystal Chandelier",
      "Vertical Slender Fluted Wall Slats",
      "Honed White Marble Floating Media Console",
      "Custom Solid Teak Panelled Door",
      "Recessed Warm Ceiling Cove LEDs"
    ],
    area: "420 sq. ft.",
    clientType: "Duplex Living Room"
  },
  {
    id: "the-calmness-suite",
    name: "The Calmness Suite",
    location: "Sector 44, Noida",
    category: "Residential",
    year: "2026",
    image: "/projects/the-calmness-suite.jpg",
    gallery: [
      "/projects/the-calmness-suite.jpg",
      "/projects/zen-heart-bedroom.jpg",
      "/projects/horizon-slide-closet.jpg"
    ],
    overview: "A serene, peaceful junior bedroom suite designed in calming pastel blues and sage green accents. Features a full-length scalloped fluted velvet headboard wrapping around the corner, whimsical rabbit watercolor art, a floating study desk, and houndstooth accent seating.",
    concept: "Nordic Calmness — pairing soft rounded scalloped upholstery with calming natural pastels, minimalist task lighting, and tactile chevron oak floors.",
    materials: [
      "Scalloped Sky-Blue Velvet Corner Headboard",
      "Framed Watercolor Animal Art Prints",
      "Chevron Engineered Oak Flooring",
      "Minimalist Matte White Floating Study Desk",
      "Houndstooth Ceramic Stool"
    ],
    area: "210 sq. ft.",
    clientType: "Junior / Children's Suite"
  },
  {
    id: "shivangan-signature-residence",
    name: "Shivangan Signature Residence",
    location: "Raj Nagar Extension, Ghaziabad",
    category: "Luxury",
    year: "2025",
    image: "/projects/living-room-luxury.jpg",
    gallery: [
      "/projects/living-room-luxury.jpg",
      "/projects/dining-room-mirror-wall.jpg",
      "/projects/master-bedroom-floral.jpg",
      "/projects/mandir-lotus-illuminated.jpg",
      "/projects/kitchen-champagne-l-shape.jpg",
      "/projects/foyer-shivangan-entry.jpg"
    ],
    overview: "A premier turnkey luxury duplex in Raj Nagar Extension crafted with exquisite architectural cohesion. From the custom-fluted entrance foyer to the diamond-beveled mirror dining salon and illuminated lotus mandir, every square inch embodies refined warmth, acoustic balance, and timeless opulence.",
    concept: "Modern Classical Opulence — harmonizing French boiserie wall mouldings, diamond-beveled mirrors, ambient architectural cove illumination, and rich velvet accents.",
    materials: [
      "Diamond-Beveled Mirror Paneling",
      "Statuary Marble Slab Flooring",
      "Fluted Acoustic Wall Paneling",
      "Backlit Lotus Stone Relief",
      "High-Gloss Champagne Acrylic",
      "Brushed Gold Fixtures"
    ],
    area: "4,800 sq. ft.",
    clientType: "Private Duplex Residence"
  },
  {
    id: "grand-pavilion-penthouse",
    name: "The Grand Pavilion Penthouse",
    location: "Noida Expressway, Sector 150",
    category: "Luxury",
    year: "2025",
    image: "/projects/grand-foyer-backlit-mirror.jpg",
    gallery: [
      "/projects/grand-foyer-backlit-mirror.jpg",
      "/projects/fluted-hallway-doorway.jpg",
      "/projects/mandir-krishna-carved-teak.jpg",
      "/projects/bedroom-wardrobe-study.jpg",
      "/projects/kitchen-matte-grey.jpg"
    ],
    overview: "An awe-inspiring 5,200 sq.ft high-rise penthouse defined by theatrical transitional spaces. Features an expansive stone-clad grand foyer with perimeter floor wash lighting, continuous fluted hallway transitions, an artisanal hand-carved teakwood temple, and minimalist grey kitchen architecture.",
    concept: "Tactile Horizon — contrasting raw chiseled stone with warm perimeter floor cove lighting, artisanal teak carvings, and organic curved ceilings.",
    materials: [
      "Chiseled Split Stone Cladding",
      "Perimeter Floor Cove LEDs",
      "Handcrafted Teakwood Pillars",
      "Matte Grey Anti-Fingerprint Acrylic",
      "Tinted Mirror & Halo Lighting"
    ],
    area: "5,200 sq. ft.",
    clientType: "Executive High-Rise"
  },
  {
    id: "aura-urban-contemporary",
    name: "Aura Urban Contemporary Home",
    location: "Vasundhara, Ghaziabad",
    category: "Residential",
    year: "2024",
    image: "/projects/foyer-safety-grill-door.jpg",
    gallery: [
      "/projects/foyer-safety-grill-door.jpg",
      "/projects/mandir-gayatri-mantra.jpg",
      "/projects/kitchen-gloss-white.jpg",
      "/projects/dining-room-mirror-wall.jpg",
      "/projects/master-bedroom-floral.jpg"
    ],
    overview: "A warm, family-centric modern home blending bespoke security door artistry with serene devotional sanctuaries. Featuring a backlit Gayatri Mantra mandir, an ergonomic white-gloss modular kitchen with integrated appliances, and a welcoming fluted entryway.",
    concept: "Functional Serenity — pairing clean geometric metalwork and high-gloss reflective surfaces with spiritual warmth and tailored cabinetry.",
    materials: [
      "Laser-Cut Geometric Steel",
      "Backlit Gayatri Mantra Acrylic",
      "High-Gloss White Shutter Finishes",
      "Warm Wall Sconces & Backlit Ceiling",
      "Polished Granite Countertops"
    ],
    area: "3,400 sq. ft.",
    clientType: "Family Residence"
  },
  {
    id: "signature-kitchen-living-suite",
    name: "Signature Modular Kitchen & Living Suite",
    location: "GNB Mall Showcase / Delhi NCR",
    category: "Residential",
    year: "2025",
    image: "/projects/kitchen-champagne-l-shape.jpg",
    gallery: [
      "/projects/kitchen-champagne-l-shape.jpg",
      "/projects/kitchen-matte-grey.jpg",
      "/projects/kitchen-gloss-white.jpg",
      "/projects/living-room-luxury.jpg",
      "/projects/bedroom-wardrobe-study.jpg"
    ],
    overview: "A comprehensive masterclass in custom cabinetry, ergonomic kitchen engineering, and integrated living solutions. Showcases three distinct kitchen typologies — champagne gloss, matte grey with warm display niches, and high-gloss white — paired with designer living consoles.",
    concept: "Ergonomic Illumination — integrating German Blum hardware, concealed profile lighting, anti-fingerprint surfaces, and seamless marble backsplashes.",
    materials: [
      "Champagne & Matte Acrylic",
      "Seamless Veined Marble Slabs",
      "Warm Recessed LED Profiles",
      "German Soft-Close Hardware",
      "Fluted Oak Accents"
    ],
    area: "3,800 sq. ft.",
    clientType: "Turnkey Fitout Showcase"
  }
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Consultation",
    desc: "Understanding your lifestyle, architectural requirements, spatial aspirations, and vision through an intimate design dialogue.",
    image: "/projects/foyer-shivangan-entry.jpg"
  },
  {
    number: "02",
    title: "Concept",
    desc: "Developing the overarching design direction, moodboards, material palettes, spatial flow diagrams, and preliminary 3D concepts.",
    image: "/projects/bedroom-wardrobe-study.jpg"
  },
  {
    number: "03",
    title: "Design Development",
    desc: "Photorealistic rendering, millimeter-precise architectural drawings, custom furniture design, and material sample approvals.",
    image: "/projects/kitchen-matte-grey.jpg"
  },
  {
    number: "04",
    title: "Execution",
    desc: "Coordinating master craftsmen, turnkey structural modifications, on-site quality audits, and seamless project management.",
    image: "/projects/fluted-hallway-doorway.jpg"
  },
  {
    number: "05",
    title: "Final Reveal",
    desc: "White-glove styling, soft furnishing placement, deep cleaning, and handing over a finished space that feels distinctly and unmistakably yours.",
    image: "/projects/living-room-luxury.jpg"
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
    id: "video-review",
    quote: "Jain Signature Studio LLP transformed our residence with millimeter precision. Their dedication to material perfection, Italian marble detailing, and seamless turnkey execution made the journey completely stress-free.",
    clientName: "Mr. omesh chaudhary & family ",
    role: "Villa Homeowner",
    location: "Raj Nagar Extension, Ghaziabad",
    projectType: "Full Villa Interior Handover",
    videoUrl: "/testimonials/client-review.mp4"
  },
  {
    id: "1",
    quote: "Jain Signature Studio LLP transformed our Ghaziabad duplex into an architectural masterpiece. Their dedication to material perfection and millimeter precision made the entire process effortless and truly enjoyable.",
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
    quote: "For our commercial space in GNB Mall, Jain Signature Studio LLP created an environment that communicates prestige and calm. The craftsmanship and bespoke joinery are world-class.",
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
    author: "Jain Signature Studio LLP Editorial",
    image: "/projects/dining-room-mirror-wall.jpg",
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
    image: "/projects/living-room-luxury.jpg",
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
    author: "Jain Signature Studio LLP",
    image: "/projects/grand-foyer-backlit-mirror.jpg",
    excerpt: "True luxury is quiet. Discover how generous whitespace, concealed storage, and restrained geometry elevate high-end living spaces.",
    content: [
      "Excessive ornamentation often masks poor spatial planning. Modern architectural luxury prioritizes negative space — allowing architectural forms, statement furniture, and curated artwork room to breathe.",
      "By concealing technical HVAC diffusers, electrical switches, and heavy storage behind seamless veneered wall panels, the eye experiences unbroken visual continuity."
    ]
  }
];

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: 'Living & Dining' | 'Modular Kitchens' | 'Bedrooms & Wardrobes' | 'Mandir & Pooja Units' | 'Foyers & Entrances';
  space: string;
  description: string;
  highlight: string;
  aspect?: 'portrait' | 'landscape' | 'square';
}

export const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: "living-room-luxury",
    url: "/gallery/living-room-luxury.jpg",
    title: "Grand Living Lounge & Fluted TV Console",
    category: "Living & Dining",
    space: "Living Room",
    description: "Multi-tiered crystal chandelier, vertical fluted wood accent wall with floating marble media ledge, plush velvet sofa, and classic wall boiserie mouldings.",
    highlight: "Acoustic Fluting & Crystal Chandelier",
    aspect: "portrait"
  },
  {
    id: "dining-room-mirror-wall",
    url: "/gallery/dining-room-mirror-wall.jpg",
    title: "Diamond-Beveled Mirror Dining Salon",
    category: "Living & Dining",
    space: "Dining Room",
    description: "Floor-to-ceiling diamond-beveled mirror wall flanked by walnut fluted pilasters, crystal drum chandelier, and gold-base marble dining setting.",
    highlight: "Diamond-Beveled Mirror Paneling",
    aspect: "portrait"
  },
  {
    id: "master-bedroom-floral",
    url: "/gallery/master-bedroom-floral.jpg",
    title: "Master Suite with Cherry Blossom Art & Boiserie",
    category: "Bedrooms & Wardrobes",
    space: "Master Suite",
    description: "European boiserie mouldings framing a scenic cherry blossom mural, channel-tufted vertical fluted headboard, and bespoke brass wall sconces.",
    highlight: "Botanical Mural & French Mouldings",
    aspect: "portrait"
  },
  {
    id: "bedroom-wardrobe-study",
    url: "/gallery/bedroom-wardrobe-study.jpg",
    title: "Curved Ceiling Bedroom with Wardrobe & Study",
    category: "Bedrooms & Wardrobes",
    space: "Contemporary Bedroom",
    description: "Sculpted curved cove ceiling with 3000K ambient glow, misty forest mural, and floor-to-ceiling wardrobe with integrated dressing mirror & cantilever study desk.",
    highlight: "Curved Cove Ceiling & Integrated Joinery",
    aspect: "portrait"
  },
  {
    id: "kitchen-champagne-l-shape",
    url: "/gallery/kitchen-champagne-l-shape.jpg",
    title: "L-Shaped Champagne Gloss Modular Kitchen",
    category: "Modular Kitchens",
    space: "Modular Kitchen",
    description: "Reflective champagne-finish acrylic cabinetry, recessed LED profile upper lighting, floor kickboard wash illumination, and seamless marble cladding.",
    highlight: "Champagne Acrylic & Dual Profile Lighting",
    aspect: "portrait"
  },
  {
    id: "kitchen-matte-grey",
    url: "/gallery/kitchen-matte-grey.jpg",
    title: "Minimalist Matte Grey Kitchen with Lit Niches",
    category: "Modular Kitchens",
    space: "Modular Kitchen",
    description: "Anti-fingerprint matte grey cabinetry, warm open-wood illuminated display cubbies, seamless slab marble backsplash, and modern integrated appliances.",
    highlight: "Warm Illuminated Display Niches",
    aspect: "portrait"
  },
  {
    id: "kitchen-gloss-white",
    url: "/gallery/kitchen-gloss-white.jpg",
    title: "High-Gloss White Modular Kitchen with Built-Ins",
    category: "Modular Kitchens",
    space: "Modular Kitchen",
    description: "Streamlined high-gloss white cabinetry featuring continuous warm under-cabinet strip LEDs, black granite counters, and integrated appliance tall units.",
    highlight: "Built-In Appliance Integration",
    aspect: "portrait"
  },
  {
    id: "mandir-lotus-illuminated",
    url: "/gallery/mandir-lotus-illuminated.jpg",
    title: "Sacred Lotus Sanctum with Om & Brass Bells",
    category: "Mandir & Pooja Units",
    space: "Pooja Room",
    description: "Backlit architectural archway framing 3D hand-painted lotus blossoms, sacred Om emblem, suspended solid brass temple bells, and illuminated floating marble drawers.",
    highlight: "Backlit Lotus Relief & Brass Temple Bells",
    aspect: "portrait"
  },
  {
    id: "mandir-krishna-carved-teak",
    url: "/gallery/mandir-krishna-carved-teak.jpg",
    title: "Heritage Hand-Carved Teakwood Krishna Mandir",
    category: "Mandir & Pooja Units",
    space: "Pooja Room",
    description: "Intricately carved Burma teak pillars and ornamental archway framing a white marble relief of Lord Krishna and Kamdhenu cow with warm vertical lighting niches.",
    highlight: "Hand-Carved Teakwood Pillars & Krishna Cow Relief",
    aspect: "portrait"
  },
  {
    id: "mandir-gayatri-mantra",
    url: "/gallery/mandir-gayatri-mantra.jpg",
    title: "Devotional Golden Gayatri Mantra Mandir",
    category: "Mandir & Pooja Units",
    space: "Pooja Room",
    description: "Illuminated golden arched panel featuring the sacred Gayatri Mantra and Kamdhenu cow, paired with a traditional carved wooden shikhar temple, white drawers, and glass display tower.",
    highlight: "Illuminated Gayatri Mantra Sanskrit Backdrop",
    aspect: "portrait"
  },
  {
    id: "grand-foyer-backlit-mirror",
    url: "/gallery/grand-foyer-backlit-mirror.jpg",
    title: "Grand Hallway with Backlit Halo Mirror & Floor Wash",
    category: "Foyers & Entrances",
    space: "Entrance Foyer",
    description: "Dramatic long entryway featuring a circular backlit halo mirror, natural textured split-stone wall, floating timber console with greenery, continuous perimeter floor cove LEDs, and custom designer entrance door.",
    highlight: "Circular Halo Mirror & Floor Perimeter Wash",
    aspect: "portrait"
  },
  {
    id: "fluted-hallway-doorway",
    url: "/gallery/fluted-hallway-doorway.jpg",
    title: "Fluted Wood Accent Wall with Concealed Edge Lighting",
    category: "Foyers & Entrances",
    space: "Transitional Hallway",
    description: "Floor-to-ceiling vertical fluted wall paneling highlighted by concealed warm edge lighting, paired with a modern dark wood flush door featuring a full-height glass insert and matte black pull handle.",
    highlight: "Continuous Vertical Fluting & Edge Glow",
    aspect: "portrait"
  },
  {
    id: "foyer-shivangan-entry",
    url: "/gallery/foyer-shivangan-entry.jpg",
    title: "Custom Jali Entry Door & Fluted Foyer Console",
    category: "Foyers & Entrances",
    space: "Entrance Foyer",
    description: "Turnkey residence entrance ('Shivangan') featuring an intricate geometric jali door, vertical wood slats with cascading white accents, pendant chandelier, and modular shoe console with seating bench.",
    highlight: "Custom Jali Cut Door & Cascading Slat Accents",
    aspect: "portrait"
  },
  {
    id: "foyer-safety-grill-door",
    url: "/gallery/foyer-safety-grill-door.jpg",
    title: "Designer Geometric Safety Door & Foyer Sconces",
    category: "Foyers & Entrances",
    space: "Main Entrance",
    description: "High-security designer metal grill door with modern oval motif, fluted wood wall with dual-beam accent sconces, backlit lattice ceiling, and integrated shoe storage cabinet.",
    highlight: "Designer Metal Grill & Backlit Ceiling Lattice",
    aspect: "portrait"
  }
];
