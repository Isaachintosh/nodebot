const { menu0 } = require("../menu/menu0");
const { db } = require("../models/banco");

function execute(user, msg) {
    if (msg === "*") {
        db[user].stage = 0;
        db[user].itens = []
        return ["Simulação cancelada com sucesso \n"];
    }

    if (msg === "#") {
        db[user].stage = 3;
        return ["Informe o tempo trabalhado em meses.\n Por exemplo: \n se você trabalhou por:\n\n 1 ano - informe 12;\n Um ano e meio - informe 18;\n 2 anos - informe 24: \n"];
    }

    db[user].itens.push(msg); // adiciona valor do input no array itens
    let valorSalario = db[user].itens[0]; // retorna string

    return [
        `O valor do salário informado foi R$ ${valorSalario}\n`,
        "Para confirmar digite # ou para cancelar digite * \n",
        "Step 2 \n",
    ];
}

exports.execute = execute;