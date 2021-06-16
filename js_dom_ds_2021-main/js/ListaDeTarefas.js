(() => {
    const novaTarefa = document.querySelector('[data-form-button]')
    const inputTarefa = document.querySelector('[data-form-input]')

    function criarBotaoDelete() {
        const botaoDelete = document.createElement('span')
        botaoDelete.innerText = "X"
        botaoDelete.classList = "close"

        botaoDelete.addEventListener('click', deletarTarefa)

        return botaoDelete
    }

    function deletarTarefa() {
        console.log('Por favor delete essa Tarefa')
    }

    function criartarefa(evento) {
        evento.preventDefault()

        const valorTarefa = inputTarefa.value
        const listaDeTarefas = document.querySelector('[data-task]')

        novaLabel = document.createElement('label')
        novaLabel.innerText = `- ${valorTarefa}`
        novaLabel.className = "form-check-label"

        novoItem = document.createElement('li')
        novoItem.appendChild(novaLabel)
        novoItem.appendChild(criarBotaoDelete())

        listaDeTarefas.appendChild(novoItem)

        inputTarefa.value = ""

    }

    novaTarefa.addEventListener('click', criartarefa)

})()