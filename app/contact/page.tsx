"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-background min-h-screen px-4 py-32">
      <div className="mx-auto max-w-2xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold text-gray-600">
            Get in Touch
          </h1>
          <p className="text-muted-foreground text-lg">
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="text-foreground mb-2 block text-sm font-medium"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border-input bg-background text-foreground placeholder:text-muted-foreground focus:ring-ring w-full rounded-lg border px-4 py-3 transition-colors focus:border-transparent focus:ring-2 focus:outline-none"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-foreground mb-2 block text-sm font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border-input bg-background text-foreground placeholder:text-muted-foreground focus:ring-ring w-full rounded-lg border px-4 py-3 transition-colors focus:border-transparent focus:ring-2 focus:outline-none"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="text-foreground mb-2 block text-sm font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="border-input bg-background text-foreground placeholder:text-muted-foreground focus:ring-ring resize-vertical w-full rounded-lg border px-4 py-3 transition-colors focus:border-transparent focus:ring-2 focus:outline-none"
              placeholder="Tell us about your project or how we can help..."
            />
          </div>

          <Button
            type="submit"
            variant="outline"
            className="w-full cursor-pointer"
            size="lg"
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}
