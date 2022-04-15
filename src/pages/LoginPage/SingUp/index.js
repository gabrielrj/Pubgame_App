import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as yup from 'yup';

import api from '../../../config/configApi';

{/*--------------------------Página de Cadastro--------------------------- */}

export const SingUp = () => {

    const [user, setUser] = useState({
        nickname: '',
        email: '',
        password: '',
        password_confirmation: ''
    });

    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    });

    const valueInput = e => setUser({ ...user, [e.target.nickname]: e.target.value });

    const addUser = async e => {
        e.preventDefault();

        if (!(await validate())) return;

        const headers = {
            'headers': {
                'Content-Type': 'application/json'
            }
        };

        await api.post('game/auth/players/sign-up', user, headers)
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
                        mensagem: "Erro: Tente novamente!"
                    });
                }
            });

    }
{/*------------------------------------Obrigatoriedade dos campos---------------------------------------------*/}
    async function validate() {
        let schema = yup.object().shape({
            password: yup.string("Erro: Necessário preencher o campo senha!")
                .required("Erro: Necessário preencher o campo senha!")
                .min(6, "Erro: A senha deve ter no mínimo 6 caracteres!"),
            email: yup.string("Erro: Necessário preencher o campo e-mail!")
                .email("Erro: Necessário preencher o campo e-mail!")
                .required("Erro: Necessário preencher o campo e-mail!"),
            nickname: yup.string("Erro: Necessário preencher o campo nome!")
                .required("Erro: Necessário preencher o campo nome!")
        }
        );

{/*---------------------------------Confirmação das senhas-----------------------------------------*/}

            var password = document.getElementById("password"), 
            password_confirmation = document.getElementById("confirm_password");

            function validatePassword(){
            if(password.value != password_confirmation.value) {
                password_confirmation.setCustomValidity("Passwords Don't Match");
            } else {
                password_confirmation.setCustomValidity('');
            }
            };

            password.onchange = validatePassword;
            password_confirmation.onkeyup = validatePassword;
{/*------------------------------------------------------------------------------------------------ */}


        try {
            await schema.validate({
                nickname: user.nickname,
                email: user.email,
                password: user.password,
                password_confirmation: user.password
            });
            return true;
        } catch (err) {
            setStatus({
                type: 'error',
                mensagem: err.errors
            });
            return false;
        }
    }

{/*----------------------------------------------Formulário------------------------------------------------------- */}
    return (
  <div className="container">
        <div className="main-heading register">
            <h2 className="fancy-font">Create Account</h2>
        </div>
        {status.type === 'redSuccess' ?
                    <Redirect to={{
                        pathname: '/game/auth/players/sign-in',
                        state: {
                            type: "success",
                            mensagem: status.mensagem
                        }
                    }} />
                    : ""}

        <div className="contact-field">
            <div className="row formula">   
                <div className="col-1 col-md-3 col-xxl-1" ></div>
                <div className="form-box form-contact col-12 col-md-6 col-xxl-10 cent animate__animated animate__zoomInDown">
                    <div className="octop">
                    <h3>Sign up</h3>
                    <p>Your email address is only used to send you important updates. Your nickname is how other players will identify you.</p>
                    <form onSubmit={addUser} method="post">
                    {status.type === 'error' ? <p className="alert-danger">{status.mensagem}</p> : ""}
                        <div className="row formula">
                            <input className="octa-shape" type="text" name="nickname"
                                placeholder="Nickname" onChange={valueInput} required />
                        </div>
                        <div className="row formula">
                            <input className="octa-shape" type="text" name="email" 
                                placeholder="Email" pattern="[^@\s]+@[^@\s]+\.[^@\s]+" onChange={valueInput} required />
                            </div>
                        {/*<div className="row formula">
                            <input className="octa-shape" type="text" name="id" 
                                placeholder="MetaMask" onChange="valueInput()" required />
                        </div> */}
                        <div className="row formula">
                            <input className="octa-shape" type="password" name="password"
                            id='password' placeholder="Password" onChange={valueInput} required />
                        </div>
                        <div className="row formula">
                            <input className="octa-shape" type="password" name="password_confirmation" id='confirm_password'
                                placeholder="Confirm password" onChange={valueInput} required />
                        </div>
                        <div className="row formula">
                            <button className="main-btn" type="submit">Sign Up
                            </button>
                        </div>
                        <br/>
                        <div className="row formula"><p className="text-center">Or</p></div>
                        
            {/*----------------------------------- Registro rápido com API's do google-------------------------------------------------
                        
                        <div className="row formula">
                            <button className="spc-btn google-button" type="submit">Continuar com o Google
                            </button>
                        </div>
                        <div className="row formula">
                            <button className="spc-btn facebook-button" type="submit">Continuar com o Facebook
                            </button>
                        </div>
                        <div className="row formula">
                            <button className="spc-btn microsoft-button" type="submit">Continuar com o Microsoft
                            </button>
                        </div>
                        <div className="row formula">
                            <button className="spc-btn apple-button" type="submit">Continuar com a Apple
                            </button>
                        </div> 
                        
            -------------------------------------------------------------------------------------------------------------*/}
                        <br/>
                        <p className="text-center">Already have an account? <br/><Link to="/game/auth/players/sign-in" className="link-pg-login"> Sign In</Link> </p>
                        <p className="respond-message"></p>
                    </form>
                </div>
                </div>
                <div className="col-1 col-md-3 col-xxl-1" ></div>
            </div>
        </div>
        <div className="contact-field"></div>
    </div>      

    );
};