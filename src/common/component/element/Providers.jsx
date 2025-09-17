// app/providers.tsx
"use client";

// import {NextUIProvider} from '@nextui-org/react'
import { ThemeProvider } from "next-themes";

export function Providers({ children }) {
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      {children}
    </ThemeProvider>
  );
}