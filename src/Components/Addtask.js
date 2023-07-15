import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addTask } from '../Redux1/action';

const Addtask = () => {
    const dispatch=useDispatch()
    const [newtask,setNewtask]=useState("") 
    const [show, setShow]=useState(false)
    const handleShow=()=>{setShow(true)}
    const handleClose=()=>{setShow(false)}
    // const NewMovie=()=>{
    //     let newMovie={
    //         id: Math.random(),
    //         name: newTitle,
    //         image: newPoster,
    //         rating: newRate,
    //         description: newDescription, 
    //     }
    //     setMovie([...movies,newMovie])
    //     handleClose()
    // }
   

 
 const Add=()=>{
    dispatch(addTask(newtask))
        handleClose()
    }
 
  return (
    <div>
         <Button  style={{background:"green"}} variant="primary" active onClick={handleShow}>
        Add New Movie
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       
           <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
         Enter New task
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e)=>setNewtask(e.target.value)}
          
          />
           </InputGroup>
           
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={Add}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
   
    </div>
  )
}

export default Addtask