export default function TodoFooter({proj,onDleteComp}){
    let a=proj.filter((pr)=>{
        return  pr.isComplited
    })
    return(
        <div>
            <span>{a.length}/{proj.length} complited</span>
            <button onClick={onDleteComp}>Clear complited</button>
        </div>
    )
}