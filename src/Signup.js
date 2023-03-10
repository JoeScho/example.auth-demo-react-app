import './App.css'
import { useState } from 'react'
import axios from 'axios'

const Signup = ({ toggleShowLoginForm }) => {
    const [signupState, setSignupState] = useState({
        username: '',
        password: ''
    })

    const handleUpdate = (e) => {
        setSignupState({
            ...signupState,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await axios.post('http://localhost:4000/signup', signupState)
            console.log('Successfully signup')
        } catch (err) {
            // handle error
        }
    }

    return (
        <form className='Form'>
            <p>Welcome! Sign up to get started.</p>
            <input type="text" placeholder="username" name="username" onChange={handleUpdate} />
            <input type="password" placeholder="password" name="password" onChange={handleUpdate} />
            <input type="submit" onClick={handleSubmit}/>
            <button className='subtext' onClick={toggleShowLoginForm}>Already have an account? Click here to sign in</button>
        </form>
    )
}

export default Signup