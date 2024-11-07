import Fan_3 from "@/components/Fan_3";
import Fan_4 from "@/components/Fan_4";

const ProdPreview = () => {
  return (
    <section className="flex flex-col items-center w-full h-fit ">

      <div>
        <Fan_3 className="w-screen md:w-3/6"/>
        <div className="w-3/5 md:w-2/6 lg:w-3/6 lg:relative lg:bottom-16 mx-auto">
          <p className="text-sm text-center md:text-base lg:text-lg">
            “The Ultimate 3-in-1 device for power, Comfort, and light —anytime,
            anywhere". ReezeBolt Trio is designed to provide a portable and
            reliable power solution, especially for students and individuals
            facing frequent power outages. With its multi-functional design, it
            provides essential energy, lighting, and cooling wherever it's
            needed most.”
          </p>
        </div>
        <Fan_4 />
      </div>

      <div
        className="flex w-full h-28 -z-50 -translate-y-11"
        style={{
          background: "linear-gradient(360deg, #FFE525 61.9%, #FFF 100%)",
        }}
      ></div>

    </section>
  );
};

export default ProdPreview;
