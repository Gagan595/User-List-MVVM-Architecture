// Global styles for body, button, input, etc.
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    transition: background-color 0.3s ease, color 0.3s ease;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  input {
    transition: background-color 0.3s ease, color 0.3s ease;
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: 1px solid #ced4da;
  }
`;


