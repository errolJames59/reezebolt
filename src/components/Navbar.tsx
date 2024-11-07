import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex justify-between p-4 h-12 items-center bg-white/70 backdrop-blur-md border-b border-white/20 shadow-lg supports-[backdrop-filter]:bg-white/30">
      <span>
        <img src="/reezebolt.png" alt="Reezebolt" width="32px" />
      </span>

      {/* Mobile Slide-Out Menu (Sheet Component) */}
      <Sheet>
        <SheetTrigger>
          {/* Hamburger Icon */}
          <div className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="13"
              viewBox="0 0 19 13"
              fill="none"
            >
              <path
                d="M17.6996 0.899994C18.1967 0.899994 18.5996 1.30294 18.5996 1.79999C18.5996 2.29705 18.1967 2.69999 17.6996 2.69999V0.899994ZM0.899609 2.69999C0.402569 2.69999 -0.000391006 2.29705 -0.000391006 1.79999C-0.000391006 1.30294 0.402569 0.899994 0.899609 0.899994V2.69999ZM17.6996 5.69999C18.1967 5.69999 18.5996 6.10295 18.5996 6.59999C18.5996 7.09703 18.1967 7.49999 17.6996 7.49999V5.69999ZM3.29961 7.49999C2.80257 7.49999 2.39961 7.09703 2.39961 6.59999C2.39961 6.10295 2.80257 5.69999 3.29961 5.69999V7.49999ZM17.6996 10.5C18.1967 10.5 18.5996 10.903 18.5996 11.4C18.5996 11.897 18.1967 12.3 17.6996 12.3V10.5ZM9.29961 12.3C8.80257 12.3 8.39961 11.897 8.39961 11.4C8.39961 10.903 8.80257 10.5 9.29961 10.5V12.3ZM17.6996 2.69999H0.899609V0.899994H17.6996V2.69999ZM17.6996 7.49999H3.29961V5.69999H17.6996V7.49999ZM17.6996 12.3H9.29961V10.5H17.6996V12.3Z"
                fill="black"
              />
            </svg>
          </div>
        </SheetTrigger>
        <SheetContent>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#product-overview">Product Overview</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              <a href="#contact-us">Contact Us</a>
            </li>
          </ul>
        </SheetContent>
      </Sheet>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8">
        <ul className="flex items-center gap-8">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#product-overview">Product Overview</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#about-us">About Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
