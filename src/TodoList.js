import TodoItem from "./TodoItem"

export default function TodoList({proj,onCheck,onDelete}){
    return(
        <div>
            {proj.map((p)=>{
                return <TodoItem key={p.id} p={p} onCheck={onCheck} onDelete={onDelete}/>
            })}
        </div>
    )
}