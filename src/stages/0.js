const { menu0 } = require("../menu/menu0");
const { db } = require("../models/banco");

function execute(user, msg, contato) {

    // Obtem a hora atual do PC para definir se vai ser Bom dia, tarde ou noite.
    stamp = new Date();
    hours = stamp.getHours();
    if (hours >= 18 && hours < 24) {
        time = "Boa noite"
    } else if (hours >= 12 && hours < 18) {
        time = "Boa tarde"
    } else if (hours >= 0 && hours < 12) {
        time = "Bom dia"
    }


    let menu = " Serviços \n\n";

    Object.keys(menu0).forEach((value) => {
        let element = menu0[value];
        menu += `${value} - ${element.description} \n`;
    });

    db[user].stage = 1;

    return [
        menu,
        `${time}! Me chamo July e sou a atendente virtual da JBT. \n Aqui está a lista de nossos serviços, escolha um deles para começarmos, por favor.`
    ];
}

exports.execute = execute;