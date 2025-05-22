import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle order completion (e.g., send to backend)
    alert("Order placed! Thank you.");
    navigate("/");
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
          <option value="gcash">GCash</option>
          <option value="card">Credit/Debit Card</option>
        </select>
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
        >
          Place Order
        </button>
      </form>
    </div>
  );
}