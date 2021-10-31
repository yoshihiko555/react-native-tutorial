import React from "react";
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native'
import { Todo } from '../types'

// const todoList: Todo[] = [
//   { todo: '買い物', memo: '今日の午後６時まで' },
//   { todo: '掃除', memo: '今日は必ずやる' }
// ]
type Props = {
  todoList: Todo[]
  navigation: any
};

const Home: React.FC<Props> = ({ todoList, navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title='登録画面へ'
        onPress={() => navigation.navigate('Form')}
      />
      <FlatList
        style={styles.listBox}
        data={todoList}
        renderItem={({ item }) => {
          return (
            <View style={styles.listItem}>
              <Text>{item.todo}</Text>
              <Text>{item.memo}</Text>
            </View>
          )
        }}
        keyExtractor={item => item.todo}
      />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listBox: {
    margin: 1,
  },
  listItem: {
    height: 64,
    width: 200,
    marginTop: 16,
    padding: 16,
    borderColor: 'gray',
    borderWidth: 1,
  }
});
