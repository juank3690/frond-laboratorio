


import Link from "next/link"; // Importar Link de Next.js
import { useState } from "react";
import { Promociones } from "@/components/Promociones";






 export const Header = () => {

    const [showPromociones, setShowPromociones] = useState(false);

  return (
    <div className="flex items-center mt-3 w-full absolute top-0">
      <Link href="/">
        <button className="w-36 ml-6">
          <img
            src="/logoprincipal.jpg"
            alt=""
            className="w-36 h-16 rounded-md"
          />
        </button>
        </Link>
        <div className="flex justify-end w-full mr-10 gap-8">
          <button
            className="p-2 hover:bg-orange-200 rounded-xl"
            onClick={() => setShowPromociones(!showPromociones)}
          >
            promociones
          </button>
          {showPromociones && <Promociones />}
          <Link href="/login">
          <button className="p-2 hover:bg-orange-200 rounded-xl"
          >login</button>
          </Link>
          <Link href='/register'>
          <button className="p-2 hover:bg-orange-200 rounded-xl">sign up</button>
          </Link>
        </div>
      </div>
  )
}


