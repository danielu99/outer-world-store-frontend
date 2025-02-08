import React, { useState } from "react";
import { Link } from "react-router-dom"; // Optional if using React Router
import { FaBars } from "react-icons/fa";
import styled from "styled-components";

const Navbar = styled.nav`
  background: #222;
  padding: 15px;
  display: flex;
  align-items: center;
`;

const MenuIcon = styled.div`
  color: white;
  font-size: 24px;
  margin-right: 15px;
  display: none; /* Hidden for desktop */

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
  cursor: pointer;
`;

const Dropdown = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border: 1px solid #ddd;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000; /* Ensure it's above other content */
`;

const DropdownItem = styled.li`
  padding: 8px;

  a {
    color: white;
    text-decoration: none;
  }

  &:hover {
    background: #444;
  }
`;

const NavBar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (menu) => setActiveDropdown(menu);
  const handleMouseLeave = () => setActiveDropdown(null);

  return (
    <Navbar>
      <MenuIcon>
        <FaBars />
      </MenuIcon>
      <NavLinks>
        <NavItem
          onMouseEnter={() => handleMouseEnter("brand")}
          onMouseLeave={handleMouseLeave}
        >
          <span>Catalogue by Brand</span>
          {activeDropdown === "brand" && (
            <Dropdown>
              <DropdownItem><Link to="/catalogue/mattel">Mattel</Link></DropdownItem>
              <DropdownItem><Link to="/catalogue/hasbro">Hasbro</Link></DropdownItem>
              <DropdownItem><Link to="/catalogue/lego">Lego</Link></DropdownItem>
            </Dropdown>
          )}
        </NavItem>

        <NavItem
          onMouseEnter={() => handleMouseEnter("type")}
          onMouseLeave={handleMouseLeave}
        >
          <span>Catalogue by Type</span>
          {activeDropdown === "type" && (
            <Dropdown>
              <DropdownItem><Link to="/catalogue/action-figures">Action Figures</Link></DropdownItem>
              <DropdownItem><Link to="/catalogue/vehicles">Vehicles</Link></DropdownItem>
              <DropdownItem><Link to="/catalogue/playsets">Playsets</Link></DropdownItem>
            </Dropdown>
          )}
        </NavItem>

        <NavItem
          onMouseEnter={() => handleMouseEnter("franchise")}
          onMouseLeave={handleMouseLeave}
        >
          <span>Catalogue by Franchise</span>
          {activeDropdown === "franchise" && (
            <Dropdown>
              <DropdownItem><Link to="/catalogue/star-wars">Star Wars</Link></DropdownItem>
              <DropdownItem><Link to="/catalogue/jurassic-park">Jurassic Park</Link></DropdownItem>
              <DropdownItem><Link to="/catalogue/marvel">Marvel</Link></DropdownItem>
            </Dropdown>
          )}
        </NavItem>
      </NavLinks>
    </Navbar>
  );
};

export default NavBar;
