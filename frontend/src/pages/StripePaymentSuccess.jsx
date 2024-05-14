import React from 'react';
//import { useEffect, useState, useCallback } from "react";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { getUserInfo } from '../features/auth/authSlice';
import {  useDispatch } from 'react-redux';
import axios from "axios";

const PaymentSuccessfull = () => {
    const location = useLocation();

    const dispatch = useDispatch();
    // Function to get query parameter by name
    const getQueryParam = (name) => {
        return new URLSearchParams(location.search).get(name);
    };
    const priceId = getQueryParam('priceid');
    
    console.log('Price ID:', priceId);
    
    useEffect(() => {
        // Fetch user info from Redux store
        dispatch(getUserInfo())
            .then((response) => {
                // Handle successful retrieval of user info
                const userData = response.payload;
                console.log(userData);


                const apiUrl = "http://127.0.0.1:8000/api/send_email/";
                const cartData = {
                    user: userData,
                    priceid: getQueryParam('priceid'),
                };

                try {
                    axios.post(apiUrl, cartData)
                        .then(response => {
                            console.log('Cart item added:', response.data);
                        })
                        .catch(error => {
                            console.error('Error adding item to cart:', error);
                        });
                } catch (error) {
                    console.error('Error adding item to cart:', error);
                }



            })
            .catch((error) => {
                // Handle error if user info retrieval fails
                console.error('Error retrieving user info:', error);
            });
    }, [priceId,dispatch,getQueryParam]);


    /*const getQueryParam = useCallback((name) => {
        return new URLSearchParams(location.search).get(name);
      }, [location.search]);
      */

    // Get the 'priceid' query parameter
    //const priceId = getQueryParam('priceid');
    //const [priceId, setPriceId] = useState([]);
    //setPriceId(getQueryParam('priceid'))

    // Log the 'priceid' query parameter to the console
    /*
    console.log('Price ID:', priceId);
    useEffect(() => {
        // Fetch user info from Redux store
        dispatch(getUserInfo())
            .then((response) => {
                // Handle successful retrieval of user info
                const userData = response.payload;
                console.log(userData); // User data retrieved successfully

                // Cart operation, including sending the user data to the backend
                const apiUrl = "http://127.0.0.1:8000/api/send_email/";
                const cartData = {
                    user: userData,
                    priceid: getQueryParam('priceid'),
                };

                try {
                    axios.post(apiUrl, cartData)
                        .then(response => {
                            console.log('Cart item added:', response.data);
                        })
                        .catch(error => {
                            console.error('Error adding item to cart:', error);
                        });
                } catch (error) {
                    console.error('Error adding item to cart:', error);
                }
            })
            .catch((error) => {
                // Handle error if user info retrieval fails
                console.error('Error retrieving user info:', error);
            });
    }, [priceId,dispatch,getQueryParam]);*/
    

    return (
        <div>
            <h2>Paiement réussi{" "}!</h2>
        </div>
    );
};

export default PaymentSuccessfull;