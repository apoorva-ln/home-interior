export default function Home() {
    return (
      <main className="bg-white text-black">
        {/* Navbar */}
        <nav className="flex items-center justify-between px-6 py-4 shadow">
          <h1 className="text-xl font-bold">MATX</h1>
          <ul className="hidden md:flex gap-6">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Categories</a></li>
            <li><a href="#" className="hover:underline">Reviews</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Cart</a></li>
          </ul>
          <button className="md:hidden">☰</button>
        </nav>
  
        {/* Hero Section */}
        <section className="relative text-center">
          <img
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
            alt="Interior"
            className="w-full h-[350px] object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40">
            <h2 className="text-2xl md:text-4xl font-bold">MATX - Your One-Stop Marketplace</h2>
            <button className="mt-4 bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200">
              Get Started
            </button>
          </div>
        </section>
  
        {/* Categories Section */}
        <section className="px-6 py-10">
          <h3 className="text-xl font-semibold mb-6">Categories</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Category Card */}
            <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511" alt="Living Room" className="h-40 w-full object-cover"/>
              <div className="p-4">
                <h4 className="font-bold">Living Room</h4>
                <p className="text-sm text-gray-600">Modern interiors to suit your style.</p>
              </div>
            </div>
  
            <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36" alt="Bedroom" className="h-40 w-full object-cover"/>
              <div className="p-4">
                <h4 className="font-bold">Bedroom</h4>
                <p className="text-sm text-gray-600">Cozy designs for peaceful nights.</p>
              </div>
            </div>
  
            <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" alt="Kitchen" className="h-40 w-full object-cover"/>
              <div className="p-4">
                <h4 className="font-bold">Kitchen</h4>
                <p className="text-sm text-gray-600">Stylish and functional spaces.</p>
              </div>
            </div>
  
            <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <img src="https://images.unsplash.com/photo-1600566753251-00f18fb6b52b" alt="Bathroom" className="h-40 w-full object-cover"/>
              <div className="p-4">
                <h4 className="font-bold">Bathroom</h4>
                <p className="text-sm text-gray-600">Relaxing spaces with elegance.</p>
              </div>
            </div>
  
            <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <img src="https://images.unsplash.com/photo-1521782462922-7da9eaa4d1f4" alt="Flooring" className="h-40 w-full object-cover"/>
              <div className="p-4">
                <h4 className="font-bold">Flooring</h4>
                <p className="text-sm text-gray-600">Premium materials for your home.</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Promo Section */}
        <section className="px-6 py-10">
          <div className="bg-black text-white p-12 rounded-xl flex justify-center items-center">
            <span className="text-6xl">➔</span>
          </div>
        </section>
  
        {/* Reviews Section */}
        <section className="px-6 py-10 bg-gray-50">
          <h3 className="text-xl font-semibold mb-6">Reviews</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 border rounded-lg shadow">
              <p className="text-gray-700">"Amazing designs! My home looks so modern now."</p>
              <p className="mt-2 font-semibold">- Sarah</p>
            </div>
            <div className="p-4 border rounded-lg shadow">
              <p className="text-gray-700">"Loved the categories, very easy to browse."</p>
              <p className="mt-2 font-semibold">- Rahul</p>
            </div>
            <div className="p-4 border rounded-lg shadow">
              <p className="text-gray-700">"Great quality and affordable pricing."</p>
              <p className="mt-2 font-semibold">- Emily</p>
            </div>
          </div>
        </section>
      </main>
    );
  }
  