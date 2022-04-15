import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Context } from '../Context/AuthContext';

import { Homepage } from '../pages/HomePage';

import { Login } from '../pages/LoginPage/Login';
import { SingUp } from '../pages/LoginPage/SingUp';
import { RecoverPassword } from '../pages/LoginPage/RecoverPassword';
import { UpdatePassword } from '../pages/LoginPage/UpdatePassword';

import { Dashboard } from '../pages/LoginPage/Dashboard';
import { Pubstore } from '../pages/LoginPage/Pubstore';
import { Purchase } from '../pages/LoginPage/Purchase';
import { ViewBox } from '../pages/LoginPage/ViewBox';
import { ViewProfile } from '../pages/LoginPage/ViewProfile';
import { EditProfile } from '../pages/LoginPage/EditProfile';
import { EditProfilePassword } from '../pages/LoginPage/EditProfilePassword';
import { EditProfileImage } from '../pages/LoginPage/EditProfileImage';

function CustomRoute({ isPrivate, ...rest }) {
    const { authenticated } = useContext(Context);

    if (isPrivate && !authenticated) {
        return <Redirect to="/game/auth/players/sign-up" />
    }
    return <Route { ...rest} />
}

export default function RoutesAdm() {
    return (
        <Switch>
            <Route path="/home" component={Homepage} />
            <CustomRoute exact path="/game/auth/players/sign-in" component={Login} />
            <CustomRoute exact path="/game/auth/players/sign-up" component={SingUp} />
            <CustomRoute exact path="/game/auth/players/recover-password" component={RecoverPassword} />
            <CustomRoute exact path="/game/auth/players/update-password/:key" component={UpdatePassword} />
            <CustomRoute exact isPrivate path="/game/players" component={Dashboard} />
            <CustomRoute exact isPrivate path="game/shop/game/shop/boxes/list" component={Pubstore} />
            <CustomRoute exact isPrivate path="/game/shop/acquisition-of-box/purchase/internal:id" component={Purchase} />
            <CustomRoute exact isPrivate path="/game/players/shop/acquisition-of-box/free:id" component={ViewBox} />
            <CustomRoute exact isPrivate path="/game/auth/players/view-profile" component={ViewProfile} />
            <CustomRoute exact isPrivate path="/game/auth/players/edit-profile" component={EditProfile} />
            <CustomRoute exact isPrivate path="/game/auth/players/edit-profile-password" component={EditProfilePassword} />
            <CustomRoute exact isPrivate path="/game/auth/players/edit-profile-image" component={EditProfileImage} />
        </Switch>
    );
};