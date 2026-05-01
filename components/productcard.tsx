import Link from "next/link";

interface ProductCardProps {
  id: string;
  name: string;
  imageUrl: string;
  country: string;
  price: string;
  retailer: string;
}

export default function ProductCard({
  id,
  name,
  imageUrl,
  country,
  price,
  retailer
}: ProductCardProps) {
  return (
    <div className="border border-beige rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition">
      <Link href={`/product/${id}`}>
        <img src={imageUrl} alt={name} className="w-full h-56 object-cover" />
        <div className="p-3 text-left">
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-charcoal/70">{country}</p>
          {price && <p className="text-sm mt-1">{price}</p>}
          <p className="text-xs text-charcoal/60 mt-1">via {retailer}</p>
        </div>
      </Link>
    </div>
  );
}
