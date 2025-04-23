"use client";

import Image from "next/image";
import taizo from "@/assets/images/taizo.svg";
import Button from "@/components/Button";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "JobSeeker", href: "#JobSeeker" },
    { label: "About", href: "#About" },
    { label: "Contact", href: "#Contact", className: "hidden md:hidden lg:inline-flex" }, // Hide on md, show on lg
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Navbar with drop animation */}
            <motion.section
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="py-4 lg:py-8 fixed w-full top-0 z-50"
            >
                <div className="container max-w-5xl">
                    <div className="border border-white/15 rounded-[27px] bg-neutral-950/70 backdrop-blur">
                        <div className="grid grid-cols-2 md:grid-cols-3 p-2 px-4 md:pr-2 items-center">
                            {/* Logo */}
                            <div>
                                <Image
                                    src={taizo}
                                    alt="logo"
                                    className="h-9 md:h-auto w-auto"
                                />
                            </div>

                            {/* Nav Links - Now visible on md screens */}
                            <div className="md:flex justify-center items-center hidden">
                                <nav className="flex gap-6 font-medium">
                                    {navLinks.map((link) => (
                                        <a
                                            href={link.href}
                                            key={link.label}
                                            className={`relative text-white transition-all group ${link.className || ""}`}
                                        >
                                            {link.label}
                                            <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-lime-400 transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:w-full"></span>
                                        </a>
                                    ))}
                                </nav>
                            </div>

                            {/* Mobile Menu & Buttons */}
                            <div className="flex justify-end gap-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-menu md:hidden"
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    <line
                                        x1="3"
                                        y1="6"
                                        x2="21"
                                        y2="6"
                                        className={twMerge(
                                            "origin-left transition",
                                            isOpen && "rotate-45 -translate-y-1"
                                        )}
                                    ></line>
                                    <line
                                        x1="3"
                                        y1="12"
                                        x2="21"
                                        y2="12"
                                        className={twMerge(
                                            "transition",
                                            isOpen && "opacity-0"
                                        )}
                                    ></line>
                                    <line
                                        x1="3"
                                        y1="18"
                                        x2="21"
                                        y2="18"
                                        className={twMerge(
                                            "origin-left transition",
                                            isOpen && "-rotate-45 translate-y-1"
                                        )}
                                    ></line>
                                </svg>

                                {/* Login & Signup Buttons */}
                                <Button
                                    variant="secondary"
                                    className="hidden md:inline-flex items-center"
                                >
                                    Log In
                                </Button>
                                <Button
                                    variant="primary"
                                    className="hidden md:inline-flex items-center"
                                >
                                    Sign Up
                                </Button>
                            </div>
                        </div>

                        {/* Mobile Navigation - Animate Presence */}
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: "auto" }}
                                    exit={{ height: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="flex flex-col items-center gap-4 py-4">
                                        {navLinks
                                            .filter((link) => link.label !== "FAQs") 
                                            .map((link) => (
                                                <a
                                                    href={link.href}
                                                    key={link.label}
                                                    className="relative text-white transition-all group"
                                                >
                                                    {link.label}
                                                    <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-lime-400 transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:w-full"></span>
                                                </a>
                                            ))}
                                        <Button variant="secondary" withHoverEffect>
                                            Log In
                                        </Button>
                                        <Button variant="primary">
                                            Sign Up
                                        </Button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </motion.section>

           
            <div className="pb-[86px] md:pb-[98px] lg:pb-[130px]"></div>
        </>
    );
}
