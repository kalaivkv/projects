import type { ReactNode } from "react";
import "./globals.css";

export default function RootLayout({
    children,
}: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en">
            <body className="font-sans bg-black text-white">
                {children}
            </body>
        </html>
    );
}
