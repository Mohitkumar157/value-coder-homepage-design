import React from 'react'
import SubHeading from './ui/SubHeading';
const trustedCompanies = [
  {
    src: "/yala-university.png",
    alt: "Yala University"
  },
  {
    src: "/kuwait-police.png",
    alt: "Kuwait Police"
  },
  {
    src: "/dubai-police.png",
    alt: "Dubai Police"
  },
  {
    src: "/panasonic.png",
    alt: "Panasonic"
  },
  {
    src: "/infosys.png",
    alt: "Infosys"
  },
  {
    src: "/kn.png",
    alt: "KN"
  },
  {
    src: "/hitachi.png",
    alt: "Hitachi"
  },
  {
    src: "/orange.png",
    alt: "Orange"
  },
  {
    src: "/world.png",
    alt: "World"
  }
];
function TrusteBy() {
  return (
    <div className=''>
      <div className="py-7.5 px-4 lg:px-0 container flex flex-col gap-4 border-b border-[#FCFCFD]">
        {/* HEADING */}
        <div className="flex items-center  gap-4">
          <div className='w-81 bg-[#F0F0F3] h-px rounded-full hidden lg:block'></div>
          <div>
            <h2 className='font-semibold text-xl text-center trustedBy'>
              Trusted by startups and Fortune <span className='font-extrabold text-[#2563EB]'>500+</span> companies
            </h2>
          </div>
          <div className='w-81 bg-[#F0F0F3] h-px rounded-full hidden lg:block'></div>
        </div>

        <div className=''>
          <div className='grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-9 md:gap-6'>
            {trustedCompanies.map((comp) => (
              <div className='flex justify-center md:justify-start items-center' key={comp.alt}>
                <img src={comp.src} alt={comp.alt} className='w-auto h-auto object-cover' />
              </div>
            ))}
          </div>
        </div>

        {/* The engagement */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 py-16'>
          {/* LEFT */}
          <div>
            <SubHeading title={"The engagement"} className="text-[#2563EB]" />
            <h2 className='text-[#05164D] text-[32px] md:text-[38px] lg:text-[46px] font-bold leading-[1.2] md:leading-12.5'>
              You need engineers who fit into your team, not another team to manage.
            </h2>
            <p className='text-[#60646C] text-[18px] font-medium mt-5'>
              Your engineers shouldn't have to adapt to someone else's methods.
              Augmented engineers join your standups, work from your backlog,
              commit to your repositories, and follow your release process.
              They work like engineers you've hired, not a separate vendor operating
              alongside you.
            </p>
          </div>

          {/* RIGHT */}
          <div className='rounded-[20px] border-t-4 border-t-[#2563EB]'>
            <div className='h-full border border-tl-none rounded-[20px] border-[#2563EB33] p-7.5 shadow-[0_4px_14px_3px_rgba(4,0,245,0.08)]'>
              <h2 className='text-[#2563EB] text-[20px] font-bold uppercase'>
                What is staff augmentation?
              </h2>
              <p className='text-[#60646C] text-[16px] leading-[160%] font-medium mt-4 max-w-119.5'>
                Staff augmentation is an engagement model where pre-vetted engineers
                join your existing team under your management, processes, and tools.
                The vendor handles employment, payroll, HR compliance, and replacement SLA.
                Your sprint board doesn't change. Your release
                process doesn't change. The only difference is additional engineering capacity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrusteBy
