import Image from "@/common/component/element/Image";
import React from "react";
import { WiDayCloudy } from "react-icons/wi";
import { FaCode } from "react-icons/fa";
import ComponentTransition from "@/common/component/element/ComponentTransition";

const Card = () => {
  return (
    <div className="py-10 flex gap-10 justify-center flex-row flex-wrap relative">
      <div className="absolute  z-[-9] glowbg w-[100%] md:w-[500px] h-[400px]  left-0 "></div>
      <ComponentTransition className="w-full overflow-hidden px-10 py-5 md:basis-[30%] h-[300px] bg-neutral-100 dark:bg-neutral-950/50 backdrop-blur-sm border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl">
        <WiDayCloudy size={50} />
        <h1 className="text-2xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
          Streamlined Success
        </h1>
        <h2 className="text-sm text-neutral-800 dark:text-neutral-300">
          Elevate Your Business with Teaser SaaS!
        </h2>
        <p className="text-base text-neutral-700 dark:text-neutral-400 mt-5 md:line-clamp-2 lg:line-clamp-4 line-clamp-3">
          Unveil the future of efficiency with Teaser SaaS – a cutting-edge
          solution designed to streamline your operations
        </p>
      </ComponentTransition>
      <ComponentTransition
        delay={0.2}
        className="w-full h-auto md:h-[300px] md:basis-[65%] overflow-hidden bg-neutral-100 border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        <Image
          src="/img1.png"
          alt="Header Image"
          width={400}
          height={400}
          loading="lazy"
          className="w-full object-cover scale-110"
        />
      </ComponentTransition>
      <ComponentTransition
        delay={0.1}
        className="w-full h-auto object-cover md:basis-[30%] overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        <Image
          src="/img.png"
          alt="Header Image"
          width={400}
          height={400}
          loading="lazy"
          className="w-auto h-auto object-cover scale-110"
        />
      </ComponentTransition>
      <ComponentTransition
        delay={0.1}
        className="w-full h-[250px]  px-10 py-5 md:basis-[30%] overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        <FaCode size={40} />
        <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
          Teaser SaaS
        </h1>
        <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
          Your Gateway to Streamlined Excellence
        </h2>
        <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
          Dive into the future of efficient business operations with Teaser
          SaaS. Our solution is crafted to streamline your SaaS experience
        </p>
      </ComponentTransition>

      <ComponentTransition
        delay={0.1}
        className="w-full h-[250px]  px-10 py-5 md:basis-[30%] relative overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        <div className="absolute  glowbg inset-0  left-0 "></div>
        <FaCode size={40} />
        <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
          Unlocking Potential
        </h1>
        <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
          Teaser SaaS - Redefining Productivity
        </h2>
        <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
          Tailored website solutions to meet specific business needs and goals.
        </p>
      </ComponentTransition>

      <ComponentTransition
        delay={0.1}
        className="w-full h-[250px]  px-10 py-5 md:basis-[30%] overflow-hidden dark:bg-[#0a0a0a] border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        <FaCode size={40} />
        <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
          Simplify, Optimize, Succeed
        </h1>
        <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
          Your Gateway to Streamlined Excellence
        </h2>
        <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
          Simplify your SaaS experience with Teaser, where optimization meets
          success
        </p>
      </ComponentTransition>
      <ComponentTransition
        delay={0.1}
        className="w-full h-[250px]  px-10 py-5 md:basis-[30%] overflow-hidden dark:bg-[#0a0a0a] border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        <FaCode size={40} />
        <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
        Efficiency Redefined
        </h1>
        <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
        Teaser - Your Strategic Partner!
        </h2>
        <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
        Teaser SaaS is more than a solution; it&rsquo;s your strategic partner in achieving operational excellence
        </p>
      </ComponentTransition>
      <ComponentTransition
        delay={0.1}
        className="w-full h-[250px]  px-10 py-5 md:basis-[30%] overflow-hidden dark:bg-[#0a0a0a] border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        <FaCode size={40} />
        <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
        Innovate with Confidence
        </h1>
        <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
        Teaser Unleashes Creativity!
        </h2>
        <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
        Teaser SaaS invites you to innovate with confidence. Our solution is a catalyst for creativity
        </p>
      </ComponentTransition>
      <ComponentTransition
        delay={0.1}
        className="w-full h-[250px]  px-10 py-5 md:basis-[30%] overflow-hidden dark:bg-[#0a0a0a] border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        <FaCode size={40} />
        <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
        Tailored Solutions for Your Unique Success!
        </h1>
        <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
        Teaser Unleashes Creativity!
        </h2>
        <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
        Your success story deserves a tailored solution. Enter Teaser SaaS – a platform customizable to meet your unique business needs.
        </p>
      </ComponentTransition>

      <ComponentTransition
        delay={0.1}
        className="w-full h-[250px]  md:basis-[30%] overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        <Image
          src="/img.png"
          alt="Header Image"
          width={400}
          height={400}
          loading="lazy"
          className="w-full h-auto object-cover scale-110"
        />
      </ComponentTransition>

      <ComponentTransition
        delay={0.1}
        className="w-full h-[250px]  px-10 py-5 md:basis-[30%] overflow-hidden dark:bg-[#0a0a0a] border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        <FaCode size={40} />
        <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
        Fast-Track Your Success
        </h1>
        <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
         Teaser SaaS Accelerates Your Journey!
        </h2>
        <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
        Teaser SaaS is your express route to success. With streamlined processes and accelerated functionalities
        </p>
      </ComponentTransition>
    </div>
  );
};

export default Card;
