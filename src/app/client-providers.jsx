"use client";

import { ThemeProvider } from "next-themes";

export function ClientProviders({ children }) {
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      {children}
    </ThemeProvider>
  );
} 