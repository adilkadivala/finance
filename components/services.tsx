"use client";

import {
  BarChart2,
  Bell,
  Brain,
  LineChart,
  Search,
  Target,
} from "lucide-react";
import { ServiceCard } from "./service-card";

const features = [
  {
    title: "User-Friendly Dashboard",
    description:
      "Perform complex SEO audits and optimizations with a single click.",
    icon: BarChart2,
  },
  {
    title: "Visual Reports",
    description: "Visual insights into your site's performance.",
    icon: LineChart,
  },
  {
    title: "SEO Goal Setting",
    description: "Helps you set and achieve SEO goals with guided assistance.",
    icon: Target,
  },
  {
    title: "Content Evaluation",
    description: "Simple corrections for immediate improvements.",
    icon: Search,
  },
  {
    title: "Smart Keyword Generator",
    description: "Automatic suggestions and the best keywords to target.",
    icon: Brain,
  },
  {
    title: "Automated Alerts",
    description:
      "Automatic notifications about your SEO health, including quick fixes.",
    icon: Bell,
  },
];

const Services = () => {
  return (
    <div
      id="features"
      className="py-24 h-screen bg-gradient-to-b from-background/50 to-background"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Elevate your SEO efforts.
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Harness the power of AI, making search engine optimization intuitive
          and effective for all skill levels.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <ServiceCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
