"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaCorrente = void 0;
const conta_1 = require("./conta");
class ContaCorrente extends conta_1.Conta {
    constructor(numero, agencia, tipo, titular, saldo, limite) {
        super(numero, agencia, tipo, titular, saldo);
        this._limite = limite;
    }
    get limite() {
        return this._limite;
    }
    set limite(limite) {
        this._limite = limite;
    }
    sacar(valor) {
        if ((this.saldo + this._limite) < valor) {
            console.log("\n Saldo Insuficiente!");
            return false;
        }
        this.saldo = this.saldo - valor;
        return true;
    }
    visualizar() {
        super.visualizar();
        console.log("Limite: " + this._limite.toFixed(2));
    }
}
exports.ContaCorrente = ContaCorrente;
