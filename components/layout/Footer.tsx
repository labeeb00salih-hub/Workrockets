import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex flex-col gap-1">
          <Link href="/" className="text-base font-semibold tracking-tight text-text">
            WorkRockets
          </Link>
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} WorkRockets. All rights reserved.
          </p>
        </div>
        <Link
          href="#contact"
          className="text-sm text-blue hover:underline transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue/50 rounded-sm"
        >
          Get in touch
        </Link>
      </div>
    </footer>
  );
}
