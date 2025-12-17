import { useState, useEffect } from "react";

type EventCardProps = {
  title: string;
  by: string;
  date: string;
  time: string;
  category: string;
  rotation?: string;
  link?: string;
};

function EventCard({
  title,
  by,
  date,
  time,
  category,
  rotation = "rotate-0",
  link,
}: EventCardProps) {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Extract rotation value (e.g., "2deg" from "rotate-[2deg]")
  const rotationValue = rotation
    .replace("rotate-", "")
    .replace("[", "")
    .replace("]", "")
    .replace("deg", "");

  return (
    <div
      className={`flex h-[133.874px] items-center justify-center relative shrink-0 w-[180.167px] transition-transform duration-300 ease-out hover:scale-110 hover:z-20`}
    >
      <div
        className="flex-none"
        style={{
          transform: isMobile ? "none" : `rotate(${rotationValue}deg)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white block border-[#4d93ff] border-[1.443px] border-solid cursor-pointer h-[130.789px] overflow-clip relative shadow-[-1.923px_1.923px_0px_0px_#000000] w-[177.911px] hover:shadow-[-2.5px_2.5px_0px_0px_#000000] transition-all duration-300 no-underline"
          >
            <div className="relative p-3 h-full flex flex-col">
              <p className="font-poppins sm:text-[15.39px] text-[14px] text-black tracking-[-1.2312px] mb-1">
                {title}
              </p>
              {by && (
                <p className="font-instrument-serif italic sm:text-[12.02px] text-[14px] text-black mb-auto">
                  by {by}
                </p>
              )}
              {!by && <div className="mb-auto" />}
              <div className="flex justify-between items-end mt-auto">
                <p className="font-poppins sm:text-[10.39px] text-[12px] text-black tracking-[-0.8312px]">
                  {category}
                </p>
                <div className="font-poppins sm:text-[7.44px] text-[9px] text-black text-right tracking-[-0.5952px]">
                  <p className="leading-normal mb-0">
                    <span className="font-instrument-serif italic sm:text-[7.44px] text-[12px]">
                      date
                    </span>
                    <span className="sm:text-[7.44px] text-[8px]">{` : ${date}`}</span>
                  </p>
                  <p className="leading-normal">
                    <span className="font-instrument-serif italic sm:text-[7.44px] text-[12px]">
                      time
                    </span>
                    <span className="sm:text-[7.44px] text-[8px]">{` : ${time}`}</span>
                  </p>
                </div>
              </div>
            </div>
          </a>
        ) : (
          <button className="bg-white block border-[#4d93ff] border-[1.443px] border-solid cursor-pointer h-[130.789px] overflow-clip relative shadow-[-1.923px_1.923px_0px_0px_#000000] w-[177.911px] hover:shadow-[-2.5px_2.5px_0px_0px_#000000] transition-all duration-300">
            <div className="relative p-3 h-full flex flex-col">
              <p className="font-poppins sm:text-[15.39px] text-[14px] text-black tracking-[-1.2312px] mb-1">
                {title}
              </p>
              {by && (
                <p className="font-instrument-serif italic sm:text-[12.02px] text-[14px] text-black mb-auto">
                  by {by}
                </p>
              )}
              {!by && <div className="mb-auto" />}
              <div className="flex justify-between items-end mt-auto">
                <p className="font-poppins sm:text-[10.39px] text-[12px] text-black tracking-[-0.8312px]">
                  {category}
                </p>
                <div className="font-poppins sm:text-[7.44px] text-[9px] text-black text-right tracking-[-0.5952px]">
                  <p className="leading-normal mb-0">
                    <span className="font-instrument-serif italic sm:text-[7.44px] text-[12px]">
                      date
                    </span>
                    <span className="sm:text-[7.44px] text-[8px]">{` : ${date}`}</span>
                  </p>
                  <p className="leading-normal">
                    <span className="font-instrument-serif italic sm:text-[7.44px] text-[12px]">
                      time
                    </span>
                    <span className="sm:text-[7.44px] text-[8px]">{` : ${time}`}</span>
                  </p>
                </div>
              </div>
            </div>
          </button>
        )}
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
    // Day 1: Saturday (Dec 20)
    {
      title: "Oridathoridath... Why we still need stories?",
      by: "Kalyani",
      date: "20/12/25",
      time: "10:00am - 11:00am",
      category: "storytelling",
      rotation: "rotate-[2deg]",
      link: "https://tinkerhub.org/events/T0UF5MLMP9/oridathoridath….why-we-still-need-stories???",
    },
    {
      title: "Blueprint Magic: A Cyanotype Workshop",
      by: "Kadeeja",
      date: "20/12/25",
      time: "11:00am - 12:00pm",
      category: "workshop",
      rotation: "rotate-[359deg]",
      link: "https://tinkerhub.org/events/PVFE1S9ET7/blueprint-magic:-a-cyanotype-workshop",
    },
    {
      title: '"The Salad Studio" Creative Salad-Making',
      by: "Arunima",
      date: "20/12/25",
      time: "11:00am - 12:00pm",
      category: "workshop",
      rotation: "rotate-[1deg]",
      link: 'https://tinkerhub.org/events/JZXKCMI9LE/"the-salad-studio"---a-creative-salad-making-workshop',
    },
    {
      title: "Zine Making Workshop",
      by: "Community 40",
      date: "20/12/25",
      time: "11:00am - 12:00pm",
      category: "workshop",
      rotation: "rotate-0",
      link: "https://tinkerhub.org/events/KWI5URZPRA/hortus-malabaricus---zine-making-workshop",
    },
    {
      title: "Resin Art Workshop",
      by: "TinkerSpace Team",
      date: "20/12/25",
      time: "11:00am - 12:00pm",
      category: "workshop",
      rotation: "rotate-[358deg]",
    },
    {
      title: "Sonic Pi Workshop (Live Coding Music)",
      by: "Niyaska",
      date: "20/12/25",
      time: "12:00pm - 01:00pm",
      category: "tech",
      rotation: "rotate-[359deg]",
      link: "https://tinkerhub.org/events/HA6VRFJLUR/sonic-pi-workshop",
    },
    {
      title: "Intro to Music Production (Studio Sessions)",
      by: "Suraj Sunil (Onebit)",
      date: "20/12/25",
      time: "03:00pm - 04:00pm",
      category: "music",
      rotation: "rotate-[2deg]",
      link: "https://tinkerhub.org/events/KRVKP4OOBB/studio-session-by-onebit.---intro-to-music-production",
    },
    {
      title: "Crochet Workshop",
      by: "Steffi Lazar",
      date: "20/12/25",
      time: "03:00pm - 04:00pm",
      category: "craft",
      rotation: "rotate-[358deg]",
      link: "https://tinkerhub.org/events/NTM34PIG6S/crochet-workshop",
    },
    {
      title: 'Panel Discussion: "Why do we need third spaces?"',
      by: "Pre Publication Team",
      date: "20/12/25",
      time: "03:00pm - 04:00pm",
      category: "discussion",
      rotation: "rotate-[2deg]",
    },
    {
      title: "Telescope Making Workshop",
      by: "Science Team",
      date: "20/12/25",
      time: "04:00pm - 05:00pm",
      category: "science",
      rotation: "rotate-[359deg]",
      link: "https://tinkerhub.org/events/JPQQS5CAJ1/make-a-telescope-workshop",
    },
    {
      title: "Murder Mystery: Blood on the Clock Tower",
      by: "Game Masters",
      date: "20/12/25",
      time: "04:00pm - 05:00pm",
      category: "gaming",
      rotation: "rotate-[1deg]",
    },
    {
      title: "Culturals & The TinkerSpace Story",
      by: "",
      date: "20/12/25",
      time: "06:00pm - 10:00pm",
      category: "event",
      rotation: "rotate-0",
    },
    {
      title: "Understanding 3D Printing & Digital Manufacturing",
      by: "Nadec",
      date: "20/12/25",
      time: "10:00pm - 12:00am",
      category: "tech",
      rotation: "rotate-[358deg]",
    },
    {
      title: "Design Literacy: Build Design using AI",
      by: "Nandana",
      date: "20/12/25",
      time: "10:00pm - 12:00am",
      category: "tech",
      rotation: "rotate-[2deg]",
    },
    {
      title: "Building a Hardware Project",
      by: "Shan, Rio, and Ryyan",
      date: "20/12/25",
      time: "10:00pm - 12:00am",
      category: "hardware",
      rotation: "rotate-[359deg]",
    },
    {
      title: "VR Duel Competition (Shoot and Scoot)",
      by: "Abdul Samad",
      date: "20/12/25",
      time: "10:00pm - 12:00am",
      category: "gaming",
      rotation: "rotate-[1deg]",
    },
    {
      title: "Grill Night (Networking & Food)",
      by: "",
      date: "20/12/25",
      time: "10:00pm - 12:00am",
      category: "social",
      rotation: "rotate-0",
    },
    // Day 2: Sunday (Dec 21)
    {
      title: "Late Night Watch Party",
      by: "",
      date: "21/12/25",
      time: "01:00am - 02:00am",
      category: "social",
      rotation: "rotate-[358deg]",
    },
    {
      title: "Zumba Session",
      by: "Abin Mary",
      date: "21/12/25",
      time: "07:00am - 08:00am",
      category: "fitness",
      rotation: "rotate-[2deg]",
      link: "https://tinkerhub.org/events/510WEFR8AF/zumba-session",
    },
    {
      title: "Bavarasa Session",
      by: "Nandana A S",
      date: "21/12/25",
      time: "10:00am - 11:00am",
      category: "keynote",
      rotation: "rotate-[359deg]",
      link: "https://tinkerhub.org/events/NJ2OM3PF94/bhāvarasa---classical-story-telling",
    },
    {
      title: "Water Colour Roses + Brush Pen Calligraphy",
      by: "Fathima Thamanna",
      date: "21/12/25",
      time: "11:00am - 12:00pm",
      category: "art",
      rotation: "rotate-[1deg]",
      link: "https://tinkerhub.org/events/Y1ZKBCGUSR/water-color-roses-and-brush-pen-calligraphy",
    },
    {
      title: "Theatre Workshop",
      by: "Performing Arts Team",
      date: "21/12/25",
      time: "11:00am - 12:00pm",
      category: "performance",
      rotation: "rotate-0",
    },
    {
      title: "Touch Designer Workshop",
      by: "Rishi",
      date: "21/12/25",
      time: "12:00pm - 01:00pm",
      category: "tech",
      rotation: "rotate-[358deg]",
    },
    {
      title: "Money Matters",
      by: "Muhsin",
      date: "21/12/25",
      time: "01:00pm - 02:00pm",
      category: "finance",
      rotation: "rotate-[2deg]",
      link: "https://tinkerhub.org/events/KT9KFH343E/money-matters",
    },
    {
      title: "Grow Your Own Microgreens",
      by: "ZoeOrganics",
      date: "21/12/25",
      time: "01:00pm - 02:00pm",
      category: "sustainability",
      rotation: "rotate-[359deg]",
      link: "https://tinkerhub.org/events/D4OZ7SV6G6/grow-your-own-microgreens:-a-step-towards-healthy-living",
    },
    {
      title: "Fold & Create (Origami Workshop)",
      by: "Shyam Prasad M",
      date: "21/12/25",
      time: "02:00pm - 03:00pm",
      category: "craft",
      rotation: "rotate-[1deg]",
      link: "https://tinkerhub.org/events/1WN6WDU2FN/fold-&-create---origami-workshop",
    },
    {
      title: "Doll Making Workshop",
      by: "Craft Team",
      date: "21/12/25",
      time: "02:00pm - 03:00pm",
      category: "craft",
      rotation: "rotate-0",
      link: "https://tinkerhub.org/events/2N5D4M8HIE/doll-making-workshop",
    },
    {
      title: "Useless Project Showcase & Graduation",
      by: "",
      date: "21/12/25",
      time: "04:00pm - 05:00pm",
      category: "ceremony",
      rotation: "rotate-[358deg]",
    },
  ];

  const character1 = "/characters/01.png";
  const character2 = "/characters/02.png";
  const character3 = "/characters/03.png";
  const character4 = "/characters/04.png";
  const sparkSvg = "/events/spark.svg";
  const starSvg = "/events/star.svg";

  return (
    <div className="bg-[#f9d457] flex flex-col gap-5 items-center pb-24 sm:pb-[83px] pt-16 sm:pt-[122px] px-4 sm:px-0 relative w-full min-h-screen overflow-hidden">
      {/* Spark SVG - Bottom Left */}
      <div className="absolute hidden lg:flex items-center justify-center -left-[500px] -bottom-[25%] z-0">
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
      <div className="absolute hidden lg:flex items-center justify-center -right-[12%] -top-[10%] z-0">
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
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-[0.44927px] relative sm:shadow-[-4.91px_4.91px_0px_0px_#000000] max-w-4xl mx-auto z-10">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
}
