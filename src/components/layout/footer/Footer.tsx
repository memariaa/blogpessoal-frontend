import Linkedin from '../../../assets/icons/linkedin.svg';
import Github from '../../../assets/icons/github.svg';
import Portfolio from '../../../assets/icons/web.svg';
import { useContext, type ReactNode } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

function Footer() {
  let data = new Date().getFullYear();

  const { usuario } = useContext(AuthContext);

  let component: ReactNode;

  if (usuario.token !== "") {
    component = (
      <footer className="p-7 md:p-14 flex flex-col md:flex-row justify-between items-left md:items-center gap-4 md:gap-1 bg-blue font-semibold border-t border-l border-r border-black rounded-t-[50px] text-black">
          <div className="flex flex-col md:flex-row gap-1 flex-nowrap"> 
            <p className="text-sm">
              &copy; {data} Maria Eduarda • 
            </p>
            <p className="text-sm">
              Desenvolvido durante formação prática em desenvolvimento fullstack
            </p>
          </div>
          <div className="flex gap-2">
            <a href="https://www.linkedin.com/in/memariaa/" target="_blank">
              <img src={Linkedin} alt="LinkedIn" width="24" />
            </a>
            <a href="https://github.com/memariaa" target="_blank">
              <img src={Github} alt="GitHub" width="24" />
            </a>
            <a href="https://portfolio-lake-eight-v80u6mxvhb.vercel.app/" target="_blank">
              <img src={Portfolio} alt="Portfolio" width="28" />
            </a>
          </div>
      </footer>
    );
  }

  return <>{component}</>;
}

export default Footer;
