import React from "react";
import NavLinks from "@/app/ui/nav/nav-links";
import { montserrat } from "./ui/fonts";
import "@/app/globals.css";

export default function RootLayout({ children } : { children: React.ReactNode }) {
    return (
        <html lang="en">
          <body className={`${montserrat.className} anatialised`}>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
              <NavLinks />
            </nav>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12 sm:mt-8">{children}</div>
          </body>
        </html>
    );
} 