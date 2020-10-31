import React from 'react'
import {Link} from 'react-router-dom'


function SignIn() {
    return (
        <div className="form-page">
            <form className="form">
                <h3>Admin Signin</h3>
                <input type="email" placeholder="Email address" autoComplete="off" required />
                <input type="password" placeholder="password" autoComplete="off" required />
                <button>Submit</button>
                <p className="message">Dont't have an account? <Link to="/"><span>Sign Up</span></Link></p>
            </form>
        </div>
    )
}

export default SignIn