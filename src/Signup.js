import './App.css'
import { useState } from 'react'
import axios from 'axios'

const ONE_DAY_IN_SECONDS = 60 * 60 * 24

const Signup = ({ setSessionId, toggleShowLoginForm, cookies }) => {
    const [signupState, setSignupState] = useState({
        username: '',
        password: ''
    })
    const [errorState, setErrorState] = useState('')

    const handleUpdate = (e) => {
        setSignupState({
            ...signupState,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post('http://localhost:4000/signup', signupState, { timeout: 1000 })
            console.log('Successfully signed up')
            setSessionId(response.data.sessionId)
            cookies.set('sessionId', response.data.sessionId, { maxAge: ONE_DAY_IN_SECONDS })
        } catch (err) {
            console.log(err)
            setErrorState(err?.response?.data || 'Something went wrong')
        }
    }

    return (
        <>
            <form className='Form'>
                <p>Welcome! Sign up to get started.</p>
                <input type="text" placeholder="username" name="username" onChange={handleUpdate} />
                <input type="password" placeholder="password" name="password" onChange={handleUpdate} />
                <input type="submit" onClick={handleSubmit} />
                <button className='subtext' onClick={toggleShowLoginForm}>Already have an account? Click here to sign in</button>
            </form>
            {errorState && <p className='ErrorText'>{errorState}</p>}
        </>
    )
}

export default Signup