import { useRef } from "react";
import Marquee from "./marquee";
import { useConfetti } from "../hooks/useConfetti";

const heroText = "/spaceCarnival.png";
const heroBackground = "/hero.png";

type ButtonProps = {
  className?: string;
  property1?: "Default" | "Variant2";
  onClick?: () => void;
};

function Button({ className, property1 = "Default", onClick }: ButtonProps) {
  return (
    <div
      className={className}
      data-name="Property 1=Default"
      data-node-id="147:381"
      onClick={onClick}
    >
      <div
        className="flex flex-col items-center justify-center gap-1 sm:gap-0 relative w-full"
        data-name="Hero"
        data-node-id="147:377"
      >
        <p
          className="font-poppins italic leading-tight sm:leading-[30px] text-base sm:text-[24px] text-center text-white"
          data-node-id="147:378"
        >
          Celebrating three years
        </p>
        <p
          className="font-poppins font-extrabold leading-tight sm:leading-[30px] text-base sm:text-[24px] text-center text-white"
          data-node-id="147:380"
        >
          of TinkerSpace
        </p>
      </div>
    </div>
  );
}

export default function Hero() {
  const buttonRef = useRef<HTMLDivElement>(null);
  const { canvasRef, initBurst } = useConfetti(buttonRef);

  const handleButtonClick = () => {
    initBurst();
  };

  return (
    <div className="relative size-full min-h-screen" data-node-id="17:1340">
      {/* Confetti Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-20"
        style={{ width: "100%", height: "100%" }}
      />

      {/* Hero Background */}
      <div
        className="relative size-full min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${heroBackground}')` }}
      >
        {/* Infinite Marquee - positioned on top */}
        <div className="absolute -top-4 left-0 right-0 z-10">
          <Marquee />
        </div>
        {/* Infinite Marquee - positioned on bottom */}
        <div className="absolute -bottom-7 left-0 right-0 z-10">
          <Marquee rotation="rotate-2" reverse />
        </div>
        {/* Main content container */}
        <div
          className="absolute flex flex-col gap-4 sm:gap-[22px] items-center justify-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[763px] px-4 sm:px-[39px] py-8 sm:py-[72px] mx-auto"
          data-node-id="17:1359"
        >
          {/* SPACE CARNIVAL text image */}
          <img
            src={heroText}
            alt="Space Carnival"
            className="w-full max-w-[600px] sm:max-w-[700px] md:max-w-[800px] h-auto object-contain mx-auto"
          />

          {/* Purple banner button */}
          <div
            ref={buttonRef}
            className="flex items-center justify-center relative w-full max-w-[372.811px] mx-auto"
          >
            <div className="flex-none rotate-357 w-full flex items-center justify-center">
              <Button
                className="bg-[#5c5ed7] border-2 border-black border-solid flex flex-col items-center justify-center h-auto min-h-[80px] sm:min-h-[108.662px] py-3 sm:py-[19.176px] px-4 sm:px-[34.607px] relative shadow-[5px_5px_0px_0px_#000000] w-full max-w-[280px] sm:max-w-[367.628px] cursor-pointer transition-all duration-150 ease-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#000000] mx-auto"
                onClick={handleButtonClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
