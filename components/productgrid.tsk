import ProductCard from "./ProductCard";
import products from "../data/products.json";

export default function ProductGrid({ filter }: { filter?: string }) {
  const q = (filter || "").toLowerCase();
  const filtered = products.filter((p) =>
    [
      p.name,
      p.category,
      p.country,
      p.region,
      p.description,
      ...(p.cultureTags || []),
      ...(p.keywords || [])
    ]
      .join(" ")
      .toLowerCase()
      .includes(q)
  );

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6">
      {filtered.map((p) => (
        <ProductCard key={p.id} {...p} />
      ))}
      {filtered.length === 0 && (
        <p className="col-span-full text-center">No results found.</p>
      )}
    </div>
  );
}
