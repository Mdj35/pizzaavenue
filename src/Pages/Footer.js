import React from 'react';
import {
  FooterContainer,
  ContentWrapper,
  Section,
  Title,
  SocialIcons,
  IconLink,
  NavText,
  ContactInfo,
  ContactRow,
  ContactColumn,
  LogoWrapper,
  Divider,
  Copyright,
  PizzaImage
} from '../Styles/Footer';
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      <main />
      <ContentWrapper>
        <Section>
          <Title>Follow us</Title>
          <SocialIcons>
            <IconLink href="#"><FaFacebookF /></IconLink>
            <IconLink href="#"><FaInstagram /></IconLink>
          </SocialIcons>
        </Section>

     

        <ContactInfo>
          <span>Contact</span>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <ContactColumn>
              <ContactRow><FaPhoneAlt /><div><div>Branch</div><div>0123456789 0123456789</div></div></ContactRow>
              <ContactRow><FaPhoneAlt /><div><div>Branch</div><div>0123456789 0123456789</div></div></ContactRow>
            </ContactColumn>
            <ContactColumn>
              <ContactRow><FaEnvelope /></ContactRow>
              <ContactRow><FaMapMarkerAlt /></ContactRow>
            </ContactColumn>
          </div>
        </ContactInfo>

        <LogoWrapper>
          <img src="https://storage.googleapis.com/a1aa/image/165adbb6-0509-406b-66cc-b2b92876035b.jpg" alt="Pizza Avenue Logo" />
        </LogoWrapper>
      </ContentWrapper>

      <Divider />
      <Copyright>© 2023 Pizza Avenue. All rights reserved.</Copyright>
     
    </FooterContainer>
  );
};

export default Footer;
