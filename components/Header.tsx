"use client"

import type React from "react"
import Link from "next/link"
import { Search, Menu, X, InstagramIcon, FacebookIcon, LinkedinIcon, TwitterIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState, useEffect } from "react"
import Image from "next/image"

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [date, setDate] = useState("")

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
    }

    useEffect(() => {
        const now = new Date();
        const formatted = now.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });
        setDate(formatted);
    }, []);

    return (
        <header className="md:bg-[#D32c89] bg-[#000] border-b md:border-0 border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-2 sm:px-4">
                <div className="flex items-center justify-between h-16 w-full">
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex md:text-gray-200 items-center space-x-4 lg:space-x-8">
                        <Link href="/" className="md:text-gray-200 text-gray-700 hover:text-red-600 font-medium">
                            About Us
                        </Link>
                        <Link href="/politics" className="md:text-gray-200 text-gray-700 hover:text-red-600 font-medium">
                            Contact Us
                        </Link>
                        <Link href="/business" className="md:text-gray-200 text-gray-700 hover:text-red-600 font-medium">
                            AGC Archive
                        </Link>
                        <Link href="/sports" className="md:text-gray-200 text-gray-700 hover:text-red-600 font-medium">
                            Advert Rate
                        </Link>
                        <Link href="/technology" className="md:text-gray-200 text-gray-700 hover:text-red-600 font-medium">
                            Privacy Policy
                        </Link>
                        <Link href="/technology" className="md:text-gray-200 text-gray-700 hover:text-red-600 font-medium">
                            AGC VIP
                        </Link>
                    </nav>

                    {/* Search and Actions */}
                    <div className="flex items-center space-x-2">
                        {/* Desktop Icons */}
                        <div className="hidden md:flex items-center space-x-2">
                            <span className="mr-2 text-xs">{date}</span>
                            <span className="text-gray-400">|</span>
                            <InstagramIcon color="#E4405F" />
                            <FacebookIcon color="#1877F3" />
                            <TwitterIcon color="#1DA1F2" />
                            <LinkedinIcon color="#0077B5" />
                        </div>

                        {/* Mobile Actions */}
                        <div className="flex items-center space-x-2 md:hidden">
                            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                <Menu className="h-5 w-5" />
                            </Button>
                            {isSearchOpen ? (
                                <form onSubmit={handleSearch} className="flex items-center w-[140px] xs:w-[180px] sm:w-[200px]">
                                    <Input
                                        type="text"
                                        placeholder="Search..."
                                        className="w-full px-2 py-1 text-xs"
                                        autoFocus
                                    />
                                    <Button type="button" variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
                                        <X className="h-4 w-4" />
                                    </Button>
                                </form>
                            ) : (
                                <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
                                    <Search className="h-5 w-5" />
                                </Button>
                            )}
                            <Image
                                src="/img.png"
                                alt="AGC News Network Logo"
                                width={32}
                                height={32}
                                className="rounded-sm"
                            />
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-700">
                        <nav className="flex flex-col space-y-4">
                            <Link href="/" className="text-gray-200 hover:text-red-600 font-medium">
                                Home
                            </Link>
                            <Link href="/politics" className="text-gray-200 hover:text-red-600 font-medium">
                                Politics
                            </Link>
                            <Link href="/business" className="text-gray-200 hover:text-red-600 font-medium">
                                Business
                            </Link>
                            <Link href="/sports" className="text-gray-200 hover:text-red-600 font-medium">
                                Sports
                            </Link>
                            <Link href="/technology" className="text-gray-200 hover:text-red-600 font-medium">
                                Technology
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}
