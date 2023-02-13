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
  & input[type="button"] {
    background-color: var(--Negative);
    border: none;
    border-radius: 50px;
    position: absolute;
    margin-top: -1.2rem;
    margin-left: 21.5rem;
    cursor: pointer;
    font-weight: 600;
  }

  & nav {
    width: 100%;
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
