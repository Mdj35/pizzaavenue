import React from "react";
import {
  Container,
  HeroSection,
  HeroImage,
  Title,
  Wrapper,
  StyledForm,
  Input,
  FlexGroup,
  TextArea,
} from "../Styles/ContactUs.js";
import {Page} from "../Styles/Home.js";
import Header from "./Header";
import Footer from "./Footer";
import {Page2} from "../Styles/About.js";

/**
 * Contact-us hero + decorative wave
 *
 * Usage: <ContactUs />
 */
const ContactUs = () => {
  return (
    <>
    <Header />
    <Page> 
    <Container>
      <HeroSection>
        <HeroImage
          src="https://storage.googleapis.com/a1aa/image/0701fc5d-b678-4289-b357-b884634df6fc.jpg"
          alt="Top view of a pepperoni pizza with one slice slightly pulled out on a dark textured surface"
        />
        <Title>Contact&nbsp;us</Title>
      </HeroSection>
    </Container>
     <Wrapper>
      <StyledForm>
        <Input type="text" placeholder="First Name" />
        <Input type="text" placeholder="Last Name" />
        <FlexGroup>
          <Input type="email" placeholder="Email Address" />
          <Input type="text" placeholder="Contact No." />
        </FlexGroup>
        <TextArea placeholder="Message" rows="4" />
      </StyledForm>
    </Wrapper>
    <Footer />  
    </Page>
    

    </>
  );
};

export default ContactUs;
