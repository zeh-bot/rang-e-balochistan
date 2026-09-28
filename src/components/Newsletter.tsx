import { Button } from "@/components/ui/button";

export default function Newsletter() {
  return (
    <section className="bg-[#FAF5EF] py-24">
      <div className="mx-auto max-w-3xl rounded-3xl bg-[#6E1F2A] px-8 py-16 text-center text-white shadow-xl">
        <h2 className="mb-4 text-4xl font-bold">
          Stay Connected
        </h2>

        <p className="mb-8 text-gray-200">
          Be the first to discover new collections, exclusive releases,
          and timeless Balochi designs.
        </p>

        <div className="flex flex-col gap-4 md:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-full px-6 py-4 text-black outline-none"
          />

          <Button className="rounded-full bg-[#C9A227] px-8 py-6 text-black hover:bg-yellow-500">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
}