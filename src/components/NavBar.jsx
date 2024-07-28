import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate=useNavigate()
    const Logout=()=>{
        sessionStorage.clear()
        navigate("/")
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Blog-App</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/creatpost">Create Post</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/mypost">My Posts</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/viewall">Posts</a>
                            </li>
                            <li class="nav-item">
                                <button onClick={Logout} className="btn btn-success">Logout</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar