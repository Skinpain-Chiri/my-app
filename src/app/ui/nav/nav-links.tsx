'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";

const navLinks = [
    {name: "Shop", href: "/"},
    {name: "About", href: "/about"},
    {name: "Contact", href: "/contact"}
];

export default function NavLinks() {
    const pathName = usePathname();

    return (
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <a href='/' className='flex items-center space-x-3 rtl:space-x-reverse'>
        <Image src='/favicon.png' alt='Logo' width={40} height={40} className="border-radius-50" />
          <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>Perfumes</span>
        </a>
        <div className='w-full md:block md:w-auto'>
          <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            {
                navLinks.map((link) => (
                    <li key={link.name} className='mb-3 md:mb-0'>
                        <Link href={link.href} className=
                        {
                            clsx('', {
                            'block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500': pathName === link.href,
                            'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent': pathName !== link.href
                        })
                        }>
                        {link.name}
                        </Link>
                    </li>
                ))
            }
          </ul>
        </div>
      </div>
    );
}