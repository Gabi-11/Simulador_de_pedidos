import { StatusPedido } from "./enum";

export class Pedido {
    itensPedidos: string[];
    valorTotal: number;
    status: StatusPedido;

    constructor() {
        this.itensPedidos = [];
        this.valorTotal = 0;
        this.status = StatusPedido.AGUARDANDO;
    }

    adicionarItem(item: string, valor: number): void {
        this.itensPedidos.push(item);
        this.valorTotal += valor;
    }

    calcularValorTotal(): number {
        return this.valorTotal;
    }

    atualizarStatus(status: StatusPedido): void {
        this.status = status;
    }
}