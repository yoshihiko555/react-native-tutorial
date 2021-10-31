import React, { useState } from "react";
import {
  SafeAreaView,
  Button,
  StyleSheet,
} from 'react-native'
import FormInput from '../components/FormInput'
import { Todo } from '../types'

type Props = {
  todoList: Todo[]
  addNewItem: (v: Todo[]) => void
  navigation: any
};

const Form: React.FC<Props> = ({ todoList, addNewItem, navigation }) => {
  const [todoValue, setTodoValue] = useState('')
  const [memoValue, setMemoValue] = useState('')
  // const [todoList, setTodoList] = useState<Todo[]>([])

  return (
    <SafeAreaView style={styles.container}>
      <FormInput
        label='やること'
        value={todoValue}
        placeholder='何かやること'
        onChangeText={v => setTodoValue(v)}
      />
      <FormInput
        label='メモ'
        value={memoValue}
        placeholder='何かメモ'
        onChangeText={v => setMemoValue(v)}
      />
      <Button
        title='登録'
        onPress={() => {
          const newTodoList = todoList.concat({ todo: todoValue, memo: memoValue })
          // setTodoList(newTodoList)
          addNewItem(newTodoList)
          setTodoValue('')
          setMemoValue('')
          navigation.goBack()
        }}
      />
      <Button
        title='クリア'
        onPress={() => {
          // setTodoList([])
          addNewItem([])
          setTodoValue('')
          setMemoValue('')
          navigation.goBack()
        }}
      />
    </SafeAreaView>
  )
}

export default Form

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
