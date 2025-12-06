import store from '../store';
import { http, httpFile, httpWeb } from './http_service';
import jwt from 'jsonwebtoken';

export function register(user){
    return http().post('/auth/register', user);
}

export function registerWithSocialMedia(user) {
    return http().post('/auth/register-by-social', user)
    .then(res => {
        if (res.status === 200) {
            setToken(res.data);
        }
        return res;
    });
}

export function login(user) {
    return http().post('/auth/login', user)
    .then(res => {
        if (res.status === 200) {
            setToken(res.data);
        }

        return res;
    });
}

export function loginForWeb(user) {
    return httpWeb().post('/auth/login', user);
}

export function logoutFromWeb() {
    return httpWeb().get('/auth/logout');
}

function setToken(data) {
    const token = generateJWT(data);
    localStorage.setItem('flip-music-softgear-2020', token);
    store.dispatch('authenticate', data.user);
}

function generateJWT(data) {
    return jwt.sign({user: data}, 'college27f4fc3d7755961ce9com4ab143inventory6d324bf294178sabysoftgear2020');
}

export function isLoggedIn() {
    const token = localStorage.getItem('flip-music-softgear-2020');
    return token != null;
}

function decodeToken() {
    const token = getToken();
    if (!token) {
        return null;
    }
    return jwt.decode(token);
}


function getToken() {
    return localStorage.getItem('flip-music-softgear-2020');
}


export function getAccessToken() {
    const token = localStorage.getItem('flip-music-softgear-2020');
     if (!token) {
        return null;
    }
    const tokenData = jwt.decode(token);
    return tokenData.user.access_token;
}

export function getProfile() {
    return http().get('/auth/profile');
}

export function logout() {
    http().get('/auth/logout');
    localStorage.removeItem('flip-music-softgear-2020');
    store.dispatch('authenticate');
}

export function getUserRole() {
    const token = decodeToken();
    if (!token) {
        return null;
    }
    return token.user.user.role;
}

export function resetPasswordRequest(request) {
    return http().post('/auth/reset-password-request', request);
}

export function resetPassword(request) {
    return http().post('/auth/reset-password', request);
}


