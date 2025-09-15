"use client";
import { usePathname } from "next/navigation";
import GlassNavbar from "@/components/ui/GlassNavbar";

export default function NavbarWithVariant() {
  const pathname = usePathname();
  
  // Hide navbar on specific pages that already have their own navbar
  if (pathname.startsWith("/bookademo") || pathname.startsWith("/vsldemo")) {
    return null;
  }
  
  // Use GlassNavbar for all pages
  return <GlassNavbar />;
} 