$(document).ready(function() {

    $('#dia').val('24')
    $('#mes').val('09')
    $('#ano').val('1984')

    $('#form').on('submit', function() {
        const inputDia = parseInt($('#dia').val())
        const inputMes = parseInt($('#mes').val()) - 1
        const inputAno = parseInt($('#ano').val())
        
        if (inputDia && inputMes && inputAno) {
            const dataInput = new Date(inputAno, inputMes, inputDia)
            
            if (dataInput.getDate() !== inputDia) {
                //POR MENSAGEM DE INPUT INVALIDO PARA DIA
            } else if (dataInput.getMonth() !== inputMes) {
                //POR MENSSGEM DE INPUT INVALIDO PARA MES
            } else if (dataInput.getFullYear() !==inputAno || dataInput.getFullYear() < 1997) {
                //POR MENSAGEM DE INPUT INVALIDO PARA ANO
            } else {
                
            }
        }
    })
})


