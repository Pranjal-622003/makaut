"use client"
import React, { useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

const Nav = () => {
    const { status } = useSession();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">

                <a href="/" class="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Study Material</span>
                </a>
                
                
                <div className="md:hidden">
                    <button onClick={handleMenuClick} className="text-gray-800 focus:outline-none">
                        <svg
                            className="w-6 h-6 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M19 14H5v-2h14v2zm0 4H5v-2h14v2zm0-8H5V8h14v2z"
                                />
                            ) : (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                
                <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-cta">
                <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="/organizer" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Organizer</a>
                        </li>
                        <li>
                            <a href="/notes" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Notes</a>
                        </li>
                        <li>
                            <a href="/pyq" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">PYQ</a>
                        </li>
                        <li>
                            <a href="/buy&sell" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Buy And Sell</a>
                        </li>
                        <div class="flex md:order-2">


                    {status === "authenticated" ? (
                        <button             
                            onClick={() => signOut()}
                            className="px-6 py-2 text-white rounded-md bg-slate-900 md:text-base lg:text-lg xl:text-xl"
                        >
                            Sign Out
                        </button>
                    ) : (
                        <button
                            onClick={() => signIn("google")}
                             className="px-6 py-2 text-white rounded-md bg-slate-900 md:text-base lg:text-lg xl:text-xl"
                        >
                            Sign In
                        </button>
                    )}







                </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
