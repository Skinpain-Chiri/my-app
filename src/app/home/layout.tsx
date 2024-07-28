import React from "react";
import NavLinks from "@/app/ui/nav/nav-links";

export default function Layout({ children } : { children: React.ReactNode }) {
    return (
        <>
          <nav className='bg-white border-gray-200 dark:bg-gray-900'>
            <NavLinks />
          </nav>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12 sm:mt-8">{children}</div>
        </>
    );
} 