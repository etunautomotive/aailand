import { motion, AnimatePresence } from "framer-motion";
import Image from "./Image";

const ImageModal = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-80 pt-16 sm:pt-20"
        onClick={handleBackdropClick}
      >
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.5 }}
          className="relative w-[90vw] h-[80vh] flex items-center justify-center"
        >
          <div className="absolute inset-0 z-[101]">
            <button
              onClick={onClose}
              className="absolute top-2 right-4 text-white/80 text-sm font-medium px-4 py-2 rounded-lg flex items-center justify-center transition-all cursor-pointer bg-neutral-900/80 hover:bg-neutral-800 border border-white/10 backdrop-blur-[6px]"
            >
              Close
            </button>
          </div>
          <div className="relative z-[99] max-w-full max-h-full">
            <Image
              src={imageSrc}
              alt="Full screen view"
              className="max-w-full max-h-full object-contain"
              width={1920}
              height={1080}
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageModal;
