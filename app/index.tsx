import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, TextInput, KeyboardAvoidingView} from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Ionicons} from "@expo/vector-icons";
import Checkbox from 'expo-checkbox';

type ToDoType = {
  id: number;
  title: string;
  isDone: boolean;
}

export default function App() {
  //the todoData is an constant array variable, it can't be reassign
const todoData = [
  {
    id: 1,
    title: "Todo 1",
    isDone: true,
  },
  {
    id: 2,
    title: "Todo 2",
    isDone: false,
  },
  {
    id: 3,
    title: "Todo 3",
    isDone: false,
  }
]

//set up array before returning
  return (
    <SafeAreaView
    style={styles.container}
    >
      <View
      style={styles.header}
      >
        <TouchableOpacity onPress={() => {alert('Hiii!!! Charu')}}>
        <Ionicons name = "menu" size={27} color = "black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
        <Image
        source = {{uri: "https://imgs.search.brave.com/hkV7iIkedNRVzZke9cBxS--MkMKEq-iE8Q-zFKCNN3w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/c3VwZXJtYW4tZmly/c3Qtc3VwZXJoZXJv/LXBpYy1vZi15ZWFy/LXRvLWZseS1wYXN0/LTYwMC12MC1vbXZz/b3k5dHpsa2YxLmpw/ZWc_d2lkdGg9Njgw/JmF1dG89d2VicCZz/PWM4YjQ0ZGVhZmMx/MmJmYjg0Y2EwY2Zh/ODg3YTgyMzhkMWU2/ZDc2MmU"}}
        style = {{width: 35, height: 35, borderRadius: 30}}
        />
        </TouchableOpacity>

      </View>
      <View style = {styles.searchbar}>
        <Ionicons name = "search" size = {24} color = 'black' />
        <TextInput placeholder= "search" style = {styles.searchInput} clearButtonMode = "always" />

      </View>

    //in flatlist data, keyExtractor & render item are predefined prop name, whatever you pass in flatlist will be shown on the screen
    //data takes an array todoData
    //render item tells react native how to render each item in the array
    //key factor helps to uniquely identify each item
    //isDone is a boolean value that indicates whether the todo item is completed or not
    
    <FlatList
    data = {todoData}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({item}) => (
      <ToDoItem todo = {item} />
    )}
    />
    <KeyboardAvoidingView style = {styles.footer} behavior = "padding" keyboardVerticalOffset = {10}>
      <TextInput placeholder= "Add a new task" style = {styles.newTodoInput} />
      <TouchableOpacity style = {styles.addButton} onPress = {() => {}}>
        <Ionicons name= "add" size = {24} color = {'white'} />
      </TouchableOpacity>
    </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
const ToDoItem = ({todo} : {todo: ToDoType}) => (
  <View
      style = {styles.textcontent}>
        <View style = {styles.checkbox}>
        <Checkbox value = {todo.isDone} color = {todo.isDone ? "black" : undefined} />
        <Text style={todo.isDone &&{textDecorationLine: 'line-through'}}>
          {todo.title}
        </Text>
        </View>
        <TouchableOpacity onPress= {() => {alert("Deleted " + todo.title)}}>
        <Ionicons name = "trash" size = {20} color = 'grey' />
        </TouchableOpacity>
      </View>
)


const styles = StyleSheet.create({
container: {
  flex: 1,
  paddingHorizontal: 20,
  justifyContent: "center",
  padding: 10,
  


},
header: {
flexDirection: 'row',
alignItems: 'center',
justifyContent:'space-between',
marginBottom: 30
},
searchbar:{
  backgroundColor: '#e6e6e6',
  borderRadius: 10,
  paddingHorizontal: 15,
  height: 50,
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 20,
  gap: 5,
  color: 'grey'
 
},
textcontent:{
  paddingHorizontal: 13,
  padding:16,
  backgroundColor: '#e6e6e6',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 13,
  borderRadius: 20,
  marginBottom: 15,
  justifyContent: 'space-between'

  
  
},
searchInput: {
  flex: 1,
  fontSize: 16,
  color: 'black'

},
checkbox: {
  borderRadius: 5,
  flexDirection: 'row',
  alignItems: 'center',
  gap: 13
},
footer: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
},
addButton: {
  backgroundColor: 'grey',
  padding: 12,
  borderRadius: 20,
  marginLeft: 10,
  


},
newTodoInput: {
  flex: 1,
  backgroundColor: '#e6e6e6',
  padding: 12,
  paddingHorizontal: 20,
  borderRadius: 20,
  fontSize: 16,
  color: 'black',
  
}
})