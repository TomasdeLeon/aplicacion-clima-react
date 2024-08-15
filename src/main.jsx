import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { WheatherApp } from './WeatherApp'
import './style.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WheatherApp/>
  </StrictMode>,
)
