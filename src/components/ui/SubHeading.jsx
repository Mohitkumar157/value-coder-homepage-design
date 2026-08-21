import React from 'react'

function SubHeading({ title , className }) {
    return (
        <span className={`uppercase text-[14px] font-bold tracking-[1px] ${className}`}>
            {title}
        </span>

    )
}

export default SubHeading
