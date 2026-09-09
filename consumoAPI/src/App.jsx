import { useEffect, useState } from "react"

function App() {
    const [usuarios, setUsuarios] = useState([])
    const [pesquisa, setPesquisa] =useState()

    async function readAll(){
        const response = await fetch("https://dummyjson.com/users")
        const data = await response.json()
        setUsuarios(data.users)
        console.log(data.users)
    }

    async function readName(nome){
        const response = await fetch(`https://dummyjson.com/users/search?q=${nome}`)
        const data = await response.json()
        setUsuarios(data.users)
    }

     function readInf(usuario) {
        alert(`Telefone: ${usuario.phone} \n Email: ${usuario.email} \n Mora em: ${usuario.address.city}`)
    }

    useEffect(()=> {
        readAll()
    }, [])

    return (
        <>
            <h1>Consumo de API</h1>
            <p>Buscando dados da API dummyJSON</p>
            
            <hr/>
            <input placeholder="Digite um nome..." onChange={e=> setPesquisa(e.target.value)}/>
            <button onClick={()=> readName(pesquisa)}>🔎Pesquisar</button>
            <ul>
                {usuarios.length != 0 ?
                    usuarios.map(
                        i => <li  key={i.id}> <img src={`https://api.dicebear.com/10.x/pixel-art/svg?seed=${i.firstName}`} width={40} />{i.gender == "female" ? "Senhora" : "Senhor"} {i.firstName +" "+ i.lastName} tem {i.age} anos. <button onClick={()=> readInf(i)}>Ver informações</button></li>)
                :
                   <p>Lista vazia...</p>
                }
                
            </ul>

        </>
    )
}

export default App;