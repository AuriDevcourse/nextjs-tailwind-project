"use client";

import { useEffect } from "react";
import "./globals.css";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css"; // Correct Locomotive Scroll CSS import

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // Initialize Locomotive Scroll
    const scrollContainer = document.querySelector("[data-scroll-container]");

    const scroll = new LocomotiveScroll({
      el: scrollContainer,
      smooth: true,
      inertia: 0.75, // Adjust for the effect of inertia
    });

    return () => {
      if (scroll) scroll.destroy(); // Cleanup on component unmount
    };
  }, []);

  return (
    <html lang="en">
      <body>
        <div data-scroll-container>{children}</div>
      </body>
    </html>
  );
}
