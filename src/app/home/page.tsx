import PerfumeCards from "../ui/home/PerfumeCard";

export default async function Page() {
    return (
        <>
        <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl'>
        Get the best fragnances
        </h1>
        <p className='mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 '>
            Never give out the same impression again 
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <PerfumeCards />
        </div>
        </>
    );
}