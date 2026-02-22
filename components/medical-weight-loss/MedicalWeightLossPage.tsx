import React from "react";
import Reveal from "../motion/Reveal";
import Image from "next/image";
import Link from "next/link";

const MedicalWeightLossData = [
  {
    id: 1,
    image: "/images/Medical-Weight-Loss/Sema.png",
    title: "Sema",
    details:
      "Discover a new path to sustainable weight loss with Sema, an FDA-approved medication that works with your body to deliver real results. This breakthrough treatment effectively suppresses appetite, reduces cravings, and slows digestion to help you feel fuller longer while consuming fewer calories. Under professional medical supervision, Sema helps patients achieve significant weight reduction while improving metabolic health markers like blood sugar levels. Unlike temporary solutions, our medically managed Sema program provides the ongoing support and scientific approach needed for lasting transformation. Take control of your health journey with a treatment that addresses the root causes of weight challenges.",
    bookingLink: "/contact",
  },
  {
    id: 2,
    image: "/images/Medical-Weight-Loss/Tirzep.png",
    title: "Tirzep",
    details:
      "Tirzepatide is a breakthrough dual-agonist medication that offers a powerful approach to weight management. By simultaneously acting on both GLP-1 and GIP hormones, it effectively reduces appetite, slows digestion, and regulates blood sugar levels. Administered under clinical supervision, this innovative treatment helps patients achieve substantial and sustainable weight loss results. Unlike traditional methods, Tirzepatide addresses multiple metabolic pathways at once, supporting not only weight reduction but also improved overall metabolic health. If you're seeking a scientifically-advanced solution that goes beyond standard weight loss approaches, Tirzepatide may be the transformative option you've been looking for under proper medical guidance and care.",
    bookingLink: "/contact",
  },
  {
    id: 3,
    image: "/images/Medical-Weight-Loss/Retatrutide.png",
    title: "Retatrutide",
    details:
      "Experience the next frontier in weight management with Retatrutide, the first triple-agonist treatment targeting GLP-1, GIP, and glucagon receptors simultaneously. This advanced medication delivers powerful metabolic benefits through its unique triple-hormone action, providing superior appetite suppression, enhanced calorie burning, and optimized blood sugar control. Under careful medical supervision, Retatrutide represents the cutting edge of metabolic science, helping patients achieve breakthrough results where other treatments may have fallen short. For those seeking the most comprehensive approach to sustainable weight loss and metabolic health, Retatrutide offers an unprecedented path to transformation through its multi-targeted mechanism and professional clinical support.",
    bookingLink: "/contact",
  },
  {
    id: 4,
    image: "/images/Medical-Weight-Loss/Nutritional-Counseling.png",
    title: "Nutritional Counseling",
    details:
      "Our personalized nutritional counseling provides science-based guidance tailored to your unique metabolism, preferences, and weight loss goals. Through one-on-one sessions with our specialists, you’ll receive a sustainable eating plan that complements your medical treatment, promotes healthy habits, and ensures long-term success. We focus on education, portion control, and nutrient balance—not deprivation—so you can build a positive relationship with food while achieving and maintaining your ideal weight. Let us help you transform your health from the inside out with a clear, compassionate, and effective nutritional strategy designed just for you.",
    bookingLink: "/contact",
  },
  {
    id: 5,
    image: "/images/Medical-Weight-Loss/Personalized-Support.png",
    title: "Personalized Support",
    details:
      "At the heart of our practice is a commitment to personalized support that recognizes every weight loss journey is unique. We provide one-on-one guidance, regular progress monitoring, and continuous encouragement from our dedicated medical team. Whether through in-person consultations, secure messaging, or scheduled follow-ups, we ensure you never feel alone in your transformation. Our holistic approach addresses not just physical changes but also emotional well-being and lifestyle habits, creating a sustainable path to success. Experience the difference that truly individualized care can make in achieving your health goals and maintaining results for life.",
    bookingLink: "/contact",
  },
  {
    id: 6,
    image: "/images/Medical-Weight-Loss/hormon.png",
    title: "HRT (Hormone Replacement Therapy)",
    details:
      "Hormone Replacement Therapy (HRT) is a medical treatment that helps balance hormone levels in the body, commonly used to relieve symptoms of menopause such as hot flashes, mood swings, and bone loss. It can also support hormonal health in other conditions by supplementing estrogen, progesterone, or testosterone.",
    bookingLink: "/contact",
  },
  {
    id: 7,
    image: "/images/Medical-Weight-Loss/Chiropractic-Care.png",
    title: "Chiropractic Care",
    details:
      "Our specialized chiropractic care offers a holistic approach to weight loss by optimizing nervous system function and spinal alignment to enhance overall wellness. Through gentle adjustments, therapeutic techniques, and posture correction, we help reduce pain, improve mobility, and support your body’s natural ability to heal and function efficiently. Whether you’re experiencing discomfort from increased activity or seeking to improve physical function during your transformation, our integrated chiropractic services ensure your musculoskeletal health aligns with your weight loss goals. Discover how spinal health and nervous system balance can contribute to a more comfortable, active, and successful wellness journey.",
    bookingLink: "/contact",
  },
];

const MedicalWeightLossPage = () => {
  return (
    <>
      <section className="max-w-[1640px] mx-auto md:pt-16 py-8 px-8  gap-12 ">
        <div>
          <Reveal tag="div" y={16} opacityFrom={0}>
            <div className="text-center ">
              <h2 className="text-3xl font-bold text-gray-900">
                Medical Weight Loss
              </h2>
              <p className="mt-2 text-base text-gray-600 max-w-4xl mx-auto">
                Achieve lasting results with personalized, physician-supervised
                weight loss programs tailored to your unique body and health
                goals.
              </p>
            </div>
          </Reveal>
        </div>
        <div>
          <div className="grid grid-cols-1 py-12">
            {MedicalWeightLossData.map((service, index) => (
              <div
                key={service.id}
                className={`shadow-small rounded-3xl p-8 lg:p-10 bg-white flex flex-col md:flex-row gap-8 mb-12 items-center ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={1000}
                  height={600}
                  className="max-w-xl w-full h-auto object-cover"
                />
                <div>
                  <h3 className="text-xl lg:text-3xl font-semibold mt-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-base mt-2 mb-6">
                    {service.details}
                  </p>

                  <Link
                    href="https://portal.sked.life/new-patient/time?key=1b956e69d5481378e8b8687477eab43daee76cd6dfbd65f6b9f53c4f13a25331&from="
                    target="_blank"
                    className="inline-flex gap-2 items-center px-6 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-primary transition"
                  >
                    Not a Patient Yet? Schedule Today!
                    <div className="bg-white shrink-0  rounded-full w-5 h-5 flex items-center justify-center text-black">
                      <svg
                        className="w-4 h-4 "
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MedicalWeightLossPage;
