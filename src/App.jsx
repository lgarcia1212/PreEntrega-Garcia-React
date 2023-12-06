import './App.css'
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './Components/NavBar/Error'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'




function App() {

  return (
    <div>
      <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path={'/'} element={<ItemListContainer />} />
        <Route path={'/category/:id'} element={<ItemListContainer />} />
        <Route path={'/item/:id'} element={<ItemDetailContainer />} />
        <Route path={'*'} element={<Error />} />
      </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
