//Enqueue (enfileirar, ou seja, adicionar ao final da fila);
//Dequeue (desenfileirar, ou seja, remover o primeiro elemento da fila).

// Implementar uma fila simples para gerenciar pedidos de um restaurante

class Pedido {
    constructor(numeroDoPedido, nomeDoCliente, itensDoPedido) {
        this.numeroDoPedido = numeroDoPedido;
        this.nomeDoCliente = nomeDoCliente;
        this.itensDoPedido = itensDoPedido;
    }
}

class FilaDePedidos {
    constructor() {
        this.fila = [];
    }

    adicionarPedido(numeroDoPedido, nomeDoCliente, itensDoPedido) {
        let novoPedido = new Pedido(numeroDoPedido, nomeDoCliente, itensDoPedido);
        //add elemento no final - push()
        this.fila.push(novoPedido);
    }

    removerPedido() {
        //se a fila estiver vazia
        if(this.fila.length < 1){
            return null;
        }
        //remove o ultimo elemento da fila - pop()
        //remove o primeiro elemento da fila -shift()
       return this.fila.shift();
    }

    mostrarPedidos() {
        if(this.fila.length <1) {
            console.log("Não há pedidos");
            return;
        }
        else {
            this.fila.forEach(pedido => {
                console.log("Número do pedido: "+ pedido.numeroDoPedido, " , Nome: " + pedido.nomeDoCliente);
            });
        }
    }
}

const fila = new FilaDePedidos()

fila.adicionarPedido(1, "João", "Hambúrguer")
fila.adicionarPedido(2, "Ana", "Pizza")
fila.adicionarPedido(3, "José", "Sushi")

fila.mostrarPedidos()

const pedidoAtendido = fila.removerPedido()
console.log("Pedido atendido:"+ " Número: " + pedidoAtendido.numeroDoPedido, "Prato: " + pedidoAtendido.nomeDoCliente);

fila.mostrarPedidos()

