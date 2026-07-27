import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 30px;
`;

export const Item = styled.li`
  text-align: center;
`;

export const Image = styled.img`
  width: 160px;
  height: 240px;
  object-fit: cover;
  margin: 0 auto 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

export const Name = styled.h3`
  font-size: 18px;
  margin-bottom: 6px;
`;

export const Character = styled.p`
  color: #666;
`;
