import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  background: white;
  padding: 18px 0;
  margin-bottom: 40px;
  box-shadow: 0 2px 12px rgba(255, 0, 0, 0.08);
`;

export const Main = styled.main`
  padding-bottom: 60px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 35px;
`;

export const StyledLink = styled(NavLink)`
  font-family: "Roboto Slab", serif;
  font-size: 22px;
  font-weight: 600;
  transition: 0.3s;

  &:hover,
  &.active {
    color: #d24b71;
  }
`;
