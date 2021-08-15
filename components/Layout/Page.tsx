import React, { useState, useEffect } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import Modal from '../Modals/Modal'
import Footer from './Footer'
import Header from './Navigation/Header'
import Sidebar from './Navigation/Sidebar'
import { useModal } from '../Modals/ModalContext'

interface PageProps {
  children: React.ReactNode
}

export default function Page({ children }: PageProps) {
  const modal = useModal()
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
        <Modal
          modalIsOpen={modal.modalIsOpen}
          modalType={modal.modalType}
          modalText={modal.modalText}
          closeModal={modal.closeModal}
        />
        <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
        <Header toggle={toggleSidebar} />
        <InnerStyles>{children}</InnerStyles>
        <Footer toggleTheme={toggleTheme} />
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
    background-color: ${({ theme }) => theme.bg.primary};
    height: 100%;
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
  flex: 1;
`

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
    tertiary: '#240090',
    quarternary: '#3500d3',
  },
  mediaQueries: {
    small: `@media screen and (max-width: 768px)`,
    medium: `@media screen and (max-width: 1024px)`,
    large: `@media screen and (max-width: 1200px)`,
  },
}

const darkTheme = {
  bg: {
    primary: '#0C0032',
    secondary: '#190061',
    tertiary: '#240090',
    quarternary: '#3500d3',
  },
  text: {
    primary: '#ffffff',
    secondary: '#3500d3',
    tertiary: '#7ed0e1',
    quarternary: '#525560',
  },
  mediaQueries: {
    small: `@media screen and (max-width: 768px)`,
    medium: `@media screen and (max-width: 1024px)`,
    large: `@media screen and (max-width: 1200px)`,
  },
}
