import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const FormGroup = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Label = styled.label`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 20px;
  margin-right: 5px;
`;
export const Input = styled.input`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  width: 150px;
  height: 25px;
  outline: none;
  border: 2px solid dbe6fd;
`;
