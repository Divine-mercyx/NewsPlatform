"use client"

import Image from "next/image";
import type React from "react";
import Link from "next/link";
import {Search} from "lucide-react";

export function Hero() {

    return (
        <div className="md:h-[489px] md:bg-[#000] h-[130px] pl-5 pr-5 flex flex-col items-center justify-center text-white">
            <Image
                src="/img_1.png"
                alt="AGC News Network Logo"
                width={1200}
                height={400}
                className="md:mt-10 mt-30 rounded-sm"
            />


            <div className="container mx-auto px-4">
                <div className="md:w-full mt-17 flex items-center justify-between h-10">
                    <nav className="hidden md:flex md:text-gray-200 items-center space-x-8">
                        <Link href="/" className="md:text-gray-200 text-gray-700 hover:text-red-600 font-medium">
                            <Image
                                src="/img.png"
                                alt="AGC News Network Logo"
                                width={90}
                                height={90}
                                className="rounded-sm"
                            />
                        </Link>
                        <Link href="/" className="md:text-gray-200 border-b-2 pb-1 border-b-orange-400 text-gray-700 hover:text-red-600 font-medium">
                            Home
                        </Link>
                        <Link href="/politics" className="pb-1 md:text-gray-200 text-gray-700 hover:text-red-600 font-medium">
                            Africa
                        </Link>
                        <Link href="/business" className="pb-1 md:text-gray-200 text-gray-700 hover:text-red-600 font-medium">
                            Politics
                        </Link>
                        <Link href="/sports" className="pb-1 md:text-gray-200 text-gray-700 hover:text-red-600 font-medium">
                            Business
                        </Link>
                        <Link href="/technology" className="pb-1 md:text-gray-200 text-gray-700 hover:text-red-600 font-medium">
                            Sport
                        </Link>
                        <Link href="/technology" className="pb-1 md:text-gray-200 text-gray-700 hover:text-red-600 font-medium">
                            Health
                        </Link>
                        <Link href="/technology" className="pb-1 md:text-gray-200 text-gray-700 hover:text-red-600 font-medium">
                            Tech
                        </Link>
                        <Link href="/technology" className="pb-1 md:text-gray-200 text-gray-700 hover:text-red-600 font-medium">
                            Opinion
                        </Link>
                    </nav>


                    <nav className="hidden md:flex md:text-gray-200 items-center space-x-8">
                        <Link href="/business" className="md:text-gray-200 text-gray-700 hover:text-red-600 font-medium">
                            |
                        </Link>
                        <Link href="/sports" className="md:text-gray-200 text-gray-700 hover:text-red-600 font-medium">
                            Photos
                        </Link>
                        <Link href="/technology" className="md:text-gray-200 text-gray-700 hover:text-red-600 font-medium">
                            Video
                        </Link>
                        <Link href="/technology" className="md:text-gray-200 text-gray-700 hover:text-red-600 font-medium">
                            Audio
                        </Link>
                        <Link href="/technology" className="md:text-gray-200 text-gray-700 hover:text-red-600 font-medium">
                            <Search className="h-4 w-4" />
                        </Link>
                        <Link href="/technology" className="md:text-gray-200 text-gray-700 hover:text-red-600 font-medium">
                            Login / Sign up
                        </Link>
                    </nav>
                </div>
            </div>


        </div>
    )
}
