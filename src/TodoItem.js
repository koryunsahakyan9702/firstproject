export default function TodoItem({p,onCheck,onDelete}){
    return(
        <div>
            <input type="checkbox" checked={p.isComplited} onChange={(evt)=>{
                onCheck({
                    ...p,
                    isComplited:evt.target.checked
                })
            }}/>
            {p.text}
            <button onClick={()=>{
                onDelete(p);
               
            }}>X</button>
        </div>
    )
}