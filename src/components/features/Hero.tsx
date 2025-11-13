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

        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-4 text-neutral-100">Horaires d’ouverture</h2>
          <ul className="text-lg space-y-2">
            <li><strong>Lundi – Vendredi :</strong> 8h – 18h</li>
            <li><strong>Samedi :</strong> 9h – 12h</li>
            <li><strong>Dimanche :</strong> Fermé</li>
          </ul>
        </section>
      </Container>
    </section> 
  );
}