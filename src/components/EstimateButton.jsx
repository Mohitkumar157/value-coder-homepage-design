import React from 'react';
import { ArrowRight } from 'lucide-react';
function EstimateButton() {
    return (
        <button className="flex items-center gap-4 rounded-full bg-[#F59E0B] text-[#05164D] py-0.5! pr-0.5! pl-3!">
            <span className="text-sm font-medium">Get an Estimate</span>

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#05164D]">
                <img src="/arrow-right.svg" alt="arrow-right" />
            </span>
        </button>
    )
}

export default EstimateButton;
