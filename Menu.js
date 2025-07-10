"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = main;
const readlinesync = require("readline-sync");
const Colors_1 = require("./src/util/Colors");
const conta_1 = require("./src/model/conta");
const contaCorrente_1 = require("./src/model/contaCorrente");
const contaPoupanca_1 = require("./src/model/contaPoupanca");
function main() {
    let opcao;
    // Objeto da Classe Conta (Teste)
    const conta = new conta_1.Conta(1, 123, 1, "Adriana", 10000);
    conta.visualizar();
    conta.sacar(10500);
    conta.visualizar();
    conta.depositar(5000);
    conta.visualizar();
    // Objeto da Classe ContaCorrente (Teste)
    const contacorrente = new contaCorrente_1.ContaCorrente(2, 123, 1, "Mariana", 15000, 1000);
    contacorrente.visualizar();
    contacorrente.sacar(2000);
    contacorrente.visualizar();
    contacorrente.depositar(1000);
    contacorrente.visualizar();
    // Objeto da Classe ContaPoupanca (teste)
    const contapoupanca = new contaPoupanca_1.ContaPoupanca(3, 123, 2, "Victor", 1000, 10);
    contapoupanca.visualizar();
    contapoupanca.sacar(200);
    contapoupanca.visualizar();
    contapoupanca.depositar(1000);
    contapoupanca.visualizar();
    while (true) {
        console.log(Colors_1.colors.bg.black, Colors_1.colors.fg.yellow, "*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO A.S.A                          ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ", Colors_1.colors.reset);
        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");
        if (opcao == 9) {
            console.log(Colors_1.colors.fg.greenstrong, "\nBanco A.S.A – Mais que um banco, um passo para o seu futuro!");
            sobre();
            console.log(Colors_1.colors.reset, "");
            process.exit(0);
        }
        switch (opcao) {
            case 1:
                console.log(Colors_1.colors.fg.whitestrong, "\n\nCriar Conta\n\n", Colors_1.colors.reset);
                keyPress();
                break;
            case 2:
                console.log(Colors_1.colors.fg.whitestrong, "\n\nListar todas as Contas\n\n", Colors_1.colors.reset);
                keyPress();
                break;
            case 3:
                console.log(Colors_1.colors.fg.whitestrong, "\n\nConsultar dados da Conta - por número\n\n", Colors_1.colors.reset);
                keyPress();
                break;
            case 4:
                console.log(Colors_1.colors.fg.whitestrong, "\n\nAtualizar dados da Conta\n\n", Colors_1.colors.reset);
                keyPress();
                break;
            case 5:
                console.log(Colors_1.colors.fg.whitestrong, "\n\nApagar uma Conta\n\n", Colors_1.colors.reset);
                keyPress();
                break;
            case 6:
                console.log(Colors_1.colors.fg.whitestrong, "\n\nSaque\n\n", Colors_1.colors.reset);
                keyPress();
                break;
            case 7:
                console.log(Colors_1.colors.fg.whitestrong, "\n\nDepósito\n\n", Colors_1.colors.reset);
                keyPress();
                break;
            case 8:
                console.log(Colors_1.colors.fg.whitestrong, "\n\nTransferência entre Contas\n\n", Colors_1.colors.reset);
                keyPress();
                break;
            default:
                console.log(Colors_1.colors.fg.whitestrong, "\nOpção Inválida!\n", Colors_1.colors.reset);
                keyPress();
                break;
        }
    }
}
/* Função com os dados da pessoa desenvolvedora */
function sobre() {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: AGATA DE SOUZA ANDRADE ");
    console.log("Agata de Souza Andrade - agata.andrade@icloud.com");
    console.log("https://github.com/Agataandrade");
    console.log("********************************************************");
}
function keyPress() {
    console.log(Colors_1.colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}
main();
