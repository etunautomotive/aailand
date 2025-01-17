"use client";
import clsx from "clsx";
import NavigationMenuMobile from "./NavigationMenuMobile";
import Link from "next/link";
import DarkmodeSwitch from "../element/DarkmodeSwitch";
import SparkleButton from "@/common/component/sparkle-button/SparkleButton";

const NavMobile = ({ open, handleOpen, close }) => {
  return (
    <div>
      <label className={`hamburger relative z-[999] ${open ? "open" : ""}`}>
        <input
          type="checkbox"
          className="inputToogle"
          checked={open}
          onChange={handleOpen}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="12"
          viewBox="0 0 150 19"
          fill="none"
          className="scale-75"
        >
          <line
            y1="1.5"
            x2="150"
            y2="1.5"
            className={clsx(
              open ? "!stroke-white translate-y-2 rotate-45" : "",
              "stroke-black dark:stroke-white transition-all duration-500 ease-in-out"
            )}
            strokeWidth="3"
          />
          <line
            y1="9.5"
            x2="150"
            y2="9.5"
            className={clsx(
              open ? "opacity-0" : "",
              "stroke-black dark:stroke-white transition-all duration-300 ease-in-out"
            )}
            strokeWidth="3"
          />
          <line
            y1="17.5"
            x2="150"
            y2="17.5"
            className={clsx(
              open ? "!stroke-white -translate-y-2 -rotate-45" : "",
              "stroke-black dark:stroke-white transition-all duration-500 ease-in-out"
            )}
            strokeWidth="3"
          />
        </svg>
      </label>
      <div
        className={clsx(
          "fixed inset-0 bg-gradient-to-b from-blue-500/10 via-violet-500/5 to-transparent backdrop-blur-xl transition-all duration-500",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="absolute top-5 right-5">
          <DarkmodeSwitch />
        </div>
        <NavigationMenuMobile open={open} close={close} />
        <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-4">
          <SparkleButton
            className="!text-sm !py-2.5 !px-5"
            onClick={() => {
              window.location.href = "/signin";
              close();
            }}
          >
            Sign In
          </SparkleButton>
          <SparkleButton
            className="!text-sm !py-2.5 !px-5 scale-95"
            onClick={() =>
              window.open("https://app.usemotion.com/meet/wes-b/AAI", "_blank")
            }
          >
            Schedule a Demo
          </SparkleButton>
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
