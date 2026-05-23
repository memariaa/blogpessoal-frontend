import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Button from "../button/Button";
import Hamburguer from "../../../assets/icons/hamburguer.svg";
import Close from "../../../assets/icons/close.svg";

interface NavProps {
  onClick?: () => void;
}

function Nav({ onClick }: NavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav>
        <div className="hidden md:flex justify-center gap-6">
            <div className="w-fit flex justify-center py-2 px-2 gap-3 bg-darkbeige border border-black rounded-full text-2xl">
                <NavLink to="/postagens" className={({ isActive }) => isActive ? "bg-blue rounded-full py-1 px-2" : "hover:bg-blue/50 hover:rounded-full rounded-full py-1 px-2 transition-colors"}>
                    Postagem
                </NavLink>
                <NavLink to="/temas" className={({ isActive }) => isActive ? "bg-blue rounded-full py-1 px-2" : "hover:bg-blue/50 hover:rounded-full rounded-full py-1 px-2 transition-colors"}>
                    Temas
                </NavLink>
                <NavLink to="/perfil" className={({ isActive }) => isActive ? "bg-blue rounded-full py-1 px-2" : "hover:bg-blue/50 hover:rounded-full rounded-full py-1 px-2 transition-colors"}>
                    Perfil
                </NavLink>
            </div>

            <Button onClick={onClick} variant="red" buttonType="link" link="/" fitWidth>
                Sair
            </Button>
        </div>

        {/* Menu hamburguer mobile */}
        <div className="flex md:hidden items-center">
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={isOpen}
                className="relative z-50 flex flex-col justify-center items-center w-fit py-2 px-3 bg-darkbeige border border-black rounded-full focus:outline-none"
            >
                {isOpen ? <img src={Close} alt="Fechar menu" /> : <img src={Hamburguer} alt="Abrir menu"/>}
            </button>

            <div
                onClick={() => setIsOpen(false)}
                className={`fixed inset-0 z-30 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
            />

            <div
                className={`fixed top-0 right-0 z-40 h-full w-64 bg-beige border-l border-t border-b border-black flex flex-col pt-20 pb-8 px-6 gap-6 shadow-xl transition-transform duration-300 ease-in-out rounded-l-[50px] ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex flex-col gap-4 text-2xl">
                    <Link
                        to="/postagens"
                        className="py-2 border-b border-black/20 hover:translate-x-1 transition-transform duration-150"
                    >
                        Postagem
                    </Link>
                    <Link
                        to="/temas"
                        className="py-2 border-b border-black/20 hover:translate-x-1 transition-transform duration-150"
                    >
                        Temas
                    </Link>
                    <Link
                        to="/perfil"
                        className="py-2 border-b border-black/20 hover:translate-x-1 transition-transform duration-150"
                    >
                        Perfil
                    </Link>
                </div>

                <div className="mt-auto">
                    <Button onClick={onClick} variant="red" buttonType="link" link="/">
                    Sair
                    </Button>
                </div>
            </div>
        </div>
    </nav>
  );
}

export default Nav;