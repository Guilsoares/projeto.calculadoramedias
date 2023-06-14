const form = document.querySelector('#formAtividade');
const imgAprovado = '<img src="images/aprovado.png" alt="EmojiFeliz" />'
const imgReprovado = '<img src="images/reprovado.png" alt="Emojitriste">'
const atividade = []
const notas = []
const mediaAprovada = '<span class="resultado aprovado">Aprovado</span>'
const mediaReprovada = '<span class="resultado reprovado">Reprovado</span>'
const notaMin = parseFloat(prompt('Digite a Nota Mín'))



let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionarLinha()
    atualizaTabela()
    atualizaMediafinal()
});

function adicionarLinha(){
    const inputnomeAtividade = document.querySelector('#nomeAtividade')
    const inputnotaAtividade = document.querySelector('#notaAtividade')

    if(atividade.includes(inputnomeAtividade.value)){
        alert('Atividade já foi inserida!')
    }else{
        atividade.push(inputnomeAtividade.value)
        notas.push(Number(inputnotaAtividade.value))
    
        let linha = '<tr>'
        linha +=  `<td>${inputnomeAtividade.value}</td>`
        linha += `<td>${inputnotaAtividade.value}</td>`
        linha += `<td>${inputnotaAtividade.value >= notaMin ? imgAprovado : imgReprovado }</td>`
        linha += '</tr>'
    
        linhas += linha
    }

    inputnomeAtividade.value = ''
    inputnotaAtividade.value = ''
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas

}

function atualizaMediafinal(){
    const mediaFinal = calculamediaFinal()

    document.querySelector('#media-final-valor').innerHTML = mediaFinal.toFixed(2)
    document.querySelector('#media-final-resultado').innerHTML = mediaFinal >= notaMin ? mediaAprovada : mediaReprovada




    console.log(media)
}

function calculamediaFinal(){
    let somadasnotas = 0

    for(let i =0; i< notas.length; i++){
        somadasnotas += notas[i]
    }

    return somadasnotas / notas.length
}