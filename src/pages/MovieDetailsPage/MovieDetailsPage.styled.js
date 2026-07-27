import styled from "styled-components";
import { Link } from "react-router-dom";

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 30px;
  color: #d24b71;
  font-weight: 600;
  font-size: 18px;
  transition: color 0.3s;

  &:hover {
    color: #b8335a;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 35px;
`;

export const Poster = styled.img`
  width: 320px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
`;

export const Info = styled.div`
  max-width: 700px;

  p {
    margin: 10px 0;
    line-height: 1.7;
  }
`;

export const Title = styled.h1`
  font-size: 42px;
  margin-bottom: 20px;
`;

export const Subtitle = styled.h2`
  font-size: 24px;
  margin: 25px 0 12px;
`;

export const Additional = styled.div`
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding: 22px 0;
  margin-bottom: 30px;

  h3 {
    margin-bottom: 15px;
  }

  li:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const StyledLink = styled(Link)`
  color: #444;
  font-size: 18px;
  transition: 0.25s;

  &:hover {
    color: #d24b71;
  }
`;
