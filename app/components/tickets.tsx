import Marquee from "./marquee";

const sparkSvg = "/events/spark.svg";

function TicketCard() {
  return (
    <div className="bg-[rgba(255,255,255,0)] overflow-clip relative w-full sm:h-[260px] h-[200px]">
      <img
        src="/ticket.png"
        alt="Ticket"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default function Tickets() {
  return (
    <div className="bg-[#8082ff] flex flex-col gap-[10px] items-center justify-center px-4 sm:px-[408px] py-16 sm:py-[242px] relative w-full h-[563px] overflow-visible">
      {/* Marquee */}
      <div className="absolute -top-[2%] left-0 z-10 inset-x-0 z-10">
        <Marquee />
      </div>

      {/* Title */}
      <p className="font-poppins leading-none not-italic relative shrink-0 text-[24px] sm:text-[32.932px] text-justify text-nowrap text-white uppercase whitespace-pre z-10">
        get your tickets here
      </p>

      {/* Ticket Card Container */}
      <div className="flex flex-col h-auto items-center justify-center overflow-clip px-0 py-[32px] relative shrink-0 w-full z-10">
        <div className="flex h-auto items-center justify-center relative shrink-0 w-full">
          <div className="flex-none w-full">
            <TicketCard />
          </div>
        </div>
      </div>
    </div>
  );
}
