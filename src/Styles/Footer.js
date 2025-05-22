import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #2a1603;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  width: 100%;
  padding-bottom: 5rem;
  z-index: 99;
`;
export const ContentWrapper = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Title = styled.span`
  font-size: 10px;

  @media (min-width: 640px) {
    font-size: 12px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const IconLink = styled.a`
  color: white;
  font-size: 12px;

  &:hover {
    color: #d1d5db; /* Tailwind gray-300 */
  }

  @media (min-width: 640px) {
    font-size: 14px;
  }
`;

export const NavText = styled.div`
  text-align: center;

  @media (min-width: 640px) {
    text-align: left;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ContactRow = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: 10px;
  align-items: center;
`;

export const ContactColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const LogoWrapper = styled.div`
  width: 90px;
  height: 90px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Divider = styled.div`
  border-top: 1px solid #4a2e0a;
  margin-top: 0.5rem;
  padding-top: 0.25rem;
  text-align: center;
`;

export const Copyright = styled.div`
  font-size: 8px;
  color: rgba(255, 255, 255, 0.7);
   text-align: center;

  @media (min-width: 640px) {
    font-size: 10px;
  }
`;

export const PizzaImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 300px;
  height: 300px;
  opacity: 0.2;
  pointer-events: none;
  user-select: none;
  z-index: 0;
`;
