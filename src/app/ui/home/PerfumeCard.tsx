import Image from "next/image";
import { getPerfumes } from "@/app/lib/data";

export default async function PerfumeCards({ search }:{ search: string }) {
    const perfumes = await getPerfumes(search);

    return perfumes.map((perfume) => (
        <div key={perfume.name} className='bg-white shadow-md rounded-lg overflow-hidden'>
            <Image 
            width={504} 
            height={655}
            alt={perfume.name}
            src={`/${perfume.picture}`} />
            <div className='p-4'>
                <h2 className='text-xl font-semibold mb-2'>{perfume.name}</h2>
                <p className='text-gray-700'>${perfume.prize}</p>
            </div>
        </div>
    ));
}
