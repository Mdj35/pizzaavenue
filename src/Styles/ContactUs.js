import styled, { createGlobalStyle } from "styled-components";

/* 1️⃣  Global font import (optional) */
export const GlobalFonts = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap");
`;

/* 2️⃣  Layout wrappers */
export const Container = styled.div`
  margin: 0;
  padding: 0;
`;

/* 3️⃣  Hero / banner */
export const HeroSection = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 400px;
`;

export const HeroImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export const Title = styled.h1`
  position: absolute;
  top: 50%;
  right: 1.5rem; /* Tailwind right-6 */
  transform: translateY(-50%);
  font-family: "Alfa Slab One", cursive;
  color: #fde047; /* Tailwind text-yellow-300 */
  font-size: clamp(1.875rem, 5vw, 3rem); /* sm:3xl → md:5xl */
  line-height: 1;
  user-select: none;
`;

/* 4️⃣  Wavy gradient bar */
export const WavyTop = styled.div`
  position: relative;
  height: 120px;
  background: linear-gradient(90deg, #fa3e3e 0%, #fca56f 100%);
`;

export const WaveSvg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120px;
  display: block;
`;
export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #ff3a3a 0%, #ff7f3a 100%);
  padding: 2rem 0; // Add vertical padding for spacing on small screens
`;

export const StyledForm = styled.form`
  background-color: #a85a3a;
  padding: 2rem;
  border-radius: 0.375rem; /* Tailwind: rounded-md */
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.10); // Subtle shadow for elevation
`;

export const Input = styled.input`
  width: 94%;
  border-radius: 0.375rem;
  padding: 0.5rem 0.75rem;
  text-align: center;
  font-size: 13px;
  font-family: monospace;
  border: none;
  outline: none;
  background: #fff;
`;

export const TextArea = styled.textarea`
  width: 94%;
  border-radius: 0.375rem;
  padding: 0.5rem 0.75rem;
  text-align: center;
  font-size: 13px;
  font-family: monospace;
  resize: none;
  border: none;
  outline: none;
  background: #fff;
`;

export const FlexGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  & > input {
    flex: 1;
    min-width: 140px;
  }
`;

