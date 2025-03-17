import React from "react";
import ComponentTransition from "../../component/element/ComponentTransition";
import Image from "next/image";
import WesleyLogo from "@/../public/weslogo.png";
import JoshuaLogo from "@/../public/joshlogo.png";
import AneeshLogo from "@/../public/aneeshlogo.png";
import JustinLogo from "@/../public/JustinLogo.png";
import MorganLogo from "@/../public/morganlogo.png";
const About = () => {
  const teamMembers = [
    {
      name: "Joshua Boyd",
      role: "Founder & CEO",
      bio: "Record-breaking car salesperson who pivoted to engineering. Built tech for auto dealers across North America. Now combines industry knowledge with technical skills to create AI tools that deliver real ROI for dealerships.",
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
      name: "Wesley Bookland",
      role: "Founder & CMO",
      bio: "Previously built a $1.6M automotive sales team with just 4 salespeople in his first year. Identified critical inefficiencies in automotive sales processes that could be solved with AI, leading to the founding of AutomotiveAI.",
      image: WesleyLogo,
      hasGlow: true,
      objectPosition: "center 25%",
      imageScale: "scale-150",
    },
    {
      name: "Morgan Kennedy",
      role: "Sales Development Representative ",
      bio: "Morgan is a seasoned sales leader with a proven track record of driving growth and building strong relationships with dealerships. She brings a deep understanding of the automotive industry and the needs of dealerships to the team.",
      image: MorganLogo,
      hasGlow: true,
    },
    {
      name: "Justin Frank",
      role: "Founder - Director of Sales & Training",
      bio: "17+ years in dealership finance and 7 years in online auto sales. Trained 400+ sales agents on revolutionary processes generating $4M monthly in gross..",
      image: JustinLogo,
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

          {/* First row - Josh, Aneesh, Wesley */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-8">
            {teamMembers.slice(0, 3).map((member, index) => (
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

          {/* Second row - Morgan and Justin centered */}
          <div className="flex justify-center gap-8">
            {teamMembers.slice(3).map((member, index) => (
              <div
                key={index + 3}
                className="text-center group hover:scale-105 transition-all duration-300 max-w-xs"
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
