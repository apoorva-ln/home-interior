import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans min-h-screen p-8 sm:p-20 bg-gray-50">
      {/* Header */}
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold">Interior Bliss</h1>
        <nav className="flex gap-6 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/designs">Designs</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Transform Your Space</h2>
        <p className="text-lg text-gray-600 mb-6">
          Explore our exclusive home interior designs
        </p>
        <Link
          href="/designs"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          View Designs
        </Link>
      </section>

      {/* Designs Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Living Room */}
        <div className="bg-white rounded shadow-md overflow-hidden">
          <Image
            src="/images/living1.jpg"
            alt="Modern Living Room"
            width={400}
            height={250}
            className="object-cover w-full h-[250px]"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Modern Living Room</h3>
            <p className="text-gray-600 mb-2">Spacious & cozy design.</p>
            <p className="font-semibold">₹12,000</p>
          </div>
        </div>

        {/* Kitchen */}
        <div className="bg-white rounded shadow-md overflow-hidden">
          <Image
            src="/images/kitchen1.jpg"
            alt="Minimalist Kitchen"
            width={400}
            height={250}
            className="object-cover w-full h-[250px]"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Minimalist Kitchen</h3>
            <p className="text-gray-600 mb-2">Sleek & functional.</p>
            <p className="font-semibold">₹9,000</p>
          </div>
        </div>

        {/* Bedroom */}
        <div className="bg-white rounded shadow-md overflow-hidden">
          <Image
            src="/images/bedroom1.jpg"
            alt="Luxury Bedroom"
            width={400}
            height={250}
            className="object-cover w-full h-[250px]"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Luxury Bedroom</h3>
            <p className="text-gray-600 mb-2">Comfort & style combined.</p>
            <p className="font-semibold">₹15,000</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 py-6 text-center text-gray-500">
        &copy; 2025 Interior Bliss. All rights reserved.
      </footer>
    </div>
  );
}
