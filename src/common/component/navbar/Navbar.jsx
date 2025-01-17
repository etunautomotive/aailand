"use client";
import clsx from "clsx";
import Link from "next/link";
import NavMobile from "./NavMobile";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { NavigationItem } from "@/common/constant/NavigationItem";
import { usePathname } from "next/navigation";
import DarkmodeSwitch from "../element/DarkmodeSwitch";
import SparkleButton from "@/common/component/sparkle-button/SparkleButton";
import Image from "next/image";
import { useTheme } from "next-themes";
import LightAutoAI from "@/../public/lightautoai.svg";
import DarkAutoAI from "@/../public/darkautoai.svg";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scroll, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOpen = () => {
    setOpen(!open);
  };

  const close = () => {
    setOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 10);
    });
  }, []);

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <>
      <motion.div
        className={clsx(
          scroll ? "backdrop-blur-sm" : "",
          "w-full transition-all duration-300 mx-auto bg-[#ffffffd0] dark:bg-[#000000d0] max-w-[1500px] border-b-[1px] border-neutral-300 dark:border-neutral-800 py-5 px-5 2xl:rounded-3xl lg:px-10 fixed top-0 z-[99]"
        )}
      >
        <div className="flex flex-row items-center justify-between gap-4">
          <div className="flex-shrink-0 z-[999]">
            <Link href="/" className="group relative flex items-center">
              {mounted && (
                <Image
                  src={currentTheme === "dark" ? LightAutoAI : DarkAutoAI}
                  alt="AutoAI Logo"
                  width={80}
                  height={52}
                  className="lg:w-[102px] lg:h-[67px] w-[80px] h-[52px]"
                  priority
                />
              )}
            </Link>
          </div>

          <div className="lg:flex hidden justify-center gap-10 flex-1">
            {NavigationItem.map((item, index) => (
              <Link
                href={item.src}
                className="group flex justify-center gap-5 items-center relative"
                key={index}
              >
                <h1 className="text-base font-medium text-black dark:text-white line-clamp-1">
                  {item.title}
                </h1>
                <div
                  className={clsx(
                    pathname === item.src
                      ? "absolute top-[23px] h-[2px] flex items-center w-[50%] bg-[#000] dark:bg-white transition-transform duration-300"
                      : "absolute top-[23px] h-[2px] w-[0%] bg-[#000] dark:bg-white transition-all duration-300 group-hover:w-[50%]"
                  )}
                ></div>
              </Link>
            ))}
          </div>

          <div className="lg:hidden flex items-center">
            <div className="px-2">
              <DarkmodeSwitch />
            </div>
            <NavMobile open={open} handleOpen={handleOpen} close={close} />
          </div>

          <div className="lg:flex hidden items-center gap-4">
            <DarkmodeSwitch />
            <SparkleButton
              className="!text-sm !py-2.5 !px-5 scale-95"
              onClick={() => (window.location.href = "/signin")}
            >
              Sign In
            </SparkleButton>
            <SparkleButton
              className="!text-sm !py-2.5 !px-5 scale-95"
              onClick={() => setShowBooking(true)}
            >
              Schedule a Demo
            </SparkleButton>
          </div>
        </div>
      </motion.div>

      {showBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[100] flex items-center justify-center p-4">
          <div className="bg-white dark:bg-black rounded-lg w-full max-w-4xl relative">
            <button
              onClick={() => setShowBooking(false)}
              className="absolute top-4 right-4 text-black dark:text-white"
            >
              Close
            </button>
            <iframe
              src="https://app.usemotion.com/meet/wes-b/AAI"
              title="Motion Booking Page"
              width="100%"
              height="840px"
              frameBorder="0"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
