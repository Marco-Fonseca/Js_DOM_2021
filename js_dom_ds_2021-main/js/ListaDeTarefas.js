(() => { //Criacao da funcao anonima para protecao do cod
    const novaTarefa = document.querySelector('[data-form-button]') // constante que retorna o botao criado no hmtl

    function criarBotaoDelete() { // funcao que cria o botao de deletar tarefa
        const botaoDelete = document.createElement('span')
        botaoDelete.innerText = "X"
        botaoDelete.classList = "close"

        botaoDelete.addEventListener('click', deletarTarefa)

        return botaoDelete
    }

    function criarBotaoConcluir() { //funcao que cria o botao de concluir tarefa
        const botaoConcluir = document.createElement('input')
        botaoConcluir.setAttribute('type', 'checkbox')
        botaoConcluir.classList = "form-check-input"

        botaoConcluir.addEventListener('click', concluirTarefa)

        return botaoConcluir
    }

    function deletarTarefa(evento) { // funcao que deleta uma tarefa
        const botaoDeleteClicado = evento.target
        const itemDaLista = botaoDeleteClicado.parentElement
        itemDaLista.remove()
    }

    function concluirTarefa(evento) { // funcao que conclui uma tarefa
        const botaoConcluirClicado = evento.target
        const itemDaListaConcluido = botaoConcluirClicado.parentElement
        itemDaListaConcluido.classList.toggle('tarefa_concluida')
    }

    function criarTarefa(evento) { // funca que criar uma nova tarefa na lista
        evento.preventDefault()

        const inputTarefa = document.querySelector('[data-form-input]')
        const valorTarefa = inputTarefa.value
        const listaDeTarefas = document.querySelector('[data-task]')

        novaLabel = document.createElement('label')
        novaLabel.innerText = `- ${valorTarefa}`
        novaLabel.className = "form-check-label"

        novoItem = document.createElement('li')

        novoItem.appendChild(criarBotaoConcluir())
        novoItem.appendChild(novaLabel)
        novoItem.appendChild(criarBotaoDelete())


        listaDeTarefas.appendChild(novoItem)

        inputTarefa.value = ""

    }

    novaTarefa.addEventListener('click', criarTarefa) // chamada da funcao criarTarefa quando o botao eh apertado

})()