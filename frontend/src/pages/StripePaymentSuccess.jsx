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

                //API URL to send email
                const apiUrl = "http://127.0.0.1:8000/api/send_email/";

                const cartData = {
                    user: userData,
                    priceid: getQueryParam('priceid'),
                };

                // Send email request
                axios.post(apiUrl, cartData)
                .then(response => {
                    console.log('Email sent:', response.data);
                })
                .catch(error => {
                    console.error('Error sending email:', error);
                });

                // API URL to save payment
                const paymentApiUrl = "http://127.0.0.1:8000/api/add_payment/";
                const paymentData = {
                user_id: userData.id,
                price_id: priceId,
                };

                // Send payment request
                axios.post(paymentApiUrl, paymentData)
                    .then(response => {
                        console.log('Payment added:', response.data);
                    })
                    .catch(error => {
                        console.error('Error adding payment:', error);
                    });

            })
            .catch((error) => {
                // Handle error if user info retrieval fails
                console.error('Error retrieving user info:', error);
            });

    }, [priceId,dispatch,getQueryParam]);
 

    return (
        <div>
            <h2>Paiement réussi{" "}!</h2>

            <h3>Cher(e) Madame, Monsieur,</h3>

            <p>Nous avons le plaisir de vous informer que votre paiement a été reçu avec succès.<br />
                Un email de confirmation vient de vous être envoyé, contenant tous les détails de votre achat ainsi qu{"'"}un QR code en pièce jointe.<br />
                Ce QR code est indispensable pour accéder à l{"'"}événement.<br /><br />
                Merci de bien vouloir le présenter à l{"'"}entrée.<br />
                Si vous avez des questions ou des préoccupations, n{"'"}hésitez pas à nous contacter.<br /><br />
                Nous vous remercions pour votre confiance et nous réjouissons de vous accueillir à notre événement.<br />
                Cordialement,<br />
                L{"'"}Équipe des Jeux Olympiques de Paris 2024</p>

        </div>
    );
};

export default PaymentSuccessfull;