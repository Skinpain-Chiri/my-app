export const SkeletonCard = () => {
    return (
        <div className='bg-white shadow-md rounded-lg overflow-hidden'>
        <div className='w-full h-48 skeleton'></div>
        <div className='p-4'>
            <div className='h-6 skeleton mb-2'></div>
            <div className='h-4 skeleton'></div>
        </div>
        </div>
    );
};