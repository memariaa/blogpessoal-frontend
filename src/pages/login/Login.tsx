import { useContext, useEffect, useState, type ChangeEvent, type SyntheticEvent } from "react";
import { Link, useNavigate } from "react-router-dom"
import type UsuarioLogin from "../../models/UsuarioLogin";
import { AuthContext } from "../../contexts/AuthContext";
import Button from "../../components/ui/button/Button";
import HighlightedTitle from "../../components/ui/highlightedtitle/HighlightedTitle";
import { InputField } from "../../components/ui/inputfield/InputField";
import Card from "../../components/card/Card";

function Login() {
    const navigate = useNavigate();

    const { usuario, handleLogin, isLoading } = useContext(AuthContext)

    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin)

    useEffect(() => {
        if (usuario.token !== "") {
            navigate('/home')
        }
    }, [usuario])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value
        })
    }

    function login(e: SyntheticEvent<HTMLFormElement>) {
        e.preventDefault()
        handleLogin(usuarioLogin)
    }

  return (
    <div className='flex flex-col md:flex-row h-screen items-center justify-between p-4 md:p-24 mt-10 md:mt-0'>
        <form className='flex justify-center flex-col w-full md:w-1/3 gap-4 order-last md:order-first' onSubmit={login}>
            <HighlightedTitle title="Fazer Login" />

            <InputField
                label="Usuário"
                name="usuario"
                id="usuario"
                placeholder="Digite o seu usuário"
                value={usuarioLogin.usuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />

            <InputField
                label="Senha"
                name="senha"
                id="senha"
                type="password"
                placeholder="Digite a sua senha"
                value={usuarioLogin.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />

            <Button buttonType='form' variant='blue'>
                {isLoading ? "Entrando..." : "Entrar"}
            </Button>

            <hr className='border-slate-800 w-full'/>

            <p className="text-center md:text-left text-sm md:text-[1rem]">
                Ainda não possuí uma conta?{' '}
                <Link to='/cadastro' className='font-semibold hover:underline'>
                    Cadasdastre-se aqui.
                </Link>
            </p>
        </form>

        <Card tapeColor="blue" />
    </div>
  )
}

export default Login