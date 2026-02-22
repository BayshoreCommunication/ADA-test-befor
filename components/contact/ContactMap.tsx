export default function ContactMap() {
  return (
    <section className="overflow-hidden">
      <section className="">
        <div className="w-full h-[250px] md:h-[450px] overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3519.996658532623!2d-82.5346904!3d28.085644799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c1ddd73750a1%3A0xdb88558beba9d695!2sJachimek%20Chiropractic%20%26%20Wellness%20Center!5e0!3m2!1sen!2sbd!4v1759921218114!5m2!1sen!2sbd"
            width="100%"
            height={450}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </section>
  );
}
