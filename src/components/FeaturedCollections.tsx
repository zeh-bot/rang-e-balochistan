import collection1 from "../assets/images/collection1.jpg";
import collection2 from "../assets/images/collection2.jpg";
import collection3 from "../assets/images/collection3.jpg";
import { Button } from "@/components/ui/button";

const collections = [
  {
    image: collection1,
    title: "Luxury Formals",
  },
  {
    image: collection2,
    title: "Bridal Collection",
  },
  {
    image: collection3,
    title: "Classic Heritage",
  },
];

export default function FeaturedCollections() {
  return (
    <section className="bg-[#FAF5EF] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center text-5xl font-bold text-[#6E1F2A]">
          Featured Collections
        </h2>

        <p className="mb-16 text-center text-gray-600">
          Discover timeless Balochi craftsmanship.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {collections.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-[500px] w-full object-cover"
              />

              <div className="p-8 text-center">
                <h3 className="mb-5 text-2xl font-bold text-[#6E1F2A]">
                  {item.title}
                </h3>

                <Button className="bg-[#6E1F2A] hover:bg-[#541722]">
                  View Collection
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}