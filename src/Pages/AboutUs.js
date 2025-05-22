import React from "react";
import {
  Wrapper,
  HeroImg,
  Title,
  BottomStrip,
   Page2,
  Container,
  Logo,
  Content,
  Heading,
  Paragraph,
} from "../Styles/About";
import {Page} from "../Styles/Home.js";
import Header from "./Header";
import Footer from "./Footer";

export default function AboutUs() {
  return (
    
    <Page>
    <Header/>
    <Wrapper>
      <HeroImg
        src="https://storage.googleapis.com/a1aa/image/147fc144-8795-4211-7154-c58d7c108800.jpg"
        alt="Pizza with pepperoni slices on dark stone background"
      />

      <Title>About us</Title>

      <BottomStrip
        src="https://storage.googleapis.com/a1aa/image/1ec79282-23a3-46e8-822f-f8ee131296a9.jpg"
        alt="Wood texture strip"
      />
    </Wrapper>
    <Page2>
      <Container>
        <Logo
          src="https://storage.googleapis.com/a1aa/image/92f1cbc3-05cd-4cb7-cacf-2d1ec7c0613d.jpg"
          alt="Round orange Pizza Avenue logo"
        />

        <Content>
          <Heading>Pizza Avenue</Heading>

          <Paragraph>
            Welcome to Pizza Avenue, your go-to neighborhood pizzeria in the
            heart of Davao City! We’re passionate about serving freshly made,
            handcrafted pizzas using only the finest local and imported
            ingredients. From classic flavors to bold, mouth-watering creations,
            each pizza is baked to perfection and made with love.
          </Paragraph>

          <Paragraph>
            Whether you’re dining in with family, grabbing take-out, or ordering
            for delivery, we’re here to bring you delicious comfort food and
            warm, friendly service. At Pizza Avenue, we don’t just serve
            pizza — we serve a slice of Davao’s flavor and hospitality.
          </Paragraph>
        </Content>
      </Container>
      
    </Page2>
    <Footer/>
    </Page>
    
  );
}
