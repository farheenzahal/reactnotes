import React from 'react'

const Child = ({student}) => {
  return(
  <>
  {student.map((key)=>{
  return(
  <div style={{background:key.back,color:key.fonts}}>
  <h1>{key.name}</h1>
  <h1>{key.age}</h1>
  </div>
    )}
    )}
    </>
    
  )
}

export default Child
