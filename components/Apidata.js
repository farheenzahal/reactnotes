import React, {useEffect,useState} from 'react'

const Apidata = () => {
    const[posts,setpost]=useState([])

    useEffect(()=>{
       fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => setpost(posts))
    })
  return (
    <div>
      {posts.map((post)=>{
        return(
            <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            </>
        )
      })}
    </div>
  )
}

export default Apidata
