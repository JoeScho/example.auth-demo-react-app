import './App.css'
import { useState } from 'react'
import axios from 'axios'

const ONE_DAY_IN_SECONDS = 60 * 60 * 24

const Login = ({ setSessionId, toggleShowLoginForm, cookies }) => {
    const [loginState, setLoginState] = useState({
        username: '',
        password: ''
    })

    const handleUpdate = (e) => {
        setLoginState({
            ...loginState,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post('http://localhost:4000/login', loginState)
            console.log('Successfully logged in, session ID: ', response.data.sessionId)
            setSessionId(response.data.sessionId)
            cookies.set('sessionId', response.data.sessionId, { maxAge: ONE_DAY_IN_SECONDS })
        } catch (err) {
            // handle error
            console.log(err)
        }
    }

    return (
        <form className='Form'>
            <p>Welcome! Log in to get started.</p>
            <input type="text" placeholder="username" name="username" onChange={handleUpdate} />
            <input type="password" placeholder="password" name="password" onChange={handleUpdate} />
            <input type="submit" onClick={handleSubmit}/>
            <button className='subtext' onClick={toggleShowLoginForm}>Don't have an account? Click here to sign up</button>
        </form>
    )
}

export default Login