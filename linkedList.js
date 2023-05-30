//sistema de gerenciamento de pacientes usando listas encadeadas
//paciente tem nome, id, estado de saude..
//devemos add pacientes, remover e listar

class Paciente {
    constructor(nome, id, estado) {
        this.nome = nome;
        this.id = id;
        this.estado = estado;
        this.proximoPaciente = null;
      }
}

class ListadePacientes {

   constructor() {
    this.head = null;
    this.tail = null;
  }

    addPaciente(nome, id, estado) {
        const novoPaciente = new Paciente(nome, id, estado);

        // Se a lista está vazia, o novo paciente se torna a cabeca e a calda
        if (this.head == null) {
            this.head = novoPaciente;
            this.tail = novoPaciente;
        }
        // Se a lista não está vazia, adicionamos o novo paciente no final e atualizamos o tail
        else {
            this.tail.proximoPaciente = novoPaciente;
            this.tail = novoPaciente;
        }
    }

    removerPaciente(id) {
        //se a lista esta vazia, nao ha nada a ser removido
        if (this.head === null) {
            return;
        }
        
        //verificar se o nome da lista é o primeiro nó
        else if (this.head.id == id) {
            //atualizando o head para apontar para o prox no da lista
            this.head = this.head.proximoPaciente;
            //se o head tiver ficado vazia, atualizamos o tail para que ele seja nulo e indique a lista esta vazia
            if(this.head == null ){
                this.tail = null;
            }
            return;
        } 

        //percorremos a lista até encontrar o paciente a ser removido
        else {
            let pacienteAtual = this.head;
            while (pacienteAtual.proximoPaciente !== null) {
                if (pacienteAtual.proximoPaciente.id == id) {
                    // Atualiza o ponteiro do nó anterior para o próximo nó
                    pacienteAtual.proximoPaciente = pacienteAtual.proximoPaciente.proximoPaciente;
                    // Verifica se o nó a ser removido é o último (tail)
                    if (pacienteAtual.proximoPaciente === null) {
                        this.tail = pacienteAtual;
                        return;
                    }
                }
                pacienteAtual = pacienteAtual.proximoPaciente;
            }
        }



    }

    listarPacientes() {
        //se a lista estiver vazia
        let pacienteAtual = this.head;
        if (pacienteAtual == null) {
            console.log("A lista esta vazia, não há paciente a ser exibido");
        }
        //percorre cada nó individualmente e exibe suas respectivas infos
        while (pacienteAtual !== null) {
            //exibir suas respectivas infos
            console.log(pacienteAtual.nome, pacienteAtual.id, pacienteAtual.estado);
            //percorre os nós
            pacienteAtual = pacienteAtual.proximoPaciente;
        }
    }
}


const listaDePacientes = new ListadePacientes();

listaDePacientes.addPaciente("ana", 22, 'estavel');
listaDePacientes.addPaciente('joao', 24, "grave");
listaDePacientes.addPaciente('jose', 20, "instavel");
listaDePacientes.addPaciente('sarah', 19, "estavel");

listaDePacientes.listarPacientes();

listaDePacientes.removerPaciente(22);

listaDePacientes.listarPacientes();

