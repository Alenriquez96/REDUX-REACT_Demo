import React, { useContext } from 'react'
import {themeContext} from '../../context/themeContext';

function Footer() {

  const {theme} = useContext(themeContext) // hook context

  return (
    <footer className={`footer${theme}`}>Esto es el Footer</footer>
  )
}

export default Footer
