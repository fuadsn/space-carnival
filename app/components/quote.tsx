const starSvg = "/quote/star.svg";
const gridOverlay = "/quote/grid.svg";
const character = "/characters/05.png";

export default function Quote() {
  return (
    <div className="bg-white flex flex-col gap-[10px] items-center justify-center px-4 sm:px-[498px] py-16 sm:py-[83px] relative w-full h-[500px] overflow-visible">
      {/* Background Grid Overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          alt=""
          className="block max-w-none w-full h-full object-cover"
          src={gridOverlay}
        />
          </div>
          <div className="absolute hidden lg:flex items-center justify-center left-[20%] size-[310.175px] -bottom-[52%] translate-x-[-50%] translate-y-[-50%] z-10">
        <div className="flex-none">
          <div className="relative">
            <img alt="" className="block max-w-none size-full" src={character} />
          </div>
        </div>
      </div>


      {/* Purple Flower Shape */}
      <div className="absolute hidden lg:flex items-center justify-center left-[calc(50%-191px)] size-[310.175px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] z-10">
        <div className="flex-none rotate-[20deg]">
          <div className="relative size-[242px]">
            <img alt="" className="block max-w-none size-full" src={starSvg} />
          </div>
        </div>
      </div>

      {/* Quote Text */}
      <div className="font-poppins leading-[0] not-italic relative text-[32px] text-center tracking-[-2.6873px] w-full z-20">
        <p className="font-poppins italic font-extralight leading-[1.1] mb-0 text-black tracking-[-1.28px]">
          "echoes of years,{" "}
        </p>
        <p className="font-poppins italic font-extralight leading-[1.1] mb-0 tracking-[-1.28px]">
          <span className="text-black">uniting community</span>{" "}
        </p>
        <p className="leading-[1.1] tracking-[-1.28px]">
          <span className="font-poppins font-bold not-italic text-[#ff58ba]">
            in{" "}
          </span>
          <span className="font-poppins font-bold not-italic text-[#ff58ba]">
            celebration.
          </span>
          <span className="font-poppins italic font-light text-black">"</span>
        </p>
      </div>
    </div>
  );
}
