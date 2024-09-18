import buscaTime from './services/services.js'
let numRodada = 0

const btnVoltar = document.getElementById('btn-voltar')
const btnAvancar = document.getElementById('btn-avancar')

btnVoltar.addEventListener('click', voltar)
btnAvancar.addEventListener('click', avancar)

let imgPlacar = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 1L1 13" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1 1L13 13" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`

function criarLinhas(rodada){
  const linha = document.createElement('tr')  

  linha.innerHTML = `
    <td id=${rodada.team_home_id}>
      ${buscaTime(rodada.team_home_name)}
      <p class='nomeTime'>${rodada.team_home_name}</p>
    </td>
    <td>
      <p class='placar'>${rodada.team_home_score}</p>
    </td>
    <td>
      <span>${imgPlacar}</span>
    </td>
    <td>
      <p class='placar'>${rodada.team_away_score}</p>
    </td>
    <td id=${rodada.team_away_id}>
      <p class='nomeTime'>${rodada.team_away_name}</p>
      ${buscaTime(rodada.team_away_name)}
    </td>
  `
  document.querySelector('#corpoTabela').append(linha)
}

async function getRodadas() {
  const response = await fetch('https://sevn-pleno-esportes.deno.dev/')
  const rodadas = await response.json()

  
  limpaTabela()
  rodadas[numRodada].games.forEach(criarLinhas)
  document.querySelector('#rodada').innerHTML = `<span>Rodada ${numRodada+1}</span>`
}

function verificaBotao(){

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