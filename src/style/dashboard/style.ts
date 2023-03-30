import styled from "styled-components";

export const DashboardStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  background-color: var(--Grey-4);
  padding: 1rem;
  border-radius: 10px;
  width: 20rem;
  height: 30rem;
  position: relative;
  & nav {
    width: 100%;
    display: flex;
    flex-direction: row;
    & input[type="search"] {
      border-radius: 50px;
      border: none;
      outline: none;
      width: 100%;
      padding: 0.5rem;
      padding-left: 1rem;
      background-color: var(--Grey-2);
      color: var(--White);
      &::placeholder {
        color: var(--Grey-1);
      }
    }
  }
`;

export const ButtonAddCont = styled.button`
  background-color: transparent;
  font-weight: 600;
  cursor: pointer;
  border: none;
  color: var(--Sucess);
  font-size: 22px;
`;

export const ButtonExit = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  font-size: 22px;
  color: var(--Negative);
`;
