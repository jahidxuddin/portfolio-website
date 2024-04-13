"use client";

import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {FormEvent, useRef} from "react";
import emailjs from "@emailjs/browser";
import {useToast} from "@/components/ui/use-toast";

export default function ContactForm() {
  const {toast} = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = formRef.current;
    if (
      !form ||
      !process.env.EMAIL_SERVICE_ID ||
      !process.env.EMAIL_TEMPLATE_ID ||
      !process.env.EMAIL_PUBLIC_KEY
    ) {
      toast({
        title: "Email Status",
        description: "Email Sendung fehlgeschlagen.",
      });
      return;
    }

    emailjs
      .sendForm(process.env.EMAIL_SERVICE_ID, process.env.EMAIL_TEMPLATE_ID, form, {
        publicKey: process.env.EMAIL_PUBLIC_KEY,
      })
      .then(
        () => {
          form.reset();
          toast({
            title: "Email Status",
            description: "Email erfolgreich versendet.",
          });
        },
        (_) => {
          toast({
            title: "Email Status",
            description: "Email Sendung fehlgeschlagen.",
          });
        },
      );
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Kontaktieren Sie mich</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Füllen Sie das Formular unten aus und ich melde mich so schnell wie möglich bei Ihnen.
        </p>
      </div>
      <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input required name="from_name" id="name" placeholder="Geben Sie Ihren vollständigen Namen ein"/>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">E-Mail</Label>
          <Input required name="from_email" id="email" placeholder="Geben Sie Ihre E-Mail-Adresse ein" type="email"/>
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Nachricht</Label>
          <Textarea required name="message" className="min-h-[100px]" id="message"
                    placeholder="Geben Sie Ihre Nachricht ein"/>
        </div>
        <Button type="submit">Nachricht senden</Button>
      </form>
    </div>
  );
}