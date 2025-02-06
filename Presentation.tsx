import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import confetti from 'canvas-confetti';

function Presentation() {
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger confetti effect
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FF1493', '#4B0082', '#00FFFF']
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FF1493', '#4B0082', '#00FFFF']
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-[200%] animate-wave bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12"></div>
        <div className="absolute w-full h-[200%] animate-wave-slow bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12"></div>
      </div>

      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-4 left-4 z-50 flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg text-white hover:bg-white/30 transition-all"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Home
      </button>

      {/* Presentation Container */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="aspect-video w-full max-w-6xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
          <iframe
            src="https://www.canva.com/design/DAGd9o6p5qM/embed"
            width="100%"
            height="100%"
            className="w-full h-full"
            allow="fullscreen"
            title="Presentation"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
