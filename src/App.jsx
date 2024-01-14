import './App.css'
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './Components/NavBar/Error'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import CartProvider from './Components/Context/CartContext'
import Cart from './Components/Cart/Cart'
import CheckOut from './Components/CheckOut/CheckOut'


function App() {
  return (
    <div>
      <BrowserRouter>
      <CartProvider>
      <NavBar />
      <Routes>
        <Route path={'/'} element={<ItemListContainer />} />
        <Route path={'/category/:id'} element={<ItemListContainer />} />
        <Route path={'/item/:id'} element={<ItemDetailContainer />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/checkout"} element={<CheckOut/>}/>
        <Route path={'*'} element={<Error />} />
      </Routes> 
      </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
