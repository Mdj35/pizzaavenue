import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function OrderSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  // You may want to pass cart and form data via state or localStorage
  const { cart, cartTotal, form } = location.state || {};

  useEffect(() => {
    // Only place order if payment was successful and data exists
    if (cart && cartTotal && form) {
      fetch("https://vynceianoani.helioho.st/pizza/pizza.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          cart,
          cartTotal
        })
      })
        .then(res => res.json())
        .then(result => {
          if (result.success) {
            alert("Order placed! Thank you.");
            navigate("/");
          } else {
            alert(result.error || "Order failed.");
          }
        })
        .catch(() => alert("Server error."));
    }
  }, [cart, cartTotal, form, navigate]);

  return (
    <div style={{ maxWidth: 500, margin: "3rem auto", background: "#fff", borderRadius: 8, padding: 24 }}>
      <h2>Processing your order...</h2>
    </div>
  );
}