import React, { useState , useEffect } from 'react';
import axios from 'axios'

 function UserList () {
     const [posts,setPosts]= useState([])

     useEffect(()=>{
     axios.get('https://jsonplaceholder.typicode.com/users')
     .then(res=>{
         console.log(res)
         setPosts(res.data)
     })
     .catch(err=>{
         console.log(err)
     })
    },[])
  
  return (
    <div>
  
  <p>
      {
    posts.map(post=><li key={post.id}>{post.username}</li>)
      }
  </p>
     
    </div>
  )
}
export default UserList
