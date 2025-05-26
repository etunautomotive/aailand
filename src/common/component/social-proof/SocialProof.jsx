import React from "react";

const dealerAvatars = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/45.jpg",
  "https://randomuser.me/api/portraits/men/46.jpg"
];

const SocialProof = ({ dealerCount = 237, avatars = dealerAvatars }) => (
  <div className="flex items-center bg-white dark:bg-black/80 rounded-full px-6 py-3 shadow-md gap-6">
    {/* Avatars */}
    <div className="flex -space-x-3">
      {avatars.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt="Dealer avatar"
          className="w-10 h-10 rounded-full border-2 border-white dark:border-black object-cover"
          style={{ zIndex: 10 - idx }}
        />
      ))}
    </div>
    {/* Stars */}
    <div className="flex items-center ml-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-6 h-6 text-purple-500 mx-0.5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <polygon points="10,1 12.59,7.36 19.51,7.64 14,12.14 15.82,19.02 10,15.27 4.18,19.02 6,12.14 0.49,7.64 7.41,7.36" />
        </svg>
      ))}
    </div>
    {/* Text */}
    <span className="ml-4 font-medium text-gray-800 dark:text-gray-200 text-lg whitespace-nowrap">
      Used by {dealerCount} Dealers
    </span>
  </div>
);

export default SocialProof; 