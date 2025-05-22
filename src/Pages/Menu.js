import React, { useState } from 'react';
import {
  GlobalStyles,
  Container,
  Heading,
  SubHeading,
  CardGrid,
  Card,
  CardImage,
  CardBody,
  CardDescription,
  QuantityWrapper,
  QuantityButton,
  QuantityNumber
} from '../Styles/Menu';
import { Page } from '../Styles/Home';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    title: 'BUNDLE',
    price: 12.99,
    img: 'https://storage.googleapis.com/a1aa/image/c7f75bc6-5a77-4ba9-343a-3d22ba8b6b3f.jpg',
    alt: 'Top view of a pizza being sliced by hands on a wooden table',
    desc: 'Description',
  },
  {
    id: 2,
    title: 'BUNDLE',
    price: 15.49,
    img: 'https://storage.googleapis.com/a1aa/image/ccbd66e7-e5ae-441b-7da1-49b108cf643f.jpg',
    alt: 'Close-up of a pizza topped with fresh basil leaves and tomato slices on a wooden surface',
    desc: 'Description',
  },
  {
    id: 3,
    title: 'BUNDLE',
    price: 13.75,
    img: 'https://storage.googleapis.com/a1aa/image/83fcda6a-e4d2-48de-2029-c8cd074f2631.jpg',
    alt: 'Pizza topped with cheese and black olives with cheese being pulled',
    desc: 'Description',
  },
];

const Menu = () => {
  const [quantities, setQuantities] = useState(products.map(() => 0));
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  // Update cart whenever quantities change
  React.useEffect(() => {
    const newCart = products
      .map((product, idx) => ({
        ...product,
        quantity: quantities[idx],
        total: quantities[idx] * product.price,
      }))
      .filter(item => item.quantity > 0);
    setCart(newCart);
  }, [quantities]);

  const increment = (index) => {
    setQuantities((q) => q.map((val, i) => (i === index ? val + 1 : val)));
  };

  const decrement = (index) => {
    setQuantities((q) =>
      q.map((val, i) => (i === index && val > 0 ? val - 1 : val))
    );
  };

  // Remove an item from the cart
  const removeFromCart = (id) => {
    setQuantities((q) =>
      q.map((val, i) => (products[i].id === id ? 0 : val))
    );
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.total, 0);

  // Handle finish order
  const handleFinishOrder = () => {
    navigate('/finish-order', { state: { cart, cartTotal } });
  };

  return (
    <>
      <Page>
        <Header />
        <GlobalStyles />

        <Container>
          <Heading>Menu</Heading>
          <SubHeading>Bundle Deals</SubHeading>
          <CardGrid>
            {products.map((product, idx) => (
              <Card key={product.id}>
                <CardImage src={product.img} alt={product.alt} />
                <CardBody>
                  <div className="card-header">
                    <span>{product.title}</span>
                    <span>${product.price.toFixed(2)}</span>
                  </div>
                  <CardDescription>{product.desc}</CardDescription>
                  <QuantityWrapper>
                    <QuantityButton
                      onClick={() => increment(idx)}
                      aria-label="Increase quantity"
                    >
                      +
                    </QuantityButton>
                    <QuantityNumber>{quantities[idx]}</QuantityNumber>
                    <QuantityButton
                      onClick={() => decrement(idx)}
                      aria-label="Decrease quantity"
                    >
                      -
                    </QuantityButton>
                  </QuantityWrapper>
                </CardBody>
              </Card>
            ))}
          </CardGrid>

          {/* Cart Icon */}
          <div style={{ position: "fixed", bottom: "2rem", right: "2rem", zIndex: 200 }}>
            <button
              onClick={() => setShowCart((prev) => !prev)}
              style={{
                background: "#ff914c",
                border: "none",
                borderRadius: "50%",
                width: "3.5rem",
                height: "3.5rem",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                position: "relative"
              }}
              aria-label="Show cart"
            >
              {/* Simple cart icon (SVG) */}
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zM7.16 14l.84-2h7.45c.75 0 1.41-.41 1.75-1.03l3.24-5.88A1 1 0 0 0 20.5 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12z" fill="#fff"/>
              </svg>
              {/* Cart badge */}
              {cart.length > 0 && (
                <span style={{
                  position: "absolute",
                  top: "0.5rem",
                  right: "0.5rem",
                  background: "#ef4444",
                  color: "#fff",
                  borderRadius: "999px",
                  padding: "0.15rem 0.5rem",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  minWidth: "1.5rem",
                  textAlign: "center"
                }}>
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </button>
          </div>

          {/* Cart Section (hidden/shown by icon) */}
          {showCart && (
            <div style={{
              position: "fixed",
              bottom: "6rem",
              right: "2rem",
              width: "50%",
              maxWidth: "20rem",
              background: "#fff",
              borderRadius: "0.5rem",
              boxShadow: "0 2px 16px rgba(0,0,0,0.18)",
              padding: "1.5rem",
              zIndex: 201
            }}>
              <h2 style={{ margin: 0, fontSize: "1.5rem", fontWeight: 700 }}>Cart</h2>
              {cart.length === 0 ? (
                <p style={{ color: "#888", marginTop: "1rem" }}>Your cart is empty.</p>
              ) : (
                <>
                  <ul style={{ listStyle: "none", padding: 0, margin: "1rem 0" }}>
                    {cart.map(item => (
                      <li key={item.id} style={{ marginBottom: "1rem", borderBottom: "1px solid #eee", paddingBottom: "0.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                          <div style={{ fontWeight: 600 }}>{item.title}</div>
                          <div style={{ fontSize: "0.9rem", color: "#555" }}>
                            Quantity: {item.quantity} &times; ${item.price.toFixed(2)}
                          </div>
                          <div style={{ fontWeight: 500 }}>Total: ${item.total.toFixed(2)}</div>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          style={{
                            background: "#ef4444",
                            color: "#fff",
                            border: "none",
                            borderRadius: "0.375rem",
                            padding: "0.25rem 0.75rem",
                            fontWeight: 700,
                            cursor: "pointer",
                            marginLeft: "1rem"
                          }}
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                  <div style={{ fontWeight: 700, fontSize: "1.1rem", marginTop: "1rem" }}>
                    Order Total: ${cartTotal.toFixed(2)}
                  </div>
                  <button
                    style={{
                      marginTop: "1.5rem",
                      width: "100%",
                      background: "#ff914c",
                      color: "#fff",
                      border: "none",
                      borderRadius: "0.375rem",
                      padding: "0.75rem",
                      fontSize: "1rem",
                      fontWeight: 700,
                      cursor: "pointer"
                    }}
                    onClick={handleFinishOrder}
                  >
                    Finish Order
                  </button>
                </>
              )}
            </div>
          )}
        </Container>
        <Footer />
      </Page>
    </>
  );
};
export default Menu;