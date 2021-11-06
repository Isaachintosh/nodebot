const { menu0 } = require("../menu/menu0");
const { db } = require("../models/banco");

function execute(user, msg) {
    if (msg === "*") {
        db[user].stage = 0;
        db[user].itens = []
        return ["Simulação Cancelada com Sucesso"];
    }

    if (msg === "#") {
        db[user].stage = 2;
        return ["Ok, vamos ao próximo passo, digite o valor do seu salário, por exemplo, se for R$ 1.234,56 digite 1234.56"];
    }

    if (!menu0[msg]) {
        return [
            "Código inválido, digite corretamente",
            "```Digite # para finalizar ou * para cancelar```",
        ];
    }

    return [
        `Opção ${menu0[msg].description} selecionada com sucesso`,
        "Digite # para prossegir ou * para cancelar",
        "Step 1 \n"
    ];
}

exports.execute = execute;