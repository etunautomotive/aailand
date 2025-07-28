"use client";

import { ThemeProvider } from "next-themes";

export function ClientProviders({ children }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
} 