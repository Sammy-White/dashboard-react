import React from 'react'
import { Link} from 'react-router-dom'
// import {createBrowserHistory} from 'history'
// import history from 'history/browser'



class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
                name: "",
                email: "",
                password: "",
                phone: ""              
        }
        this.onChange = this.onChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    onChange(e) {
        let { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        // console.log(this.state)
        // let history = createBrowserHistory()
        let {history} = this.props
        if(this.state.name === "" || this.state.email ==="" || this.state.phone === "" || this.state.password === ""){
            return alert('Input field cannot be empty')
        }
        fetch('http://206.189.124.254:9000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((res) => {
            // console.log(res)
            if(res.ok === true || res.status === 200){
                history.push('/dashboard')
            }
            return res.json();
        }).then((res) => {
            // !res.error && history.push('/dashboard')
            console.log(res)
        }).catch((err) => {
                console.log(err)
        })
    
    }

    render() {
        // console.log(this.state.username)
        return (
            <div className="form-page">
                <form className="form" onSubmit={this.handleSubmit} >
                    <h3>Admin Signup</h3>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.onChange}
                        placeholder="Enter your name"
                    />

                    <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        placeholder="Email address"
                    />

                    <input
                        type="text"
                        name="phone"
                        value={this.state.phone}
                        onChange={e => this.onChange(e)}
                        placeholder="Phone number"
                    />

                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        placeholder="password"
                    />
                    
                    <button>Submit</button>
                    
                    <p className="message">Already have an Account? <Link to="/signin" ><span>Sign in</span></Link></p>
                </form>
            </div>
        )
    }
}

export default SignUp