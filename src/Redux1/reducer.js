const intitialState={
    tasks:[{
        id: Math.random(),
        description: "Task1",
        isDone: false
    },{
        id: Math.random(),
        description: "Task2",
        isDone: false
    },
    {
        id: Math.random(),
        description: "Task3",
        isDone: false
    },]
}
const reducer=(state=intitialState, action)=>{
    switch(action.type){
    case "Addnew" :
    return{
        tasks:[...state.tasks,action.payload]}

    case "checktask" :
    return{
        tasks: [...state.tasks].map((task) =>
        task.id === action.payload ? {...task, isDone: !task.isDone} : task)
    }
    case "deletetask" :
        return{
            tasks: [...state.tasks].filter((task) => task.id !== action.payload) 
        }
        
    case "filterTask" :
        return{
        tasks: [...state.tasks].filter((task) => task.isDone === action.payload) 
            }
     case "handleTitleClick" :
        return{
        tasks: [...state.tasks]. titleRef((task) => task.name=== action.payload) 
            }
            case "handleTitleBlur" :
        return{
        tasks: [...state.tasks]. titleRef((task) => task.name !== action.payload) 
            }
  
                
    default:
    return state;
    }

    }

export default reducer