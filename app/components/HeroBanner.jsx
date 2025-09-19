'use client';
import React, { useState, useEffect } from 'react';

const HeroBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: '08',
    minutes: '34',
    seconds: '52'
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        let h = parseInt(hours);
        let m = parseInt(minutes);
        let s = parseInt(seconds);

        if (s > 0) {
          s--;
        } else if (m > 0) {
          s = 59;
          m--;
        } else if (h > 0) {
          s = 59;
          m = 59;
          h--;
        }

        return {
          hours: h.toString().padStart(2, '0'),
          minutes: m.toString().padStart(2, '0'),
          seconds: s.toString().padStart(2, '0')
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[500px] md:h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('/images/hero-banner.png')" }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center px-4 md:px-24">
        <div className="text-white max-w-[343px] md:max-w-[600px]">
          {/* Title */}
          <h1 className="mb-2 font-poppins font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl leading-snug">
            Super Flash Sale
          </h1>
          
          {/* Subtitle */}
          <h2 className="mb-6 font-poppins font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl leading-snug">
            50% Off
          </h2>

          {/* Countdown Timer */}
          <div className="flex gap-2">
            {/* Hours */}
            <div className="bg-white text-[#223263] font-bold text-sm sm:text-base md:text-lg rounded-md px-3 py-2 min-w-[50px] text-center">
              <div>{timeLeft.hours}</div>
              <div className="text-xs sm:text-sm text-gray-500">HOURS</div>
            </div>

            {/* Minutes */}
            <div className="bg-white text-[#223263] font-bold text-sm sm:text-base md:text-lg rounded-md px-3 py-2 min-w-[50px] text-center">
              <div>{timeLeft.minutes}</div>
              <div className="text-xs sm:text-sm text-gray-500">MIN</div>
            </div>

            {/* Seconds */}
            <div className="bg-white text-[#223263] font-bold text-sm sm:text-base md:text-lg rounded-md px-3 py-2 min-w-[50px] text-center">
              <div>{timeLeft.seconds}</div>
              <div className="text-xs sm:text-sm text-gray-500">SEC</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        <div className="w-2 h-2 bg-[#40BFFF] rounded-full"></div>
        <div className="w-2 h-2 bg-white/30 rounded-full"></div>
        <div className="w-2 h-2 bg-white/30 rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroBanner;