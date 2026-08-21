import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { href: "/service", label: "Service" },
  { href: "/solutions", label: "Solutions" },
  { href: "/hire-teams", label: "Hire & Teams" },
  { href: "/company", label: "Company" },
  { href: "/contact", label: "Contact" },
];

function Hamburger() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-[999] flex justify-between items-center px-2 py-4 transition-all duration-300 ${
        scrolled ? "bg-[#05164D] shadow-md" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link to="/" className="logo max-w-50 relative z-50">
        <img
          src="/logo.png"
          alt="logo"
          className="w-full h-auto object-cover"
          loading="eager"
        />
      </Link>

      {/* Hamburger Button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open mobile menu"
        aria-expanded={open}
        className="relative z-50 border border-[#FFFFFF33] flex flex-col gap-2 p-3 bg-[#05258f] rounded-md overflow-hidden"
      >
        <span className="inline-block w-7 h-0.5 bg-[#f59e0b] rounded-full" />

        <span
          className={`inline-block h-0.5 bg-white rounded-full transition-all duration-200 ${
            open ? "w-7" : "w-4"
          }`}
        />

        <span className="inline-block w-7 h-0.5 bg-[#f59e0b] rounded-full" />
      </button>

      {/* Mobile Navigation */}
      <nav
        aria-label="Mobile navigation"
        className={`fixed top-0 right-0 z-[999] w-full h-screen flex justify-end backdrop-blur-[2px] transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-[75%] relative h-screen p-6 bg-[#05164D] text-white">
          
          {/* Mobile Header */}
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="logo max-w-30 relative z-50"
              onClick={() => setOpen(false)}
            >
              <img
                src="/logo.png"
                alt="logo"
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </Link>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close mobile menu"
              className="cursor-pointer"
            >
              <X
                className="w-9 h-9"
                strokeWidth={1.25}
              />
            </button>
          </div>

          <div className="w-full h-[0.5px] bg-[#FFFFFF33] my-5" />

          {/* Navigation Links */}
          <ul className="flex flex-col gap-2">
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                className="font-semibold text-[18px] py-2 overflow-hidden"
              >
                <Link
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className={`inline-block transition-all duration-700 ease-out ${
                    open
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-24 opacity-0"
                  }`}
                  style={{
                    transitionDelay: open ? `${i * 80}ms` : "0ms",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="w-full h-[0.5px] bg-[#FFFFFF33] my-5" />

          {/* Background Glow */}
          <div className="pointer-events-none absolute right-0 top-0 h-[180%] w-full rounded-full blur-3xl opacity-60 bg-[radial-gradient(circle,#1D5BC4_0%,#1D5BC400_70%)]" />
        </div>
      </nav>
    </div>
  );
}

export default Hamburger;