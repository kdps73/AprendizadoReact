import { useState } from "react"

function Perfil() {
    let [exibe, setExibe] = useState(false)
    let [btnExibe, setBtnExibe] = useState(true)
    let [senha, setSenha] = useState(false)
    let [senhaAntiga, setSenhaAntiga] = useState("")
    let [senhaNova, setSenhaNova] = useState("")

    let usuario = {
        nome: "Kauã",
        email: "kauapiovani0511@gmail.com",
        senha: "123123"
    }

    function salvar(){
        if(senhaAntiga == usuario.senha){
            usuario.senha = senhaNova
            setSenhaAntiga(senhaNova)
            alert("Senha alterada com sucesso!")
            setSenha(!senha)
            setBtnExibe(!btnExibe)
            setExibe(!exibe)
        }else{
            alert("Senha deu errado")
        }
    }

    return (
        <>
            <h1>Perfil de usuário</h1>
            <p> Veja aqui suas informações do perfil</p>

            {btnExibe == true ?
                <button onClick={() => {setExibe(!exibe); setBtnExibe(!btnExibe)}}>Carregar perfil</button>
            :
                <button onClick={() => {setExibe(!exibe); setBtnExibe(!btnExibe)}}>Ocultar perfil</button>
            }

            {exibe == true ?
                    <div>
                        <hr/>
                        <p>Nome: {usuario.nome}</p>
                        <p>Email: {usuario.email}</p>
                        <button onClick={()=> setSenha(!senha)}>Alterar senha</button>
                    </div>
                :
                    <></>
            }

            {senha == true ?
                <form>
                    <br/>
                    <label for="labelSenha">Digite a sua senha atual:</label><br/>
                    <input id="labelSenha" onChange={e=> setSenhaAntiga(e.target.value)}/><br/><br/>
                    <label for="labelSenha">Digite a sua senha nova:</label><br/>
                    <input id="labelSenha" onChange={e=> setSenhaNova(e.target.value)}/>
                    <button onClick={salvar}>Salvar senha</button>
                </form>
            :
                <></>
            }
        </>
    )
}

export default Perfil