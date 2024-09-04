import PerfumesTable from "@/app/ui/admin/PerfumesTable";
import Search from '@/app/ui/shop/Search';
import { PerfumesTableSekeleton } from "../ui/shop/Skeletons";
import { Suspense } from 'react';
import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Page({ searchParams } : {searchParams?: {
    search: string
}}) {
    const placeholder = searchParams?.search || '';
    return (
        <main>
            <h1 className="mb-4 text-3xl leading-none tracking-tight text-gray-900 md:text-3xl lg:text-5xl">
            Admin
            </h1>
            <Link href="/admin/create">
                <span className="inline-flex items-center bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4">
                    <PlusIcon className="h-5 w-5 mr-2" />
                    Add a Perfume
                </span>
            </Link>
            <Suspense>
                <Search placeholder={placeholder} />
            </Suspense>
            <Suspense fallback={<PerfumesTableSekeleton />}>
                <PerfumesTable searchTerm={placeholder} />
            </Suspense>
        </main>
    );
}