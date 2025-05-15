import React from 'react';
import { Play } from 'lucide-react';

const VideoPlayer = ({ videoId, className = "" }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className={`relative rounded-lg overflow-hidden bg-gray-100 aspect-video shadow-xl ${className}`}>
      {!isPlaying ? (
        <>
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <p className="text-4xl font-semibold text-white/90 drop-shadow-md mb-8">
              Click to Watch
            </p>
            <button 
              onClick={handlePlay}
              className="bg-black/80 text-white rounded-full p-5 hover:bg-purple-600 transition-colors duration-300 hover:scale-105 transform"
              aria-label="Play video"
            >
              <Play className="h-14 w-14" />
            </button>
          </div>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(https://img.youtube.com/vi/${videoId}/maxresdefault.jpg)`,
              opacity: 0.8
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
          className="absolute top-0 left-0 w-full h-full"
        ></iframe>
      )}
    </div>
  );
};

export default VideoPlayer;