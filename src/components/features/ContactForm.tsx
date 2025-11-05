"use client";

import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {submitted && (
        <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg">
          Merci pour votre message. Nous vous recontacterons rapidement.
        </div>
      )}
      <Input
        label="Nom"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        placeholder="Votre nom"
      />
      <Input
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        placeholder="votre@email.com"
      />
      <Input
        label="Téléphone"
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="06 12 34 56 78"
      />
      <Textarea
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Votre message..."
        required
      />
      <Button type="submit" variant="primary" className="w-full">
        Envoyer
      </Button>
    </form>
  );
}