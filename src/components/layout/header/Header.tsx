import { useContext, type ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import Logo from "../../../assets/icons/pencil.svg";
import Nav from "../../ui/nav/Nav";

function Navbar() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    ToastAlerta("O Usuário foi desconectado com sucesso!", "info");
    navigate("/");
  }

  let component: ReactNode;

  if (usuario.token !== "") {
    component = (
      <div className="w-full flex flex-row justify-between items-center p-4">
          <Link to="/home" className="w-fit flex flex-row bg-blue px-3 py-2 gap-2 text-[1rem] md:text-2xl font-semibold md:font-normal border border-black rounded-full">
            <img src={Logo} alt="Logo Blog Pessoal" width="32"/>
            <p>Blog Pessoal</p>
          </Link>
          <Nav onClick={logout}/>
      </div>
    );
  }

  return <>{component}</>;
}

export default Navbar;
