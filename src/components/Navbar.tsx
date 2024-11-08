import { Link } from "react-scroll";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({className}) => {
  return (
    <header className={`sticky top-0 z-50 ${className}`}>
      <nav className="flex justify-between p-4 h-12 items-center bg-black/30 backdrop-blur-md border-b border-white/20 shadow-lg supports-[backdrop-filter]:bg-black/60 text-white">
        <span className="hidden md:flex">
          <img src="/reezebolt.png" alt="Reezebolt" width="32px" />
        </span>

        {/* Desktop Navigation */}
        <div className="flex mx-auto md:m-0">
          <ul className="flex text-[75%] md:text-base items-center gap-3 md:gap-4">
            <li>
              <Link className="cursor-pointer" to="hero" smooth={true} duration={700}>
                Home
              </Link>
            </li>
            <li>
              <Link className="cursor-pointer" to="productPreview" smooth={true} duration={700}>
                Overview
              </Link>
            </li>
            <li>
              <Link className="cursor-pointer" to="features" smooth={true} duration={700}>
                Features
              </Link>
            </li>
            <li>
              <Link className="cursor-pointer" to="pricing" smooth={true} duration={700}>
                Pricing
              </Link>
            </li>
            <li>
              <Link className="cursor-pointer" to="aboutUs" smooth={true} duration={700}>
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
