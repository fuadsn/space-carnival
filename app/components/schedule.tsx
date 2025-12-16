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
    time: "10:00 AM",
    title: "Opening Session",
    details:
      '"Oridathoridath... Why we still need stories?" (Storytelling Workshop)',
  },
  {
    time: "11:00 AM",
    title: "Creative Workshops Block A",
    details:
      "• Blueprint Magic (Cyanotype)\n• The Salad Studio\n• Zine Making Workshop\n• Resin Art Workshop",
  },
  {
    time: "12:00 PM",
    title: "Tech Session",
    details: "Sonic Pi Workshop (Live Coding Music)",
  },
  {
    time: "01:00 PM",
    title: "Break & Exploration",
    details: "Experience Stations, Stalls, Retro Zone, & Skateboarding Area",
  },
  {
    time: "03:00 PM",
    title: "Studio & Craft Sessions",
    details:
      '• Intro to Music Production (Studio Sessions)\n• Crochet Workshop\n• Panel Discussion: "Why do we need third spaces?"',
  },
  {
    time: "04:00 PM",
    title: "Interactive Gaming",
    details: "Murder Mystery: Blood on the Clock Tower (Social Deduction Game)",
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
      "Culmination of AI Wednesday & Maker Thursday\nThe TinkerSpace Story",
  },
];

const scheduleDec21: ScheduleItem[] = [
  {
    time: "07:00 AM",
    title: "Morning Fitness",
    details: "Zumba Session",
  },
  {
    time: "10:00 AM",
    title: "Morning Keynote",
    details: "Bavarasa Session",
  },
  {
    time: "11:00 AM",
    title: "Art & Performance",
    details: "• Water Colour Roses + Brush Pen Calligraphy\n• Theatre Workshop",
  },
  {
    time: "01:00 PM",
    title: "Skills & Sustainability",
    details:
      "• Touch Designer Workshop\n• Money Matters (Finance Talk)\n• Grow Your Own Microgreens",
  },
  {
    time: "02:00 PM",
    title: "Crafting Hour",
    details: "• Doll Making Workshop\n• Fold & Create (Origami Workshop)",
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
    selectedDate === "Dec 20" ? scheduleDec20 : scheduleDec21;

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
      <div className="basis-0 flex flex-col gap-[9px] grow items-center justify-center min-h-px min-w-px relative shrink-0 z-10">
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
        <div className="flex gap-[10px] items-center justify-center px-0 py-[10px] relative shrink-0">
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
        <div className="flex h-auto items-center justify-center relative shrink-0 w-full max-w-[828px]">
          <div className="flex-none rotate-359 w-full">
            <div className="bg-white border-4 border-[#9f76ff] border-solid flex flex-col h-auto items-center justify-center pb-[4px] pt-[36px] px-4 sm:px-[36px] relative shadow-[-4px_4px_0px_-5px_#000000] w-full">
              {/* Character Image */}
              <div className="absolute hidden lg:flex h-[195.882px] items-center justify-center left-[711.22px] top-[94.91px] w-[147.642px] z-9999">
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
