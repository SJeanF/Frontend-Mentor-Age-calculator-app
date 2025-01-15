$(document).ready(function() {
    
    $('#form').on('submit', function(e) {
        e.preventDefault();
        verificaInputPreenchido();

})})


function verificaInputPreenchido() {
    restauraMensagemDeErro();

    const inputDia = parseInt($('#dia').val())
    const inputMes = parseInt($('#mes').val()) - 1
    const inputAno = parseInt($('#ano').val())
    
    if (inputDia && (inputMes + 1) && inputAno) {
        const dataInput = new Date(inputAno, inputMes, inputDia)
        
        if (dataInput.getDate() !== inputDia) {
            mensagemDeErro('Must be a valid day', $('#dia'))
        }
        if ((dataInput.getMonth() + 1) > 12) {
            mensagemDeErro('Must be a valid month', $('#mes'))
        }
        if (dataInput.getFullYear() !== inputAno || dataInput.getFullYear() < 1997) {
            mensagemDeErro('Must be a valid yaer', $('#mes'))
        } else {
            verificaDataFutura(dataInput)
        }
    } else {
        
        if (!inputDia) {
            mensagemDeErro('This field is required', $('#dia'))
        }
        if (!inputMes) {
            mensagemDeErro('This field is required', $('#mes'))
        }
        if (!inputAno) {
            mensagemDeErro('This field is required', $('#ano'))
        }
    }
}

function verificaDataFutura(dataInput) {
    const dataHoje = new Date()

    if (dataInput > dataHoje) {
        // Mensagem: Data no futuro
        if (dataInput.getFullYear() > dataHoje.getFullYear()) {
            mensagemDeErro('Must be in the past', $('#ano'))
            // Ano no futuro
        } else if (dataInput.getMonth() > dataHoje.getMonth()) {
            mensagemDeErro('Must be in the past', $('#mes'))
            // Mês no futuro
        } else if (dataInput.getDate() > dataHoje.getDate()) {
            mensagemDeErro('Must be in the past', $('#dia'))
        }
    } else {
        calculaContagemDeIdade(dataInput, dataHoje)
    } 
}

function mensagemDeErro(mensagem, areaAfetada) {
    areaAfetada.parent().find('p').html(mensagem)
    areaAfetada.parent().find('p').css('display', 'block')
    areaAfetada.parent().find('input').addClass('fodeu')
    areaAfetada.parent().find('label').addClass('fodeu-por-escrito')
}

function restauraMensagemDeErro() {
    $('p').css('display', 'none')
    $('input').removeClass('fodeu')
    $('label').removeClass('fodeu-por-escrito')
}

function calculaContagemDeIdade(dataInput) {
    const dataInicial = new Date(dataInput);
    const dataAtual = new Date();

    let anos = dataAtual.getFullYear() - dataInicial.getFullYear();
    let meses = dataAtual.getMonth() - dataInicial.getMonth();
    let dias = dataAtual.getDate() - dataInicial.getDate();

    // Ajusta meses e anos se necessário
    if (dias < 0) {
        meses--;
        const ultimoDiaMesAnterior = new Date(
            dataAtual.getFullYear(),
            dataAtual.getMonth(),
            0
        ).getDate();
        dias += ultimoDiaMesAnterior;
    }

    if (meses < 0) {
        anos--;
        meses += 12;
    }

    atualizaContagemDeIdade(dias, meses, anos)
    return `${anos} ano(s), ${meses} mês(es) e ${dias} dia(s)`;
}


function atualizaContagemDeIdade(dias, meses, anos) {
    $('#ANOS').text(anos)
    $('#MESES').text(meses)
    $('#DIAS').text(dias)
}