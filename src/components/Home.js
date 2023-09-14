import React, { useEffect } from 'react'
import Carousel from './Carousel'
import Feature from './Feature'
import CategoriesFeatures from './CategoriesFeatures'
import ProductOfCategory from './ProductOfCategory'
import { useDispatch } from 'react-redux'
import { fetchProduct } from '../features/productSlice'

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  })
  return (
    <>
        <Carousel/>
        <Feature/>
        <CategoriesFeatures/>
        <ProductOfCategory/>
    </>
  )
}

export default Home