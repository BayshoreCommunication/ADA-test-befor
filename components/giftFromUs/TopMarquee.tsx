export default function TopMarquee() {
  return (
    <div className="w-full overflow-hidden bg-[#FE641A]/80 h-28 md:h-32 flex items-center">
      <div className="relative flex whitespace-nowrap w-full">
        <div className="animate-marquee flex items-center gap-16 text-white text-[30px] md:text-[48px] leading-none">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16">
              <span>NO COST ✦</span>
              <span>NO CONTACTS ✦</span>
              <span>NO HIDDEN FEES ✦</span>
              <span>NO COST ✦</span>
              <span>NO CONTACTS ✦</span>
              <span>NO HIDDEN FEES ✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
