import React from 'react'

function PrimaryButton({label , variant}) {
  return (
    <button className={`flex items-center gap-2.5 px-4 py-2 ${variant === "primary" ? "bg-[#2563EB] border border-px border-[#2563EB]" : "border border-px border-[#f1f1f1]"} text-[14px] rounded-full text-white`}>
        {label}
        <span>
            <img src="/small-right-arrow.svg" alt="right-arrow" />
        </span>
    </button>
  )
}

export default PrimaryButton
