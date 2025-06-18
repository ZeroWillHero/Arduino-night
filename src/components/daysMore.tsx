import { useState, useEffect } from 'react';
import apiCall from "../api/apiCall";

export default function DaysMore() {
  const [daysLeft, setDaysLeft] = useState(0);
  const [availableSeats, setAvailableSeats] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const calculateDaysLeft = () => {
      // Target date: June 24 of this year
      const targetDate = new Date(new Date().getFullYear(), 5, 24);
      const today = new Date();
      targetDate.setHours(0, 0, 0, 0);
      today.setHours(0, 0, 0, 0);
      const msPerDay = 1000 * 60 * 60 * 24;
      const days = Math.max(0, Math.ceil((targetDate.getTime() - today.getTime()) / msPerDay));
      setDaysLeft(days);
    };

    calculateDaysLeft();
    setMounted(true);

    const interval = setInterval(calculateDaysLeft, 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchTotalUsers = async () => {
      try {
        const response = await apiCall(
          `https://arduinonight.com/api/users/`,
          "GET"
        );
        // Adjust according to your API response structure
        let totalUsers = 0;
        if (typeof response.totalUsers === "number") {
          totalUsers = response.totalUsers;
        } else if (Array.isArray(response.users)) {
          totalUsers = response.users.length;
        } else if (Array.isArray(response)) {
          totalUsers = response.length;
        }
        setAvailableSeats(451 - totalUsers);
      } catch (error) {
        setAvailableSeats(null);
      }
    };

    fetchTotalUsers();
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute top-[60%] left-1/2 -translate-x-1/2 z-30 flex flex-col justify-center items-center w-full pointer-events-none px-2 sm:px-0">
      <div className="relative group w-full max-w-[220px] sm:max-w-xs md:max-w-sm">
        {/* Animated background glow */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-fuchsia-400 via-violet-400 to-purple-400 rounded-2xl blur-md opacity-30 animate-pulse transition-all duration-1500" style={{ animationDelay: '0.5s' }}></div>
        {/* Main content container */}
        <div className="relative flex flex-col items-center gap-0.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-2xl bg-gradient-to-br from-slate-900/90 via-purple-900/80 to-slate-900/90 backdrop-blur-2xl border border-purple-500/40 shadow-xl w-full">
          <span className="text-white text-sm sm:text-base md:text-lg font-bold tracking-wide drop-shadow-lg">
            DAYS MORE
          </span>
          <div className="relative mt-0.5">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-fuchsia-200 via-purple-200 to-pink-300 text-xl sm:text-2xl md:text-3xl font-black tracking-tight drop-shadow-2xl filter">
              {daysLeft.toString().padStart(2, '0')}
            </span>
            <span className="absolute inset-0 text-fuchsia-300 text-xl sm:text-2xl md:text-3xl font-black tracking-tight blur-sm opacity-30">
              {daysLeft.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="text-purple-200/80 text-[10px] sm:text-xs font-medium uppercase tracking-wider mt-0.5">
            days
          </span>
          <span className='text-white font-bold text-[10px] sm:text-xs text-center'>
            SYZYGY - GAMPAHA | JUNE 24TH | 6.30 P.M
          </span>
          <div className="mt-2">
            <span className="relative inline-block px-4 py-1 rounded-xl bg-gradient-to-r from-fuchsia-700 via-fuchsia-500 to-pink-500 shadow-lg">
              <span className="absolute inset-0 rounded-xl blur-md opacity-40 bg-gradient-to-r from-fuchsia-400 via-pink-400 to-purple-400"></span>
              <span className="relative text-white font-extrabold text-lg sm:text-2xl md:text-3xl tracking-wide drop-shadow-lg">
                {availableSeats !== null ? (
                  <>
                    <span className="text-yellow-300 animate-pulse">{availableSeats}</span>
                    <span className="ml-2 text-white">Available Seats</span>
                  </>
                ) : (
                  "Loading seats..."
                )}
              </span>
            </span>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-10px) rotate(180deg); opacity: 1; }
        }
        .animate-float {
          animation: float 2s ease-in-out infinite;
        }
      `}</style>
    </div>)
}