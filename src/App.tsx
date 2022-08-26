
import './App.css'
import { Header } from './components/Header'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from './page/Home'
import { Hair } from './page/Hair'
import { MakeUp } from './page/MakeUp'
import { Travel } from './page/Travel'
import { Fashion } from './page/Fashion'
import { Footer } from './components/Footer'
import { EachChallenge } from './page/EachChallenge'
import { EachHairCare } from './page/EachHairCare'
import { EachMakeUp } from './page/EachMakeUp'
import { EachTravel } from './page/EachTravel'
import { EachFashion } from './page/EachFashion'

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
        <Route path='/makeup' element={<MakeUp />} />
        <Route path='/makeup/:id' element={<EachMakeUp />} />
        <Route path='/travel' element={<Travel />} />
        <Route path='/travel/:id' element={<EachTravel />} />
        <Route path='/fashion' element={<Fashion />} />
        <Route path='/fashion/:id' element={<EachFashion />} />
      </Routes>
      <Footer />
    </div >
  )
}

export default App
