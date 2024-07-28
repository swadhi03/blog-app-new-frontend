import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavBar from './NavBar'

const SignIn = () => {

    const navigate = useNavigate()

    const [data,changeData]=useState(
    {"email":"","password":""}
)
    const inputHandler=(event)=>{
        changeData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8080/signin",data).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="Incorrect Password")
                    {
                        alert("Incorrect Password")
                    }
                    else if(response.data.status=="Invalid Email Id")
                    {
                        alert("Invalid Email Id")
                    }
                    else
                    {
                        let token = response.data.token
                        let userId = response.data.userId

                        console.log(token)
                        console.log(userId)
                        sessionStorage.setItem("userId",userId)
                        sessionStorage.setItem("token",token)

                        navigate("/create")
                    }
            }
        ).catch(
            (error)=>{
                console.log(error.message)
                alert(error.message)
            }
        ).finally()
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-md-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Email-Id</label>
                            <input type="email" className="form-control" name='email' value={data.email} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" className="form-control" name='password' value={data.password} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue}>Sign In</button>
                        </div>
                        <div>
                            <Link to="/signup" className='btn btn-primary'>Existing User</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn