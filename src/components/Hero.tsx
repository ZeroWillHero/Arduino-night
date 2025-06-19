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
import { useEffect, useState } from 'react';
import './hero.css';
import apiCall from "../api/apiCall";
import DaysMore from "./daysMore";

export default function Hero() {
  const [showRegister, setShowRegister] = useState(false);
  const [availableSeats, setAvailableSeats] = useState<number | null>(null);

  // Handler for clicking the overlay (outside the modal)
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setShowRegister(false);
    }
  };

  useEffect(() => {
    const fetchTotalUsers = async () => {
      try {
        const response = await apiCall(
          `https://arduinonight.com/api/users/count`,
          "GET"
        );
        let totalUsers = 0;
        if (typeof response.count === "number") {
          totalUsers = response.count;
        }
        setAvailableSeats(451 - totalUsers);
      } catch (error) {
        setAvailableSeats(null);
      }
    };

    fetchTotalUsers();
  }, []);

  // Registration Closed Seal
  const RegistrationClosedSeal = () => (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 px-2">
      <div className="flex flex-col items-center w-full max-w-md">
        <span className="inline-flex items-center justify-center w-full">
          <svg
            width="100%"
            height="auto"
            viewBox="0 0 360 160"
            className="max-w-xs sm:max-w-sm md:max-w-md w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
            style={{ minWidth: 220, maxWidth: 360 }}
          >
            <defs>
              <linearGradient id="bgGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ff4e50" />
                <stop offset="100%" stopColor="#c31432" />
              </linearGradient>
              <pattern id="texture" patternUnits="userSpaceOnUse" width="6" height="6">
                <circle cx="3" cy="3" r="1" fill="rgba(255,255,255,0.08)" />
              </pattern>
            </defs>
            <rect x="10" y="10" width="340" height="140" rx="20" ry="20"
              fill="url(#bgGradient)" stroke="white" strokeWidth="6" />
            <rect x="10" y="10" width="340" height="140" rx="20" ry="20"
              fill="url(#texture)" />
            <rect x="20" y="20" width="320" height="120" rx="15" ry="15"
              fill="none" stroke="white" strokeDasharray="10,6" strokeWidth="2" />
            <text x="180" y="70" textAnchor="middle" fontFamily="Impact, sans-serif"
              fontSize="28" fill="white" fontWeight="bold" letterSpacing="2">
              FULLY BOOKED !
            </text>
            <text x="180" y="110" textAnchor="middle" fontFamily="Georgia, serif"
              fontSize="18" fill="white" letterSpacing="1">
              Sorry We Are Closed
            </text>
          </svg>
        </span>
        <span
          className="relative z-10 mt-4 text-white font-extrabold text-lg sm:text-xl md:text-2xl tracking-widest text-center"
          style={{ letterSpacing: "0.15em" }}
        >
          REGISTRATION CLOSED
        </span>
      </div>
    </div>
  );

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

      {/* Registration Closed Seal */}
      {availableSeats !== null && availableSeats <= 0 && <RegistrationClosedSeal />}

      {/* Register Button */}
      {!(availableSeats !== null && availableSeats <= 0) && (
        <button
          className="absolute cursor-pointer left-1/2 top-[86%] -translate-x-1/2 z-20 bg-[#a78bfa] hover:bg-[#7c3aed] text-white font-bold py-3 px-6 text-lg rounded-full shadow-lg transition-colors flex items-center gap-3 glow-animate
            md:py-4 md:px-12 md:text-2xl"
          onClick={() => setShowRegister(true)}
        >
          Register Now
        </button>
      )}

      {/* Register Popup */}
      {showRegister && !(availableSeats !== null && availableSeats <= 0) && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70"
          onClick={handleOverlayClick}
          style={{ pointerEvents: "auto" }}
        >
          <div className="bg-[#18122b] rounded-2xl shadow-2xl p-3 pt-12 md:p-10 max-w-lg w-full relative z-[100000]">
            {/* Close button */}
            <button
              className="fixed md:absolute top-3 right-3 text-fuchsia-300 hover:text-fuchsia-500 text-2xl z-[100001] bg-[#18122b] rounded-full p-2"
              onClick={() => setShowRegister(false)}
              aria-label="Close"
              tabIndex={0}
              style={{
                position: "fixed",
                top: 16,
                right: 16,
              }}
            >
              &times;
            </button>
            <Register />
          </div>
        </div>
      )}

      <h1
        className="hero-text absolute left-1/2 pt-2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-center"
        style={{
          top: "10vh",
          fontSize: "clamp(2rem, 6vw, 4.5rem)",
          lineHeight: 1.1,
          zIndex: 100,
        }}
      >
        Arduino <br />Night
      </h1>

      <h2
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-center mt-4"
        style={{
          top: "20vh",
          fontSize: "clamp(0.8rem, 1.5vw, 1rem)",
          zIndex: 100,
        }}
      >
        <span className="hero-text">Practical</span>
        <span className="sinhala"> NS;sldjg meh 12 l udhd mka;sh</span>
      </h2>
      <DaysMore />
    </div>
  );
}