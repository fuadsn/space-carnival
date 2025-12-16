import { useState, useEffect } from "react";

type EventCardProps = {
  title: string;
  by: string;
  date: string;
  time: string;
  category: string;
  rotation?: string;
};

function EventCard({
  title,
  by,
  date,
  time,
  category,
  rotation = "rotate-0",
}: EventCardProps) {
  return (
    <div
      className={`flex h-[133.874px] items-center justify-center relative shrink-0 w-[180.167px] transition-transform duration-300 ease-out hover:scale-110 hover:z-20`}
    >
      <div className={`flex-none ${rotation}`}>
        <button className="bg-white block border-[#4d93ff] border-[1.443px] border-solid cursor-pointer h-[130.789px] overflow-clip relative shadow-[-1.923px_1.923px_0px_0px_#000000] w-[177.911px] hover:shadow-[-2.5px_2.5px_0px_0px_#000000] transition-all duration-300">
          <div className="relative p-3 h-full flex flex-col">
            <p className="font-poppins text-[15.39px] text-black tracking-[-1.2312px] mb-1">
              {title}
            </p>
            <p className="font-instrument-serif italic text-[12.02px] text-black mb-auto">
              by {by}
            </p>
            <div className="flex justify-between items-end mt-auto">
              <p className="font-poppins text-[10.39px] text-black tracking-[-0.8312px]">
                {category}
              </p>
              <div className="font-poppins text-[7.44px] text-black text-right tracking-[-0.5952px]">
                <p className="leading-normal mb-0">
                  <span className="font-instrument-serif italic">date</span>
                  <span>{` : ${date}`}</span>
                </p>
                <p className="leading-normal">
                  <span className="font-instrument-serif italic">time</span>
                  <span>{` : ${time}`}</span>
                </p>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default function Events() {
  const [starRotation, setStarRotation] = useState(0);
  const [sparkRotation, setSparkRotation] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;

      // Rotate based on scroll direction
      // Positive delta (scrolling down) = clockwise rotation
      // Negative delta (scrolling up) = counter-clockwise rotation
      setStarRotation((prev) => prev + scrollDelta * 0.5);
      setSparkRotation((prev) => prev + scrollDelta * 0.5);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const events = [
    {
      title: "Music Production",
      by: "Suraj Sunil",
      date: "21/12/2025",
      time: "6 - 8 PM",
      category: "art",
      rotation: "rotate-[2deg]",
    },
    {
      title: "TouchDesigner 101",
      by: "Rishi Tinker",
      date: "21/12/2025",
      time: "6 - 8 PM",
      category: "art",
      rotation: "rotate-[359deg]",
    },
    {
      title: "Title",
      by: "person",
      date: "21/12/2025",
      time: "6 - 8 PM",
      category: "art",
      rotation: "rotate-[1deg]",
    },
    {
      title: "Title",
      by: "person",
      date: "21/12/2025",
      time: "6 - 8 PM",
      category: "art",
      rotation: "rotate-0",
    },
    {
      title: "Title",
      by: "person",
      date: "21/12/2025",
      time: "6 - 8 PM",
      category: "art",
      rotation: "rotate-[358deg]",
    },
    {
      title: "Title",
      by: "person",
      date: "21/12/2025",
      time: "6 - 8 PM",
      category: "art",
      rotation: "rotate-[359deg]",
    },
    {
      title: "Title",
      by: "person",
      date: "21/12/2025",
      time: "6 - 8 PM",
      category: "art",
      rotation: "rotate-[2deg]",
    },
    {
      title: "Title",
      by: "person",
      date: "21/12/2025",
      time: "6 - 8 PM",
      category: "art",
      rotation: "rotate-[358deg]",
    },
    {
      title: "Title",
      by: "person",
      date: "21/12/2025",
      time: "6 - 8 PM",
      category: "art",
      rotation: "rotate-[2deg]",
    },
  ];

  const character1 = "/characters/01.png";
  const character2 = "/characters/02.png";
  const character3 = "/characters/03.png";
  const character4 = "/characters/04.png";
  const sparkSvg = "/events/spark.svg";
  const starSvg = "/events/star.svg";

  return (
    <div className="bg-[#f9d457] flex flex-col gap-5 items-center pb-16 sm:pb-[83px] pt-16 sm:pt-[122px] px-4 sm:px-0 relative w-full min-h-screen h-[110vh] overflow-hidden">
      {/* Spark SVG - Bottom Left */}
      <div className="absolute hidden lg:flex items-center justify-center -left-[500px] -bottom-[40%] z-0">
        <div
          className="flex-none transition-transform duration-75 ease-out"
          style={{ transform: `rotate(${sparkRotation}deg)` }}
        >
          <div className="h-[958px] relative w-[914px]">
            <img alt="" className="block max-w-none size-full" src={sparkSvg} />
          </div>
        </div>
      </div>

      {/* Star SVG - Top Right */}
      <div className="absolute hidden lg:flex items-center justify-center -right-[12%] -top-[20%] z-0">
        <div
          className="flex-none transition-transform duration-75 ease-out"
          style={{ transform: `rotate(${starRotation}deg)` }}
        >
          <div className="relative ">
            <img alt="" className="block max-w-none size-full" src={starSvg} />
          </div>
        </div>
      </div>
      <div className="absolute hidden lg:flex items-center justify-center left-[34vw] top-[15vw] translate-x-[-50%] translate-y-[-50%] rotate-16 z-9999">
        <div className="flex-none rotate-342">
          <div className="h-[170.01px] overflow-clip relative w-[203.75px]">
            <img alt="" className="absolute" src={character1} />
          </div>
        </div>
      </div>

      {/* Character 2 - Bottom Left */}
      <div className="absolute hidden lg:flex items-center justify-center left-[calc(50%-447.71px)] top-[calc(50%+117.47px)] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex-none rotate-[8deg]">
          <div className="h-[201px] overflow-clip relative w-[136px]">
            <img
              alt=""
              className="absolute left-0 max-w-none size-full top-0"
              src={character2}
            />
          </div>
        </div>
      </div>

      {/* Character 3 - Top */}
      <div className="absolute hidden lg:flex items-center justify-center -bottom-[2%] z-9999">
        <div className="flex-none rotate-6">
          <div className="h-[186.54px] overflow-clip relative w-[144.64px]">
            <img
              alt=""
              className="absolute left-0 max-w-none size-full top-0"
              src={character3}
            />
          </div>
        </div>
      </div>

      {/* Character 4 - Top Right (Spark) */}
      <div className="absolute hidden lg:flex items-center justify-center right-[19%] bottom-[20%] z-9999">
        <div className="flex-none rotate-354">
          <div className="h-[178.35px] relative w-[157.4px]">
            <img
              alt=""
              className="block max-w-none size-full"
              src={character4}
            />
          </div>
        </div>
      </div>

      {/* Events Title */}
      <div className="flex h-[101.914px] items-center justify-center relative shrink-0 w-[234.395px] mb-4 z-10">
        <div className="flex-none rotate-3">
          <div className="bg-white border-2 border-[#0d00ff] border-solid flex items-center justify-center relative shadow-[-4px_4px_0px_0px_#000000] w-[230px]">
            <div className="bg-white border-2 border-[red] border-solid flex items-center justify-center relative shadow-[-4px_4px_0px_0px_#000000] shrink-0 w-[230px]">
              <p className="[text-shadow:rgba(0,0,0,0.25)_0px_4px_4px] font-poppins text-[40px] sm:text-[60px] text-black text-center tracking-[-4.8px]">
                Events
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[0.44927px] relative shadow-[-4.91px_4.91px_0px_0px_#000000] max-w-4xl mx-auto z-10">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
}
