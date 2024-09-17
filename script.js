async function criarTabelas(rodada){
  const tabela = document.createElement('tr')
  tabela.id = tabela.round

  tabela.innerHTML = `
    <td id=${rodada.team_home_id}>${rodada.team_home_name}</td>
    <td>${rodada.team_home_score}</td>
    <td>X</td>
    <td>${rodada.team_away_score}</td>
    <td id=${rodada.team_away_id}>${rodada.team_away_name}</td>
  `
  document.querySelector('#tabela').append(tabela)
}

async function getRodadas() {
  const response = await fetch('https://sevn-pleno-esportes.deno.dev/')
  const rodadas = await response.json()

 
  rodadas[0].games.forEach(criarTabelas)
}

getRodadas()