import signature1 from "../assets/images/signature1.jpg";
import signature2 from "../assets/images/signature2.jpg";
import signature3 from "../assets/images/signature3.jpg";

const pieces = [
  {
    image: signature1,
    name: "Crimson Heritage",
  },
  {
    image: signature2,
    name: "Royal Emerald",
  },
  {
    image: signature3,
    name: "Midnight Elegance",
  },
];

export default function SignaturePieces() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center text-5xl font-bold text-[#6E1F2A]">
          Signature Pieces
        </h2>

        <p className="mb-14 text-center text-gray-600">
          Our most loved handcrafted designs.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {pieces.map((piece, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl"
            >
              <img
                src={piece.image}
                alt={piece.name}
                className="h-[550px] w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="bg-[#FAF5EF] p-6 text-center">
                <h3 className="text-2xl font-semibold text-[#6E1F2A]">
                  {piece.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}