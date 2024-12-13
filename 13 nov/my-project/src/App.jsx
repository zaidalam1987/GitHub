import React, { useState, useState } from 'react'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
     .then(response => response.json())
     .then(data => setPosts(data))
     .catch(error => console.error('Error:', error))
     }, [])

  return (
    <div className = "container mx-auto p-4">
      <h1 className = "text-2xl font-bold text-center mb-8"> Posts </h1>
      <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {posts.map(post => (
          <div key={post.id} className='p-6 bg-white shadow-md rounded-md'>
            <h2 className='text-xl font-bold mb-2'>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
        </div>
  )
}

export default App
