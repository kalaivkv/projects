"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Tag from "@/components/Tag";
import FeatureCard from "@/components/FeatureCard";

import Key from "@/components/Key";

export default function Features() {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.2 });

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="py-24"
        >
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex justify-center"
                >
                    <Tag>Hiring</Tag>
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto"
                >
                    Shape Tomorrow With{" "}
                    <span className="text-lime-400">Taizo</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8"
                >
                    <FeatureCard
                        title="Professional & Goal-Oriented"
                        description="Our Dream Job Starts With One Conversation – Book a Free Call."
                        className="md:col-span-2 lg:col-span-1 group"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <p className="text-4xl font-extrabold text-white/20 group-hover:text-white/10 transition duration-500 text-center">
                                Today Take the{" "}
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative">
                                    <span>First Step</span>
                                </span>{" "}
                                Toward Your Future
                            </p>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title=" Land Your Dream Job!!!"
                        description="We’re Hiring Across Roles – Schedule a Quick Intro Call."
                        className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto group"
                    >
                        <div className="aspect-video flex items-center justify-center gap-5">
                            <Key className="w-28 outline outline-3 outline-offset-4 outline-transparent group-hover:outline-sky-600 transition-all duration-500 group-hover:translate-y-1">
                                CNC / VMC Operators
                            </Key>
                            <Key className="w-28 outline outline-3 outline-offset-4 outline-transparent group-hover:outline-lime-500 transition-all duration-500 group-hover:translate-y-1 delay-150">
                                HMC / VTL Operators
                            </Key>
                            <Key className="w-28 outline outline-3 outline-offset-4 outline-transparent group-hover:outline-rose-500 transition-all duration-500 group-hover:translate-y-1 delay-200">
                                MIG / TIG Operators
                            </Key>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Ready for a Career Upgrade?"
                        description="Made simple, organized and quick."
                        className="md:col-span-2 lg:col-span-1 group"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <p className="text-4xl font-extrabold text-white/20 group-hover:text-white/10 transition duration-500 text-center">
                                Your skills{" "}
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative">
                                    <span>deserve more</span>
                                </span>{" "}
                                let&apos;s find the role
                            </p>
                        </div>
                    </FeatureCard>
                </motion.div>
            </div>
        </motion.section>
    );
}
