import React, { useState, useEffect } from 'react'
import styled, {
  DefaultTheme,
  createGlobalStyle,
  ThemeProvider,
} from 'styled-components'
import { ModalContextProvider } from '../Modals/ModalContext'
import Footer from './Footer'
import Header from './Navigation/Header'
import Sidebar from './Navigation/Sidebar'
import { useModal } from '../Modals/ModalContext'
import { ModalProps } from '../../lib/gymmieInterfaces'

interface PageProps {
  children: React.ReactNode
}

export default function Page({ children }: PageProps) {
  const modal: Partial<ModalProps> = useModal()
  const [theme, setTheme] = useState('dark')
  const [isOpen, setIsOpen] = useState(false)

  const themeMode = theme === 'light' ? 'dark' : 'light'
  const toggleTheme = () => {
    localStorage.setItem('theme', themeMode)
    setTheme(themeMode)
  }

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    localTheme && setTheme(localTheme)
  }, [])

  const toggleSidebar = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <ModalContextProvider>
          <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
          <Header toggle={toggleSidebar} />
          <InnerStyles>{children}</InnerStyles>
          <Footer toggleTheme={toggleTheme} />
        </ModalContextProvider>
      </ThemeProvider>
    </>
  )
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
    background-color: ${({ theme }) => theme.bg.primary};
    display: flex;
    flex-direction: column;
    height: 100%
  }

 
  a{
    text-decoration: none;
    color: ${({ theme }) => theme.text.primary};
  }

  a:hover{
    text-decoration: none
  }

  button {
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }


`

const InnerStyles = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  min-height: 65vh;
`
const mediaQueries = {
  small: `@media screen and (max-width: 768px)`,
  medium: `@media screen and (max-width: 1024px)`,
  large: `@media screen and (max-width: 1200px)`,
}

const lightTheme: DefaultTheme = {
  bg: {
    primary: '#ffffff',
    secondary: '#7ed0e1',
    tertiary: '#525560',
    quarternary: '#f5f5f5',
  },
  text: {
    primary: '#0C0032',
    secondary: '#190061',
    tertiary: '#240090',
    quarternary: '#3500d3',
  },
  mediaQueries: { ...mediaQueries },
}

const darkTheme: DefaultTheme = {
  bg: {
    primary: '#001E6C',
    secondary: '#240090',
    tertiary: '#3500d3',
    quarternary: '#3500d3',
  },
  text: {
    primary: '#ffffff',
    secondary: '#7ed0e1',
    tertiary: '#aaabb8',
    quarternary: '#ededed;',
  },
  mediaQueries: { ...mediaQueries },
}
