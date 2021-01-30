import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price })=> {
    const priceForStripe = price *100;
    const publishableKey = 'pk_test_51IF9hNGc1otHCZFcVKTWaGIi9ny3Y49SHgKiVleijB2LCQ7ujcz9h6UrJ5ZvoAOiYwp7hhssSt0LTJiE7fyaFYrX00W92rxtMK';

    const onToken = token => {
        console.log(token);
        alert('Payment Sucessfull');
    }
    return(
        <StripeCheckout
            label='Pay Now'
            name ='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image = 'https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel= 'PaY N0W'
            token = {onToken}
            stripeKey = {publishableKey}
        />
    );
};

export default StripeCheckoutButton;