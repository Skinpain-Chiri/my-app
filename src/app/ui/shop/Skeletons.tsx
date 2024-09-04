export const SkeletonCard = () => {
    return (
        <>
            <div className='bg-white shadow-md rounded-lg overflow-hidden'>
            <div className='w-full h-48 skeleton'></div>
            <div className='p-4'>
                <div className='h-6 skeleton mb-2'></div>
                <div className='h-4 skeleton'></div>
            </div>
            </div>

            <div className='bg-white shadow-md rounded-lg overflow-hidden'>
            <div className='w-full h-48 skeleton'></div>
            <div className='p-4'>
                <div className='h-6 skeleton mb-2'></div>
                <div className='h-4 skeleton'></div>
            </div>
            </div>

            <div className='bg-white shadow-md rounded-lg overflow-hidden'>
            <div className='w-full h-48 skeleton'></div>
            <div className='p-4'>
                <div className='h-6 skeleton mb-2'></div>
                <div className='h-4 skeleton'></div>
            </div>
            </div>
        </>
    );
};


export const PerfumesTableSekeleton = () => {
    return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow-md sm:rounded-lg">
              <table className="min-w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[...Array(5)].map((_, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap flex space-x-4">
                        <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
                        <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};