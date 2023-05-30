//tabela hash -> array em que cada elemento é uma lista encadeada
//implementar um sistema de pontuação para jogos online usando uma técnica de hashmap
class Jogo {
    constructor() {
         this.jogadores_pontuacao = {};
    }

    adicionarJogador(nome) {
        //recebendo uma pontuação inicial
        this.jogadores_pontuacao[nome] = 0;
       
    }

    atualizarPontuacao(nome, pontos) {
        //verifica se o nome esta presente no dicionario, se estiver, incrementa sua pontuacao
        if(nome in this.jogadores_pontuacao) {
            this.jogadores_pontuacao[nome] += pontos;
        } 
    }

    removerJogador(nome) {
        delete this.jogadores_pontuacao[nome];
    }

    //listar jogadores em ordem decrescente de pontos
    listarJogadoresPorPontuacao() {
        if(Object.keys(this.jogadores_pontuacao).length === 0) {
            console.log("Não há jogadores na rodada");
            return;
        }
        else {
            //usando o spread pra criar um novo array pra nao alterar o objeto real e fazer o sort
            const ranking = [...Object.entries(this.jogadores_pontuacao)].sort((a, b) => b[1] - a[1])
            for (const [nome, pontos] of ranking) {
                console.log(`${nome}: ${pontos} pontos`);
            }
        }
    }
}

const jogo = new Jogo();

jogo.adicionarJogador('Neymar')
jogo.adicionarJogador('Messi')
jogo.adicionarJogador('Rodrygo')
jogo.adicionarJogador('ViniJr')

jogo.atualizarPontuacao('ViniJr', 100)
jogo.atualizarPontuacao('Neymar', 80)

jogo.listarJogadoresPorPontuacao();

jogo.removerJogador('Neymar');
console.log(".................")
jogo.listarJogadoresPorPontuacao();