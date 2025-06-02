import { motion } from "framer-motion";
import scatters from '../assets/svg/Asset 2.svg';
import frontGrass from '../assets/svg/Asset 4.svg';
import fence from '../assets/svg/Asset 5.svg';
import Bats from '../assets/svg/Asset 6.svg';
import house from '../assets/svg/Asset 7.svg';
import grassesHouse from '../assets/svg/Asset 8.svg';
import MidTrees from '../assets/svg/Asset 9.svg';
import grassesPink from '../assets/svg/Asset 10.svg';
import house_behind_trees from '../assets/svg/Asset 11.svg';
import purpleShader from '../assets/svg/Asset 12.svg';
import moon from '../assets/svg/Asset 13.svg';
import sky from '../assets/svg/Asset 14.svg';

import Register from './Register';
import { useState } from 'react';
import './hero.css';
import DaysMore from "./daysMore";

export default function Hero() {
  const [showRegister, setShowRegister] = useState(false);

  // Handler for clicking the overlay (outside the modal)
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setShowRegister(false);
    }
  };

  return (
    <div className="inset-0 bg-[#180930] overflow-hidden z-0 h-screen">
      {/* 1. Purple sky */}
      <motion.img
        src={sky}
        alt="purple-sky"
        className="w-full h-full object-cover pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* 2. Moon */}
      <motion.img
        src={moon}
        alt="moon"
        className="moon"
        style={{ zIndex: 2 }}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
      />

      {/* 3. Purple shader */}
      <motion.img
        src={purpleShader}
        alt="purple-shader"
        className="absolute left-0 top-0 w-full h-full object-cover pointer-events-none"
        style={{ zIndex: 3 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* 4. House behind trees - centered on moon */}
      <motion.img
        src={house_behind_trees}
        alt="house-behind-trees"
        className="house-behind-trees"
        style={{ zIndex: 4 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />

      {/* 5. grass pink */}
      <motion.img
        src={grassesPink}
        alt="grass-pink"
        className="grass-pink absolute left-0 bottom-0 w-full h-auto object-cover pointer-events-none"
        style={{ zIndex: 5 }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1 }}
      />

      {/* 6. Mid trees */}
      <motion.img
        src={MidTrees}
        alt="mid-trees"
        className="mid-trees absolute left-1/2 bottom-0 w-full h-auto object-cover pointer-events-none -translate-x-1/2"
        style={{ zIndex: 6 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.2 }}
      />

      {/* 7. grasses house */}
      <motion.img
        src={grassesHouse}
        alt="grasses-house"
        className="grasses-house absolute left-0 bottom-0 w-full h-auto object-cover pointer-events-none"
        style={{ zIndex: 7 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.4 }}
      />

      {/* 8. House */}
      <motion.img
        src={house}
        alt="house"
        className="house"
        style={{ zIndex: 8 }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.6 }}
      />

      {/* 9. Bats */}
      <motion.img
        src={Bats}
        alt="bats"
        className="absolute left-1/2 top-[10%] w-1/4 h-auto object-contain pointer-events-none -translate-x-1/2"
        style={{ zIndex: 9 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: 1,
          y: [0, -30, 0, 30, 0],
        }}
        transition={{
          opacity: { duration: 1.2, delay: 1.8 },
          y: { duration: 3.5, delay: 1.8, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }
        }}
      />

      {/* 10. Fence */}
      <motion.img
        src={fence}
        alt="fence"
        className="fence absolute left-0 bottom-0 w-full h-auto object-cover pointer-events-none"
        style={{ zIndex: 10 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 2 }}
      />
      {/* 11. Front grass */}
      <motion.img
        src={frontGrass}
        alt="front-grass"
        className="front-grass absolute left-0 bottom-0 w-full h-auto object-cover pointer-events-none"
        style={{ zIndex: 11 }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 2.2 }}
      />

      {/* 14. Scatters */}
      <motion.img
        src={scatters}
        alt="scatters"
        className="absolute left-0 bottom-0 w-full h-auto object-cover pointer-events-none"
        style={{ zIndex: 14 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: [0, -18, 0, 18, 0],
        }}
        transition={{
          opacity: { duration: 1.2, delay: 2.8 },
          y: { duration: 3, delay: 2.8, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }
        }}
      />

      <style>{`
  @keyframes glow {
    0% {
      box-shadow: 0 0 16px 4px #a78bfa, 0 0 32px 8px #a78bfa33;
    }
    50% {
      box-shadow: 0 0 32px 12px #a78bfa, 0 0 64px 24px #a78bfa55;
    }
    100% {
      box-shadow: 0 0 16px 4px #a78bfa, 0 0 32px 8px #a78bfa33;
    }
  }
  .glow-animate {
    animation: glow 2s ease-in-out infinite;
  }
`}</style>
      <button
        className="absolute cursor-pointer left-1/2 top-[86%] -translate-x-1/2 z-20 bg-[#a78bfa] hover:bg-[#7c3aed] text-white font-bold py-4 px-12 text-2xl rounded-full shadow-lg transition-colors flex items-center gap-3 glow-animate"
        onClick={() => setShowRegister(true)}
      >
        Register Now
      </button>

      {/* Register Popup */}
      {showRegister && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          onClick={handleOverlayClick}
        >
          <div className="bg-[#18122b] rounded-2xl shadow-2xl p-6 md:p-10 max-w-lg w-full relative">
            <button
              className="absolute top-3 right-3 text-fuchsia-300 hover:text-fuchsia-500 text-2xl"
              onClick={() => setShowRegister(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <Register />
          </div>
        </div>
      )}

      <h1 className="hero-text heero-text-size absolute left-1/2 top-30 pt-2 -translate-x-1/2 -translate-y-1/2 text-7xl text-white font-bold text-center">
        Arduino <br />Night
      </h1>

      <h2 className="absolute hero-text-size-2 left-1/2 top-60 -translate-x-1/2 -translate-y-1/2 text-2xl text-white font-bold text-center mt-4">
        <span className="hero-text">Practical</span>
        <span className="sinhala"> NS;sldjg meh 12 l udhd mka;sh</span>
      </h2>

      <DaysMore />

      {/* <div className="flex flex-col items-center fixed left-1/2 bottom-6 -translate-x-1/2 z-50">
        <span className="mb-2 text-white text-base font-medium">Scroll to Register</span>
        <button
          className="bg-transparent text-white p-4 rounded-full shadow-lg hover:bg-[#a78bfa] transition-colors flex items-center justify-center"
          aria-label="Scroll to Register"
          onClick={() => {
            const section = document.getElementById("register");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>


      </div> */}
    </div>
  );
}