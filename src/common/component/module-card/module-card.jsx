import React, { useRef } from 'react';
import { Book, ChevronDown } from 'lucide-react';

const ModuleCard = ({ 
  chapter, 
  title, 
  description, 
  videos, 
  lessons = [], 
  isOpen, 
  onClick, 
  animationDelay = "" 
}) => {
  const cardRef = useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -150px 0px' 
      }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`relative group bg-purple-50/50 dark:bg-purple-900/10 p-4 rounded-xl border border-purple-200/50 dark:border-purple-800/30 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer feature-card-animate ${animationDelay}`}
      onClick={onClick}
      style={{ overflow: 'visible' }}
    >
      {/* Glow effect */}
      <div
        className="absolute -inset-0.5 bg-gradient-to-r from-purple-400/60 to-purple-600/60 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 pointer-events-none"
        aria-hidden="true"
      />
      {/* Card content */}
      <div className="relative z-10">
        <div className="flex items-center space-x-4">
          <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg">
            <Book className="h-6 w-6 text-purple-600 dark:text-purple-300" />
          </div>
          <div className="flex-1 text-left">
            <div className="text-sm text-purple-600 dark:text-purple-300 font-medium mb-1">{chapter}</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">{description}</p>
            <div className="text-sm text-purple-600 dark:text-purple-300 font-medium">{videos} videos</div>
          </div>
          <ChevronDown className={`text-purple-600 dark:text-purple-300 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
        </div>
        {isOpen && (
          <div className="mt-4 pl-14 pb-2 pt-3 text-left border-t border-gray-100 dark:border-gray-800/30">
            <h4 className="font-medium text-sm mb-2 text-purple-700 dark:text-purple-300">Course Content:</h4>
            <ul className="space-y-2">
              {lessons.map((lesson, index) => (
                <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                  <div className="w-1.5 h-1.5 bg-purple-400 dark:bg-purple-400 rounded-full mr-2"></div>
                  <span>Lesson {index + 1}: {lesson}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModuleCard;