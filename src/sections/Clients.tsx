"use client";

import logo1 from "../assets/images/1.jpg";
import logo2 from "../assets/images/2.jpg";
import logo3 from "../assets/images/3.jpg";
import logo4 from "../assets/images/4.jpg";
import logo5 from "../assets/images/5.jpg";
import logo6 from "../assets/images/6.jpg";
import logo7 from "../assets/images/7.jpg";
import logo8 from "../assets/images/8.jpg";
import Image from "next/image";
import { Fragment } from "react";
import { motion } from "framer-motion";

const logos = [
    { image: logo1 },
    { image: logo2 },
    { image: logo3 },
    { image: logo4 },
    { image: logo5 },
    { image: logo6 },
    { image: logo7 },
    { image: logo8 },
];

export default function Clients() {
    return (
        <section className="py-4 overflow-x-clip">
            <div className="container">
                <h3 className="text-center text-white/50 text-xl">
                    Our Clients
                </h3>
                <div className="flex overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <motion.div
                        animate={{ x: "-50%" }}
                        transition={{
                            duration: 25,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                        className="flex flex-none gap-24 pr-24"
                    >
                        {Array.from({ length: 2 }).map((_, i) => (
                            <Fragment key={i}>
                                {logos.map((logo, index) => (
                                    <Image key={`${i}-${index}`} src={logo.image} alt={`Logo ${index + 1}`} />
                                ))}
                            </Fragment>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
