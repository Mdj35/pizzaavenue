import React from "react";
import {
  Page,
  StripesWrapper,
  Stripe,
  Container,
  NavBar,
  LogoImg,
  NavLinks,
  NavLinkItem,
  Hero,
  Headline,
  Big,
  Medium,
  OrderButton,
  PizzaImg,
} from "../Styles/Home";
import Header from "./Header"
import { useNavigate } from "react-router-dom";


export default function PizzaCravings() {
      const navigate = useNavigate();
    
  return (
    <>
    <Page>
      {/* Diagonal stripes at the left edge */}
      <StripesWrapper>
        {Array.from({ length: 8 }).map((_, i) => (
          <Stripe key={i} dark={i % 2 !== 0} />
        ))}
      </StripesWrapper>

      {/* Main content wrapper */}
      <Container>
        {/* ── Navigation ─────────────────── */}
       
          <Header/>
        

        {/* ── Hero section ───────────────── */}
        <Hero>
          <Headline>
            Get Your
            <Big>Cravings</Big>
            <Medium>Now!</Medium>
          </Headline>

          <OrderButton  onClick={()=> navigate("/menu")}>Order Here</OrderButton>
        </Hero>

        {/* ── Pizza image ────────────────── */}
        <PizzaImg
          src="https://storage.googleapis.com/a1aa/image/f996fc52-2e74-4500-2d82-a618ebc69720.jpg"
          alt="Pepperoni pizza with jalapeños"
        />
      </Container>
      
    </Page>
    
    </>
  );
}
