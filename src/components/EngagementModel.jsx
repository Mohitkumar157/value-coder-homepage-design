import React from 'react'
import ComparisonTable from './ComparisonTable'

function EngagementModel() {
    return (
        <div className='py-16 md:py-20 lg:py-24'>
            <div className="container px-4 lg:px-0">
                <h2 className='text-[#05164D] text-center text-[46px] font-bold leading-12.5 lg:pr-6'>
                    Which Engagement Model Fits Your Situation?
                </h2>
                <p className='text-[18px] text-[#60646C] text-center mt-4'>
                    Staff augmentation is not the right model for every buyer. Use this comparison
                    to determine which <br /> engagement model best matches your delivery needs.
                </p>
                <ComparisonTable />
            </div>
        </div>
    )
}

export default EngagementModel
