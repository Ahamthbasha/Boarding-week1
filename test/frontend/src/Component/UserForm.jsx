import React from 'react'
import { useState } from 'react'

const UserForm = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [error,setError] = useState("")
    const [success,setSuccess] = useState("")

    const submit = async (e)=>{
        e.preventDefault()

        try {
            const response = await fetch(`http://localhost:3000/api/user/createUser`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({name,email})
            })

            if(!response.ok){
                throw new Error("something went wrong")
            }

            setSuccess("user created Successfully")
            setName("")
            setEmail("")
            setError("")
        } catch (error) {
            setError(error)
        }
    }


  return (
    <div>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />

    <br />

    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />

    <button onClick={submit}>submit</button>

    {error && <p>{error}</p>}
    {success && <p>{success}</p>}  
    </div>
  )
}

export default UserForm
