import React, { useState } from 'react'
import Child from './Child'
import './new.css'
import {Form,Button} from 'react-bootstrap';


 function New({name,fonts}) {
    var[count,setcount]=useState(0)
    const counts=()=>{
        setcount(count+1)
    }

    const decounts=()=>{
      setcount(count-1)
  }
  return (
    <div className='newstyle' style={{background:name}}>
    <h1 style={{color:fonts}}>{count}</h1>
    <button onClick={counts}>+</button>
    <button onClick={decounts}>-</button>
    
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
      
    
  )
}

export default New




