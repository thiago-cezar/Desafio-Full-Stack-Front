import styled from "styled-components";

export const UlStyle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: auto;
  width: 90%;
  ::-webkit-scrollbar {
    width: 25px;
  }
  ::-webkit-scrollbar-track {
    background: var(--Grey-4);
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(var(--Purple), var(--DarkBlue));
    border-radius: 22px;
    border: 8px solid var(--Grey-4);
  }
  & li {
    position: relative;
    color: var(--White);
    font-size: 20px;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--Grey-3);
    font-weight: 600;
  }
  & details {
    display: flex;
    color: var(--Grey-1);
    & summary {
      cursor: pointer;
      font-size: 12px;
      margin-top: 0.5rem;
    }
    & p {
      color: var(--Grey-0);
      font-size: 14px;
      margin-top: 1rem;
    }
    & div {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      & button {
        position: absolute;
        background-color: transparent;
        border: none;
        cursor: pointer;
        font-size: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
        font-size: 16px;
      }
      .edit {
        color: var(--Yellow);
        margin-right: 8%;
        margin-top: 3%;
      }
      .trash {
        color: var(--Negative);
        margin-right: 0%;
        margin-top: 3%;
      }
    }
  }
`;

export const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const H2 = styled.h2`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
color:white;
font-size: 18px;
font-weight: 600;
`