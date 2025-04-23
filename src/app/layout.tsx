import React from "react";
import "./globals.css";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="font-sans bg-black text-white">
                {children}
            </body>
        </html>
    );
}
