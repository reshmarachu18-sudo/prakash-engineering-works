import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import "./globals.css";

import type { ReactNode } from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        
        <Footer/>
      </body>
    </html>
  );
}