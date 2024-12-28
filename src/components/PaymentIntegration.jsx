import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import "../styles/PaymentIntegration.css";

const stripePromise = loadStripe("pk_test_12345");

const PaymentIntegration = () => {
    return (
      <div className="payment-container">
        <h2 style={{ color: "black" }}>Secure Payment</h2>
        <p style={{ color: "black" }}>Make a payment securely using Stripe</p>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    );
  };
  
  export default PaymentIntegration;