import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Layout from './Pages/Layout'
import RightArticle from './Pages/RightArticle'
import Blogtitle from './Pages/Blogtitle'
import Dashboard from './Pages/Dashboard'
import Generatedimages from './Pages/Generatedimages'
import Removebackground from './Pages/Removebackground'
import Removeobject from './Pages/Removeobject'
import Reviewresume from './Pages/Reviewresume'
import Community from './Pages/Community'


const App = () => {
  return (
    <div>
     <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/ai'element={<Layout/>}  >
        <Route index element={<Dashboard/>} />
        <Route path='rightarticle' element={<RightArticle/>} />
        <Route path='blogtitle' element={<Blogtitle/>} />
        <Route path='/ai/generateimage' element={<Generatedimages/>} />
        <Route path='removebackgrount' element={<Removebackground/>} />
        <Route path='removeobject' element={<Removeobject/>} />
        <Route path='reviewresume' element={<Reviewresume/>} />
        <Route path='community' element={<Community/>} />
      </Route>
     </Routes>
    </div>
  )
}

export default App