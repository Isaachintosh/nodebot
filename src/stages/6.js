const { menu0 } = require("../menu/menu0");
const { vezes } = require("../menu/parcelasFgts");
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
    Object.keys(vezes).forEach((value) => {
        let opcao = vezes[value]
        segundoMenu += `${opcao} - vezes \n`;
    })


    return [
        `${segundoMenu}\n`,
        "Caso queira que um de nossos representantes entrem em contato para dar continuidade ao atendimento digite # ou para cancelar digite * \n",
        "Step 6 \n",
    ];
}

exports.execute = execute;