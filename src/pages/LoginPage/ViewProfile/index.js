import React, { useEffect, useState } from 'react';
import { Link, Redirect, useLocation } from 'react-router-dom';

import { Navbar } from '../../../components/componentsLogin/Navbar';
import { Sidebar } from '../../../components/componentsLogin/Sidebar';

import api from '../../../config/configApi';

export const ViewProfile = () => {

    const { state } = useLocation();

    const [data, setData] = useState('');
    const [endImg, setEndImg] = useState('');

    const [status, setStatus] = useState({
        type: state ? state.type : "",
        mensagem: state ? state.mensagem : ""
    });

    useEffect(() => {
        const getUser = async () => {

            const headers = {
                'headers': {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }

            await api.get("/game/auth/players/view-profile", headers)
                .then((response) => {
                    if (response.data.user) {
                        setEndImg(response.data.endImage);
                        setData(response.data.user);
                    } else {
                        setStatus({
                            type: 'redError',
                            mensagem: "Erro: Perfil não encontrado!"
                        });
                    }

                }).catch((err) => {
                    if (err.response) {
                        setStatus({
                            type: 'redError',
                            mensagem: err.response.data.mensagem
                        });
                    } else {
                        setStatus({
                            type: 'redError',
                            mensagem: "Erro: Tente mais tarde!"
                        });
                    }
                });
        }

        getUser();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="content">
                <Sidebar active="profile" />

                <div className="wrapper">
                    <div className="row">

                        <div className="top-content-adm">
                            <span className="title-content">Profile</span>
                            <div className="top-content-adm-right">
                                <Link to="/game/auth/players/edit-profile"><button type="button" className="btn-warning">Edit profile</button></Link>{" "}
                                <Link to="/game/auth/players/edit-profile-password"><button type="button" className="btn-warning">Change password</button></Link>{" "}
                                <Link to="/game/auth/players/edit-profile-image"><button type="button" className="btn-warning">Change Image</button></Link>{" "}
                            </div>
                        </div>

                        <div className="alert-content-adm">
                            {status.type === 'redError' ?
                                <Redirect to={{
                                    pathname: '/game/auth/players/sign-in',
                                    state: {
                                        type: "error",
                                        mensagem: status.mensagem
                                    }
                                }} /> : ""}
                            {status.type === 'success' ? <p className="alert-success">{status.mensagem}</p> : ""}
                        </div>

                        

                        <div class="content-adm">
                            <div class="view-det-adm">
                                <span class="view-adm-title">Image: </span>
                                <span class="view-adm-info">{<img src={endImg} alt="User Image" width="150" height="150" />}</span>
                            </div>

                            <div class="view-det-adm">
                                <span class="view-adm-title">ID: </span>
                                <span class="view-adm-info">{data.id}</span>
                            </div>

                            <div class="view-det-adm">
                                <span class="view-adm-title">Name: </span>
                                <span class="view-adm-info">{data.nickname}</span>
                            </div>

                            <div class="view-det-adm">
                                <span class="view-adm-title">E-mail: </span>
                                <span class="view-adm-info">{data.email}</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}