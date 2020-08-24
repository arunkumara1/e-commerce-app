import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import useStyles from './style';
import { auth, provider } from '../../firebase/firebase';
import $ from 'jquery';

const login = () => {

    const [user, setUser] = useState({});

    const location = useLocation();
    const history = useHistory();

    const classes = useStyles();

    useEffect(() => {
      
    }, []);

    const signInHandler = () => {
        auth.signInWithPopup(provider)
            .then(response => {
                console.log(response);
                setUser(response);
                location.search = '?' + response.user.displayName;
                localStorage.setItem('user', response.user.displayName);
                history.push('/shop');
            }).catch(err => {
                console.log(err);
            });
    }

    return (
        <div className={classes.root}>
            <Button variant="contained" color="primary"
                onClick={() => signInHandler()}>
                Sign in with Google
            </Button>
        </div>
    );
}

export default login;