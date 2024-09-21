"use client";  // Make sure this is the first line of your component

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);  // The closing bracket and semicolon are essential here

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <header className="fixed w-full z-10 p-4 bg-gray-800">
        <nav className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-yellow-400">JD</a>
          <ul className="flex space-x-6">
            {['Work', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-yellow-400">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="h-screen flex items-center justify-center relative">
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-yellow-400 opacity-20 blur-3xl"
          animate={{
            x: mousePosition.x - 128,
            y: mousePosition.y - 128,
          }}
          transition={{ type: 'spring', damping: 10, stiffness: 50 }}
        />
        <div className="text-center">
          <h1 className="text-6xl font-bold">
            John Doe
          </h1>
          <p className="text-2xl text-yellow-400 mt-4">Product Designer</p>
        </div>
      </main>
    </div>
  );
}
