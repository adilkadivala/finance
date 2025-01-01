"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Marquee from "react-fast-marquee";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "What a fantastic AI! I just love it. It has completely transformed the way I approach problems and develop solutions.",
    author: "Alex Thompson",
    role: "Software Engineer",
  },
  {
    quote:
      "Absolutely revolutionary, a game-changer for our industry. It has streamlined our processes and enhanced our productivity.",
    author: "Sarah Chen",
    role: "Product Manager",
  },
  {
    quote:
      "The efficiency it brings is unmatched. It's a vital tool that has helped us grow and improve our product development.",
    author: "Michael Rodriguez",
    role: "Tech Lead",
  },
  {
    quote:
      "It has saved us countless hours. Highly recommended for anyone looking to enhance their efficiency and productivity.",
    author: "Emma Davis",
    role: "CTO",
  },
  {
    quote:
      "An exceptional tool that has revolutionized our workflow. The results speak for themselves.",
    author: "James Wilson",
    role: "Developer",
  },
  {
    quote:
      "The best investment we've made this year. It's improved our team's productivity tremendously.",
    author: "Lisa Zhang",
    role: "Engineering Manager",
  },
];

// Duplicate the testimonials array to ensure continuous loop
const duplicatedTestimonials = [...testimonials, ...testimonials];

export default function TestimonialsMarquee() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div id="testimonials" className="w-full overflow-hidden py-12">
      <div className="text-center mb-12 text-slate-600">
        <h2 className="text-3xl font-bold mb-4">
          What people says to Finance
        </h2>
        <p className="text-muted-foreground">
          Our platform is used by serial entrepreneurs and overachievers.
        </p>
      </div>

      <div className="relative p-2 md:p-5">
        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={true}
          className="py-4"
        >
          <div className="flex gap-4 px-4">
            {duplicatedTestimonials.map((testimonial, idx) => (
              <Card
                key={idx}
                className={cn(
                  "relative transition-all duration-700 ease-out cursor-pointer w-[300px]",
                  hoveredIndex === idx ? "scale-[1.02]" : "",
                  hoveredIndex !== null && hoveredIndex !== idx
                    ? "scale-[0.97] opacity-50"
                    : ""
                )}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <CardContent className="p-6">
                  <blockquote className="space-y-4">
                    <p className="text-muted-foreground">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <footer>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </footer>
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </Marquee>

        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={true}
          direction="right"
          className="py-4"
        >
          <div className="flex gap-4 px-4">
            {duplicatedTestimonials.map((testimonial, idx) => (
              <Card
                key={idx}
                className={cn(
                  "relative transition-all duration-700 ease-out cursor-pointer w-[300px]",
                  hoveredIndex === idx ? "scale-[1.02]" : "",
                  hoveredIndex !== null && hoveredIndex !== idx
                    ? "scale-[0.97] opacity-50"
                    : ""
                )}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <CardContent className="p-6">
                  <blockquote className="space-y-4">
                    <p className="text-muted-foreground">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <footer>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </footer>
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}
