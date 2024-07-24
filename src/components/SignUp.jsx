import axios from 'axios'
import React, { useState } from 'react'

const SignUp = () => {
    const [data,changeData]=useState([])
    const inputHandler=(event)=>{
        changeData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8080/signup",data).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success")
                    {
                        alert("success")
                    }
                    else{
                        alert("failed")
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
                            <button className="btn btn-success" onClick={readValue}>Sign Up</button>
                        </div>
                    </div>
                    <a href="/signin">Existing user Click Here</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp