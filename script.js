let numRodada = 0

function criarLinhas(rodada){
  const linha = document.createElement('tr')
  linha.id = tabela.round 

  console.log(rodada)

  linha.innerHTML = `
    <td id=${rodada.team_home_id}><p>${rodada.team_home_name}</p></td>
    <td><p>${rodada.team_home_score}</p></td>
    <td><span>X</span></td>
    <td><p>${rodada.team_away_score}</p></td>
    <td id=${rodada.team_away_id}><p>${rodada.team_away_name}</p></td>
  `
  document.querySelector('#corpoTabela').append(linha)
}

async function getRodadas() {
  const response = await fetch('https://sevn-pleno-esportes.deno.dev/')
  const rodadas = await response.json()

  console.log(rodadas.length)
  
  limpaTabela()
  rodadas[numRodada].games.forEach(criarLinhas)
  document.querySelector('#rodada').innerHTML = `<span>Rodada ${numRodada+1}</span>`
}

function verificaBotao(){
  let btnVoltar = document.getElementById('btn-voltar')
  let btnAvancar = document.getElementById('btn-avancar')

  if(numRodada == 0 ){
    btnVoltar.disabled = true
    btnVoltar.classList.add('desabilitado')
  } else{
    btnVoltar.disabled = false
    btnVoltar.classList.remove('desabilitado')
  }
  if(numRodada == 13){
    btnAvancar.disabled = true
    btnAvancar.classList.add('desabilitado')
  }else{
    btnAvancar.disabled = false
    btnAvancar.classList.remove('desabilitado')
  }
}

function limpaTabela(){
  document.querySelector('#corpoTabela').innerHTML = ''
}

function avancar(){
  numRodada++
  getRodadas()
  verificaBotao()
}

function voltar(){
  numRodada--
  getRodadas()
  verificaBotao()
}

getRodadas()
verificaBotao()