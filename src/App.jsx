import React from 'react'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayouts from "./Layouts/MainLayouts"
import HomePage from "./Pages/HomePage"
import AboutPage from "./Pages/AboutPage"
import AllPropertiespage from './Pages/AllPropertiespage'
import ContactPage from './Pages/ContactPage'
import PropertyPage from './Pages/PropertyPage'
import NotFoundPage from './Pages/NotfoundPage'

const App = () => {
  const Router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayouts/>}>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/properties' element={<AllPropertiespage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/properties/:id' element={<PropertyPage/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Route>
    )
  )
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  )
}

export default App
