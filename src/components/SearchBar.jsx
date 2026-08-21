import React from 'react'

function searchBar() {
    return (
        <div className='py-0.5! pr-0.5! pl-3! flex items-center gap-2 border border-px border-[#80838D] rounded-full'>
            <img src="/search-icon.svg" alt="search-icon" />
            <input
                type="text"
                placeholder='Search or describe wh...'
                className='text-[12px] text-[#FCFCFD] border-0 outline-0'
            />
          <button><img src="/search-btn.png" alt="search-btn" /></button>
        </div>
    )
}

export default searchBar;
