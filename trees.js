//no no topo da arvore eh raiz, nos sem filhos sao as folhas, arvore no fim, no apontando pra null.
//implementar uma árvore binária que possa armazenar informações sobre os produtos em estoque.
class Produto {
    constructor(id, nome, qtd) {
        this.id = id;
        this.nome = nome;
        this.qtd = qtd;
    }
}
class Node {
    constructor(produto) {
        this.esquerda = null;
        this.direita = null;
        this.produto = produto;
    }
}

class ArvoreProduto {
    constructor() {
        this.raiz = null;
    }

    inserirProduto(id, nome, qtd) {
        let produto = new Produto(id, nome, qtd);
        //raiz nula
        if (this.raiz == null) {
            // Se for, crie um novo nó com o produto e defina-o como raiz
            this.raiz = new Node(produto);
            //this.raiz.produto = prod;
        }
        //se a raiz não for nula
        else {
            this._inserirProduto(produto, this.raiz);
        }
    }

    _inserirProduto(produto, node) {
        //verificar se o id do produto eh menor que o id do no atual
        if (produto.id < node.produto.id) {
            if(node.esquerda == null) {
                //se o filho esquerdo for nulo, se for, criar um novo no com o produto
                node.esquerda = new Node(produto);
                //definindo como filho esquerdo do no atual
                //node.esquerda.produto = produto;
            }
            else {
                this._inserirProduto(produto, node.esquerda);
            }
        }

        //verificar se o id do produto eh maior que o id do no atual
        else if(produto.id > node.produto.id) {
            if(node.direita == null) {
                node.direita =  new Node(produto);
                //node.direita.produto = produto;
            }
            else {
                this._inserirProduto(produto, node.direita);
            }
        }

        //verificar se o id do produto eh igual ao id do no atual
        else {
            //atualizar as informacoes do produto no nó atual
            node.produto = produto ;
        }
    }
    
    buscarProduto(id) {
       return this._buscarProduto(id, this.raiz);
    }

    _buscarProduto(id, node) {
        //verificar se o no atual eh nulo
        if(node == null || node.produto.id == id) {
            return node;
        }
        else if(id < node.produto.id) {
            return this._buscarProduto(id, node.esquerda);
        }
        else {
            return this._buscarProduto(id, node.direita);
        }
    }
    
}

const arvore = new ArvoreProduto();

arvore.inserirProduto(1, "short", 30);
arvore.inserirProduto(2, "blusa", 30);
arvore.inserirProduto(3, "chapeu", 10);
arvore.inserirProduto(4, "cintos", 20);

produtoUm = arvore.buscarProduto(2);
console.log(produtoUm.produto.nome);

produtoDois = arvore.buscarProduto(0);
console.log(produtoDois);




