import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from './Header';

export default function Page({ children }) {
  const [theme, setTheme] = useState('light');
  const themeMode = theme === "light" ? "dark" : "light";

  const toggleTheme = () => {
    localStorage.setItem("theme", themeMode); 
    setTheme(themeMode);
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <>
      <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
          <Header />
          <InnerStyles>
            <button onClick={toggleTheme}>Light/Dark</button>
            {children}
          </InnerStyles>
      </ThemeProvider>

    </>
  );
}

const GlobalStyles = createGlobalStyle`
    :root{
        --darkest-color: #0C0032;
        --dark-color: #190061;
        --medium-color: #240090;
        --light-color:#3500d3;
        --bright-color: #7ed0e1;
        --darkGrey: #282828;
        --lightGrey: #f5f5f5;
        --mediumGrey: #aaabb8;
        --offWhite: #ededed;
        --maxWidth: 1000px;
        --bs: 0 12px 24px 0 rgba(0,0,0,0,.09)
}
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 1;
    background-color: ${({ theme }) => theme.bg.primary};;
  }

  a{
    text-decoration: none;
    color: ${({ theme }) => theme.text.secondary};
  }

  a:hover{
    text-decoration: underline;
    color: ${({ theme }) => theme.text.tertiary};
  }

  button {
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

const lightTheme = {
  bg: {
    primary: '#ffffff',
    secondary: '#7ed0e1',
    tertiary: '#525560',
    quarternary: '#f5f5f5',
  },
  text: {
    primary: '#0C0032',
    secondary: '#190061',
    ternary: '#240090',
    quarternary: '#3500d3'
}
}

const darkTheme = {
  bg: {
    primary: '#0C0032',
    secondary: '#190061',
    tertiary: '#240090',
    quarternary: '#3500d3'
  },
  text: {
    primary: '#ffffff',
    secondary: '#7ed0e1',
    tertiary: '#f5f5f5',
    quarternary: '#525560',
}
}