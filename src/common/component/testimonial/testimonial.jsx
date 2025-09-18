import React from 'react';
import { MessageSquare } from 'lucide-react';

// Mask name to Firstname LastInitial
const maskName = (name = "") => {
  const parts = String(name).trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0];
  const first = parts[0];
  const lastInitial = parts[parts.length - 1][0] || "";
  return lastInitial ? `${first} ${lastInitial}.` : first;
};

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
        <p className="font-semibold">{maskName(name)}</p>
        {(position || dealership || location) && (
          <p className="text-sm text-gray-500">
            {position}
            {dealership && position && ", "}
            {dealership}
            {location && (dealership || position) && ", "}
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
    quote: "I was skeptical at first, but othe agents turned out to be amazing and now I dont think we'd ever go back to doing things the old way.",
    name: "Robert Chen",
    position: "Owner",
    dealership: "West Auto Group",
    location: "Atlanta, GA",
  },
  {
    quote: "Zero experience, now hitting record numbers. This system works if you work it.",
    name: "Sarah Kim",
    position: "BDC Manager",
    dealership: "Premium Autos",
    location: "Dallas, TX",
  },
  {
    quote: "AAI helped me break every 30-day record I had. 20 deals, over $30K profit all in one month.",
    name: "Jaedynn Cutler",
    position: "Finance Manager",
    dealership: "Approval Express Canada",
    location: "Vancouver, BC",
  },
  {
    quote: "Most intuitive tool I've used in the industry. Results were instant and setup was seamless.",
    name: "Kailey Parkin",
    position: "Sales Agent",
    dealership: "Approval Express Canada",
    location: "Vancouver, BC",
  },
  {
    quote: "This cut out hours of follow-up every day. It's efficient, powerful, and backed by an amazing team.",
    name: "Jacob Rego",
    position: "Sales Manager",
    dealership: "Powersport Canada",
    location: "Edmonton, AB",
  },
  {
    quote: "It's like having a sniper on your sales team. Never misses, never gets tired. Total game changer.",
    name: "Michael Filzwieser",
    position: "GSM",
    dealership: "Wutang Auto Group",
    location: "Vancouver, BC",
  },
  {
    quote: "This is by far the best system we have ever used. We have our lead qualification, logistics, and customer complaints process automated front to back. Our team is more efficient than ever and our customers are happier than ever.",
    name: "Jack Ni",
    position: "GM",
    dealership: "Ride Collective",
    location: "Vancouver Island, BC",
  },
];

export const testimonialsMovingCardsData = testimonialsData.map(t => ({
  quote: t.quote,
  name: t.name,
  title: [t.position, t.dealership, t.location].filter(Boolean).join(", "),
}));
