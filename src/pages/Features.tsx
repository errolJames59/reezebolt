import Fan_5 from "@/components/Fan_5";
import FeaturesLine_1 from "@/components/FeaturesLine_1";
import Wire_1 from "@/components/Wire_1";

interface FeaturesProps {
  className?: string;
}

const Features: React.FC<FeaturesProps> = ({className}) => {
  return (
    <section className={`flex flex-col gap-14 relative ${className}`}>

      <div className="w-full overflow-hidden absolute right-0 flex justify-end translate-y-32 -z-50">
        <span className="translate-x-[32rem]">
          <Fan_5 className="hidden md:flex md:w-4/6 lg:w-full animate-[spin_30s_linear_infinite]" />
        </span>
      </div>

      <Wire_1 className="absolute left-0 -translate-x-12 top-12 -z-50 hidden md:flex md:z-10" />



      <div className="relative flex overflow-hidden bg-black text-white p-4">
        <div className="animate-[marquee_15s_linear_infinite] flex whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <ul key={i} className="flex shrink-0">
              <li>
                <h1 className="mx-8 font-extralight">FEATURES</h1>
              </li>
              <li>
                <h1 className="mx-8 font-extralight">FEATURES</h1>
              </li>
              <li>
                <h1 className="mx-8 font-extralight">FEATURES</h1>
              </li>
              <li>
                <h1 className="mx-8 font-extralight">FEATURES</h1>
              </li>
            </ul>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <div className="flex flex-col w-4/5 md:w-2/5 mx-auto gap-16">
        <div className="flex flex-col text-center p-4">
          <h3 className="font-bold">POWERBANK</h3>
          <ul>
            <li>Battery Capacity: 13,300 mAh</li>
            <li>Charging speed: 8 to 10 hours</li>
            <li>
              Compatibility: smartphones, tablets, wearable, portable gadgets
            </li>
            <li>I/O: USB 3.0, lightning, type-c, micro</li>
          </ul>
        </div>

        <FeaturesLine_1 className="mx-auto" />

        <div className="flex flex-col text-center p-4">
          <h3 className="font-bold">FAN</h3>
          <ul>
            <li>3 speed levels</li>
            <li>Low noise</li>
            <li>Low consumption</li>
            <li>15-hour long battery life</li>
          </ul>
        </div>

        <svg
          width="13"
          height="180"
          viewBox="0 0 20 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto"
        >
          <rect
            width="20"
            height="180"
            transform="matrix(1 0 0 -1 0 180)"
            fill="#D9D9D9"
          />
        </svg>

        <div className="flex flex-col text-center p-4">
          <h3 className="font-bold">LED Light</h3>
          <ul>
            <li>3 light modes</li>
            <li>(Cool light, Warm light, High light)</li>
            <li>Life span: 20,000 - 40,000 hours</li>
          </ul>
        </div>

        <FeaturesLine_1 className="mx-auto rotate-180" />

        <div className="flex flex-col text-center p-4 gap-12">
          <div>
            <h3 className="font-bold mb-4">HOW REEZEBOLT TRIO WORKS:</h3>
            <p className="text-sm">
              The 3-in-1 device operates through a touch-sensitive panel where
              pressing it activates the LED light cycling through cool, warm,
              and high brightness modes with each touch, while a separate button
              controls the fan's three speed levels (low, medium, high). The
              integrated 13,300 mAh powerbank function works simultaneously,
              allowing you to charge external devices through the USB port while
              using either the light or fan features, or both at the same time.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
