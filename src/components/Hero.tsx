import hero1 from "../assets/images/hero1.jpg";
import hero2 from "../assets/images/hero2.jpg";
import hero3 from "../assets/images/hero3.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Button } from "@/components/ui/button";

const slides = [
  {
    image: hero1,
    title: "Rang-e-Balochistan",
    subtitle: "Authentic Balochi Elegance",
  },
  {
    image: hero2,
    title: "Handcrafted Heritage",
    subtitle: "Every Thread Tells a Story",
  },
  {
    image: hero3,
    title: "Timeless Tradition",
    subtitle: "Crafted for Every Occasion",
  },
];

export default function Hero() {
  return (
    <section className="pt-24">
      <Carousel className="w-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div
                className="relative h-screen bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >
                <div className="absolute inset-0 bg-black/40" />

                <div className="relative flex h-full flex-col items-center justify-center text-center text-white px-6">
                  <h1 className="text-6xl md:text-7xl font-bold mb-4">
                    {slide.title}
                  </h1>

                  <p className="text-xl md:text-2xl mb-8">
                    {slide.subtitle}
                  </p>

                  <Button className="bg-[#6E1F2A] hover:bg-[#541722] rounded-full px-8 py-6 text-lg">
                    Explore Collection
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-6" />
        <CarouselNext className="right-6" />
      </Carousel>
    </section>
  );
}