import React from 'react'
import PrimaryButton from './ui/PrimaryButton';
import Marquee from './Marquee';
const stars = Array(5).fill("/star.svg");
const blueStars = Array(5).fill("/blue-star.svg");
const clients = [
    "/client1.png",
    "/client2.png",
    "/client3.png"
]
function Hero() {
    return (
        <div>
            <div className="w-full bg-[#05164D]">
                <div className='w-[76%] h-screen pointer-events-none absolute top-0 right-0 z-0 '>
                    <img
                        src="/bg-hero.png"
                        alt="hero-bg"
                        className='w-full object-cover object-top'
                    />
                </div>
                <div className="hero-content relative z-50 flex flex-col justify-between">
                    <div className="container px-4 lg:px-0">
                        <div className='grid grid-cols-1 lg:grid-cols-2 text-[#E8E8EC] mt-35 lg:mt-15'>
                            {/* LEFT-SIDE */}
                            <div className='flex flex-col md:gap-5 gap-4 items-start'>
                                {/* STARS */}
                                <div className="bg-[#2563EB33] leading-4 flex items-center gap-2.5 border border-px border-[#FFFFFF33] rounded-full w-fit py-2 px-4">
                                    <div className="stars flex items-center gap-0.5">
                                        {stars.map((star, index) => (
                                            <img key={index} src={star} alt="star" />
                                        ))}
                                    </div>

                                    <span className='font-medium'>4.8/5 on Clutch · 200+ reviews</span>
                                </div>
                                {/* TITLE */}
                                <h1 className='text-[46px] md:text-[56px] lg:text-[70px] leading-[1.2] font-bold lg:leading-20 text-[#FFFFFF]'>
                                    Vetted Engineers<br className='hidden lg:block' />
                                    in <span className='text-[#6AA0FF]'>Your Team</span>
                                </h1>

                                <p className='text-[18px] font-medium leading-[1.6] text-[#FFFFFF]'>
                                    Need more engineering capacity but don't want another three-month hiring
                                    cycle? Get a vetted shortlist in 48 hours. Your roadmap, architecture,
                                    sprint planning, and code reviews stay with your team while we handle
                                    hiring, employment, replacements, and staffing.
                                </p>
                                {/* BUTTONS */}
                                <div className='flex items-center gap-5 my-4 md:my-7.5'>
                                    <PrimaryButton
                                        label="Talk to Us"
                                        variant="primary"
                                    />
                                    <PrimaryButton
                                        label="Book a Call"
                                        variant="secondary"
                                    />
                                </div>

                                {/* OUR PARTNERS */}
                                <div className=' w-full'>
                                    <div className='flex items-center gap-2.5'>
                                    <div>
                                        <img src="/microsoft.png" alt="microsoft" />
                                    </div>
                                    <div>
                                        <img src="/aws.png" alt="aws" />
                                    </div>
                                    <div>
                                        <img src="/google-clode.png" alt="google-clode" />
                                    </div>
                                    <div>
                                        <img src="/clutch.png" alt="clutch" />
                                    </div>
                                </div>
                                </div>
                            </div>

                            {/* RIGHT-SIDE */}
                            <div className='flex justify-center relative'>
                                <img src="/Polygon 1.svg" alt="Polygon" className='absolute top-70 right-1 z-70' />
                                <img src="/Polygon 4.svg" alt="Polygon" className='absolute top-30 right-0' />
                                <div className='overflow-hidden flex justify-center items-center'>
                                    <img
                                        src="/full-circle.png"
                                        alt="circle"
                                        className='full-circle absolute -bottom-1 right-0 md:left-[30%] lg:right-10.5'
                                    />

                                    <img
                                        src="/half-circle.png"
                                        alt="half-circle"
                                        className='half-circle md:left-[33%] absolute -bottom-6.75 right-0 lg:right-5 overflow-hidden'
                                    />
                                    <div className='max-w-106 max-h-130 relative overflow-hidden'>
                                        <div className='relative z-99'>
                                            <img src="/boy-with-laptop.png"
                                                alt="boy-with-laptop"
                                                className='w-full h-auto object-cover object-top'
                                            />

                                            <img src="/Polygon 2.svg" alt="Polygon" className='absolute top-23 right-15' />
                                            <img src="/Polygon 3.svg" alt="Polygon" className='absolute top-50 right-5' />

                                        </div>
                                        <div className='absolute left-6 top-13 z-40 border border-px border-[#6AA0FF] rounded-[20px] tracking-[1px] max-w-51.25 p-6 bg-[#10266E]'>
                                            <div className='flex items-center'>
                                                {clients.map((client, i) => (
                                                    <div
                                                        key={i}
                                                        className='w-10 h-10 rounded-full overflow-hidden border-2 border-white shrink-0 shadow-md'
                                                        style={{
                                                            marginLeft: i === 0 ? '0' : '-0.75rem',
                                                            zIndex: clients.length - i,
                                                        }}
                                                    >
                                                        <img src={client} alt="happy client image" className='w-full h-full object-cover' />
                                                    </div>
                                                ))}
                                            </div>
                                            <h2 className='text-[#6AA0FF] text-[40px] font-bold mt-4'>675+</h2>
                                            <h3 className='text-[16px] text-white font-medium'>Employees Contributing To Our Growth</h3>
                                        </div>
                                    </div>

                                    {/* BOTTOM-LABEL */}
                                    <div className='flex absolute md:left-[30%] lg:right-[10%] -bottom-11 items-center z-100 w-full md:w-fit justify-between md:gap-40'>
                                        <div className='flex flex-col gap-3'>
                                            <div className='bg-white flex items-center gap-3 py-2 px-4 rounded-sm'>
                                                <img src="/code-quality.svg" alt="code quality image" className='object-cover' />
                                                <div className='flex flex-col gap-1'>
                                                    <p className='text-[#05164D] text-[12px] font-semibold'>Code Quality</p>
                                                    <div className="stars flex items-center gap-0.5">
                                                        {blueStars.map((star, index) => (
                                                            <img key={index} src={star} alt="star" />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='bg-white flex items-center gap-3 py-2 px-4 rounded-sm'>
                                                <img src="/debug.svg" alt="debug image" className='object-cover' />
                                                <div className='flex flex-col gap-1'>
                                                    <p className='text-[#05164D] text-[12px] font-semibold'>Debuggability</p>
                                                    <div className="stars flex items-center gap-0.5">
                                                        {blueStars.map((star, index) => (
                                                            <img key={index} src={star} alt="star" />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="wraper max-w-19.25">
                                            <img src="/dots.png" alt="dots image" className='w-full h-auto object-cover' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-28'>
                    <Marquee />
                </div>
            </div>
        </div>
    )
}

export default Hero;



