import React from "react";
import Marquee from "react-fast-marquee";
import { marqueeContent } from "./../../../assets/assets";
import MarqueeCard from "./MarqueeCard";

const TopRecruiter = () => {
  const leftScrollData = marqueeContent.slice(0, 8);
  const rightScrollData = marqueeContent.slice(8, 16);

  return (
    <div className="max-w-full mx-auto py-10">
      <section className="text-center mb-8 space-y-2">
        <h1 className="text-gray-800 font-bold text-3xl sm:text-4xl">
          Top Recruiters
        </h1>
        <p className="text-gray-500">
          Discover your next career move, freelance gig, or internship
        </p>
      </section>

      <div className="relative ">
        <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <Marquee speed={60}>
          {leftScrollData.map((mar, idx) => (
            <div className="mx-4" key={idx}>
              <MarqueeCard marqueeData={mar} />
            </div>
          ))}
        </Marquee>
      </div>

      <div className="relative mt-6">
        <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <Marquee  speed={60} direction="right">
          {rightScrollData.map((mar, idx) => (
            <div className="mx-4" key={idx}>
              <MarqueeCard marqueeData={mar} />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TopRecruiter;
