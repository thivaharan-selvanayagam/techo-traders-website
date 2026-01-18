import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Brand */}
        <Link href="/" className="text-xl font-bold tracking-wide">
          TECHO TRADERS
        </Link>

        {/* Navigation */}
        <nav className="flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-green-600">Home</Link>
          <Link href="/refund-return-policy" className="hover:text-green-600">
            Refund Policy
          </Link>
          <a
            href="https://wa.me/94706656007"
            target="_blank"
            className="hover:text-green-600"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
