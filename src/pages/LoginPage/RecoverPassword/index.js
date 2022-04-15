import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import api from '../../../config/configApi';

export const RecoverPassword = () => {

    const [user, setUser] = useState({
        email: "",
        url: "https://143.244.184.201/api/game/auth/players/update-password/"
    });

    const [status, setStatus] = useState({
        type: "",
        mensagem: "",
        loading: false
    });

    const valorInput = e => setUser({ ...user, [e.target.name]: e.target.value });

    const recoverPass = async e => {
        e.preventDefault();

        setStatus({
            loading: true
        });

        const headers = {
            'Content-Type': 'application/json'
        }

        await api.post("/game/auth/players/recover-password", user, { headers })
            .then((response) => {
                setStatus({
                    type: 'redSuccess',
                    mensagem: response.data.mensagem,
                    loading: false
                });
            }).catch((err) => {
                if (err.response) {
                    setStatus({
                        type: 'error',
                        mensagem: err.response.data.mensagem,
                        loading: false
                    });
                } else {
                    setStatus({
                        type: 'error',
                        mensagem: "Erro: tente mais tarde!",
                        loading: false
                    });
                }
            });

    }

    return (
        <div className="d-flex">
            <div className="container-login">
                <div className="wrapper-login">
                    <div className="title">
                        <span>Recover Password</span>
                    </div>

                    {status.type === 'redSuccess' ? <Redirect to={{
                        pathname: '/game/auth/players/sign-in',
                        state: {
                            type: "success",
                            mensagem: status.mensagem
                        }
                    }} /> : ""}

                    <form onSubmit={recoverPass} className="form-login">

                        {status.type === 'error' ? <p className="alert-danger">{status.mensagem}</p> : ""}
                        {status.type === 'success' ? <p className="alert-success">{status.mensagem}</p> : ""}

                        <div className="row">
                            <i className="fas fa-envelope"></i>
                            <input type="email" name="email" placeholder="E-mail" onChange={valorInput} />
                        </div>

                        <div className="row button">
                            {status.loading ? <button type="submit" className="button-login" disabled>Sending...</button> : <button type="submit" className="button-login">Send</button>}
                        </div>

                        <div className="signup-link">
                            <Link to="/game/auth/players/sign-up" className="link-pg-login">Sing Up</Link>{" - Lembrou a senha "}
                            <Link to="/game/auth/players/sign-in" className="link-pg-login">Sign In</Link>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};