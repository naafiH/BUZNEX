import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './nav/nav'
import './index.css'
import Body from "./body/body"
import Footer from "./footer/footer"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Nav />
    <Body/>
    <Footer/>
  </React.StrictMode>,
)
