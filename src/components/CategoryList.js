import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProductByCategory } from '../features/productSlice';

const CategoryList = ({curElem}) => {
    const dispatch = useDispatch();

    const categoryByProduct = (data) => {
        dispatch(fetchProductByCategory(data));
    }
  return (
    <>
        <Link to="/home/shop" className="nav-item nav-link text-white" onClick={ () => categoryByProduct(curElem)}>
            {curElem}
        </Link>
    </>
  )
}

export default CategoryList