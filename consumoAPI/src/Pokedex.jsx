import { useEffect, useState } from "react";

function Pokedex() {
    const [poke, setPoke] = useState()
    const [pesquisa, setPesquisa] = useState()
    const [entrou, setEntrou] = useState(false)

    async function readPoke(pokeName) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        const data = await response.json()
        setPoke(data)
        setEntrou(!entrou)
    }


    return (
        <>
            <div style={{textAlign: "center"}}>
                <h1>Pokédex</h1>
                <p>Consulte um Pokémon</p>

                <input placeholder="Digite o Pokémon..." onChange={e => setPesquisa(e.target.value)} />
                <button onClick={() => readPoke(pesquisa)}>🔎 Pesquisar</button>
            </div>

            <hr />

            {entrou == false ?
                <p style={{textAlign: "center"}}>Pokédex aguardando pokémon...</p>
                :
                <div style={{ textAlign: "center" }}>
                    <h2>Nome: {poke.name}</h2>
                    <div >
                        <h3><u>Habilidades</u></h3>
                        {poke.abilities.map(i=> <p><strong>- </strong><i>{i.ability.name}</i></p>)}
                    </div>
                    <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
                        {poke.types.map(i => <p ><strong>Tipo: </strong><u>{i.type.name}</u></p>)}
                    </div>
                    <img src={`${poke.sprites.other.showdown.front_default}`} />
                </div>
            }
        </>
    );
}

export default Pokedex;