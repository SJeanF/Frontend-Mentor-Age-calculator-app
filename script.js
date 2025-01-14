$(document).ready(function() {

    $('#dia').val('24')
    $('#mes').val('01')
    $('#ano').val('2025')

    $('#form').on('submit', function(e) {
        e.preventDefault();
        verificaInputPreenchido();

})})


function verificaInputPreenchido() {
    const inputDia = parseInt($('#dia').val())
    const inputMes = parseInt($('#mes').val()) - 1
    const inputAno = parseInt($('#ano').val())
    
    if (inputDia && (inputMes + 1) && inputAno) {
        const dataInput = new Date(inputAno, inputMes, inputDia)

        if (dataInput.getDate() !== inputDia) {
            //POR MENSAGEM DE INPUT INVALIDO PARA DIA
        } else if (dataInput.getMonth() !== inputMes) {
            //POR MENSSGEM DE INPUT INVALIDO PARA MES
        } else if (dataInput.getFullYear() !== inputAno || dataInput.getFullYear() < 1997) {
            //POR MENSAGEM DE INPUT INVALIDO PARA ANO
        } else {
            verificaDataFutura(dataInput)
        }
    }
}

function verificaDataFutura(dataInput) {
    const dataHoje = new Date()
    console.log (dataHoje)
    if (dataInput > dataHoje) {
        // Mensagem: Data no futuro
        if (dataInput.getFullYear() > dataHoje.getFullYear()) {
            // Ano no futuro
        } else if (dataInput.getMonth() > dataHoje.getMonth()) {
            // Mês no futuro
        } else if (dataInput.getDate() > dataHoje.getDate()) {
            // Dia no futuro
        }
    } else {
        // Data é hoje ou no passado
        // Executar função de fazer a subtração e exibir o resultado
    } 
}