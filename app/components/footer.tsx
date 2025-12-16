const tinkerhubLogo = "/spaceLogo.svg";

export default function Footer() {
  return (
    <div className="bg-white flex flex-col items-center justify-center p-8 mb-2 relative w-full h-[62px]">
      <div className="flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[236.095px]">
        <div className=" relative shrink-0  mt-2">
          <img
            alt="TinkerHub"
            className="block max-w-none size-full"
            src={tinkerhubLogo}
          />
        </div>
      </div>
    </div>
  );
}
