"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) router.push(`/search?q=${encodeURIComponent(query)}`);
  }

  return (
    <form onSubmit={handleSearch} className="flex max-w-lg mx-auto mt-6">
      <input
        type="text"
        placeholder="What are you looking for from anywhere in the world?"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow border border-sage rounded-l-full p-3 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-terracotta text-white px-5 rounded-r-full"
      >
        Search
      </button>
    </form>
  );
}
