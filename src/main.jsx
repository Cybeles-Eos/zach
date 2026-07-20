import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const basename = import.meta.env.BASE_URL.replace(/\/$/, '')
import './index.css'

import Nav from './assets/components/nav.jsx'
import Home from './assets/pages/home.jsx'
import Project from './assets/pages/project.jsx'
import About from './assets/pages/about.jsx'
import AniHome from './assets/pages/anima_home.jsx'
import NoPage from './assets/pages/404.jsx'
import Quotes from './assets/pages/quotes.jsx'
import Terms from './assets/pages/terms.jsx'
import Privacy from './assets/pages/privacy.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={basename || undefined}>
    <Routes>
      <Route path='/' element={<Nav />}>
        <Route index element={<AniHome />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/project' element={<Project />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/quotes' element={<Quotes />}/>
        <Route path='/privacy-policy' element={<Privacy />}/>
        <Route path='/terms-of-service' element={<Terms />}/>
        <Route path='/*' element={<NoPage />}/>
      </Route>
    </Routes>
  </BrowserRouter>
);
