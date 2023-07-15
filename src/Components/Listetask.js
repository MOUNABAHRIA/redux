import React from 'react'
import {useDispatch,  useSelector } from 'react-redux'
import { checktask, deletetask } from '../Redux1/action'
import {useRef} from'react'



const Listetask = () => {
  const dispatch= useDispatch();
  const titleRef = useRef(null);
 
    const tasks= useSelector((state)=>state.reducer.tasks);
    const handleTitleClick = () => {
      titleRef.current.contentEditable = "true";
      titleRef.current.focus();
    };
    const handleTitleBlur = () => {
     titleRef.current.contentEditable = "false"}
     
    const taskcheck=(id)=>{
      dispatch(checktask(id))
     }
  

  return (
    <div>

        {tasks.map((task)=>{
                return(
                    <div>
                              <span
          className="title"
          ref={titleRef}
          onClick={handleTitleClick}
          onBlur={handleTitleBlur}
          style={{ color: "white" }}
        >
         {task.name}
        </span> 
                  <label> <input className='check' type='checkbox' onClick={() => taskcheck(task.id)}/></label>
                      <p >{task.id}</p>

                  <p>{task.description}</p>
                 <button onClick={()=>dispatch(deletetask(task.id))}>delete</button>
         
                    </div>
                )
            })
}
    
  
  </div>
  )
}



export default Listetask