"use client"

import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
const Nav = () => {
    const { status, data: session } = useSession();

    return (
        <>
            <div className="navbar bg-cyan-400">
                <div className="navbar-start">
                    <Link href='/' className="text-xl normal-case btn btn-ghost">Student Supply</Link>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link href='/organizer'>Organizer</Link></li>
                            <li><Link href='/notes'>Notes</Link></li>
                            <li><Link href='/pyq'>PYQ</Link></li>
                            <li><Link href='/buy&sell'>Buy</Link></li>
                            {status === "authenticated" ? (
                            <li>
                                <details className='dropdown dropdown-end'>
                                    <summary>
                                        <Image
                                            className='rounded-full'
                                            src={session?.user?.image}
                                            width={20}
                                            height={20}
                                        />
                                    </summary>
                                    <ul className="p-2 w-max dropdown-content bg-base-100">
                                        <li><Link href='/'>My Account</Link></li>
                                        <li><a onClick={() => signOut()}>LogOut</a></li>
                                    </ul>
                                </details>
                            </li>
                        ) : (
                            <li><a onClick={() => signIn()}>LogIn</a></li>
                        )}
                        </ul>

                    </div>
                </div>
                <div className="hidden navbar-end lg:flex">
                    <ul className="px-1 menu menu-horizontal">
                        <li><Link href='/organizer'>Organizer</Link></li>
                        <li><Link href='/notes'>Notes</Link></li>
                        <li><Link href='/pyq'>PYQ</Link></li>
                        <li><Link href='/buy&sell'>Buy</Link></li>
                        {status === "authenticated" ? (
                            <li>
                                <details className='dropdown dropdown-end'>
                                    <summary>
                                        <Image
                                            className='rounded-full'
                                            src={session?.user?.image}
                                            width={20}
                                            height={20}
                                        />
                                    </summary>
                                    <ul className="p-2 w-max dropdown-content bg-base-100">
                                        <li><Link href='/dashboard'>My Account</Link></li>
                                        <li><a onClick={() => signOut()}>LogOut</a></li>
                                    </ul>
                                </details>
                            </li>
                        ) : (
                            <li><a onClick={() => signIn()}>LogIn</a></li>
                        )}
                    </ul>
                </div>
            </div >
        </>
    );
};

export default Nav;
