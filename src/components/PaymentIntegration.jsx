import React from "react";
import "../styles/PaymentIntegration.css";

const PaymentIntegration = () => {
  const handlePayment = () => {
    alert("Payment Gateway Coming Soon!");
  };

  return (
    <div className="payment-container">
      <h2>Secure Payment</h2>
      <button onClick={handlePayment} className="payment-button">
        Proceed to Payment
      </button>
    </div>
  );
};

export default PaymentIntegration;
