import type { ComponentType } from "react";
import { Briefcase, BarChart3, Lightbulb, TrendingUp, HeartHandshake, Megaphone, Search, Locate, Factory, Cpu, Stethoscope, Building, ShoppingCart, Landmark, Wheat } from 'lucide-react';

export interface NavItem {
  title: string;
  href: string;
}

export const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "India Opportunity", href: "/services" },
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
    description: "Assisting clients in navigating the 'Make in India' initiative, accessing PLI schemes, and setting up greenfield facilities.",
    longDescription: "India is poised to become the world's factory. We assist clients in navigating the 'Make in India' initiative, accessing PLI schemes, and setting up greenfield facilities. Our expertise helps you capitalize on India's manufacturing prowess.",
    Icon: Factory,
    image: "service-manufacturing",
  },
  {
    slug: "technology-saas",
    title: "Technology & SaaS",
    description: "Leveraging India's massive digital infrastructure and talent pool for tech firms and Global Capability Centers (GCCs).",
    longDescription: "Leveraging India's massive digital infrastructure and talent pool. We help tech firms establish Global Capability Centers (GCCs) and navigate data privacy regulations, unlocking innovation and growth.",
    Icon: Cpu,
    image: "service-technology",
  },
  {
    slug: "healthcare-pharma",
    title: "Healthcare & Pharma",
    description: "Guiding companies through the complex regulatory framework of the CDSCO and state health departments.",
    longDescription: "From medical devices to biotechnology, we guide companies through the complex regulatory framework of the CDSCO and state health departments. We ensure your entry into India's healthcare market is smooth and compliant.",
    Icon: Stethoscope,
    image: "service-healthcare",
  },
  {
    slug: "infrastructure-renewables",
    title: "Infrastructure & Renewables",
    description: "Facilitating investments in India's massive push for roads, ports, and green energy transition.",
    longDescription: "Facilitating investments in India's massive push for roads, ports, and green energy transition, including solar and green hydrogen initiatives. We help you be a part of India's sustainable future.",
    Icon: Building,
    image: "service-infrastructure",
  },
  {
    slug: "retail-ecommerce",
    title: "Retail & E-commerce",
    description: "Tapping into one of the world's largest consumer markets with tailored retail and e-commerce strategies.",
    longDescription: "Tapping into one of the world's largest and fastest-growing consumer markets. We provide expert guidance on FDI regulations, supply chain setup, and digital strategies to succeed in Indian retail and e-commerce.",
    Icon: ShoppingCart,
    image: "service-retail",
  },
  {
    slug: "fintech",
    title: "FinTech",
    description: "Navigating the dynamic Indian FinTech landscape, from UPI to digital lending and regulatory compliance.",
    longDescription: "India's FinTech ecosystem is a global leader in innovation. We help you navigate the dynamic landscape, from understanding the UPI stack to digital lending regulations, ensuring you can capitalize on the digital payment revolution.",
    Icon: Landmark,
    image: "service-fintech",
  },
  {
    slug: "agro-processing",
    title: "Agro-processing",
    description: "Connecting global businesses to India's agricultural heartland and food processing opportunities.",
    longDescription: "Connecting global businesses to India's vast agricultural heartland. We assist with navigating food processing regulations, building supply chains, and leveraging government incentives to tap into this high-potential sector.",
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
