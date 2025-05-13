import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { IoCardOutline } from "react-icons/io5";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

interface Props {
  params: {
    id: string;
  };
}

export default function OrderByIdPage({ params }: Props) {
  const { id } = params;

  const subtotal = productsInCart.reduce(
    (sum, product) => sum + product.price,
    0
  );
  const tax = subtotal * 0.16;
  const total = subtotal + tax;

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header with back button */}
        <div className="flex items-center justify-between mb-8">
          <Link 
            href="/orders" 
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            <span>Volver a órdenes</span>
          </Link>
          <Title
            title={`Orden #${id}`}
            className="text-3xl font-bold text-gray-900"
          />
          <div className="w-8"></div> {/* Spacer for alignment */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product list */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order status card */}
            <div className={clsx(
              "flex items-center rounded-lg p-4 shadow-md",
              {
                "bg-red-100 text-red-800": false,
                "bg-green-100 text-green-800": true,
              }
            )}>
              <IoCardOutline size={24} className="mr-3" />
              <div>
                <p className="font-semibold">Estado de la orden</p>
                <p className="text-sm">{true ? "Pagado" : "Pendiente de pago"}</p>
              </div>
            </div>

            {/* Products card */}
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
              <div className="bg-gray-800 text-white px-6 py-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">PRODUCTOS</h2>
                  <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {productsInCart.length} ITEMS
                  </span>
                </div>
              </div>

              <div className="divide-y divide-gray-200">
                {productsInCart.map((product) => (
                  <div
                    key={product.slug}
                    className="p-6 flex flex-col sm:flex-row gap-6 hover:bg-gray-50 transition-colors"
                  >
                    <div className="relative w-full sm:w-32 h-32 flex-shrink-0 border border-gray-200 rounded-md overflow-hidden">
                      <Image
                        src={`/products/${product.images[0]}`}
                        fill
                        alt={product.title}
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">
                            {product.title}
                          </h3>
                          <p className="text-gray-600 mt-1 text-sm">
                            SKU: {product.slug.toUpperCase()}
                          </p>
                        </div>
                        <p className="text-lg font-bold text-gray-900">
                          ${product.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order summary */}
          <div className="space-y-6">
            {/* Delivery address */}
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
              <div className="bg-gray-800 text-white px-6 py-4">
                <h2 className="text-lg font-semibold">DIRECCIÓN DE ENTREGA</h2>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-start">
                  <div className="bg-gray-100 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Yahinniel Vasquez</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gray-100 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-600">Resparto Alma Rosa C.26 6</p>
                    <p className="text-gray-600">Santo Domingo Este</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Order summary */}
            <div className="bg-white shadow-xl rounded-lg overflow-hidden sticky top-8">
              <div className="bg-gray-800 text-white px-6 py-4">
                <h2 className="text-lg font-semibold">RESUMEN DEL PEDIDO</h2>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Impuestos (16%)</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                {subtotal < 100 && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Envío</span>
                    <span className="font-medium">$5.99</span>
                  </div>
                )}
                <div className="border-t border-gray-200 pt-4 flex justify-between">
                  <span className="font-bold text-lg">Total</span>
                  <span className="font-bold text-xl">${total.toFixed(2)}</span>
                </div>

                <button className="mt-6 w-full bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-md font-medium transition-colors duration-300">
                  Descargar factura
                </button>

                <div className="mt-4 text-sm text-gray-500 space-y-2">
                  <p className="flex items-start">
                    <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {subtotal >= 100 ? "Envío gratuito aplicado" : "Envío gratuito para pedidos > $100"}
                  </p>
                  <p className="flex items-start">
                    <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Política de devolución de 30 días
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}