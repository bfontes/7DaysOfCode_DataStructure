//implementar um sistema de controle de estoque de uma loja
//representacao do n
class Produto {
    constructor(nome, codigoDeBarras, preco, qtd) {
        this.nome = nome;
        this.codigoDeBarras = codigoDeBarras;
        this.preco = preco;
        this.qtd = qtd;
        this.proximoProduto = null;
        this.produtoAnterior =  null;
      }
}

class ListadeProdutos {

    constructor() {
        this.head = null;
        this.tail = null;
      }

    adicionarProduto( codigoDeBarras, nome, preco, qtd){
        const novoProduto =  new Produto(nome, codigoDeBarras, preco, qtd);

        //se a lista estiver vazia, o novo produto sera acbaeca e a calda
        if(this.head == null) {
            this.head = novoProduto;
            this.tail = novoProduto;
        }
        //se a lista nao estiver vazia,  
         
        //     this.tail  novoProduto
        //...    []    <-->   []

        else {
            // estamos estabelecendo a ligação entre o último nó existente e o novoProduto, 
            //tornando o novoProduto o próximo nó após o this.tail na lista.
            this.tail.proximoProduto = novoProduto;
            // atribuindo o this.tail como o nó anterior do novoProduto -> bidirecional
            novoProduto.produtoAnterior = this.tail
            // o novoProduto se torna o último nó da lista
            this.tail = novoProduto
        }
    }

    removerProduto(codigoDeBarras) {
        //se a lista esta vazia, não remove nada
        if (this.head === null) {
            return;
        }
        // //se o nó com o codigo de barras recebido for o primeiro nó da lista
        else if(this.head.codigoDeBarras == codigoDeBarras) {
            //cabeca aponta pra o prox produto

            // []     ->   []   
            // remover
            // (cabeca)   proximoProduto

            this.head  =  this.head.proximoProduto
            if(this.head != null) {
                this.head.produtoAnterior = null;
            }
            //se o nó com o codigo de barras recebido for o último nó da lista
            else {
                this.tail = null;
            }
            return;
        }
        else if (this.tail.codigo_barras == codigo_barras) {
            this.tail = this.tail.produto_anterior
            this.tail.proximo_produto = null
            return
        }
        
        //Antes da remoção
        //         this.head                            this.tail
        //         |                                       |
        //         v                                       v
        //     +-----+-----+        +-----+-----+        +-----+-----+
        //     |     |     |        |     |     |        |     |     |
        // ... |prev |next |    ... |prev |next |    ... |prev |next |
        //     |     |     |        |     |     |        |     |     |
        //     +-----+-----+        +-----+-----+        +-----+-----+
        //         Node 1               Node 2               Node 3

        //Após a remoção do Node 2:
        
        //         this.head                            this.tail
        //         |                                       |
        //         v                                       v
        //     +-----+-----+        +-----+-----+        +-----+-----+
        //     |     |     |        |     |     |        |     |     |
        // ... |prev |next |  -> <- |prev |next |    ... |prev |next |
        //     |     |     |        |     |     |        |     |     |
        //     +-----+-----+        +-----+-----+        +-----+-----+
        //         Node 1               Node 3               Node 4
        //O produtoAnterior do Node 3(prox nó) deve ser atualizado para apontar para o Node 1(nó anterior).
        //O proximoProduto do Node 1 deve ser atualizado para apontar para o Node 3.
         //se o nó a ser removido nao for nem o primeiro nem o ultimo da lista
        else {
            while(this.head != null) {
                if(this.head.codigoDeBarras == codigoDeBarras) {
                    // atualize o produtoAnterior do próximo nó(proximoProduto) para apontar para o nó anterior,
                    // e o proximoProduto do nó anterior para apontar para o próximo nó.
                    this.head.produtoAnterior.proximoProduto = this.head.proximoProduto;
                    this.head.proximoProduto.produtoAnterior = this.head.produtoAnterior;
                    return;
                }
                this.head = this.head.proximoProduto
            }
        }
    }

    atualizarQtd(codigoDeBarras, novaQtd) {
        let produtoAtual = this.head;
        while(produtoAtual != null) {
            if(produtoAtual.codigoDeBarras == codigoDeBarras) {
                produtoAtual.qtd = novaQtd;
                return;
            }
            produtoAtual = produtoAtual.proximoProduto;
        }
    }

    listarProdutos(){
        if(this.head == null){
            console.log("Não há produtos no estoque.");
        }
        else {
            let produtoAtual = this.head;
            while(produtoAtual  != null) {
                console.log("Codigo de barras: " + produtoAtual.codigoDeBarras, ", Nome: " + produtoAtual.nome, ", Preço: " + produtoAtual.preco, ", Quantidade: " + produtoAtual.qtd);
                produtoAtual = produtoAtual.proximoProduto;
            }
        }
    }
}

const listaDeProdutos = new ListadeProdutos();

listaDeProdutos.adicionarProduto("001", "Arroz", 10.50, 50);
listaDeProdutos.adicionarProduto("002", "Feijão", 8.90, 30);
listaDeProdutos.adicionarProduto("003", "Macarrão", 5.99, 70);
listaDeProdutos.adicionarProduto("004", "Óleo", 7.50, 20);
//listaDeProdutos.listarProdutos();

listaDeProdutos.removerProduto("001");
//listaDeProdutos.listarProdutos();

listaDeProdutos.atualizarQtd("002", 40);
listaDeProdutos.listarProdutos();