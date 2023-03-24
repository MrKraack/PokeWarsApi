const submitPokemon = document.getElementById("submitPokemon")

submitPokemon.addEventListener("click", async (e) => {
    e.preventDefault()

    let pokemon = document.getElementById("pokemon").value
    let resultPokemon = document.getElementById("resultPokemon")

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((res) => res.json())
        .then((data) => {
            resultPokemon.innerHTML = `Name: ${data.name} <br> Id: ${data.id} <br> Height: ${data.height} <br> Weight: ${data.weight}`
        })
    return response



})

const submitStarWars = document.getElementById("submitStarWars")

submitStarWars.addEventListener("click", async (e) => {
    e.preventDefault()

    let starWars = document.getElementById("starWars").value
    let resultStarWars = document.getElementById("resultStarWars")

    const response = await fetch(`https://swapi.dev/api/people/?search=${starWars}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            resultStarWars.innerHTML = `Name: ${data?.results[0].name} <br> Mass: ${data?.results[0].mass} <br> Height: ${data?.results[0].height} <br> Skin color: ${data?.results[0].skin_color}`
        })
    return response



})