"use client"

import Image from "next/image"
import Link from "next/link"
import { signIn, signOut, useSession, getProviders } from "next-auth/react"
import { useState, useEffect } from "react"


export default function Nav() {
    const isUserLoggedIn = true;

    const [providers, setProviders] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false);

    useEffect(() => {
        const setProviders = async () => {
            const response = await getProviders();

            setProviders(response);
        }
        setProviders();
    }, [])

    return (
        <nav className="flex-between mb-16 pt-3 w-full">
            <Link href="/" className="flex gap-2 flex-center">
                <Image
                    src="/assets/images/logo.svg"
                    alt="Prompt-app logo"
                    width={30}
                    height={30}
                    className="object-contain"
                />
                <p className="logo_text">Prompt-App</p>
            </Link>

            {/* Desktop Navigation */}
            <div className="sm:flex hidden">
                {isUserLoggedIn ? (
                    <div className="flex gap-3 md:gap-5">
                        <Link href="/create-prompt" className="black_btn">
                            Create prompt
                        </Link>
                        <button type="button" onClick={signOut} className="outline_btn">
                            Sign Out
                        </button>
                        <Link href="/profile">
                            <Image
                                src="/assets/images/logo.svg"
                                alt="Account profile"
                                width={37}
                                height={37}
                                className="rounded-full"
                            />
                        </Link>
                    </div>
                ): (
                    <>
                        {providers &&
                            Object.values(providers).map((provider) => {
                                <button
                                    type="button"
                                    onClick={() => signIn(provider.id)}
                                    key={provider.name}
                                    className="black_btn"
                                >
                                    Sign In
                                </button>
                        })}  
                    </>      
            )}
            </div>

            {/* Mobile Navigation */}
            <div className="sm:hidden flex relative">
                {isUserLoggedIn ? (
                    <div className="flex">
                        <Image
                            src="/assets/images/logo.svg"
                            alt="Account profile"
                            width={37}
                            height={37}
                            className="rounded-full cursor-pointer"
                            onClick={() => {setToggleDropdown((prev) => !prev)}}
                        />

                        {toggleDropdown && (
                            <div className="dropdown">
                                <Link
                                    href="/profile"
                                    className="dropdown_link"
                                    onClick={() => setToggleDropdown(false)}
                                >
                                    My Profile 
                                </Link>
                                <Link
                                    href="/create-prompt"
                                    className="dropdown_link"
                                    onClick={() => setToggleDropdown(false)}
                                >
                                    Create Prompt 
                                </Link>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setToggleDropdown(false);
                                        signOut();
                                    }}
                                    className="mt-5 w-full black_btn"
                                >
                                    Sign Out
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        {providers &&
                            Object.values(providers).map((provider) => {
                                <button
                                    type="button"
                                    onClick={() => signIn(provider.id)}
                                    key={provider.name}
                                    className="black_btn"
                                >
                                    Sign In
                                </button>
                        })}  
                    </>    
                )}
            </div>
        </nav>
    )
}