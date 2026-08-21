import { useState } from "react";

const faqData = [
  {
    question: "How quickly can engineers join our team?",
    answer:
      "Our engineers can typically join your team quickly, depending on your requirements and the engagement model.",
  },
  {
    question: "Can we interview engineers before making a decision?",
    answer:
      "Yes. You can interview shortlisted engineers and evaluate their technical skills, communication, and overall fit before making a decision.",
  },
  {
    question: "How does billing work for Team Extension?",
    answer:
      "Billing is straightforward and based on the engineers you engage, with monthly invoicing and no long-term hiring commitments. You can scale your team up or down as project priorities change, giving you flexibility without the administrative burden of permanent hiring.",
  },
  {
    question: "What happens if an engineer leaves or isn't the right fit?",
    answer:
      "If an engineer isn't the right fit, we'll work with you to identify a suitable replacement so your project can continue without unnecessary disruption.",
  },
  {
    question: "Will engineers work within our existing tools and processes?",
    answer:
      "Yes. Our engineers integrate with your existing tools, workflows, communication channels, and development processes.",
  },
  {
    question: "Is Team Extension the right engagement model for our team?",
    answer:
      "Team Extension is ideal when you need additional engineering capacity while keeping control over your existing processes, roadmap, and technical direction.",
  },
];

function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState(2);

  const handleToggle = (index) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <div className="w-full space-y-2.5">
      {faqData.map((item, index) => {
        const isActive = activeIndex === index;

        return (
          <div
            key={item.question}
            className={`overflow-hidden rounded-[10px] border transition-colors duration-300 ${
              isActive
                ? "border-[#6AA0FF]"
                : "border-[#E6E8EC]"
            }`}
          >
            {/* Question */}
            <button
              type="button"
              onClick={() => handleToggle(index)}
              className={`flex w-full items-center justify-between px-5 py-5 text-left transition-colors duration-300 ${
                isActive
                  ? "bg-[#F5F8FF] text-[#2563EB]"
                  : "bg-white text-[#1C2024]"
              }`}
            >
              <span className="text-[18px] font-semibold leading-6">
                {item.question}
              </span>

              <span
                className={`ml-4 flex h-5 w-5 shrink-0 items-center justify-center text-[#7C828C] transition-transform duration-300 ${
                  isActive ? "rotate-180 text-[#7C828C]" : ""
                }`}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </span>
            </button>

            {/* Answer */}
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                isActive
                  ? "grid-rows-[1fr]"
                  : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div
                  className={`border-t border-[#6AA0FF] px-5 py-0 text-[16px] font-medium leading-[1.6] text-[#60646C] transition-[padding] duration-300 ${
                    isActive ? "py-4" : "py-0"
                  }`}
                >
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FAQAccordion;
