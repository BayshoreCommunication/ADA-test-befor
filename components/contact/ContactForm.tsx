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

  // ================= Validation =================
  const validate = (form: HTMLFormElement) => {
    const errors: Record<string, string> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    const nameInput = form.elements.namedItem("name") as HTMLInputElement;
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    const phoneInput = form.elements.namedItem("phone") as HTMLInputElement;
    const subjectInput = form.elements.namedItem("subject") as HTMLInputElement;
    const messageInput = form.elements.namedItem(
      "message"
    ) as HTMLTextAreaElement;

    const name = nameInput?.value.trim() || "";
    const email = emailInput?.value.trim() || "";
    const phone = phoneInput?.value.trim() || "";
    const subject = subjectInput?.value.trim() || "";
    const message = messageInput?.value.trim() || "";

    if (!name) errors.name = "Name is required!";
    if (!email) errors.email = "Email is required!";
    else if (!emailRegex.test(email)) errors.email = "Invalid email format!";
    if (!phone) errors.phone = "Phone number is required!";
    if (!subject) errors.subject = "Subject is required!";
    if (!message) errors.message = "Message is required!";

    return errors;
  };

  // ================= Handle Submit =================
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
      "service_cq3xwte", // Your EmailJS Service ID
      "template_6eqbsh9", // Your EmailJS Template ID
      formRef.current!,
      "Fn7XwDMaDOh3pLUkz" // Your EmailJS Public Key
    )
      .then(() => {
        setLoading(false);
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Thank you for reaching out. We’ll get back to you soon.",
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
            <div className="flex items-center justify-center w-10 h-10 bg-blue-100 text-black rounded-lg">
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
            <div className="flex items-center justify-center w-10 h-10 bg-blue-100 text-black rounded-lg">
              <FaEnvelope size={18} />
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-[#2a3b47] mb-1">
                Email Address
              </h4>
              <p className="text-gray-600 text-sm">support@jachimekchiro.com</p>
            </div>
          </div>
        </Reveal>

        <Reveal y={30} opacityFrom={0}>
          <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-medium w-full">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-100 text-black rounded-lg">
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
        className="bg-white p-8 rounded-xl shadow-medium flex flex-col justify-between space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              className="w-full border border-[#EDEDED] rounded-lg px-4 py-2 bg-[#F9F9F9] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formErrors.name && (
              <span className="text-red-500 text-sm mt-1">
                {formErrors.name}
              </span>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              className="w-full border border-[#EDEDED] rounded-lg px-4 py-2 bg-[#F9F9F9] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formErrors.phone && (
              <span className="text-red-500 text-sm mt-1">
                {formErrors.phone}
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full border border-[#EDEDED] rounded-lg px-4 py-2 bg-[#F9F9F9] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formErrors.email && (
              <span className="text-red-500 text-sm mt-1">
                {formErrors.email}
              </span>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input
              name="subject"
              type="text"
              placeholder="Subject"
              className="w-full border border-[#EDEDED] rounded-lg px-4 py-2 bg-[#F9F9F9] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formErrors.subject && (
              <span className="text-red-500 text-sm mt-1">
                {formErrors.subject}
              </span>
            )}
          </div>
        </div>

        {/* <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Attach File
          </label>
          <input
            name="file"
            type="file"
            accept=".png,.jpg,.jpeg,.pdf"
            className="w-full border border-[#EDEDED] rounded-lg px-4 py-2 bg-[#F9F9F9] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formErrors.file && (
            <span className="text-red-500 text-sm mt-1">{formErrors.file}</span>
          )}
        </div> */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            name="message"
            rows={4}
            placeholder="Write your message..."
            className="w-full border border-[#EDEDED] rounded-lg px-4 py-2 bg-[#F9F9F9] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formErrors.message && (
            <span className="text-red-500 text-sm mt-1">
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
