import styled from 'styled-components';
import { Link } from "react-router-dom";

export const NavWrapper = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    height: 80px;
  }
`;

export const LeftWrapper = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 20px;
`;

export const RightWrapper = styled.div`
  flex: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
`;

export const NavInnerWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavLinkWrapper = styled.div`
  display: flex;
  align-self: center;
`;

export const NavLink = styled(Link)`
  align-self: center;
  color: #194bd7;
  text-decoration: none;
  margin: 10px;
  font-weight: bold;
  
  @media (max-width: 700px) {
    display: none;
  }
`;

export const Logo = styled.img`
  margin: 10px;
  max-width: 150px;
  height: auto;
`;

export const Hamburger = styled.button`
    width: 40px;
    height: 40px;
    background: none;
    border-color: #194bd7;
    color: #194bd7;
    border-radius: 7px;

    font-size: 1.5rem;
    cursor: pointer;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const MobNavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const MobNavLink = styled(Link)`
  text-decoration: none;
  margin: 10px;
  color: #194bd7;
  font-weight: bold;
`;
