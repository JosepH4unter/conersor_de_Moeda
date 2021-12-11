var valmoeda = window.document.getElementById('vMoeda')
var res = window.document.getElementById('res')

function converter() {
    let moeda = window.document.getElementsByName('moedaC')
    let vm = Number(valmoeda.value)
    let dolar = vm * 5.61
    let euro = vm * 6.35
    let vmoeda = ''
    let r = res

    if(moeda[0].checked) {
        vmoeda = 'usa'
        r.innerHTML = `O valor convertido em reais é R$${dolar}`
    }else{
        vmoeda = 'euro'
        r.innerHTML = `O valor convertido em reais é R$${euro}`
    }
}