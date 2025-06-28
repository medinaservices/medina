// PayPalPayment.jsx
import { useState } from "react";
import "./Paypal.css";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
    
export default function PaypalPayment() {
  const [amount, setAmount] = useState("");
  const [comment, setComment] = useState("");

  return (
  
    <PayPalScriptProvider options={{ 
        clientId: "ARNnn_azVr9Rd8kjcquOvKQVqEglPAu5RT0WrmrRyjtbCBsrpC_JTPXCf9tC9T2rY36MGzGGbvncM7dB", 
        currency: "USD",
        "disable-funding": "paylater" }}>
      <div style={{ maxWidth: "400px", margin: "auto" }}>
<h1> Service Pay</h1>
        <label htmlFor="amount">Please enter service fee amount (USD):</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="e.g., 10.00"
          min="1"
          step="0.01"
          style={{ margin: "10px 0", padding: "5px", width: "100%" }}
          className="amount-input"
        />


<label className="form-label">Comment (optional):</label>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="form-textarea"
        placeholder="e.g., Mowing for June 28"
      />

        {parseFloat(amount) > 0 && (
          <PayPalButtons
            style={{ layout: "vertical" }}
            forceReRender={[amount]}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: parseFloat(amount).toFixed(2),
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then((details) => {
                alert(`Transaction completed by ${details.payer.name.given_name}`);
              });
            }}
          />
        )}
      </div>
    </PayPalScriptProvider>
  );
}

    