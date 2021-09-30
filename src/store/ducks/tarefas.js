const actionTypes = {
  ADD: 'ADICIONAR_TAREFA',
  DELETE: 'DELETAR_TAREFA'
}

export function adicionarTarefa(tarefa) {
  return {
    type: actionTypes.ADD,
    payload: {
      tarefa
    }
  }
}

export function deletarTarefa(id) {
  return {
    type: actionTypes.DELETE,
    payload: {
      id
    }
  }
}

const tarefas = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD:
      const { tarefa } = action.payload
      
      return [...state, { id: new Date().toISOString(), ...tarefa }]
  
    case actionTypes.DELETE:
      const { id } = action.payload

      let tarefasSemDeletada = []
      
      for (_tarefa of state) {
        if (_tarefa.id !== id)
          tarefasSemDeletada.push(_tarefa)
      }

      return tarefasSemDeletada

    default:
      return state
  }
}

export { tarefas }