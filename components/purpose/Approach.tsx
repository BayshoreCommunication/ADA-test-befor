export default function Approach() {
  const items = [
    {
      title: "Innovation",
      description:
        "Bringing the latest medical advancements in weight management and regenerative wellness to our patients.",
    },
    {
      title: "Compassion",
      description:
        "Treating every patient with empathy, respect, and genuine care.",
    },
    {
      title: "Empowerment",
      description:
        "Helping individuals gain the knowledge and confidence to take charge of their health.",
    },
    {
      title: "Community",
      description:
        "Building a supportive environment that encourages lasting change and shared success.",
    },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-[1640px] mx-auto px-8 py-8 md:py-16">
        {/* ===== Section Header ===== */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Our Approach
          </h2>
          <p className="mt-3 text-gray-600 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            We combine medical expertise, personalized care, and proven
            strategies to help you achieve safe, sustainable weight loss and
            lasting wellness.
          </p>
        </div>

        {/* ===== Cards ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {items.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 p-6 text-center cursor-pointer"
            >
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* ===== Sub Section ===== */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            More Than Weight Loss
          </h3>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Our purpose goes beyond helping you lose weight — it’s about
            improving your quality of life. Whether it’s gaining confidence,
            increasing energy, or restoring balance, we’re committed to helping
            you look and feel your best.
          </p>
        </div>
      </div>
    </section>
  );
}
