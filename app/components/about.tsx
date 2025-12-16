const cloud = "/cloud.svg";

export default function About() {
  return (
    <div className="bg-white flex flex-col gap-[19px] items-center justify-center px-4 sm:px-[79px] py-16 sm:py-[116px] relative w-full h-screen">
      {/* Decorative cloud - top left */}
      <div className="absolute flex h-[144px] items-center justify-center left-[calc(50%-501.15px)] top-[calc(50%-229.9px)] translate-x-[-50%] translate-y-[-50%] w-[126.945px] hidden lg:flex">
        <div className="flex-none rotate-[324deg]">
          <div className="h-[56.716px] relative w-[114px]">
            <img alt="" className="block max-w-none size-full" src={cloud} />
          </div>
        </div>
      </div>

      {/* Decorative cloud - top right */}
      <div className="absolute flex h-[234px] items-center justify-center -right-44 top-[calc(50%-166.69px)] translate-x-[-50%] translate-y-[-50%] w-[253.357px] hidden lg:flex">
        <div className="flex-none rotate-[6deg]">
          <div className="h-[100.531px] relative w-[234.198px]">
            <img alt="" className="block max-w-none size-full" src={cloud} />
          </div>
        </div>
      </div>

      {/* Title */}
      <h2 className="font-instrument-serif text-4xl sm:text-[60px] text-black text-center w-full max-w-[1118px] leading-normal">
        <span>What is </span>
        <span className="italic">Space Carnival</span>
        <span> ?</span>
      </h2>

      {/* Description */}
      <p className="font-instrument-serif text-xl sm:text-[40.99px] text-black text-center w-full max-w-[1048px] leading-normal">
        A vibrant celebration marking three incredible years of TinkerSpace's
        journey in fostering creativity, innovation, and community. Join us for
        two days of hands-on workshops, interactive sessions, creative
        showcases, and community bonding. Whether you're an artist, maker,
        thinker, or simply curious — there's something for everyone!
      </p>
    </div>
  );
}
