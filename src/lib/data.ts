import type { ComponentType } from "react";
import { Briefcase, BarChart3, Lightbulb, TrendingUp, HeartHandshake, Megaphone, MonitorSmartphone, ShoppingCart, PenTool, Search, Bot } from 'lucide-react';

export interface NavItem {
  title: string;
  href: string;
}

export const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Contact", href: "/contact" },
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
    slug: "web-development",
    title: "Web Development",
    description: "Building responsive and scalable web applications to meet your business needs.",
    longDescription: "Our web development team creates dynamic, high-performance websites and web applications. We specialize in both front-end and back-end development, ensuring a seamless user experience and robust functionality. From corporate websites to complex web portals, we deliver solutions that drive business growth.",
    Icon: Briefcase,
    image: "service-web-dev",
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    description: "Creating intuitive and high-performance mobile apps for iOS and Android.",
    longDescription: "We build native and cross-platform mobile applications that provide engaging user experiences. Our mobile app developers are experts in the latest technologies to bring your ideas to life, whether it's for a startup or a large enterprise.",
    Icon: MonitorSmartphone,
    image: "service-mobile-dev",
  },
  {
    slug: "ecommerce-development",
    title: "E-commerce Development",
    description: "Developing powerful e-commerce solutions to help you sell online.",
    longDescription: "Our e-commerce solutions are designed to provide a secure and scalable platform for your online business. We offer custom features, payment gateway integration, and a user-friendly content management system to help you manage your products and sales effectively.",
    Icon: ShoppingCart,
    image: "service-ecommerce",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description: "Designing beautiful, user-friendly interfaces that your customers will love.",
    longDescription: "Our UI/UX design services focus on creating intuitive and visually appealing digital products. We conduct user research, create wireframes and prototypes, and perform usability testing to ensure that your website or application is easy to use and provides a great user experience.",
    Icon: PenTool,
    image: "service-ui-ux",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies to grow your online presence.",
    longDescription: "We offer a full suite of digital marketing services, including social media marketing, content marketing, and pay-per-click advertising. Our team works with you to create a strategy that increases brand awareness, drives traffic, and generates leads.",
    Icon: Megaphone,
    image: "service-marketing",
  },
  {
    slug: "seo",
    title: "SEO",
    description: "Improving your search engine rankings to attract more organic traffic.",
    longDescription: "Our SEO experts use proven techniques to improve your website's visibility in search engine results. We focus on on-page SEO, off-page SEO, and technical SEO to drive long-term organic growth and help you reach your target audience.",
    Icon: Search,
    image: "service-seo",
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
    quote: "Aamida Infotech transformed our approach to the market. Their insights were invaluable, and their team was a pleasure to work with. We've seen a 40% increase in revenue since our engagement.",
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
    quote: "Their expertise in operational efficiency is remarkable. We were able to streamline our supply chain and reduce costs by 25% in just six months. I highly recommend Aamida Infotech.",
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