
import './App.css'
import { Header } from './components/Header'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from './page/Home'
import { Hair } from './page/Hair'
import { Beauty } from './page/Beauty'
import { Travel } from './page/Travel'
import { Fashion } from './page/Fashion'
import { Footer } from './components/Footer'
import { EachChallenge } from './page/EachChallenge'
import { EachHairCare } from './page/EachHairCare'

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Navigate to='home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/home/:id' element={<EachChallenge />} />
        <Route path='/hair' element={<Hair />} />
        <Route path='/hair/:id' element={<EachHairCare />} />
        <Route path='/beauty' element={<Beauty />} />
        <Route path='/travel' element={<Travel />} />
        <Route path='/fashion' element={<Fashion />} />
      </Routes>
      <Footer />
    </div >
  )
}

export default App
