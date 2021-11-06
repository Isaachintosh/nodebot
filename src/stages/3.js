const { menu0 } = require("../menu/menu0");
const { db } = require("../models/banco");

function execute(user, msg) {
    if (msg === "*") {
        db[user].stage = 0;
        db[user].itens = []
        return ["Simulação cancelada com sucesso \n"];
    }

    if (msg === "#") {
        db[user].stage = 4;
        return ["Informe sua data de nascimento no seguinte formato: 01/02/99 \n"];
    }

    db[user].itens.push(msg); // adiciona valor do input do STEP 2 no array itens
    let tempoTrabalhado = db[user].itens[1]; // retorna string

    return [
        `O valor informado foi: ${tempoTrabalhado} meses trabalhados.\n`,
        "Para confirmar digite # ou para cancelar digite * \n",
        "Step 3 \n",
    ];
}

exports.execute = execute;