class ListadeCompras {
	constructor() {
		itens = []
		quantidade = []
	}

	adicionarItem(nomeProduto, qtdProduto) {
		this.itens.push(nomeProduto);
		this.quantidade.push(qtdProduto);
	}

	removerItem(nomeProduto) {
		let indice = null
		for (let  i=0; i < this.itens.length; i++) {
			if(this.itens[i] === nomeProduto) {
				indice = i;
				break;
			}
		}

		if(indice != null) {
			//remover os produtos
			this.itens.splice(indice, 1);
			this.quantidade.splice(indice, 1); 
			console.log(`O produto '${nomeProduto}' foi removido com sucesso.`);
		}
	}

	listarItens() {
		for(i=0; i<this.itens.length; i++) {
			elemento1 = this.itens[i];
			elemento2 = this.quantidade[i];
			console.log(`O produto é '${elemento1}'.`);
			console.log(`A quantidade é '${elemento2}'.`);
		}
	}
}

const lista = new ListadeCompras();

lista.adicionarItem('Banana', 5);
lista.adicionarItem('Uva', 2);
lista.adicionarItem('Morango', 6);
lista.adicionarItem('Mamao', 2);

lista.listarItens();

lista.removerItem('Banana');

lista.listarItens();

//add elemento no final do array -> push()
//add elemento no inicio -> unshift()
//remover elemento no final -> pop()
//remover elemnto do inicio -> shift()
