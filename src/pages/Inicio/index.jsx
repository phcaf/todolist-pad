import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Tarefa } from '../../components/Tarefa'
import { adicionarTarefa } from '../../store/ducks/tarefas'

import {
  Container, 
  Header, 
  HeaderTexto,
  Adicionar, 
  AdicionarTitulo, 
  Input, 
  BotãoAdicionar,
  TextoBotão
} from './styles'

export function Inicio() {
  const dispatch = useDispatch()
  const tarefas = useSelector(state => state.tarefas)

  const [descrição, setDescrição] = useState('')

  function criarTarefa() {
    dispatch(adicionarTarefa({ titulo: tarefas.length, descrição }))
  }

  return (
    <Container>
      <Header>
          <HeaderTexto>Aplicativo ToDo list</HeaderTexto>
        </Header>
      <Adicionar>
        <AdicionarTitulo>Adicione aqui uma tarefa
      </AdicionarTitulo>

      <Input placeholder="tarefa" onChangeText={(e) => setDescrição(e)} />
      <BotãoAdicionar onPress={criarTarefa}><TextoBotão>ADICIONAR TAREFA</TextoBotão></BotãoAdicionar>
      </Adicionar>

      <ScrollView style={{marginTop: 14}} showsVerticalScrollIndicator={false}>
        {tarefas.map(tarefa => (
          <Tarefa key={tarefa.id} tarefa={tarefa} />
        ))}
      </ScrollView>
    </Container>
  )
}