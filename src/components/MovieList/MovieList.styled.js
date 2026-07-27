import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Item = styled.li`
  a {
    font-size: 20px;
    font-weight: 500;
    transition: 0.3s;
  }

  a:hover {
    color: #d24b71;
    padding-left: 8px;
  }
`;
