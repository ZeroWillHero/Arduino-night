import { useState, useEffect } from "react";
import './App.css'
import Hero from './components/Hero'
import Guidelines from './components/Guidlines'

function App() {
  const [loading, setLoading] = useState(true);

  // List your asset URLs here (add all images you want to preload)
  const assets = [
    "/assets/svg/Asset 2.svg",
    "/assets/svg/Asset 4.svg",
    "/assets/svg/Asset 5.svg",
    "/assets/svg/Asset 6.svg",
    "/assets/svg/Asset 7.svg",
    "/assets/svg/Asset 8.svg",
    "/assets/svg/Asset 9.svg",
    "/assets/svg/Asset 10.svg",
    "/assets/svg/Asset 11.svg",
    "/assets/svg/Asset 12.svg",
    "/assets/svg/Asset 13.svg",
    "/assets/svg/Asset 14.svg",
    // Add more if needed
  ];

  useEffect(() => {
    let loaded = 0;
    if (assets.length === 0) {
      setLoading(false);
      return;
    }
    assets.forEach(src => {
      const img = new window.Image();
      img.src = src;
      img.onload = img.onerror = () => {
        loaded++;
        if (loaded === assets.length) setLoading(false);
      };
    });
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#180930] z-[9999]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-fuchsia-400 border-solid"></div>
      </div>
    );
  }

  return (
    <>
      <main>
        <Hero />
        <Guidelines />
      </main>
    </>
  )
}

export default App