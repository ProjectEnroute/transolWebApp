import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import app from '../../firebase';
import './SignUpPage.css';
import firebase from 'firebase';

const store = app.storage();

function SignUpPage() {
  const hist = useHistory();
  const [flip, setFlip] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [comfirmPassword, setComfirmPassword] = useState('');

  const Flipping = () => {
    setFlip(!flip);
  };

  const newUser = app.firestore().collection('users');

  const LoginPage = async () => {
    await app.auth().signInWithEmailAndPassword(email, password);
    hist('/');
  };

  const SignUp = async () => {
    // const newUser = await app
    //   .auth()
    //   .createUserWithEmailAndPassword(email, password);

    // await newUser.doc(newUser.user.uid).set({
    //   name,
    //   email,
    // });
    await hist.push('/');
  };

  const SignGoogle = () => {
    // hist.push("/homepage");
  };

  return (
    <div className="SignUpPageContainer">
      {flip ? (
        <center className="SignUpContent">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            onClick={() => {
              LoginPage();
            }}
          >
            {' '}
            Login
          </button>
          <button onClick={SignGoogle()}> Sign in With Google </button>
          <p>
            don't have an account{' '}
            <Link onClick={Flipping}>Create an Account </Link>
          </p>
        </center>
      ) : (
        <center className="SignUpContent">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Comfirm Password"
            value={comfirmPassword}
            onChange={(e) => {
              setComfirmPassword(e.target.value);
            }}
          />

          <button onClick={SignUp()}> Sign Up </button>
          <button onClick={SignGoogle()}> Sign Up With Google </button>
          <p>
            already have an account <Link onClick={Flipping}>Login </Link>
          </p>
        </center>
      )}
    </div>
  );
}

export default SignUpPage;
