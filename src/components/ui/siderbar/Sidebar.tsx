"use client";

import { useUIStore } from "@/store/ui/ui-store";
import clsx from "clsx";
import Link from "next/link";
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";

export const Sidebar = () => {

  const isSideMenuOpen = useUIStore(state => state.isSideMenuOpen);
  const closeMenu = useUIStore(state => state.closeSideMenu);

  return (
    <div>
      {/* Overlay con efecto de vidrio esmerilado */}

      {
        isSideMenuOpen && (
          <div  className="fixed inset-0 z-10 bg-black/30 backdrop-blur-sm" />
        )
      }
      
      {/* Sidebar con animación de deslizamiento */}
      <nav
        className={
          clsx("fixed right-0 top-0 h-screen w-[320px] z-20 bg-white/95 shadow-2xl backdrop-blur-sm transform transition-all duration-300 ease-in-out slide-in",
            {
              "translate-x-full": !isSideMenuOpen,
            }
          )
        }
      >
        {/* Sección superior con botón de cerrar */}
        <div className="flex justify-end p-4 border-b border-gray-100">
          <button
            onClick={() => closeMenu()}
            className="p-2 hover:bg-gray-50 rounded-full transition-colors duration-200"
          >
            <IoCloseOutline className="h-8 w-8 text-gray-600 hover:text-gray-900" />
          </button>
        </div>

        {/* Contenido del sidebar */}
        <div className="p-6">
          {/* Barra de búsqueda mejorada */}
          <div className="group relative mb-8">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-[length:200%_auto] transition-all duration-500 group-hover:bg-right" />
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <IoSearchOutline className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Buscar..."
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-50 focus:bg-white focus:outline-none border-2 border-transparent"
              />
            </div>
          </div>

          {/* Menú de usuario */}
          <div className="space-y-2">
            <h3 className="px-2 text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">
              Cuenta
            </h3>
            <LinkItem
              href="#"
              icon={<IoPersonOutline className="text-blue-500" />}
              text="Perfil"
            />
            <LinkItem
              href="#"
              icon={<IoTicketOutline className="text-emerald-500" />}
              text="Ordenes"
            />
            <LinkItem
              href="#"
              icon={<IoLogInOutline className="text-purple-500" />}
              text="Ingresar"
            />
            <LinkItem
              href="#"
              icon={<IoLogOutOutline className="text-red-500" />}
              text="Salir"
              danger
            />
          </div>

          {/* Separador */}
          <div className="my-6 border-t border-gray-100" />

          {/* Menú administrativo */}
          <div className="space-y-2">
            <h3 className="px-2 text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">
              Administración
            </h3>
            <LinkItem
              href="#"
              icon={<IoShirtOutline className="text-amber-500" />}
              text="Productos"
            />
            <LinkItem
              href="#"
              icon={<IoTicketOutline className="text-cyan-500" />}
              text="Ordenes"
            />
            <LinkItem
              href="#"
              icon={<IoPeopleOutline className="text-fuchsia-500" />}
              text="Usuarios"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

// Componente reutilizable para los enlaces
const LinkItem = ({ href, icon, text, danger = false }: any) => (
  <Link
    href={href}
    className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${
      danger
        ? "text-red-600 hover:bg-red-50"
        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
    }`}
  >
    <span className="text-2xl">{icon}</span>
    <span className={`ml-3 text-lg font-medium ${danger && "text-red-600"}`}>
      {text}
    </span>
  </Link>
);

// Animación personalizada en CSS
<style jsx global>{`
  @keyframes slide-in {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
  .slide-in {
    animation: slide-in 0.3s ease-out;
  }
`}</style>