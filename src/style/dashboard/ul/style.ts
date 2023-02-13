import styled from "styled-components";

export const UlStyle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow: auto;
  width: 90%;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(var(--Purple), var(--DarkBlue));
    border-radius: 20px;
  }
  & li {
    color: var(--White);
    font-size: 20px;
    border-bottom: 1px solid var(--Grey-3);
    font-weight: 600;
  }
  & details {
    display: flex;

    color: var(--Grey-2);
    & summary {
      cursor: pointer;
      font-size: 15px;
      margin-top: 0.5rem;
    }
    & p {
      color: var(--Grey-1);
      font-size: 15px;
      margin-top: 1rem;
    }
    & div {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
      & button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        color: var(--Grey-0);
        font-size: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
        font-size: 15px;
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