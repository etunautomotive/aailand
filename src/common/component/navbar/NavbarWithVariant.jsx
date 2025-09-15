"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Link from "next/link";

export default function NavbarWithVariant() {
  const pathname = usePathname();
  
  // Hide navbar on /bookademo and /vsldemo pages
  if (pathname.startsWith("/bookademo") || pathname.startsWith("/vsldemo")) {
    return null;
  }
  
  // Use "sales" variant for any /saleslanding, /aailanding, /vsldemo, or /vsl-landing-01 route
  const variant = (pathname.startsWith("/saleslanding") || pathname.startsWith("/aailanding") || pathname.startsWith("/vsldemo") || pathname.startsWith("/vsl-landing-01")) ? "sales" : "default";
  
  return <Navbar variant={variant} 
    ctaHref="/vsldemo"
  />;
} 