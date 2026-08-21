import React from 'react'
import SubHeading from "../components/ui/SubHeading"
const timelineData = [
  {
    label: "DAY 0",
    number: "01",
    title: "Submit a brief",
    description:
      "Role, stack, seniority, timezone preference, and any team context you want us to match on. It takes 15 minutes. We ask clarifying questions on the same call.",
  },
  {
    label: "48 HOURS",
    number: "02",
    title: "Receive shortlist",
    description:
      "Two to three anonymised profiles within 48 hours. Experience summary, stack depth, a delivery outcome from a comparable engagement, and availability date. You review, shortlist, and interview whomever you want.",
  },
  {
    label: "DAY 3–4",
    number: "03",
    title: "Interview and select",
    description:
      "Standard technical interview. Your format, your questions. No intermediaries on the call. If none of the first round fit, we re-shortlist at no additional cost.",
  },
  {
    label: "WEEK 1",
    number: "04",
    title: "Structured onboarding week",
    description:
      "Day 1: repository and environment access, codebase walkthrough. Day 2–3: architecture context with your tech lead. Day 4–5: first PR submitted.",
  },
  {
    label: "ONGOING",
    number: "05",
    title: "Ongoing cadence",
    description:
      "Daily standups in your timezone. Async updates via your preferred channel (Slack, Teams, Linear). 90-day checkpoint with your AM and the engineer—covers technical alignment, capacity utilisation, and any fit adjustments before they become issues.",
  },
  {
    label: "<2 WEEKS, GUARANTEED",
    number: "06",
    title: "Replacement guarantee",
    description:
      "If an engineer leaves, underperforms, or doesn't fit the team, you can find a replacement within 2 weeks at no cost. Response on the same day. No ticket queues.",
  },
];
function BriefToContributing() {
    return (
        <section>
            <div className="container px-4 lg:px-0 pb-16 md:pb-20 lg:pb-24">
                <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-16'>
                    <div className="section-head">
                        <SubHeading title={"Onboarding to ongoing"} className={"text-[#2563EB]"} />
                        <h2 className='text-[#05164D] text-[32px] md:text-[38px] lg:text-[46px] font-bold leading-[1.2] md:leading-12.5'>
                            From brief to contributing engineer in five working days
                        </h2>
                    </div>
                    <p className='text-[18px] text-[#60646C] md:max-w-103.75'>
                        The process is designed around one constraint: your team's continuity.
                        Engineers join your workflows - not the other way around.
                    </p>
                </div>

                {/* Timeline Grid */}
                <div className="grid grid-cols-1 gap-4 md:gap-15 md:grid-cols-2 lg:grid-cols-3 md:mt-16 mt-6 overflow-hidden">
                    {timelineData.map((item, index) => (
                        <div key={item.number} className="relative border border-[#6AA0FF80] rounded-xl p-4 md:p-0 md:border-0">
                            {/* Top Label */}
                            <div className="mb-5">
                                <span className="text-[14px] font-semibold uppercase tracking-[0.02em] text-[#80838D]">
                                    {item.label}
                                </span>
                            </div>

                            {/* Number + Dashed Line */}
                            <div className="relative flex items-center">
                                {/* Dashed horizontal line */}
                                <div className="absolute left-11.5 -right-18.5 top-1/2 hidden border-t border-dashed border-[#d7d9df] md:block" />

                                {/* Number Badge */}
                                <div className="relative z-10 flex h-11.5 w-11.5 shrink-0 items-center justify-center rounded-[10px] bg-[#CBDEFF]">
                                    <span className="text-[18px] font-bold text-[#2865ed]">
                                        {item.number}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="mt-5">
                                <h3 className="text-[18px] font-semibold text-[#1C2024]">
                                    {item.title}
                                </h3>

                                <p className="mt-2.5 text-[14px] text-[#80838D] font-medium leading-[160%]">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BriefToContributing
