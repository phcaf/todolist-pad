import React from 'react'
import { Image, TouchableOpacity } from 'react-native'

import { Container, Header, Title, Content } from './styles'

import imagemMenu from '../../assets/storage.png'
import imagemFechar from '../../assets/close.png'
import { useDispatch } from 'react-redux'
import { deletarTarefa } from '../../store/ducks/tarefas'
import { useNavigation } from '@react-navigation/core'


function Tarefa({ tarefa }) {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  function excluirTarefa() {
    dispatch(deletarTarefa(tarefa.id))
  }

  function redirecionar() {
    navigation.navigate('Tarefa', { tarefa })
  }

  return (
    <Container onPress={redirecionar}>
      <Header>
        <Image source={imagemMenu} />
        <Title>Tarefa#{tarefa.titulo}</Title>
        <TouchableOpacity onPress={excluirTarefa}>
          <Image source={imagemFechar} />
        </TouchableOpacity>
      </Header>

      <Content>{tarefa.descrição}</Content>
    </Container>
  )
}

export { Tarefa }