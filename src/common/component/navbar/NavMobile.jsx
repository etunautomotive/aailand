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
import { NavigationItem } from "@/common/constant/NavigationItem";

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
      <button
        onClick={handleOpen}
        className={clsx(
          "relative z-[999] p-2 rounded-xl transition-all duration-300 backdrop-blur-sm border",
          open
            ? "bg-white/20 border-white/30"
            : "bg-white/10 border-white/20 hover:bg-white/15"
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          className={clsx(
            "transition-all duration-300",
            open ? "rotate-180 text-white" : "text-black dark:text-white"
          )}
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 15a3 3 0 0 0 0-6 3 3 0 0 0 0 6Z"
          />
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 1v6m0 6v6m5.196-15.804L15.536 5.804m-7.072 0L6.864 3.196m15.804 5.196L19.196 6.864m0 10.272l2.572 1.332M1 12l2.8-.6m15.6 0L22 12l-2.6-.6M6.864 17.136l-2.572 1.332m10.272 0l2.572-1.332"
          />
        </svg>
      </button>
      <div
        className={clsx(
          "fixed inset-0 bg-black/30 backdrop-blur-sm transition-all duration-300 z-50",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Glass morphism container positioned in top-right */}
        <div className="absolute top-20 right-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl w-64 transform transition-all duration-300 overflow-hidden">
          {/* Close button */}
          <div className="absolute -top-3 -right-3">
            <button
              onClick={close}
              className="w-8 h-8 rounded-full bg-orange-500 border-2 border-white flex items-center justify-center hover:bg-orange-600 transition-colors shadow-lg"
            >
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation items */}
          <div className="p-4 space-y-1">
            {NavigationItem.map((item, index) => (
              <Link
                key={index}
                href={item.src}
                onClick={close}
                className={clsx(
                  "block w-full text-left px-4 py-3 rounded-xl text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 font-medium",
                  index === 0 && "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                )}
              >
                {item.title}
              </Link>
            ))}

            {/* Divider */}
            <div className="border-t border-gray-200 dark:border-gray-700 my-3"></div>

            {/* Action buttons */}
            {variant !== "sales" && (
              <button
                onClick={() => {
                  window.location.href = "https://app.automotiveai.ca/signin";
                  close();
                }}
                className="block w-full text-left px-4 py-3 rounded-xl text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 font-medium"
              >
                Sign In
              </button>
            )}

            <button
              onClick={onOpen}
              className="block w-full text-left px-4 py-3 rounded-xl text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 font-medium"
            >
              Schedule a Demo
            </button>
          </div>
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
