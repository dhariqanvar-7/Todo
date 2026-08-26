import React , {useState} from 'react'
function Counter(){
  const[task,setTask]=useState([])
  const handle=()=>{
    let value=document.getElementById('ty').value;
    document.getElementById('ty').value="";
    setTask([...task,value])
  }
  const rem=(ind)=>{
    setTask(task.filter((_,i)=>
      i!==ind
    ))
  }
  return(
    <div>
      <input type="text" id="ty"></input>
      <button onClick={()=>handle()}>add task</button>
      <ul>
        {task.map((t,ind)=>
         <li>{t} <button onClick={()=>rem(ind)}>delete</button></li> 
        )}
      </ul>
    </div>
  )
}
export default Counter;