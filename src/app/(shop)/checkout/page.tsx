import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function CheckoutPage() {
  const subtotal = productsInCart.reduce(
    (sum, product) => sum + product.price,
    0
  );
  const tax = subtotal * 0.16;
  const total = subtotal + tax;

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="border-b border-gray-300 pb-6 mb-8">
          <Title
            title="Veririficar orden"
            className="text-3xl font-extrabold text-gray-900 uppercase tracking-tight"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lista de productos */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              {/* Encabezado de la lista */}
              <div className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
                <h2 className="text-lg font-bold">PRODUCTOS</h2>
                <span className="text-sm font-medium">
                  {productsInCart.length} ITEMS
                </span>
              </div>

              {/* Productos */}
              <div className="divide-y divide-gray-200">
                {productsInCart.map((product) => (
                  <div
                    key={product.slug}
                    className="p-6 flex flex-col sm:flex-row gap-6"
                  >
                    {/* Imagen del producto */}
                    <div className="relative w-full sm:w-32 h-32 flex-shrink-0 border border-gray-200 rounded-md overflow-hidden">
                      <Image
                        src={`/products/${product.images[0]}`}
                        fill
                        alt={product.title}
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    {/* Detalles del producto */}
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">
                            {product.title}
                          </h3>
                          <p className="text-gray-600 mt-1">
                            SKU: {product.slug.toUpperCase()}
                          </p>
                        </div>
                        <p className="text-xl font-bold text-gray-900">
                          ${product.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Continuar comprando */}
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                <Link
                  href="/cart"
                  className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-700 font-medium transition-colors"
                >
                  <FaArrowLeft className="text-sm" />
                  <span>Editar Carrito</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Resumen del pedido */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden h-fit sticky top-8 border border-gray-100">
            {/* Encabezado de dirección */}
            <div className="p-6 pb-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Dirección de entrega
              </h2>
              <div className="space-y-1 text-gray-600">
                <p className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  Yahinniel Vasquez
                </p>
                <p className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Resparto Alma Rosa C.26 6
                </p>
                <p className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  Santo Domingo Este
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-gray-200 mx-auto"></div>

            {/* Resumen del pedido */}
            <div className=" text-black px-6 py-4">
              <h2 className="text-lg font-bold flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                RESUMEN DEL PEDIDO
              </h2>
            </div>

            <div className="p-6 flex flex-col">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium text-gray-800">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Impuestos (16%)</span>
                  <span className="font-medium text-gray-800">
                    ${tax.toFixed(2)}
                  </span>
                </div>
                {subtotal < 100 && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Envío</span>
                    <span className="font-medium text-gray-800">$5.99</span>
                  </div>
                )}
                <div className="border-t border-gray-200 pt-4 flex justify-between">
                  <span className="font-bold text-lg text-gray-800">Total</span>
                  <span className="font-bold text-xl text-gray-900">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              <Link
                href="/orders/123"
                className="mt-6 w-full bg-gray-900 hover:bg-gray-800 text-white py-3 px-6 rounded-md font-bold uppercase tracking-wide transition-colors duration-300 text-center flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                Colocar Orden
              </Link>

              <div className="mt-6 text-sm text-gray-500 space-y-1">
                <p className="flex items-start">
                  <svg
                    className="w-4 h-4 mr-2 mt-0.5 text-green-500 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {subtotal >= 100
                    ? "¡Envío gratuito aplicado!"
                    : "Envío gratuito para pedidos superiores a $100"}
                </p>
                <p className="flex items-start">
                  <svg
                    className="w-4 h-4 mr-2 mt-0.5 text-green-500 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Política de devolución de 30 días
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
