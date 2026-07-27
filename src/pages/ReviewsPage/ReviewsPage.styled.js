import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Item = styled.li`
  padding: 32px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
`;

export const Author = styled.h3`
  margin-bottom: 12px;
`;

export const Text = styled.p`
  line-height: 1.8;
`;
