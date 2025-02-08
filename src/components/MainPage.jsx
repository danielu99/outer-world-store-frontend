import React from "react";
import styled, { keyframes } from "styled-components";
import BrandShowcase from "./BrandShowcase";
import NavBar from "./NavBar";

// Keyframes for animated stars background
const moveStars = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: 1000px 1000px;
  }
`;

// Styled components
const MainContainer = styled.div`
  text-align: center;
`;

const Hero = styled.section`
  position: relative;
  background: black;
  color: white;
  padding: 0 20px; /* Remove unnecessary padding */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;  /* Ensures full viewport height */
  width: 100%;
  overflow: hidden;
  text-align: center; /* Centers text elements */

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("https://www.transparenttextures.com/patterns/stardust.png"),
      radial-gradient(circle at center, #1a1a2e, black);
    animation: ${moveStars} 60s linear infinite;
    opacity: 0.7;
  }
`;

const HeroText = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  text-shadow: 0 0 8px rgba(173, 216, 230, 0.4); /* Subtle glow */

  h1 {
    font-size: 3rem;
    color: #78aaff; /* Soft neon blue */
    text-transform: uppercase;
  }

  p {
    font-size: 1.2rem;
    color: #a5a5a5; /* Muted white */
  }
`;

const ShopButton = styled.button`
  background: #ffcc00;
  color: black;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  font-size: 18px;
  margin-top: 10px;
  border-radius: 5px;
  transition: 0.3s ease-in-out;

  &:hover {
    background: #ffaa00;
    transform: scale(1.1);
  }
`;

const Section = styled.section`
  padding: 20px;
`;

const Grid = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  background: #eee;
  padding: 15px;
  border-radius: 10px;
`;

const Footer = styled.footer`
  margin-top: 20px;
  padding: 10px;
  background: #282c34;
  color: white;
`;

const MainPage = () => {
  return (
    <MainContainer>
      <NavBar />
      {/* Hero Section with Animated Space Background */}
      <Hero>
        <HeroText>
          <h1>Outer World Store</h1>
          <p>¡Juguetes, figuras y coleccionables de todos los universos!</p>
          <ShopButton>Hacer pedido</ShopButton>
        </HeroText>
        <BrandShowcase />
      </Hero>

      {/* Featured Products */}
      <Section>
        <h2>Featured Products</h2>
        <Grid>
          <Card>🚀 Space Robot</Card>
          <Card>🦖 Dino Figure</Card>
          <Card>🎮 Retro Console</Card>
        </Grid>
      </Section>

      {/* Categories */}
      <Section>
        <h2>Shop by Category</h2>
        <Grid>
          <Card>Action Figures</Card>
          <Card>Board Games</Card>
          <Card>Plush Toys</Card>
        </Grid>
      </Section>

      {/* Footer */}
      <Footer>
        <p>© 2025 Outer World Store. All rights reserved.</p>
      </Footer>
    </MainContainer>
  );
};

export default MainPage;
