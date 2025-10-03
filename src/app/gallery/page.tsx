import Image from "next/image";

export default function Gallery() {
  const images = [
    { src: "/gallery1.jpg", alt: "Modern Living Room" },
    { src: "/gallery2.jpg", alt: "Cozy Bedroom" },
    { src: "/gallery3.jpg", alt: "Stylish Kitchen" },
    { src: "/gallery4.jpg", alt: "Elegant Dining Area" },
    { src: "/gallery5.jpg", alt: "Creative Workspace" },
    { src: "/gallery6.jpg", alt: "Minimalist Decor" },
  ];

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Gallery</h1>
      <p style={{ textAlign: "center", marginBottom: "40px", color: "#666" }}>
        Explore some of our featured interior design snapshots.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={400}
              height={280}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

