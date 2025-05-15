"use client";
import GridSparkles from "@/common/component/element/GridSparkles";
import VideoPlayer from "@/common/component/video player/videoplayer";
import { motion } from "framer-motion";
import PurpleHighlight from "@/common/component/Herohighlight/hero-highlight";
import SocialProof from "@/common/component/social-proof/SocialProof";

const dealerAvatars = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/45.jpg",
  "https://randomuser.me/api/portraits/men/46.jpg"
];

const VslHero = ({ heading, subheading, videoId, actionButton }) => {
  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // Apple-like cubic bezier curve
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: custom * 0.2,
        ease: [0.22, 1, 0.36, 1],
      }
    })
  };

  // Container animations that control sequence
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.15,
        when: "beforeChildren"
      }
    }
  };

  // Helper to highlight the target phrase
  const renderHeading = (heading) => {
    const target = "$300K in Gross Profit";
    const idx = heading.indexOf(target);
    if (idx === -1) return heading;
    return <>
      {heading.slice(0, idx)}
      <PurpleHighlight>{target}</PurpleHighlight>
      {heading.slice(idx + target.length)}
    </>;
  };

  return (
    <motion.div 
      className="h-auto md:mb-10 max-w-[1500px] px-5 lg:px-10 mt-20 relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex flex-col justify-center md:top-0 mt-28 lg:mt-36 items-center">
        <div className="flex flex-col items-center justify-center">
          <motion.div 
            className="xl:w-[80%] 2xl:w-[80%] flex justify-center"
            variants={headingVariants}
          >
            {heading && (
              <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-br from-black to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent py-4 px-6">
                {renderHeading(heading)}
              </h1>
            )}
          </motion.div>
          <motion.p 
            className="lg:w-[70%] text-center lg:text-2xl mt-16 mb-10 dark:text-neutral-300 text-neutral-700"
            variants={contentVariants}
            custom={1}
          >
            {subheading}
          </motion.p>
          <div className="absolute w-[100%] top-[20%] h-[600px] z-[-1]">
            <GridSparkles />
            <div className="bg-gradient-to-b from-white dark:from-black from-0% via-white/80 dark:via-black/80 to-transparent absolute inset-0"></div>
            <div className="bg-gradient-to-l from-white dark:from-black from-0% to-transparent to-20% absolute inset-0"></div>
            <div className="bg-gradient-to-r from-white dark:from-black from-0% to-transparent to-20% absolute inset-0"></div>
          </div>
          <motion.div 
            className="w-full flex flex-col items-center justify-center mb-10 z-20" 
            variants={contentVariants}
            custom={2}
          >
            <div className="w-full max-w-4xl mb-8">
              <VideoPlayer videoId={videoId} />
            </div>
            {actionButton && (
              <motion.div 
                className="mt-6 mb-4 relative z-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {actionButton}
              </motion.div>
            )}
            {/* Social Proof Bar - use new component */}
            <div className="mt-4">
              <SocialProof />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default VslHero; 