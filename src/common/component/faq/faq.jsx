import React, { useState } from 'react';

const faqs = [
  {
    question: 'How is this different from other automotive sales training?',
    answer: 'Our training is specifically built for non-prime sales over the phone, with proven scripts and techniques that work in the Canadian & US market. We focus exclusively on helping you build a reliable pipeline of non-prime deals without requiring more inventory or staff.'
  },
  {
    question: 'How quickly will I see results?',
    answer: 'Most dealerships see their first additional deals within 14 days of implementing our phone scripts. The complete system typically adds $20-50K in additional gross profit within the first 30 days when followed exactly as taught.'
  },
  {
    question: 'Is this suitable for BDC staff or just sales consultants?',
    answer: 'The training works for both dedicated sales professionals and BDC staff. Many dealerships implement this system through their BDC first, then expand to the sales floor once they see the initial results.'
  },
  {
    question: 'What if I\'m not satisfied with the training?',
    answer: 'We offer a 30-day satisfaction guarantee. If you implement the system as taught and don\'t see results, we\'ll refund your investment in full.'
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full min-h-[40vh] flex flex-col items-center justify-center px-4 py-8 bg-transparent">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-10 bg-gradient-to-br from-black to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent py-2">
        Frequently Asked Questions
      </h1>
      <div className="w-full max-w-2xl mt-6 divide-y divide-gray-200/50 dark:divide-gray-700/50">
        {faqs.map((faq, idx) => (
          <div key={idx}>
            <button
              className="w-full flex justify-between items-center py-6 text-lg text-left font-medium text-gray-900 dark:text-gray-100 focus:outline-none"
              onClick={() => handleToggle(idx)}
              aria-expanded={openIndex === idx}
            >
              {faq.question}
              <span className="text-2xl text-purple-600 dark:text-purple-300 transition-transform duration-200" style={{ transform: openIndex === idx ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                +
              </span>
            </button>
            {openIndex === idx && (
              <div className="pb-6 pl-2 pr-2 text-base text-gray-700 dark:text-gray-300 animate-fade-in">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-12 text-center text-gray-700 dark:text-gray-300 text-base">
      </div>
    </section>
  );
}

// Add a simple fade-in animation for answer
// You can add this to your global CSS if not already present:
// .animate-fade-in { animation: fadeIn 0.3s ease; }
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } } 