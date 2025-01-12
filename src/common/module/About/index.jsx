import React from "react";
import ComponentTransition from "../../component/element/ComponentTransition";
import Image from "next/image";

const About = () => {
  const teamMembers = [
    {
      name: "Wesley Bookland",
      role: "CEO",
      bio: "Starting in the auto industry as a BDR, Wesley quickly progressed to a closer, then to a team lead. He went on to hire and build the founding team, demonstrating exceptional leadership and vision for the company.",
      image: "/weslogo.png",
    },
    {
      name: "Joshua Boyd",
      role: "CTO",
      bio: "A long-time friend and college teammate of Wesley, Joshua joined the sales team as a BDR, progressed to closer, and then to tech lead. His technical leadership has been instrumental in the company's growth.",
      image: "/joshb.jpeg",
      hasGlow: true,
      objectPosition: "center 15%",
    },
    {
      name: "Aneesh Vhat",
      role: "Tech Lead",
      bio: "Hired under Joshua's leadership, Aneesh has played a crucial role in building and managing the unified system architecture, bringing technical expertise to separate ventures.",
      image: "/aneeshlogo.png",
    },
    {
      name: "Morgan Kennedy",
      role: "User / Closer",
      bio: "A long-time best friend of Wesley Bookland, Morgan transitioned from blue-collar work to pursue white-collar opportunities, becoming a top-performing sales agent under Wesley's leadership.",
      image: "/morganlogo.png",
      hasGlow: true,
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
