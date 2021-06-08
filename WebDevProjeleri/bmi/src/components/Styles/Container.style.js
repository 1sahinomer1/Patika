import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 400px;
  height: 500px;
  background-color: #dbe6fd;
  margin: 70px auto;
  display: flex;
  flex-direction: column;
  position: relative;
  border: 2px solid;
`;
export const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ResultNavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const CalculateContainer = styled.div`
  padding: 40px;
  position: relative;
`;
export const ModalContainer = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #293b5f;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
