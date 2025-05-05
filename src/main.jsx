
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Nav from './assets/components/header/nav.jsx'
import Home from './assets/pages/home/home.jsx'
import Project from './assets/pages/project/project.jsx'
import About from './assets/pages/about/about.jsx'

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Routes>
      <Route path='/' element={<Nav />}>
        <Route index element={<Home />}/>
        <Route path='/project' element={<Project />}/>
        <Route path='/about' element={<About />}/>
      </Route>
    </Routes>
  </HashRouter>
)
