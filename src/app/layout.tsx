import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "PM Rénovation - Entreprise de rénovation Charente-Maritime",
  description: "PM Rénovation, votre spécialiste en travaux de rénovation depuis 2004",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans text-neutral-900 bg-neutral-50">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}