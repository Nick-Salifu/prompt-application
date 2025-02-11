"use client"

import Image from "next/image"
import Link from "next/link"
// import { signIn, signOut, useSession, getProviders } from "next-auth/react"
import { useState, useEffect } from "react"


export default function Nav() {
    const isUserLoggedIn = false;

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
                        <button type="button" className="outline_btn">
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
                        <button type="button" className="outline_btn">
                            Sign In
                        </button>
                    </>      
            )}
            </div>
        </nav>
    )
}