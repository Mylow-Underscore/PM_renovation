import { Container } from "@/components/ui/Container";

const strengths = [
  {
    title: "20 ans d'expérience",
    description:
      "Une équipe expérimentée et reconnue depuis 2004 en Charente-Maritime.",
  },
  {
    title: "Qualité garantie",
    description:
      "Travail soigné avec matériaux de qualité pour chaque projet.",
  },
  {
    title: "Devis gratuit",
    description: "Obtenez un devis personnalisé et sans engagement.",
  },
  {
    title: "Proximité",
    description: "Basés en Charente-Maritime pour votre commodité.",
  },
];

export default function StrengthsSection() {
  return (
    <section className="bg-neutral-50 py-16">
      <Container>
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-700">
          Pourquoi nous choisir ?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strengths.map((strength, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-700">
                {strength.title}
              </h3>
              <p className="text-neutral-600">{strength.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}