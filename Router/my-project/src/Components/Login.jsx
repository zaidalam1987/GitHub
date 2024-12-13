import React from 'react'
import { useParams } from 'react-router-dom'
const Login = () => {
    const params = useParams()
  return (
    <div>
        Hello this is username {params.username}
    </div>
  )
}
export default Login