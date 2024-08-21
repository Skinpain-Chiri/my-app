import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { getPerfumeById } from "@/app/lib/data";
import { Perfume } from "@/app/lib/type";
import Breadcrumbs from "@/app/ui/shop/breadcrumbs";

export default async function Page({ params } : {
    params: { id: string }
}) {
    const id = params.id;
    const { name, prize, picture } = await getPerfumeById(id);
    return (
        <>
        {/* TODO: Add Breadcrumb here */}
        <Breadcrumbs breadcrumbs={
            [{
                label: "Shop",
                href: "/",
            },{
                label: `${name}`,
                href: `/${id}/`,
                active: true
            }]
        } />
        <div className="max-w-5xl mx-auto p-6 flex flex-col lg:flex-row gap-6">
            
            <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
                <Image src={`/${picture}`} width={504} height={655} alt={name} className="xs:max-w" />
            </div>

            <div className="w-full lg:w-2/3">
                <h1 className="text-2xl font-bold text-gray-800">{name}</h1>

                <div className="mt-6 p-4 border rounded-lg bg-gray-50">
                    <p className="text-xl font-bold text-green-600"><span className="text-2xl">${prize}</span></p>
                    <p className="text-sm text-green-600 font-semibold">In Stock</p>
                    
                    <div className="mt-4 flex space-x-4">
                        <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded">Add To Bag</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}