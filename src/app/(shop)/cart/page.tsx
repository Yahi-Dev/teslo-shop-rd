import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaTrashAlt, FaArrowLeft } from "react-icons/fa";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function CartPage() {
  const subtotal = productsInCart.reduce(
    (sum, product) => sum + product.price,
    0
  );
  const tax = subtotal * 0.16;
  const total = subtotal + tax;

  // redirect('/empty');

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="border-b border-gray-300 pb-6 mb-8">
          <Title
            title="TU CARRITO"
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

                      {/* Selector de cantidad y botón eliminar */}
                      <div className="mt-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <QuantitySelector
                          quantity={1}
                        />
                        <button className="flex items-center gap-2 text-red-600 hover:text-red-800 font-medium transition-colors">
                          <FaTrashAlt className="text-sm" />
                          <span>ELIMINAR</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Continuar comprando */}
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-700 font-medium transition-colors"
                >
                  <FaArrowLeft className="text-sm" />
                  <span>CONTINUAR COMPRANDO</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Resumen del pedido */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden h-fit sticky top-8">
            <div className="bg-gray-900 text-white px-6 py-4">
              <h2 className="text-lg font-bold">RESUMEN DEL PEDIDO</h2>
            </div>

            <div className="p-6 flex flex-col">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Impuestos (16%)</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-4 flex justify-between">
                  <span className="font-bold text-lg">Total</span>
                  <span className="font-bold text-xl">${total.toFixed(2)}</span>
                </div>
              </div>

              <Link
                href="/checkout/address"
                className="mt-6 w-full bg-gray-900 hover:bg-gray-800 text-white py-3 px-6 rounded-md font-bold uppercase tracking-wide transition-colors duration-300 text-center"
              >
                PROCEDER AL PAGO
              </Link>

              <div className="mt-6 text-sm text-gray-500">
                <p>* Envío gratuito para pedidos superiores a $100</p>
                <p>* Política de devolución de 30 días</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
