import React from 'react';
import '../styles/Homepage.css';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-700 via-red-600 to-red-500 flex flex-col items-center justify-center text-white relative overflow-hidden">
      
      <div className="particle particle-1"></div>
      <div className="particle particle-2"></div>
      <div className="particle particle-3"></div>
      <div className="particle particle-4"></div>
      <div className="light-beam light-beam-1"></div>
      <div className="light-beam light-beam-2"></div>
      <div className="pulse-circle pulse-circle-1"></div>
      <div className="pulse-circle pulse-circle-2"></div>
      <div className="pulse-circle pulse-circle-3"></div>
      
      <h1 className="text-6xl font-extrabold mb-8 animate-fadeIn z-20 tracking-widest text-neon animate-pulseSlow">
        Welcome to HK Gallery
      </h1>

      <p className="text-lg mb-16 animate-fadeIn delay-500 z-20 tracking-wide text-glow animate-bounceInfinite">
        Explore the beauty of Hong Kong
      </p>
      

      <div className="flex space-x-8 z-20">
       
        <a
          href="/gallery"
          className="btn-gallery transform hover:rotate-12 hover:bg-gradient-to-r from-yellow-500 to-red-500 hover:shadow-neon"
        >
          <span className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h18M3 10h18m-9 5h9M3 15h6" />
            </svg>
          </span>
          <span>Gallery</span>
        </a>

        <a
          href="/video"
          className="btn-video transform hover:rotate-12 hover:bg-gradient-to-r from-green-500 to-blue-500 hover:shadow-neon"
        >
          <span className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132a1 1 0 00-1.555.832v4.264a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12c0-4.418-3.582-8-8-8s-8 3.582-8 8 3.582 8 8 8 8-3.582 8-8z" />
            </svg>
          </span>
          <span>Video</span>
        </a>
      
        <a
          href="/animations"
          className="btn-animations transform hover:rotate-12 hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-neon"
        >
          <span className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </span>
          <span>Animations</span>
        </a>
      </div>

      <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-overlay opacity-10 animate-spinSlow"></div>
      <div className="absolute top-0 right-0 w-48 h-48 bg-white rounded-full mix-blend-overlay opacity-20 animate-spinSlow"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay opacity-10 animate-spinSlow"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay opacity-20 animate-spinSlow"></div>

      
      <footer className="absolute bottom-4 text-sm text-white animate-fadeIn delay-1000 z-20 tracking-widest animate-bounceSlow">
        © 2024 HK Gallery. All rights reserved.
      </footer>
    </div>
  );
};

export default Homepage;
