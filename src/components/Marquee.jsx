import React from "react";

export default function Marquee() {
  const features = [
    "10-DAY REPLACEMENT GUARANTEE",
    "PROFILES IN 48 HOURS",
    "94% ON-TIME DELIVERY",
    "2,500+ PROJECTS DELIVERED",
    "675+ ENGINEERS ACTIVE",
    "4.8* ON CLUTCH",
    "20+ YEARS IN SOFTWARE DELIVERY",
    "ISO 27001 CERTIFIED",
  ];

  const FeatureSet = () => (
    <div className="flex shrink-0 items-center gap-3 pr-3">
      {features.map((feature, i) => (
        <span
          key={i}
          className="shrink-0 whitespace-nowrap text-sm font-medium text-white"
        >
          {feature}
          <span className="ml-3 text-[#F59E0B]">•</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="w-full max-w-full overflow-x-hidden bg-[#0026A0] py-4">
      <div className="flex w-max min-w-max animate-marquee hover:[animation-play-state:paused]">
        {/* First set */}
        <FeatureSet />

        {/* Duplicate set */}
        <FeatureSet />
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .animate-marquee {
          animation: marquee 10s linear infinite;
          will-change: transform;
        }
      `}</style>
    </div>
  );
}
