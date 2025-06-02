import { useState, useEffect } from 'react';

export default function DaysMore() {
  const [daysLeft, setDaysLeft] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const calculateDaysLeft = () => {
      // Target date: June 26 of this year
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

  if (!mounted) return null;

  return (
    <div className="absolute top-[66%] left-1/2 -translate-x-1/2 z-30 flex justify-center items-center w-full pointer-events-none">
      <div className="relative group">
        {/* Animated background glow */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-fuchsia-400 via-violet-400 to-purple-400 rounded-2xl blur-md opacity-30 animate-pulse transition-all duration-1500" style={{ animationDelay: '0.5s' }}></div>
        {/* Main content container */}
        <div className="relative flex flex-col items-center gap-1 px-6 py-3 rounded-2xl bg-gradient-to-br from-slate-900/90 via-purple-900/80 to-slate-900/90 backdrop-blur-2xl border border-purple-500/40 shadow-xl min-w-[140px]">
          <span className="text-white text-2xl md:text-3xl font-bold tracking-wide drop-shadow-lg">
            DAYS MORE
          </span>
          <div className="relative mt-1">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-fuchsia-200 via-purple-200 to-pink-300 text-4xl md:text-5xl font-black tracking-tight drop-shadow-2xl filter">
              {daysLeft.toString().padStart(2, '0')}
            </span>
            <span className="absolute inset-0 text-fuchsia-300 text-4xl md:text-5xl font-black tracking-tight blur-sm opacity-30">
              {daysLeft.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="text-purple-200/80 text-base font-medium uppercase tracking-wider mt-0.5">
            days
          </span>

          <span className='text-white font-bold'>SYZYGY - GAMPAHA | JUNE  24TH | 6.00 P.M</span>
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
    </div>
  );
}