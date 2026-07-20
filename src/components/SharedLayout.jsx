import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  margin-right: 16px;
  color: black;
  text-decoration: none;

  &.active {
    color: orange;
    font-weight: bold;
  }
`;

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          {/* end нужен только на "/", иначе она будет активной всегда,
              так как "/" совпадает с началом любого пути */}
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/catalog">Catalog</StyledLink>
          <StyledLink to="/contacts">Contacts</StyledLink>
        </nav>
      </header>

      {/* сюда рендерится компонент того маршрута,
          который совпал с текущим URL */}
      <Outlet />
    </div>
  );
};
