import React from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import FanProduct from "@/components/fan_product";

interface PricingProps {
  className?: string;
}

const Pricing: React.FC<PricingProps> = ({ className }) => {
  const { toast } = useToast();

  const product = {
    whiteVariant: {
      name: "Reezebolt Trio",
      color: "White",
      price: 899.0,
    },
    grayVariant: {
      name: "Reezebolt Trio",
      color: "Gray",
      price: 899.0,
    },
    blackVariant: {
      name: "Reezebolt Trio",
      color: "Black",
      price: 899.0,
    },
  };

  return (
    <section
      className={`min-h-screen grid gap-20 md:gap-12 place-content-center pt-4 px-4 ${className}`}
    >
      
      <div className="mx-auto">
      <h1 className="mt-12 md:mt-0 text-center">PRICING</h1>

        <div className="grid gap-2 md:flex md:gap-4">
          {Object.values(product).map((variant, index) => (
            <div
              key={index}
              className="grid justify-center bg-gray-100 rounded-xl gap-4 p-4 shadow-lg"
            >
              <FanProduct className="mx-auto" />
              <div className="flex gap-3">
                <p>{variant.name}</p>
                <span>|</span>
                <span className="text-gray-400">{variant.color}</span>
              </div>

              <div className="flex mx-auto items-center gap-4">
                <h6 className="text-red-700">
                  {"\u20B1"} {variant.price}
                </h6>
                <div className="flex gap-1 items-center">
                  <Button className="bg-gray-300 text-black p-0 w-6 h-6">
                    -
                  </Button>

                  <span className="bg-gray-300 w-6 h-6 rounded-md flex place-content-center items-center text-[10px]">
                    1
                  </span>

                  <Button className="bg-gray-300 text-black p-0 w-6 h-6">
                    +
                  </Button>
                </div>
              </div>

              <div className="flex mx-auto gap-4">
                <Button className="bg-gray-200 hover:bg-gray-300 active:bg-gray-300 focus:bg-gray-300 text-black text-sm">
                  Cancel
                </Button>
                <Button className="bg-yellow-200 hover:bg-yellow-600 hover:text-white text-black text-sm">
                  Add to cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-100 w-screen md:w-full h-44 shadow-md md:rounded-xl">
        <div className="flex gap-3 border-b-2 p-4">
          <p>Reezebolt Trio</p>

          <span className="flex gap-4">
            <span>|</span> {"\u20B1"} {899.0}
          </span>
        </div>

        <div className="grid justify-end p-4">
          <span>
            Total: {"\u20B1"} {899.0}
          </span>
        </div>

        <div className="flex relative bottom-0">
          <Button
            className="w-4/6 mx-auto bg-placeOrderButton hover:bg-yellow-50 text-black"
            onClick={() => {
              toast({
                title: "Order placed successfully",
                description:
                  "Thank you for your purchase. Your parcel is on its way.",
              });
            }}
          >
            Place Order
          </Button>
        </div>
      </div>

    </section>
  );
};

export default Pricing;
