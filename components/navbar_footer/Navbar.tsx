"use client"
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar max-w-7xl mx-auto px-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link href='/about'>About Us</Link></li>
                        <li><Link href='/#services'>Services</Link></li>
                        <li>
                            <a>Blog</a>
                            <ul className="p-2 w-full">
                                <li><a href='/blog/blog-one'>Blog 1</a></li>
                                <li><a href='/blog/blog-two'>Blog 2</a></li>
                                <li><a href='/blog/blog-three'>Blog 3</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <Link href='/' className="btn btn-ghost text-2xl">Logo</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg">
                    <li><Link href='/about'>About Us</Link></li>
                    <li><Link href='/#services'>Services</Link></li>
                    <li className='w-32'>
                        <details>
                            <summary>Blog</summary>
                            <ul className="p-2 w-full">
                                <li><a href='/blog/blog-one'>Blog 1</a></li>
                                <li><a href='/blog/blog-two'>Blog 2</a></li>
                                <li><a href='/blog/blog-three'>Blog 3</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link href='/#contact' className="btn btn-secondary">Contact Us</Link>
            </div>
        </div>
    )
}

export default Navbar