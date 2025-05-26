"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Link from "next/link";

export default function NavbarWithVariant() {
  const pathname = usePathname();
  
  // Use "sales" variant for any /saleslanding or /aailanding route
  const variant = (pathname.startsWith("/saleslanding") || pathname.startsWith("/aailanding")) ? "sales" : "default";
  
  return <Navbar variant={variant} 
    ctaHref="https://www.automotiveai.ca/demo/"
  />;
} 