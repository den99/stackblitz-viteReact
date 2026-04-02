import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'

import books from './ch03/books'
//import MyHello from './ch03/01_MyHello'
//import EventBasic from './ch03/02_EventBasic'
//import StateBasic from './ch03/03_StateBasic'
//import ForList from './ch03/04_ForList'
import ForNest from './ch03/05_01_ForNest'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ForNest src={books} />
    
  </StrictMode>,
)
