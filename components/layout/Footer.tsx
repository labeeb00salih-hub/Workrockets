import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-deep-shadow border-t border-ember-brown/40 py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                {/* Logo & Copyright */}
                <div className="flex flex-col gap-2">
                    <Link href="/" className="text-xl font-bold tracking-tighter text-white">
                        Work Rockets
                    </Link>
                    <p className="text-sm text-pale-glow/50">
                        &copy; {new Date().getFullYear()} Work Rockets. All rights reserved.
                    </p>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-8">
                    <Link href="#services" className="text-sm text-pale-glow/70 hover:text-orange-glow transition-colors">
                        Services
                    </Link>
                    <Link href="#solutions" className="text-sm text-pale-glow/70 hover:text-orange-glow transition-colors">
                        Solutions
                    </Link>
                    <Link href="#blog" className="text-sm text-pale-glow/70 hover:text-orange-glow transition-colors">
                        Blog
                    </Link>
                    <Link href="#contact" className="text-sm text-pale-glow/70 hover:text-orange-glow transition-colors">
                        Contact
                    </Link>
                </div>
            </div>
        </footer>
    );
}
