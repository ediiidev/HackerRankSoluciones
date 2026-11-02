import React from "react";

interface Logo {
  name: string;
  svg: React.ReactNode;
}
const LOGOS: Logo[] = [
  {
    name: "React",
    svg: (
      <span className="font-extrabold text-xl tracking-tighter text-neutral-800 lowercase">
        React
      </span>
    ),
  },
  {
    name: "Python",
    svg: (
      <span className="font-serif italic font-bold text-xl text-neutral-800">
        Python
      </span>
    ),
  },
  {
    name: "HubSpot",
    svg: (
      <span className="font-bold text-xl tracking-tight text-neutral-800">
        HubSpot
      </span>
    ),
  },
  {
    name: "Notion",
    svg: (
      <div className="flex items-center gap-1 font-semibold text-xl text-neutral-800">
        <span className="border-2 border-neutral-800 rounded px-1 text-sm font-black">
          N
        </span>
        <span>Notion</span>
      </div>
    ),
  },
  {
    name: "NETFLIX",
    svg: (
      <span className="font-black text-xl tracking-widest text-neutral-800 uppercase">
        NETFLIX
      </span>
    ),
  },
  {
    name: "Zoom",
    svg: (
      <span className="font-bold text-xl text-neutral-800 lowercase tracking-wide">
        zoom
      </span>
    ),
  },
];
export const CompanyLogos: React.FC = () => {
  return (
    <section className="py-10 bg-white border-y border-neutral-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex animate-marquee whitespace-nowrap items-center gap-16 min-w-full">
          {LOGOS.concat(LOGOS).map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex items-center justify-center min-w-[150px] grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer"
            >
              {logo.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
