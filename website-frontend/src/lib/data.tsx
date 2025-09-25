import { Check } from "lucide-react";
import { GridCardProps, Location, MenuSection, WhyGtlsItem } from "./types";

export const serviceData: GridCardProps[] = [
  {
    id: 1,
    title: "Transport",
    icon: "/svgs/transport.svg",
    description: "Building modern, responsive websites.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    footer: "Learn More",
  },
  {
    id: 2,
    icon: "/svgs/warehousing.svg",
    title: "Warehousing",
    description: "Creating native and cross-platform mobile apps.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    footer: "Get a Quote",
  },
  {
    id: 3,
    icon: "/svgs/distribution.svg",
    title: "Distribution",
    description: "Creating native and cross-platform mobile apps.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    footer: "Get a Quote",
  },
  {
    id: 4,
    icon: "/svgs/ftl.svg",
    title: "FTL & LTL Solutions",
    description: "Creating native and cross-platform mobile apps.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    footer: "Get a Quote",
  },
];

export const footerMenu: MenuSection[] = [
  {
    title: "Quick Links",
    items: [
      { label: "Home", link: "/" },
      { label: "About Us", link: "/about" },
      { label: "Real Estate", link: "/real-estate" },
      { label: "Contact Us", link: "/contact" },
    ],
  },
  {
    title: "Our Services",
    items: [
      { label: "Custom Property", link: "/services/custom-property" },
      { label: "Property Management", link: "/services/property-management" },
      { label: "Security Guarantee", link: "/services/security" },
      { label: "Sketch House", link: "/services/sketch-house" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Return Policy", link: "/legal/return-policy" },
      { label: "Shipping Policy", link: "/legal/shipping-policy" },
      { label: "Privacy Policy", link: "/legal/privacy-policy" },
      { label: "Terms of Services", link: "/legal/terms" },
    ],
  },
];

export const locations: Location[] = [
  {
    city: "Sydney",
    street: "3B Inglis Road",
    suburb: "Ingleburn",
    state: "NSW",
    postalCode: "2565",
  },
  {
    city: "Melbourne",
    street: "60-70 Monash Drive",
    suburb: "Dandenong South",
    state: "VIC",
    postalCode: "3175",
  },
  {
    city: "Melbourne2",
    street: "60-70 Monash Drive",
    suburb: "Dandenong South",
    state: "VIC",
    postalCode: "3175",
  },
];

export const WhyGtlsData: WhyGtlsItem[] = [
  {
    title: "Sydney",
    picture: "/svgs/ftl.svg",
  },
  {
    title: "Melbourne",
    picture: "/svgs/ftl.svg",
  },
  {
    title: "Melbourne2",
    picture: "/svgs/ftl.svg",
  },
  {
    title: "Sydney",
    picture: "/svgs/ftl.svg",
  },
  {
    title: "Melbourne",
    picture: "/svgs/ftl.svg",
  },
  {
    title: "Melbourne2",
    picture: "/svgs/ftl.svg",
  },
  {
    title: "Melbourne2",
    picture: "/svgs/ftl.svg",
  },
  {
    title: "Melbourne2",
    picture: "/svgs/ftl.svg",
  },
];

export const CustomerHubData = [
  {
    imageSrc: "/svgs/gtrs.svg",
    title: "GTRS",
    subtitle: "Gold Tiger Reporting System",
    list: [
      { icon: <Check />, description: "Real-time dashboard for shipment visibility" },
      { icon: <Check />, description: "Access KPI, transport, and RDD reports" },
      { icon: <Check />, description: "Analyze delivery trends and performance" },
    ],
  },
  {
    imageSrc: "/svgs/terms&conditions.svg",
    title: "Terms & Conditions",
    subtitle: "Know Your Ground Rules",
    list: [
      { icon: <Check />, description: "Shipping liability terms" },
      { icon: <Check />, description: "Handling & delivery policies" },
      { icon: <Check />, description: "Dispute resolution protocols" },
    ],
  },
  {
    imageSrc: "/svgs/faq.svg",
    title: "FAQ",
    subtitle: "Quick Answers to Common Questions",
    list: [
      { icon: <Check />, description: "Delivery & tracking" },
      { icon: <Check />, description: "Account access" },
      { icon: <Check />, description: "Documentation & POD retrieval" },
    ],
  },
  {
    imageSrc: "/svgs/portal.svg",
    title: "Portal Login",
    subtitle: "Manage Your Account Online",
    list: [
      { icon: <Check />, description: "Real-time dashboard for shipment visibility" },
      { icon: <Check />, description: "Access KPI, transport, and RDD reports" },
      { icon: <Check />, description: "Analyze delivery trends and performance" },
    ],
  },
  {
    imageSrc: "/svgs/lock.svg",
    title: "Self-Service Portal",
    subtitle: "Independence Made Easy",
    list: [
      { icon: <Check />, description: "Update account information" },
      { icon: <Check />, description: "Submit support tickets" },
      { icon: <Check />, description: "Retrieve documents anytime" },
    ],
  },
];

export const NewsData = [
  {
    title: "Gold Tiger Expands Fleet with Eco-Friendly Trucks",
    description:
      "In a bold move towards sustainability, Gold Tiger Logistics Solutions has added 50 new eco-friendly trucks to its fleet, reducing carbon emissions and promoting greener logistics practices.",
    imageSrc: "/webp/3movers.webp",
  },
  {
    title: "Gold Tiger Expands Fleet with Eco-Friendly Trucks",
    description:
      "In a bold move towards sustainability, Gold Tiger Logistics Solutions has added 50 new eco-friendly trucks to its fleet, reducing carbon emissions and promoting greener logistics practices.",
    imageSrc: "/webp/3movers.webp",
  },
  {
    title: "Gold Tiger Expands Fleet with Eco-Friendly Trucks",
    description:
      "In a bold move towards sustainability, Gold Tiger Logistics Solutions has added 50 new eco-friendly trucks to its fleet, reducing carbon emissions and promoting greener logistics practices.",
    imageSrc: "/webp/3movers.webp",
  },
  {
    title: "Gold Tiger Expands Fleet with Eco-Friendly Trucks",
    description:
      "In a bold move towards sustainability, Gold Tiger Logistics Solutions has added 50 new eco-friendly trucks to its fleet, reducing carbon emissions and promoting greener logistics practices.",
    imageSrc: "/webp/3movers.webp",
  },
  {
    title: "Gold Tiger Expands Fleet with Eco-Friendly Trucks",
    description:
      "In a bold move towards sustainability, Gold Tiger Logistics Solutions has added 50 new eco-friendly trucks to its fleet, reducing carbon emissions and promoting greener logistics practices.",
    imageSrc: "/webp/3movers.webp",
  },
  {
    title: "Gold Tiger Expands Fleet with Eco-Friendly Trucks",
    description:
      "In a bold move towards sustainability, Gold Tiger Logistics Solutions has added 50 new eco-friendly trucks to its fleet, reducing carbon emissions and promoting greener logistics practices.",
    imageSrc: "/webp/3movers.webp",
  },
];