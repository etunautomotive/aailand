import React from 'react';
import { MessageSquare } from 'lucide-react';

const Testimonial = ({
  quote,
  name,
  position = "Sales Manager",
  dealership = "",
  location = ""
}) => {
  return (
    <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-start mb-4">
        <MessageSquare className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-1" />
        <p className="text-gray-700 italic">{quote}</p>
      </div>
      <div className="mt-4">
        <p className="font-semibold">{name}</p>
        {(position || dealership || location) && (
          <p className="text-sm text-gray-500">
            {position}
            {dealership && position && ", "}
            {dealership}
            {location && (dealership || position) && " — "}
            {location}
          </p>
        )}
      </div>
    </div>
  );
};

export default Testimonial;

export const testimonialsData = [
  {
    quote: "I was skeptical at first, but our dealership has seen a 42% increase in gross profit since implementing these strategies.",
    name: "Robert Chen",
    position: "Owner",
    dealership: "Pacific Auto Group",
    location: "Edmonton, AB",
  },
  {
    quote: "We went from $300K to $1.8M in 18 months using this exact training. The phone scripts and mindset modules were game-changers for our team.",
    name: "Michael Jensen",
    position: "Sales Director",
    dealership: "AutoPrime Motors",
    location: "Calgary, AB",
  },
  {
    quote: "Zero experience, now hitting record numbers. This system works if you work it.",
    name: "Sarah Kim",
    position: "BDC Manager",
    dealership: "Premium Autos",
    location: "Vancouver, BC",
  },
];

export const testimonialsMovingCardsData = testimonialsData.map(t => ({
  quote: t.quote,
  name: t.name,
  title: [t.position, t.dealership, t.location].filter(Boolean).join(" — "),
}));
