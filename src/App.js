import logo from './logo.png';
import gif from './giphy.gif'
import './App.css';
import { useState } from 'react'

import Login from './Login';
import Signup from './Signup';

function App() {
  const [sessionId, setSessionId] = useState('')
  const [showLoginForm, setShowLoginForm] = useState(true)

  const toggleShowLoginForm = () => setShowLoginForm(!showLoginForm)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          sessionId ?
            <>
              <p>Nice! You logged in! Now look at this cool website</p>
              <img src={gif} className="gif" alt="gif" />
            </> :
            <>
              {
                showLoginForm ?
                  <Login setSessionId={setSessionId} toggleShowLoginForm={toggleShowLoginForm} /> :
                  <Signup toggleShowLoginForm={toggleShowLoginForm} />
              }
            </>
        }

      </header>
    </div>
  );
}

export default App;
