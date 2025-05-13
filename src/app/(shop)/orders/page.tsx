import { Title } from '@/components';
import Link from 'next/link';
import { IoCardOutline } from 'react-icons/io5';

export default function OrderPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Title title="Orders" className="mb-8" />
      
      <div className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-black">
              <tr>
                <th scope="col" className="px-8 py-5 text-left text-xs font-semibold text-white uppercase tracking-wider">
                  #ID
                </th>
                <th scope="col" className="px-8 py-5 text-left text-xs font-semibold text-white uppercase tracking-wider">
                  Nombre completo
                </th>
                <th scope="col" className="px-8 py-5 text-left text-xs font-semibold text-white uppercase tracking-wider">
                  Estado
                </th>
                <th scope="col" className="px-8 py-5 text-left text-xs font-semibold text-white uppercase tracking-wider">
                  Opciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Order 1 - Pagada */}
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-8 py-6 whitespace-nowrap">
                  <div className="text-sm font-bold text-gray-900">1</div>
                </td>
                <td className="px-8 py-6 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">Mark</div>
                </td>
                <td className="px-8 py-6 whitespace-nowrap">
                  <div className="flex items-center">
                    <IoCardOutline className="flex-shrink-0 h-4 w-4 text-green-600" />
                    <span className="ml-2 text-sm font-medium text-green-600">Pagada</span>
                  </div>
                </td>
                <td className="px-8 py-6 whitespace-nowrap text-right text-sm font-medium">
                  <Link 
                    href="/orders/123" 
                    className="text-black hover:text-gray-600 font-bold transition-colors duration-200"
                  >
                    Ver orden →
                  </Link>
                </td>
              </tr>
              
              {/* Order 2 - No Pagada */}
              <tr className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-8 py-6 whitespace-nowrap">
                  <div className="text-sm font-bold text-gray-900">2</div>
                </td>
                <td className="px-8 py-6 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">Mark</div>
                </td>
                <td className="px-8 py-6 whitespace-nowrap">
                  <div className="flex items-center">
                    <IoCardOutline className="flex-shrink-0 h-4 w-4 text-red-600" />
                    <span className="ml-2 text-sm font-medium text-red-600">No Pagada</span>
                  </div>
                </td>
                <td className="px-8 py-6 whitespace-nowrap text-right text-sm font-medium">
                  <Link 
                    href="/orders/123" 
                    className="text-black hover:text-gray-600 font-bold transition-colors duration-200"
                  >
                    Ver orden →
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}