import axios from 'axios'
import React, { useState } from 'react'

const SignUp = () => {
    const [data,changeData]=useState(
        {"name":"", "email":"", "password":"", "cfmpassword":""}
    )
    const inputHandler=(event)=>{
        changeData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        if (data.password==data.cfmpassword) {
            let newInput={"name":data.name, "email":data.email, "password":data.password}


        axios.post("http://localhost:8080/signup",newInput).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success")
                    {
                        alert("Registered Successfully")
                        changeData({"name":"", "email":"", "password":"", "cfmpassword":""})
                    }
                    else{
                        alert("Registration failed")
                        changeData({"name":"", "email":"", "password":"", "cfmpassword":""})
                    }
            }
        ).catch(
            (error)=>{
                console.log(error.message)
                alert(error.message)
            }
        ).finally()
        } else {
            alert("Password and Confirm password doesn't match")
        }
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-md-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">User Name</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Email-Id</label>
                            <input type="email" className="form-control" name='email' value={data.email} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" className="form-control" name='password' value={data.password} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" name='cfmpassword' value={data.cfmpassword} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue}>Sign Up</button>
                        </div>
                        <div>
                            <a href="/signin" className='btn btn-primary'>BackTo Login</a>
                        </div>
                    </div>
        
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp