import React from "react";
import Reveal from "../motion/Reveal";
import Image from "next/image";
import Link from "next/link";

const MedicalWeightLossData = [
  // {
  //   id: 1 ,
  //   image: "/images/Vitamins-&-Peptides/new-image/Nad-1.png",
  //   title: "NAD+",
  //   details:
  //     "Rejuvenate your body at the cellular level with NAD+ (Nicotinamide Adenine Dinucleotide) therapy, a cutting-edge treatment that targets aging and fatigue from within. This powerful coenzyme plays a crucial role in cellular energy production, DNA repair, and optimizing metabolic function. By restoring NAD+ levels, we help boost mental clarity, increase physical energy, support detoxification, and promote overall vitality. Ideal for those seeking enhanced cognitive function, anti-aging benefits, or recovery support, our NAD+ IV therapy is administered under medical supervision for maximum safety and effectiveness. Renew your energy and revitalize your health with this innovative approach to wellness.",
  //   bookingLink: "/contact",
  // },
  {
    id: 9,
    image: "/images/Vitamins-&-Peptides/new-image/nad.png",
    title: "NAD+ Injection ",
    details:
      "Revive your energy and restore cellular vitality with NAD+ Injection (100 mg/mL), a premium coenzyme therapy designed to enhance overall wellness from the inside out. NAD+ (Nicotinamide Adenine Dinucleotide) is essential for cellular energy production, DNA repair, and metabolic efficiency, making it one of the body’s most powerful anti-aging and restorative molecules.This treatment helps boost mental focus, increase stamina, and support the body’s natural detoxification process. It also aids in reducing fatigue, improving cognitive function, and promoting recovery after physical or mental stress. Administered under professional supervision, NAD+ Injection ensures optimal absorption and effectiveness. It’s an ideal choice for individuals seeking enhanced vitality, sharper mental clarity, and long-term cellular rejuvenation. Reenergize your body and refresh your mind with the science of NAD+ therapy.",
    bookingLink: "/contact",
  },
  {
    id: 2,
    image: "/images/Vitamins-&-Peptides/new-image/Biotin-1.png",
    title: "Biotin",
    details:
      "Biotin, also known as Vitamin B7, is a vital nutrient that supports your body's natural ability to convert food into energy. As part of our tailored wellness therapies, Biotin helps maintain healthy metabolism, promotes strong hair and nail growth, and supports radiant skin from within. Whether received through IV infusion or as part of a personalized supplement plan, this essential vitamin can address deficiencies and enhance your overall vitality. Ideal for those seeking to improve their appearance and energy levels, Biotin therapy offers a simple yet effective way to complement your weight loss journey and boost your confidence.",
    bookingLink: "/contact",
  },
  {
    id: 3,
    image: "/images/Vitamins-&-Peptides/new-image/Vitamin C-1.png",
    title: "Vitamin C",
    details:
      "Vitamin C is a powerful antioxidant essential for immune support, collagen production, and overall vitality. Our Vitamin C therapy—available through IV infusion or as part of a personalized wellness plan—helps combat fatigue, promote skin health, and enhance your body’s natural recovery processes. Whether you're looking to boost immunity, reduce oxidative stress, or simply revitalize your well-being, this essential nutrient provides a safe and effective way to elevate your health from within. Ideal as a standalone treatment or alongside your weight loss program, Vitamin C can help you feel refreshed, radiant, and resilient every day.",
    bookingLink: "/contact",
  },
  {
    id: 4,
    image: "/images/Vitamins-&-Peptides/new-image/Glutathione.png",
    title: "Glutathione",
    details:
      "Glutathione is your body’s master antioxidant, essential for detoxification, immune support, and cellular repair. Our medical-grade glutathione therapy—administered via IV for maximum absorption—helps combat oxidative stress, promote brighter and more even-toned skin, and boost overall energy levels. By enhancing your body’s natural ability to neutralize toxins and free radicals, this powerful treatment supports liver health, improves mental clarity, and slows the visible signs of aging. Whether you're seeking to rejuvenate your appearance, strengthen your immune system, or complement your weight loss journey, glutathione offers a safe and effective path to renewed vitality and long-term wellness.",
    bookingLink: "/contact",
  },
  {
    id: 5,
    image: "/images/Vitamins-&-Peptides/new-image/MICC B-12.png",
    title: "MICC B-12",
    details:
      "Boost your energy and metabolism with MICC B-12, a powerful blend of Methionine, Inositol, Choline, and Vitamin B-12 designed to support your weight loss journey. This targeted injection therapy helps enhance fat metabolism, support liver function, and increase energy levels—making it easier to stay active and focused on your goals. Whether you're looking to jumpstart your progress or break through a plateau, MICC B-12 provides the nutritional support your body needs to burn fat more efficiently and maintain momentum. Administered under medical supervision, this treatment is a safe and effective way to complement a comprehensive wellness plan.",
    bookingLink: "/contact",
  },
  {
    id: 6,
    image: "/images/Vitamins-&-Peptides/new-image/Lipo mino injection-1.png",
    title: "Lipo-Mino with L-Carnitine",
    details:
      "Accelerate your fat-burning potential with Lipo-Mino with L-Carnitine—a targeted injectable formula designed to support efficient weight loss. This powerful combination of amino acids and L-Carnitine helps transport fatty acids into your cells’ mitochondria, where they are converted into energy. By enhancing your body’s natural ability to burn fat for fuel, this treatment can increase energy, improve exercise performance, and promote lean muscle retention. Ideal for breaking through weight loss plateaus or boosting metabolism, Lipo-Mino with L-Carnitine is a safe, effective, and science-backed addition to your medically supervised wellness plan.",
    bookingLink: "/contact",
  },
  {
    id: 7,
    image: "/images/Vitamins-&-Peptides/new-image/olympia.png",
    title: "Biotin Injection",
    details:
      "Enhance your wellness from within with the Biotin Injection (0.5 mg/mL), a medical-grade formula designed to support healthy hair, skin, and nails while improving overall metabolic function. Biotin, also known as Vitamin B7, is an essential nutrient that helps your body convert food into energy and supports cellular growth and repair. This injection is ideal for individuals looking to strengthen brittle nails, encourage fuller hair, or improve skin texture. It also supports nervous system health and aids in maintaining a balanced metabolism. Formulated for office use only and administered under professional supervision, the Biotin Injection ensures optimal absorption and effectiveness. Experience the benefits of targeted Biotin therapy that promotes natural beauty and vitality from the inside out.",
    bookingLink: "/contact",
  },
  {
    id: 8,
    image: "/images/Vitamins-&-Peptides/new-image/glutathione.png",
    title: "Glutathione Injection",
    details:
      "Revitalize and protect your body from the inside out with Glutathione Injection (200 mg/mL), a powerful antioxidant therapy that supports detoxification, brightens skin, and enhances cellular health. Glutathione, known as the “master antioxidant,” helps neutralize harmful free radicals, strengthen the immune system, and promote healthy liver function.This treatment is ideal for individuals seeking improved skin tone, reduced oxidative stress, and overall wellness enhancement. By replenishing glutathione levels, it supports cellular repair, promotes clearer and brighter skin, and aids in reducing inflammation caused by stress and environmental factors. Administered under professional supervision for optimal safety and absorption, Glutathione Injection offers a clean, restorative boost to your health and vitality. Refresh your system and reveal a more radiant, balanced you with this essential antioxidant therapy. ",
    bookingLink: "/contact",
  },

  {
    id: 10,
    image: "/images/Vitamins-&-Peptides/new-image/ascorbic.png",
    title: "Preserved Ascorbic Acid Injection (500 mg/mL)",
    details:
      "Strengthen your immune system and rejuvenate your body with Preserved Ascorbic Acid Injection (500 mg/mL), a concentrated Vitamin C therapy designed to boost wellness, energy, and cellular protection. Ascorbic acid is a potent antioxidant that helps combat oxidative stress, support collagen production, and promote faster recovery from illness or fatigue.This therapy enhances immune defense, improves skin health, and supports the body’s natural detoxification processes. It’s especially beneficial for those seeking enhanced energy, stronger immunity, or improved skin tone and elasticity. Administered by medical professionals,Preserved Ascorbic Acid Injection ensures safe and effective nutrient delivery for optimal results. Restore your vitality, brighten your skin, and protect your cells with this essential antioxidant boost.",
    bookingLink: "/contact",
  },
  {
    id: 11,
    image: "/images/Vitamins-&-Peptides/new-image/micc.png",
    title: "MICC Injection",
    details:
      "Boost your metabolism and support your weight management goals with the MICC Injection, a specially formulated blend of Methionine, Inositol, Choline, and Cyanocobalamin (Vitamin B12). This combination of lipotropic nutrients helps the body break down and metabolize fat more efficiently while supporting liver health and energy production.The MICC Injection works to convert fat into energy, reduce fat accumulation, and enhance overall metabolic function. It’s ideal for individuals seeking to complement their weight loss program, improve energy levels, and promote healthy liver detoxification. Administered under professional supervision for safety and effectiveness, MICC Injection provides a natural, science-based boost to your body’s fat-burning and energy systems. Experience improved focus, vitality, and metabolic balance with this trusted wellness solution.",
    bookingLink: "/contact",
  },
  {
    id: 12,
    image: "/images/Vitamins-&-Peptides/new-image/estrogen.png",
    title: "Estrogen & Testosterone Hormone", 
    details:
      <p>Balance your hormones and enhance overall well-being with Estrogen Hormone Injections, designed to support women’s health and vitality. Estrogen is essential for regulating mood, bone strength, skin health, and reproductive function. When estrogen levels drop due to age or hormonal changes, symptoms such as hot flashes, fatigue, and mood swings can occur.This therapy helps restore hormonal balance, improve energy, and support youthful vitality. It can also enhance skin elasticity, mood stability, and cognitive clarity. Administered under medical supervision, Estrogen Hormone Injections are personalized for each patient’s needs to ensure safe and effective results. Feel like yourself again with balanced hormone support.
        <br/><br/>
        Testosterone Hormone Reclaim your strength, energy, and confidence with Testosterone Hormone Injections, a targeted therapy that restores optimal testosterone levels for both men and women. Testosterone plays a key role in maintaining energy, muscle mass, libido, and mental focus. When levels decline, it can lead to fatigue, reduced motivation, and loss of strength.This treatment helps boost stamina, enhance mood, and promote lean muscle development. It supports improved focus, endurance, and overall vitality. Administered safely under professional guidance, Testosterone Hormone Injections help restore balance, performance, and well-being so you can feel energized and confident every day.</p>,
    bookingLink: "/contact",
  },
  {
    id: 13,
    image: "/images/Vitamins-&-Peptides/new-image/glp-s.jpg",
    title: "GLP-1 Sema",
    details:
      "Support your weight management and metabolic health with GLP-1 S (20 mg/vial), a scientifically formulated peptide therapy that promotes appetite control, balanced blood sugar, and sustained energy. GLP-1 (Glucagon-Like Peptide-1) works naturally within the body to regulate insulin release, slow gastric emptying, and enhance feelings of fullness — helping reduce calorie intake and support healthy weight loss.This treatment is ideal for individuals seeking gentle yet effective metabolic support, improved energy balance, and reduced cravings. It also helps stabilize blood sugar levels and encourages cardiovascular health by improving insulin sensitivity and reducing inflammation. Administered under professional supervision, GLP-1 S delivers safe, consistent, and measurable results. Experience a steady path to better health, increased vitality, and long-term metabolic balance with this clinically advanced therapy.",
    bookingLink: "/contact",
  },
  {
    id: 14,
    image: "/images/Vitamins-&-Peptides/new-image/glp-t.png",
    title: "GLP-1 Tirz",
    details:
      "Take control of your metabolism and achieve lasting results with GLP-1 T (60 mg/vial), an advanced peptide therapy designed to enhance weight management, appetite regulation, and blood sugar control. GLP-1 (Glucagon-Like Peptide-1) helps regulate insulin release, slow digestion, and promote a natural feeling of fullness, supporting healthy weight loss and improved metabolic balance.This treatment is ideal for individuals seeking to reduce cravings, maintain steady energy levels, and improve overall metabolic health. It also aids in lowering blood sugar fluctuations and supporting cardiovascular wellness through enhanced insulin sensitivity. Administered under professional supervision, GLP-1 T offers a clinically proven, hormone-based solution for effective weight management and long-term vitality. Experience balanced energy, improved focus, and a healthier body through optimized metabolic support.",
    bookingLink: "/contact",
  },
  {
    id: 15,
    image: "/images/Vitamins-&-Peptides/new-image/glp-r.png",
    title: "GLP-1 Reta",
    details:
      "Achieve sustainable weight management and metabolic balance with GLP-1 R (12 mg/vial), a clinically advanced peptide therapy that supports appetite control, glucose regulation, and long-term fat reduction. GLP-1 (Glucagon-Like Peptide-1) works by mimicking a natural hormone in the body that helps regulate blood sugar levels, slow digestion, and promote a feeling of fullness.This treatment is ideal for individuals looking to manage weight, reduce cravings, and improve overall metabolic health. It also helps stabilize energy levels and support cardiovascular wellness by improving insulin sensitivity and reducing inflammation. Administered under professional supervision for safety and precision, GLP-1 R offers a science-backed approach to achieving healthier weight goals and enhanced well-being. Transform your health from within with the power of peptide-based metabolic support.",
    bookingLink: "/contact",
  },
];

const VitaminsPeptidesPage = () => {
  return (
    <>
      <section className="max-w-[1640px] mx-auto md:pt-16 py-8 px-8  gap-12 ">
        <div>
          <Reveal tag="div" y={16} opacityFrom={0}>
            <div className="text-center ">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Vitamins-&-Peptides
              </h2>
              <p className="mt-2 text-base text-gray-600 max-w-4xl mx-auto">
                Specialized nutrient and peptide therapies designed to optimize
                cellular function, enhance recovery, and support your body’s
                natural healing processes.
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
                  height={800}
                  className="max-w-sm w-full h-auto object-cover rounded-xl"
                />
                <div>
                  <h3 className="text-xl lg:text-3xl font-semibold mt-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-base mt-2 mb-6 ">
                    {service.details}
                  </p>

                  {/* <Link
                    href="/https://portal.sked.life/new-patient/time?key=1b956e69d5481378e8b8687477eab43daee76cd6dfbd65f6b9f53c4f13a25331&from="
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
                  </Link> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default VitaminsPeptidesPage;
