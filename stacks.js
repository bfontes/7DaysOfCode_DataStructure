//last in, first out
//Novos elementos são inseridos no topo da pilha e elementos antigos são removidos do topo da pilha.
//Push (adiciona um elemento ao topo da pilha);
//Pop (remove o elemento do topo da pilha).

class Livro {
    constructor(titulo, paginas) {
        this.titulo = titulo;
        this.paginas = paginas;
    }
}

class PilhadeLivros {
    constructor() {
        this.pilha = [];
    }

    adicionarLivro(titulo, paginas) {
        const livro = new Livro(titulo, paginas);
        this.pilha.push(livro);
    }

    removerLivros() {
        if(this.pilha.length >= 1){
            return this.pilha.pop();
        }
        return null;
    }

    exibirLivroDoTopo() {
        //verificar se a pilha existe
      if(this.pilha.length > 0) {
        const topo = this.pilha[this.pilha.length - 1];
        console.log("Elemento no topo da pilha:", topo);
        } else {
        console.log("A pilha está vazia.");
        }
    }

    mostrarLivros() {
        if(this.pilha.length < 1) {
            console.log("Não há pilha a ser exibida");
        }
        else {
            this.pilha.forEach(livro => {
                console.log("Título: " + livro.titulo, ",Páginas: " + livro.paginas);
            });
        }
    }

}

const pilha = new PilhadeLivros()

pilha.adicionarLivro("Harry Potter e a Pedra Filosofal", 600)
pilha.adicionarLivro("Harry Potter e a Câmara Secreta", 648)
pilha.adicionarLivro("Harry Potter e o Prisioneiro de Azkaban", 848)
pilha.adicionarLivro("Harry Potter e o Cálice de Fogo", 608)
pilha.adicionarLivro("Harry Potter e a Ordem da Fênix", 336)
pilha.adicionarLivro("Harry Potter e as Relíquias da Morte", 336)
pilha.adicionarLivro("Harry Potter e a Criança Amaldiçoada", 336)


// pilha.mostrarLivros();
pilha.exibirLivroDoTopo();
