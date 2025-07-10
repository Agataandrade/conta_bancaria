"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaPoupanca = void 0;
const conta_1 = require("./conta");
class ContaPoupanca extends conta_1.Conta {
    constructor(numero, agencia, tipo, titular, saldo, aniversario) {
        super(numero, agencia, tipo, titular, saldo);
        this._aniversario = aniversario;
    }
    get aniversario() {
        return this._aniversario;
    }
    set aniversario(aniversario) {
        this._aniversario = aniversario;
    }
    visualizar() {
        super.visualizar();
        console.log("Dia do aniversário: " + this._aniversario);
    }
}
exports.ContaPoupanca = ContaPoupanca;
