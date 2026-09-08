import { useState } from "react"

function App() {
    const [usuarios, setUsuarios] = useState([])

    async function readAll(){
        const response = await fetch("https://dummyjson.com/users")
        const data = await response.json()
        setUsuarios(data.users)
        console.log(data.users)
    }

     function readInf(usuario) {
        alert(`Telefone: ${usuario.phone} \n Email: ${usuario.email} \n Mora em: ${usuario.address.city}`)
    }

    return (
        <>
            <h1>Consumo de API</h1>
            <p>Buscando dados da API dummyJSON</p>
            
            <ol>
                {usuarios.length != 0 ?
                    usuarios.map(i => i.gender == "female" ? <li> <img src={`https://api.dicebear.com/10.x/initials/svg?seed=${i.firstName}`} width={40} />Sra {i.lastName} tem {i.age} anos. <button onClick={()=> readInf(i)}>Ver informações</button></li> : <li key={i.id}><img src={`https://api.dicebear.com/10.x/initials/svg?seed=${i.firstName}`} width={40} />Sr {i.lastName} tem {i.age} anos. <button onClick={()=> readInf(i)}>Ver informações</button></li>)
                :
                   <button onClick={readAll}>Carregar dados</button>
                }
                
            </ol>

        </>
    )
}

export default App;