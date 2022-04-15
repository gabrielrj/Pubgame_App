import React, { useState, useContext } from 'react';

import { Link, useHistory, useLocation } from 'react-router-dom';

import api from '../../../config/configApi';

import { Context } from '../../../Context/AuthContext';

export const Login = () => {

    const { state } = useLocation();

    const history = useHistory();

    const { signIn } = useContext(Context);

    const [user, setUser] = useState({
        nickname:"",
        email: "", 
        password: ""
    });

    const [status, setStatus] = useState({
        type: state ? state.type : "",
        mensagem: state ? state.mensagem : "",
        loading: false
    });

    const valorInput = e => setUser({ ...user, [e.target.nickname]: e.target.value });

    const loginSubmit = async e => {
        e.preventDefault();
        //console.log(user.password);
        setStatus({
            loading: true
        });

        const headers = {
            'Content-Type': 'application/json'
        }

        await api.post("/game/auth/players/sign-in", user, { headers })
            .then((response) => {
                console.log(response);
                setStatus({
                    /*type: 'success',
                    mensagem: response.data.mensagem,*/
                    loading: false
                });
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('nickname', response.data.user.nickname);
                localStorage.setItem('image', response.data.user.image);
                signIn(true);
                return history.push('/game/players');
            }).catch((err) => {
                if (err.response) {
                    //console.log(err.response);
                    setStatus({
                        type: 'error',
                        mensagem: err.response.data.mensagem,
                        loading: false
                    });
                } else {
                    //console.log("Erro: tente mais tarde");
                    setStatus({
                        type: 'error',
                        mensagem: "Erro: tente mais tarde!",
                        loading: false
                    });
                }
            });
    }

    return (
        <section>
        <div className="container">
        <div className="main-heading register">
            <h2 className="fancy-font">Sing in</h2>
        </div>
        <div className="contact-field">
            <div className="row formula">   
                <div className="col-1 col-md-3 col-xxl-1" ></div>
                <div className="form-box form-contact col-12 col-md-6 col-xxl-10 cent animate__animated animate__zoomInDown">
                    <div className="octop">
                    <h3>Sign in</h3>
                    <form onSubmit={loginSubmit} method="post">
                        {status.type === 'error' ? <p className="alert-danger">{status.mensagem}</p> : ""}
                        {status.type === 'success' ? <p className="alert-success">{status.mensagem}</p> : ""}
                        
                        {status.loading ? <p className="alert-success">Validating...</p> : ""}
                        
                        {/*<div className="row formula">
                            <input className="octa-shape" type="text" name="name"
                                placeholder="Nickname" onChange={valorInput} required />
                        </div>*/}
                        <div className="row formula">
                            <input className="octa-shape" type="text" name="email" 
                                placeholder="Email" pattern="[^@\s]+@[^@\s]+\.[^@\s]+" onChange={valorInput} required />
                            </div>{/*
                        <div className="row formula">
                            <input className="octa-shape" type="text" name="id" 
                                placeholder="MetaMask" onChange="valorInput()" required />
                        </div> */}
                        <div className="row formula">
                            <input className="octa-shape" type="password" name="password" 
                                placeholder="Password" onChange={valorInput} required />
                        </div>
                        {status.loading ? <button type="submit" className="main-btn" disabled>Loanding...</button> : <button type="submit" className="main-btn">Log in</button>}
                        <br/>
                        <p className="text-center">Don't have an account? <br/><Link to="/game/auth/players/sign-up" className="link-pg-login"> Sign Up</Link> </p>
                       <p className="text-center"> <Link to="/game/auth/players/recover-password" className="link-pg-login">Forgot password</Link></p>
                    </form>
                </div>
                </div>
                <div className="col-1 col-md-3 col-xxl-1" ></div>
            </div>
        </div>
        <br/><br/><br/><br/>
    </div>
</section>     
    );
};