import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { PATH_LIST } from '../constants'
import { MainPage, CartPage } from '../pages'

export function Router() {
  return (
    <Routes>
      <Route path={PATH_LIST.ROOT} element={<MainPage />} />
      <Route path={PATH_LIST.CART} element={<CartPage />} />
    </Routes>
  )
}