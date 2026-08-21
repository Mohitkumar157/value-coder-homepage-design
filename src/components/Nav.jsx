import React from "react";
import { Link } from "react-router-dom";

const navigationLinks = [
  {
    title: "Service",
    href: "/service",
  },
  {
    title: "Solutions",
    href: "/solutions",
  },
  {
    title: "Hire & Teams",
    href: "/hire-teams",
  },
  {
    title: "Company",
    href: "/company",
  },
];

function Nav() {
  return (
    <nav className="flex items-center gap-6.25 text-[#FCFCFD] text-sm font-semibold">
      {navigationLinks.map((link) => (
        <Link key={link.title} to={link.href}>
          {link.title}
        </Link>
      ))}
    </nav>
  );
}

export default Nav;