"use client";

import { useRef, useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import Swal from "sweetalert2";
import { sendForm } from "emailjs-com";
import Reveal from "@/components/motion/Reveal";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const validate = (form: HTMLFormElement) => {
    const errors: Record<string, string> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    const nameInput = form.elements.namedItem("name") as HTMLInputElement;
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    const phoneInput = form.elements.namedItem("phone") as HTMLInputElement;
    const subjectInput = form.elements.namedItem("subject") as HTMLInputElement;
    const messageInput = form.elements.namedItem("message") as HTMLTextAreaElement;

    const name = nameInput?.value.trim() || "";
    const email = emailInput?.value.trim() || "";
    const phone = phoneInput?.value.trim() || "";
    const subject = subjectInput?.value.trim() || "";
    const message = messageInput?.value.trim() || "";

    if (!name) errors.name = "Name is required.";
    if (!email) errors.email = "Email is required.";
    else if (!emailRegex.test(email)) errors.email = "Invalid email format.";
    if (!phone) errors.phone = "Phone number is required.";
    if (!subject) errors.subject = "Subject is required.";
    if (!message) errors.message = "Message is required.";

    return errors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const errors = validate(form);
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: "Please check your input and try again.",
      });
      return;
    }

    setLoading(true);

    sendForm(
      "service_cq3xwte",
      "template_6eqbsh9",
      formRef.current!,
      "Fn7XwDMaDOh3pLUkz"
    )
      .then(() => {
        setLoading(false);
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Thank you for reaching out. We will get back to you soon.",
          confirmButtonColor: "#131b2a",
        });
        form.reset();
        setFormErrors({});
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Something went wrong",
          text: "Failed to send message. Please check your file and try again.",
        });
      });
  };

  return (
    <section className="max-w-[1640px] px-8 py-8 md:py-16 mx-auto">
      {/* ====== Contact Info ====== */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6 lg:mb-8 items-stretch">
        <Reveal y={20} opacityFrom={0}>
          <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-medium w-full">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-100 text-black rounded-lg" aria-hidden="true">
              <FaMapMarkerAlt size={18} />
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-[#2a3b47] mb-1">Address</h4>
              <p className="text-gray-600 text-sm">
                5111 Ehrlich Road Ste 128, Tampa, Florida 33624, United States
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal y={25} opacityFrom={0}>
          <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-medium w-full">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-100 text-black rounded-lg" aria-hidden="true">
              <FaEnvelope size={18} />
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-[#2a3b47] mb-1">Email Address</h4>
              <p className="text-gray-600 text-sm">support@jachimekchiro.com</p>
            </div>
          </div>
        </Reveal>

        <Reveal y={30} opacityFrom={0}>
          <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-medium w-full">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-100 text-black rounded-lg" aria-hidden="true">
              <FaPhone size={18} />
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-[#2a3b47] mb-1">Phone</h4>
              <div className="flex flex-wrap gap-4 items-center">
                <p className="text-gray-600 text-sm">Phone: 813.269.7546</p>
                <p className="text-gray-600 text-sm">Fax: 813.968.1784</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* ====== Contact Form ====== */}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        noValidate
        className="bg-white p-8 rounded-xl shadow-medium flex flex-col justify-between space-y-6"
      >
        <div className="sr-only" aria-live="polite">
          {Object.keys(formErrors).length > 0
            ? "The form contains errors. Please review each field."
            : ""}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              placeholder="Full Name"
              aria-invalid={Boolean(formErrors.name)}
              aria-describedby={formErrors.name ? "contact-name-error" : undefined}
              className="w-full border border-[#EDEDED] rounded-lg px-4 py-2 bg-[#F9F9F9] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formErrors.name && (
              <span id="contact-name-error" role="alert" className="text-red-500 text-sm mt-1">
                {formErrors.name}
              </span>
            )}
          </div>
          <div>
            <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              required
              placeholder="Phone"
              aria-invalid={Boolean(formErrors.phone)}
              aria-describedby={formErrors.phone ? "contact-phone-error" : undefined}
              className="w-full border border-[#EDEDED] rounded-lg px-4 py-2 bg-[#F9F9F9] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formErrors.phone && (
              <span id="contact-phone-error" role="alert" className="text-red-500 text-sm mt-1">
                {formErrors.phone}
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              placeholder="Email"
              aria-invalid={Boolean(formErrors.email)}
              aria-describedby={formErrors.email ? "contact-email-error" : undefined}
              className="w-full border border-[#EDEDED] rounded-lg px-4 py-2 bg-[#F9F9F9] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formErrors.email && (
              <span id="contact-email-error" role="alert" className="text-red-500 text-sm mt-1">
                {formErrors.email}
              </span>
            )}
          </div>
          <div>
            <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              required
              placeholder="Subject"
              aria-invalid={Boolean(formErrors.subject)}
              aria-describedby={formErrors.subject ? "contact-subject-error" : undefined}
              className="w-full border border-[#EDEDED] rounded-lg px-4 py-2 bg-[#F9F9F9] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formErrors.subject && (
              <span id="contact-subject-error" role="alert" className="text-red-500 text-sm mt-1">
                {formErrors.subject}
              </span>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            required
            placeholder="Write your message..."
            aria-invalid={Boolean(formErrors.message)}
            aria-describedby={formErrors.message ? "contact-message-error" : undefined}
            className="w-full border border-[#EDEDED] rounded-lg px-4 py-2 bg-[#F9F9F9] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formErrors.message && (
            <span id="contact-message-error" role="alert" className="text-red-500 text-sm mt-1">
              {formErrors.message}
            </span>
          )}
        </div>

        <div className="flex justify-start">
          <button
            type="submit"
            disabled={loading}
            className={`self-start bg-primary text-white font-semibold py-2 px-6 rounded-full max-w-40 w-full transition duration-200 mt-4 ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-green-600"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </section>
  );
}
