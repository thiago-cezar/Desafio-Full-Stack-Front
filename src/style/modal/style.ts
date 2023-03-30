import styled from "styled-components";

export const modalStyles = {
  content: {
    
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#f4f4f4",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};
export const FormRegisterContactStyle = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  & h1 {
    font-size: 25px;
  }
  & input {
    outline: none;
    border-radius: 50px;
    border: 1px solid var(--Black);
    padding: 5px;
    padding-left: 10px;
    font-size: 15px;
    width: 80%;
  }
  .buttons {
    display: flex;
    width: 100%;
    & .send {
      width: 80%;
      border-radius: 50px;
      border: 1px solid var(--Black);
      padding: 5px;
      margin: 0 auto;
      font-size: 20px;
      text-transform: uppercase;
      background: linear-gradient(90deg, var(--Orange), var(--Yellow));
      font-weight: 600;
      color: var(--White);
      cursor: pointer;
      text-shadow: 2px 2px 3px var(--Black);
      &:hover {
        background: linear-gradient(var(--Yellow), var(--Orange));
      }
    }
    & .exit {
      display: none;
    }
  }
`;
