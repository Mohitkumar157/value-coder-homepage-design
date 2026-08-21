import React from 'react'
import SubHeading from './ui/SubHeading'
const accordionItems = [
    "Governance",
    "Billing",
    "Ramp Speed",
];
function HowItWork() {
    return (
        <div className='bg-[#05164D] relative overflow-hidden md:py-16 lg:py-24'>
            <div className='absolute bottom-0 '>
                <img src="/how-its-work-bf.png" alt="bg-image" className='w-full h-auto object-cover' />
            </div>
            <div className="container px-4 lg:px-0">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
                    {/* LEFT */}
                    <div className=''>
                        <SubHeading title={"How it works"} className="text-[#6AA0FF]" />
                        <h2 className='text-white text-[46px] font-bold leading-12.5 lg:pr-6'>
                            Individuals, pairs, or
                            small groups – on your tools, your cadence
                        </h2>
                        <p className='text-[#E8E8EC] text-[18px] font-medium mt-5'>
                            Your engineering process stays the same. The only thing that change
                            is who joins your team. You manage delivery. We handle employment, HR,
                            and replacements while engineers work inside your existing workflows.
                        </p>


                    </div>

                    {/* RIGHT */}
                    <div className='relative'>
                        <div className=''>
                            <h2 className='text-white text-[22px] font-bold uppercase'>
                                Team Composition
                            </h2>
                            <p className='text-[#E8E8EC] text-[16px] leading-[160%] font-medium mt-4 max-w-119.5'>
                                Individuals, pairs, or small groups of 3–5. Each engineer is matched to your
                                stack - Java/Spring Boot, <span className='border-b'>Python</span>, <span className='border-b'>React</span>, <span className='border-b'>Node.js</span>, <span className='border-b'>Data Engineering</span>, QA
                                Automation, or DevOps/Cloud. Start with one engineer or add a small group.
                                Scale capacity as your roadmap grows.
                            </p>
                        </div>
                        {/* =========================
            Accordion Items
        ========================== */}
                        <div className="w-full">
                            {accordionItems.map((item, i) => (
                                <div
                                    key={item}
                                    className={`mt-6 flex w-full items-center justify-between border-b border-[#80838D] ${i === 0 && "border-t border-[#80838D]"}`}
                                >
                                    {/* Title */}
                                    <span className="py-8 text-[22px] font-medium leading-none tracking-[-0.02em] text-white">
                                        {item}
                                    </span>

                                    {/* Arrow Button */}
                                    <button
                                        type="button"
                                        aria-label={`Open ${item}`}
                                        className="group flex h-15 w-13.75 shrink-0 items-center justify-center border border-[#80838D] transition-colors duration-300 hover:bg-white"
                                    >
                                        <svg
                                            className="h-7 w-7 text-[#2563EB] transition-transform duration-500 ease-out group-hover:translate-y-1.5"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                d="M6 9l6 6 6-6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div
                            className="
    pointer-events-none
    absolute
    right-0
    top-[0%]
    h-[180%]
    w-full
    rounded-full
    blur-3xl
    opacity-60
    bg-[radial-gradient(circle,#1D5BC4_0%,#1D5BC400_70%)]
  "
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWork
