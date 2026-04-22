import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
//import App from './App.jsx'

//import './ch02/class.css'
//import Tic from './ch02/tic-tac-toe'

import books from './ch03/books'
//import MyHello from './ch03/01_MyHello'
//import EventBasic from './ch03/02_EventBasic'
//import StateBasic from './ch03/03_StateBasic'
//import ForList from './ch03/04_ForList'
import ForNest from './ch03/05_01_ForNest'
import ForFilter from './ch03/06_ForFilter';
import SelectStyle from './ch03/08_SelectStyle'
import StyledPanel from './ch03/09_StyledPanel'
import ListTemplate from './ch03/12_ListTemplate'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <ForNest src={books}/>

{/*
    ----ForFilter----
    <ForFilter src={books} />

    ----SelectStyle----
    <SelectStyle mode="dark" />

    ----StyledPanel----
    <StyledPanel>
     <p>メンバー募集中！</p>
     <p>ようこそ、WINGSプロジェクトへ！！</p>
     StyledPanel.js
    </StyledPanel>    

    <ListTemplate src={books}>
      {elem => (
        <>
       <dt>
         <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
             {elem.title}（{elem.price}円）
         </a>
       </dt>
       <dd>{elem.summary}</dd>

        </>
      )}
    </ListTemplate>
*/}
  </StrictMode>,
  )
