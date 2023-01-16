import React from 'react';
import { Link } from 'react-router-dom';
import {BiSearchAlt} from 'react-icons/bi'

const Navbar = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Hello world")
    }
    return (
        <div className='px-10 bg-indigo-900'>
             <nav className='h-20 w-full  flex justify-between'>
            <div className='h-full flex items-center'>
                <Link to='/'><h1 className='text-2xl text-white font-bold'>Javascript Hub</h1></Link>
            </div>
            <ul className='h-full flex items-center font-semibold text-white space-x-5'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/history">Reading History</Link>
                </li>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="#contact-us">Contact Us</Link>
                </li>
                <li className=''>
                    <form className='flex justify-center items-center bg-white text-black rounded-3xl px-3 py-2' onSubmit={handleSubmit}>
                       <input className='rounded-3xl outline-none px-2' type="text" />
                       <button className='text-2xl' type="submit"> <BiSearchAlt /> </button> 
                    </form>
                    
                </li>
            </ul>
        </nav>
        </div>
       
    );
};

export default Navbar;