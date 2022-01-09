import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import App from './Components/App'
import { CheckProvider } from './context/contextCheck'

ReactDOM.render(
  <React.StrictMode>
    <CheckProvider>
      <App />
    </CheckProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
