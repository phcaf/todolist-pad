import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Inicio } from '../pages/Inicio'
import { TarefaTela } from '../pages/Tarefa'

const Stack = createNativeStackNavigator()

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Tarefa" component={TarefaTela} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}