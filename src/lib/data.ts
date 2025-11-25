
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
      { title: "About Us", href: "/our-services#about" },
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
    name: "Dr. Alisha Khan",
    role: "Founder & CEO",
    bio: "With over 20 years of experience in global business strategy, Dr. Khan leads Aamida with a passion for innovation and client success. Her vision is to empower businesses to achieve their full potential.",
    image: "team-member-1",
  },
  {
    name: "Michael Chen",
    role: "Chief Operating Officer",
    bio: "Michael is an expert in operational excellence and organizational transformation. He ensures that Aamida's clients receive seamless, efficient, and impactful consulting services.",
    image: "team-member-2",
  },
  {
    name: "Priya Sharma",
    role: "Lead Strategist",
    bio: "Priya specializes in market entry and growth strategies. Her analytical prowess and creative thinking help clients uncover new opportunities and navigate competitive landscapes.",
    image: "team-member-3",
  },
  {
    name: "David Lee",
    role: "Head of Financial Advisory",
    bio: "A seasoned financial expert, David provides guidance on complex financial matters, from M&A to risk management. He is dedicated to ensuring the financial health of our clients.",
    image: "team-member-4",
  },
];
