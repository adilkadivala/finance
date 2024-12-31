"use client";

import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  className = "",
}: FeatureCardProps) {
  return (
    <div
      className={`p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 ${className}`}
    >
      <Icon className="w-10 h-10 text-purple-400 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
