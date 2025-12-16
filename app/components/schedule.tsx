import { useState } from "react";

const scheduleFrame = "/characters/06.png";

type ScheduleItem = {
  time: string;
  title: string;
  location: string;
};

const scheduleData: ScheduleItem[] = [
  {
    time: "9:00 AM",
    title: "Registration & Welcome Coffee",
    location: "Main Lobby",
  },
  {
    time: "10:00 AM",
    title: "Opening Ceremony",
    location: "Main Stage",
  },
  {
    time: "11:00 AM",
    title: "Morning Workshop Sessions",
    location: "Workshop Halls",
  },
  {
    time: "1:00 PM",
    title: "Lunch Break & Networking",
    location: "Cafeteria",
  },
  {
    time: "2:00 PM",
    title: "Afternoon Workshop Sessions",
    location: "Workshop Halls",
  },
  {
    time: "4:00 PM",
    title: "Experience Stations Tour",
    location: "Exhibition Area",
  },
  {
    time: "6:00 PM",
    title: "Live Music Performance",
    location: "Main Stage",
  },
  {
    time: "7:30 PM",
    title: "Day 1 Closing & Dinner",
    location: "Outdoor Area",
  },
];

export default function Schedule() {
  const [selectedDate, setSelectedDate] = useState("Dec 20");

  return (
    <div className="bg-[#ff0000] flex items-center justify-between px-4 sm:px-[186px] py-[22px] relative w-full min-h-screen overflow-hidden">
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
          <div className="flex-none rotate-[2deg]">
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
                : "hover:opacity-90"
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
                : "hover:opacity-90"
            }`}
          >
            <p className="font-poppins text-[20px] sm:text-[27.387px] text-black text-center tracking-[-2.191px] w-full">
              Dec 21
            </p>
          </button>
        </div>

        {/* Schedule Container */}
        <div className="flex h-auto items-center justify-center relative shrink-0 w-full max-w-[828px]">
          <div className="flex-none rotate-[359deg] w-full">
            <div className="bg-white border-4 border-[#9f76ff] border-solid flex flex-col h-auto min-h-[902px] items-center justify-center pb-[4px] pt-[36px] px-4 sm:px-[36px] relative shadow-[-4px_4px_0px_-5px_#000000] w-full">
              {/* Character Image */}
              <div className="absolute hidden lg:flex h-[195.882px] items-center justify-center left-[711.22px] top-[94.91px] w-[147.642px] z-9999">
                <div className="flex-none rotate-[11deg]">
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
                    <p className="font-instrument-serif italic text-[16px] sm:text-[20px] text-[#4a5565]">
                      {item.location}
                    </p>
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
