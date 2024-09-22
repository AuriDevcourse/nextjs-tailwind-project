"use client"; // Ensure this is the first line

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { FaLaptopCode, FaBrain, FaHandsHelping, FaSearch } from 'react-icons/fa'; // Import some example icons
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Head from 'next/head';


// Define the RootLayout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollRef = useRef(null);

  // Use useEffect to run Locomotive Scroll only on the client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Dynamically import Locomotive Scroll
      import('locomotive-scroll').then((LocomotiveScroll) => {
        const scroll = new LocomotiveScroll.default({
          el: scrollRef.current,
          smooth: true,
        });

        return () => {
          // Clean up the scroll instance on component unmount
          scroll.destroy();
        };
      });
    }
  }, []);

  return (
    <html lang="en">
      <body ref={scrollRef}>
        {/* Render children components */}
        {children}
      </body>
    </html>
  );
}
