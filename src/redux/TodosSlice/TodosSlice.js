


export function TodosReducer(state=[],action){
    if(action.type==="add"&& action.payload.text!==""){
        return[
            ...state,
            {
                id:Math.random(),
                text:action.payload.text,
                isComplited:false
            }
        ]
    }
    else if(action.type==="clear"){
        return state.filter((st)=>{
            return st.isComplited===action.payload.isComplited
        })
    }
    else if(action.type==="check-todo"){
        return state.map((st)=>{
            if(st.id===action.payload.id){
                return action.payload.todo
            }
            {return st}
        })
    }
    else if(action.type==="delete-todo"){
        return state.filter((st)=>{
            return st.id!=action.payload.id
        })
    }
    return state
}
export const initialTodos=[
    {
        id:Math.random(),
        text:"Learn JS",
        isComplited:false
    },
    {
        id:Math.random(),
        text:"Learn CSS",
        isComplited:false
    },
    {
        id:Math.random(),
        text:"Learn React",
        isComplited:false
    },
]
export function selectTodo(newName){
    return {
        type:"add",
        payload:{
            text:newName,
        }
    }
}
export function selectState(state){
    
        return state.todos
    
}
export  function clearComp(){
return {
    type:"clear",
    payload:{
        isComplited:false
    }
}
}
export function addNewTodoCheck(newTodo){
    return{
        type:"check-todo",
        payload:{
            id:newTodo.id,
            todo:newTodo,
        }
    }
}
export function deleteTodo(p){
    return({
        type:"delete-todo",
        payload:{
            id:p.id
        }
    })
}