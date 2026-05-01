import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-beige text-center text-xs py-6 mt-8">
      <p className="mb-2">
        © {new Date().getFullYear()} Global Bite — Cultural discovery through everyday goods.
      </p>
      <p>
        <Link href="/disclosure" className="underline">
          Affiliate Disclosure
        </Link>
      </p>
    </footer>
  );
}
