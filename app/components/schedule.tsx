import { useState } from "react";

const scheduleFrame = "/characters/06.png";

type ScheduleItem = {
  time: string;
  title: string;
  details?: string;
  location?: string;
};

const scheduleDec20: ScheduleItem[] = [
  {
    time: "09:00 AM",
    title: "Registration & Welcome Coffee",
    details: "Main Lobby",
  },
  {
    time: "10:00 AM",
    title: "Opening Session: Storytelling",
    details: '"Oridathoridath... Why we still need stories?" by Kalyani',
  },
  {
    time: "11:00 AM",
    title: "Creative Workshop Track A",
    details:
      "• Blueprint Magic: A Cyanotype Workshop (Kadeeja)\n• The Salad Studio (Arunima)\n• Zine Making Workshop (Community 40)\n• Resin Art Workshop",
  },
  {
    time: "12:00 PM",
    title: "Tech Session: Sonic Pi",
    details: "Live Coding Music (Niyaska) - *Laptop Required*",
  },
  {
    time: "01:00 PM",
    title: "Lunch Break & Exploration",
    details: "Experience Stations, Retro Zone, & Skateboarding Area",
  },
  {
    time: "03:00 PM",
    title: "Studio & Craft Sessions",
    details:
      '• Intro to Music Production (Suraj)\n• Crochet Workshop (Steffi Lazar)\n• Panel: "Why do we need third spaces?"',
  },
  {
    time: "04:00 PM",
    title: "Interactive Gaming",
    details:
      "Murder Mystery: Blood on the Clock Tower\n(A Social Deduction Experience)",
  },
  {
    time: "05:00 PM",
    title: "Making & Pitching",
    details: "• Telescope Making Workshop\n• Project Exhibition & Pitching",
  },
  {
    time: "06:00 PM",
    title: "Culturals & Main Event",
    details:
      "• Culmination of AI Wednesday & Maker Thursday\n• The TinkerSpace Story",
  },
];

const scheduleNightShift: ScheduleItem[] = [
  {
    time: "10:00 PM",
    title: "Late Night Makers",
    details:
      "• Understanding 3D Printing & Digital Manufacturing\n• Design Literacy using AI (Nandana)\n• Building a Hardware Project (Shan, Rio, Ryyan)",
  },
  {
    time: "10:00 PM",
    title: "Socials & Gaming",
    details:
      "• VR Duel Competition: Shoot & Scoot (Abdul Samad)\n• Grill Night: Food & Networking",
  },
  {
    time: "01:00 AM",
    title: "Chill Zone",
    details: "Late Night Watch Party",
  },
];

const scheduleDec21: ScheduleItem[] = [
  {
    time: "07:00 AM",
    title: "Morning Fitness",
    details: "Zumba Session (Abin Mary)",
  },
  {
    time: "10:00 AM",
    title: "Morning Keynote",
    details: "Bavarasa (Nandana A S)",
  },
  {
    time: "11:00 AM",
    title: "Art & Performance",
    details:
      "• Water Colour Roses + Brush Pen Calligraphy (Fathima)\n• Theatre Workshop",
  },
  {
    time: "01:00 PM",
    title: "Skills & Sustainability",
    details:
      "• Touch Designer Workshop (Rishi)\n• Money Matters (Muhsin)\n• Grow Your Own Microgreens (ZoeOrganics)",
  },
  {
    time: "02:00 PM",
    title: "Crafting Hour",
    details:
      "• Doll Making Workshop\n• Fold & Create: Origami Workshop (Shyam Prasad)",
  },
  {
    time: "04:00 PM",
    title: "Closing Ceremony",
    details: "Useless Project Showcase & Graduation",
  },
];

export default function Schedule() {
  const [selectedDate, setSelectedDate] = useState("Dec 20");

  const scheduleData =
    selectedDate === "Dec 20"
      ? scheduleDec20
      : selectedDate === "Night Shift"
        ? scheduleNightShift
        : scheduleDec21;

  return (
    <div className="bg-[#ff0000] flex items-center justify-between px-4 sm:px-[186px] py-[22px] relative w-full overflow-hidden">
      {/* Radial Starburst Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1836.98px] h-[1836.98px]"
          style={{
            background: `repeating-conic-gradient(
              from 0deg at 50% 50%,
              #ff0000 0deg 15deg,
              #ffffff 15deg 30deg
            )`,
            boxShadow: "0px 4.137px 4.137px 0px rgba(0,0,0,0.25)",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="basis-0 flex flex-col gap-[9px] grow items-center justify-center min-h-px min-w-px relative shrink-0 z-10 w-full overflow-hidden">
        {/* Schedule Title */}
        <div className="flex h-[99.368px] items-center justify-center relative shrink-0 w-[272.976px]">
          <div className="flex-none rotate-2">
            <div className="bg-white border-2 border-[#0040ff] border-solid flex items-center justify-center relative shadow-[-4px_4px_0px_0px_#000000] w-[270px]">
              <p className="[text-shadow:rgba(0,0,0,0.25)_0px_4px_4px] font-poppins text-[40px] sm:text-[60px] text-black text-center tracking-[-4.8px]">
                Schedule
              </p>
            </div>
          </div>
        </div>

        {/* Date Buttons */}
        <div className="flex gap-[10px] items-center justify-center px-0 py-[10px] relative shrink-0 flex-wrap">
          <button
            onClick={() => setSelectedDate("Dec 20")}
            className={`bg-white border-[#4d93ff] border-[1.369px] border-solid flex items-start overflow-clip p-[4.565px] relative shadow-[-1.826px_1.826px_0px_0px_#000000] w-[152.455px] transition-all ${
              selectedDate === "Dec 20"
                ? "border-[#0040ff] border-2 scale-105"
                : ""
            }`}
          >
            <p className="font-poppins text-[20px] sm:text-[27.387px] text-black text-center tracking-[-2.191px] w-full">
              Dec 20
            </p>
          </button>
          <button
            onClick={() => setSelectedDate("Night Shift")}
            className={`bg-white border-[#4d93ff] border-[1.369px] border-solid flex items-start overflow-clip p-[4.565px] relative shadow-[-1.826px_1.826px_0px_0px_#000000] w-[152.455px] transition-all ${
              selectedDate === "Night Shift"
                ? "border-[#0040ff] border-2 scale-105"
                : ""
            }`}
          >
            <p className="font-poppins text-[18px] sm:text-[24px] text-black text-center tracking-[-2.191px] w-full">
              Night Shift
            </p>
          </button>
          <button
            onClick={() => setSelectedDate("Dec 21")}
            className={`bg-white border-[#4d93ff] border-[1.369px] border-solid flex items-start overflow-clip p-[4.565px] relative shadow-[-1.826px_1.826px_0px_0px_#000000] w-[152.455px] transition-all ${
              selectedDate === "Dec 21"
                ? "border-[#0040ff] border-2 scale-105"
                : ""
            }`}
          >
            <p className="font-poppins text-[20px] sm:text-[27.387px] text-black text-center tracking-[-2.191px] w-full">
              Dec 21
            </p>
          </button>
        </div>

        {/* Schedule Container */}
        <div className="flex h-auto items-center justify-center relative shrink-0 w-full max-w-[828px] overflow-hidden">
          <div className="flex-none rotate-359 w-full">
            <div className="bg-white border-4 border-[#9f76ff] border-solid flex flex-col h-auto items-center justify-center pb-[4px] pt-[36px] px-4 sm:px-[36px] relative shadow-[-4px_4px_0px_-5px_#000000] w-full overflow-hidden">
              {/* Character Image */}
              <div className="absolute hidden lg:flex h-[195.882px] items-center justify-center right-0 top-[94.91px] w-[147.642px] z-9999">
                <div className="flex-none rotate-11">
                  <div className="h-[177px] overflow-clip relative w-[116px]">
                    <img
                      alt=""
                      className="absolute left-0 max-w-none size-full top-0"
                      src={scheduleFrame}
                    />
                  </div>
                </div>
              </div>

              {/* Schedule Items */}
              {scheduleData.map((item, index) => (
                <div
                  key={index}
                  className={`border-b-2 border-gray-200 border-solid flex flex-col sm:flex-row gap-4 sm:gap-[24px] items-start justify-center pb-[2px] pt-[24px] px-4 sm:px-[16px] relative shrink-0 w-full ${
                    index === scheduleData.length - 1 ? "border-b-0" : ""
                  }`}
                >
                  <div className="h-[42px] relative shrink-0 w-[140px]">
                    <p className="font-poppins font-bold text-[20px] sm:text-[28px] text-[#2957ff] tracking-[-1.5px]">
                      {item.time}
                    </p>
                  </div>
                  <div className="flex-1 flex flex-col gap-[4px] h-auto items-start relative w-full">
                    <p className="font-poppins text-[24px] sm:text-[32px] text-black tracking-[-1.8px]">
                      {item.title}
                    </p>
                    {item.details && (
                      <p className="font-poppins font-light italic text-[14px] sm:text-[18px] text-[#4a5565] whitespace-pre-line">
                        {item.details.startsWith("•")
                          ? item.details
                          : `• ${item.details}`}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
