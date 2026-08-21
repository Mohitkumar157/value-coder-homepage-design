import React from 'react'
import PrimaryButton from './ui/PrimaryButton'

function ScaleYourTeam() {
    return (
        <section className='bg-[#05164D] py-16 md:py-20 relative'>


            <div className='container px-4 lg:px-0'>
                <div className=" flex flex-col md:flex-row items-center justify-between">
                    <div className='flex flex-col gap-1 '>
                        <h2 className='text-white text-[32px] font-bold leading-12.5'>
                            Scale Your Team, Not Your Hiring.
                        </h2>
                        <p className='text-[#D9D9E0] font-medium leading-[160%]'>
                            675+ in-house engineers across Java, Python, React, Node.js, Data Engineering.
                        </p>

                        <div className='flex items-center gap-4 mt-5 mb-3'>
                            <PrimaryButton label={"Talk to Us"} variant={"primary"} />
                            <PrimaryButton label={"Book a Call"} variant={"secondary"} />
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col items-start gap-4'>
                            <div className='flex items-center gap-4'>





                                {/* <!-- Card --> */}
                                <div
                                    class="relative overflow-hidden rounded-xl
           border border-[#6AA0FF80]
           bg-[#071B5E]
           px-5 py-4
           shadow-[inset_0_0_30px_rgba(0,0,0,0.08)]"
                                >
                                    {/* <!-- Subtle inner glow --> */}
                                    <div
                                        class="pointer-events-none absolute inset-0 rounded-[20px] bg-linear-to-br "
                                    ></div>

                                    {/* <!-- Content --> */}
                                    <div class="relative z-10">
                                        <div class="text-[28px] font-semibold leading-none tracking-[-2px] text-white">
                                            94%
                                        </div>

                                        <div class="mt-4  text-[10px] font-semibold leading-[1.35] text-white">
                                            Engagements delivered<br />
                                            on time
                                        </div>
                                    </div>
                                    <div class="pointer-events-none absolute -right-2 -bottom-5 h-full w-20 rounded-full blur-2xl opacity-60 bg-[radial-gradient(circle,#6AA0FF80_100%,#40609980_100%)] "></div>
                                </div>
                                {/* <!-- Card --> */}
                                <div
                                    class="relative overflow-hidden z-50 rounded-xl
           border border-[#6AA0FF80]
           bg-[#071B5E]
           px-5 py-4
           shadow-[inset_0_0_30px_rgba(0,0,0,0.08)]"
                                >
                                    {/* <!-- Subtle inner glow --> */}
                                    <div
                                        class="pointer-events-none absolute inset-0 rounded-[20px] bg-linear-to-br "
                                    ></div>

                                    {/* <!-- Content --> */}
                                    <div class="relative z-10">
                                        <div class="text-[28px] font-semibold leading-none tracking-[-2px] text-white">
                                            94%
                                        </div>

                                        <div class="mt-4  text-[10px] font-semibold leading-[1.35] text-white">
                                            Engagements delivered<br />
                                            on time
                                        </div>
                                    </div>
                                    <div class="pointer-events-none absolute -right-2 -bottom-5 h-full w-20 rounded-full blur-2xl opacity-60 bg-[radial-gradient(circle,#6AA0FF80_100%,#40609980_100%)] "></div>
                                </div>

                            </div>
                            <div className='flex  overflow-hidden items-center gap-2.5 w-full py-4 px-5 bg-[#071B5E] border border-[#6AA0FF80] rounded-xl relative z-50'>
                                <div className='grid grid-cols-2 gap-2'>
                                    <img src="/Link.png" alt="link" />
                                    <img src="/Link (1).png" alt="link" />
                                    <img src="/Link (2).png" alt="link" />
                                    <img src="/Link (3).png" alt="link" />
                                </div>
                                <div className=''>
                                    <h3 className='text-[28px] text-white font-extrabold leading-[119%]'>4.8/5★</h3>
                                    <span className='text-[10px] text-[#E8E8EC]'>Client Rating on Clutch</span>
                                </div>
                                <div class="pointer-events-none absolute -right-2 -bottom-5 h-full w-20 rounded-full blur-2xl opacity-60 bg-[radial-gradient(circle,#6AA0FF80_100%,#40609980_100%)] "></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <img src="/Intersect.png" alt="Intersect-image" className='absolute left-0 bottom-15 w-auto h-auto object-cover ' />

            <img src="Intersect (1).png" alt="Intersect" className='absolute top-0 -right-5 hidden lg:block' />
            <img src="Intersect (1).png" alt="Intersect" className='hidden lg:block absolute top-0 h-full w-fit -right-24 rotate-45 ' />

        </section>
    )
}

export default ScaleYourTeam;
