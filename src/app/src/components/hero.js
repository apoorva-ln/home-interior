import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gray-100 text-center py-20 px-4 sm:px-8">
      <h2 className="text-4xl sm:text-5xl font-bold mb-4">
        Transform Your Space
      </h2>
      <p className="text-lg sm:text-xl text-gray-700 mb-6">
        Explore our exclusive home interior designs
      </p>
      <Link
        href="/designs"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition-colors duration-300"
      >
        View Designs
      </Link>
    </section>
  );
}
