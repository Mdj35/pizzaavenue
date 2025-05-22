import React from "react";
import { NavLinks, NavLinkItem ,NavBar, LogoImg} from "../Styles/Home";
import { useNavigate } from "react-router-dom";

export default function NavigationLinks() {
  const navigate = useNavigate();

  return (
     <NavBar>
              <LogoImg
                src="https://storage.googleapis.com/a1aa/image/47d5d6ca-3df8-492e-a8ec-08e65c619684.jpg"
                alt="Pizza Avenue logo"
              />
    <NavLinks>
      <NavLinkItem onClick={() => navigate("/")}>Home</NavLinkItem>
      <NavLinkItem onClick={() => navigate("/about")}>About us</NavLinkItem>
      <NavLinkItem onClick={()=> navigate("/menu")}>Menu</NavLinkItem>
      <NavLinkItem onClick={()=> navigate("/contact-us")}>Contact</NavLinkItem>
    </NavLinks>
    </NavBar>
  );
}