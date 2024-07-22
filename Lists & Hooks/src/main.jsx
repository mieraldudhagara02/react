import React from 'react'
import ReactDOM from 'react-dom/client'
import './CSS/index.css'
import "./CSS/MyClassComponent.css"
import "./CSS/MyFunctionalComponent.css"
import MyFunctionalComponent from './FunctionalComponentLifeCycle'
import MyClassComponent from './ClassComponentLifeCycle'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyClassComponent />
    <MyFunctionalComponent />
  </React.StrictMode>,
)
