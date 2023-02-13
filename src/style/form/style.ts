import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: linear-gradient(var(--Purple), var(--DarkBlue));
  padding: 20px;
  border-radius: 10px;
  width: 20rem;
  height: 25rem;
  justify-content: center;
  align-items: center;

  & h1 {
    font-size: 25px;
    font-weight: 600;
    color: var(--White);
    margin-bottom: 1.5rem;
  }

  & input {
    width: 80%;
    outline: none;
    border-radius: 50px;
    border: 1px solid var(--Black);
    padding: 10px;
    font-size: 15px;
    margin-bottom: 1rem;
  }
  & button {
    width: 82%;
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
  & span {
    color: var(--White);
    font-size: 15px;
    margin-top: 5rem;
    & a {
      color: var(--White);
      font-weight: 600;
    }
  }
`;
