import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.img`
  width: 320px;
  margin-bottom: 30px;
`;

export const Title = styled.h1`
  font-size: 90px;
  font-family: "Roboto Slab", serif;
`;

export const Text = styled.p`
  margin: 15px 0 35px;
  font-size: 20px;
  color: #333;
`;

export const HomeLink = styled(Link)`
  padding: 12px 24px;
  border-radius: 8px;
  background: #fff200ff;
  color: white;
  font-size: 18px;
  transition: 0.3s;

  &:hover {
    background: #00ffaaff;
  }
`;
