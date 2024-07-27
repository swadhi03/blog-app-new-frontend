import React, { useState } from 'react'

const CreatePost = () => {
    const [input,setInput]=useState(
        {"message":"","date":"","userId":sessionStorage.getItem("userId")}
)

    const InputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})

    const readValues=()=>{
        console.log(input)
    }

  return (
    <div>
    <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Post a message</label>
                        <textarea name="message" value={input.message} className="form-control" onChange={InputHandler}></textarea>

                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Date of Post</label>
                        <input type="date" name="date" id="" className="form-control" onChange={InputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button  onClick={readValues} className="btn btn-success">POST</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>  
)
}
}
export default CreatePost