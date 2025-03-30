"use client";

import { useState, FormEvent, useEffect } from "react";
import { EmailData } from "@/types/email";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Notification from "@/lib/utilities/notification";

export default function ContactForm() {
  const [formData, setFormData] = useState<EmailData>({
    name: "",
    subject: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const [showNotification, setShowNotification] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send email");
      }

      setStatus({
        type: "success",
        message: "Message sent successfully!",
      });
      setShowNotification(true);
      setFormData({ name: "", subject: "", email: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error ? error.message : "Failed to send email",
      });
      setShowNotification(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  return (
    <Card id="contact" className="w-full h-auto lg:h-[525px]">
      <CardHeader className="">
        <CardTitle className="text-xl sm:text-md">Get in Touch</CardTitle>
        <CardDescription className="text-sm sm:text-md">
          Have questions? We'd love to hear from you. Send us a message and
          we'll respond as soon as possible.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className=""
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className=""
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="example@mail.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className=""
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className=""
                rows={4}
                required
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="py-3">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-amber-600 p-3  text-white rounded hover:bg-amber-700 disabled:bg-amber-300"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>

          {showNotification && status.message && (
            <Notification
              type={status.type === "success" ? "success" : "error"}
              message={status.message}
              onClose={() => setShowNotification(false)}
            />
          )}
        </CardFooter>
      </form>
    </Card>
  );
}
