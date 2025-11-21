import type { ComponentType } from "react";
import { Briefcase, BarChart3, Lightbulb, TrendingUp, HeartHandshake, Megaphone, Search, Locate } from 'lucide-react';

export interface NavItem {
  title: string;
  href: string;
}

export const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Sectors", href: "/services" },
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
    slug: "strategic-consulting",
    title: "Market Entry Strategy",
    description: "Bespoke roadmap designed for your specific product and industry vertical.",
    longDescription: "Our strategic consulting services are designed to help you navigate market complexities and achieve sustainable growth. We work with you to develop a clear vision and actionable roadmap, from market entry and product positioning to competitive analysis and long-term planning. Our data-driven insights empower you to make informed decisions that create lasting value.",
    Icon: Briefcase,
    image: "service-strategy",
  },
  {
    slug: "financial-advisory",
    title: "Regulatory & Compliance",
    description: "Navigating central and state-level approvals with precision and speed.",
    longDescription: "We provide comprehensive financial advisory services to support your most critical business decisions. Whether you're considering a merger or acquisition, need help with capital raising, or require sophisticated financial modeling, our team offers the expertise to optimize your financial performance and mitigate risk.",
    Icon: Search,
    image: "service-finance",
  },
  {
    slug: "operations-improvement",
    title: "Location & Partner Search",
    description: "Identifying the right geography and the right local partners for joint ventures.",
    longDescription: "Our operations improvement services focus on boosting productivity and streamlining processes. We analyze your current operations to identify bottlenecks and implement solutions that enhance efficiency, reduce costs, and improve quality. From supply chain management to organizational design, we help you build a more agile and effective business.",
    Icon: Locate,
    image: "service-operations",
  },
  {
    slug: "technology-innovation",
    title: "Technology & Innovation",
    description: "Leveraging technology to create competitive advantages.",
    longDescription: "In a digital-first world, leveraging the right technology is key to success. Our technology and innovation consultants help you harness the power of digital transformation, from developing a tech strategy to implementing cutting-edge solutions like AI and data analytics. We ensure your technology investments align with your business goals.",
    Icon: Lightbulb,
    image: "service-technology",
  },
  {
    slug: "marketing-strategy",
    title: "Marketing Strategy",
    description: "Comprehensive digital marketing strategies to grow your online presence.",
    longDescription: "We offer a full suite of digital marketing services, including social media marketing, content marketing, and pay-per-click advertising. Our team works with you to create a strategy that increases brand awareness, drives traffic, and generates leads.",
    Icon: Megaphone,
    image: "service-marketing",
  },
  {
    slug: "customer-experience",
    title: "Customer Experience",
    description: "Creating seamless and engaging customer journeys that build loyalty.",
    longDescription: "Understanding and enhancing the customer experience is crucial for retention and growth. We help you map the customer journey, gather feedback, and implement strategies to create positive, memorable interactions at every touchpoint. By putting your customers first, you can build lasting loyalty and a strong brand reputation.",
    Icon: HeartHandshake,
    image: "service-customer-experience",
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
