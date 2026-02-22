export default function TopMarquee() {
  return (
    <div className="w-full overflow-hidden bg-[#FE641A]/80 h-28 md:h-32 flex items-center">
      <div className="relative flex whitespace-nowrap w-full">
        <div className="animate-marquee flex items-center gap-16 text-white text-[30px] md:text-[48px] leading-none">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16 uppercase">
              <span>One system </span>
              <span>✦</span>
              <span>Three steps</span>
              <span>✦</span>
              <span>Real growth</span>
              <span>✦</span>
              <span>One system </span>
              <span>✦</span>
              <span>Three steps</span>
              <span>✦</span>
              <span>Real growth</span>
              <span>✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
