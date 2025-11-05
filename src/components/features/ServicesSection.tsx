import { Container } from "@/components/ui/Container";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/lib/data";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function ServicesSection() {
  const mainServices = services.slice(0, 6);

  return (
    <section className="py-16">
      <Container>
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-700">
          Nos Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {mainServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div className="text-center">
          <Link href="/services">
            <Button variant="primary">Voir tous les services</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}