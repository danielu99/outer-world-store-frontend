import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";

const Navbar = styled.nav`
  width: 100%;
  background: #333;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const MenuIcon = styled.div`
  color: white;
  font-size: 24px;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  position: relative;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  padding: 8px;
`;

const DropdownWrapper = styled.div`
  position: relative;
`;

const Dropdown = styled.ul`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  background: #444;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  padding: 8px 0;
  z-index: 1000;
  width: 180px;
  display: ${({ $isVisible }) => ($isVisible ? "block" : "none")};

  /* Add max height and scrollbar */
  max-height: 200px; /* Adjust as needed */
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #777 #333;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #777;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-track {
    background: #333;
  }
`;

const DropdownItem = styled.li`
  padding: 10px 12px;
  transition: background 0.3s;

  a {
    color: white;
    text-decoration: none;
    font-size: 14px;
    display: block;
  }

  &:hover {
    background: #555;
  }
`;

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isBrandDropdownVisible, setBrandDropdownVisible] = useState(false);
  const [isTypeDropdownVisible, setTypeDropdownVisible] = useState(false);
  const [isFranchiseDropdownVisible, setFranchiseDropdownVisible] = useState(false);
  const [brands, setBrands] = useState([]);
  const [types, setTypes] = useState([]);
  const [franchises, setFranchises] = useState([]);

  const [brandsLoaded, setBrandsLoaded] = useState(false);
  const [typesLoaded, setTypesLoaded] = useState(false);
  const [franchisesLoaded, setFranchisesLoaded] = useState(false);

  const fetchBrands = async () => {
    try {
      const response = await fetch("http://192.168.1.17:8001/getAllMarcas");
      const data = await response.json();
      setBrands(data);
      setBrandsLoaded(true);
    } catch (error) {
      console.error("Error fetching brands:", error);
    }
  };

  return (
    <Navbar>
      <MenuIcon onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
        <FaBars />
      </MenuIcon>
      <NavLinks style={{ display: isMobileMenuOpen ? "flex" : "", flexDirection: isMobileMenuOpen ? "column" : "row" }}>
        <NavItem
          onMouseEnter={() => {
            setBrandDropdownVisible(true);
            if (!brandsLoaded) fetchBrands();
          }}
          onMouseLeave={() => setBrandDropdownVisible(false)}
        >
          <span>Catálogo por marca</span>
          <DropdownWrapper>
            <Dropdown $isVisible={isBrandDropdownVisible}>
              {brands.map((brand, index) => (
                <DropdownItem key={index}>
                  <Link to={`/catalogo/${brand.toLowerCase()}`}>{brand}</Link>
                </DropdownItem>
              ))}
            </Dropdown>
          </DropdownWrapper>
        </NavItem>

        <NavItem
          onMouseEnter={() => setTypeDropdownVisible(true)}
          onMouseLeave={() => setTypeDropdownVisible(false)}
        >
          <span>Catálogo por tipo</span>
          <DropdownWrapper>
            <Dropdown $isVisible={isTypeDropdownVisible}>
              <DropdownItem>
                <Link to="/catalogo/figuras">Figuras</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/catalogo/vehicilos">Vehículos</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/catalogo/playsets">Sets de juego</Link>
              </DropdownItem>
            </Dropdown>
          </DropdownWrapper>
        </NavItem>

        <NavItem
          onMouseEnter={() => setFranchiseDropdownVisible(true)}
          onMouseLeave={() => setFranchiseDropdownVisible(false)}
        >
          <span>Catálogo por franquicia</span>
          <DropdownWrapper>
            <Dropdown $isVisible={isFranchiseDropdownVisible}>
              <DropdownItem>
                <Link to="/catalogo/star-wars">Star Wars</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/catalogo/jurassic-park">Jurassic Park</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/catalogo/marvel">Marvel</Link>
              </DropdownItem>
            </Dropdown>
          </DropdownWrapper>
        </NavItem>
      </NavLinks>
    </Navbar>
  );
};

export default NavBar;
