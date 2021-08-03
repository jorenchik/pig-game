import styled from "styled-components";

export const Button = styled.button`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: #444;
  background: none;
  border: none;
  font-family: inherit;
  font-size: 1.8rem;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 400;
  transition: all 0.2s;

  background-color: white;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);

  padding: 0.7rem 2.5rem;
  border-radius: 50rem;
  box-shadow: 0 1.75rem 3.5rem rgba(0, 0, 0, 0.1);

  ::first-letter {
    font-size: 2.4rem;
    display: inline-block;
    margin-right: 0.7rem;
  }

  ${(props) => (props.type === "new" ? ` top: 4rem;` : ``)}
  ${(props) => (props.type === "roll" ? ` top: 39.3rem;` : ``)}
  ${(props) => (props.type === "hold" ? ` top: 46.1rem;` : ``)}

  
  :active {
    transform: translate(-50%, 3px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
  }

  :focus {
    outline: none;
  }
`;
