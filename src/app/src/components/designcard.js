export default function DesignCard({ image, title, description, price }) {
    return (
      <div className="border rounded shadow-md overflow-hidden">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-gray-600">{description}</p>
          <p className="mt-2 font-semibold">₹{price}</p>
        </div>
      </div>
    );
  }
  