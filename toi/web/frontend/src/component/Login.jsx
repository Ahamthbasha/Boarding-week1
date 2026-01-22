import React from 'react'
import { useState } from 'react'
import createUser from '../api/userActions'

const Login = () => {
    const [name,setName] = useState('')
    const [nameError,setNameError] = useState([])
    const [email,setEmail] = useState('')
    const [emailError,setEmailError] = useState([])

    const login = async()=>{
        let nameError = []
        let emailError = []
        if(name.length == 0){
            nameError.push("name is required")
        }

        if(name.length < 5){
                nameError.push('minimum length should be five')
        }

        if(email.length == 0){
                emailError.push('email must')
        }
        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,}$/
        if(email.length > 0 && !emailRegex.test(email)){
                emailError.push("It does not match email pattern")
        }

        setNameError(nameError)
        setEmailError(emailError)

        if(nameError.length == 0 && emailError.length == 0){
            try {
                const result = await createUser({name,email})

                if(result.data.success){
                    alert("user created successfully")
                    setEmail('')
                    setName('')
                }else{
                    if(result.data.conflict){
                        alert("user already exists")
                    }
                }
            } catch (error) {
                alert(`${error}`)
                console.log(error)
            }
        }
        }
  return (
    <div>
        <label>Enter your name:</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        {
            nameError.length > 0 && 
            <div>
                <ul>
                    {
                       nameError.map((val)=>{
                        return   <li>{val}</li>
                        })
                    }
                </ul>
            </div>
        }
        <br />
        <label>Enter your email:</label>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>

        {
            emailError.length > 0 &&
            <div>
                <ul>
                    {emailError.map((val)=>{
                        return <li>{val}</li>
                    })}
                </ul>
            </div>
        }
        <br />
        <button onClick={login}>Create User</button>
    </div>
  )
}

export default Login
