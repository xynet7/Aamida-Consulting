
import type { ComponentType } from "react";
import { Briefcase, BarChart3, Lightbulb, TrendingUp, HeartHandshake, Megaphone, Search, Locate, Factory, Cpu, Stethoscope, Building, ShoppingCart, Landmark, Wheat } from 'lucide-react';

export interface NavItem {
  title: string;
  href: string;
  subItems?: NavItem[];
}

export const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Why India", href: "/why-india" },
  { 
    title: "Our Services", 
    href: "/our-services",
    subItems: [
      { title: "Services", href: "/our-services#services" },
      { title: "Events", href: "/our-services#events" },
      { title: "Support", href: "/our-services#support" },
      { title: "Education", href: "/our-services#education" },
    ]
  },
  { title: "Key Sectors", href: "/sectors" },
  { title: "Blog", href: "/blog" },
  { title: "Contact Us", href: "/contact" },
];

export interface Service {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  Icon: ComponentType<{ className?: string }>;
  image: string;
}

export const services: Service[] = [
  {
    slug: "manufacturing-engineering",
    title: "Manufacturing & Engineering",
    description: "India is poised to become the world's factory. We assist clients in navigating \"Make in India,\" accessing PLI schemes, and setting up greenfield facilities.",
    longDescription: "The world is a global factory. We assist clients in navigating manufacturing initiatives, accessing PLI schemes, and setting up greenfield facilities. Our expertise helps you capitalize on global manufacturing prowess.",
    Icon: Factory,
    image: "service-manufacturing",
  },
  {
    slug: "technology-saas",
    title: "Technology & SaaS",
    description: "Leveraging India's massive talent pool to establish Global Capability Centers (GCCs) while navigating complex data privacy regulations.",
    longDescription: "Leveraging massive digital infrastructure and talent pools. We help tech firms establish Global Capability Centers (GCCs) and navigate data privacy regulations, unlocking innovation and growth.",
    Icon: Cpu,
    image: "service-technology",
  },
  {
    slug: "healthcare-pharma",
    title: "Healthcare & Pharma",
    description: "Guiding companies through the regulatory framework of the CDSCO and state health departments, covering everything from medical devices to biotech.",
    longDescription: "From medical devices to biotechnology, we guide companies through complex regulatory frameworks. We ensure your entry into new healthcare markets is smooth and compliant.",
    Icon: Stethoscope,
    image: "service-healthcare",
  },
  {
    slug: "infrastructure-renewables",
    title: "Infrastructure & Renewables",
    description: "Facilitating investments in India's energy transition, including solar, wind, and the emerging Green Hydrogen landscape.",
    longDescription: "Facilitating investments in the massive global push for roads, ports, and green energy transition, including solar and green hydrogen initiatives. We help you be a part of a sustainable future.",
    Icon: Building,
    image: "service-infrastructure",
  },
  {
    slug: "retail-ecommerce",
    title: "Retail & E-commerce",
    description: "Navigating FDI norms in multi-brand retail and assisting with supply chain integration for the Indian consumer market.",
    longDescription: "Tapping into one of the world's largest and fastest-growing consumer markets. We provide expert guidance on FDI regulations, supply chain setup, and digital strategies to succeed in Indian retail and e-commerce.",
    Icon: ShoppingCart,
    image: "service-retail",
  },
  {
    slug: "fintech",
    title: "FinTech",
    description: "Navigating the dynamic Indian FinTech landscape, from digital payments to regulatory compliance.",
    longDescription: "The Indian FinTech ecosystem is a world leader in innovation. We help you navigate this dynamic landscape, from understanding the UPI stack to lending regulations, ensuring you can capitalize on the digital finance revolution.",
    Icon: Landmark,
    image: "service-fintech",
  },
  {
    slug: "agro-processing",
    title: "Agro-processing",
    description: "Connecting global businesses to India's agricultural heartlands and food processing opportunities.",
    longDescription: "Connecting global businesses to India's vast agricultural heartlands. We assist with navigating food processing regulations, building supply chains, and leveraging government incentives to tap into this high-potential sector.",
    Icon: Wheat,
    image: "service-agro",
  },
];


export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "Aamida Consulting transformed our approach to the market. Their insights were invaluable, and their team was a pleasure to work with. We've seen a 40% increase in revenue since our engagement.",
    name: "John Doe",
    role: "CEO",
    company: "Innovate Inc.",
    image: "testimonial-1",
  },
  {
    quote: "The strategic guidance provided by Aamida was second to none. They helped us navigate a complex merger, and the outcome exceeded all our expectations. Truly a world-class team.",
    name: "Jane Smith",
    role: "COO",
    company: "FutureTech",
    image: "testimonial-2",
  },
  {
    quote: "Their expertise in operational efficiency is remarkable. We were able to streamline our supply chain and reduce costs by 25% in just six months. I highly recommend Aamida Consulting.",
    name: "Samuel Green",
    role: "VP of Operations",
    company: "Logistics Pro",
    image: "testimonial-3",
  },
];

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Shri Rahul Mishra",
    role: "Founding and Manager Director",
    bio: "Shri Rahul Mishra is working as Vice President of SEWA Foundation and Managing Director of Aamida Infotech. Mr. Rahul has overall strategic and operational responsibility, including setting the vision, creating and implementing strategy, and driving growth. He has over 18 years of experience in international business development, operations, and consulting. He has started Aamida Consulting Services in 2011, and has been instrumental in growing ACS in PAN India since then. Mr.Rahul is passionate about Education and Manufacturing Industry and Information Technologies. He strongly believes in creating authentic and mutually significant long term relationships with customers. Prior to start ACS, Mr.Rahul spent 12 years with several IT industries such as Oracle, MothersonSumi Infotech, Four soft, IBM, Macfee, Nucleus Software, SAP Labs. Rahul holds an MBA in International Marketing from ICFAI, Hyderabad, India. Currently he is associated with Japan Foundation as well.",
    image: "team-member-5",
  },
  {
    name: "Shri Lokendra Rana",
    role: "Executive Director",
    bio: "Shri Lokendra Rana the Executive Director (International Sales and Marketing) of the company, graduated and post-graduated, Bachelor of Arts in English, Economics, and Sociology and completed his masters in English Literature. Additional to the academic degrees, he has done Japanese Language and obtained the JLPT certification Level-3 in the year 2005 from the Japan Foundation and Japan Educational Exchanges and Services. He did his Post Graduate Diploma in International Business and did his MBA in Marketing, He also did a certificate course in C, C++, Linux, Unix, and also a part of the core team to get implement SAP S4/HANA implementation in his company at Ethiopia Plant. He also served in Bangladesh as Head Operations (CEO) and the last assignment was in Ethiopia, Africa in the capacity of General Manager. He has won the Best Team Performance award from Raymond’s in 2013 and has vast work experience Internationally & Nationally in various companies. He also specialized skill of traditional North Indian farming and has over two decades of experience. He has a good knowledge of the Indian share market and cryptocurrency trade. He did inceptions of two plants in his career from the Greenfield project to commissioning. Mr. Rana has joined ACS as Executive Director of Aamida Infotech.",
    image: "team-member-6",
  },
  {
    name: "Shri Surajit kalita",
    role: "INTERNATIONAL TRADE & BUSINESS CONSULTANT",
    bio: "Shri Surajit Kalita is working for Aamida Consulting Services (North East Region) as (International Trade & Business Consultant). With 13+ years of experience in consulting, Mr Surajit Kalita has also vast experience in concept management, strategic management and planning. He have served as an advisor, coordinator and negotiator with several organisation. Surajit has started his career as a consultant and contributed in various sectors like education, sports, corporate service industry in Bangalore, Kolkata and Delhi. He has also worked with the International MBNA Bank located in Canada which has merged with Bank of America in B to B process from IT City Bangalore India. Later on he gained the experiences by working with an International Company called RE/MAX located in USA & Canada as a Franchise sales Consultant .",
    image: "team-member-7",
  },
];
