import { Container } from "@/components/ui/Container";
import ContactForm from "@/components/features/ContactForm";

export const metadata = {
  title: "Contact - PM Rénovation",
  description: "Contactez PM Rénovation pour vos demandes",
};

export default function ContactPage() {
  return (
    <main className="flex-grow py-16">
      <Container>
        <h1 className="text-4xl font-bold mb-12 text-primary-700">
          Nous Contacter
        </h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Coordonnées</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-primary-700">Adresse</h3>
                <p className="text-neutral-600">
                  82 Route de Burie
                  <br />
                  17100 LA CHAPELLE-DES-POTS
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-primary-700">Téléphone</h3>
                <a
                  href="tel:0546977647"
                  className="text-secondary-500 hover:text-secondary-600"
                >
                  05 46 97 76 47
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-primary-700">Email</h3>
                <a
                  href="mailto:contact@pmrenovation17.com"
                  className="text-secondary-500 hover:text-secondary-600"
                >
                  contact@pmrenovation17.com
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-primary-700">Horaires</h3>
                <p className="text-neutral-600">
                  Lundi - Vendredi : 8h - 18h
                  <br />
                  Samedi : 9h - 12h
                  <br />
                  Dimanche : Fermé
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-6">
              Formulaire de Contact
            </h2>
            <ContactForm />
          </div>
        </div>
      </Container>
    </main>
  );
}