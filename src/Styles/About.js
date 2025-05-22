import styled from "styled-components";

/* Typography helpers
   ─────────────────────────────────────────────────────────── */
const alfa = `
  font-family: "Alfa Slab One", cursive;
`;
const roboto = `
  font-family: "Roboto", sans-serif;
`;
/* Layout container
   ─────────────────────────────────────────────────────────── */
export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
`;

/* Full-bleed hero image */
export const HeroImg = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

/* Over-laid “About us” text */
export const Title = styled.div`
  ${alfa};
  position: absolute;
  bottom: 1.5rem;   /* Tailwind bottom-6 */
  right: 1.5rem;    /* Tailwind right-6 */
  color: #fde047;   /* Tailwind yellow-200 */

  /* Responsive text sizes: 4xl / 5xl / 6xl */
  font-size: clamp(2.25rem, 5vw, 3.75rem);
  user-select: none;
`;

/* Thin wooden bar stuck to the very bottom */
export const BottomStrip = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1rem;     /* Tailwind h-4 */
  object-fit: cover;
`;
export const Page2 = styled.div`
  ${roboto};
    background: linear-gradient(90deg, #ff3131, #ff914c, #ff914d);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;           /* Tailwind p-6 */
`;

export const Container = styled.div`
  max-width: 72rem;          /* Tailwind max-w-6xl */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;               /* Tailwind gap-10 */

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 5rem;               /* Tailwind gap-20 */
  }
`;

/* ——— Logo ——— */
export const Logo = styled.img`
  width: 12rem;              /* Tailwind w-48 */
  flex-shrink: 0;
  padding: 6.5rem;

  @media (min-width: 768px) {
    width: 14rem;            /* Tailwind md:w-56 */
  }
`;

/* ——— Text ——— */
export const Content = styled.div`
  color: #ffffff;
  max-width: 36rem;   
   padding: 5.5rem; 
         /* Tailwind max-w-xl */
`;

export const Heading = styled.h1`
  font-size: 1.875rem;       /* Tailwind text-3xl */
  font-weight: 400;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 2.25rem;      /* Tailwind md:text-4xl */
  }
`;

export const Paragraph = styled.p`
  font-size: 0.75rem;        /* Tailwind text-xs */
  line-height: 1.25rem;      /* Tailwind leading-tight */
  margin-bottom: 1rem;
`;