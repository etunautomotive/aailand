"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function NavbarWithVariant() {
  const pathname = usePathname();
  
  // Use "sales" variant for any /saleslanding route
  const variant = pathname.startsWith("/saleslanding") ? "sales" : "default";
  
  return <Navbar variant={variant} />;
} 