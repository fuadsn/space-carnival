// Star SVG path
const starSvg = "/star.svg";

type MarqueeProps = {
  rotation?: string;
  reverse?: boolean;
};

export default function Marquee({
  rotation = "-rotate-1",
  reverse = false,
}: MarqueeProps) {
  // Create multiple items for seamless looping
  const marqueeItems = Array.from({ length: 8 }, (_, i) => {
    // Vary star sizes to match design
    const starSizes = [
      { w: "w-[45px]", h: "h-[45px]" },
      { w: "w-[60px]", h: "h-[60px]" },
      { w: "w-[60px]", h: "h-[60px]" },
      { w: "w-[60px]", h: "h-[60px]" },
    ];
    const size = starSizes[i % starSizes.length];

    return (
      <div key={i} className="flex items-center gap-[60px] shrink-0">
        {/* Star icon - varying sizes */}
        <img
          src={starSvg}
          alt=""
          className={`${size.w} ${size.h} object-contain ml-10 py-2`}
        />
        <p className="font-cinema-sunday text-[24px] sm:text-[32px] text-black text-nowrap whitespace-pre leading-normal">
          tinkerspace carnival
        </p>
      </div>
    );
  });

  return (
    <div
      className={`bg-white border-y-[6px] border-black border-solid overflow-hidden h-[43.52px] sm:h-[50px] md:h-[60px] w-full relative ${rotation}`}
    >
      <div
        className={`flex items-center h-full py-1 sm:py-2 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {marqueeItems}
        {marqueeItems}
        {marqueeItems}
        {marqueeItems}
      </div>
    </div>
  );
}
