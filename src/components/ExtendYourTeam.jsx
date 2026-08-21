import React from 'react'
import PrimaryButton from './ui/PrimaryButton'

function ExtendYourTeam() {
    return (
        <section className='bg-[#05164D] py-16 md:py-20 relative'>
            <div className="container text-center flex flex-col gap-3 px-4 lg:px-0">
                <h2 className='text-white text-[46px] font-bold leading-12.5'>
                    Extend your team with engineers who ship
                </h2>
                <p className='text-[#D9D9E0] font-medium leading-[160%]'>
                    A Delivery Pod is operational in under two weeks. The first sprint metric report is at the first weekly demo.
                </p>

                <div className='flex items-center justify-center gap-4 mt-6 mb-3'>
                    <PrimaryButton label={"Talk to Us"} variant={"primary"}/>
                    <PrimaryButton label={"Book a Call"} variant={"secondary"}/>
                </div>
                <span className='text-[#80838D] text-[14px]'>30 minutes with a solution architect. No obligation.</span>
            </div>
            <img src="/Intersect.png" alt="Intersect-image" className='absolute left-0 bottom-15 w-auto h-auto object-cover '/>
            
                <img src="Intersect (1).png" alt="Intersect" className='absolute top-0 -right-5 hidden lg:block'/>
                <img src="Intersect (1).png" alt="Intersect" className='hidden lg:block absolute top-0 h-full w-fit -right-24 rotate-45 '/>
            
        </section>
    )
}

export default ExtendYourTeam
