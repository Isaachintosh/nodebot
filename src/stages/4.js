const { menu1 } = require("../menu/parcelasFgts");
const { db } = require("../models/banco");

function execute(user, msg) {
    if (msg === "*") {
        db[user].stage = 0;
        db[user].itens = []
        return ["Simulação cancelada com sucesso \n"];
    }

    if (msg === "#") {
        db[user].stage = 5;
        
        let menu = " Opções de parcelamento \n\n"
        Object.keys(menu1).forEach((value) => {
            let option = menu1[value]
            menu += `${value} - ${option}`
        })
        
        return ["Informe em quantas vezes você gostaria de parcelar dentre as seguintes opções: \n", menu];
    }
    
    db[user].itens.push(msg)
    let dataNascimento = db[user].itens[2]
    let salario = parseFloat(db[user].itens[0])
    let tempoTrabalhado = parseInt(db[user].itens[1])
    const taxaFgts = 0.08
    const juros = 1.025

    let saldoFgts = (((salario * taxaFgts) * tempoTrabalhado) * juros).toFixed(2) 
    db[user].itens.push(saldoFgts) // será o quarto item do array -> array[3]

    return [
        `De acordo com nossos cálculos, há aproximadamente R$ ${saldoFgts} como saldo em sua conta FGTS.\n`,
        `A data de nascimento informada foi: ${dataNascimento}`,
        "Para prosseguirmos para simularmos as parcelas: digite # ou para cancelar: digite * \n",
        "Step 4 \n",
    ];
}

exports.execute = execute;