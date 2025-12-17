import Marquee from "./marquee";

export default function LocationMaps() {
  return (
    <div className="bg-[#8082ff] flex flex-col gap-[10px] items-center justify-center px-4 sm:px-8 lg:px-16 py-16 sm:py-[100px] relative w-full overflow-visible">
      {/* Marquee */}
      <div className="absolute -top-[2%] left-0 inset-x-0 z-10">
        <Marquee />
      </div>

      {/* Maps Container */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center justify-center px-0 py-[32px] relative shrink-0 w-full z-10 max-w-7xl">
        {/* Bus Timing Table */}
        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          <p className="font-poppins leading-none not-italic relative shrink-0 text-[24px] sm:text-[32.932px] text-nowrap text-white uppercase whitespace-pre z-10 text-center">
            Bus Timing
          </p>
          <div className="w-full max-w-[600px] lg:max-w-none bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#5c5ed7]">
                    <th className="font-poppins text-[14px] sm:text-[16px] font-semibold text-white text-left p-3 sm:p-4 border-b-2 border-black">
                      Route
                    </th>
                    <th className="font-poppins text-[14px] sm:text-[16px] font-semibold text-white text-left p-3 sm:p-4 border-b-2 border-black">
                      Timing
                    </th>
                    <th className="font-poppins text-[14px] sm:text-[16px] font-semibold text-white text-left p-3 sm:p-4 border-b-2 border-black">
                      Location
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="font-poppins text-[12px] sm:text-[14px] text-black p-3 sm:p-4">
                      City Center to TinkerSpace
                    </td>
                    <td className="font-poppins text-[12px] sm:text-[14px] text-black p-3 sm:p-4">
                      6:00 AM - 10:00 PM
                    </td>
                    <td className="font-poppins text-[12px] sm:text-[14px] text-black p-3 sm:p-4">
                      Bus Stand, MG Road
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="font-poppins text-[12px] sm:text-[14px] text-black p-3 sm:p-4">
                      Railway Station to TinkerSpace
                    </td>
                    <td className="font-poppins text-[12px] sm:text-[14px] text-black p-3 sm:p-4">
                      Every 30 mins
                    </td>
                    <td className="font-poppins text-[12px] sm:text-[14px] text-black p-3 sm:p-4">
                      Ernakulam Junction
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="font-poppins text-[12px] sm:text-[14px] text-black p-3 sm:p-4">
                      Airport to TinkerSpace
                    </td>
                    <td className="font-poppins text-[12px] sm:text-[14px] text-black p-3 sm:p-4">
                      7:00 AM - 9:00 PM
                    </td>
                    <td className="font-poppins text-[12px] sm:text-[14px] text-black p-3 sm:p-4">
                      Cochin International Airport
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="font-poppins text-[12px] sm:text-[14px] text-black p-3 sm:p-4">
                      Thrikkakara Local
                    </td>
                    <td className="font-poppins text-[12px] sm:text-[14px] text-black p-3 sm:p-4">
                      Every 15 mins
                    </td>
                    <td className="font-poppins text-[12px] sm:text-[14px] text-black p-3 sm:p-4">
                      Thrikkakara Bus Stop
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Nearby Stay Map */}
        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          <p className="font-poppins leading-none not-italic relative shrink-0 text-[24px] sm:text-[32.932px] text-nowrap text-white uppercase whitespace-pre z-10 text-center">
            Nearby Stay Near TinkerSpace
          </p>
          <div className="w-full aspect-square max-w-[600px] lg:max-w-none rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15715.857789123!2d76.333!3d10.033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shotels+near+21%2F258+Vidya+Nagar+Colony+Thrikkakara+Kochi!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nearby Stay Near TinkerSpace"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
