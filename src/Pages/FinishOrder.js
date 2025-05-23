import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PAYPAL_CLIENT_ID = "ASKmv9SI7KJMNK3yafnnS5xEG-BgdxBaTHuUmU9UXtSJ5VjoyaICL9Nqre4vewdy-q5uf5Lin_lC27Yl";

export default function FinishOrder() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, cartTotal } = location.state || { cart: [], cartTotal: 0 };

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    contact: "",
    address: "",
    payment: "",
  });
  const [paypalReady, setPaypalReady] = useState(false);
  const [paypalPaid, setPaypalPaid] = useState(false);
  const paypalRef = useRef();

  // Load PayPal script when needed
  useEffect(() => {
    if (form.payment === "paypal" && !window.paypal) {
      const script = document.createElement("script");
      script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=USD`;
      script.onload = () => setPaypalReady(true);
      document.body.appendChild(script);
    } else if (form.payment === "paypal") {
      setPaypalReady(true);
    }
  }, [form.payment]);

  // Render PayPal button when ready
  useEffect(() => {
    if (paypalReady && form.payment === "paypal" && paypalRef.current && window.paypal) {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{ amount: { value: cartTotal ? cartTotal.toFixed(2) : "0.00" } }],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then(() => {
            setPaypalPaid(true);
            handleOrderSubmit();
          });
        },
        onError: () => {
          alert("PayPal payment failed. Please try again.");
        }
      }).render(paypalRef.current);
    }
    // eslint-disable-next-line
  }, [paypalReady, form.payment, cartTotal]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === "payment" && e.target.value !== "paypal") {
      setPaypalPaid(false);
    }
  };

  // For non-PayPal payments
  const handleSubmit = async (e) => {
  e.preventDefault();
  if (form.payment === "paypal") {
    if (!paypalPaid) {
      alert("Please complete PayPal payment first.");
      return;
    }
    // If paid, order will be submitted by handleOrderSubmit
    return;
  }
  handleOrderSubmit();
};

  // Send order to backend
  const handleOrderSubmit = async () => {
    try {
      const res = await fetch("https://vynceianoani.helioho.st/pizza/pizza.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          cart,
          cartTotal
        })
      });
      const result = await res.json();
      if (result.success) {
        alert("Order placed! Thank you.");
        navigate("/");
      } else {
        alert(result.error || "Order failed.");
      }
    } catch (err) {
      alert("Server error.");
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: "3rem auto", background: "#fff", borderRadius: 8, padding: 24, boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
      <h2>Order Details</h2>
      <ul style={{ padding: 0, listStyle: "none" }}>
        {cart.map(item => (
          <li key={item.id} style={{ marginBottom: 8 }}>
            <div><b>{item.title}</b> x {item.quantity} - ${item.total.toFixed(2)}</div>
          </li>
        ))}
      </ul>
      <div style={{ fontWeight: 700, margin: "1rem 0" }}>Order Total: ${cartTotal?.toFixed(2)}</div>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <input
          required
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={handleChange}
          style={{ padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
        />
        <input
          required
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={{ padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
        />
        <input
          required
          name="contact"
          placeholder="Contact Number"
          value={form.contact}
          onChange={handleChange}
          style={{ padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
        />
        <input
          required
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          style={{ padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
        />
        <select
          required
          name="payment"
          value={form.payment}
          onChange={handleChange}
          style={{ padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
        >
          <option value="">Select Payment Method</option>
          <option value="cod">Cash on Delivery</option>
          <option value="paypal">PayPal</option>
        </select>
        {form.payment === "paypal" && (
          <div style={{ margin: "12px 0" }}>
            <div ref={paypalRef}></div>
            {paypalPaid ? (
              <div style={{ color: "green", marginTop: 8 }}>Payment completed!</div>
            ) : (
              <div style={{ color: "#555", marginTop: 8 }}>Complete PayPal payment to place order.</div>
            )}
          </div>
        )}
        <button
          type="submit"
          style={{
            background: "#ff914c",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            padding: "0.75rem",
            fontWeight: 700,
            fontSize: "1rem",
            marginTop: 8,
            cursor: "pointer"
          }}
          disabled={form.payment === "paypal" && !paypalPaid}
        >
          Place Order
        </button>
      </form>
    </div>
  );
}