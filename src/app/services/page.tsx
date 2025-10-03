import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Interior Design Consultation",
      description: "Personalized advice for creating your dream interiors.",
      image: "/images/service1.jpg",
      price: "₹5,000",
    },
    {
      title: "Full Home Makeover",
      description: "Complete redesign of your space with modern aesthetics.",
      image: "/images/service2.jpg",
      price: "₹25,000",
    },
    {
      title: "Furniture & Decor Selection",
      description: "Handpicked furniture and decor items to match your style.",
      image: "/images/service3.jpg",
      price: "₹10,000",
    },
    {
      title: "Lighting & Ambience Setup",
      description: "Optimize lighting to enhance mood and functionality.",
      image: "/images/service4.jpg",
      price: "₹8,000",
    },
    {
      title: "Kitchen & Bathroom Design",
      description: "Functional and stylish designs for kitchens and bathrooms.",
      image: "/images/service5.jpg",
      price: "₹15,000",
    },
    {
      title: "Space Planning & Layout",
      description: "Efficient use of space for small or large homes.",
      image: "/images/service6.jpg",
      price: "₹12,000",
    },
  ];

  return (
    <div className="font-sans min-h-screen p-8 sm:p-20 bg-gray-50">
      {/* Header */}
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold">Interior Bliss</h1>
        <nav className="flex gap-6 text-gray-700 font-medium">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/designs">Designs</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-lg text-gray-600 mb-6">
          Explore the range of services we offer to transform your home.
        </p>
      </section>

      {/* Services Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded shadow-md overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              width={400}
              height={250}
              className="object-cover w-full h-[250px]"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-2">{service.description}</p>
              <p className="font-semibold">{service.price}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="mt-16 py-6 text-center text-gray-500">
        &copy; 2025 Interior Bliss. All rights reserved.
      </footer>
    </div>
  );
}
