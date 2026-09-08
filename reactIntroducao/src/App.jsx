import { useState } from "react"
function App() {
  let [cliques, setCliques] = useState(0)
  let [nome, setNome] = useState("Aguardando...")
 
  return (
    <>
      <h1>Olá mundo!</h1>
      <p>Estou aprendendo React XD</p>
      <p>Meu nome é {nome}</p>
      <button onClick={() => setNome("Kauã")}>Carregar nome</button>
      <hr/>

      <p>Você clicou {cliques} vezes</p>
      <button onClick={() => setCliques(cliques + 1)}>Clique aqui</button>
    </>
  )
}

export default App
