
import type { ComponentType } from "react";
import { Briefcase, BarChart3, Lightbulb, TrendingUp, HeartHandshake, Megaphone, Search, Locate, Factory, Cpu, Stethoscope, Building, ShoppingCart, Landmark, Wheat } from 'lucide-react';

export interface NavItem {
  title: string;
  href: string;
  subItems?: NavItem[];
}

export const navItems = (t: (key: string) => string): NavItem[] => [
  { title: t('home'), href: "/" },
  { title: t('aboutUs'), href: "/about" },
  { title: t('whyIndia'), href: "/why-india" },
  { 
    title: t('ourServices'), 
    href: "/our-services",
    subItems: [
      { title: t('servicesSubNav'), href: "/our-services#services" },
      { title: t('eventsSubNav'), href: "/our-services#events" },
      { title: t('supportSubNav'), href: "/our-services#support" },
      { title: t('educationSubNav'), href: "/our-services#education" },
    ]
  },
  { title: t('keySectors'), href: "/sectors" },
  { title: t('blog'), href: "/blog" },
  { title: t('contactUs'), href: "/contact" },
];

export interface Service {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  Icon: ComponentType<{ className?: string }>;
  image: string;
}

export const services: Omit<Service, 'title'|'description'|'longDescription'> & {title: string, description: string, longDescription: string}[] = [
  {
    slug: "manufacturing-engineering",
    title: "manufacturingTitle",
    description: "manufacturingDesc",
    longDescription: "manufacturingLongDesc",
    Icon: Factory,
    image: "service-manufacturing",
  },
  {
    slug: "technology-saas",
    title: "technologyTitle",
    description: "technologyDesc",
    longDescription: "technologyLongDesc",
    Icon: Cpu,
    image: "service-technology",
  },
  {
    slug: "healthcare-pharma",
    title: "healthcareTitle",
    description: "healthcareDesc",
    longDescription: "healthcareLongDesc",
    Icon: Stethoscope,
    image: "service-healthcare",
  },
  {
    slug: "infrastructure-renewables",
    title: "infrastructureTitle",
    description: "infrastructureDesc",
    longDescription: "infrastructureLongDesc",
    Icon: Building,
    image: "service-infrastructure",
  },
  {
    slug: "retail-ecommerce",
    title: "retailTitle",
    description: "retailDesc",
    longDescription: "retailLongDesc",
    Icon: ShoppingCart,
    image: "service-retail",
  },
  {
    slug: "fintech",
    title: "fintechTitle",
    description: "fintechDesc",
    longDescription: "fintechLongDesc",
    Icon: Landmark,
    image: "service-fintech",
  },
  {
    slug: "agro-processing",
    title: "agroTitle",
    description: "agroDesc",
    longDescription: "agroLongDesc",
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
    bio: "bioRahulMishra",
    image: "team-member-5",
  },
  {
    name: "Shri Lokendra Rana",
    role: "Executive Director",
    bio: "bioLokendraRana",
    image: "team-member-6",
  },
  {
    name: "Shri Surajit kalita",
    role: "INTERNATIONAL TRADE & BUSINESS CONSULTANT",
    bio: "bioSurajitKalita",
    image: "team-member-7",
  },
  {
    name: "Shri Manisha Mondal Tripathi",
    role: "JAPAN TRADE & BUSINESS CONSULTANT",
    bio: "bioManishaMondalTripathi",
    image: "team-member-8",
  },
];
