import styled, { css } from "styled-components";

/* Shared helpers
   ─────────────────────────────────────────────────────────── */
const alfa = css`
  font-family: "Alfa Slab One", cursive;
`;

export const roboto = css`
  font-family: "Roboto", sans-serif;
`;

/* Layout containers
   ─────────────────────────────────────────────────────────── */
export const Page = styled.body`
  ${roboto};
background: linear-gradient(90deg, #ff3131, #ff914c, #ff914d);
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
`;

export const Container = styled.div`
  position: relative;
  z-index: 30;
  max-width: 80rem;           /* ~1280 px */
  margin: 0 auto;
  padding: 6rem 1rem 0 1rem;  // Add top padding to avoid navbar overlap
`;

export const NavBar = styled.nav`
  position: fixed;                  // Pin the navbar
  top: 0;                           // Stick to the very top
  left: 0;
  width: 100%;                      // Full width
  z-index: 100;                     // Stay above other content
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;               // Less vertical padding to move it higher
  background: linear-gradient(90deg, #ff3131, #ff914c, #ff914d);
`;

export const LogoImg = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  object-fit: contain;
  border-radius: 9999px;
`;

export const NavLinks = styled.ul`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 5rem;
    margin-right: 2rem; // Move nav links a little bit to the left
  }

  &:hover li {
    opacity: 0.7; // All nav items become slightly faded on NavLinks hover
  }

  &:hover li:hover {
    opacity: 1;   // The hovered nav item returns to full opacity
    text-decoration: underline;
    background: #ef4444;           // Same background as active
    padding: 0.25rem 0.75rem;      // Same padding as active
    border-radius: 0.375rem;       // Same border radius as active
    font-weight: 500;              // Same font weight as active
  }
`;
export const NavLinkItem = styled.li.attrs({ tabIndex: 0 })`
  font-size: 0.875rem;
  color: #ffffff;
  cursor: pointer;
  transition: opacity 0.2s;

  ${({ $active }) =>
    $active
      ? css`
          background: #ef4444;
          padding: 0.25rem 0.75rem;
          border-radius: 0.375rem;
          font-weight: 500;
        `
      : css`
          &:hover {
            text-decoration: underline;
          }
        `}
`;

/* Hero text
   ─────────────────────────────────────────────────────────── */
export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  color: #ffffff;

  @media (min-width: 768px) {
    max-width: 26rem;
    margin-left: 150px;
  }
`;

export const Headline = styled.h1`
  ${alfa};
  font-size: 3rem;
  line-height: 1.1;

  @media (min-width: 768px) {
    font-size: 3.75rem;
  }
`;

export const Big = styled.span`
  display: block;
  font-size: 4.5rem;

  @media (min-width: 768px) {
    font-size: 6rem;
  }
`;

export const Medium = styled.span`
  display: block;
  font-size: 2.5rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const OrderButton = styled.button`
  margin-top: 2rem;
  ${alfa};
  background: #3a1f12;
  color: #ffffff;
  padding: 0.75rem 2rem;
  font-size: 1.125rem;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
`;

/* Pizza image
   ─────────────────────────────────────────────────────────── */
export const PizzaImg = styled.img`
  width: 30rem;
  height: 30rem;
  object-fit: cover;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;

  @media (min-width: 640px) {
    position: absolute;
    right: 0;
    top: 7rem;
  }
`;

/* Decorative stripes
   ─────────────────────────────────────────────────────────── */
export const StripesWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 4rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  transform: skewY(-12deg);
  z-index: 20;
`;

export const Stripe = styled.div`
  width: 100%;
  height: 6rem;
  background: ${({ dark }) => (dark ? "#000000" : "#facc15")};
`;
