import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white mt-16">
      <Container className="py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">PM Rénovation</h3>
            <p className="text-neutral-300">
              Votre spécialiste en travaux de rénovation depuis 2004.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neutral-300 hover:text-white">
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-neutral-300 hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link href="/devis" className="text-neutral-300 hover:text-white">
                  Devis
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-neutral-300 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Coordonnées</h4>
            <p className="text-neutral-300 mb-2">
              82 Route de Burie
              <br />
              17100 LA CHAPELLE-DES-POTS
            </p>
            <p className="text-neutral-300 mb-2">
              <a href="tel:0546977647" className="hover:text-white">
                05 46 97 76 47
              </a>
            </p>
            <p className="text-neutral-300">
              <a href="mailto:contact@pmrenovation17.com" className="hover:text-white">
                contact@pmrenovation17.com
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-neutral-700 pt-8 text-center text-neutral-400">
          <p>
            &copy; {currentYear} PM Rénovation. Tous droits réservés.
          </p>
        </div>
      </Container>
    </footer>
  );
}