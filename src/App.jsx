import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import ViewCart from './components/ViewCart'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/viewCart' element={<ViewCart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
