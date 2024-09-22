"use client"; // Ensure this is the first line

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { FaLaptopCode, FaBrain, FaHandsHelping, FaSearch } from 'react-icons/fa'; // Import some example icons
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Head from 'next/head';

export default function HomePage() {
  const scrollRef = useRef(null);

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
    <>
      {/* Google Fonts */}
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Poppins:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div ref={scrollRef} className="bg-gray-900 text-white min-h-screen overflow-hidden">
        <div className="container mx-auto max-w-screen-xl px-6 md:px-10 lg:px-24 py-20">
          <h1 className="text-5xl font-bold mb-12 text-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Selected Work
          </h1>

          {/* Grid Container for the Four Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Design Projects */}
            <motion.div
              className="relative bg-gradient-to-r from-gray-800 to-gray-600 rounded-lg h-[300px] w-full overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-200"></div>
              <FaLaptopCode className="absolute inset-0 m-auto text-5xl text-gray-300 z-10 transition-opacity duration-200 group-hover:opacity-75" />
              <h2 className="text-3xl font-bold relative z-10 text-center mt-24" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Design Projects
              </h2>
            </motion.div>

            {/* AI Hobby Project */}
            <motion.div
              className="relative bg-gradient-to-r from-gray-800 to-gray-600 rounded-lg h-[300px] w-full overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-200"></div>
              <FaBrain className="absolute inset-0 m-auto text-5xl text-gray-300 z-10 transition-opacity duration-200 group-hover:opacity-75" />
              <h2 className="text-3xl font-bold relative z-10 text-center mt-24" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                AI Hobby
              </h2>
            </motion.div>

            {/* Volunteering Project */}
            <motion.div
              className="relative bg-gradient-to-r from-gray-800 to-gray-600 rounded-lg h-[300px] w-full overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-200"></div>
              <FaHandsHelping className="absolute inset-0 m-auto text-5xl text-gray-300 z-10 transition-opacity duration-200 group-hover:opacity-75" />
              <h2 className="text-3xl font-bold relative z-10 text-center mt-24" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Volunteering
              </h2>
            </motion.div>

            {/* Research Project */}
            <motion.div
              className="relative bg-gradient-to-r from-gray-800 to-gray-600 rounded-lg h-[300px] w-full overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-200"></div>
              <FaSearch className="absolute inset-0 m-auto text-5xl text-gray-300 z-10 transition-opacity duration-200 group-hover:opacity-75" />
              <h2 className="text-3xl font-bold relative z-10 text-center mt-24" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Research
              </h2>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
