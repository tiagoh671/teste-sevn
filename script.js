

async function getRodadas() {
  const response = await fetch('https://sevn-pleno-esportes.deno.dev/')
  const rodadas = await response.json()

  console.log(rodadas)
}

getRodadas()