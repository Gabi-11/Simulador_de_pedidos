import { Pedido } from "./pedido";
import { StatusPedido } from "./enum";

const pedido1 = new Pedido();
pedido1.adicionarItem("Hambúrguer", 10);
pedido1.adicionarItem("Batata Frita", 5);
console.log("Itens do Pedido 1:", pedido1.itensPedidos);
console.log("Valor Total do Pedido 1:", pedido1.calcularValorTotal());
pedido1.atualizarStatus(StatusPedido.EM_ANDAMENTO);
console.log("Status do Pedido 1:", pedido1.status); 