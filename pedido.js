"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
var enum_1 = require("./enum");
var Pedido = /** @class */ (function () {
    function Pedido() {
        this.itensPedidos = [];
        this.valorTotal = 0;
        this.status = enum_1.StatusPedido.AGUARDANDO;
    }
    Pedido.prototype.adicionarItem = function (item, valor) {
        this.itensPedidos.push(item);
        this.valorTotal += valor;
    };
    Pedido.prototype.calcularValorTotal = function () {
        return this.valorTotal;
    };
    Pedido.prototype.atualizarStatus = function (status) {
        this.status = status;
    };
    return Pedido;
}());
exports.Pedido = Pedido;
