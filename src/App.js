import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import TodoFooter from './redux/TodoFooter';
import {selectTodo,selectState, clearComp, addNewTodoCheck,deleteTodo} from "./redux/TodosSlice/TodosSlice"

function App() {
  const proj=useSelector(selectState)
  const dispatch=useDispatch()
  return (
    <div className="App">
      <h1>To Do List</h1>
      <TodoForm onAdd={(text)=>{
       dispatch(selectTodo(text))
      }}/>
     <TodoList proj={proj} onCheck={(newTodo)=>{
       dispatch(addNewTodoCheck(newTodo))
     }} onDelete={(p)=>{
       dispatch(deleteTodo(p))
     }}/>
     <TodoFooter proj={proj} onDleteComp={()=>{
       dispatch(clearComp())
     }}/>
    </div>
  );
}

export default App;
