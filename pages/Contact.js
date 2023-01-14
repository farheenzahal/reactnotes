import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <div >
      <h1>MY phone no is 1234567890</h1>
    <>
    <Button variant="primary"><li><Link to="primary">py</Link></li></Button>
    <Button variant="success"><li><Link to="success">su</Link></li></Button>
    <Outlet/>
    </>
    </div>
  )
}

export default Contact
