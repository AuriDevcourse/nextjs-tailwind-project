"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export default function Component() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    
    // Initialize Locomotive Scroll
    const scrollContainer = document.querySelector("[data-scroll-container]");

    const scroll = new LocomotiveScroll({
      el: scrollContainer,
      smooth: true,
      inertia: 0.75, // Adjust inertia for a smooth effect
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      if (scroll) scroll.destroy(); // Clean up Locomotive Scroll on unmount
    };
  }, []);

  return (
    <div data-scroll-container className="min-h-screen bg-gray-900 text-gray-100 overflow-hidden">
      <header className="fixed w-full z-10 p-4">
        <nav className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">JD</a>
          <ul className="flex space-x-6">
            {['Work', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative overflow-hidden group"
                >
                  <span className="relative z-10">{item}</span>
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section className="h-screen flex items-center justify-center relative" data-scroll>
          <motion.div
            className="absolute w-64 h-64 rounded-full bg-yellow-400 opacity-20 blur-3xl"
            animate={{
              x: mousePosition.x - 128,
              y: mousePosition.y - 128,
            }}
            transition={{ type: 'spring', damping: 10, stiffness: 50 }}
          />
          <h1 className="text-6xl font-bold text-center leading-tight">
            John Doe<br />
            <span className="text-yellow-400">Product Designer</span>
          </h1>
        </section>

        <section id="work" className="py-20 px-4 md:px-20" data-scroll>
          <h2 className="text-3xl font-bold mb-10">Selected Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { id: 1, name: 'ChatGPT Project', link: '/chatgpt-project' },
              { id: 2, name: 'Project 2' },
              { id: 3, name: 'Project 3' },
              { id: 4, name: 'Project 4' },
              { id: 5, name: 'Project 5' },
              { id: 6, name: 'Project 6' },
            ].map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-lg bg-gray-800">
                <img
                  src={`/placeholder.svg?height=400&width=600`}
                  alt={project.name}
                  className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  {project.link ? (
                    <Link href={project.link} className="text-xl font-semibold text-white hover:text-yellow-400 transition-colors">
                      {project.name}
                    </Link>
                  ) : (
                    <span className="text-xl font-semibold text-white">{project.name}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 py-10 px-4 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2023 John Doe. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-yellow-400 transition-colors">Twitter</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Dribbble</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
