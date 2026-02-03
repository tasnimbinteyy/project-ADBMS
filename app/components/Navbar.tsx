import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-emerald-600">
          SkillMatch
        </Link>

        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="#">Browse Jobs</Link>
          <Link href="#">Analytics</Link>
          <Link href="#">For Employers</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="#" className="text-sm">
            Sign In
          </Link>
          <Link
            href="#"
            className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
