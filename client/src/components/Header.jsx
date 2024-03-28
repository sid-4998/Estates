import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='bg-slate-400 shadow-lg'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-4'>
            <Link to='/'>
                <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                    <span className='text-slate-800'>Estates</span>
                </h1>
            </Link>
            <form className='bg-slate-100 p-1 rounded-lg flex items-center'>
                <input type='text' placeholder='Search...' className='w-24 sm:w-48 md:w-72 bg-transparent font-medium focus:outline-none' />
                <FaSearch className='text-slate-700' />
            </form>
            <ul className='flex gap-10'>
                <Link to = '/'>
                    <li className='hidden sm:inline text-slate-900 font-bold hover:cursor-pointer hover:underline'>Home</li>
                </Link>
                <Link to = '/about'>
                    <li className='hidden sm:inline text-slate-900 font-bold hover:cursor-pointer hover:underline'>About</li>
                </Link>
                <Link to = '/sign-in'>
                    <li className='text-slate-900 font-bold hover:cursor-pointer hover:underline'>SignIn</li>
                </Link> 
            </ul>
        </div>
    </header>
  )
}

export default Header