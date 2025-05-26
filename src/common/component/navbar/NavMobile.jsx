"use client";
import clsx from "clsx";
import NavigationMenuMobile from "./NavigationMenuMobile";
import Link from "next/link";
import DarkmodeSwitch from "../element/DarkmodeSwitch";
import SparkleButton from "@/common/component/sparkle-button/SparkleButton";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { useState } from "react";

const NavMobile = ({ open, handleOpen, close, variant = "default" }) => {
  const [form, setForm] = useState({ firstName: '', lastName: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: handle form submission (API call, etc.)
  };

  // Function to schedule a demo
  const scheduleDemoHandler = () => {
    window.open(
      "https://calendly.com/wes-automotiveai/30min?hide_event_type_details=1",
      "_blank"
    );
    close();
  };

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
        <NavigationMenuMobile open={open} close={close} variant={variant} />
        <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-4">
          {variant !== "sales" && (
            <SparkleButton
              className="!text-sm !py-2.5 !px-5"
              onClick={() => {
                window.location.href = "/signin";
                close();
              }}
            >
              Sign In
            </SparkleButton>
          )}
          <SparkleButton
            className="!text-sm !py-2.5 !px-5 scale-95"
            onClick={onOpen}
          >
            Schedule a Demo
          </SparkleButton>
        </div>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center text-2xl font-bold">
                Schedule a Demo
              </ModalHeader>
              <ModalBody>
                {submitted ? (
                  <div className="text-center text-green-600 font-semibold py-6">
                    Thank you! We&apos;ll be in touch soon.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                      className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                      className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <Button color="primary" type="submit" className="w-full mt-2">
                      Submit
                    </Button>
                  </form>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default NavMobile;
