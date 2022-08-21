import React from 'react';
import Cookies from 'js-cookie'
import axios from "axios";
// import {useRouter} from 'next/router';

import endPoints from "../services/api/index";

const initialState = {
    cart: [],
};


function useInitialState() {
    const [state, setState] = React.useState(initialState);
    const [userProfile, setUserProfile] = React.useState({});
    const [logged, setLogged] = React.useState(false);
    const [isAdmin, setisAdmin] = React.useState(false);
    const [products, setProducts] = React.useState([]);


    const addToCart = ( payload) => {
        if(!state.cart.includes(payload)) {
            setState({
                ...state,
                cart: [...state.cart , payload],
                logged: true,
            }); 
        } else {
            setState({
                ...state,
            });
        }
    }
    
    const removeFromCart = (payload) => {
        if(state.cart.includes(payload)){
            setState({
                ...state,
                cart: state.cart.filter(item => item.id != payload.id),
            });
        } else {
            setState({
                ...state,
            });
        }
    }

    const changeLogin = (payload) => {
        setLogged(payload);
    };

    const signIn = async (userEmail, userPassword) => {
        const user = {};
        
        const userData = {
            email: userEmail,
            password: userPassword,
        };

        const options = {
          headers: {
            accept: '*/*',
            'Content-Type': 'application/json',
          },
        };
        const { data: token } = await axios.post(endPoints.auth.login, userData, options);

        if (!!token) {
            Cookies.set('token',token.access_token, { expires: 5, sameSite: 'strict'});
            
            axios.defaults.headers.Authorization = 'Bearer ' + token.access_token;
            const {data: userResp} = await axios.get(endPoints.auth.profile);
            user = userResp; 
            setUserProfile(user);
            if(user.email === 'admin@mail.com') {
                setisAdmin(true);
                console.log("es Admin por signIn");
            }
        }
        return user;
    };

    const signOut = () => {
        Cookies.remove('token');
        changeLogin(false);
        setisAdmin(false);
        delete axios.defaults.headers.Authorization;
        window.location.href = '/';
        console.log("Adios");
    };

    const infoLoggedUser = async () => {
        const user = {};
        const token = Cookies.get('token');
        if (!!token) {
            axios.defaults.headers.Authorization = 'Bearer ' + token;
            // const {data: userResp} = await axios.get(endPoints.auth.profile)
            const userResp = await axios.get(endPoints.auth.profile)
            .then(
                userResp => {
                    // console.log(userResp);
                    user = userResp.data; 
                    setUserProfile(user);
                    setLogged(true);
                    if(user.email === 'admin@mail.com') {
                        setisAdmin(true);
                    }
            })
            .catch(function (error) {
                if (error.response.status == "401") {
                    console.log('Desloguea y limpia Cookies');
                    signOut();
                    console.log('error.response.status',error.response.status);
                } 
            });
        } 
    };

    return {
        state,
        userProfile,
        logged,
        isAdmin,
        products,
        setProducts,
        changeLogin,
        addToCart,
        removeFromCart,
        signIn,
        signOut,
        infoLoggedUser,
    };
}

export {useInitialState};