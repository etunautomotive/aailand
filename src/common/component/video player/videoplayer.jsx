import React from "react";
import { Play } from "lucide-react";

const VideoPlayer = ({ videoId, className = "" }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div
      className={`relative rounded-lg overflow-hidden bg-gray-100 aspect-video shadow-xl ${className}`}
    >
      {!isPlaying ? (
        <>
<<<<<<< HEAD
          <div className="absolute inset-0 flex flex-col items-center justify-center z-[100]">
            <p className="text-4xl font-semibold text-white/90 drop-shadow-md mb-8">
=======
          <div
            className="absolute inset-0 flex flex-col items-center justify-center z-20 cursor-pointer"
            onClick={handlePlay}
          >
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white/90 drop-shadow-md mb-4 sm:mb-6 md:mb-8 px-4 text-center">
>>>>>>> 8ba03ff (fixed mobile UI)
              Click to Watch
            </p>
            <button
              className="bg-black/80 text-white rounded-full p-3 sm:p-4 md:p-5 hover:bg-purple-600 transition-colors duration-300 hover:scale-105 transform pointer-events-none"
              aria-label="Play video"
            >
              <Play className="h-8 w-8 sm:h-10 sm:w-10 md:h-14 md:w-14" />
            </button>
          </div>
<<<<<<< HEAD
          <div 
            className="absolute inset-0 bg-cover bg-center z-[90]"
            style={{ 
=======
          <div
            className="absolute inset-0 bg-cover bg-center z-10"
            style={{
>>>>>>> 8ba03ff (fixed mobile UI)
              backgroundImage: `url(https://img.youtube.com/vi/${videoId}/maxresdefault.jpg)`,
              opacity: 0.8,
            }}
          >
            <div className="w-full h-full bg-gray-800/10 backdrop-blur-sm"></div>
          </div>
        </>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
<<<<<<< HEAD
          className="absolute top-0 left-0 w-full h-full z-[100]"
=======
          className="absolute top-0 left-0 w-full h-full z-20"
>>>>>>> 8ba03ff (fixed mobile UI)
        ></iframe>
      )}
    </div>
  );
};

export default VideoPlayer;
