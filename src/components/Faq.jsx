import React from 'react'
import FAQAccordion from './FAQAccordion';

function Faq() {
    return (
        <section className='py-16 md:py-20 lg:py-24'>
            <div className="container px-4 lg:px-0">
                <div className="flex flex-col md:flex-row w-full gap-4 md:gap-0">
                    <div className='md:w-[40%] w-full'>
                        <h2 className='text-[#05164D] text-[32px] md:text-[38px] lg:text-[46px] font-bold leading-[1.2] md:leading-12.5'>
                            Frequently Asked <br className='hidden md:block' />
                            <span className='text-[#1D5BC4] leading-[130%]'>Questions</span>
                        </h2>
                        <p className='text-[#60646C] text-[18px] font-medium mt-4 md:mt-5 md:max-w-111.5'>
                            Here is the list of some of the most common questions we hear before any engagement.
                            If your  query is not listed here, contact us and we will get
                            back to you within 24 hours.
                        </p>
                    </div>

                    <div className='md:w-[60%] w-full'>
                        <FAQAccordion />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq;
