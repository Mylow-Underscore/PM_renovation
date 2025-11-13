import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="bg-secondary-500 text-white py-16">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à démarrer votre projet ?</h2>
          <p className="text-lg mb-8">
            Contactez-nous pour un devis gratuit et sans engagement.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/devis">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-secondary-600">
                Demander un devis
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-secondary-600"
              >
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}