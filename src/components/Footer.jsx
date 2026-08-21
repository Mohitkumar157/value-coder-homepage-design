
import React from "react";

const socialIcons = [
  {
    src: "/facebook.svg",
    alt: "Facebook",
  },
  {
    src: "/Twitter.svg",
    alt: "Twitter",
  },
  {
    src: "/Linkedin.svg",
    alt: "LinkedIn",
  },
  {
    src: "/Instagram.svg",
    alt: "Instagram",
  },
  {
    src: "/youtube.svg",
    alt: "YouTube",
  },
];

const locations = [
  {
    flag: "/new-york.svg",
    city: "New York, USA",
    address: (
      <>
        5900 Balcones Drive, STE100,
        <br />
        Austin, TX 78731
      </>
    ),
  },
  {
    flag: "/london.svg",
    city: "London, UK",
    address: (
      <>
        167–169 Great Portland Street, 5th
        <br />
        Floor, London W1W 5PF
      </>
    ),
  },
  {
    flag: "/dubai.svg",
    city: "Dubai, UAE",
    address: (
      <>
        541, 8W, Level 5, Dubai Airport
        <br />
        Free Zone
      </>
    ),
  },
  {
    flag: "/india.svg",
    city: "Noida, India",
    address: (
      <>
        11th Floor, Max Square, Noida–
        <br />
        Greater Noida Expy, Sector 129
      </>
    ),
  },
];

const footerLinks = [
  {
    title: "Company",
    links: [
      "About",
      "In Media",
      "Case Studies",
      "Our Blog",
      "Clients & Testimonials",
    ],
  },
  {
    title: "Our Expertise",
    links: [
      "Software Product Engineering",
      "Application Development",
      "Staff Augmentation",
      "Cloud Services",
      "AI & ML",
    ],
  },
  {
    title: "Hire Developers",
    links: [
      "Hire AI Engineers",
      "Hire Backend Developers",
      "Hire Frontend Developers",
      "Hire Blockchain Developers",
      "Hire Mobile App Developers",
    ],
  },
  {
    title: "Solutions",
    links: [
      "Offshore Development Center",
      "Offshore Software Development",
      "Nearshore Software Development",
    ],
  },
  {
    title: "Clients We Serve",
    links: [
      "For Startups",
      "For Enterprises",
    ],
  },
];



function Footer() {
  return (
    <footer className="w-full bg-[#1d2023] text-white">
      <div className="container py-16">

        {/* ================= LOCATIONS ================= */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {locations.map((location) => (
            <div
              key={location.city}
              className="
                
                rounded-[10px]
                border border-[#393d40]
                px-3
                py-4
                flex flex-col gap-2.5
                transition-colors
                duration-300
                hover:border-[#505458]
              "
            >
              {/* City */}
              <div className="flex items-center gap-2">
               <div className="w-5 h-5 rounded-full overflow-hidden">
                 <img src={location.flag} alt={location.city} />
               </div>

                <h3 className="text-[18px] font-normal leading-[1.2] tracking-[-0.2px] text-[#eeeeee]">
                  {location.city}
                </h3>
              </div>

              {/* Address */}
              <p className="text-[16px] font-medium text-[#E8E8EC] leading-[1.6] tracking-[-0.1px]">
                {location.address}
              </p>
            </div>
          ))}
        </div>

        {/* ================= FOOTER LINKS ================= */}
        <div className="mt-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-[1fr_1.25fr_1.25fr_1.3fr_1fr] lg:gap-x-8">

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-[18px] font-bold leading-[1.3] text-white">
                {section.title}
              </h3>

              <ul className="mt-6 space-y-2.5">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="
                        inline-block
                        text-[16px]
                        font-normal
                        leading-normal
                        text-[#80838D]
                        transition-colors
                        duration-200
                        hover:text-[#eeeeee]
                      "
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Social icons under Solutions */}
              {section.title === "Solutions" && (
                <div className="mt-6 flex items-center gap-5">
                  <span className=" text-[16px] font-medium text-nowrap">
                    Follow Us
                  </span>

                 <div className="flex items-center gap-2.5">
                  {socialIcons.map((icon)=>(
                    <img src={icon.src} alt={icon.alt} className="w-full h-auto object-cover"/>
                  ))}
                 </div>
                </div>
              )}
            </div>
          ))}

        </div>
      </div>
      <div className="text-center bg-black py-2.5">
        <span className="text-[#8D8D8D] text-[12px] font-medium">
          Copyright © 2004 - 2026 ValueCoders, All Rights Reserved. A Vinove Company.
        </span>
      </div>
    </footer>
  );
}

export default Footer;