import styled from "styled-components";

export const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  margin: 1rem;

  button {
    margin: 0.5rem;
    padding: 0.5rem;

    width: 20rem;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.2rem;

    border: none;
    border-radius: 25px;

    font-family: "Poppins", sans-serif;

    color: #3b616f;
    background: #efefef;

    outline: none;
    cursor: pointer;

    transition: 0.2s ease-in-out;
    box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.7),
      -6px -6px 10px rgba(255, 255, 255, 0.5),
      6px 6px 8px rgba(255, 255, 255, 0.075), 6px 6px 10px rgba(0, 0, 0, 0.15);
  }

  button:hover {
    box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.6),
      -2px -2px 4px rgba(255, 255, 255, 0.4),
      2px 2px 2px rgba(255, 255, 255, 0.05), 2px 2px 4px rgba(0, 0, 0, 0.1);
  }

  button:active {
    box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.7),
      inset -2px -2px 4px rgba(255, 255, 255, 0.5),
      inset 2px 2px 2px rgba(255, 255, 255, 0.075),
      inset 2px 2px 4px rgba(0, 0, 0, 0.15);
  }
`;
