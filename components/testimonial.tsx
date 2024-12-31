"use client";

import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "This product has completely transformed how I manage my projects and deadlines.",
    author: "Talia Taylor",
    role: "Digital Marketing Director @ Quantum",
    image:
      "https://i.pinimg.com/474x/59/91/ab/5991ab031c825e28e5a0e9a88d9af02d.jpg",
  },
  {
    quote:
      "The AI-powered insights have given us a competitive edge in our market.",
    author: "Marcus Chen",
    role: "SEO Specialist @ TechFlow",
    image:
      "https://i.pinimg.com/736x/ca/cb/19/cacb196590d8f40c55d825902e8ab733.jpg",
  },
  {
    quote:
      "Implementing this solution doubled our organic traffic in just 3 months.",
    author: "Sarah Mitchell",
    role: "Growth Lead @ Innovate",
    image:
      "https://i.pinimg.com/474x/40/08/b9/4008b900de9d0f325fdb856f352058f4.jpg",
  },
];

export default function Testimonials() {
  const [visibleTestimonials, setVisibleTestimonials] = useState<Testimonial[]>(
    []
  );

  // Duplicate testimonials to create an infinite scrolling effect
  useEffect(() => {
    setVisibleTestimonials([...testimonials, ...testimonials]);
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center overflow-hidden"
      id="testimonials"
    >
      <div className="w-full max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-black text-center mb-12">
          What People Are Saying
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 space-y-4 flex flex-col"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full border-2 border-gray-300"
                />
                <div>
                  <p className="font-semibold text-gray-800">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                <span className="text-sm text-blue-500">#Testimonial</span>
                <span className="text-sm text-gray-400">1d ago</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
