import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deletarTarefa } from '../../store/ducks/tarefas'

import { Container, Header, HeaderTexto, Tarefa,TituloTarefa,DescriçãoTarefa, Botão2,Botão1, TextoBotões } from './styles'

export function TarefaTela({ route }) {
  const { tarefa } = route.params

  const dispatch = useDispatch()
  const navigation = useNavigation()

  function remover() {
    dispatch(deletarTarefa(tarefa.id))
    navigation.goBack()
  }

  return (
    <Container>
      <Header>
        <HeaderTexto>Aplicativo ToDo list</HeaderTexto>
      </Header>
      
      <Tarefa>
        <TituloTarefa>Tarefa#{tarefa.titulo}</TituloTarefa>
        <DescriçãoTarefa>{tarefa.descrição}</DescriçãoTarefa>
      </Tarefa>

      <Botão1><TextoBotões>EDITAR TAREFA</TextoBotões></Botão1>
      <Botão2 onPress={remover}><TextoBotões>REMOVER TAREFA</TextoBotões></Botão2>
    </Container>
  )
}