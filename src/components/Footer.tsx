import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const style = {
    background: 'linear-gradient(180deg, #FFF 0%, #DBDBDB 100%)',
}

const Footer = () => {
  return (
    <section className="min-h-screen flex flex-col gap-10 place-content-center" style={style}>
      <div className="w-4/6 text-center mx-auto">
        <h1
          className="text-xl md:text-4xl font-semibold"
          style={{
            background: "linear-gradient(180deg, #595959 0%, #B0B0B0 100%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          "Power, Breeze, Light. Anytime, Anywhere"
        </h1>
      </div>

      <Button className="mx-auto w-56 h-14 font-bold bg-gray-400">
        BUY NOW!
      </Button>

      <div>
        <Accordion className="w-5/6 md:w-3/6 mx-auto" type="single" collapsible>

        <AccordionItem value="item-1" className="border-gray-400">
            <AccordionTrigger>What is ReezeBolt Trio?</AccordionTrigger>
            <AccordionContent>
                ReezeBolt Trio is the ultimate 3-in-1 portable device designed for power, comfort, and light — anytime, anywhere. This innovative device combines essential functionalities to provide reliable power, lighting, and cooling. Whether you're a student, an outdoor enthusiast, or someone facing frequent power outages, ReezeBolt Trio ensures you stay powered up and comfortable no matter where you are.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-gray-400">
            <AccordionTrigger>Is it portable?</AccordionTrigger>
            <AccordionContent>
                ReezeBolt Trio is compact and lightweight, making it easy to carry wherever you go. It’s designed to fit into most backpacks, allowing you to take it along with you on the go, whether you’re traveling, camping, or just moving around your home or dorm.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-gray-400">
            <AccordionTrigger>How do I charge the ReezeBolt Trio?</AccordionTrigger>
            <AccordionContent>
                ReezeBolt Trio can be easily charged using a standard USB-C or micro-USB charging cable. It charges quickly and can be recharged using a wall adapter or even a solar panel for outdoor usage.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-gray-400">
            <AccordionTrigger>Can I use multiple features at once?</AccordionTrigger>
            <AccordionContent>
                Yes! You can use all three features of the ReezeBolt Trio at the same time. Charge your devices, enjoy the light, and stay cool with the fan — all from a single portable device.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="mx-auto">
        <svg
          width="185"
          height="32"
          viewBox="0 0 185 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.0003 2.72021C8.66699 2.72021 2.66699 8.70688 2.66699 16.0802C2.66699 22.7469 7.54699 28.2802 13.9203 29.2802V19.9469H10.5337V16.0802H13.9203V13.1335C13.9203 9.78688 15.907 7.94688 18.9603 7.94688C20.4137 7.94688 21.9337 8.20022 21.9337 8.20022V11.4935H20.2537C18.6003 11.4935 18.0803 12.5202 18.0803 13.5736V16.0802H21.787L21.187 19.9469H18.0803V29.2802C21.2222 28.784 24.0833 27.1809 26.1469 24.7602C28.2105 22.3397 29.3409 19.261 29.3337 16.0802C29.3337 8.70688 23.3337 2.72021 16.0003 2.72021Z"
            fill="black"
          />
          <g clip-path="url(#clip0_53_19)">
            <path
              d="M63.0003 29.3332H71.0003C77.667 29.3332 80.3337 26.6665 80.3337 19.9998V11.9998C80.3337 5.33317 77.667 2.6665 71.0003 2.6665H63.0003C56.3337 2.6665 53.667 5.33317 53.667 11.9998V19.9998C53.667 26.6665 56.3337 29.3332 63.0003 29.3332Z"
              stroke="#292D32"
              stroke-width="3.75"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M66.9997 20.6668C69.577 20.6668 71.6663 18.5775 71.6663 16.0002C71.6663 13.4228 69.577 11.3335 66.9997 11.3335C64.4223 11.3335 62.333 13.4228 62.333 16.0002C62.333 18.5775 64.4223 20.6668 66.9997 20.6668Z"
              stroke="#292D32"
              stroke-width="3.75"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M74.5146 9.3335H74.5301"
              stroke="#292D32"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <g clip-path="url(#clip1_53_19)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M114.782 20.1376V11.1587C117.969 12.6586 120.438 14.1075 123.358 15.6696C120.949 17.0052 117.969 18.5037 114.782 20.1376ZM132.546 6.69306C131.996 5.96864 131.059 5.40475 130.061 5.21806C127.128 4.66118 108.834 4.65959 105.903 5.21806C105.103 5.36804 104.39 5.73058 103.778 6.29384C101.199 8.68728 102.007 21.5225 102.629 23.6017C102.89 24.5016 103.228 25.1506 103.654 25.5767C104.202 26.1399 104.953 26.5277 105.815 26.7017C108.23 27.2011 120.669 27.4803 130.01 26.7767C130.871 26.6267 131.632 26.2264 132.233 25.6392C134.617 23.2553 134.455 9.69922 132.546 6.69306Z"
              fill="black"
            />
          </g>
          <path
            d="M169.656 1.02891C171.293 1.00391 172.918 1.01691 174.542 1.00391C174.596 3.03491 175.42 4.86291 176.731 6.21691L176.729 6.21491C178.14 7.48591 179.976 8.30991 182 8.44991L182.028 8.45191V13.4879C180.116 13.4399 178.318 12.9989 176.697 12.2409L176.779 12.2749C175.995 11.8979 175.332 11.5109 174.702 11.0789L174.754 11.1129C174.742 14.7619 174.766 18.4109 174.729 22.0469C174.626 23.8999 174.01 25.5899 173.022 27.0009L173.042 26.9699C171.39 29.3359 168.714 30.8889 165.671 30.9809H165.657C165.534 30.9869 165.389 30.9899 165.243 30.9899C163.513 30.9899 161.896 30.5079 160.518 29.6709L160.558 29.6939C158.05 28.1849 156.32 25.6029 156 22.5999L155.996 22.5589C155.971 21.9339 155.959 21.3089 155.984 20.6969C156.474 15.9179 160.478 12.2209 165.345 12.2209C165.892 12.2209 166.428 12.2679 166.949 12.3569L166.893 12.3489C166.918 14.1979 166.843 16.0479 166.843 17.8969C166.42 17.7439 165.932 17.6549 165.423 17.6549C163.555 17.6549 161.966 18.8489 161.378 20.5159L161.369 20.5459C161.236 20.9729 161.159 21.4639 161.159 21.9719C161.159 22.1779 161.172 22.3819 161.196 22.5819L161.194 22.5579C161.526 24.6039 163.28 26.1479 165.395 26.1479C165.456 26.1479 165.516 26.1469 165.576 26.1439H165.567C167.03 26.0999 168.3 25.3129 169.018 24.1499L169.028 24.1319C169.295 23.7599 169.478 23.3099 169.539 22.8209L169.54 22.8069C169.665 20.5699 169.615 18.3459 169.627 16.1089C169.639 11.0729 169.615 6.04891 169.652 1.02591L169.656 1.02891Z"
            fill="black"
          />
          <defs>
            <clipPath id="clip0_53_19">
              <rect
                width="32"
                height="32"
                fill="white"
                transform="translate(51)"
              />
            </clipPath>
            <clipPath id="clip1_53_19">
              <rect
                width="32"
                height="32"
                fill="white"
                transform="translate(102)"
              />
            </clipPath>
          </defs>
        </svg>
        
      </div>

      <h6 className="text-center text-xs md:text-sm">Copyright @ 2024 Reezebolt. All rights reserved.</h6>
    </section>
  );
};

export default Footer;
