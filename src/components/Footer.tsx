export default function Footer() {
  return (
    <footer className="bg-[#2B2B2B] py-16 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
        <div>
          <h2 className="text-3xl font-bold text-[#C9A227]">
            Rang-e-Balochistan
          </h2>

          <p className="mt-3 text-gray-400">
            Preserving the beauty of authentic Balochi craftsmanship.
          </p>
        </div>

        <div className="flex gap-8">
          <a href="#" className="hover:text-[#C9A227]">
            Home
          </a>

          <a href="#" className="hover:text-[#C9A227]">
            Collections
          </a>

          <a href="#" className="hover:text-[#C9A227]">
            About
          </a>

          <a href="#" className="hover:text-[#C9A227]">
            Contact
          </a>
        </div>

        <p className="text-gray-500">
          © 2026 Rang-e-Balochistan. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}