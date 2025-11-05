import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary-700 to-primary-800 text-white py-20">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">
            PM Rénovation - Votre spécialiste en travaux
          </h1>
          <p className="text-xl text-neutral-100 mb-8">
            Depuis 2004, nous accompagnons les particuliers et les professionnels
            dans leurs projets de rénovation en Charente-Maritime.
          </p>
          <div className="flex gap-4">
            <Link href="/devis">
              <Button variant="secondary" size="lg">
                Demander un devis
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-primary-600">
                Nos services
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}