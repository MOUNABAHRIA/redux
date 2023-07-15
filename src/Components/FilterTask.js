import React from 'react'
import {useDispatch,  useSelector } from 'react-redux'
import { checktask, deletetask } from '../Redux1/action'
import { filterTask } from '../Redux1/action'

const FilterTask= () => {
    const dispatch= useDispatch();
   
      
  
    return (
      <div>
        <div className='Container'>
        <div className='row'>
        <div className='col'>
            <button variant="primary" onClick={()=>dispatch(filterTask(true))}>
                isDone
            </button>

        </div>
        <div className='col'>
        <button variant="Second" onClick={()=>dispatch(filterTask(false))}>
                isDonenot
            </button>
            </div>
        </div>
        </div>

      </div>)}
      export default FilterTask