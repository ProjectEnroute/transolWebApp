import React from 'react';
import { useHistory } from 'react-router-dom';

import './WelcomePage.css';

function WelcomePage() {
  const hist = useHistory();
  return (
    <div className="welcomepageBackground">
      <div className="welcomeTextDiv">
        <h1>Transol</h1>
        <h3>Your walk with ease</h3>
      </div>
      <div className="welcomeButtonDiv">
        <button onClick={() => hist.push('/signup')} className="signUpButton">
          Sign up
        </button>
        <button className="signInButton">
          Already have an account? sign in
        </button>
      </div>
    </div>
  );
}

export default WelcomePage;
