import Link from 'next/link';
import { IoCartOutline } from 'react-icons/io5';

export default function EmptyCart() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[70vh] px-4">
      <div className="flex flex-col items-center max-w-md text-center">
        <IoCartOutline size={100} className="text-gray-400 mb-6" />
        
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Tu carrito está vacío
        </h1>
        
        <p className="text-gray-500 mb-8">
          Parece que no has agregado ningún producto aún. Explora nuestros artículos y encuentra algo especial.
        </p>
        
        <Link
          href="/"
          className="px-8 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200"
        >
          Volver a la tienda
        </Link>
      </div>
    </div>
  );
}