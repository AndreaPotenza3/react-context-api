import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/AboutUs'
import PostPage from './Pages/PostPage'
import Details from './Pages/Datails'
import DefaultLayout from './Components/DefaultLayout'
import GlobalContext from './context/context'
import axios from "axios"
import { useEffect, useState } from 'react'
export const base_api = 'http://localhost:3000/'

function App() {

  const [newPosts, setNewPosts] = useState([])

  function fetchPosts() {
    axios.get(`${base_api}posts`)
      .then(res => {
        console.log(res.data)
        setNewPosts(res.data)
      }).catch(err => {
        console.error(err)
      })
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <GlobalContext.Provider value={{ fetchPosts, base_api, newPosts }}>
      <BrowserRouter>
        <h1 className='title'>Il Mio Blog</h1>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/blog' element={<PostPage />} />
            <Route path=':id' element={<Details />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  )
}

export default App
