import { titleFont } from "@/config/fonts";
import Image from "next/image";
import Link from "next/link";

export const PageNotFound = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle">
      <div className="text-center px-5 mx-5">
        <h1 className={`${titleFont.className} antialiased text-5xl`}>
          404 - Página no encontrada
        </h1>
        <p className="font-semibold text-xl">Whooops! Lo sentimos mucho.</p>
        <p className="font-light">
          <span>Puedes regresar al </span>
          <Link href="/" className="font-normal hover:underline transition-all">
            Inicio
          </Link>
        </p>
      </div>

      <div className="px-5 mx-5">
        <Image
          src="/imgs/starman_750x750.png"
          alt="Starman"
          className="p-5 sm:p-0"
          width={550}
          height={550}
        />
      </div>
    </div>
  );
};
