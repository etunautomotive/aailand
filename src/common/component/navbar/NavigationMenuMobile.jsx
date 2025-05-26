import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavigationItem } from "@/common/constant/NavigationItem";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Links } from "./NavLink";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

const Anim = {
  open: (height = 1000) => ({
    height: "800px",
    zIndex: 99,
    transition: {
      duration: 1,
      type: "spring",
    },
  }),
  closed: {
    height: "0px",
    zIndex: 0,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const NavigationMenuMobile = ({ open, close, variant = "default" }) => {
  const Child = {
    Isopen: {
      opacity: 1,
      height: "100%",
    },
    closed: {
      opacity: 0,
      height: "0px",
    },
  };
  const pathname = usePathname();

  // Modal state for sales variant
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  // Handle opening modal for sales variant - moved outside conditional
  React.useEffect(() => {
    if (variant === "sales" && open) {
      onOpen();
    }
  }, [open, onOpen, variant]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: handle form submission (API call, etc.)
  };

  // If it's the sales variant, show modal with form
  if (variant === "sales") {
    return (
      <div>
        <motion.div
          className="right-0 w-full lg:px-10 px-5 top-0 absolute flex h-screen bg-neutral-900"
          initial={false}
          variants={Anim}
          animate={open ? "open" : "closed"}
        >
          <div className="mt-20 w-full flex items-center justify-center">
            <Button color="primary" onPress={onOpen} className="text-xl">
              Schedule a Demo
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissible>
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
                        <form
                          onSubmit={handleSubmit}
                          className="flex flex-col gap-4"
                        >
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
                          <Button
                            color="primary"
                            type="submit"
                            className="w-full mt-2"
                          >
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
        </motion.div>
      </div>
    );
  }

  return (
    <div>
      <motion.div
        className="right-0 w-full  lg:px-10 px-5 top-0 absolute flex h-screen bg-neutral-900"
        initial={false}
        variants={Anim}
        animate={open ? "open" : "closed"}
      >
        <div className="mt-20 w-full">
          <div className=" gap-14 w-full lg:px-10 overflow-hidden">
            {NavigationItem.map((item, index) => (
              <motion.div
                key={index}
                className="h-auto w-full"
                initial={false}
                animate={open ? "Isopen" : "closed"}
                variants={Child}
                transition={{
                  type: "spring",
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <Link href={item.src} onClick={close}>
                  <Links
                    pathname={pathname}
                    heading={item.title}
                    imgSrc={item.img}
                    href={item.src}
                    className="group hover:scale-105 w-full relative"
                  ></Links>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NavigationMenuMobile;
