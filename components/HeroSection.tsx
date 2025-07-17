"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Cross, Leaf, Book } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const heroImages = [
  "/images/family.png",
  "/images/fruit.png",
  "/images/three angles.jpg",
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 10000); // 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImages[current]}
          alt="Hero background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-6">
          <Cross className="h-8 w-8 mr-3" />
          <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
            Luke 9:13
          </Badge>
        </div>
        <h1 className="text-5xl font-bold mb-6">Nourishing Bodies, Feeding Souls</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
          A health education ministry spreading the Three Angels messages while providing wholesome, natural foods to
          sustain both body and spirit.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100">
            <Leaf className="mr-2 h-5 w-5" />
            Shop Products
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-green-700 bg-transparent"
          >
            <Book className="mr-2 h-5 w-5" />
            Bible Study Lessons
          </Button>
        </div>
      </div>
    </section>
  );
} 