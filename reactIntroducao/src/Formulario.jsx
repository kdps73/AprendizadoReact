import { useState } from "react"

function Formulario() {
    let [nome, setNome] = useState("")
    let [idade, setIdade] = useState(0)
    let [cidade, setCidade] = useState("")
    let [estado, setEstado] = useState("")

    function salvar() {
        if (nome.trim().length < 3) {
            alert(`Nome inválido`)
            return
        } else if (idade < 3 || idade > 60 || idade.trim().length == 0) {
            alert(`Idade inválida`)
            return
        } else if (cidade.trim().length < 4){
            alert(`Cidade inválida`)
            return
        }else if (estado.trim().length > 2 || estado.trim().length == 0){
            alert(`Estado inválido! Digite apenas a sigla.`)
            return
        }
            alert(`Seja bem bem-vindo(a), ${nome} de ${idade} anos. Você mora em ${cidade} estado de ${estado}`)
    }


    return (
        <>
            <hr />
            <h1>Página de Formulário</h1>
            <p>Aprendendo a usar o input no React</p>

            <p>Digite seu nome:</p>
            <input onChange={e => setNome(e.target.value)} placeholder="Nome" />
            <br />
            <br />

            <p>Digite sua idade:</p>
            <input onChange={e => setIdade(e.target.value)} placeholder="Idade"/>
            <br />
            <br />

            <p>Digite onde mora:</p>
            <input onChange={e => setCidade(e.target.value)} placeholder="Cidade"/>
            <input onChange={e => setEstado(e.target.value)} placeholder="Estado"/>
            <br />
            <br />
            <button onClick={salvar}>Salvar</button>
        </>
    )
}

export default Formulario