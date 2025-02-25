import React from "react";
import ComponentTransition from "../../component/element/ComponentTransition";
import Image from "next/image";
import WesleyLogo from "@/../public/weslogo.png";
import JoshuaLogo from "@/../public/joshlogo.png";
import AneeshLogo from "@/../public/aneeshlogo.png";
import MorganLogo from "@/../public/morganlogo.png";

const About = () => {
  const teamMembers = [
    {
      name: "Wesley Bookland",
      role: "Founder & CMO",
      bio: "Previously built a $1.6M automotive sales team with just 4 salespeople in his first year. Identified critical inefficiencies in automotive sales processes that could be solved with AI, leading to the founding of AutomotiveAI.",
      image: WesleyLogo,
      hasGlow: true,
      objectPosition: "center 25%",
      imageScale: "scale-150",
    },
    {
      name: "Joshua Boyd",
      role: "Founder & CEO",
      bio: "Broke multiple store records in automotive sales before transitioning to building custom tech solutions for leading Western automotive companies. Drives product vision and development, ensuring solutions deliver measurable value to dealerships.",
      image: JoshuaLogo,
      hasGlow: true,
      objectPosition: "center 20%",
      imageScale: "scale-150",
    },
    {
      name: "Aneesh Bhat",
      role: "Founder & CTO",
      bio: "Ex-Red Hat engineer specializing in enterprise-grade solutions. Designs and builds the scalable systems powering AutomotiveAI. Recently accepted into IIT's Data Science and Machine Learning program to further enhance AI capabilities.",
      image: AneeshLogo,
      hasGlow: true,
      objectPosition: "center 20%",
      imageScale: "scale-150",
    },
    {
      name: "Morgan Kennedy",
      role: "VP of Sales",
      bio: "Top performer with 4 years at leading automotive companies. Bridges product development with real-world implementation, documenting measurable results and ROI for dealerships adopting AutomotiveAI solutions.",
      image: MorganLogo,
      hasGlow: true,
      objectPosition: "center 25%",
      imageScale: "scale-150",
    },
  ];

  return (
    <ComponentTransition className="h-auto max-w-[1500px] px-10 xl:px-20">
      <section className="py-20">
        <div className="max-w-[1500px] mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-7xl py-5 px-10 text-center dark:bg-gradient-to-r from-white from-50% to-black bg-text bg-clip-text text-transparent font-bold">
              Our Team
            </h1>
            <p className="text-base md:text-2xl text-neutral-500 text-center">
              Meet the visionaries and leaders behind our success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="relative mb-6 inline-block">
                  <div
                    className={`w-48 h-48 mx-auto rounded-full overflow-hidden ${
                      member.hasGlow
                        ? "shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                        : ""
                    }`}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={192}
                      height={192}
                      className="object-cover w-full h-full"
                      style={{
                        objectPosition: member.objectPosition || "center 20%",
                      }}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-neutral-800 dark:text-neutral-200 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ComponentTransition>
  );
};

export default About;
