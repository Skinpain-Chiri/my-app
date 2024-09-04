import { PencilIcon, TrashIcon } from '@heroicons/react/20/solid';
import { getPerfumes } from '@/app/lib/data';

export default async function PerfumesTable({ searchTerm }: {searchTerm: string}) {
    const perfumes = await getPerfumes(searchTerm);
    return (
        <div className="container mx-auto">
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
                        {
                            perfumes.map(perfume => (
                                <tr key={perfume.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {perfume.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {`$${perfume.prize}`}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex space-x-4">
                                <button className="text-blue-600 hover:text-blue-900">
                                    <PencilIcon className="h-5 w-5" />
                                </button>
                                <button className="text-red-600 hover:text-red-900">
                                    <TrashIcon className="h-5 w-5" />
                                </button>
                                </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}