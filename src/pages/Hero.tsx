import { Button } from "@/components/ui/button";
import Fan_1 from "@/components/Fan_1";
import { Link } from "react-scroll";

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section className={`min-h-screen place-content-center ${className}`}>
      <div className="flex flex-col gap-5">
        <div className="mx-auto">
          <Fan_1 className="w-3/5 md:w-full mx-auto" />
        </div>

        <div className="w-4/6 text-center mx-auto">
          <h1
            className="text-xl md:text-2xl font-semibold"
            style={{
              background: "linear-gradient(180deg, #595959 0%, #B0B0B0 100%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            "Power, Breeze, Light. Anytime, Anywhere"
          </h1>
        </div>

        <div className="mx-auto">
          <Link to="pricing" smooth={true} duration={700}>
            <Button className="w-56 h-14 font-bold">BUY NOW!</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
