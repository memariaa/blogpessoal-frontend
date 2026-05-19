import { useEffect, useState, type ChangeEvent, type SyntheticEvent } from "react"
import { Link, useNavigate } from "react-router-dom"
import type Usuario from "../../models/Usuario"
import { cadastrarUsuario } from "../../services/Service"
import HighlightedTitle from "../../components/ui/highlightedtitle/HighlightedTitle"
import { InputField } from "../../components/ui/inputfield/InputField"
import Button from "../../components/ui/button/Button"
import Card from "../../components/card/Card"

function Cadastro() {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const[confirmarSenha, setConfirmarSenha] = useState<string>("")
    const [usuario, setUsuario] = useState<Usuario>({
        id: 0,
        nome: '',
        usuario: '',
        foto: '',
        senha: ''
    })

    useEffect(() => {
    if (usuario.id !== 0){
        retornar()
    }
    }, [usuario])

    function retornar(){
        navigate('/login')
    }

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>){
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>){
        setConfirmarSenha(e.target.value)
    }

    async function cadastrarNovoUsuario(e: SyntheticEvent<HTMLFormElement>){
        e.preventDefault()

        if(confirmarSenha === usuario.senha && usuario.senha.length >= 8){
            setIsLoading(true)
            try{
                await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario)
                alert('Usuário cadastrado com sucesso!')
            }catch(error){
                alert('Erro ao cadastrar o usuário!')
            }
        }else{
            alert('Dados do usuário inconsistentes! Verifique as informações do cadastro.')
            setUsuario({...usuario, senha: ''})
            setConfirmarSenha('')
        }
        setIsLoading(false)
    }

    return (
        <div className='flex flex-col md:flex-row h-screen items-center justify-between p-4 md:p-24 mt-10 md:my-0'>        
            <form className='flex justify-center flex-col w-full md:w-1/3 gap-4 order-last pt-10 md:pt-0' onSubmit={cadastrarNovoUsuario}>
                <HighlightedTitle title="Cadastrar" />

                <InputField
                    label="Nome"
                    name="nome"
                    id="nome"
                    placeholder="Nome"
                    value={usuario.nome}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                />

                <InputField
                    label="Usuário"
                    name="usuario"
                    id="usuario"
                    placeholder="Usuário"
                    value={usuario.usuario}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                />

                <InputField
                    label="Foto"
                    name="foto"
                    id="foto"
                    placeholder="Foto"
                    value={usuario.foto}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                />

                <InputField
                    label="Senha"
                    name="senha"
                    id="senha"
                    type="password"
                    placeholder="Senha"
                    value={usuario.senha}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                />

                <InputField
                    label="Confirmar Senha"
                    name="confirmarSenha"
                    id="confirmarSenha"
                    type="password"
                    placeholder="Confirmar Senha"
                    value={confirmarSenha}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
                />

                <div className='flex justify-around w-full gap-8'>
                    <Button buttonType="link" variant="red" link="/cadastro">
                        Cancelar
                    </Button>
                    <Button buttonType="form" variant="blue">
                        {isLoading ? 'Cadastrando...' : 'Cadastrar'}
                    </Button>
                </div>

                <hr className='border-slate-800 w-full'/>

            <p className="text-center md:text-left text-sm md:text-[1rem]">
                Já possui uma conta?{' '}
                <Link to='/' className='font-semibold hover:underline'>
                    Faça login aqui.
                </Link>
            </p>
            </form>
            <Card tapeColor="blue" />
        </div>
    )
}

export default Cadastro