import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 35px;
`;

export const Input = styled.input`
  width: 350px;
  padding: 12px 16px;
  border: 1px solid #853131ff;
  border-radius: 8px;
  outline: none;
  font-size: 17px;
  font-family: "Maven Pro", sans-serif;

  &:focus {
    border-color: #00bfffff;
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 12px 22px;
  background: #ff0000ff;
  color: white;
  cursor: pointer;
  font-size: 17px;
  font-family: "Maven Pro", sans-serif;
  transition: 0.3s;

  &:hover {
    background: #b33b5d;
  }
`;
