import React from 'react'
import Nav from './Nav';
import SearchBar from './SearchBar';
import EstimateButton from './EstimateButton';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header className='bg-[#05164D] py-5! hidden lg:block'>
      <div className='relative z-10 container flex justify-between items-center'>
        <Link to={"/"} className="logo w-55">
          <img src='/logo.png' alt='logo' className='w-full h-auto object-cover'/>
        </Link>
        <Nav />
        <div className='flex items-center gap-5'>
          <SearchBar />
          <EstimateButton />
        </div>
      </div>
    </header>
  )
}

export default Header;
