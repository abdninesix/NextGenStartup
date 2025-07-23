import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <div className='px-8 md:px-16 lg:px-32 xl:px-48 overflow-x-hidden duration-200'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/contact' element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
