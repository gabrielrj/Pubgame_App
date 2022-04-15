import React, { useEffect, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import * as yup from 'yup';
import api from '../../../config/configApi';

export const UpdatePassword = (props) => {

    const [key] = useState(props.match.params.key);
    const [password, setPassword] = useState('');

    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    });

    useEffect(() => {

        const valKey = async () => {
            const headers = {
                'headers': {
                    'Content-Type': 'application/json'
                }
            }

            await api.get("/game/auth/players/update-password/" + key, headers)
                .then((response) => {
                    /*setStatus({
                        type: 'success',
                        mensagem: response.data.mensagem
                    });*/

                }).catch((err) => {
                    if (err.response) {
                        setStatus({
                            type: 'redDanger',
                            mensagem: err.response.data.mensagem
                        });
                    } else {
                        setStatus({
                            type: 'redDanger',
                            mensagem: "Erro: Tente mais tarde!"
                        });
                    }
                })
        }

        valKey();
    }, [key]);

    const updatePassword = async e => {
        e.preventDefault();

        if (!(await validate())) return;

        const headers = {
            'headers': {
                'Content-Type': 'application/json'
            }
        }

        await api.put("/game/auth/players/update-password/" + key, { password }, headers)
            .then((response) => {
                setStatus({
                    type: 'redSuccess',
                    mensagem: response.data.mensagem
                });
            }).catch((err) => {
                if (err.response) {
                    setStatus({
                        type: 'error',
                        mensagem: err.response.data.mensagem
                    });
                } else {
                    setStatus({
                        type: 'error',
                        mensagem: 'Erro: Tente mais tarde!'
                    });
                }
            });
    }

    async function validate() {
        let schema = yup.object().shape({
            password: yup.string("Erro: Necessário preencher o campo senha!")
                .required("Erro: Necessário preencher o campo senha!")
                .min(6, "Erro: A senha deve ter no mínimo 6 caracteres!"),
        });

        try {
            await schema.validate({ password, });
            return true;
        } catch (err) {
            setStatus({ type: 'error', mensagem: err.errors });
            return false;
        }
    }

    return (
        <div className="d-flex">
            <div className="container-login">
                <div className="wrapper-login">
                    <div className="title">
                        <span>Editar a Senha</span>
                    </div>
                    {status.type === 'redDanger' ? <Redirect to={{
                        pathname: '/game/auth/players/sign-in',
                        state: {
                            type: "error",
                            mensagem: status.mensagem
                        }
                    }} /> : ""}
                    {status.type === 'redSuccess' ? <Redirect to={{
                        pathname: '/game/auth/players/sign-in',
                        state: {
                            type: "success",
                            mensagem: status.mensagem
                        }
                    }} /> : ""}

                    <form onSubmit={updatePassword} className="form-login">

                        {status.type === 'error' ? <p className="alert-danger">{status.mensagem}</p> : ""}
                        {status.type === 'success' ? <p className="alert-success">{status.mensagem}</p> : ""}

                        <div className="row">
                            <i className="fas fa-lock"></i>
                            <input type="password" name="password" placeholder="Password" autoComplete="on" onChange={text => setPassword(text.target.value)} />
                        </div>

                        <div className="row button">
                            <button type="submit" className="button-login" >Save</button>
                        </div>

                        <div className="signup-link">
                            {"Remembered the password"}
                            <Link to="/game/auth/players/sign-in" className="link-pg-login">Sign In</Link>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}