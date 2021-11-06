const { menu0 } = require("../menu/menu0");
const { db } = require("../models/banco");

function execute(user, msg) {
    if (msg === "*") {
        db[user].stage = 0;
        db[user].itens = []
        return ["Simulação cancelada com sucesso \n"];
    }

    if (msg === "#") {
        db[user].stage = 6;
        return ["Em quantas parcelas você gostaria de simular o empréstimo? \n"];
    }
    let saldoFgts = db[user].itens[3]
    console.log(saldoFgts)


    return [
        `De acordo com nossos cálculos, há aproximadamente R$ ${saldoFgts} como saldo em sua conta FGTS.\n`,
        `A data de nascimento informada foi: ${dataNascimento}`,
        "Para prosseguirmos para simularmos as parcelas: digite # ou para cancelar: digite * \n",
        "Step 5 \n",
    ];
}

exports.execute = execute;