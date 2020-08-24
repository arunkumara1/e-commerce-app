import React, { useEffect , useState } from 'react';
import { useLocation, useHistory, useParams } from 'react-router-dom';
import alanBtn from '@alan-ai/alan-sdk-web';
import { Button } from '@material-ui/core';
import { auth, provider } from '../../firebase/firebase';
import ShopCards from '../shopCards/shopCards';
import $ from 'jquery';

const ALAN_KEY = 'e1ec14cd71ba6e99eb2bc1664815f62d2e956eca572e1d8b807a3e2338fdd0dc/stage';

const shop = () => {
    const [ products , setProducts ] = useState([]); 
    // const [ activeProducts , setActiveProducts ] = useState(0); 


    const location = useLocation();
    const history = useHistory();
    // const isAuthenticated = useParams();

    useEffect(() => {
        alanBtn({
            key: ALAN_KEY,
            onCommand: ({ command, toReact }) => {
                if (command === 'show') {
                    console.log(toReact);
                    setProducts(toReact);
                }
            }
        });
        console.log(localStorage.getItem('user'));
        console.log(location.search);
    }, [])


    const signOutHandler = () => {
        auth.signOut().then(function () {
            // Sign-out successful.
            localStorage.removeItem('user');
            history.push('/');
            // $('.alanBtn').style = "display:none";
        }).catch(function (error) {
            // An error happened.
        });

    }

    if (!localStorage.getItem('user')) {
        history.push('/');
    }

    return (
        <div className="App">
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload pls
          </p>
            <Button variant="contained" color="primary"
                onClick={() => signOutHandler()}>
                Log out
            </Button>
            <ShopCards products={products} />
        </div>
    );
}

export default shop;