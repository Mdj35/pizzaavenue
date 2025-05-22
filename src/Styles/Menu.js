import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Freckle+Face&display=swap');
`;

export const Container = styled.div`
  background: linear-gradient(to right, #f44336, #fb7e4c);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 1rem 1rem 1rem; /* Top padding to avoid header overlap */
`;

export const Heading = styled.h1`
  font-family: 'Freckle Face', cursive;
  color: #fff;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  user-select: none;
`;

export const SubHeading = styled.p`
  font-size: clamp(0.875rem, 2vw, 1rem);
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;
  user-select: none;
`;

export const CardGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 72rem;
  width: 100%;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 18rem;
  width: 100%;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 12rem;
  object-fit: cover;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`;

export const CardBody = styled.div`
  padding: 0.75rem;

  .card-header {
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    font-weight: 700;
    user-select: none;
  }
`;

export const CardDescription = styled.p`
  font-size: 0.5625rem; /* 9px */
  margin-top: 0.25rem;
  user-select: none;
`;

export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.75rem;
`;

export const QuantityButton = styled.button`
  background-color: #fb7e4c;
  color: #fff;
  border-radius: 9999px;
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  border: none;
  cursor: pointer;
`;

export const QuantityNumber = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  user-select: none;
`;
