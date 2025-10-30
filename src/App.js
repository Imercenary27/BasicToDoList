
import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todo from './MyComponents/Todo';
import AddTodo from './MyComponents/AddTodo';
import Todos from './MyComponents/Todos';
import React, {useState} from 'react';



function App(props) {
  const addtodo=props.AddTodo
  console.log(addtodo)

  const onDelete=(todo)=>{
    console.log("I am ondelete",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    }
  
  const addTodo=(title,desc)=>{
    console.log("I am adding",title,desc)
    setTodos(todos.push(title,desc))
  }
    
  const [todos, setTodos] = useState([
    {
    sno:1,
    title:"Go to the market",
    desc:"Hello"
    },
    {
    sno:2,
    title:"Wake Up",
    desc:"Hello"
    },
    { 
    sno:3,
    title:"Sleep",
    desc:"Hello"
    },
  ]);
  return (
    <>
    <Header title='MyToDoList'></Header>
    <AddTodo addTodo={addTodo}></AddTodo>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
</>
  );
}

export default App;
