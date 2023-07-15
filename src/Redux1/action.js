
export const addTask =( newTask )=> {
    return {
        type: "Addnew",
        payload:{
            id: Math.random(),
            description: newTask,
            isDone: false,
        }
    
}
}
export const checktask=(id)=> {
    return {
        type: "checktask",
        payload:id
}
}
export const deletetask=(id)=> {
    return {
        type: "deletetask",
        payload:id
}}
export const filterTask=(input)=> {
    return {
        type: "filterTask",
        payload:input
}
}
export const handleTitleClick=(name)=> {
    return {
        type: "handleTitleClick",
        payload:name
}
}
export const handleTitleBlur=(name)=> {
    return {
        type: "handleTitleBlur",
        payload:name
}
}
