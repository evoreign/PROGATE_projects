import { useState, useEffect } from "react"
import PokeList from "./components/PokeList"

function App() {
  const [pokemonList, setPokemonList] = useState([])
  const [selectedPokemonName, setSelectedPokemonName] = useState("")
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((res) => res.json())
      .then((data) => setPokemonList(data.results))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div style={styles.container}>
      <h2>PokeAPI</h2>
      {/* Memasukkan setSelectedPokemonName function sebagai prop */}
      <PokeList
        pokemonList={pokemonList}
        setSelectedPokemonName={setSelectedPokemonName}
      />
      {/* Menampilkan nama pokemon yang dipilih */}
      <p>{selectedPokemonName}</p>
    </div>
  )
}

const styles = {
  container: {
    width: "50%",
    margin: "0 auto",
    allignItems: "center",
    padding: "80px",
    textAlign: "center",
  },
}

export default App