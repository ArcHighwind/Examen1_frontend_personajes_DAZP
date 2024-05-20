import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TablaUsuarios } from './ComponentScreen/TablaUsuarios';
import { ErrorPage } from './ComponentScreen/ErrorPage';
import { FormPersonajes } from './ComponentScreen/FormPersonajes';

export const App = () => {
  return (
    <>
      

      <BrowserRouter>
        <Routes>
          <Route path='/usuarios' element={<TablaUsuarios/>} />
          <Route path='*' element={<ErrorPage/>} />
          <Route path='/personajes' element={<FormPersonajes/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

