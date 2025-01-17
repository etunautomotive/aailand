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
      role: "Co-Founder - CEO",
      bio: "Wesley started in automotive sales four years ago, quickly rising to own and operate his own team. In his first year, he achieved over $1.6 million in gross sales with a lean team of four salespeople, two of whom are now on the founding team – Josh and Morgan. This success inspired him to co-found AutomotiveAI, leveraging AI to transform automotive sales processes.",
      image: WesleyLogo,
      hasGlow: true,
      objectPosition: "center 25%",
      imageScale: "scale-150",
    },
    {
      name: "Joshua Boyd",
      role: "Co-Founder - CTO",
      bio: "Joshua joined Wesley Bookland's first team, where he broke multiple store and team records in automotive sales. He quickly transitioned to building custom technical solutions for Wesley’s team and eventually other leading Western automotive companies before AAI. As CTO, he drives development and ensures the product delivers real value to users.",
      image: JoshuaLogo,
      hasGlow: true,
      objectPosition: "center 20%",
      imageScale: "scale-150",
    },
    {
      name: "Aneesh Bhat",
      role: "Backend & Systems Architect",
      bio: "Aneesh designs and builds the systems that power the product. He previously worked at Red Hat, specializing in scalable, enterprise-grade solutions. Recently, he was accepted into a Data Science and Machine Learning program at the Indian Institute of Technology, further expanding his expertise.",
      image: AneeshLogo,
      hasGlow: true,
      objectPosition: "center 20%",
      imageScale: "scale-150",
    },
    {
      name: "Morgan Kennedy",
      role: "VP of Sales",
      bio: "Morgan brings extensive domain expertise in automotive sales, with 4 years at leading Western automotive companies. He previously ranked as a consistent top performer, specializing in customer solutions. Recently at AutomotiveAI, he focuses on bridging product theory with measurable results through documented real-world use cases.",
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
