import React, { useState } from 'react';
import Home from './src/screens/Home'
import Form from './src/screens/Form'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { Todo } from './src/types'

const Stack = createStackNavigator()

export default function App() {
  const [todoList, setTodoList] = useState<Todo[]>([])
  const addNewItem = (argTodoList: Todo[]) => {
    setTodoList(argTodoList)
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' options={{ title: '一覧' }}>
          {props => <Home {...props} todoList={todoList} />}
        </Stack.Screen>
        <Stack.Screen name='Form' options={{ title: '登録' }}>
          {props => <Form {...props} todoList={todoList} addNewItem={(v: Todo[]) => addNewItem(v)} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
