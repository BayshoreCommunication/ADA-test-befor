import Image from "next/image";

export default function WhyDoingThis() {
  return (
    <section className="w-full px-8 py-8 md:py-16">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* HEADING */}
        <h2 className="text-[20px] lg:text-[36px] xl:text-[38px] font-semibold text-gray-900">
          Why Are We <span className="text-[#f97316]">Doing</span> This?
        </h2>
        <p className="mt-2 text-[16px] text-gray-500">
          We flip the script on how you work with agencies.
        </p>

        {/* CARDS */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* OLD WAY */}
          <div className="rounded-2xl p-8 text-left bg-gradient-to-br from-[#F5F5F5] to-[#FFF7F3] shadow-lg">
            <span className="inline-block mb-4 rounded-full border border-red-300 px-4 py-1 text-[20px] text-[#EB3E30] bg-[#FFCECE]">
              The Old Way
            </span>

            <h3 className="font-semibold text-[24px] md:text-[30px] mb-4">
              The Typical Agency Model
            </h3>

            <ul className="space-y-3 text-[14px] md:text-[20px] text-gray-700">
              <li className="flex gap-3 items-center">
                <span className="text-red-500">
                  <Image
                    src="/gift/doing/cross.png"
                    alt="Check icon"
                    width={1000}
                    height={800}
                    className="object-cover w-8"
                  />
                </span>
                Pay upfront, hope for results
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-red-500">
                  <Image
                    src="/gift/doing/cross.png"
                    alt="Check icon"
                    width={1000}
                    height={800}
                    className="object-cover w-8"
                  />
                </span>
                Generic strategies from a playbook
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-red-500">
                  <Image
                    src="/gift/doing/cross.png"
                    alt="Check icon"
                    width={1000}
                    height={800}
                    className="object-cover w-8"
                  />
                </span>
                Pressure to commit long-term
              </li>
              <li className="flex gap-3 items-center ">
                <span className="text-red-500">
                  <Image
                    src="/gift/doing/cross.png"
                    alt="Check icon"
                    width={1000}
                    height={800}
                    className="object-cover w-8"
                  />
                </span>
                Often don&apos;t understand your business
              </li>
            </ul>
          </div>

          {/* OUR WAY */}
          <div className="rounded-3xl p-8 text-left bg-gradient-to-br from-[#F5F5F5] to-[#FFF7F3] shadow-lg">
            <span className="inline-block mb-4 rounded-full border border-green-300 px-4 py-1 text-[20px] text-[#209910] bg-[#A8EDAF]">
              Our Way
            </span>

            <h3 className="font-semibold text-[24px] md:text-[30px] mb-4">
              The Typical Agency Model
            </h3>

            <ul className="space-y-3 text-[14px] md:text-[20px] text-gray-700">
              <li className="flex gap-3 items-center">
                <span className="text-green-600">
                  <Image
                    src="/gift/doing/tick1.png"
                    alt="Check icon"
                    width={1000}
                    height={800}
                    className="object-cover w-8"
                  />
                </span>
                Experience our process risk-free
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-green-600">
                  <Image
                    src="/gift/doing/tick1.png"
                    alt="Check icon"
                    width={1000}
                    height={800}
                    className="object-cover w-8"
                  />
                </span>
                See exactly where you stand
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-green-600">
                  <Image
                    src="/gift/doing/tick1.png"
                    alt="Check icon"
                    width={1000}
                    height={800}
                    className="object-cover w-8"
                  />
                </span>
                Get a custom strategy built for you
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-green-600">
                  <Image
                    src="/gift/doing/tick1.png"
                    alt="Check icon"
                    width={1000}
                    height={800}
                    className="object-cover w-8"
                  />
                </span>
                Decide for yourself, no pressure
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM ADVANTAGE CARD */}
        <div className="mt-12 rounded-3xl bg-gradient-to-br from-[#F5F5F5] to-[#FFF7F3] p-10 shadow-lg">
          <div className="flex justify-center mb-4">
            <span className="text-green-600 text-2xl">
              <Image
                    src="/gift/doing/tick2.png"
                    alt="Check icon"
                    width={1000}
                    height={800}
                    className="object-cover w-16"
                  />
            </span>
          </div>

          <h4 className="font-semibold text-[18px] md:text-[30px] mb-2">
            This is our competitive advantage.
          </h4>

          <p className="text-[14px] md:text-[20px] text-gray-600 max-w-7xl mx-auto">
            We&apos;re so confident in the quality of our work, we lead with
            free value and let results speak for themselves. We&apos;re not
            after every deal—we&apos;re after the right partnerships.
          </p>
        </div>
      </div>
    </section>
  );
}
