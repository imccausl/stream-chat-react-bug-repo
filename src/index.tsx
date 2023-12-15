import {createRoot} from 'react-dom/client'
import App from './App'
import React from 'react'

const container = document.createElement('div')
createRoot(container!).render(<App />)
