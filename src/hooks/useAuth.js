import React from "react";
import Cookies from 'js-cookie'
import axios from "axios";

import endPoints from "../services/api/index";


function useAuth() {
    const [user, setUser] = React.useState(null);

    const signIn = async (userEmail, userPassword) => {
        
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
            const {data: userProfile} = await axios.get(endPoints.auth.profile)
            setUser(userProfile);
        }
      };

    return {
        user,
        signIn,
    };
}

export {useAuth};
