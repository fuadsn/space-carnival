export default function Footer() {
  return (
    <div className="bg-white flex flex-col items-center justify-center p-8 mb-2 relative w-full min-h-[62px]">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative shrink-0 w-full max-w-7xl px-4">
        {/* Left Side - Copyright and Email */}
        <div className="flex flex-row gap-4 items-center">
          <p className="font-poppins text-[12px] sm:text-[14px] text-black">
            © {new Date().getFullYear()} TinkerSpace. All rights reserved.
          </p>
          <a
            href="mailto:jasim@tinkerhub.org"
            className="font-poppins text-[12px] sm:text-[14px] text-black hover:text-[#5c5ed7] transition-colors"
          >
            jasim@tinkerhub.org
          </a>
        </div>

        {/* Right Side - Credits */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center">
          <p className="font-poppins text-[11px] sm:text-[12px] text-black">
            Developed by <span className="font-medium text-black">Fuad</span>
          </p>

          <p className="font-poppins text-[11px] sm:text-[12px] text-black">
            Designed by <span className="font-medium text-black">Suraj</span>
          </p>
        </div>
      </div>
    </div>
  );
}
