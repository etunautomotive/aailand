import React, { useState } from 'react';

// Default FAQ data
const defaultFaqs = [
  {
    question: 'This sounds too good to be true. How do I know it actually works?',
    answer: 'I get it. You\'ve probably been burned by software promises before. Here\'s the difference: We\'re not some generic chatbot company. We built this specifically for automotive after losing $2.3M ourselves from poor lead management. Look at the results: Our dealers are going from zero subprime experience to breaking every 30-day record. 20 deals, $30K profit in one month. We have dealers telling us it\'s "by far the best system we have ever used." These aren\'t paid testimonials. These are real dealers solving the same problems you face. Plus, we\'re so confident it works that we offer a 30-day money-back guarantee. No contracts. Month-to-month. If it doesn\'t deliver results in the first 30 days, you get every penny back.'
  },
  {
    question: 'We already have a CRM/BDC system. Why do we need another one?',
    answer: 'You don\'t need to replace anything. We can assist with pulling your data from PBS, Activix, whatever you\'re using. Think of it this way: Your current CRM is like having a filing cabinet. Our AI is like having a world-class salesperson who never sleeps, never calls in sick, and works that filing cabinet 24/7. Our dealers keep their existing systems AND add ours because now their leads actually get worked properly. Dealers paying $2,500/month for their current CRM go from 3-9% closing ratio to seeing instant improvements because every lead gets touched within 30 seconds instead of sitting until morning.'
  },
  {
    question: 'Our sales team won\'t want to use this. They like doing things their own way.',
    answer: 'Here\'s what actually happens: Your sales team will LOVE this system because it makes their job easier, not harder. Instead of chasing cold leads and doing data entry, they get pre-qualified, ready-to-buy customers handed to them. Our dealers tell us they were skeptical at first, but now they say they\'d "never go back to doing things the old way." The AI handles the grunt work. The follow-ups, the qualification, the objection handling. Your salespeople get to do what they do best: close deals. It\'s like giving them a personal assistant who works 24/7.'
  },
  {
    question: 'What if the AI says something wrong or offends a customer?',
    answer: 'This isn\'t some generic ChatGPT bot. Every AI agent is custom-trained on YOUR processes, YOUR brand voice, and YOUR dealership values. We spend the first 48 hours programming it to sound exactly like your best salesperson. And your BDC/Sales people monitor every conversation and can jump in anytime. Plus, after handling millions of automotive conversations, our AI actually handles objections BETTER than most salespeople. It never gets frustrated, never has a bad day, and always follows your proven scripts perfectly.'
  },
  {
    question: 'This seems expensive. How do I know I\'ll get ROI?',
    answer: 'Let\'s do the math. You\'re currently losing $2.3M annually from poor lead management. That\'s $191,000 per month in missed opportunities. Our system costs $5,000/month. If it captures just ONE additional deal per month (which is conservative since most dealers see 10-20 more), you\'ve paid for it. But here\'s the real kicker: Remember those "dead" leads in your database? We\'re seeing 4-19% conversion on old data. If you have 1,000 old leads and convert just 4%, that\'s 40 re-engaged customers. Close 15% of those (6 deals) at $5,000 gross profit each = $30,000 profit from leads you already paid for. Most dealers cover their entire monthly investment just from database reactivation in 1-2 weeks.'
  },
  {
    question: 'We\'re a small dealership. Is this only for big stores?',
    answer: 'Actually, smaller dealerships see the biggest impact because you can\'t afford to waste ANY leads. Look at it this way: If you\'re getting 50 leads per month and only converting 6% (3 deals), our system typically gets you to 31% conversion (15+ deals). That\'s 12 additional deals per month from the same lead spend. The beauty is it scales to your size. Small store? You get the same AI power as the big guys. You\'re not paying per lead or per conversation. It\'s one flat rate whether you process 50 leads or 500.'
  },
  {
    question: 'What happens if we want to cancel? Are we locked into a contract?',
    answer: 'Zero contracts. Month-to-month only. We earn your business every single month. Why? Because we\'re confident in our results. If we locked you into a contract and the system didn\'t work, you\'d hate us and tell everyone. Instead, we focus on delivering value every month so you WANT to stay. Most software companies demand contracts because they know their product doesn\'t deliver. We do the opposite. Prove our worth first, then earn your continued business.'
  },
  {
    question: 'How long does it take to set up? We don\'t have time for a complicated implementation.',
    answer: 'You\'ll be live and generating results in 48 hours. Not weeks or months. 48 hours. Here\'s the process: Day 1, we set up your pre-onboarding meeting to create and connect your twilio and preferred large language model. Day 2, we create your database reactivation agent and set your agents persona fields, objections handles etc and we launch your database reactivation campaign. By Day 3, you\'re seeing appointments and credit applications from leads you thought were dead. No complicated training. No disruption to your current operations. Your team keeps doing what they do best while the AI handles everything else in the background.'
  },
  {
    question: 'How do I know you\'ll be around in a year? What if you go out of business?',
    answer: 'Fair question. We\'re not some venture-funded startup burning cash. We\'re profitable from day one because our system actually works and dealers gladly pay for results. We\'re already at 123+ dealerships in just 3 months since launch, with zero churn. When dealers see 10-20 additional deals per month, they don\'t cancel. They refer their friends. Plus, all your data stays in your control. You own your customer information, your conversations, everything. We\'re the tool, you own the results.'
  },
  {
    question: 'Our salespeople have their own style and process. Will AI sound robotic or generic?',
    answer: 'The opposite. Each salesperson gets their own AI agent trained on THEIR specific style and process. We ask detailed questions about how they communicate, their selling approach, even which sales trainers they follow. The AI learns to sound like them, not like a robot. We can make it sound like Grant Cardone, Jeremy Miner, or however your team naturally communicates. Customers often prefer talking to our AI over inexperienced salespeople because it\'s consistent and knowledgeable. Your top performer\'s approach can now be replicated across unlimited leads simultaneously. It\'s like cloning your best salesperson\'s skills without the human limitations.'
  },
  {
    question: 'We\'ve tried other AI chatbots before and they were terrible. How is this different?',
    answer: 'Those were generic chatbots built for every industry. We\'re built specifically for automotive, RV, and powersports. We understand your inventory, your financing, your trade-in process. Generic AI says "let me connect you with an agent" when asked about interest rates. Our AI knows your lenders, your approval rates, your inventory levels. It can handle real objections and actually move deals forward. Plus, we\'re not just a chatbot. We\'re a complete operating system that handles lead management, follow-ups, credit pulls, and integrates with DealerTrack and Credit App. It\'s like comparing a toy car to a Ferrari.'
  },
  {
    question: 'Our market is different. Will this work in our specific area or customer base?',
    answer: 'We customize everything for your specific market and customer base. Whether you\'re working with prime customers and want to book appointments or working subprime leads over the phone, we adapt to your process. We\'ve worked with dealers from coast to coast, different demographics, different credit profiles. The beauty of AI is you can train it exactly to your specific customer language and objections, then handles them consistently. Your market isn\'t different in terms of basic human psychology. People want to be heard, understood, and helped. Our AI does that better than most humans because it never gets tired, frustrated, or has a bad day.'
  },
  {
    question: 'Is our data protected?',
    answer: 'Absolutely. We use enterprise-grade security with 99.9% uptime and bank-level encryption to protect all your information. But here\'s what\'s most important: YOU own all your data. Every customer record, every piece of information belongs to you, not us. We\'re just the tool processing it. Unlike some companies that hold your data hostage, you can export everything at any time. We\'re not in the business of owning your customer relationships we\'re in the business of helping you work them better. Plus, this is actually MORE secure than your current process. No more customer data sitting on salespeople\'s personal phones or scattered across different systems. Everything is centralized, sanitized, and tracked. If you ever decide to leave the system, you take all your data with you. We believe in earning your business through results, not by trapping your information.'
  },
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

export default function FAQ({ title, faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full min-h-[40vh] flex flex-col items-center justify-center px-4 py-8 bg-transparent">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-10 bg-gradient-to-br from-black to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent py-2">
        {title || 'Frequently Asked Questions'}
      </h1>
      <div className="w-full max-w-2xl mt-6 divide-y divide-gray-200/50 dark:divide-gray-700/50">
        {(faqs || defaultFaqs).map((faq, idx) => (
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