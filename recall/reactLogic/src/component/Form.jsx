import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const [form,setForm] = useState({
        name:'',
        email:'',
        phoneNo:'',
        password:'',
        confirmPassword:''
    })

    const [error,setError] = useState([])
    
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        const allError = []

        if(form.name.trim().length == 0){
            allError.push('name should not be empty')
        }

        if(form.email.trim().length == 0){
            allError.push('email should not be empty')
        }

        if(form.phoneNo.trim().length == 0){
            allError.push('phone no should not be empty')
        }

        if(form.password.trim().length == 0){
            allError.push('password should not be empty')
        }

        if(form.confirmPassword.trim().length == 0){
            allError.push('confirmPassword should not be empty')
        }

        if(form.password != form.confirmPassword){
            allError.push("confirmPassword would be same as password")
        }

        if(allError.length > 0){
            setError((error)=>allError)
            return
        }
        else{
            navigate('/otp')
        }
    }

    const handleChange = (e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }

  return (
    <form onSubmit={handleSubmit}>
      <h1>SignUp Form</h1>
      <input type="text" name='name' placeholder='name' value={form.name} onChange={handleChange}/>
      <input type="text" name='email' placeholder='email' value={form.email} onChange={handleChange}/>
      <input type="text" name='phoneNo' placeholder='number' value={form.phoneNo} onChange={handleChange}/>
      <input type="text" name='password' placeholder='password' value={form.password} onChange={handleChange} />
      <input type="text" name='confirmPassword' placeholder='confirmPassword' value={form.confirmPassword} onChange={handleChange}/>
      <button type='submit'>submit</button>

      {
        error.length > 0 && (
            <>
            <ul>
            {
                error.map((val)=>{
                   return <li>{val}</li>
                })
            }
            </ul>            
            </>
        )
      }
    </form>
  )
}

export default Form
