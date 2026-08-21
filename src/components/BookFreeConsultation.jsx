

const stats = [
  {
    title: "21+ years of experience",
    description: "We can handle projects",
    icon: "/cup.svg",
  },
  {
    title: "2500+ satisfied customers",
    description: "Startups to Fortune 500.",
    icon: "/satisfaction.svg",
  },
  {
    title: "675+ in-house team",
    description: "Ensure your digital success.",
    icon: "/team.svg",
  },
];

const partners = [
  "Microsoft",
  "aws",
  "Google Cloud",
  "Clutch",
  "CMMI",
  "Deloitte",
  "android",
  "INDIAN CREATIVITY",
];

export default function BookFreeConsultation() {
  return (
    <section className=" bg-white text-[#202124]">
      <div className="mx-auto flex w-full flex-col lg:flex-row">

        {/* ================= LEFT SIDE ================= */}
        <aside className="w-full md:w-[40%] bg-[#f1f1f3] py-16 md:py-20 lg:py-24 flex justify-center items-center">
          <div className="mx-auto max-w-97.5">

            {/* Contact Links */}
            <div className="mb-8 flex flex-wrap items-center font-medium gap-x-3 gap-y-2 text-[14px] text-[#1C2024]">
              <a
                href="#"
                className="inline-flex items-center gap-2 border-b border-dotted border-[#686b72] pb-px hover:text-black"
              >
                <PhoneIcon />
                Book A Call
              </a>

              <span className="h-5 w-px bg-[#a8a9ad]" />

              <a
                href="#"
                className="inline-flex items-center gap-2 border-b border-dotted border-[#686b72] pb-px hover:text-black"
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#25d366]">
                  <img src="/whatsapp.svg" alt="whatsapp" />
                </span>
                WhatsApp
              </a>

              <span className="h-5 w-px bg-[#a8a9ad]" />

              <a
                href="mailto:"
                className="inline-flex items-center gap-2 border-b border-dotted border-[#686b72] pb-px hover:text-black"
              >
                <MailIcon />
                Email us
              </a>
            </div>

            {/* Left Heading */}
            <h2 className="mb-6 text-[20px] text-[#1C2024] font-normal leading-[1.35] tracking-[-0.2px]">
              Startups & Fortune 500+ companies
            </h2>

            {/* Stats */}
            <div className="space-y-5">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e8e8eb] text-[#7b7e87]">
                    <img src={stat.icon} alt={stat.title} />
                  </div>

                  <div className="text-[#60646C]">
                    <p className="text-[18px] font-normal leading-6 ">
                      {stat.title}
                    </p>

                  </div>
                </div>
              ))}
            </div>

            {/* Partner Logos */}
            <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {partners.map((partner, index) => (
                <PartnerLogo key={index} name={partner} index={index} />
              ))}
            </div>
          </div>
        </aside>

        {/* ================= RIGHT SIDE ================= */}
        <main className="w-full md:w-[60%] bg-white px-10 py-16 md:py-20 lg:py-24">
          <div className="">

            {/* Heading */}
            <div className="mb-12">
              <h2 className="text-[#1C2024] text-[46px] font-bold leading-12.5">
               Book Free Consultation
              </h2>

              <p className="mt-3 text-[18px] leading-7 text-[#60646C]">
                Guaranteed response within 8 business hours.
              </p>
            </div>

            {/* Form */}
            <form className="space-y-6">

              {/* Name + Email */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <FloatingInput
                  label="Full Name"
                  placeholder="Enter Your Name"
                  type="text"
                />

                <FloatingInput
                  label="Email"
                  placeholder="Enter Your Email"
                  type="email"
                />
              </div>

              {/* Phone + Country */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                {/* Phone */}
                <div className="relative">
                  <label className="absolute -top-2.5 left-3 z-10 bg-white px-1.5 text-[14px] text-[#777b85]">
                    Phone No.
                  </label>

                  <div className="flex h-13.5 items-center rounded-[5px] border border-[#e3e4e8] px-4 transition focus-within:border-[#202124] focus-within:ring-1 focus-within:ring-[#202124]">
                    <span className="mr-2 text-[19px]">🇮🇳</span>

                    <span className="text-[16px] text-[#303238]">
                      +91
                    </span>

                    <ChevronDown />

                    <input
                      type="tel"
                      placeholder="(Optional)"
                      className="ml-2 min-w-0 flex-1 border-0 bg-transparent text-[16px] outline-none placeholder:text-[#858995]"
                    />
                  </div>
                </div>

                {/* Country */}
                <div className="relative">
                  <label className="absolute -top-2.5 left-3 z-10 bg-white px-1.5 text-[14px] text-[#777b85]">
                    Select Country
                  </label>

                  <select className="h-13.5 w-full appearance-none rounded-[5px] border border-[#e3e4e8] bg-white px-4 text-[16px] text-[#858995] outline-none focus:border-[#202124] focus:ring-1 focus:ring-[#202124]">
                    <option value="">Select your Country</option>
                    <option value="india">India</option>
                    <option value="usa">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="canada">Canada</option>
                    <option value="australia">Australia</option>
                  </select>

                  <ChevronDown className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              {/* Requirements */}
              <div className="relative">
                <label className="absolute -top-2.5 left-3 z-10 bg-white px-1.5 text-[14px] text-[#777b85]">
                  Your Requirements
                </label>

                <textarea
                  rows={5}
                  className="h-36.5 w-full resize-none rounded-[5px] border border-[#e3e4e8] bg-white px-4 py-5 text-[16px] outline-none focus:border-[#202124] focus:ring-1 focus:ring-[#202124]"
                />

                <button
                  type="button"
                  className="absolute bottom-3 left-4 rounded-sm border border-[#d9dbe0] bg-white px-2.5 py-1 text-[12px] text-[#777b85] hover:bg-[#f6f6f7]"
                >
                  Browse | Drop Files Here
                </button>
              </div>

              {/* Bottom */}
              <div className="flex flex-col gap-6 pt-1 sm:flex-row sm:items-center sm:justify-between">

                {/* Captcha */}
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-49.5 items-center justify-between rounded-[5px] border border-dashed border-[#c8cbd1] px-4 text-[#747780]">

                    <div className="relative flex items-center gap-3 text-[20px]">
                      <span>9</span>
                      <span className="text-[#a3a5aa]">+</span>
                      <span>7</span>

                      <span className="absolute left-1 top-1/2 h-px w-20 rotate-65 bg-[#d7d8dc]" />
                      <span className="absolute left-12 top-1/2 h-px w-20 rotate-65 bg-[#d7d8dc]" />
                    </div>

                    <button
                      type="button"
                      aria-label="Refresh captcha"
                      className="text-[#68707a] transition hover:rotate-180"
                    >
                      <RefreshIcon />
                    </button>
                  </div>

                  <span className="text-[22px] text-[#71747b]">=</span>

                  <input
                    type="text"
                    placeholder="??"
                    className="h-14 w-14 rounded-[5px] border border-[#c8cbd1] text-center text-[18px] outline-none focus:border-[#202124] focus:ring-1 focus:ring-[#202124]"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group inline-flex h-10.5 items-center justify-center gap-3 rounded-full border border-[#d1d3d8] bg-white px-5 text-[14px] font-medium text-[#666b75] transition hover:border-[#202124] hover:bg-[#202124] hover:text-white"
                >
                  Enquire Now

                  <ArrowIcon className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}

/* =====================================================
   COMPONENTS
===================================================== */

function FloatingInput({ label, placeholder, type }) {
  return (
    <div className="relative">
      <label className="absolute -top-2 left-3 z-10 bg-white px-1.5 text-[14px] text-[#777b85]">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="h-13.5 w-full rounded-[5px] border border-[#e3e4e8] bg-white px-4 text-[16px] text-[#27282b] outline-none placeholder:text-[#8b8f98] transition focus:border-[#202124] focus:ring-1 focus:ring-[#202124]"
      />
    </div>
  );
}

function PartnerLogo({ name, index }) {
  const colors = [
    "bg-[#dedee1]",
    "bg-[#dedee1]",
    "bg-[#3f83eb]",
    "bg-[#dedee1]",
    "bg-[#dedee1]",
    "bg-[#dedee1]",
    "bg-[#dedee1]",
    "bg-[#dedee1]",
  ];

  return (
    <div
      className={`flex h-12 items-center justify-center px-2 text-center ${colors[index]}`}
    >
      {name === "Microsoft" && (
        <div className="flex items-center gap-1 text-[9px] font-semibold text-[#65666a]">
          <span className="grid grid-cols-2 gap-px">
            <i className="h-2 w-2 bg-[#f25022]" />
            <i className="h-2 w-2 bg-[#7fba00]" />
            <i className="h-2 w-2 bg-[#00a4ef]" />
            <i className="h-2 w-2 bg-[#ffb900]" />
          </span>

          <span>
            Microsoft
            <br />
            Silver Partner
          </span>
        </div>
      )}

      {name === "aws" && (
        <div className="text-[8px] leading-tight text-[#68696d]">
          <strong className="text-[16px] text-[#252629]">aws</strong>
          <br />
          partner
          <br />
          network
        </div>
      )}

      {name === "Google Cloud" && (
        <div className="text-[8px] leading-tight text-white">
          <div className="mb-1 font-semibold">Partner</div>
          <span className="text-[13px] font-semibold">
            Google<span className="text-[#e8e8e8]">Cloud</span>
          </span>
        </div>
      )}

      {name === "Clutch" && (
        <div className="text-[9px] text-[#68696d]">
          Rate us on
          <br />
          <strong className="text-[15px]">Clutch</strong>
          <span> ★4.8</span>
        </div>
      )}

      {name === "CMMI" && (
        <span className="text-[12px] font-semibold italic text-[#55565a]">
          CMMI
        </span>
      )}

      {name === "Deloitte" && (
        <div className="text-[8px] leading-tight text-[#696a6e]">
          <strong className="text-[11px]">Deloitte</strong>
          <br />
          Technology Fast 50
        </div>
      )}

      {name === "android" && (
        <div className="text-[8px] leading-tight text-[#696a6e]">
          <strong>android</strong>
          <br />
          enterprise
          <br />
          recommended
        </div>
      )}

      {name === "INDIAN CREATIVITY" && (
        <div className="text-[8px] leading-tight text-[#696a6e]">
          Winner of
          <br />
          <strong className="text-[11px]">INDIAN</strong>
          <br />
          CREATIVITY
          <br />
          Awards 2012
        </div>
      )}
    </div>
  );
}

/* =====================================================
   ICONS
===================================================== */

function PhoneIcon() {
  return (
    <svg
      className="h-4.25 w-4.25"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      className="h-4.25 w-4.25"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function ChevronDown({ className = "" }) {
  return (
    <svg
      className={`h-4 w-4 text-[#727680] ${className}`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M20 11a8.1 8.1 0 0 0-15.5-2" />
      <path d="M4 5v4h4" />
      <path d="M4 13a8.1 8.1 0 0 0 15.5 2" />
      <path d="M20 19v-4h-4" />
    </svg>
  );
}

function ArrowIcon({ className = "" }) {
  return (
    <svg
      className={`h-4.25 w-4.25 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}
