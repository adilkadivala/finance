"use client";

import { Bitcoin, DollarSign, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaRupeeSign } from "react-icons/fa";

function HeroSection() {
  const floatingElements = [
    {
      id: 1,
      left: 10,
      top: 40,
      animation: "spin",
      icon: (
        <DollarSign className="w-8 h-8 text-rose-500 sm:inline-block hidden" />
      ),
    },
    {
      id: 2,
      left: 20,
      top: 90,
      animation: "bounce",
      icon: (
        <FaRupeeSign className="w-8 h-8 text-indigo-500 hidden sm:inline-block" />
      ),
    },
    {
      id: 3,
      left: 85,
      top: 70,
      animation: "pulse",
      icon: (
        <Bitcoin className="w-8 h-8 text-green-500 hidden sm:inline-block" />
      ),
    },
  ];

  return (
    <div className="h-[40rem] w-full bg-white bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div id="hero" className="w-full relative min-h-screen ">
        {/* Animated background gradient */}
        <div className="relative container mx-auto  pb-24 sm:pt-44 sm:pb-32 ">
          {/* Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/70 text-primary-foreground mb-8 border border-primary/20">
              <Sparkles className="h-4 w-4 mr-2 animate-spin text-rose-300" />
              <span>Transforming Ideas into Reality</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-indigo-400 mb-6 z-50">
            Build amazing websites <br /> with{" "}
            <span className="text-indigo-500 animate-pulse">Finance</span>
          </h1>

          {/* Subheading */}

          <p className="z-50 text-lg md:text-xl text-center text-muted-foreground max-w-2xl px-8 md:px-0 mx-auto mb-8">
            Manage Your finace & banking-states efficiently, Graphical
            representation of expences, income, and your white remaining belence
          </p>

          {/* Floating elements */}
          <div className="absolute inset-0 pointer-events-none">
            {floatingElements.map((element) => (
              <div key={element.id}>
                <div
                  className={`absolute animate-${element.animation}`}
                  style={{
                    left: `${element.left}%`,
                    top: `${element.top}%`,
                  }}
                >
                  <div className="text-blue-500 w-6 h-6">{element.icon}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
