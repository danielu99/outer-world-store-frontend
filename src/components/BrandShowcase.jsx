import React from "react";
import styled, { keyframes } from "styled-components";
import mattelLogo from "../assets/logos/mattel-logo.png";
import hasbroLogo from "../assets/logos/hasbro.png";
import jurassicLogo from "../assets/logos/jurassic-logo.png";
import spinMasterLogo from "../assets/logos/spinmaster-logo.png";
import legoLogo from "../assets/logos/lego-logo.png";
import hotToysLogo from "../assets/logos/hot-toys.png";

const brands = [
    { name: "Mattel", logo: mattelLogo },
    { name: "Hasbro", logo: hasbroLogo },
    { name: "Jurassic Park", logo: jurassicLogo },
    { name: "Lego", logo: legoLogo },
    { name: "SpinMaster", logo: spinMasterLogo },
    { name: "Hot Toys", logo: hotToysLogo },
];

const scroll = keyframes`
  0% {
    transform: translateX(100%); /* Start off-screen */
  }
  100% {
    transform: translateX(-100%); /* Move completely out */
  }
`;


const BrandSection = styled.section`
  width: 100%;
  background: rgba(0, 0, 0, 0.8); /* Slight dark background for contrast */
  padding: 20px 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px; /* Adjust height as needed */
`;

const LogoWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px; /* Restrict the width if necessary */
  overflow: hidden;
  position: relative;
`;

const LogoContainer = styled.div`
  display: flex;
  gap: 40px;
  animation: ${scroll} 20s linear infinite;
  will-change: transform;
  transform: translateX(100%); /* Start off-screen */
  min-width: 100%; /* Ensure the container's width is at least 100% of the wrapper */
`;

const Logo = styled.img`
  height: 80px;
  filter: brightness(0.8);
  transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    filter: brightness(1);
  }
`;

const BrandShowcase = () => {
    return (
        <BrandSection>
            <LogoWrapper>
                <LogoContainer>
                    {/* Display logos once */}
                    {[...brands].map((brand, index) => (
                        <Logo key={index} src={brand.logo} alt={brand.name} />
                    ))}
                </LogoContainer>
            </LogoWrapper>
        </BrandSection>
    );
};

export default BrandShowcase;
