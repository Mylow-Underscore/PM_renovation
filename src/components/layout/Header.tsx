import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function Header() {
  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <Container className="py-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary-700">
            PM Rénovation
          </Link>
          <ul className="hidden md:flex gap-8">
            <li>
              <Link
                href="/"
                className="text-neutral-700 hover:text-primary-700 transition"
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-neutral-700 hover:text-primary-700 transition"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/devis"
                className="text-neutral-700 hover:text-primary-700 transition"
              >
                Devis
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-neutral-700 hover:text-primary-700 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}